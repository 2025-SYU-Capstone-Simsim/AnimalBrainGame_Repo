const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
  // 1) 옵션 버튼들
  @property([cc.Button])
  optionButtons: cc.Button[] = [];

  // 2) 결과 레이블
  @property(cc.Label)
  resultLabel: cc.Label = null;

  // 3) 블록 부모 노드
  @property(cc.Node)
  blockParent: cc.Node = null;

  // 4) 블록 프리팹
  @property(cc.Prefab)
  blockPrefab: cc.Prefab = null;

  // 5) Next/Skip 버튼
  @property(cc.Button)
  nextButton: cc.Button = null;

  // 6) Score 레이블
  @property(cc.Label)
  scoreLabel: cc.Label = null;

  // 7) TIMEOUT 표시용 레이블
  @property(cc.Label)
  timeoutLabel: cc.Label = null;

  // 8) 남은 시간 표시용 레이블
  @property(cc.Label)
  timeLabel: cc.Label = null;

  private correctCount: number = 0;
  private score: number = 0;
  private answered: boolean = false;

  // 전체 게임 시간 (초)
  private timeLeft: number = 100;

  // y축(높이)마다 사용할 색상
  private layerColors: cc.Color[] = [
    cc.color(100, 170, 255),  // y=0
    cc.color(255, 100, 100),  // y=1
    cc.color(100, 255, 100),  // y=2
    cc.color(255, 255, 100),  // y=3
  ];

  onLoad() {
    // Next/Skip 버튼 클릭
    if (this.nextButton) {
      this.nextButton.node.on('click', this.nextQuestion, this);
    }

    // Score 초기화
    this.score = 0;
    if (this.scoreLabel) {
      this.scoreLabel.string = `점수 : ${this.score}점`;
    }

    // TIMEOUT 레이블 숨기기
    if (this.timeoutLabel) {
      this.timeoutLabel.node.active = false;
    }

    // 남은 시간 레이블 초기화
    this.timeLeft = 100;
    if (this.timeLabel) {
      this.timeLabel.string = `남은 시간: ${this.timeLeft}초`;
    }

    // 전체 게임 100초 카운트다운 시작
    this.startTimer();

    // 첫 문제 생성
    this.generateQuestion();
  }

  /** 100초 타이머 시작 */
  private startTimer() {
    this.unschedule(this.updateTimer);
    this.timeLeft = 100;
    if (this.timeLabel) {
      this.timeLabel.string = `남은 시간: ${this.timeLeft}초`;
    }
    this.schedule(this.updateTimer, 1);
  }

  /** 1초마다 호출되어 남은 시간을 갱신 */
  private updateTimer() {
    this.timeLeft--;
    if (this.timeLabel) {
      this.timeLabel.string = `남은 시간: ${this.timeLeft}초`;
    }
    if (this.timeLeft <= 0) {
      this.unschedule(this.updateTimer);
      this.onTimeout();
    }
  }

  /** 전체 시간이 다 됐을 때 호출 */
  private onTimeout() {
    // “TIMEOUT” 표시
    if (this.timeoutLabel) {
      this.timeoutLabel.node.active = true;
      this.timeoutLabel.string = 'TIMEOUT';
    }
    // 모든 버튼 비활성화
    this.optionButtons.forEach(btn => btn.interactable = false);
    if (this.nextButton) {
      this.nextButton.interactable = false;
    }
  }

  /** 새 문제 생성 (시간은 계속 흐릅니다) */
  generateQuestion() {
    this.answered = false;

    // Next 버튼 레이블 초기화
    if (this.nextButton) {
      const lbl = this.nextButton.node.getComponentInChildren(cc.Label)!;
      lbl.string = '건너뛰기';
      this.nextButton.interactable = true;
    }

    // 결과 레이블 초기화
    this.resultLabel.string = '';

    // 정답 개수 결정 및 블록 배치
    this.correctCount = Math.floor(Math.random() * 20) + 1;
    this.spawnBlocks(this.correctCount);

    // 보기 세팅
    const options = new Set<number>([this.correctCount]);
    while (options.size < this.optionButtons.length) {
      options.add(Math.floor(Math.random() * 30) + 1);
    }
    const list = Array.from(options);
    this.shuffleArray(list);
    this.optionButtons.forEach((btn, i) => {
      btn.interactable = true;
      const lbl = btn.node.getComponentInChildren(cc.Label)!;
      lbl.string = list[i].toString();
      btn.node.off('click');
      btn.node.on('click', () => this.checkAnswer(list[i]));
    });
  }

  /** 답안 확인 */
  checkAnswer(selected: number) {
    if (this.answered) return;

    // 정답인 경우
    if (selected === this.correctCount) {
        this.answered = true;
        this.resultLabel.string = '🎉 정답입니다!';
        this.score += 20;  // 맞았을 때 +10
        if (this.scoreLabel) {
          this.scoreLabel.string = `점수 : ${this.score}점`;
        }
        if (this.nextButton) {
          const lbl = this.nextButton.node.getComponentInChildren(cc.Label)!;
          lbl.string = '다음으로';
        }
      }
    // 오답인 경우
    else {
        this.resultLabel.string = '❌ 틀렸습니다!';
        this.score -= 10;  // 틀렸을 때 -10
        if (this.scoreLabel) {
          this.scoreLabel.string = `점수 : ${this.score}점`;
        }
        if (this.nextButton) {
          const lbl = this.nextButton.node.getComponentInChildren(cc.Label)!;
          lbl.string = '건너뛰기';
        }
      }
  }

  /** 다음 문제로 넘어가기 */
  nextQuestion() {
    if (this.timeLeft > 0) {
      this.generateQuestion();
    }
  }

  /** 블록 생성 & 애니메이션 (column-first, y축 기준) */
  spawnBlocks(count: number) {
    if (!this.blockParent) {
      console.error('[GameManager] blockParent가 연결되지 않았습니다!');
      return;
    }
    this.blockParent.removeAllChildren();

    const blockW = 100, blockH = 50, blockD = 50;
    const maxSize = 4, maxHeight = 4;

    // 가능한 (x,z) 좌표 셔플
    const xzList: { x: number; z: number }[] = [];
    for (let x = 0; x < maxSize; x++) {
      for (let z = 0; z < maxSize; z++) {
        xzList.push({ x, z });
      }
    }
    this.shuffleArray(xzList);

    // 컬럼 단위로 y=0→1→… 채우기
    type Pos = { x: number; z: number; y: number };
    const placedCoords: Pos[] = [];
    let placed = 0;
    outer: for (const { x, z } of xzList) {
      for (let y = 0; y < maxHeight && placed < count; y++) {
        placedCoords.push({ x, z, y });
        placed++;
      }
      if (placed >= count) break outer;
    }

    // y층별 그룹핑
    const layers: Pos[][] = [];
    let maxY = 0;
    placedCoords.forEach(p => {
      maxY = Math.max(maxY, p.y);
      if (!layers[p.y]) layers[p.y] = [];
      layers[p.y].push(p);
    });

    // 애니메이션 파라미터
    const dropH    = 500;
    const dropDur  = 0.15;
    const layerGap = dropDur + 0.08;
    const itemGap  = 0.05;

    // y=0→1→… 순서대로 떨어뜨리기
    for (let y = 0; y <= maxY; y++) {
      const layer = layers[y] || [];
      layer.forEach((p, i) => {
        const block = cc.instantiate(this.blockPrefab);
        block.parent = this.blockParent;
        block.zIndex = p.x + p.z + p.y * 10;

        // 아이소메트릭 목표 위치
        const isoX   = (p.x - p.z) * (blockW / 2);
        const floorY = -300;
        const baseY  = floorY + blockH / 2;
        const targetY = -(p.x + p.z) * (blockH / 2)
                        + baseY
                        + p.y * blockD;

        block.setPosition(isoX, targetY + dropH, 0);

        // 층마다 색상 적용
        const spr = block.getComponent(cc.Sprite)!;
        spr.node.color = this.layerColors[p.y] ?? cc.color(200, 200, 200);

        // tween 애니메이션
        const totalDelay = y * layerGap + i * itemGap;
        cc.tween(block)
          .delay(totalDelay)
          .to(dropDur, { position: cc.v3(isoX, targetY, 0) }, { easing: 'bounceOut' })
          .start();
      });
    }
  }

  /** 배열 셔플 유틸 */
  shuffleArray<T>(arr: T[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}
