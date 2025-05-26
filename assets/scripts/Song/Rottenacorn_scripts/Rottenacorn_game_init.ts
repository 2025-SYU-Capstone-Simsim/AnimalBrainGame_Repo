const { ccclass, property } = cc._decorator;
import GameState from "../../Controller/CommonUI/GameState";
@ccclass
export default class GameInit extends cc.Component {
    @property(cc.Prefab)
    acornPrefab: cc.Prefab = null;

    @property(cc.Node)
    correct_sign: cc.Node = null;

    @property(cc.Node)
    wrong_sign: cc.Node = null;

    @property(cc.Button)
    exitButton: cc.Button = null;

    @property(cc.Prefab)
    timerDisplayPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    scoreDisplayPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameStartOverlayPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameOverUIPrefab: cc.Prefab = null;

    private totalTime: number = 30;
    private currentTime: number = 30;
    private score: number = 0;

    private timerNode: cc.Node = null;
    private scoreNode: cc.Node = null;

    private timerLabel: cc.Label = null;
    private scoreLabel: cc.Label = null;

    onLoad() {
        const manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, 0);
        this.correct_sign.active = false;
        this.wrong_sign.active = false;

        if (this.gameStartOverlayPrefab) {
            const startOverlay = cc.instantiate(this.gameStartOverlayPrefab);
            this.node.addChild(startOverlay);
            startOverlay.setPosition(0, 0);

            cc.tween(startOverlay)
                .delay(1.5)
                .to(0.5, { opacity: 0 })
                .call(() => {
                    startOverlay.destroy();
                    this.startGameLogic();
                })
                .start();
        } else {
            this.startGameLogic();
        }
    }

    startGameLogic() {
        GameState.lastGameScene = cc.director.getScene().name;
        const sceneName = cc.director.getScene().name;

        // 타이머 프리팹 인스턴스화
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.timerLabel.string = `${this.currentTime}`;
        this.schedule(this.updateTimer, 1);

        if (sceneName === 'Rottenacorn_Mainscene') {
            this.timerNode.setPosition(cc.v2(180, 1700));
        } else if (sceneName === 'Rottenacorn_Multiscene') {
            this.timerNode.setPosition(cc.v2(900, 1825));
        }

        // 점수 프리팹 인스턴스화
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);

        // if (sceneName === 'Rottenacorn_Mainscene') {
        //     this.scoreNode.setPosition(cc.v2(850, 1700));
        // } else if (sceneName === 'Rottenacorn_Multiscene') {
        //     this.scoreNode.setPosition(cc.v2(750, 125));
        // }
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

        // GameState 저장
        GameState.lastGameScene = cc.director.getScene().name;
        GameState.score = this.score;
        GameState.gameId = "RottenAcorn"; // 원하는 고유 ID로 설정

        const gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI);
        gameOverUI.setPosition(0, 0);
    }


    loadList() {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
    }
}
