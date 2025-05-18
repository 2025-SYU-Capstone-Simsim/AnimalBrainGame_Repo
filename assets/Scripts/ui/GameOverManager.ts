// /assets/Scripts/ui/GameOverManager.ts
import GameData from "../data/GameData";
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameOverManager extends cc.Component {
  @property(cc.Node) retryBtn!: cc.Node;
  @property(cc.Node) mainBtn!: cc.Node;

  start() {
    this.retryBtn.on("click", ()=> cc.director.loadScene("MazeScene"));
    this.mainBtn .on("click", ()=> {
      GameData.currentLevel = 1;
      cc.director.loadScene("Maze_InformScene");
    });
  }
}
