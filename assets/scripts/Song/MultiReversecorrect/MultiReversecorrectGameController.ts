import Multiplayer from "./Multiplayer";
import MultiOpponent from "./MultiOpponent";
import GameState from "../../Controller/CommonUI/GameState";
import MultiGameFlowController from "../../Controller/Multi/MultiFlowController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiReversecorrectGameController extends cc.Component {
    @property(cc.Node) myGameArea: cc.Node = null;
    @property(cc.Node) opponentGameArea: cc.Node = null;

    @property(cc.Node) exitButton: cc.Node = null;

    @property(cc.Label) myNameLabel: cc.Label = null;
    @property(cc.Node) myCharacterNode: cc.Node = null;

    @property(cc.Label) guestNameLabel: cc.Label = null;
    @property(cc.Node) guestCharacterNode: cc.Node = null;

    private myGame: Multiplayer = null;
    private opponent: MultiOpponent = null;

    onLoad() {
        this.myGame = this.myGameArea.getComponent(Multiplayer);
        this.opponent = this.opponentGameArea.getComponent(MultiOpponent);

        this.setPlayerInfoFromGameState();
        MultiGameFlowController.initializeSocketListeners();

        cc.director.on("spawn-question", (payload) => {
            this.opponent.showNewQuestion(payload.numbers, payload.direction);
        });

        cc.director.on("answer-result", (payload) => {
            this.opponent.showAnswerResult(payload.input, payload.isCorrect);
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
    }

    onDestroy() {
        cc.director.off("spawn-question");
        cc.director.off("answer-result");
        cc.director.off("score-update");
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
            if (this.myNameLabel) this.myNameLabel.string = myName;
            if (this.guestNameLabel) this.guestNameLabel.string = guestName;
            this.setCharacterSprite(this.myCharacterNode, myChar);
            this.setCharacterSprite(this.guestCharacterNode, guestChar);
        } else {
            if (this.myNameLabel) this.myNameLabel.string = myName;
            if (this.guestNameLabel) this.guestNameLabel.string = hostName;
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
            } else {
                cc.warn(`Failed to load sprite for: ${path}`);
            }
        });
    }

    loadMain() {
        const roomId = GameState.incomingRoomId || GameState.createdRoomId;
        const playerId = GameState.browserId;
        if (!cc.sys.isNative && window.socket && roomId && playerId) {
            console.log("[MMGC] 'leave-room' emit →", { roomId, playerId });
            window.socket.emit("leave-room", { roomId, playerId });
        }
        GameState.resetMultiplay();
        cc.sys.localStorage.removeItem("isHost");
        cc.director.loadScene("MainScene");
    }
}
