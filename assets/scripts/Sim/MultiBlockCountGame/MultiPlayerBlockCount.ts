import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
  @property([cc.Button])
  optionButtons: cc.Button[] = [];

  @property(cc.Label)
  resultLabel: cc.Label = null;

  @property(cc.Node)
  blockParent: cc.Node = null;

  @property(cc.Prefab)
  blockPrefab: cc.Prefab = null;

  @property(cc.Button)
  nextButton: cc.Button = null;

  @property(cc.Prefab)
  gameStartOverlayPrefab: cc.Prefab = null;

  @property(cc.Prefab)
  gameOverUIPrefab: cc.Prefab = null;

  //
  // 추가된 프리팹 속성
  @property(cc.Prefab)
  scoreUIPrefab: cc.Prefab = null;

  @property(cc.Prefab)
  timeUIPrefab: cc.Prefab = null;

  // 내부에서 연결될 Label 컴포넌트
  private scoreLabel: cc.Label = null;
  private timeLabel: cc.Label = null;

  private correctCount: number = 0;
  private score: number = 0;
  private answered: boolean = false;
  private timeLeft: number = 60;

  private blockTextures: string[] = [
    "Images/Sim/navyBlock",
    "Images/Sim/darkBlueBlock",
    "Images/Sim/blueBlock",
    "Images/Sim/whiteblueBlock"
  ];

  onLoad() {
    GameState.lastGameScene = cc.director.getScene().name;
    cc.debug.setDisplayStats(false);

    // Score UI 프리팹 인스턴스화
    if (this.scoreUIPrefab) {
      const scoreUI = cc.instantiate(this.scoreUIPrefab);
      this.node.addChild(scoreUI);


      const scoreLabelNode = scoreUI.getChildByName("ScoreLabel");
      if (scoreLabelNode) {
        this.scoreLabel = scoreLabelNode.getComponent(cc.Label);
      }

      if (!this.scoreLabel) {
        console.warn("⚠️ ScoreLabel 연결 실패! 프리팹 구조 또는 노드 이름을 확인하세요.");
      }
    }

    // Time UI 프리팹 인스턴스화
    if (this.timeUIPrefab) {
      const timeUI = cc.instantiate(this.timeUIPrefab);
      this.node.addChild(timeUI);

      const timeLabelNode = timeUI.getComponentInChildren(cc.Label); // 일반적인 구조
      if (timeLabelNode) {
        this.timeLabel = timeLabelNode;
      }

      if (!this.timeLabel) {
        console.warn("⚠️ TimeLabel 연결 실패! 프리팹 구조 또는 컴포넌트 확인하세요.");
      }
    }

    if (this.nextButton) {
      this.nextButton.node.on('click', this.nextQuestion, this);
    }

    this.score = 0;
    if (this.scoreLabel) this.scoreLabel.string = `${this.score}`;

    this.timeLeft = 100;
    if (this.timeLabel) this.timeLabel.string = `${this.timeLeft}`;

    if (this.gameStartOverlayPrefab) {
      const overlay = cc.instantiate(this.gameStartOverlayPrefab);
      this.node.addChild(overlay);
      overlay.setPosition(0, 400);
      this.scheduleOnce(() => this.startGame(), 2);
    } else {
      this.startGame();
    }
  }

  private startGame() {
    this.startTimer();
    this.generateQuestion();
  }

  private startTimer() {
    this.unschedule(this.updateTimer);
    this.timeLeft = 30;
    if (this.timeLabel) this.timeLabel.string = `${this.timeLeft}`;
    this.schedule(this.updateTimer, 1);
  }

  private updateTimer() {
    this.timeLeft--;
    if (this.timeLabel) this.timeLabel.string = `${this.timeLeft}`;
    if (this.timeLeft <= 0) {
      this.unschedule(this.updateTimer);
      this.onTimeout();
    }
  }

  private onTimeout() {
    this.optionButtons.forEach(btn => btn.interactable = false);
    if (this.nextButton) this.nextButton.interactable = false;

    GameState.lastGameScene = cc.director.getScene().name;
    GameState.score = this.score;
    GameState.gameId = "block-count-game";

    const gameOverUI = cc.instantiate(this.gameOverUIPrefab);
    this.node.addChild(gameOverUI);
    gameOverUI.setPosition(0, 400);
  }

  generateQuestion() {
    this.answered = false;

    if (this.nextButton) {
      const lbl = this.nextButton.node.getComponentInChildren(cc.Label)!;
      lbl.string = 'skip';
      this.nextButton.interactable = true;
    }

    this.resultLabel.string = '';
    this.correctCount = Math.floor(Math.random() * 20) + 1;
    this.spawnBlocks(this.correctCount);

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
      this.resultLabel.string = '🎉';
      this.score += 20;  // 맞았을 때 +10
      if (this.scoreLabel) {
        this.scoreLabel.string = `${this.score}`;
      }
      if (this.nextButton) {
        const lbl = this.nextButton.node.getComponentInChildren(cc.Label)!;
        lbl.string = '다음';
      }
    }
    // 오답인 경우
    else {
      this.resultLabel.string = '❌';
      this.score -= 10;  // 틀렸을 때 -10
      if (this.scoreLabel) {
        this.scoreLabel.string = `${this.score}`;
      }
      if (this.nextButton) {
        const lbl = this.nextButton.node.getComponentInChildren(cc.Label)!;
        lbl.string = 'skip';
      }
    }
  }

  nextQuestion() {
    if (this.timeLeft > 0) {
      this.generateQuestion();
    }
  }

  spawnBlocks(count: number) {
    if (!this.blockParent) {
      console.error('[GameManager] blockParent가 연결되지 않았습니다!');
      return;
    }

    this.blockParent.removeAllChildren();

    const blockW = 100, blockH = 50, blockD = 50;
    const maxSize = 3, maxHeight = 3;

    const xzList: { x: number; z: number }[] = [];
    for (let x = 0; x < maxSize; x++) {
      for (let z = 0; z < maxSize; z++) {
        xzList.push({ x, z });
      }
    }

    this.shuffleArray(xzList);

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

    const layers: Pos[][] = [];
    let maxY = 0;
    placedCoords.forEach(p => {
      maxY = Math.max(maxY, p.y);
      if (!layers[p.y]) layers[p.y] = [];
      layers[p.y].push(p);
    });

    const dropH = 200;
    const dropDur = 0.15;
    const layerGap = dropDur + 0.08;
    const itemGap = 0.05;

    for (let y = 0; y <= maxY; y++) {
      const layer = layers[y] || [];
      layer.forEach((p, i) => {
        const block = cc.instantiate(this.blockPrefab);
        block.parent = this.blockParent;
        block.zIndex = p.x + p.z + p.y * 10;

        const isoX = (p.x - p.z) * (blockW / 2);
        const floorY = -300;
        const baseY = floorY + blockH / 2;
        const targetY = -(p.x + p.z) * (blockH / 2) + baseY + p.y * blockD;

        block.setPosition(isoX, targetY + dropH, 0);

        const spr = block.getComponent(cc.Sprite)!;
        const texPath = this.blockTextures[p.y] ?? this.blockTextures[0];
        cc.resources.load(texPath, cc.SpriteFrame, (err, spriteFrame) => {
          if (!err && spriteFrame) {
            spr.spriteFrame = spriteFrame;
          } else {
            console.warn(`블록 텍스처 로드 실패: ${texPath}`, err);
          }
        });

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

  loadList() {
    console.log("싱글 게임 리스트로 돌아가기");
    cc.director.loadScene('SingleGameList');
  }
}
