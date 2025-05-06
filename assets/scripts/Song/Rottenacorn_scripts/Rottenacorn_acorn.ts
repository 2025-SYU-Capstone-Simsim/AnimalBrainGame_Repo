const { ccclass, property } = cc._decorator;

@ccclass
export default class Acorn extends cc.Component {

    @property(cc.Node)
    bugNode: cc.Node = null;

    private speed: number = 300;
    private minSpeed: number = 150;

    public activate(isRotten: boolean): void {
        // 벌레 노출
        if (this.bugNode) {
            this.bugNode.active = isRotten;
            if (isRotten) {
                this.scheduleOnce(() => {
                    this.bugNode.active = false;
                }, 1);
            }
        }

        // 물리 속도 적용
        const rigid = this.node.getComponent(cc.RigidBody);
        if (rigid) {
            const angle = Math.random() * 2 * Math.PI;
            const vx = Math.cos(angle) * this.speed;
            const vy = Math.sin(angle) * this.speed;

            rigid.linearVelocity = cc.v2(vx, vy);
            rigid.awake = true;
        }
    }

    update(dt: number): void {
        const rigid = this.node.getComponent(cc.RigidBody);
        if (!rigid) return;

        const velocity = rigid.linearVelocity;
        const currentSpeed = velocity.mag();

        if (currentSpeed < this.minSpeed) {
            const direction = velocity.normalizeSelf();
            const corrected = direction.mul(this.minSpeed);
            rigid.linearVelocity = corrected;
        }
    }
}
