const { ccclass, property } = cc._decorator;
import ThreeMatchBoard from "./3MatchBoard";
import GameState from "../../Controller/CommonUI/GameState";

@ccclass
export default class ThreeMatchManager extends cc.Component {
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

    @property(cc.Prefab)
    gameOverUIPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameStartOverlayPrefab: cc.Prefab = null;

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
        if (this.feverSprite && this.feverSprite.isValid) {
            this.feverSprite.active = false;
        }


        if (this.gameStartOverlayPrefab) {
            const startOverlay = cc.instantiate(this.gameStartOverlayPrefab);
            this.node.addChild(startOverlay);
            startOverlay.setPosition(0, 0);

            // 애니메이션 시간 후에 시작 (2초 권장)
            this.scheduleOnce(() => {
                this.startGameLogic();
            }, 2);
        } else {
            this.startGameLogic();
        }
    }

    startGameLogic() {
        // 타이머 UI
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimer();

        // 점수 UI
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);

        // 피버 관련 초기화
        this.comboValue = 0;
        this.comboMax = 300;
        this.comboGauge.progress = 0;
        this.isFeverTime = false;
        if (this.feverSprite) this.feverSprite.active = false;

        // 타이머 시작
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
        this.feverSprite.active = true;

        this.scheduleOnce(() => {
            this.endFeverTime();
        }, 10);
    }

    endFeverTime() {
        this.isFeverTime = false;
        this.comboValue = 0;
        this.comboGauge.progress = 0;
        this.feverSprite.active = false;
    }

    public addMatchScore(matchCount: number) {
        const scoreToAdd = matchCount * 10;
        const finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
        this.updateScore(finalScore);
    }

    onGameOver() {
        cc.log("게임 종료!");
        GameState.lastGameScene = cc.director.getScene().name;
        GameState.score = this.score;
        GameState.gameId = "FruitPuzzle";

        const gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI);
        gameOverUI.setPosition(0, 0);
    }

    loadList() {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene("SingleGameList");
    }
}
