export default class GameState {
  static lastGameScene: string = '';
  static nickname: string = '';
  static character: string = '';
  static score: number = 0;
  static gameId: string = '';
  static incomingRoomId: string = '';
  static createdRoomId: string = ''; // 스트용 방 ID 저장
  static isHost: boolean = false;

  //   incomingRoomId : 초대받은 방 ID (게스트용) ->	http://...?roomId=XYZ123
//   createdRoomId : 생성한 방 ID (호스트용) 생성 -> API 응답 후 저장

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
    this.createdRoomId = ''; // 초기화 시 함께 리셋
    this.isHost = false; 
  }

  // GameState.ts
  static resetMultiplay() {
  this.createdRoomId = '';
  this.incomingRoomId = '';
  this.isHost = false;
}

// 멀티플레이 선택한 게임 목록
static selectedGameSequence: string[] = [];
// 현재 멀티플레이중인 게임 인덱스 번호
static currentGameIndex: number = 0;




}
