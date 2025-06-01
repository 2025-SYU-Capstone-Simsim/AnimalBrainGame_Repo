import MultiplayerMoleController from "./MultiplayerGameScene";
import OpponentMoleViewer from "./MultiGuestViewer";
import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiplayerMoleGameController extends cc.Component {
    @property(cc.Node) myGameArea: cc.Node = null;
    @property(cc.Node) opponentGameArea: cc.Node = null;
    @property(cc.Button) exitButton: cc.Node = null;

    @property(cc.Label) myNameLabel: cc.Label = null;
    @property(cc.Node) myCharacterNode: cc.Node = null;

    @property(cc.Label) guestNameLabel: cc.Label = null;
    @property(cc.Node) guestCharacterNode: cc.Node = null;

    private myGameCtrl: MultiplayerMoleController = null;
    private opponentView: OpponentMoleViewer = null;

    start() {
        this.myGameCtrl = this.myGameArea.getComponent(MultiplayerMoleController);
        this.opponentView = this.opponentGameArea.getComponent(OpponentMoleViewer);

        this.setPlayerInfoFromGameState();

        // 예시: 소켓 이벤트 바인딩 (실제 연결 시 해제)
        // socket.on("spawn-mole", (data) => {
        //     this.opponentView.spawnMoleFromData(data);
        // });
        // socket.on("hit-mole", (data) => {
        //     this.opponentView.hitMoleAnimation(data.index, data.type);
        // });
    }

    setPlayerInfoFromGameState() {
        const isHost = GameState.isHost;

        const myName = GameState.nickname || "나";
        const myChar = GameState.character || "dog";

        const guestName = GameState.guestNickname || "게스트";
        const guestChar = GameState.guestCharacter || "rabbit";

        const hostName = GameState.hostNickname || "호스트";
        const hostChar = GameState.hostCharacter || "tiger";

        if (isHost) {
            if (this.myNameLabel) this.myNameLabel.string = `${myName}`;
            if (this.guestNameLabel) this.guestNameLabel.string = `${guestName}`;
            this.setCharacterSprite(this.myCharacterNode, myChar);
            this.setCharacterSprite(this.guestCharacterNode, guestChar);
        } else {
            if (this.myNameLabel) this.myNameLabel.string = `${myName}`;
            if (this.guestNameLabel) this.guestNameLabel.string = `${hostName}`;
            this.setCharacterSprite(this.myCharacterNode, myChar);
            this.setCharacterSprite(this.guestCharacterNode, hostChar);
        }
    }

    setCharacterSprite(node: cc.Node, characterKey: string) {
        const sprite = node.getComponent(cc.Sprite);
        if (!sprite) return;

        const path = `Images/Common/characters/${characterKey}Head`;
        cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
            if (!err && spriteFrame) {
                sprite.spriteFrame = spriteFrame;
            }
        });
    }

    loadMain() {
        console.log("메인메뉴로 돌아가기");
        const canvas = document.getElementById('GameCanvas');
        if (canvas) canvas.style.cursor = 'default';
        cc.director.loadScene('MainScene');
    }
}
