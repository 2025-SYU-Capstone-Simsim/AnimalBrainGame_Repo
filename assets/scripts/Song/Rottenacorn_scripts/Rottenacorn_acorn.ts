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
            const direction = velocity.normalize();
    
            // 방향이 거의 0일 경우 예외 처리
            if (direction.mag() < 0.001) {
                const randomAngle = Math.random() * 2 * Math.PI;
                direction.x = Math.cos(randomAngle);
                direction.y = Math.sin(randomAngle);
            }
            // 약간의 랜덤 각도 적용
            const angleOffset = (Math.random() - 0.5) * Math.PI / 10; // ±18도
            const angle = Math.atan2(direction.y, direction.x) + angleOffset;
            const vx = Math.cos(angle) * this.minSpeed;
            const vy = Math.sin(angle) * this.minSpeed;
            rigid.linearVelocity = cc.v2(vx, vy);
        }
    }
}
