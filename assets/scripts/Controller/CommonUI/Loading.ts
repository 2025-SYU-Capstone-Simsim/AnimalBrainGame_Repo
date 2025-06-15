const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingDots extends cc.Component {
  @property(cc.Label)
  loadingLabel: cc.Label = null;

  private dots = '';
  private timer = 0;
  private interval = 0.5; // 점이 바뀌는 간격 (초)

  update(dt: number) {
    this.timer += dt;
    if (this.timer >= this.interval) {
      this.timer = 0;
      this.updateDots();
    }
  }

  updateDots() {
    // 점이 3개면 다시 0개로
    if (this.dots.length >= 3) {
      this.dots = '';
    } else {
      this.dots += '.';
    }
    this.loadingLabel.string = `Loading${this.dots}`;
  }
}
