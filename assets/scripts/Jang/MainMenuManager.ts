// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameData from "./GameData"; // 글로벌 데이터를 관리하는 스크립트
const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenuManager extends cc.Component {
    @property(cc.Node)
    startGameButton: cc.Node = null;  // 에디터에서 게임 시작 버튼 노드를 연결

    start() {
        // 게임 시작 시 글로벌 레벨 데이터를 1로 초기화 (MainScene 갔다오면 항상 1레벨부터 시작)
        GameData.currentLevel = 1;

        // 게임 시작 버튼 클릭 이벤트 연결
        this.startGameButton.on('click', this.onStartGame, this);
    }

    onStartGame(): void {
        // MazeScene으로 씬 전환
        cc.director.loadScene("MazeScene");
    }
}