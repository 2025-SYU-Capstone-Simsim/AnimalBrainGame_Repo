const { ccclass, property } = cc._decorator;
import ThreeMatchBoard from "./3MatchBoard";

@ccclass
export default class ThreeMatchManager extends cc.Component {
    @property(cc.Label)
    timerLabel: cc.Label = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Node)
    boardNode: cc.Node = null;

    @property(cc.ProgressBar)
    comboGauge: cc.ProgressBar = null;

    @property(cc.Node)
    feverLabel: cc.Node = null;


    private totalTime: number = 120;
    private currentTime: number = 120;
    private score: number = 0;

    private comboValue: number = 0;
    private comboMax: number = 300;
    private isFeverTime: boolean = false;


    onLoad() {
        this.schedule(this.updateTimer, 1);
        this.updateScore(0);
            // 콤보 게이지 관련 초기화
        this.comboValue = 0;
        this.comboMax = 200; // 혹은 필요에 따라 값 설정
        this.comboGauge.progress = 0;


        // 피버타임 UI 초기화
        this.isFeverTime = false;
        this.feverLabel.active = false;

        // const label = this.feverLabel.getComponent(cc.Label);
        // label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        // label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        // label.overflow = cc.Label.Overflow.SHRINK;  // 너무 길면 축소

    }

    updateTimer() {
        this.currentTime--;

        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            this.onGameOver();
        }

        this.timerLabel.string = `시간: ${this.currentTime}`;
    }

    updateScore(amount: number) {
        this.score += amount;
        this.scoreLabel.string = `${this.score}`;
        // 점수 획득시 콤보게이지 추가 메서드 실행    
        this.increaseComboGauge(amount);  
    }
    
    public addMatchScore(matchCount: number) {

        const scoreToAdd = matchCount * 10; // 피버 아닐 때 점수 추가
    
        // 피버타임이면 점수 2배로 설정
        const finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
    
        this.updateScore(finalScore);
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
        this.feverLabel.active = true; // 피버 UI 보여주기
    
    
        // 10초 후 종료
        this.scheduleOnce(() => {
            this.endFeverTime();
        }, 10);
    }
    
    endFeverTime() {
        this.isFeverTime = false; // 피버타임 상태 false로
        this.comboValue = 0; // 현재 콤보 밸류, ui 초기화
        this.comboGauge.progress = 0;
        this.feverLabel.active = false; // 피버 UI 숨기기

    }
    
    

    onGameOver() {
        cc.log("게임 종료!");
        // 이후 게임 종료 처리 추가 가능
    }
}
