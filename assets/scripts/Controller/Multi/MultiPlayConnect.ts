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

    onLoad() {
        cc.debug.setDisplayStats(false);
    }

    start() {
        if (this.StartButton) {
            this.registerButtonEvents(this.StartButton, this.createRoomAndShowInviteLink.bind(this));
        }

        if (this.backButton) {
            this.registerButtonEvents(this.backButton, () => {
                cc.director.loadScene('MultiWatingPage');
            });
        }

        const nickname = GameState.nickname || '플레이어1';
        if (this.player1Label) this.player1Label.string = nickname;

        const character = GameState.character || 'dog';
        this.setCharacterSprite(this.player1CharacterNode, character);

        const params = new URLSearchParams(window.location.search);
        const incomingRoomId = params.get("roomId");

        if (incomingRoomId) {
            this.roomId = incomingRoomId;
            cc.log("📥 초대 링크로 입장한 roomId:", this.roomId);
            this.joinRoomAsGuest();
        }
    }

    registerButtonEvents(node: cc.Node, callback: () => void) {
        node.on(cc.Node.EventType.TOUCH_END, callback);
        node.on(cc.Node.EventType.MOUSE_DOWN, callback);
    }

    async createRoomAndShowInviteLink() {
        const token = localStorage.getItem('jwtToken');
        if (!token) return;

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
                if (this.ConnectLinkLabel) this.ConnectLinkLabel.string = result.inviteUrl;
                this.listenForGuestUpdate();
            }
        } catch (err) {
            cc.log('서버 요청 실패:', err.message);
        }
    }

    listenForGuestUpdate() {
        this.checkGuestUpdate();
        this.pollingTimer = setInterval(() => this.checkGuestUpdate(), 5000);
    }

    async checkGuestUpdate() {
        try {
            const response = await fetch(`http://localhost:3000/api/room-status/${this.roomId}`);
            const result = await response.json();

            if (result.success && result.data) {
                const data = result.data;
                if (data.guestNickname && data.guestCharacter) {
                    if (this.player2Label) this.player2Label.string = data.guestNickname;
                    this.setCharacterSprite(this.player2CharacterNode, data.guestCharacter);
                }
            }
        } catch (err) {
            cc.log('방 상태 확인 실패:', err.message);
        }
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
        if (!token) return;

        try {
            const response = await fetch(`http://localhost:3000/api/join-room/${this.roomId}`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            const result = await response.json();
            if (result.success) {
                this.listenForGuestUpdate();
            }
        } catch (err) {
            cc.error("게스트 입장 실패:", err.message);
        }
    }

    onDestroy() {
        if (this.pollingTimer) {
            clearInterval(this.pollingTimer);
            this.pollingTimer = null;
        }
    }
}
