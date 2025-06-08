const { ccclass, property } = cc._decorator;

@ccclass
export default class OpponentMoleViewer extends cc.Component {
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

  @property(cc.Prefab) scoreDisplayPrefab: cc.Prefab = null;

  private holes: cc.Node[] = [];
  private score: number = 0;
  private scoreLabel: cc.Label = null;

  onLoad() {
    this.holes = [
      this.Hole1, this.Hole2, this.Hole3,
      this.Hole4, this.Hole5, this.Hole6,
      this.Hole7, this.Hole8, this.Hole9
    ];
    this.initScore();

    // (1) 공통 컨트롤러가 브로드캐스트한 이벤트 수신
    cc.director.on("spawn-mole", (data: any) => {
      this.spawnMoleFromData(data);
    });
    cc.director.on("hit-mole", (data: any) => {
      this.hitMoleAnimation(data.index, data.moleType);
    });
    cc.director.on("score-update", (data: any) => {
      // 외부에서 “data.player=호스트 or 게스트, data.score” 형태로 들어온다
      this.setScore(data.score);
    });
  }

  private initScore() {
    const scoreNode = cc.instantiate(this.scoreDisplayPrefab);
    this.node.addChild(scoreNode);
    this.scoreLabel = scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
    this.updateScoreLabel();
  }

  private updateScoreLabel() {
    this.scoreLabel.string = `${this.score}`;
  }

  public setScore(value: number) {
    this.score = value;
    this.updateScoreLabel();
  }

  public spawnMoleFromData(data: { index: number; type: string; spawnTime: number }) {
    const { index, type } = data;
    const hole = this.holes[index];
    if (!hole) return;

    const mole = cc.instantiate(type === "good" ? this.molePrefabGood : this.molePrefab);
    mole.name = "OpponentMole";
    mole.setPosition(0, -130);
    mole.active = true;
    mole.zIndex = 9999;
    hole.addChild(mole);

    cc.tween(mole)
      .to(0.2, { position: cc.v3(0, -20) }, { easing: "sineOut" })
      .delay(1.0)
      .call(() => {
        if (mole.isValid) mole.destroy();
      })
      .start();
  }

  public hitMoleAnimation(index: number, type: string) {
    const hole = this.holes[index];
    const mole = hole.getChildByName("OpponentMole");
    if (!mole || !mole.isValid) return;

    const sprite = mole.getComponent(cc.Sprite);
    if (sprite) {
      sprite.spriteFrame = type === "good" ? this.goodMoleHitSprite : this.moleHitSprite;
    }

    cc.tween(mole)
      .repeat(
        3,
        cc.tween()
          .by(0.05, { angle: 15 })
          .by(0.05, { angle: -30 })
          .by(0.05, { angle: 15 })
      )
      .start();
  }
}