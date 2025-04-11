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

    private totalTime: number = 120;
    private currentTime: number = 120;
    private score: number = 0;

    onLoad() {
        this.schedule(this.updateTimer, 1);
        this.updateScore(0);
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

    public addMatchScore(matchCount: number) {
        this.updateScore(matchCount * 10);
    }

    onGameOver() {
        cc.log("게임 종료!");
        // 이후 게임 종료 처리 추가 가능
    }
}
