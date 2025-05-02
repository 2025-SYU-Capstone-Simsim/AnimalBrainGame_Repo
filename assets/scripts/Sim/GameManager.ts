const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
  @property([cc.Button]) optionButtons: cc.Button[] = [];
  @property(cc.Label)   resultLabel: cc.Label   = null;
  @property(cc.Node)    blockParent: cc.Node    = null;
  @property(cc.Prefab)  blockPrefab: cc.Prefab  = null;
  @property(cc.Node)    nextButtonNode: cc.Node = null;

  private correctCount = 0;

  // y(스택 높이) 층마다 사용할 색상
  private layerColors: cc.Color[] = [
    cc.color(100, 170, 255),   // y = 0
    cc.color(255, 100, 100),   // y = 1
    cc.color(100, 255, 100),   // y = 2
    cc.color(255, 255, 100),   // y = 3
  ];

  onLoad() {
    this.generateQuestion();
  }

  generateQuestion() {
    // 정답 개수 결정
    this.correctCount = Math.floor(Math.random() * 20) + 1;
    // 블록 배치
    this.spawnBlocks(this.correctCount);

    // 보기 세팅
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

    // 결과 초기화
    this.resultLabel.string = '';
  }

  spawnBlocks(count: number) {
    this.blockParent.removeAllChildren();

    // 블록 크기 & 맵 한계
    const blockW = 50, blockH = 25, blockD = 26;
    const maxSize   = 4;  // x, z 크기
    const maxHeight = 4;  // y(높이) 최대

    // 1) 가능한 모든 (x,z) 좌표 셔플
    type XZ = { x: number; z: number };
    const xzList: XZ[] = [];
    for (let x = 0; x < maxSize; x++) {
      for (let z = 0; z < maxSize; z++) {
        xzList.push({ x, z });
      }
    }
    this.shuffleArray(xzList);

    // 2) 기둥 단위로 y=0→1→2→3 순서로 채우기
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

    // 3) y층별로 그룹핑
    const layers: Pos[][] = [];
    let maxY = 0;
    placedCoords.forEach(p => {
      maxY = Math.max(maxY, p.y);
      if (!layers[p.y]) layers[p.y] = [];
      layers[p.y].push(p);
    });

    // 4) 애니메이션 파라미터
    const dropH    = 500;           // 시작 높이
    const dropDur  = 0.6;           // 낙하 시간
    const layerGap = dropDur + 0.2; // 층 간 텀
    const itemGap  = 0.05;          // 같은 층 내 블록당 딜레이

    // 5) y=0 → y=1 → … 순서대로 “차륵” 떨어뜨리기
    for (let y = 0; y <= maxY; y++) {
      const layer = layers[y] || [];
      layer.forEach((p, i) => {
        const block = cc.instantiate(this.blockPrefab);
        block.parent = this.blockParent;
        block.zIndex = p.x + p.z + p.y * 10;

        // 아이소메트릭 목표 위치 계산
        const isoX    = (p.x - p.z) * (blockW / 2);
        const floorY  = -300;
        const baseY   = floorY + blockH / 2;
        // ★ y 축이 커질수록 위로 쌓이도록 + p.y * blockD
        const targetY = -(p.x + p.z) * (blockH / 2)
                        + baseY
                        + p.y * blockD;

        // 시작 위치(위로 띄워 놓기)
        block.setPosition(isoX, targetY + dropH, 0);

        // 층마다 다른 색 적용
        const spr = block.getComponent(cc.Sprite)!;
        spr.node.color = this.layerColors[p.y] ?? cc.color(200, 200, 200);

        // 실제 떨어뜨리는 tween
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

  checkAnswer(selected: number) {
    this.resultLabel.string =
      selected === this.correctCount ? '🎉 정답입니다!' : '❌ 틀렸습니다!';
  }

  nextQuestion() {
    this.generateQuestion();
  }
}
