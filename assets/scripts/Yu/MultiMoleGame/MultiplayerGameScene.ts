// MultiplayerMoleController.ts

// import socket from "../../Socket"; // 실제 소켓 연결 시 사용
const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiplayerMoleController extends cc.Component {
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
    @property(cc.Prefab) molePrefabGood: cc.Prefab = null;
    @property(cc.SpriteFrame) moleHitSprite: cc.SpriteFrame = null;
    @property(cc.SpriteFrame) goodMoleHitSprite: cc.SpriteFrame = null;

    @property(cc.SpriteFrame) hammerSprite: cc.SpriteFrame = null;
    @property(cc.Prefab) timerDisplayPrefab: cc.Prefab = null;
    @property(cc.Prefab) scoreDisplayPrefab: cc.Prefab = null;

    private moleHoles: cc.Node[] = [];
    private holeStates: boolean[] = [];
    private hammerNode: cc.Node = null;
    private timerNode: cc.Node = null;
    private scoreNode: cc.Node = null;
    private timerLabel: cc.Label = null;
    private scoreLabel: cc.Label = null;

    private score: number = 0;
    private timer: number = 30;
    private isGameOver: boolean = false;
    private moleSpawnCallback: Function = null;

    start() {
        this.initGame();
    }

    initGame() {
        this.moleHoles = [
            this.Hole1, this.Hole2, this.Hole3,
            this.Hole4, this.Hole5, this.Hole6,
            this.Hole7, this.Hole8, this.Hole9
        ];
        this.holeStates = new Array(9).fill(false);
        this.score = 0;
        this.timer = 30;
        this.isGameOver = false;

        this.createHammer();
        this.initTimer();
        this.initScore();

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

    initTimer() {
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimerLabel();
    }

    initScore() {
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScoreLabel();
    }

    updateTimerLabel() {
        this.timerLabel.string = `${this.timer}`;
    }

    updateScoreLabel() {
        this.scoreLabel.string = `${this.score}`;
    }

    decreaseTimer() {
        if (this.isGameOver) return;
        this.timer--;
        this.updateTimerLabel();

        if (this.timer <= 0) {
            this.endGame();
        }
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

            // 🔥 socket으로 상대에게도 전송 예정
            // socket.emit("spawn-mole", {
            //     index: idx,
            //     type: isGoodMole ? "good" : "bad",
            //     spawnTime: Date.now()
            // });

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

                cc.tween(mole)
                    .repeat(3,
                        cc.tween()
                            .by(0.05, { angle: 15 })
                            .by(0.05, { angle: -30 })
                            .by(0.05, { angle: 15 })
                    )
                    .delay(0.8)
                    .call(() => {
                        if (mole && mole.isValid) {
                            mole.destroy();
                            this.holeStates[idx] = false;
                        }
                    })
                    .start();
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

    endGame() {
        this.isGameOver = true;
        this.unscheduleAllCallbacks();

        // 상대방도 게임 끝났는지 확인 후 → 다음 게임으로 넘어가는 로직은
        // MultiplayerMoleGameScene.ts에서 통제할 것
        console.log("⏱️ Multiplayer Mole Game 종료됨 (점수:", this.score, ")");
    }
}
