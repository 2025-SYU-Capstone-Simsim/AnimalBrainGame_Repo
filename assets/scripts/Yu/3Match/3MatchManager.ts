const { ccclass, property } = cc._decorator;

@ccclass("ThreeMatchManager")
export default class ThreeMatchManager extends cc.Component {
    @property(cc.Label)
    timerLabel: cc.Label = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    private totalTime: number = 60;  // 제한 시간 60초
    private currentTime: number = 60;
    private score: number = 0;

    onLoad() {
        this.schedule(this.updateTimer, 1);
        this.updateScore(0);  // 초기 점수 표시
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
    }

    onGameOver() {
        cc.log("게임 종료!");
        // 이후 게임 종료 UI 띄우거나 리셋 가능
    }

    /** 외부에서 점수 추가할 때 호출할 수 있음 */
    public addMatchScore(matchCount: number) {
        this.updateScore(matchCount * 10);  // 기본 점수 로직
    }
}
