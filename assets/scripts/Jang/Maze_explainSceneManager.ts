// /assets/Scripts/main/MainMenuManager.ts
import GameData from "./MazeGameData";
const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenuManager extends cc.Component {
  @property(cc.Button)
  BackButton: cc.Button = null;
  @property(cc.Node) startBtn!: cc.Node;

  start() {
    GameData.currentLevel = 1;
    this.startBtn.on("click", ()=> cc.director.loadScene("MazeSingleScene"));
  }

  onClickList() {
  cc.log("뒤로가기 버튼 클릭됨. SingleGameList 씬으로 이동.");
  cc.director.loadScene("SingleGameList");
    }
}
