const { ccclass, property } = cc._decorator;

@ccclass
export default class MazeUIManager extends cc.Component {
  @property(cc.Node) timerNode!: cc.Node;    // 프리팹(Label) 노드로 할당
  @property(cc.Node) scoreNode!: cc.Node;    // 프리팹(Label) 노드로 할당
  @property(cc.Node) backBtn!: cc.Node;
  // 시간 표시 갱신
  public setTimer(time: number) {
    if (this.timerNode) {
      const timerLabel = this.timerNode.getComponent(cc.Label);
      if (timerLabel) timerLabel.string = `${Math.ceil(time)}`;
      // "Time: " 부분 제거!
    }
  }

  // 점수 표시 갱신
  public setScore(score: number) {
    if (this.scoreNode) {
      const scoreLabel = this.scoreNode.getComponent(cc.Label);
      if (scoreLabel) scoreLabel.string = `${score}`;
      // "Score: " 부분 제거!
    }
  }
  onLoad() {
  if (this.backBtn) {
    this.backBtn.on("click", () => {
      cc.director.loadScene("SingleGameList");
    });
  }
}
}
