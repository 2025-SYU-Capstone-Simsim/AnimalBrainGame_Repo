const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    @property(cc.Button)
    singleButton: cc.Button = null;

    @property(cc.Button)
    multiButton: cc.Button = null;

    @property(cc.Button)
    myPageButton: cc.Button = null;

async onLoad() {
  const jwtToken = localStorage.getItem('jwtToken');
  const browserId = localStorage.getItem('browserId');

  if (!jwtToken || !browserId) {
    cc.warn('❌ 토큰 또는 브라우저 ID 없음 → 로그인으로 이동');
    cc.director.loadScene('LoginScene');
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/auth/verify-token', {
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

    cc.log("토큰 검증 완료 → MainMenu 계속 진행");

    // 버튼 이벤트 등록
    this.registerButtonEvents(this.singleButton.node, this.onClickSingle.bind(this));
    this.registerButtonEvents(this.multiButton.node, this.onClickMulti.bind(this));
    this.registerButtonEvents(this.myPageButton.node, this.onClickMyPage.bind(this));

    if (!cc.sys.isMobile) {
      [this.singleButton, this.multiButton, this.myPageButton].forEach(btn => {
        const node = btn.node;
        node.on(cc.Node.EventType.MOUSE_ENTER, () => {
          node.scale = 1.1;
          cc.game.canvas.style.cursor = "pointer";
        });
        node.on(cc.Node.EventType.MOUSE_LEAVE, () => {
          node.scale = 1.0;
          cc.game.canvas.style.cursor = "default";
        });
      });
    }

  } catch (err) {
    cc.error("서버 통신 오류 → 로그인으로 이동", err);
    cc.director.loadScene("LoginScene");
  }
}


    registerButtonEvents(node: cc.Node, callback: () => void) {
        node.on(cc.Node.EventType.TOUCH_END, callback);
        node.on(cc.Node.EventType.MOUSE_DOWN, callback);
    }

    onClickSingle() {
        cc.log("싱글 게임 버튼 클릭됨. SingleGameList 씬으로 이동.");
        cc.director.loadScene("SingleGameList");
    }

    onClickMulti() {
        cc.log("멀티 게임 버튼 클릭됨. MultiWating씬으로 이동.");
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
