// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

// GameOver.ts
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameOver extends cc.Component {
    // Restart 버튼 컴포넌트 참조 (cc.Button)
    @property(cc.Button)
    restartButton: cc.Button = null!;

    onLoad() {
        // Restart 버튼 클릭 시 onRestart 함수 실행
        this.restartButton.node.on("click", this.onRestart, this);
    }

    onDestroy() {
        // 자원 해제를 위해 클릭 이벤트를 제거
        this.restartButton.node.off("click", this.onRestart, this);
    }

    onRestart() {
        // MainScene으로 씬 전환 (원하는 씬 이름으로 수정 가능)
        cc.director.loadScene("MainScene");
    }
}