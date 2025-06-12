import Multiplayer from "./Multiplayer";
import MultiOpponent from "./MultiOpponent";
import GameState from "../../Controller/CommonUI/GameState";
import MultiGameFlowController from "../../Controller/Multi/MultiFlowController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiReversecorrectGameController extends cc.Component {
    @property(cc.Node) myGameArea: cc.Node = null;
    @property(cc.Node) opponentGameArea: cc.Node = null;

    @property(cc.Label) myNameLabel: cc.Label = null;
    @property(cc.Sprite) myCharacterSprite: cc.Sprite = null;
    @property([cc.SpriteFrame]) characterSprites: cc.SpriteFrame[] = [];

    @property(cc.Label) guestNameLabel: cc.Label = null;
    @property(cc.Sprite) guestCharacterSprite: cc.Sprite = null;

    private myGame: Multiplayer = null;
    private opponent: MultiOpponent = null;

    onLoad() {
        this.myGame = this.myGameArea.getComponent(Multiplayer);
        this.opponent = this.opponentGameArea.getComponent(MultiOpponent);

        this.setPlayerInfoFromGameState();
        MultiGameFlowController.initializeSocketListeners();

        cc.director.on("spawn-question", (payload) => {
    this.opponent.showQuestion(payload.numbers, payload.direction); // ✅ 여기 OK
});

        cc.director.on("answer-result", (payload) => {
            this.opponent.showResult(payload.input, payload.isCorrect);
        });

        cc.director.on("score-update", (payload) => {
            const isHost = GameState.isHost;
            if ((isHost && payload.player === "guest") || (!isHost && payload.player === "host")) {
                this.opponent.updateScore(payload.score);
            }
        });

        if (!GameState.isHost) {
            const roomId = GameState.createdRoomId || GameState.incomingRoomId;
            window.socket.emit("game-event", {
                type: "guest-ready",
                roomId,
                payload: {}
            });
        }

        this.myGame.startGame();
    }

    setPlayerInfoFromGameState() {
        const isHost = GameState.isHost;
        const myName = GameState.nickname || "나";
        const guestName = isHost ? GameState.guestNickname : GameState.hostNickname;
        const myCharacter = GameState.character || 0;
        const guestCharacter = isHost ? GameState.guestCharacter : GameState.hostCharacter;

        this.myNameLabel.string = myName;
        this.guestNameLabel.string = guestName || "상대";

        this.myCharacterSprite.spriteFrame = this.characterSprites[myCharacter];
        this.guestCharacterSprite.spriteFrame = this.characterSprites[guestCharacter];
    }

    onDestroy() {
        cc.director.off("spawn-question");
        cc.director.off("answer-result");
        cc.director.off("score-update");
    }
    
}
