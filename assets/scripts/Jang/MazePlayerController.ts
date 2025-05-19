// /assets/Scripts/player/PlayerController.ts
const { ccclass, property } = cc._decorator;
import MazeLogic from "./MazeLogic";

@ccclass
export default class PlayerController extends cc.Component {
  /** idle 프레임 */
  @property(cc.SpriteFrame)
  public playerFrame: cc.SpriteFrame = null!;

  /** walk 애니메이션용 프레임들(순서대로) */
  @property([cc.SpriteFrame])
  public walkFrames: cc.SpriteFrame[] = [];

  @property({ tooltip: "이동 애니메이션 속도(초)" })
  public moveDuration: number = 0.1;
 
  public currentGridPos: cc.Vec2 = cc.v2(1, 1);
  public mazeLogic!: MazeLogic;

  private isMoving = false;
  private sprite!: cc.Sprite;
  private animator!: cc.Animation;

 onLoad() {
    cc.systemEvent.on('devicemotion', this._onDeviceMotion, this);
    this.sprite = this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
    this.sprite.spriteFrame = this.playerFrame;
    this.sprite.type        = cc.Sprite.Type.SIMPLE;
    this.sprite.sizeMode = cc.Sprite.SizeMode.TRIMMED;
    this.node.setScale(2.5); // cellSize 동기화
    this.node.setAnchorPoint(0.5, 0.5);
    this.node.zIndex = 500;
    
    // 3) 애니메이션 세팅
    this.animator = this.node.getComponent(cc.Animation) || this.node.addComponent(cc.Animation);
    // walkFrames 배열로부터 클립 생성
    const clip = cc.AnimationClip.createWithSpriteFrames(this.walkFrames, this.walkFrames.length * 5);
    clip.name = "walk";
    clip.wrapMode = cc.WrapMode.Loop;
    this.animator.addClip(clip);

    // 4) 키 입력 리스너
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
  }

  onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this._onDeviceMotion, this);
  }
  private lastMoveTime: number = 0;
  // 
  private _onDeviceMotion(event: any) {
  if (this.isMoving) return;
  const acc = event.acc;
  const now = Date.now();
  if (now - this.lastMoveTime < 140) return; // 연속이동방지

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
      case cc.macro.KEY.a:
        dx = -1;
        break;
      case cc.macro.KEY.right:
      case cc.macro.KEY.d:
        dx = 1;
        break;
      case cc.macro.KEY.up:
      case cc.macro.KEY.w:
        dy = 1;
        break;
      case cc.macro.KEY.down:
      case cc.macro.KEY.s:
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

  // 걷기 애니메이션 재생
  this.animator.play("walk");

  this.isMoving = true;
  this.node.stopAllActions();
  this.node.runAction(
    cc.sequence(
      cc.moveTo(this.moveDuration, target),
      cc.callFunc(() => {
        this.isMoving = false;
        // 멈춘 프레임 그대로 고정
        this.animator.pause("walk");
      })
    )
  );
}
}
