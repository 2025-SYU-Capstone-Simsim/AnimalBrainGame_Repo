const { ccclass, property } = cc._decorator;
import GameState from "../CommonUI/GameState";

@ccclass
export default class MainMenu extends cc.Component {
  @property(cc.Button)
  singleButton: cc.Button = null;

  @property(cc.Button)
  multiButton: cc.Button = null;

  @property(cc.Button)
  myPageButton: cc.Button = null;

async onLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const incomingRoomId = urlParams.get("roomId");

    const jwtToken = localStorage.getItem('jwtToken');
    const browserId = localStorage.getItem('browserId');

    // 1. 초대 링크 감지 시
    if (incomingRoomId) {
      cc.log("초대 링크 감지 roomId:", incomingRoomId);

      // 로그인 안됨 → pendingRoomId 저장 후 LoginScene으로 이동
      if (!jwtToken || !browserId) {
        cc.warn("로그인 안됨 → 로그인 후 복귀를 위해 roomId 저장");
        localStorage.setItem("pendingRoomId", incomingRoomId);
        // URL에서 roomId 쿼리 제거 (중복 이동 방지)
        history.replaceState(null, '', window.location.pathname);
        cc.director.loadScene("LoginScene");
        return;
      }

      // 이미 로그인 상태 → 바로 PlayerConnect로 이동 (url에 roomId 쿼리 제거)
      history.replaceState(null, '', window.location.pathname);

      GameState.incomingRoomId = incomingRoomId;
      GameState.isHost = false; // 게스트 입장
      cc.director.loadScene("PlayerConnect");
      return;
    }

    // 2. 일반 로그인 상태 체크
    if (!jwtToken || !browserId) {
      cc.warn('토큰 또는 브라우저 ID 없음 → 로그인으로 이동');
      cc.director.loadScene('LoginScene');
      return;
    }

    // 3. 토큰 서버 검증
    try {
      const res = await fetch('http://43.201.75.158:3000/auth/verify-token', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${jwtToken}` }
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        cc.warn("유효하지 않은 토큰. 로그인으로 리다이렉트");
        localStorage.removeItem("jwtToken");
        cc.director.loadScene("LoginScene");
        return;
      }

      cc.log("토큰 검증 완료");

      this.registerButtonEvents(this.singleButton.node, this.onClickSingle.bind(this));
      this.registerButtonEvents(this.multiButton.node, this.onClickMulti.bind(this));
      this.registerButtonEvents(this.myPageButton.node, this.onClickMyPage.bind(this));

    } catch (err) {
      cc.error("서버 통신 오류 → 로그인으로 이동", err);
      cc.director.loadScene("LoginScene");
    }
}



  registerButtonEvents(node: cc.Node, callback: () => void) {
    cc.log("버튼 이벤트 등록:", node.name);
    node.on(cc.Node.EventType.TOUCH_END, callback);
    node.on(cc.Node.EventType.MOUSE_DOWN, callback);
  }

  onClickSingle() {
    cc.log("싱글 게임 버튼 클릭됨. SingleGameList 씬으로 이동.");
    cc.director.loadScene("SingleGameList");
  }

  onClickMulti() {
    cc.log("onClickMulti 호출됨");
    GameState.isHost = true;
    cc.log("isHost 설정됨:", GameState.isHost);
    cc.director.loadScene("MultiWatingPage");
  }

  onClickMyPage() {
    cc.log("마이페이지 버튼 클릭됨. MyInfo 씬으로 이동.");
    cc.director.loadScene("MyInfo");
  }

  onClickLogin() {
    cc.log("뒤로가기 버튼 클릭됨. Login 씬으로 이동.");
    cc.director.loadScene("LoginScene");
  }
}
