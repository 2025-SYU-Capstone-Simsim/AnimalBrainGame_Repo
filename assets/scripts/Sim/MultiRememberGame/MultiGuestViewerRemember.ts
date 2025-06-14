// File: MultiGuestViewerRemember.ts

import GameState from "../../Controller/CommonUI/GameState";
const { ccclass, property } = cc._decorator;

@ccclass
export default class OpponentMemoryViewer extends cc.Component {
  // 색상 버튼 노드 참조
  @property(cc.Button) redButton: cc.Button = null;
  @property(cc.Button) yellowButton: cc.Button = null;
  @property(cc.Button) greenButton: cc.Button = null;
  @property(cc.Button) blueButton: cc.Button = null;

  // 개구리 스프라이트(상대방 개구리 상태 표시용)
  @property(cc.Sprite) frogSprite: cc.Sprite = null;

  // 점수 표시용 프리팹
  @property(cc.Prefab) scoreDisplayPrefab: cc.Prefab = null;

  private buttonMap: { [color: string]: cc.Node } = {};
  private score: number = 0;
  private scoreLabel: cc.Label = null;

  onLoad() {
    // 버튼 노드를 색상별로 맵에 저장
    this.buttonMap = {
      red: this.redButton.node,
      yellow: this.yellowButton.node,
      green: this.greenButton.node,
      blue: this.blueButton.node,
    };

    // 점수 초기화
    this.initScoreDisplay();

    // (1) 호스트가 generateColorSequence() 직후 emit한 “sequence-generated” 수신
    cc.director.on(
      "sequence-generated",
      (data: { level: number; sequence: string[] }) => {
        this.showBlinkSequence(data.sequence);
      }
    );

    // (2) 호스트가 onColorButtonClick() 할 때마다 emit한 “user-input” 수신
    cc.director.on(
      "user-input",
      (data: { color: string; inputIndex: number }) => {
        this.showClickFeedback(data.color);
      }
    );

    // (3) 호스트가 checkUserInput() 판정 후 emit한 “input-result” 수신
    cc.director.on(
      "input-result",
      (data: { correct: boolean; level: number; player: string }) => {
        this.updateFrogState(data.correct ? "smile" : "cry");
      }
    );

    // (4) 호스트가 score 변경 시 emit한 “score-update” 수신
    cc.director.on(
      "score-update",
      (data: { player: string; score: number }) => {
        this.setScore(data.score);
      }
    );
  }

  // 점수 표시 초기화
  private initScoreDisplay() {
    if (!this.scoreDisplayPrefab) return;
    const scoreNode = cc.instantiate(this.scoreDisplayPrefab);
    this.node.addChild(scoreNode);
    this.scoreLabel = scoreNode
      .getChildByName("ScoreLabel")
      .getComponent(cc.Label);
    this.updateScoreLabel();
  }

  private updateScoreLabel() {
    if (this.scoreLabel) {
      this.scoreLabel.string = `${this.score}`;
    }
  }

  public setScore(value: number) {
    this.score = value;
    this.updateScoreLabel();
  }

  /**
   * 시퀀스 배열을 받아 상대방 화면에 블록(버튼)이 깜빡이는 효과를 재생합니다.
   * → 모든 버튼을 우선 어두운 상태(opacity=100)로 세팅한 뒤,
   *    sequence 순서대로 blinkButton()을 실행하고,
   *    마지막에 모든 버튼을 밝은 상태(opacity=255)로 복귀합니다.
   */
  private showBlinkSequence(sequence: string[]) {
    // 1) 깜빡임을 시작하기 전에 모든 버튼을 어두운 상태로 설정
    Object.values(this.buttonMap).forEach((btnNode) => {
      btnNode.opacity = 100;
    });

    // 2) 각 컬러별로 순차적으로 깜빡임 실행
    let delay = 0;
    sequence.forEach((color) => {
      const btnNode = this.buttonMap[color];
      if (!btnNode) return;

      this.scheduleOnce(() => {
        this.blinkButton(btnNode);
      }, delay);
      delay += 1.0; // 1초 간격
    });

    // 3) 전체 깜빡임이 끝난 뒤, 모든 버튼을 밝은 상태(255)로 복귀
    this.scheduleOnce(() => {
      Object.values(this.buttonMap).forEach((btnNode) => {
        btnNode.opacity = 255;
      });
    }, delay);
  }

  /**
   * 특정 버튼 노드를 깜빡이게 하는 Tween
   * → “어두운(100) → 밝은(255) → 어두운(100)” 순으로 바뀝니다.
   */
  private blinkButton(buttonNode: cc.Node) {
    const originalScale = buttonNode.scale;
    const darkOpacity = 100;

    // 항상 “어두운(darkOpacity)” 상태에서 출발하도록 세팅
    buttonNode.opacity = darkOpacity;

    cc.tween(buttonNode)
      .to(0.15, { scale: originalScale * 1.05, opacity: 255 }, { easing: "quadOut" })
      .to(0.15, { scale: originalScale, opacity: darkOpacity }, { easing: "quadIn" })
      .start();
  }

  // 상대가 클릭한 컬러 버튼에 대한 피드백(잠깐 밝게 → 다시 어둡게)
  private showClickFeedback(color: string) {
    const btnNode = this.buttonMap[color];
    if (!btnNode) return;

    const originalScale = btnNode.scale;
    const originalOpacity = btnNode.opacity || 100;

    // 1) 밝게(180) → 2) 원래 어두운 값(originalOpacity)
    cc.tween(btnNode)
      .to(0.1, { scale: originalScale * 0.9, opacity: 180 }, { easing: "quadIn" })
      .to(0.1, { scale: originalScale, opacity: originalOpacity }, { easing: "quadOut" })
      .start();
  }

  // 개구리 상태를 “neutral” | “smile” | “cry”로 변경
  private updateFrogState(state: "neutral" | "smile" | "cry") {
    const spriteMap = {
      neutral: "무표정개굴",
      smile: "웃는개굴",
      cry: "우는개굴",
    };
    const sizeMap = {
      neutral: { width: 200, height: 200 },
      smile: { width: 200, height: 250 },
      cry: { width: 300, height: 300 },
    };

    const spriteName = spriteMap[state];
    const size = sizeMap[state];

    cc.resources.load(
      `Images/Sim/${spriteName}`,
      cc.SpriteFrame,
      (err, spriteFrame) => {
        if (err) {
          console.error(`개구리 이미지 로드 실패: ${spriteName}`, err);
          return;
        }
        this.frogSprite.spriteFrame = spriteFrame;
        this.frogSprite.type = cc.Sprite.Type.SIMPLE;
        this.frogSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.frogSprite.node.setContentSize(size.width, size.height);
      }
    );
  }
}
