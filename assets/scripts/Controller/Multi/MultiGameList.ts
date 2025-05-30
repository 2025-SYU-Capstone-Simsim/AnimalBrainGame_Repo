import GameState from "../CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiGameListController extends cc.Component {
    @property(cc.Node) gameCardContainer: cc.Node = null;
    @property(cc.Prefab) gameCardPrefab: cc.Prefab = null;
    @property(cc.Button) selectButton: cc.Button = null;
    @property(cc.Node) leftArrow: cc.Node = null;
    @property(cc.Node) rightArrow: cc.Node = null;
    @property(cc.Button) BackButton: cc.Button = null;

    private currentIndex: number = 0;
    private cards: cc.Node[] = [];
    private selectedScene: string = null;

    private gameList = [
        { title: '두더지 게임', thumbnail: 'mole_thumb', scene: 'MultiMoleGameScene' },
        { title: '과일 퍼즐', thumbnail: 'three_thumb', scene: '3m_ExplainScene' },
        { title: '블록 개수 세기', thumbnail: 'block_thumb', scene: 'BlockCount_ExplainScene' },
        { title: '기억력 게임', thumbnail: 'remember_thumb', scene: 'RememberGame_ExplainScene' },
        { title: '숫자 뒤집어 맞추기', thumbnail: 'reverse_thumb', scene: 'Reversecorrect_ExplainScene' },
        { title: '집중력 게임', thumbnail: 'concetration_thumb', scene: 'Rottenacorn_Explain_scene' },
        { title: '미로 게임', thumbnail: 'maze_thumb', scene: 'Maze_ExplainScene' },
    ];

    onLoad() {
        cc.debug.setDisplayStats(false);
        this.selectButton.interactable = false;

        cc.log("MultiGameListController onLoad 실행됨");
        cc.log("GameState.isHost =", GameState.isHost);

        this.loadGameCards();

        this.registerArrowEvents(this.leftArrow, this.showPrevCard.bind(this));
        this.registerArrowEvents(this.rightArrow, this.showNextCard.bind(this));
        this.registerButtonEvents(this.selectButton.node, this.onSelectButtonClick.bind(this));
        this.registerButtonEvents(this.BackButton.node, this.onClickMain.bind(this));

        // 게스트는 UI 제어 비활성화
        if (!GameState.isHost) {
            this.selectButton.node.active = false;
            this.leftArrow.active = false;
            this.rightArrow.active = false;
        }

        // 소켓 존재 및 연결 상태 확인
        if (!cc.sys.isNative && window.socket) {
            const roomId = GameState.createdRoomId || GameState.incomingRoomId;

            if (!window.socket.connected) {
                console.warn("소켓이 끊겨 있음. 재연결 시도 중...");
                window.socket.connect();
            }

            // 방 재입장 처리
            if (roomId) {
                cc.log("join-room 재요청:", roomId);
                window.socket.emit("join-room", roomId);
            }

            // 기존 리스너 제거 후 재등록
            window.socket.off("game-event");
            cc.log("기존 socket 리스너 제거 완료");

            cc.log("game-event 리스너 등록 (move-scene / host-left)");
            window.socket.on("game-event", (message: any) => {
                cc.log("game-event 수신:", message);

                switch (message?.type) {
                    case "move-scene":
                        const sceneName = message.payload?.sceneName;
                        if (sceneName) {
                            cc.log("씬 이동 시도:", sceneName);
                            cc.director.loadScene(sceneName);
                        } else {
                            cc.warn("⚠️ sceneName 누락됨:", message);
                        }
                        break;

                    case "host-left":
                        cc.warn("호스트가 방을 나갔습니다. 메인 화면으로 이동합니다.");
                        GameState.resetMultiplay();
                        cc.director.loadScene("MainScene");
                        break;

                    default:
                        cc.warn("알 수 없는 game-event 타입 또는 잘못된 구조:", message);
                }
            });

            // 연결 복구 후 join-room 재전송
            window.socket.on("connect", () => {
                cc.log("소켓 재연결됨. join-room 재전송");
                if (roomId) {
                    window.socket.emit("join-room", roomId);
                }
            });
        }
    }




    registerButtonEvents(node: cc.Node, callback: () => void) {
        node.off(cc.Node.EventType.TOUCH_END);
        node.on(cc.Node.EventType.TOUCH_END, callback);
    }

    registerArrowEvents(node: cc.Node, callback: () => void) {
        node.off(cc.Node.EventType.TOUCH_END);
        node.on(cc.Node.EventType.TOUCH_END, callback);
    }

    loadGameCards() {
        this.gameList.forEach((game, index) => {
            const card = cc.instantiate(this.gameCardPrefab);

            const titleNode = card.getChildByName("GameTitleBox")?.getChildByName("GameTitle");
            if (titleNode && titleNode.getComponent(cc.Label)) {
                titleNode.getComponent(cc.Label).string = game.title;
            }

            const thumbnailNode = card.getChildByName("GameThumbnail");
            if (thumbnailNode && thumbnailNode.getComponent(cc.Sprite)) {
                cc.resources.load(`Images/Common/thumbnails/${game.thumbnail}`, cc.SpriteFrame, (err, spriteFrame) => {
                    if (!err && spriteFrame) {
                        thumbnailNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            card.active = false;
            this.cards.push(card);
            this.gameCardContainer.addChild(card);
        });

        this.showCardAtIndex(0);
    }

    showCardAtIndex(index: number) {
        this.cards.forEach((card, i) => {
            card.active = i === index;
        });
        this.currentIndex = index;
        this.selectScene(this.gameList[index].scene, this.cards[index]);
    }

    showNextCard() {
        const nextIndex = (this.currentIndex + 1) % this.cards.length;
        this.showCardAtIndex(nextIndex);
    }

    showPrevCard() {
        const prevIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.showCardAtIndex(prevIndex);
    }

    private selectScene(sceneName: string, selectedCard: cc.Node) {
        this.selectedScene = sceneName;
        this.gameCardContainer.children.forEach(card => {
            card.scale = card === selectedCard ? 1.1 : 1;
            card.opacity = card === selectedCard ? 255 : 180;
        });
        this.selectButton.interactable = true;
    }

    // MultiGameListController.ts
    onSelectButtonClick() {
        if (!this.selectedScene) return;

        const roomId = GameState.createdRoomId;
        console.log("[onSelectButtonClick] move-scene emit 시도:", this.selectedScene, GameState.isHost, roomId);

        if (GameState.isHost && roomId && window.socket) {
            window.socket.emit("game-event", {
                type: "move-scene",
                payload: { sceneName: this.selectedScene },
                roomId,
            });
        }

        console.log("window.socket 상태:", window.socket && window.socket.connected);
    }

    onClickMain() {
        cc.log("뒤로가기 버튼 클릭됨. Main 씬으로 이동.");
        cc.director.loadScene("MainScene");
    }
}
