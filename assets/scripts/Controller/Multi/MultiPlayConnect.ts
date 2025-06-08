import GameState from "../CommonUI/GameState";
const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiPlayConnect extends cc.Component {

    @property(cc.Node)
    StartButton: cc.Node = null;

    @property(cc.Node)
    backButton: cc.Node = null;

    @property(cc.Label)
    ConnectLinkLabel: cc.Label = null;

    @property(cc.Label)
    player1Label: cc.Label = null;

    @property(cc.Node)
    player1CharacterNode: cc.Node = null;

    @property(cc.Label)
    player2Label: cc.Label = null;

    @property(cc.Node)
    player2CharacterNode: cc.Node = null;

    roomId: string = '';
    pollingTimer: number = null;
    private isRoomCreating: boolean = false;

    onLoad() {
        cc.debug.setDisplayStats(false);
    }

    start() {
        cc.log("MultiPlayConnect start() 진입");
        cc.log("GameState.isHost:", GameState.isHost);

        if (this.StartButton) {
            this.StartButton.active = GameState.isHost;
            if (GameState.isHost) {
                cc.log("StartButton 활성화 (Host)");
                this.registerButtonEvents(this.StartButton, this.createRoomAndShowInviteLink.bind(this));
            } else {
                cc.log("Guest는 StartButton 비활성화");
            }
        }

        const nickname = GameState.nickname || '플레이어';
        const character = GameState.character || 'dog';

        if (GameState.isHost) {
            cc.log("Host UI 세팅");
            if (this.player1Label) this.player1Label.string = `닉네임 : ${nickname}`;
            this.setCharacterSprite(this.player1CharacterNode, character);

            // Host일 경우 GameState에 저장된 roomId 사용
            if (GameState.createdRoomId) {
                this.roomId = GameState.createdRoomId;
                this.listenForGuestUpdate(); // 바로 상태 감지 시작
            }

        } else {
            cc.log("Guest UI 세팅");
            if (this.player2Label) this.player2Label.string = `닉네임 : ${nickname}`;
            this.setCharacterSprite(this.player2CharacterNode, character);

            const incomingRoomId = GameState.incomingRoomId;
            if (incomingRoomId) {
                this.roomId = incomingRoomId;
                cc.log("Guest 방 입장 요청:", this.roomId);
                this.joinRoomAsGuest();
            }
        }
    }

    registerButtonEvents(node: cc.Node, callback: () => void) {
        node.off(cc.Node.EventType.TOUCH_END); // 기존 리스너 제거
        node.on(cc.Node.EventType.TOUCH_END, callback);
    }

    async createRoomAndShowInviteLink() {
        if (!GameState.isHost) {
            cc.warn("Guest는 방을 생성할 수 없습니다.");
            return;
        }

        if (this.isRoomCreating) return;
        this.isRoomCreating = true;

        cc.log("createRoomAndShowInviteLink 실행됨");

        const token = localStorage.getItem('jwtToken');
        if (!token) {
            cc.warn("JWT 토큰 없음");
            this.isRoomCreating = false;
            return;
        }

        try {
            const response = await fetch('http://43.201.75.158:3000/multi/room/create-room', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    selectedGameSequence: // 반드시 배열 형태로 포함시켜야 함
                        ["MultiMoleGameScene",
                            "MultiBlockCountGameScene",
                            "MultiRememberGameScene",
                            "Rottenacorn_Multiscene",
                            "Reversecorrect_Multiscene",
                            "Maze_MultiScene"
                        ],
                })
            });

            const result = await response.json();
            cc.log("서버 응답:", result);

            if (result.success) {
                this.roomId = result.roomId;
                GameState.createdRoomId = this.roomId;
                if (this.ConnectLinkLabel) this.ConnectLinkLabel.string = result.inviteUrl;

                cc.log(`생성된 방 코드: ${this.roomId}`);
                cc.log(`초대 링크: ${result.inviteUrl}`);

                this.listenForGuestUpdate();
            }
        } catch (err) {
            cc.log('서버 요청 실패:', err.message);
        } finally {
            this.isRoomCreating = false;
        }
    }

    listenForGuestUpdate() {
        this.checkGuestUpdate();
        this.pollingTimer = setInterval(() => this.checkGuestUpdate(), 3000); // 반응성 개선
    }
    async checkGuestUpdate() {
        if (!this.roomId) {
            cc.warn("roomId 없음. polling 중단됨");
            return;
        }

        try {
            const response = await fetch(`http://43.201.75.158:3000/multi/room/room-status/${this.roomId}`);
            const result = await response.json();

            cc.log("서버 응답:", result);

            // 방이 삭제되었거나 에러가 발생한 경우(방이 없음, 권한 없음 등)
            if (!result.success || !result.data) {
                cc.warn("[checkGuestUpdate] 방이 존재하지 않거나 에러:", result.message);
                this.handleRoomJoinFail();
                return;
            }

            const data = result.data;
            cc.log("현재 status:", data.status);

            if (GameState.isHost) {
                if (data.guestNickname && data.guestCharacter) {
                    GameState.guestNickname = data.guestNickname;
                    GameState.guestCharacter = data.guestCharacter;
                    if (this.player2Label)
                        this.player2Label.string = `닉네임 : ${data.guestNickname}`;
                    this.setCharacterSprite(this.player2CharacterNode, data.guestCharacter);
                }

                // 호스트이면서 상태가 ready일 때만 버튼 접근
                if (data.status === 'ready' && this.StartButton) {
                    cc.log("모든 인원 입장 완료. 게임 시작 가능");
                    const label = this.StartButton.getComponentInChildren(cc.Label);
                    if (label) label.string = "게임 시작 !";
                    this.StartButton.off(cc.Node.EventType.TOUCH_END);
                    this.StartButton.off(cc.Node.EventType.MOUSE_DOWN);
                    this.registerButtonEvents(this.StartButton, this.startGameList.bind(this));
                }
            } else {
                if (data.hostNickname && data.hostCharacter) {
                    GameState.hostNickname = data.hostNickname;
                    GameState.hostCharacter = data.hostCharacter;
                    if (this.player1Label)
                        this.player1Label.string = `닉네임 : ${data.hostNickname}`;
                    this.setCharacterSprite(this.player1CharacterNode, data.hostCharacter);
                }

                // 게스트가 'started' 상태 수신 시 게임 씬으로 이동
                if (data.status === 'started') {
                    cc.log("Host가 게임 시작 → Guest도 MultiGameList 이동");
                    cc.director.loadScene("MultiGameList");
                }
            }
        } catch (err) {
            // 네트워크 에러, 404/401/NOT_FOUND 등 발생 시 메인씬 이동
            cc.error("[checkGuestUpdate] 방 상태 확인 실패(네트워크/삭제):", err.message);
            this.handleRoomJoinFail();
        }
    }

    // 방입장 실패, 방삭제/404/권한없음 등 모든 예외 공통처리 함수로 분리
    handleRoomJoinFail() {
        GameState.resetMultiplay();
        GameState.incomingRoomId = '';
        cc.sys.localStorage.removeItem("isHost");
        localStorage.removeItem("pendingRoomId");
        cc.director.loadScene("MainScene");
    }





    setCharacterSprite(node: cc.Node, characterKey: string) {
        const sprite = node.getComponent(cc.Sprite);
        if (!sprite) return;

        if (!['dog', 'rabbit', 'tiger'].includes(characterKey)) {
            characterKey = 'dog';
        }

        const path = `Images/Common/characters/${characterKey}`;
        cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
            if (!err && spriteFrame) {
                sprite.spriteFrame = spriteFrame;
            }
        });
    }

    async joinRoomAsGuest() {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            this.handleRoomJoinFail();
            return;
        }

        try {
            const response = await fetch(`http://43.201.75.158:3000/multi/room/join-room/${this.roomId}`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) {
                cc.warn("[joinRoomAsGuest] 서버 응답 오류:", response.status, response.statusText);
                this.handleRoomJoinFail();
                return;
            }

            const result = await response.json();
            if (result.success) {
                this.listenForGuestUpdate();
            } else {
                cc.warn("[joinRoomAsGuest] 서버 응답 실패:", result.message);
                this.handleRoomJoinFail();
            }
        } catch (err) {
            cc.error("[joinRoomAsGuest] 네트워크/예외:", err.message);
            this.handleRoomJoinFail();
        }
    }


    onDestroy() {
        if (this.pollingTimer) {
            clearInterval(this.pollingTimer);
            this.pollingTimer = null;
        }
    }


    onClickMain() {
        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        const playerId = GameState.browserId;

        if (window.socket && roomId && playerId) {
            window.socket.emit("leave-room", { roomId, playerId });
        }

        GameState.resetMultiplay();
        GameState.incomingRoomId = '';
        cc.sys.localStorage.removeItem("isHost");
        localStorage.removeItem("pendingRoomId");
        cc.director.loadScene("MainScene");
    }



    async startGameList() {
        cc.log("Host 게임 시작 버튼 클릭됨");

        // 호스트 설정 및 로컬 저장
        GameState.isHost = true;
        cc.sys.localStorage.setItem("isHost", "true");

        try {
            await fetch(`http://43.201.75.158:3000/multi/room/start-game/${this.roomId}`, {
                method: 'POST'
            });

            // polling 중지
            if (this.pollingTimer) {
                clearInterval(this.pollingTimer);
                this.pollingTimer = null;
            }

            cc.director.loadScene("MultiGameList");
        } catch (err) {
            cc.error("start-game API 실패:", err.message);
        }
    }

}
