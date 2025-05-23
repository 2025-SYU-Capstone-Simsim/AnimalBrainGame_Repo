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
    pollingTimer: number = null; // ✅ 명확한 변수명으로 변경

    onLoad() {
        cc.debug.setDisplayStats(false);
    }

    start() {
        if (this.StartButton) {
            this.StartButton.on('click', async () => {
                await this.createRoomAndShowInviteLink();
            }, this);
        }

        if (this.backButton) {
            this.backButton.on(cc.Node.EventType.TOUCH_END, () => {
                cc.director.loadScene('MultiWatingPage');
            }, this);
        }

        // GameState 사용
        const nickname = GameState.nickname || '플레이어1';
        if (this.player1Label) this.player1Label.string = nickname;

        const character = GameState.character || 'dog'; // 없을시 기본 캐릭터 dog
        this.setCharacterSprite(this.player1CharacterNode, character);
    }

    async createRoomAndShowInviteLink() {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            cc.log('JWT 토큰이 없습니다. 로그인 먼저 필요');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/create-room', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const result = await response.json();
            if (result.success) {
                this.roomId = result.roomId;
                if (this.ConnectLinkLabel) {
                    this.ConnectLinkLabel.string = result.inviteUrl;
                }
                cc.log(`초대 링크: ${result.inviteUrl}`);
                console.log(`초대 링크 (복사용): ${result.inviteUrl}`);

                this.listenForGuestUpdate();
            } else {
                cc.log('초대 링크 생성 실패:', result.message);
            }
        } catch (err) {
            cc.log('서버 요청 실패:', err.message);
        }
    }

    listenForGuestUpdate() {
        this.checkGuestUpdate(); // 최초 1회
        this.pollingTimer = setInterval(() => {
            this.checkGuestUpdate();
        }, 5000);
    }

    async checkGuestUpdate() {
        try {
            const response = await fetch(`http://localhost:3000/api/room-status/${this.roomId}`);
            const result = await response.json();

            if (result.success && result.data) {
                const data = result.data;
                if (data.guestNickname && data.guestCharacter) {
                    if (this.player2Label) {
                        this.player2Label.string = data.guestNickname;
                    }

                    if (this.player2CharacterNode) {
                        this.setCharacterSprite(this.player2CharacterNode, data.guestCharacter);
                    }
                }
            }
        } catch (err) {
            cc.log('방 상태 확인 실패:', err.message);
        }
    }

    setCharacterSprite(node: cc.Node, characterKey: string) {
        const sprite = node.getComponent(cc.Sprite);
        if (!sprite) {
            cc.warn("스프라이트 컴포넌트가 없습니다:", node.name);
            return;
        }

        if (!['dog', 'rabbit', 'tiger'].includes(characterKey)) {
            characterKey = 'dog';
        }

        const path = `Images/Common/characters/${characterKey}`;

        cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
            if (err) {
                cc.error("스프라이트 로딩 실패:", path, err);
                return;
            }
            sprite.spriteFrame = spriteFrame;
        });
    }

    onDestroy() {
        if (this.pollingTimer) {
            clearInterval(this.pollingTimer);
            this.pollingTimer = null;
        }
    }
}
