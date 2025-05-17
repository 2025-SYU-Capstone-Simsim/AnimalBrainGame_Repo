// Scripts/MazePlayer.ts

import MazeGameManager from "./MazeGameManager";
const { ccclass, property } = cc._decorator;

@ccclass
export default class MazePlayer extends cc.Component {
  /** 걷기 애니메이션용 프레임 배열 (Inspector 에서 4개 연결) */
  @property([cc.SpriteFrame])
  public walkFrames: cc.SpriteFrame[] = [];

  /** 내부에서 자동으로 할당될 GameManager 참조 */
  private gameManager!: MazeGameManager;

  /** 현재 그리드 좌표 */
  public currentGridPos: cc.Vec2 = cc.v2(1, 1);

  private isMoving: boolean      = false;
  private moveDuration: number   = 0.1;
  private anim!: cc.Animation;
  private sprite!: cc.Sprite;

  onLoad() {
    // 1) Canvas/Game Manager 노드에서 MazeGameManager 컴포넌트 찾아서 할당
    const gmNode = cc.find("Canvas/Game Manager");
    if (!gmNode) {
      cc.error("MazePlayer: 'Canvas/Game Manager' 노드를 찾을 수 없습니다!");
      return;
    }
    this.gameManager = gmNode.getComponent(MazeGameManager)!;
    if (!this.gameManager) {
      cc.error("MazePlayer: MazeGameManager 컴포넌트가 없습니다!");
      return;
    }

    // 2) Sprite & Animation 컴포넌트 확보
    this.sprite = this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
    this.anim   = this.node.getComponent(cc.Animation) || this.node.addComponent(cc.Animation);

    // 3) 걷기 프레임이 설정되어 있으면 첫 프레임 적용 & 애니메이션 클립 생성
    if (this.walkFrames.length > 0) {
      // 첫 프레임 세팅
      this.sprite.spriteFrame = this.walkFrames[0];
      this.sprite.type     = cc.Sprite.Type.SIMPLE;
      this.sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;

      // 12fps 애니메이션 클립 생성
      const clip = cc.AnimationClip.createWithSpriteFrames(
        this.walkFrames,
        12  // 초당 12프레임
      );
      clip.name     = "walk";
      clip.wrapMode = cc.WrapMode.Loop;
      this.anim.addClip(clip);

      // cellSize * 0.8 크기에 맞춰 자동 스케일링
      const origW    = this.walkFrames[0].getRect().width;
      const target   = this.gameManager.cellSize * 0.8;
      this.node.setScale(target / origW, target / origW);
    } else {
      cc.warn("MazePlayer: walkFrames가 설정되지 않았습니다!");
    }

    // 4) 앵커·zIndex 설정
    this.node.setAnchorPoint(0.5, 0.5);
    this.node.zIndex = 999;

    // 5) 키 입력 리스너 등록 (KEY_DOWN + KEY_UP)
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,   this.onKeyUp,   this);
  }

  onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,   this.onKeyUp,   this);
  }

  /** 키 누를 때 호출 */
  private onKeyDown(e: cc.Event.EventKeyboard) {
    if (this.isMoving || this.gameManager.gameOver) return;

    let delta = cc.v2(0, 0);
    switch (e.keyCode) {
      case cc.macro.KEY.left:  delta = cc.v2(-1,  0); break;
      case cc.macro.KEY.right: delta = cc.v2( 1,  0); break;
      case cc.macro.KEY.up:    delta = cc.v2( 0,  1); break;
      case cc.macro.KEY.down:  delta = cc.v2( 0, -1); break;
      default: return;
    }

    // 걷기 애니메이션 재생
    if (this.anim.getClips().some(c => c.name === "walk")) {
      this.anim.play("walk");
    }

    this.move(delta);
  }

  /** 키 뗄 때 호출 */
  private onKeyUp(e: cc.Event.EventKeyboard) {
    // 애니메이션 정지
    if (this.anim.getClips().some(c => c.name === "walk")) {
      this.anim.stop("walk");
    }
  }

  /** 실제 그리드 이동 & 노드 액션 처리 */
  private move(delta: cc.Vec2) {
    const next = this.currentGridPos.add(delta);
    if (!this.gameManager.getMazeLogic().isWalkable({ x: next.x, y: next.y })) return;

    this.currentGridPos = next.clone();

    // 목표 월드 좌표 계산
    const cs   = this.gameManager.cellSize;
    const w    = this.gameManager.cols * cs;
    const h    = this.gameManager.rows * cs;
    const ox   = (1080 - w) / 2;
    const oy   = (1920 - h) / 2;
    const dest = cc.v2(
      ox + next.x * cs + cs / 2,
      oy + next.y * cs + cs / 2
    );

    // 이동 처리
    this.isMoving = true;
    this.node.stopAllActions();
    this.node.runAction(
      cc.sequence(
        cc.moveTo(this.moveDuration, dest),
        cc.callFunc(() => { this.isMoving = false; })
      )
    );
  }
}
