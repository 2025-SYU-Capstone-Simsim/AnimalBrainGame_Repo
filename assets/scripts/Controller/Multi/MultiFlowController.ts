import GameState from "../CommonUI/GameState";

const { ccclass } = cc._decorator;

@ccclass
export default class MultiGameFlowController {
  /** 
   * 1) 씬이 로드될 때(예: start()나 onLoad() 초기에) 반드시 호출
   * 2) join-room, guest-ready/GameStart 흐름을 처리
   * 3) 공통 “game-event” 리스너 등록 → move-scene, host-left, spawn-~, hit-~, score-update 모두 이곳에서 중계
   */
static initializeSocketListeners() {
  if (cc.sys.isNative || !window.socket) return;
  const roomId = GameState.createdRoomId || GameState.incomingRoomId;
  if (!roomId) return;
  window.socket.emit("join-room", roomId);
  if (!GameState.isHost) {
    setTimeout(() => {
      window.socket.emit("game-event", {
        type: "guest-ready",
        roomId,
        payload: { playerId: GameState.browserId || "" }
      });
    }, 200);
  }
  window.socket.off("game-event");

  window.socket.on("game-event", (message: any) => {
    const { type, payload, roomId: incomingRoomId } = message;
    if (incomingRoomId !== roomId) return;

    switch (type) {
      case "guest-ready":
        if (GameState.isHost) {
          window.socket.emit("game-event", { type: "game-start", roomId, payload: {} });
          cc.director.emit("multi-game-start");
        }
        break;

      case "game-start":
        if (!GameState.isHost) {
          cc.director.emit("multi-game-start");
        }
        break;

      case "spawn-mole":
      case "hit-mole":
      case "score-update":
        cc.director.emit(type, payload); // 필수 
        break;

              // 기억력 게임 전용 이벤트 추가
        case "sequence-generated":
        case "user-input":
        case "input-result":
        case "level-up":
          cc.director.emit(type, payload);
          break;

      case "move-scene":
        {
          // 디버그 로그: 서버가 보내준 씬 이름을 찍어본다
          cc.log(`[FlowController] move-scene 수신. payload.sceneName = "${payload?.sceneName}"`);

          const sceneName = payload?.sceneName;
          if (sceneName) {
            // 직접 loadScene 호출 전에도 한 번 “씬 파일이 실제 있는지” 
            cc.log(`[FlowController] loadScene 시도 → "${sceneName}"`);
            cc.director.loadScene(sceneName, () => {
              cc.log(`[FlowController] loadScene 콜백: "${sceneName}" 로드 완료`);
            });
          } else {
            cc.warn("[FlowController] move-scene: payload.sceneName이 없어서 loadScene 하지 않습니다.");
          }
        }
        break;

      case "host-left":
        GameState.resetMultiplay();
        cc.director.loadScene("MainScene");
        break;

      default:
        console.warn("MultiGameFlowController: 알 수 없는 game-event:", type);
    }
  });

  window.socket.on("connect", () => {
    if (roomId) {
      window.socket.emit("join-room", roomId);
    }
  });
}


  /**
   * 각 게임 씬에서 “게임이 완전히 끝났을 때” 반드시 호출해야함
   * - 스케줄러 모두 해제
   * - isGameOver 플래그 세팅
   * - 서버에 “game-end” emit → 서버는 결과 씬으로 브로드캐스트
   */
  static endGame(sceneInstance: {
    isGameOver: boolean;
    unscheduleAllCallbacks: () => void;
    score: number;
  }) {
    if (sceneInstance.isGameOver) return;
    sceneInstance.isGameOver = true;
    sceneInstance.unscheduleAllCallbacks?.();

    const roomId = GameState.createdRoomId || GameState.incomingRoomId;
    const finalScore = sceneInstance.score;

    if (!cc.sys.isNative && window.socket && roomId) {
      window.socket.emit("game-event", {
        type: "game-end",
        roomId,
        payload: {
          score: finalScore,
          nickname: GameState.nickname,
          character: GameState.character,
          isHost: GameState.isHost === true
        }
      });
    }
    cc.log("MultiGameFlowController.endGame → game-end emit, 점수:", finalScore);
  }
}