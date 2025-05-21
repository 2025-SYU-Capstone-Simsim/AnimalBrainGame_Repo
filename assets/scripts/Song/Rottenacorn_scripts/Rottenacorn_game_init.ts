const { ccclass, property } = cc._decorator;

@ccclass
export default class GameInit extends cc.Component {
    @property(cc.Prefab)
    acornPrefab: cc.Prefab = null;
    @property(cc.Node)
    correct_sign: cc.Node= null;
    @property(cc.Node)
    wrong_sign: cc.Node = null;
    @property(cc.Button)
    exitButton: cc.Button = null;
    @property(cc.Prefab)
    timerDisplayPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    scoreDisplayPrefab: cc.Prefab = null;
    private totalTime: number = 60;
    private currentTime: number = 60;
    private score: number = 0;

    private timerNode: cc.Node = null;
    private scoreNode: cc.Node = null;

    private timerLabel: cc.Label = null;
    private scoreLabel: cc.Label = null;
    start() {
        // 타이머 프리팹 인스턴스화
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimer();

        // 점수 프리팹 인스턴스화
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);
        this.schedule(this.updateTimer, 1);
    }
    public updateScore(amount: number) {
        this.score+=amount;
        this.scoreLabel.string = `${this.score}`;
    }
    updateTimer() {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
        }
        
        this.timerLabel.string = `${this.currentTime}`;
    }

    loadList(){
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
      }
    onLoad() {
        const manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, 0);
        this.wrong_sign.active=false;
        this.correct_sign.active=false;
    }
}
