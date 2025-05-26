// /assets/Scripts/main/MainMenuManager.ts
import GameData from "./MazeGameData";
const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenuManager extends cc.Component {
  @property(cc.Node) startBtn!: cc.Node;
  start() {
    GameData.currentLevel = 1;
    this.startBtn.on("click", ()=> cc.director.loadScene("MazeSingleScene"));
  }
}
