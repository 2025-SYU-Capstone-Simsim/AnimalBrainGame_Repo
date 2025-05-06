const { ccclass, property } = cc._decorator;

@ccclass
export default class GameInit extends cc.Component {

    @property(cc.Prefab)
    acornPrefab: cc.Prefab = null;

    onLoad() {
        const manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, 0);
        // manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
    }
}
