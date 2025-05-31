const { ccclass, property } = cc._decorator;

@ccclass
export default class MazeUIManager extends cc.Component {
  @property(cc.Prefab) timerPrefab: cc.Prefab = null;
  @property(cc.Prefab) scorePrefab: cc.Prefab = null;
  @property(cc.Node) backBtn: cc.Node = null;

  private timerLabel: cc.Label = null;
  private scoreLabel: cc.Label = null;

  onLoad() {
    // Timer 프리팹 인스턴스화 + TimerLabel 연결
    if (this.timerPrefab) {
      const timerNode = cc.instantiate(this.timerPrefab);
      this.node.addChild(timerNode);

      const timerLabelNode = timerNode.getChildByName("TimerLabel");
      if (timerLabelNode) {
        this.timerLabel = timerLabelNode.getComponent(cc.Label);
      }

      if (!this.timerLabel) {
        console.warn("⚠️ TimerLabel 연결 실패! 프리팹 구조 또는 노드 이름 확인 필요.");
      }
    }

    // Score 프리팹 인스턴스화 + ScoreLabel 연결
    if (this.scorePrefab) {
      const scoreNode = cc.instantiate(this.scorePrefab);
      this.node.addChild(scoreNode);

      const scoreLabelNode = scoreNode.getChildByName("ScoreLabel");
      if (scoreLabelNode) {
        this.scoreLabel = scoreLabelNode.getComponent(cc.Label);
      }

      if (!this.scoreLabel) {
        console.warn("⚠️ ScoreLabel 연결 실패! 프리팹 구조 또는 노드 이름 확인 필요.");
      }
    }

    // 뒤로 가기 버튼
    if (this.backBtn) {
      this.backBtn.on("click", () => {
        cc.director.loadScene("SingleGameList");
      });
    }
  }

  public setTimer(time: number) {
    if (this.timerLabel) {
      this.timerLabel.string = `${Math.ceil(time)}`;
    }
  }

  public setScore(score: number) {
    if (this.scoreLabel) {
      this.scoreLabel.string = `${score}`;
    }
  }
}
