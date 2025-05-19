const { ccclass, property } = cc._decorator;
import ThreeMatchBoard from "./3MatchBoard";
import GameState from "../../Controller/CommonUI/GameState";

@ccclass
export default class ThreeMatchManager extends cc.Component {
    // @property(cc.Label)
    // timerLabel: cc.Label = null;

    // @property(cc.Label)
    // scoreLabel: cc.Label = null;

    @property(cc.Prefab)
    timerDisplayPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    scoreDisplayPrefab: cc.Prefab = null;


    @property(cc.Node)
    boardNode: cc.Node = null;

    @property(cc.ProgressBar)
    comboGauge: cc.ProgressBar = null;

    @property(cc.Node)
    feverSprite: cc.Node = null;

    @property(cc.Button)
    exitButton: cc.Button = null;


    private totalTime: number = 60;
    private currentTime: number = 60;
    private score: number = 0;

    private timerNode: cc.Node = null;
    private scoreNode: cc.Node = null;

    private timerLabel: cc.Label = null;
    private scoreLabel: cc.Label = null;


    private comboValue: number = 0;
    private comboMax: number = 300;
    private isFeverTime: boolean = false;


    start() {
        GameState.lastGameScene = cc.director.getScene().name;
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

        // 나머지 초기화
        this.comboValue = 0;
        this.comboMax = 200;
        this.comboGauge.progress = 0;
        this.isFeverTime = false;
        this.feverSprite.active = false;

        this.schedule(this.updateTimer, 1);
    }



    updateTimer() {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            this.onGameOver();
        }

        this.timerLabel.string = `${this.currentTime}`;
    }

    updateScore(amount: number) {
        this.score += amount;
        this.scoreLabel.string = `${this.score}`;
        this.increaseComboGauge(amount);
    }

    increaseComboGauge(amount: number) {
        if (this.isFeverTime) return; // 피버타임중엔 게이지 안올라감감
    
        this.comboValue += amount;
        if (this.comboValue >= this.comboMax) { 
            this.comboValue = this.comboMax;
            this.startFeverTime(); // 현재 게이지 값이 맥스값보다 크거나 같아지면 피버타임 메서드 실행
        }
        this.comboGauge.progress = this.comboValue / this.comboMax; // ui실행
    }

    startFeverTime() {
        this.isFeverTime = true;
        this.feverSprite.active = true; // 피버 UI 보여주기
    
    
        // 10초 후 종료
        this.scheduleOnce(() => {
            this.endFeverTime();
        }, 10);
    }

    public addMatchScore(matchCount: number) {
    const scoreToAdd = matchCount * 10;
    const finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
    this.updateScore(finalScore); // 콤보 게이지까지 처리됨
    }

    
    endFeverTime() {
        this.isFeverTime = false; // 피버타임 상태 false로
        this.comboValue = 0; // 현재 콤보 밸류, ui 초기화
        this.comboGauge.progress = 0;
        this.feverSprite.active = false; // 피버 UI 숨기기

    }
    
    onGameOver() {
        cc.log("게임 종료!");
        GameState.lastGameScene = cc.director.getScene().name;
        GameState.score = this.score;
        GameState.gameId = "FruitPuzzle";
        cc.director.loadScene('GameOver');
    }


    loadList(){
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene("GameOver");
    }
}
