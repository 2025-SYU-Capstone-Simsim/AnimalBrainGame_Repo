// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

export default class GameData {
  public static currentLevel: number = 1;
  public static score: number = 0;
  public static addScore(level: number) {
    this.score += 10;
  }
  public static resetScore() {
    this.score = 0;
  }
}