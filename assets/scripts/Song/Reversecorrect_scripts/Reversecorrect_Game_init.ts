import show_QnA from "./Reversecorrect_Show_QnA"
const {ccclass, property} = cc._decorator;
@ccclass
export default class Game_init extends cc.Component {
    @property(show_QnA)
    qna: show_QnA = null;
    @property(cc.Button)
    exitButton: cc.Button = null;
    @property(cc.Node)
    correct_sign: cc.Node = null;
    @property(cc.Node)
    wrong_sign: cc.Node = null;
    @property(cc.Prefab)
    timerDisplayPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    scoreDisplayPrefab: cc.Prefab = null;
    private currentTime: number = 120;
    private score: number = 0;
    private totalTime: number = 60;
    private timerNode: cc.Node = null;
    private scoreNode: cc.Node = null;
    private timerLabel: cc.Label = null;
    private scoreLabel: cc.Label = null;
    static instance: Game_init = null;
    start () {
        const sceneName = cc.director.getScene().name;
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimer();
        if(sceneName === 'Reversecorrect_mainscene'){
            this.timerNode.setPosition(cc.v2(-300, 800)); 
        }
        else if (sceneName ==='Reversecorrect_Multiscene'){
            this.timerNode.setPosition(cc.v2(380, 900)); 
        }
        // 점수 프리팹 인스턴스화
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);
        if(sceneName === 'Reversecorrect_mainscene'){
            this.scoreNode.setPosition(cc.v2(300, 800));  
        }
        else if (sceneName ==='Reversecorrect_Multiscene'){
            this.scoreNode.setPosition(cc.v2(200, -830));  
        }
        this.schedule(this.updateTimer, 1);
    }
    updateTimer() {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            show_QnA.isGameOver = true;
            this.qna.setButtonsInteractable(false);
        }
        this.timerLabel.string = `${this.currentTime}`;
    }
    public updateScore(value: number) {
        this.score += value;
        this.scoreLabel.string = `${this.score}`;
    }
    loadList(){
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
      }
      onLoad(){
        Game_init.instance = this;
        this.schedule(this.updateTimer,1);
        this.wrong_sign.active=false;
        this.correct_sign.active=false; 
    }
}
