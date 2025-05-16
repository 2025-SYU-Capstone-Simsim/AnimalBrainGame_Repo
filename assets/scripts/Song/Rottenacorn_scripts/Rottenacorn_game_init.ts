const { ccclass, property } = cc._decorator;

@ccclass
export default class GameInit extends cc.Component {
    @property(cc.Prefab)
    acornPrefab: cc.Prefab = null;
    @property(cc.Node)
    correct_sign: cc.Node= null;
    @property(cc.Node)
    wrong_sign: cc.Node = null;
    @property(cc.Button)
    exitButton: cc.Button = null;
    onLoad() {
        const manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, 0);
        this.wrong_sign.active=false;
        this.correct_sign.active=false;
    }
    loadList(){
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
      }
}

