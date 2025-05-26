const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Button)
    BackButton: cc.Button = null;
    start () {
        this.node.on("touchend", function(){
            cc.director.loadScene("Rottenacorn_Mainscene");
        });
    }

    onClickList() {
    cc.log("뒤로가기 버튼 클릭됨. SingleGameList 씬으로 이동.");
    cc.director.loadScene("SingleGameList");
    }
}
