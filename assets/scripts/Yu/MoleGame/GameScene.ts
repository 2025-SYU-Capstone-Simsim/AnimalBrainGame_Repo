const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    // 구멍 노드 설정 (3x3 = 9개)
    @property(cc.Node) Hole1: cc.Node = null;
    @property(cc.Node) Hole2: cc.Node = null;
    @property(cc.Node) Hole3: cc.Node = null;
    @property(cc.Node) Hole4: cc.Node = null;
    @property(cc.Node) Hole5: cc.Node = null;
    @property(cc.Node) Hole6: cc.Node = null;
    @property(cc.Node) Hole7: cc.Node = null;
    @property(cc.Node) Hole8: cc.Node = null;
    @property(cc.Node) Hole9: cc.Node = null;

    // 두더지 프리팹 설정
    @property(cc.Prefab) molePrefab: cc.Prefab = null;

    // 점수 및 타이머
    @property(cc.Label) scoreLabel: cc.Label = null;
    @property(cc.Label) timerLabel: cc.Label = null;

    // 망치 마우스 포인터 노드 설정
    @property(cc.SpriteFrame)
    hammerSprite: cc.SpriteFrame = null;

    private hammerNode: cc.Node = null;

    private moleHoles: cc.Node[] = [];  // 구멍을 저장할 배열
    private score: number = 0;  // 점수
    private timer: number = 30;  // 타이머 30초
    private isGameOver: boolean = false;

    // 게임 시작
    start() {
        this.hammerNode = new cc.Node("Hammer");
        const sprite = this.hammerNode.addComponent(cc.Sprite);
        sprite.spriteFrame = this.hammerSprite;
        this.hammerNode.parent = this.node;
        this.hammerNode.zIndex = 999; // 제일 위에 보이도록
        this.hammerNode.setContentSize(200, 300); // 크기 조절
        this.hammerNode.anchorX = 0.2; 
        this.hammerNode.anchorY = 0.8;   // 위쪽 (해머 머리 쪽 기준)


        // 구멍 노드 배열에 추가
        this.moleHoles = [
            this.Hole1, this.Hole2, this.Hole3,
            this.Hole4, this.Hole5, this.Hole6,
            this.Hole7, this.Hole8, this.Hole9
        ];

        // 게임 시작 시 타이머와 점수 초기화
        this.score = 0;
        this.timer = 30;
        this.updateScoreLabel();
        this.updateTimerLabel();

        // 타이머 감소 스케줄링
        this.schedule(this.decreaseTimer, 1);

        // 두더지 생성 시작
        this.spawnMoles();
    }

    // 타이머 감소
    decreaseTimer() {
        this.timer--;
        this.updateTimerLabel();

        if (this.timer <= 0) {
            this.gameOver();
        }
    }

    updateTimerLabel() {
        this.timerLabel.string = `Time: ${this.timer}`;
    }

    updateScoreLabel() {
        this.scoreLabel.string = `Score: ${this.score}`;
    }

    // 두더지 랜덤 생성
    spawnMoles() {
        this.schedule(() => {
            const randomHoleIndex = Math.floor(Math.random() * this.moleHoles.length);
            const selectedHole = this.moleHoles[randomHoleIndex];

            const mole = cc.instantiate(this.molePrefab);
            mole.name = "Mole";
            mole.active = true;
            selectedHole.addChild(mole);

            mole.on(cc.Node.EventType.TOUCH_END, this.onMoleClick, this);

            this.scheduleOnce(() => {
                mole.active = false;
            }, 1);
        }, 0.5, cc.macro.REPEAT_FOREVER);
    }
    

    onMoleClick(event: cc.Event.EventTouch) {
        const mole = event.target;
        if (!mole.active) return;

        this.score += 10;
        this.updateScoreLabel();

        mole.active = false;
    }

    onLoad() {
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseClick, this);
        // 기본 마우스 포인터 숨기기
        // cocos2.X 버전에선 보통 Canvas ID를 GameCanvas로 자동 할당함
        const canvas = document.getElementById('GameCanvas'); 
        if (canvas) {
            canvas.style.cursor = 'none'; // 기본 커서 숨김 
        }
    }
    
    onMouseMove(event: cc.Event.EventMouse) {
        // 마우스의 화면 좌표를 가져옴
        const location = event.getLocation();
    
        // 화면 좌표를 Canvas(Local) 좌표로 변환
        const localPos = cc.Canvas.instance.node.convertToNodeSpaceAR(location);
    
        // 망치 노드를 해당 위치로 이동
        this.hammerNode.setPosition(localPos);
    }

    onMouseClick() {
        // 클릭 시 망치 살짝 내리치는 애니메이션 (간단한 scale 애니메이션)
        this.hammerNode.stopAllActions();
        this.hammerNode.runAction(
            cc.sequence(
                cc.scaleTo(0.05, 0.9),
                cc.scaleTo(0.05, 1.0)
            )
        );
    }
    

    gameOver() {
        if (this.isGameOver) return;
    
        this.isGameOver = true;
    
        this.unscheduleAllCallbacks(); // 모든 타이머 스케줄 정지
        this.timer = 0;
        this.updateTimerLabel();
    
        // 선택: 모든 두더지 비활성화
        for (const hole of this.moleHoles) {
            const mole = hole.getChildByName("Mole");
            if (mole) {
                mole.active = false;
            }
        }
    
        // 선택: "게임 종료!" 표시
        console.log("게임 종료!");
    }
}
