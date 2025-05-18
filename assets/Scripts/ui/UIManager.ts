// /assets/Scripts/ui/UIManager.ts
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {
  @property(cc.Label) levelLabel!: cc.Label;
  @property(cc.Label) timerLabel!: cc.Label;
  @property(cc.Node)  nextBtn!: cc.Node;
  @property(cc.Node)  backBtn!: cc.Node;
  @property(cc.Label) scoreLabel!: cc.Label;

public setScore(score: number) {
  this.scoreLabel.string = `Score: ${score}`;
}
  private timeRem = 60;

  onLoad() {
    this.backBtn.on("click", ()=> this.node.emit("backToMenu"));
  }

  public setLevel(lv: number) {
    this.levelLabel.string = `Level: ${lv}`;
  }
  public setTime(t: number) {
    this.timerLabel.string = `Time: ${Math.ceil(t)}s`;
  }
}