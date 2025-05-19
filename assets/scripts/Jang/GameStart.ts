// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameStart extends cc.Component {
    @property(cc.Button)
    startButton: cc.Button = null!; // Start 버튼 참조

    onLoad() {
        // Start 버튼 클릭 이벤트를 등록합니다
        this.startButton.node.on('click', this.onStartGame, this);
    }

    onStartGame() {
        // MainScene으로 전환합니다
        cc.director.loadScene('MainScene');
    }

    onDestroy() {
        // 이벤트 리스너를 제거합니다
        this.startButton.node.off('click', this.onStartGame, this);
    }
}