import GameState from "../CommonUI/GameState";

export default class MultiGameFlowController {

  static loadNextGame() {
    const sequence = GameState.selectedGameSequence;
    const index = GameState.currentGameIndex || 0;

    if (!sequence || index >= sequence.length) {
      //  모든 게임 종료 → 상태 초기화 후 메인으로
      GameState.resetMultiplay();
      GameState.selectedGameSequence = [];
      GameState.currentGameIndex = 0;
      cc.director.loadScene("MultiGameResult"); // 또는 ResultScene
      return;
    }

    const nextScene = sequence[index];
    GameState.currentGameIndex = index + 1;
    cc.log(`멀티게임 ${index + 1}번째 씬 이동: ${nextScene}`);
    cc.director.loadScene(nextScene);
  }
}
