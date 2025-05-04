// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameData from "./GameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameOverManager extends cc.Component {
    @property(cc.Node)
    retryButton: cc.Node = null;

    @property(cc.Node)
    mainMenuButton: cc.Node = null;

    start() {
        this.retryButton.on('click', this.onRetryButtonClick, this);
        this.mainMenuButton.on('click', this.onMainMenuButtonClick, this);
    }

    onRetryButtonClick(): void {
        // Retry → global currentLevel 값 그대로 MazeScene으로 로드 (실패했던 레벨부터 재시작)
        cc.director.loadScene("MazeScene");
    }

    onMainMenuButtonClick(): void {
        // Main Menu → global currentLevel 재설정 후 MainScene으로 전환
        GameData.currentLevel = 1;
        cc.director.loadScene("MainScene");
    }
}