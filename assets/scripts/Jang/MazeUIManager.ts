// /assets/Scripts/ui/UIManager.ts
import GameData from "./MazeGameData";
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {
  @property(cc.Label) levelLabel!: cc.Label;
  @property(cc.Label) timerLabel!: cc.Label;
  @property(cc.Node)  backBtn!: cc.Node;
  @property(cc.Label) scoreLabel!: cc.Label;

public setScore(score: number) {
  this.scoreLabel.string = `Score: ${score}`;
}
  private timeRem = 60;

  onLoad() {
   this.backBtn.on("click", () => {
  GameData.currentLevel = 1;
  GameData.resetScore();
  this.setScore(0);
  cc.director.loadScene("Maze_InformScene");
});
  }

  public setLevel(lv: number) {
    this.levelLabel.string = `Level: ${lv}`;
  }
  public setTime(t: number) {
    this.timerLabel.string = `Time: ${Math.ceil(t)}s`;
  }
}