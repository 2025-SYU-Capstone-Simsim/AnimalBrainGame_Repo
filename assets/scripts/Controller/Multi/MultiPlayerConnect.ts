const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    StartButton: cc.Node = null;  

    @property(cc.Node)
    backButton: cc.Node = null;        

    onLoad(){
        cc.debug.setDisplayStats(false);
    }

    start() {
        if (this.StartButton) {
            this.StartButton.on('click', () => {
                cc.director.loadScene('게임리스트');
            }, this);
        }

        if (this.backButton) {
            this.backButton.on(cc.Node.EventType.TOUCH_END, () => {
                cc.director.loadScene('MultiWatingPage');
            }, this);
        }
    }
}
