import GameState from "./GameState";
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameOverUI extends cc.Component {
    @property(cc.Button)
    exitButton: cc.Button = null;

    @property(cc.Button)
    retryButton: cc.Button = null;

    onLoad() {
        if (this.exitButton) {
            this.exitButton.node.on('click', this.onExitClick, this);
        }
        if (this.retryButton) {
            this.retryButton.node.on('click', this.onRetryClick, this);
        }
    }

    onExitClick() {
        console.log("나가기 버튼 클릭 → SingleGameList 씬으로 이동");
        cc.director.loadScene("SingleGameList");
    }

    onRetryClick() {
        const sceneToLoad = GameState.lastGameScene;
        if (sceneToLoad && sceneToLoad.length > 0) {
            cc.log(`다시하기 → ${sceneToLoad}`);
            cc.director.loadScene(sceneToLoad);
        } else {
            cc.warn("이전 씬 정보가 없습니다. 메인으로 이동");
            cc.director.loadScene("MainScene");
        }
    }
}
