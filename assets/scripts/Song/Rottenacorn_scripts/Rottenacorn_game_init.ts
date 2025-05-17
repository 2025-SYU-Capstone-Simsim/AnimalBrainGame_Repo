const { ccclass, property } = cc._decorator;

@ccclass
export default class GameInit extends cc.Component {

    @property(cc.Prefab)
    acornPrefab: cc.Prefab = null;

    // 리스트 돌아가기 버튼
    @property(cc.Button)
    exitButton: cc.Button = null;

    onLoad() {
        const manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, 0);
        // manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
    }

    
    loadList(){
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
      }


}
