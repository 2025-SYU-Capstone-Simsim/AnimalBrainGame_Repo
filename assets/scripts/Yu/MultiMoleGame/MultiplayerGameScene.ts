// MultiplayerMoleController.ts
import GameState from "../../Controller/CommonUI/GameState";
import MultiGameFlowController from "../../Controller/Multi/MultiFlowController";
const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerMoleGameScene extends cc.Component {
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

  public score: number = 0;
  private timer: number = 30;
  public isGameOver: boolean = false;
  private moleSpawnCallback: Function = null;

  /** 
   * MultiGameFlowController에서 game-start 이벤트를 받으면
   * cc.director.emit("multi-game-start")를 트리거. 
   * 여기서 startGame()이 호출됨
   */
  public startGame() {
    this.initGame();
  }

  private initGame() {
    this.moleHoles = [
      this.Hole1, this.Hole2, this.Hole3,
      this.Hole4, this.Hole5, this.Hole6,
      this.Hole7, this.Hole8, this.Hole9
    ];
    this.holeStates = new Array(9).fill(false);
    this.score = 0;
    this.timer = 10;
    this.isGameOver = false;

    this.createHammer();
    this.initTimer();
    this.initScore();

    this.schedule(this.decreaseTimer, 1);
    this.spawnMoles();
  }

  private createHammer() {
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

  private initTimer() {
    this.timerNode = cc.instantiate(this.timerDisplayPrefab);
    this.node.addChild(this.timerNode);
    this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
    this.updateTimerLabel();
  }

  private initScore() {
    this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
    this.node.addChild(this.scoreNode);
    this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
    this.updateScoreLabel();
  }

  private updateTimerLabel() {
    this.timerLabel.string = `${this.timer}`;
  }

  private updateScoreLabel() {
    this.scoreLabel.string = `${this.score}`;
  }

  private decreaseTimer() {
    if (this.isGameOver) return;
    this.timer--;
    this.updateTimerLabel();

    if (this.timer <= 0) {
      this.endGame();
    }
  }

  private spawnMoles() {
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

      // (A) 터치 이벤트 등록: 두더지 터치 시 동작
      mole.on(
        cc.Node.EventType.TOUCH_END,
        (e: cc.Event.EventTouch) => {
          e.stopPropagation();
          if (!mole.active || this.isGameOver) return;

          // (1) 햄머 이펙트 재생
          const worldPos = mole.convertToWorldSpaceAR(cc.v2(0, 0));
          const localPos = this.node.convertToNodeSpaceAR(worldPos);
          this.showHammerEffect(localPos);

          // (2) 히트 스프라이트로 교체
          const sprite = mole.getComponent(cc.Sprite);
          if (sprite) {
            sprite.spriteFrame = isGoodMole ? this.goodMoleHitSprite : this.moleHitSprite;
          }

          // (3) 점수 계산 및 UI 업데이트
          this.score += isGoodMole ? -10 : 10;
          this.updateScoreLabel();

          // (4) “hit-mole”과 “score-update” 네트워크 전송
          const roomId = GameState.createdRoomId || GameState.incomingRoomId;
          if (!cc.sys.isNative && window.socket && roomId) {
            window.socket.emit("game-event", {
              type: "hit-mole",
              roomId, // 이거 빼먹으면 안됌
              payload: {
                index: idx,
                moleType: isGoodMole ? "good" : "bad"
              }
            });
            // 공통 이벤트
            window.socket.emit("game-event", {
              type: "score-update",
              roomId,
              payload: {
                player: GameState.isHost ? "host" : "guest",
                score: this.score
              }
            });
          }

          // (5) 동일 두더지에 터치 이벤트 중복 발생 방지
          mole.off(cc.Node.EventType.TOUCH_END, null, this);

          // (6) 히트 애니메이션 후 두더지 제거
          cc.tween(mole)
            .repeat(
              3,
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
        },
        this
      );

      // (B) 기본 스폰 애니메이션 후 타임아웃 시 제거
      cc.tween(mole)
        .to(0.2, { position: cc.v3(0, -20) }, { easing: "sineOut" })
        .delay(1.0)
        .call(() => {
          if (mole.isValid) {
            mole.off(cc.Node.EventType.TOUCH_END, null, this);
            mole.destroy();
            this.holeStates[idx] = false;
          }
        })
        .start();

      // (C) “spawn-mole” 네트워크 브로드캐스트
      const roomId = GameState.createdRoomId || GameState.incomingRoomId;
      if (!cc.sys.isNative && window.socket && roomId) {
        window.socket.emit("game-event", {
          type: "spawn-mole",
          roomId,
          payload: {
            index: idx,
            type: isGoodMole ? "good" : "bad",
            spawnTime: Date.now()
          }
        });
      }
    };

    this.schedule(this.moleSpawnCallback, 1, cc.macro.REPEAT_FOREVER);
  }

  private showHammerEffect(pos: cc.Vec2) {
    this.hammerNode.setPosition(pos);
    this.hammerNode.active = true;

    cc.tween(this.hammerNode)
      .set({ scale: 1.0 })
      .parallel(
        cc.tween().to(0.05, { scale: 1.2 }, { easing: "cubicOut" }),
        cc.tween().by(0.05, { position: cc.v3(0, -30) })
      )
      .parallel(
        cc.tween().to(0.1, { scale: 1.0 }, { easing: "bounceOut" }),
        cc.tween().by(0.1, { position: cc.v3(0, 30) })
      )
      .call(() => {
        this.hammerNode.active = false;
      })
      .start();
  }

  /** 
   *  타이머가 0이 되거나 다른 종료 조건일 때 호출
   *  → 공통 FlowController로 이관
   */
  private endGame() {
    MultiGameFlowController.endGame(this);
  }
}
