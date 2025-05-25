const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    myRecordButton: cc.Node = null;

    @property(cc.Node)
    backButton: cc.Node = null;

    onLoad() {
        cc.debug.setDisplayStats(false);
    }

    start() {
        if (this.myRecordButton) {
            this.myRecordButton.on(cc.Node.EventType.TOUCH_END, () => {
                cc.director.loadScene("MyRecord");
            }, this);
        }

        if (this.backButton) {
            this.backButton.on(cc.Node.EventType.TOUCH_END, () => {
                cc.director.loadScene('홈화면');
            }, this);
        }
    }

    onClickMain() {
        cc.log("뒤로가기 버튼 클릭됨. MainMenu 씬으로 이동.");
        cc.director.loadScene("MainScene");
    }
}
