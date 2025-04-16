const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLogic extends cc.Component {

    @property(cc.Node)
    Background_layout: cc.Node = null;

    private is_that_ten_bubbles: cc.Node[] = []; // 사용자가 선택한 버블들

    private isTouching: boolean = false;
    private currentSum: number = 0;
    onBubbleClick(bubble: cc.Node) {
        const labelNode = bubble.getChildByName("BubbleLabel");
        if (labelNode) {
            const label = labelNode.getComponent(cc.Label);
            if (label) {
                const num = parseInt(label.string);
            } 
        } 
    
        this.is_that_ten_bubbles.push(bubble);
    }
    onTouchStart(event: cc.Event.EventTouch) {
        this.isTouching = true;
        this.is_that_ten_bubbles = [];
        this.currentSum = 0;

        const pos = event.getLocation();
        this.trySelectBubbleAtPosition(pos);
    }
    onTouchMove(event: cc.Event.EventTouch) {
        if (!this.isTouching) return;
        const pos = event.getLocation();
        this.trySelectBubbleAtPosition(pos);
    }
    onTouchEnd(event: cc.Event.EventTouch) {
        this.isTouching = false;

        if (this.currentSum === 10) {
            for (let bubble of this.is_that_ten_bubbles) {
                bubble.active = false;
            }
        }

        this.is_that_ten_bubbles = [];
        this.currentSum = 0;
    }
    trySelectBubbleAtPosition(worldPos: cc.Vec2) {
        const bubbles = this.Background_layout.children;

        for (let bubble of bubbles) {
            if (!bubble.active) continue;
            if (this.is_that_ten_bubbles.includes(bubble)) continue;

            const localPos = bubble.parent.convertToNodeSpaceAR(worldPos);
            const box = bubble.getBoundingBox();

            if (box.contains(localPos)) {
                const labelNode = bubble.getChildByName("BubbleLabel");
                if (!labelNode) return;

                const label = labelNode.getComponent(cc.Label);
                if (!label) return;

                const num = parseInt(label.string);
                if (this.currentSum + num > 10) return;

                this.is_that_ten_bubbles.push(bubble);
                this.currentSum += num;

                
                return;
            }
        }
    }
    
    
    
    onLoad() {
        const canvas = cc.find("Canvas");

        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        
    }

    
    
}
