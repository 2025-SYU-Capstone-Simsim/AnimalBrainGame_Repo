// /assets/Scripts/player/PlayerController.ts
const { ccclass, property } = cc._decorator;
import MazeLogic from "./MazeLogic";
import GameData from "./MazeGameData";

@ccclass

export default class PlayerController extends cc.Component {
  @property(cc.SpriteFrame) tigerFrame!: cc.SpriteFrame;
  @property(cc.SpriteFrame) dogFrame!: cc.SpriteFrame;
  @property(cc.SpriteFrame) rabbitFrame!: cc.SpriteFrame;


 
  public currentGridPos: cc.Vec2 = cc.v2(1, 1);
  public mazeLogic!: MazeLogic;

  private isMoving = false;
  private sprite!: cc.Sprite;

 onLoad() {
  this.sprite = this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
  // 캐릭터 타입에 따라 스프라이트 이미지 선택
  switch (GameData.playerType) {
    case "tiger":
      this.sprite.spriteFrame = this.tigerFrame;
      break;
    case "dog":
      this.sprite.spriteFrame = this.dogFrame;
      break;
    case "rabbit":
      this.sprite.spriteFrame = this.rabbitFrame;
      break;
    default:
      this.sprite.spriteFrame = this.tigerFrame; // 혹시 모를 기본값
  }
    cc.systemEvent.on('devicemotion', this._onDeviceMotion, this);
    this.sprite = this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
    this.sprite.type        = cc.Sprite.Type.SIMPLE;
    this.sprite.sizeMode = cc.Sprite.SizeMode.TRIMMED;
    this.node.setScale(2.5); // cellSize 동기화
    this.node.setContentSize(50, 50); // ← 항상 50x50 px
    this.node.setScale(1);            // 필요 시 (보통 1)
    this.node.setAnchorPoint(0.5, 0.5);
    this.node.zIndex = 500;
    

    // 4) 키 입력 리스너
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
  }

  onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this._onDeviceMotion, this);
  }
  private lastMoveTime: number = 0;
  private moveInterval: number = 120;
  // 
  private _onDeviceMotion(event: any) {
  if (this.isMoving) return;
  const acc = event.acc;
  const now = Date.now();
  if (now - this.lastMoveTime < this.moveInterval) return;  // 연속이동방지

   if (acc.x > 0.23)      this.move(1, 0);
  else if (acc.x < -0.23) this.move(-1, 0);
  else if (acc.y > 0.18)  this.move(0, 1);
  else if (acc.y < -0.18) this.move(0, -1);

  this.lastMoveTime = now;
}

  private _onKeyDown(e: cc.Event.EventKeyboard) {
    if (this.isMoving) return;
    let dx = 0, dy = 0;
    switch (e.keyCode) {
      case cc.macro.KEY.left:
        dx = -1;
        break;
      case cc.macro.KEY.right:
        dx = 1;
        break;
      case cc.macro.KEY.up:
        dy = 1;
        break;
      case cc.macro.KEY.down:
        dy = -1;
        break;
      default:
        return;
    }
    this.move(dx, dy);
  }

  private move(dx: number, dy: number) {
  const nx = this.currentGridPos.x + dx;
  const ny = this.currentGridPos.y + dy;
  if (!this.mazeLogic.isWalkable(nx, ny)) return;

  this.currentGridPos = cc.v2(nx, ny);

  const cs = this.mazeLogic.cellSize;
  const cols = this.mazeLogic.maze[0].length;
  const rows = this.mazeLogic.maze.length;
  const baseX = (1080 - cols * cs) / 2;
  const baseY = (1920 - rows * cs) / 2;
  const target = cc.v2(
    baseX + nx * cs + cs / 2,
    baseY + ny * cs + cs / 2
  );

  // 여기 추가
  this.node.setPosition(target); // 실제 화면 이동!
  }

}