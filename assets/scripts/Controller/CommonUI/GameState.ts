export default class GameState {
  static lastGameScene: string = '';
  static nickname: string = '';
  static character: string = '';

  // 확장 예정: 점수, 난이도, 시간 등
  static score: number = 0;
  static difficulty: string = '';
  static playTime: number = 0;

  static resetGame() {
    this.lastGameScene = '';
    this.score = 0;
    this.difficulty = '';
    this.playTime = 0;
  }

  static resetUser() {
    this.nickname = '';
    this.character = '';
  }
}
