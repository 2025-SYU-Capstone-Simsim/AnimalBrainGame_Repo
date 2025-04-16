const { ccclass, property } = cc._decorator;
import ThreeMatchBoard from "./3MatchBoard";

@ccclass("ThreeMatchManager")
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
        // // FeverLabel을 화면 정중앙 상단에 배치
        // this.feverLabel.anchorX = 0.5;
        // this.feverLabel.anchorY = 1; // 상단 정렬
            
        // // 해상도 기준으로 화면 상단 중앙 위치
        // this.feverLabel.setPosition(0, this.node.height / 2); ;

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

        this.timerLabel.string = `남은 시간: ${this.currentTime}`;
    }

    updateScore(amount: number) {
        this.score += amount;
        this.scoreLabel.string = `획득 점수: ${this.score}`;
    
        // (추가될 콤보 게이지 관련 처리도 여기서 하면 됨)
        this.increaseComboGauge(amount);  // 예시
    }
    
    public addMatchScore(matchCount: number) {
        const scoreToAdd = matchCount * 10;
    
        // 피버타임이면 2배로
        const finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
    
        this.updateScore(finalScore);
    }
    

    increaseComboGauge(amount: number) {
        if (this.isFeverTime) return;
    
        this.comboValue += amount;
        if (this.comboValue >= this.comboMax) {
            this.comboValue = this.comboMax;
            this.startFeverTime();
        }
        this.comboGauge.progress = this.comboValue / this.comboMax;
    }

    startFeverTime() {
        this.isFeverTime = true;
        this.feverLabel.active = true; // 피버 UI 보여주기
        cc.log("🔥 피버타임 시작!");
    
        // 10초 후 종료
        this.scheduleOnce(() => {
            this.endFeverTime();
        }, 10);
    }
    
    endFeverTime() {
        this.isFeverTime = false;
        this.comboValue = 0;
        this.comboGauge.progress = 0;
        this.feverLabel.active = false; // 피버 UI 숨기기
        cc.log("💤 피버타임 종료");
    }
    
    

    onGameOver() {
        cc.log("게임 종료!");
        // 이후 게임 종료 처리 추가 가능
    }
}
