const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    start () {
        this.node.on("touchend", function(){
            cc.director.loadScene("Rottenacorn_Mainscene");
        });
    }

    // update (dt) {}
}
