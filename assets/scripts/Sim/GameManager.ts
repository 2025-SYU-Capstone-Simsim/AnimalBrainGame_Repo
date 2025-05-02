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

  private correctCount = 0;

  // y축(높이)마다 사용할 색상
  private layerColors: cc.Color[] = [
    cc.color(100, 170, 255),  // y=0
    cc.color(255, 100, 100),  // y=1
    cc.color(100, 255, 100),  // y=2
    cc.color(255, 255, 100),  // y=3
  ];

  onLoad() {
    // Next 버튼은 항상 보이게, 클릭 시 nextQuestion 호출
    if (this.nextButton) {
      this.nextButton.node.active = true;
      this.nextButton.node.on('click', this.nextQuestion, this);
    } else {
      console.warn('[GameManager] nextButton이 에디터에 연결되지 않았습니다!');
    }

    this.generateQuestion();
  }

  generateQuestion() {
    console.log('[GameManager] generateQuestion');

    // 1) 버튼 레이블 초기화: “건너뛰기”
    if (this.nextButton) {
      const lbl = this.nextButton.node.getComponentInChildren(cc.Label);
      if (lbl) lbl.string = '건너뛰기';
    }

    // 2) 정답 개수 랜덤 결정
    this.correctCount = Math.floor(Math.random() * 20) + 1;
    console.log('[GameManager] correctCount =', this.correctCount);

    // 3) 블록 스폰
    this.spawnBlocks(this.correctCount);

    // 4) 보기 세팅
    const options = new Set<number>([this.correctCount]);
    while (options.size < this.optionButtons.length) {
      options.add(Math.floor(Math.random() * 30) + 1);
    }
    const list = Array.from(options);
    this.shuffleArray(list);
    this.optionButtons.forEach((btn, i) => {
      const lbl = btn.node.getComponentInChildren(cc.Label)!;
      lbl.string = list[i].toString();
      btn.node.off('click');
      btn.node.on('click', () => this.checkAnswer(list[i]));
    });

    // 5) 결과 초기화
    this.resultLabel.string = '';
  }

  checkAnswer(selected: number) {
    console.log('[GameManager] checkAnswer', selected);
    if (selected === this.correctCount) {
      this.resultLabel.string = '🎉 정답입니다!';
      // 맞혔을 때만 레이블을 “다음으로”로 바꾼다
      if (this.nextButton) {
        const lbl = this.nextButton.node.getComponentInChildren(cc.Label);
        if (lbl) lbl.string = '다음으로';
      }
    } else {
      this.resultLabel.string = '❌ 틀렸습니다!';
      // 틀렸을 때는 다시 “건너뛰기”
      if (this.nextButton) {
        const lbl = this.nextButton.node.getComponentInChildren(cc.Label);
        if (lbl) lbl.string = '건너뛰기';
      }
    }
  }

  nextQuestion() {
    // 버튼을 눌러도 언제나 다음 문제로 넘어간다
    this.generateQuestion();
  }

  spawnBlocks(count: number) {
    console.log('[GameManager] spawnBlocks, count =', count, 'blockParent =', this.blockParent);
    if (!this.blockParent) {
      console.error('[GameManager] blockParent가 연결되지 않았습니다!');
      return;
    }
    this.blockParent.removeAllChildren();

    // 블록/맵 설정
    const blockW    = 100, blockH = 50, blockD = 50;
    const maxSize   = 4, maxHeight = 4;

    // 1) 가능한 (x,z) 좌표를 모두 셔플
    const xzList: { x: number; z: number }[] = [];
    for (let x = 0; x < maxSize; x++) {
      for (let z = 0; z < maxSize; z++) {
        xzList.push({ x, z });
      }
    }
    this.shuffleArray(xzList);

    // 2) 컬럼 단위로 y=0→1→… 채워나가기
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
    placedCoords.forEach(p => console.log('  → 배치 대상', p));

    // 3) y층별 그룹핑
    const layers: Pos[][] = [];
    let maxY = 0;
    placedCoords.forEach(p => {
      maxY = Math.max(maxY, p.y);
      if (!layers[p.y]) layers[p.y] = [];
      layers[p.y].push(p);
    });

    // 4) 애니메이션 파라미터
    const dropH    = 500;
    const dropDur  = 0.15;
    const layerGap = dropDur + 0.08;
    const itemGap  = 0.05;

    // 5) y=0→1→… 순으로 “차륵” 떨어뜨리기
    for (let y = 0; y <= maxY; y++) {
      const layer = layers[y] || [];
      layer.forEach((p, i) => {
        const block = cc.instantiate(this.blockPrefab);
        block.parent = this.blockParent;
        block.zIndex = p.x + p.z + p.y * 10;

        // 아이소메트릭 목표 위치
        const isoX    = (p.x - p.z) * (blockW / 2);
        const floorY  = -300;
        const baseY   = floorY + blockH / 2;
        const targetY = -(p.x + p.z) * (blockH / 2)
                        + baseY
                        + p.y * blockD;

        block.setPosition(isoX, targetY + dropH, 0);

        // y층별 색상
        const spr = block.getComponent(cc.Sprite)!;
        spr.node.color = this.layerColors[p.y] ?? cc.color(200, 200, 200);

        // tween
        const totalDelay = y * layerGap + i * itemGap;
        cc.tween(block)
          .delay(totalDelay)
          .to(dropDur, { position: cc.v3(isoX, targetY, 0) }, { easing: 'bounceOut' })
          .start();
      });
    }
  }

  shuffleArray<T>(arr: T[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}
