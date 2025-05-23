const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiGameWait extends cc.Component {

    @property(cc.Node)
    multiStartButton: cc.Node = null;

    @property(cc.Node)
    backButton: cc.Node = null;

    onLoad() {
        cc.debug.setDisplayStats(false);
    }

    start() {
        if (this.multiStartButton) {
            this.registerButtonEvents(this.multiStartButton, () => {
                cc.director.loadScene('PlayerConnect');
            });
        }

        if (this.backButton) {
            this.registerButtonEvents(this.backButton, this.onClickMain.bind(this)); 
        }

    }

    registerButtonEvents(node: cc.Node, callback: () => void) {
        node.on(cc.Node.EventType.TOUCH_END, callback);
        node.on(cc.Node.EventType.MOUSE_DOWN, callback);
    }

    onClickMain() {
        cc.log("뒤로가기 버튼 클릭됨. MainMenu 씬으로 이동.");
        cc.director.loadScene("MainScene");
    }
}
