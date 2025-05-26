import show_QnA from "./Reversecorrect_Show_QnA"
const { ccclass, property } = cc._decorator;

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

    @property(cc.Prefab)
    gameStartOverlayPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameOverUIPrefab: cc.Prefab = null;

    private currentTime: number = 10;
    private score: number = 0;
    private timerNode: cc.Node = null;
    private scoreNode: cc.Node = null;
    private timerLabel: cc.Label = null;
    private scoreLabel: cc.Label = null;

    static instance: Game_init = null;

    onLoad() {
        Game_init.instance = this;
        this.correct_sign.active = false;
        this.wrong_sign.active = false;

        if (this.gameStartOverlayPrefab) {
            const startOverlay = cc.instantiate(this.gameStartOverlayPrefab);
            this.node.addChild(startOverlay);
            startOverlay.setPosition(0, 0);

            // 애니메이션 실행
            const anim = startOverlay.getComponent(cc.Animation);
            if (anim) {
                anim.play("GameStartFade");  // <- Animation 이름 (애니메이션 클립 이름)
                anim.once(cc.Animation.EventType.FINISHED, () => {
                    startOverlay.destroy();
                    this.startGameLogic();
                }, this);
            } else {
                // fallback: 1.5초 지연 후 실행
                this.scheduleOnce(() => {
                    startOverlay.destroy();
                    this.startGameLogic();
                }, 1.5);
            }
        } else {
            this.startGameLogic();
        }
    }


    startGameLogic() {
        const sceneName = cc.director.getScene().name;

        // 타이머 생성
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimerLabel();
        this.timerNode.setPosition(sceneName === 'Reversecorrect_mainscene' ? cc.v2(-300, 800) : cc.v2(380, 900));

        // 점수 생성
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);
        this.scoreNode.setPosition(sceneName === 'Reversecorrect_mainscene' ? cc.v2(300, 800) : cc.v2(200, -830));

        this.schedule(this.updateTimer, 1);
    }

    updateTimer() {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            show_QnA.isGameOver = true;
            this.qna.setButtonsInteractable(false);
            this.onGameOver();
        }
        this.updateTimerLabel();
    }

    updateTimerLabel() {
        this.timerLabel.string = `${this.currentTime}`;
    }

    public updateScore(value: number) {
        this.score += value;
        this.scoreLabel.string = `${this.score}`;
    }

    onGameOver() {
        cc.log("게임 종료!");
        const gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI);
        gameOverUI.setPosition(0, 0);
    }

    loadList() {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
    }
}
