const { ccclass, property } = cc._decorator;
import GameState from "../CommonUI/GameState";

@ccclass
export default class MultiGameListController extends cc.Component {

    @property(cc.Node)
    gameCardContainer: cc.Node = null;

    @property(cc.Prefab)
    gameCardPrefab: cc.Prefab = null;

    @property(cc.Button)
    selectButton: cc.Button = null;

    @property(cc.Node)
    leftArrow: cc.Node = null;

    @property(cc.Node)
    rightArrow: cc.Node = null;

    @property(cc.Button)
    BackButton: cc.Button = null;

    @property(cc.Node)
    choiceContainer: cc.Node = null;

    private currentIndex: number = 0;
    private cards: cc.Node[] = [];
    private selectedScene: string = null;
    private selectedGames: string[] = []; //선택된 게임 추적

    private selectScene(sceneName: string, selectedCard: cc.Node) {
        this.selectedScene = sceneName;
        this.gameCardContainer.children.forEach(card => {
            card.scale = card === selectedCard ? 1.1 : 1;
            card.opacity = card === selectedCard ? 255 : 180;
        });
        this.selectButton.interactable = true;
    }

    private gameList = [
        { title: '두더지 게임', thumbnail: 'mole_thumb', scene: 'Mole_ExplainScene' },
        { title: '과일 퍼즐', thumbnail: 'three_thumb', scene: '3m_ExplainScene' },
        { title: '블록 개수 세기', thumbnail: 'block_thumb', scene: 'BlockCount_ExplainScene' },
        { title: '기억력 게임', thumbnail: 'remember_thumb', scene: 'RememberGame_ExplainScene' },
        { title: '숫자 뒤집어 맞추기', thumbnail: 'reverse_thumb', scene: 'Reversecorrect_ExplainScene' },
        { title: '집중력 게임', thumbnail: 'concetration_thumb', scene: 'Rottenacorn_Explain_scene' },
        { title: '미로 게임', thumbnail: 'maze_thumb', scene: 'Maze_ExplainScene' },
    ];

    onLoad() {
        this.selectButton.interactable = false;
        cc.debug.setDisplayStats(false);

        this.loadGameCards();

        this.registerArrowEvents(this.leftArrow, this.showPrevCard.bind(this));
        this.registerArrowEvents(this.rightArrow, this.showNextCard.bind(this));
        this.registerButtonEvents(this.selectButton.node, this.onSelectButtonClick.bind(this));
        this.registerButtonEvents(this.BackButton.node, this.onClickMain.bind(this));

        // 호스트만 게임 선택 가능
        if (!GameState.isHost) {
            this.selectButton.node.active = false; // 버튼 숨김
            this.leftArrow.active = false;
            this.rightArrow.active = false;
        }
    }


    registerButtonEvents(node: cc.Node, callback: () => void) {
        node.off(cc.Node.EventType.TOUCH_END); // 중복 방지
        node.on(cc.Node.EventType.TOUCH_END, callback);
    }

    registerArrowEvents(node: cc.Node, callback: () => void) {
        node.off(cc.Node.EventType.TOUCH_END); // 중복 방지
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

    public onSelectButtonClick() {
        if (!this.selectedScene || this.selectedGames.length >= 3) return;
        if (this.selectedGames.includes(this.selectedScene)) return;

        this.selectedGames.push(this.selectedScene);

        const choiceIndex = this.selectedGames.length;
        const choiceNode = this.choiceContainer.getChildByName(`EmptyChoice${choiceIndex}`);

        if (choiceNode && choiceNode.getComponent(cc.Sprite)) {
            const imagePath = `Images/Common/Multi/choice${choiceIndex}`;
            cc.resources.load(imagePath, cc.SpriteFrame, (err, spriteFrame) => {
                if (!err && spriteFrame) {
                    choiceNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                }
            });
        }

        cc.log(`선택된 게임 씬: ${this.selectedScene}`);

        // ✅ 3개 선택 시 → 버튼 텍스트 변경
        if (this.selectedGames.length === 3) {
            const label = this.selectButton.getComponentInChildren(cc.Label);
            if (label) label.string = "게임 시작";

            // ✅ 버튼 이벤트 교체
            this.selectButton.node.off(cc.Node.EventType.TOUCH_END);
            this.registerButtonEvents(this.selectButton.node, this.startGameSequence.bind(this));
        }
    }

    private gameIndex: number = 0;

    private startGameSequence() {
        if (this.selectedGames.length === 0) return;

        this.gameIndex = 0;
        this.loadNextGameScene();
    }

    private loadNextGameScene() {
        if (this.gameIndex >= this.selectedGames.length) {
            cc.log("🎉 모든 게임 완료!");
            cc.director.loadScene("MainScene"); // 또는 결과 씬
            return;
        }

        const sceneToLoad = this.selectedGames[this.gameIndex];
        cc.log(`씬 로딩: ${sceneToLoad}`);
        this.gameIndex++;

        cc.director.loadScene(sceneToLoad);
    }



    onClickMain() {
        cc.log("뒤로가기 버튼 클릭됨. Main 씬으로 이동.");
        cc.director.loadScene("MainScene");
    }
}

// 각 게임 최종 종료 시 추가하기 
// GameState.resetMultiplay();  
// cc.director.loadScene("MainScene"); 

