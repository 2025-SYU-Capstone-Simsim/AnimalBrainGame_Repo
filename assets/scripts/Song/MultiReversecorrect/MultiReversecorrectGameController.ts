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
    start(){
        if (this.exitButton) {
            this.exitButton.on(cc.Node.EventType.TOUCH_END, this.loadMain, this);
        }
        this.setPlayerInfoFromGameState();
    }
    onLoad() {
        this.myGame = this.myGameArea.getComponent(Multiplayer);
        this.opponent = this.opponentGameArea.getComponent(MultiOpponent);

        
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
            const myChar = GameState.character || "dog";
            const guestName = GameState.guestNickname || "게스트";
            const guestChar = GameState.guestCharacter || "rabbit";
            const hostName = GameState.hostNickname || "호스트";
            const hostChar = GameState.hostCharacter || "tiger";
            console.log("[DEBUG] 내 캐릭터 키:", myChar);
            console.log("[DEBUG] 상대 캐릭터 키:", guestChar);
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
    
        // 공통 -> 복붙해도됌
        setCharacterSprite(node: cc.Node, characterKey: string) {
            const sprite = node.getComponent(cc.Sprite);
            if (!sprite){
                console.log("[DEBUG] 스프라이트 컴포넌트 없음:", node.name); 
                return;
            }
            const path = `Images/Common/characters/${characterKey}Head`;
            cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
                console.log(`[DEBUG] 경로: ${path}`);
                console.log("[DEBUG] 로드 에러:", err);
                console.log("[DEBUG] 로드된 spriteFrame:", spriteFrame);
                if (!err && spriteFrame) sprite.spriteFrame = spriteFrame;
            });
        }
    
        // 공통 -> 복붙해도됌
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

    onDestroy() {
        cc.director.off("spawn-question");
        cc.director.off("answer-result");
        cc.director.off("score-update");
    }
    
}
