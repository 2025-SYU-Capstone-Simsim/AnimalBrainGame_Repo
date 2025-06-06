import Multiplayer from "./Multiplayer";
import MultiOpponent from "./MultiOpponent";
import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiReversecorrectGameController extends cc.Component {
    @property(cc.Node) myGameArea: cc.Node = null;
    @property(cc.Node) opponentGameArea: cc.Node = null;

    private myGame: Multiplayer = null;
    private opponent: MultiOpponent = null;

    onLoad() {
        this.myGame = this.myGameArea.getComponent(Multiplayer);
        this.opponent = this.opponentGameArea.getComponent(MultiOpponent);

        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        if (window.socket && roomId) {
            window.socket.on("game-event", this.onGameEvent.bind(this));
        }

        if (!GameState.isHost) {
            window.socket.emit("game-event", {
                type: "guest-ready",
                roomId,
                payload: {}
            });
        }
    }

    onGameEvent(event: any) {
        const { type, payload } = event;

        switch (type) {
            case "spawn-question":
                this.opponent.showNewQuestion(payload.numbers, payload.direction);
                break;
            case "answer-result":
                this.opponent.showAnswerResult(payload.input, payload.isCorrect);
                break;
            case "score-update":
                const isHost = GameState.isHost;
                if ((isHost && payload.player === "guest") || (!isHost && payload.player === "host")) {
                    this.opponent.updateScore(payload.score);
                }
                break;
        }
    }
}
