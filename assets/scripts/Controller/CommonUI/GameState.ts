export default class GameState {
  static lastGameScene: string = '';
  static nickname: string = '';
  static character: string = '';
  static score: number = 0;
  static gameId: string = '';
  static incomingRoomId: string = '';
  static createdRoomId: string = '';
  static isHost: boolean = false;

  //  상대방 정보 저장용
  static hostNickname: string = '';
  static hostCharacter: string = '';
  static guestNickname: string = '';
  static guestCharacter: string = '';

  // 싱글 게임 기록
  static recentSingleScores: {
    gameId: string;
    score: number;
    playedAt: string;
  }[] = [];

  // Firebase 인증에 사용되는 브라우저 고유 식별자 (JWT payload에 포함됨)
  static browserId: string = '';

  static resetGame() {
    this.lastGameScene = '';
    this.score = 0;
  }

  static resetUser() {
    this.nickname = '';
    this.character = '';
    this.recentSingleScores = [];
    this.incomingRoomId = '';
    this.createdRoomId = '';
    this.isHost = false;

    //  상대방 정보 초기화
    this.hostNickname = '';
    this.hostCharacter = '';
    this.guestNickname = '';
    this.guestCharacter = '';
  }

  static resetMultiplay() {
    this.createdRoomId = '';
    this.incomingRoomId = '';
    this.isHost = false;

    //  상대방 정보도 함께 초기화
    this.hostNickname = '';
    this.hostCharacter = '';
    this.guestNickname = '';
    this.guestCharacter = '';
  }

  // // 멀티플레이 선택 게임 목록과 인덱스
  // static selectedGameSequence: string[] = [];
  // static currentGameIndex: number = 0;
}
