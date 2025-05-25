import GameState from "../../Controller/CommonUI/GameState";
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {
    @property(cc.Button) exitButton: cc.Node = null;

    @property(cc.Node) Hole1: cc.Node = null;
    @property(cc.Node) Hole2: cc.Node = null;
    @property(cc.Node) Hole3: cc.Node = null;
    @property(cc.Node) Hole4: cc.Node = null;
    @property(cc.Node) Hole5: cc.Node = null;
    @property(cc.Node) Hole6: cc.Node = null;
    @property(cc.Node) Hole7: cc.Node = null;
    @property(cc.Node) Hole8: cc.Node = null;
    @property(cc.Node) Hole9: cc.Node = null;

    @property(cc.Prefab) molePrefab: cc.Prefab = null;
    @property(cc.Prefab) molePrefabGood: cc.Prefab = null; // 순한 두더지
    @property(cc.SpriteFrame) hammerSprite: cc.SpriteFrame = null;
    // @property(cc.Prefab) hitParticlePrefab: cc.Prefab = null; 
    @property(cc.Prefab) timerDisplayPrefab: cc.Prefab = null;
    @property(cc.Prefab) scoreDisplayPrefab: cc.Prefab = null;

    @property(cc.SpriteFrame) moleHitSprite: cc.SpriteFrame = null;
    @property(cc.SpriteFrame) goodMoleHitSprite: cc.SpriteFrame = null;

    // 게임 종료 오버레이 
    @property(cc.Prefab)
    gameOverUIPrefab: cc.Prefab = null;

    // 게임 시작 오버레이
    @property(cc.Prefab)
    gameStartOverlayPrefab: cc.Prefab = null;




    private hammerNode: cc.Node = null;
    private moleHoles: cc.Node[] = [];
    private holeStates: boolean[] = [];
    private score: number = 0;
    private timer: number = 30;
    private timerNode: cc.Node = null;
    private timerLabel: cc.Label = null;
    private scoreNode: cc.Node = null;
    private scoreLabel: cc.Label = null;
    private isGameOver: boolean = false;
    private moleSpawnCallback: Function = null;

    start() {
        GameState.lastGameScene = cc.director.getScene().name;

        //  Game Start 오버레이 띄우기
        if (this.gameStartOverlayPrefab) {
            const startOverlay = cc.instantiate(this.gameStartOverlayPrefab);
            this.node.addChild(startOverlay);
            startOverlay.setPosition(0, 0);

            // 오버레이가 자동 제거되도록 설정돼 있으므로 약간 대기 후 게임 로직 실행
            this.scheduleOnce(() => {
                this.startGameLogic();
            }, 1); // 총 애니메이션 길이에 따라 조정 
        } else {
            this.startGameLogic(); // 프리팹이 없을 경우 바로 시작
        }
    }


    startGameLogic() {
        this.moleHoles = [
            this.Hole1, this.Hole2, this.Hole3,
            this.Hole4, this.Hole5, this.Hole6,
            this.Hole7, this.Hole8, this.Hole9
        ];
        this.holeStates = new Array(this.moleHoles.length).fill(false);
        this.createHammer();
        this.score = 0;

        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimerLabel();

        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScoreLabel();

        this.schedule(this.decreaseTimer, 1);
        this.spawnMoles();
    }


    createHammer() {
        this.hammerNode = new cc.Node("Hammer");
        const sprite = this.hammerNode.addComponent(cc.Sprite);
        sprite.spriteFrame = this.hammerSprite;
        this.hammerNode.parent = this.node;
        this.hammerNode.zIndex = 999;
        this.hammerNode.setContentSize(200, 200);
        this.hammerNode.anchorX = 0.2;
        this.hammerNode.anchorY = 0.2;
        this.hammerNode.active = false;
    }

    decreaseTimer() {
        if (this.isGameOver) return;
        this.timer--;
        this.updateTimerLabel();
        if (this.timer <= 0) this.gameOver();
    }

    updateScoreLabel() {
        this.scoreLabel.string = `${this.score}`;
    }

    updateTimerLabel() {
        this.timerLabel.string = `${this.timer}`;
    }

    spawnMoles() {
        if (this.moleSpawnCallback) this.unschedule(this.moleSpawnCallback);

        this.moleSpawnCallback = () => {
            if (this.isGameOver) return;

            const available = this.holeStates
                .map((v, i) => (!v ? i : -1))
                .filter(i => i !== -1);
            if (available.length === 0) return;

            const idx = available[Math.floor(Math.random() * available.length)];
            const hole = this.moleHoles[idx];

            const isGoodMole = Math.random() < 0.3;
            const mole = cc.instantiate(isGoodMole ? this.molePrefabGood : this.molePrefab);
            mole.name = "Mole";
            hole.addChild(mole);
            mole.setPosition(0, -130);
            mole.active = true;
            this.holeStates[idx] = true;

            const onHit = (e: cc.Event.EventTouch) => {
                e.stopPropagation();
                if (!mole.active || this.isGameOver) return;

                const worldPos = mole.convertToWorldSpaceAR(cc.v2(0, 0));
                const localPos = this.node.convertToNodeSpaceAR(worldPos);
                this.showHammerEffect(localPos);

                const sprite = mole.getComponent(cc.Sprite);
                if (sprite) {
                    sprite.spriteFrame = isGoodMole ? this.goodMoleHitSprite : this.moleHitSprite;
                }

                this.score += isGoodMole ? -10 : 10;
                this.updateScoreLabel();

                mole.off(cc.Node.EventType.TOUCH_END, onHit, this);

                // 흔들리는 애니메이션
                cc.tween(mole)
                    .repeat(3,
                        cc.tween()
                            .by(0.05, { angle: 15 })
                            .by(0.05, { angle: -30 })
                            .by(0.05, { angle: 15 })
                    )
                    .delay(0.8) // 애니메이션 후 표정 유지 시간
                    .call(() => {
                        if (mole && mole.isValid) {
                            mole.destroy();
                            this.holeStates[idx] = false;
                        }
                    })
                    .start();

                // 파티클 효과 주석 처리
                // const hit = cc.instantiate(this.hitParticlePrefab);
                // hit.setPosition(mole.getPosition());
                // hole.addChild(hit);
            };

            mole.on(cc.Node.EventType.TOUCH_END, onHit, this);

            cc.tween(mole)
                .to(0.2, { position: cc.v3(0, -20) }, { easing: 'sineOut' })
                .delay(1.0)
                .call(() => {
                    if (mole.isValid) {
                        mole.off(cc.Node.EventType.TOUCH_END, onHit, this);
                        mole.destroy();
                        this.holeStates[idx] = false;
                    }
                })
                .start();
        };

        this.schedule(this.moleSpawnCallback, 0.5, cc.macro.REPEAT_FOREVER);
    }

    showHammerEffect(pos: cc.Vec2) {
        this.hammerNode.setPosition(pos);
        this.hammerNode.active = true;

        cc.tween(this.hammerNode)
            .set({ scale: 1.0 })
            .parallel(
                cc.tween().to(0.05, { scale: 1.2 }, { easing: 'cubicOut' }),
                cc.tween().by(0.05, { position: cc.v3(0, -30) })
            )
            .parallel(
                cc.tween().to(0.1, { scale: 1.0 }, { easing: 'bounceOut' }),
                cc.tween().by(0.1, { position: cc.v3(0, 30) })
            )
            .call(() => {
                this.hammerNode.active = false;
            })
            .start();
    }

    gameOver() {
        if (this.isGameOver) return;
        this.isGameOver = true;

        if (this.moleSpawnCallback) this.unschedule(this.moleSpawnCallback);
        this.unscheduleAllCallbacks();
        this.timer = 0;
        this.updateTimerLabel();

        this.moleHoles.forEach(hole => {
            const mole = hole.getChildByName("Mole");
            if (mole) mole.active = false;
        });

        this.hammerNode.active = false;

        console.log("게임 종료!");
        GameState.lastGameScene = cc.director.getScene().name;
        GameState.score = this.score;
        GameState.gameId = "Molegame";

        // 게임종료 Prefab 생성
        const gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI);  // 또는 Canvas에 직접 붙여도 됨

        // 정중앙 배치
        gameOverUI.setPosition(0, 0);
    }



    loadList() {
        console.log("싱글 게임 리스트로 돌아가기");
        const canvas = document.getElementById('GameCanvas');
        if (canvas) canvas.style.cursor = 'default';
        cc.director.loadScene('SingleGameList');
    }
}
