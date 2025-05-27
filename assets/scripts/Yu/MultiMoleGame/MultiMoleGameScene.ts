import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DualMoleGameScene extends cc.Component {
    @property(cc.Node) myField: cc.Node = null;
    @property(cc.Node) guestField: cc.Node = null;

    @property([cc.Node]) myHoles: cc.Node[] = [];
    @property([cc.Node]) guestHoles: cc.Node[] = [];

    @property(cc.Prefab) molePrefab: cc.Prefab = null;
    @property(cc.Prefab) molePrefabGood: cc.Prefab = null;
    @property(cc.SpriteFrame) moleHitSprite: cc.SpriteFrame = null;
    @property(cc.SpriteFrame) goodMoleHitSprite: cc.SpriteFrame = null;
    
    @property(cc.SpriteFrame) myHammerSprite: cc.SpriteFrame = null;
    @property(cc.SpriteFrame) guestHammerSprite: cc.SpriteFrame = null;

    private myHammer: cc.Node = null;
    private guestHammer: cc.Node = null;

    private holeStates: boolean[] = [];
    private score: number = 0;
    private timer: number = 30;
    private isGameOver: boolean = false;
    private moleSpawnCallback: Function = null;

    start() {
        this.initHammer();
        this.holeStates = new Array(this.myHoles.length).fill(false);
        this.startGameLogic();
    }

    initHammer() {
        this.myHammer = new cc.Node("MyHammer");
        this.myHammer.addComponent(cc.Sprite).spriteFrame = this.myHammerSprite;
        this.myHammer.parent = this.node;
        this.myHammer.zIndex = 100;
        this.myHammer.active = false;

        this.guestHammer = new cc.Node("GuestHammer");
        this.guestHammer.addComponent(cc.Sprite).spriteFrame = this.guestHammerSprite;
        this.guestHammer.parent = this.node;
        this.guestHammer.zIndex = 50;
        this.guestHammer.active = false;
    }

    startGameLogic() {
        this.schedule(this.spawnMoles, 0.6);
        this.schedule(this.updateGuestState, 0.2); // Firestore 상태 반영
    }

    spawnMoles() {
        if (this.isGameOver) return;

        const available = this.holeStates.map((v, i) => (!v ? i : -1)).filter(i => i !== -1);
        if (available.length === 0) return;

        const idx = available[Math.floor(Math.random() * available.length)];
        const hole = this.myHoles[idx];
        const isGoodMole = Math.random() < 0.3;

        const mole = cc.instantiate(isGoodMole ? this.molePrefabGood : this.molePrefab);
        mole.name = "Mole";
        hole.addChild(mole);
        mole.setPosition(0, -130);
        this.holeStates[idx] = true;

        const onHit = (e: cc.Event.EventTouch) => {
            e.stopPropagation();
            if (this.isGameOver || !mole.active) return;

            const pos = mole.convertToWorldSpaceAR(cc.v2(0, 0));
            const local = this.node.convertToNodeSpaceAR(pos);
            this.showHammerEffect(this.myHammer, local);

            mole.getComponent(cc.Sprite).spriteFrame = isGoodMole ? this.goodMoleHitSprite : this.moleHitSprite;
            this.score += isGoodMole ? -10 : 10;
            mole.off(cc.Node.EventType.TOUCH_END, onHit, this);

            cc.tween(mole)
                .repeat(2, cc.tween().by(0.05, { angle: 10 }).by(0.05, { angle: -20 }).by(0.05, { angle: 10 }))
                .delay(0.6)
                .call(() => {
                    mole.destroy();
                    this.holeStates[idx] = false;
                })
                .start();
        };

        mole.on(cc.Node.EventType.TOUCH_END, onHit, this);

        cc.tween(mole)
            .to(0.2, { position: cc.v3(0, -20) }, { easing: 'sineOut' })
            .delay(1.0)
            .call(() => {
                if (mole && mole.isValid) {
                    mole.off(cc.Node.EventType.TOUCH_END, onHit, this);
                    mole.destroy();
                    this.holeStates[idx] = false;
                }
            })
            .start();
    }

    showHammerEffect(hammer: cc.Node, pos: cc.Vec2) {
        hammer.setPosition(pos);
        hammer.active = true;
        cc.tween(hammer)
            .set({ scale: 1 })
            .parallel(
                cc.tween().to(0.05, { scale: 1.2 }),
                cc.tween().by(0.05, { position: cc.v3(0, -30) })
            )
            .parallel(
                cc.tween().to(0.1, { scale: 1.0 }),
                cc.tween().by(0.1, { position: cc.v3(0, 30) })
            )
            .call(() => hammer.active = false)
            .start();
    }

    updateGuestState() {
        // TODO: Firebase에서 guest 상태 받아서 guestField에 반영
        // 예: this.guestHoles[i].getChildByName("Mole").active = true/false
    }
}
