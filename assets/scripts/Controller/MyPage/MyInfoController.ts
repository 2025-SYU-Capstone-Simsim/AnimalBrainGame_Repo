const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    myRecordButton: cc.Node = null; 
    
    @property(cc.Node)
    backButton: cc.Node = null;        

    onLoad(){
        cc.debug.setDisplayStats(false);
    } 

    start () {
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
}
