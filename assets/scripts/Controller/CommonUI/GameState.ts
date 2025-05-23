export default class GameState {
  static lastGameScene: string = '';
  static nickname: string = '';
  static character: string = '';
  static score: number = 0;
  static gameId: string = '';
  static incomingRoomId: string = '';
  static isHost: boolean = false; // 역할 구분 추가

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
    this.incomingRoomId = '';
    // this.isHost = false;
  }
}