export default class GameState {
  static lastGameScene: string = '';
  static nickname: string = '';
  static character: string = '';
  
  static score: number = 0; // 점수 저장 용
  static gameId: string = ''; // 어떤 게임인지 구분용 ("mole-game", "3match-game")


  static resetGame() {
    this.lastGameScene = '';
    this.score = 0;

  }

  static resetUser() {
    this.nickname = '';
    this.character = '';
  }
}
