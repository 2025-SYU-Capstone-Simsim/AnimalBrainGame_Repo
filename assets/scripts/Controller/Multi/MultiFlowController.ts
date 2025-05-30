import GameState from "../CommonUI/GameState";

export default class MultiGameFlowController {

  static _alreadyTransitioning: boolean = false;

// static loadNextGame() {
//     if (this._alreadyTransitioning) return;
//     this._alreadyTransitioning = true;

//     const index = GameState.currentGameIndex || 0;
//     const sequence = GameState.selectedGameSequence || [];

//     cc.log("loadNextGame: current index =", index, "sequence =", sequence);

//     if (!sequence || index >= sequence.length) {
//         cc.log("모든 게임 종료 → 결과 씬 이동");
//         cc.sys.localStorage.removeItem("selectedGameSequence");
//         cc.sys.localStorage.removeItem("currentGameIndex");
//         cc.director.loadScene("MultiGameResult");
//         return;
//     }

//     const nextScene = sequence[index];

//     if (cc.director.getScene().name === nextScene) {
//         cc.warn("현재 씬과 같음 → 중복 이동 방지");
//         return;
//     }

//     // 반드시 씬 이동 전에 저장!
//     GameState.currentGameIndex = index + 1;
//     cc.sys.localStorage.setItem("currentGameIndex", String(index + 1));

//     cc.log(`멀티게임 ${index + 1}번째 씬 이동: ${nextScene}`);
//     cc.director.loadScene(nextScene);
// }



}
