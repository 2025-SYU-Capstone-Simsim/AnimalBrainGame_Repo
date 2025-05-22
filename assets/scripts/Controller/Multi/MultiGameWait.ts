const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    multiStartButton: cc.Node = null;

    @property(cc.Node)
    backButton: cc.Node = null;


    onLoad() {
        cc.debug.setDisplayStats(false);
    }

    start() {
        if (this.multiStartButton) {
            this.multiStartButton.on('click', () => {
                cc.director.loadScene('PlayerConnect');
            });
        }

        if (this.backButton) {
            this.backButton.on(cc.Node.EventType.TOUCH_END, () => {
                cc.director.loadScene('MultiWatingPage');
            }, this);
        }
    }

    onClickMain() {
        cc.log("뒤로가기 버튼 클릭됨. MainMenu 씬으로 이동.");
        cc.director.loadScene("MainScene");
    }
}
