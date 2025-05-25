const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    myInfoButton: cc.Node = null; 
    
    @property(cc.Node)
    backButton: cc.Node = null;        

    onLoad(){
        cc.debug.setDisplayStats(false);
    } 

    start () {
        if (this.myInfoButton) {
            this.myInfoButton.on(cc.Node.EventType.TOUCH_END, () => {
                cc.director.loadScene("MyInfo");
            }, this);
        }

        if (this.backButton) {
            this.backButton.on(cc.Node.EventType.TOUCH_END, () => {
                cc.director.loadScene('홈화면');
            }, this);
        }
    }
}
