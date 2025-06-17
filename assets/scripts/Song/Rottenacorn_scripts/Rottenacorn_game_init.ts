const { ccclass, property } = cc._decorator;
import GameState from "../../Controller/CommonUI/GameState";

@ccclass
export default class GameInit extends cc.Component {
    @property(cc.Node)
    correct_sign: cc.Node = null;

    @property(cc.Node)
    wrong_sign: cc.Node = null;

    @property(cc.Button)
    exitButton: cc.Button = null;

    @property(cc.Node)
    scoreNode: cc.Node = null;

    @property(cc.Node)
    timerNode: cc.Node = null;

    @property(cc.Node)
    gameStartOverlay: cc.Node = null;

    @property(cc.Node)
    gameOverUI: cc.Node = null;

    private scoreLabel: cc.Label = null;
    private timerLabel: cc.Label = null;

    private totalTime: number = 30;
    private currentTime: number = 30;
    private score: number = 0;

    onLoad() {
        if (this.gameOverUI) {
            this.gameOverUI.active = false;
        }
        // 물리 매니저 설정
        const manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, 0);

        // 정답/오답 비활성화
        this.correct_sign.active = false;
        this.wrong_sign.active = false;

        // 타이머/점수 라벨 연결
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);

        this.updateScore(0);
        this.timerLabel.string = `${this.currentTime}`;
        this.schedule(this.updateTimer, 1);

        // 게임 시작 오버레이 보여주기
        if (this.gameStartOverlay) {
            this.gameStartOverlay.active = true;
            this.gameStartOverlay.setPosition(0, 0);

            cc.tween(this.gameStartOverlay)
                .delay(1.5)
                .to(0.5, { opacity: 0 })
                .call(() => {
                    this.gameStartOverlay.active = false;
                    this.startGameLogic();
                })
                .start();
        } else {
            this.startGameLogic();
        }
    }

    startGameLogic() {
        GameState.lastGameScene = cc.director.getScene().name;
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

    public updateScore(amount: number) {
        this.score += amount;
        this.scoreLabel.string = `${this.score}`;
    }

    onGameOver() {
        cc.log("게임 종료!");

        GameState.lastGameScene = cc.director.getScene().name;
        GameState.score = this.score;
        GameState.gameId = "RottenAcorn";

        if (this.gameOverUI) {
            this.gameOverUI.active = true;
            this.gameOverUI.setPosition(0, 0);
        }
    }

    loadList() {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
    }
}
