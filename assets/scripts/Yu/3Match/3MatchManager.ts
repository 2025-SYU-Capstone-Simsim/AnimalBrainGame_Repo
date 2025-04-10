const { ccclass, property } = cc._decorator;
import ThreeMatchBoard from "./3MatchBoard";

@ccclass("ThreeMatchManager")
export default class ThreeMatchManager extends cc.Component {
    @property(cc.Label)
    timerLabel: cc.Label = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Node)
    boardNode: cc.Node = null; // Board 노드 직접 연결

    private totalTime: number = 120;  // 제한 시간 2분
    private currentTime: number = 120;
    private score: number = 0;
    private currentStage: number = 1;

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
        this.checkStageUpgrade();  // 점수 업데이트마다 단계 확인
    }

    onGameOver() {
        cc.log("게임 종료!");
        // 게임 종료 처리
    }

    public addMatchScore(matchCount: number) {
        this.updateScore(matchCount * 10);
    }

    private checkStageUpgrade() {
        const board = this.boardNode.getComponent(ThreeMatchBoard) as any;

        if (this.currentStage === 1 && this.score >= 200) {
            this.currentStage = 2;
            cc.log("2단계");
            board.resetBoard(7);
        } else if (this.currentStage === 2 && this.score >= 500) {
            this.currentStage = 3;
            cc.log("3단계");
            board.resetBoard(10);
        }
    }
}
