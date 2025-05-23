export default class GameState {
  static lastGameScene: string = '';
  static nickname: string = '';
  static character: string = '';
  static score: number = 0;
  static gameId: string = '';

  static recentSingleScores: {
    gameId: string;
    score: number;
    playedAt: string;
  }[] = [];

  static resetGame() {
    this.lastGameScene = '';
    this.score = 0;
  }

  static resetUser() {
    this.nickname = '';
    this.character = '';
    this.recentSingleScores = [];
  }
}
