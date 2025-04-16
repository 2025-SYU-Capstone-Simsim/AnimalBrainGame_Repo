const { ccclass, property } = cc._decorator;

@ccclass
export default class Bubble extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    //붙어있을 때 경우
    onBeginContact(cont, selfCollider, otherCollider) {
        const rb = this.getComponent(cc.RigidBody);
        if (!rb) return;

        //비눗방울끼리 붙어있을 때
        if(otherCollider.node.name ==='Bubble'){
            const bubble_collision = cc.find("Canvas").getComponent("game_logic");
            if(bubble_collision){
                bubble_collision.trackContact(this.node, otherCollider.node, true);
            }
        }
        // 천장에 부딪히면 아래로 튕기기
        if (otherCollider.node.name === 'Ceiling') {
            var r = Math.random()*30;
            Math.floor(r);
            r%2===1? r=-r:r;
            rb.linearVelocity = cc.v2(r, -30);
        }

        // 왼쪽 벽에 부딪히면 오른쪽으로 튕기기
        if (otherCollider.node.name === 'LEFT_WALL') {
            let currentVel = rb.linearVelocity;
            let newX = Math.abs(currentVel.x);
            if (newX === 0) newX = 80;
            rb.linearVelocity = cc.v2(newX, currentVel.y);
        }

        // 오른쪽 벽에 부딪히면 왼쪽으로 튕기기
        if (otherCollider.node.name === 'RIGHT_WALL') {
            let currentVel = rb.linearVelocity;
            let newX = -Math.abs(currentVel.x);
            if (newX === 0) newX = -80;
            rb.linearVelocity = cc.v2(newX, currentVel.y);
        }
        
    }
    //그만 붙어있을 때 
    onEndContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.group === "Bubble") {
            const gameLogic = cc.find("Canvas").getComponent("GameLogic");
            if (gameLogic) {
                gameLogic.trackContact(this.node, otherCollider.node, false);
            }
        }
    }
   
    
    
    

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;

        let collider = this.getComponent(cc.PhysicsCircleCollider);
        if (collider) {
            collider.restitution = 0.8; // 반사력
            collider.friction = 0;      // 마찰
        }
    }

    start() {
        
        // 필요시 초기화 코드
    }

    // update(dt) {
    //     // 필요시 매 프레임 처리
    // }
}
