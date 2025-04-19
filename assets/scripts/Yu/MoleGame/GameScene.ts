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

    private moleHoles: cc.Node[] = [];  // 구멍을 저장할 배열
    private score: number = 0;  // 점수
    private timer: number = 30;  // 타이머 30초
    private isGameOver: boolean = false;

    // 게임 시작
    start() {
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
