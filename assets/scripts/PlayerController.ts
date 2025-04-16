// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

// PlayerController.ts
// PlayerController.ts
import MazeLogic from "./MazeLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    public mazeLogic: MazeLogic = null!;
    public cellSize: number = 50;
    public gridCols: number = 21;
    public gridRows: number = 21;

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        const currentPos = this.node.getPosition();
        let newPos = currentPos.clone();
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                newPos.y += this.cellSize;
                break;
            case cc.macro.KEY.down:
                newPos.y -= this.cellSize;
                break;
            case cc.macro.KEY.left:
                newPos.x -= this.cellSize;
                break;
            case cc.macro.KEY.right:
                newPos.x += this.cellSize;
                break;
        }
        // 새 위치를 해당 셀 좌표로 환산
        let cellX = Math.round(newPos.x / this.cellSize);
        let cellY = Math.round(newPos.y / this.cellSize);
        if (this.mazeLogic && !this.mazeLogic.isWalkable({ x: cellX, y: cellY })) {
            return;  // 이동할 셀이 벽이면 이동 불가
        }
        this.node.setPosition(newPos);
    }
}