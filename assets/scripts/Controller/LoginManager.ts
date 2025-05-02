const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginManager extends cc.Component {
  @property(cc.EditBox)
  nicknameInput: cc.EditBox = null;

  @property(cc.Sprite)
  dogSprite: cc.Sprite = null;
  @property(cc.Sprite)
  tigerSprite: cc.Sprite = null;
  @property(cc.Sprite)
  rabbitSprite: cc.Sprite = null;

  @property(cc.Button)
  startButton: cc.Button = null;

  private selectedCharacter: string = '';

  onLoad() {
    this.startButton.interactable = false;
    // cc.log("LoginManager loaded");
  }

  onSelectCharacter(event: cc.Event, character: string) {
    this.selectedCharacter = character;
    // cc.log("캐릭터 선택됨:", character); 
    this.checkFormValid();
  }
  

  onNicknameChanged() {
    // cc.log("닉네임 입력 중:", this.nicknameInput.string);
    this.checkFormValid();
  }

  checkFormValid() {
    const isFilled = this.nicknameInput.string.trim() !== '' && this.selectedCharacter !== '';
    this.startButton.interactable = isFilled;
    // cc.log("폼 유효성 검사:", isFilled);
  }

  async onClickStart() {
    const nickname = this.nicknameInput.string.trim();
    const character = this.selectedCharacter;

    cc.log("Start 버튼 클릭됨 - 닉네임:", nickname, "캐릭터:", character);

    if (!nickname) {
      // cc.log("닉네임을 입력해주세요.");
      return;
    }

    if (!character) {
      // cc.log("캐릭터를 선택해주세요.");
      return;
    }

    try {
      // 1. 브라우저 고유 ID 생성 or 가져오기
      let browserId = localStorage.getItem('browserId');
      if (!browserId) {
        browserId = this.generateBrowserId();
        localStorage.setItem('browserId', browserId);
        cc.log("새 브라우저 ID 생성됨:", browserId);
      } else {
        cc.log("기존 브라우저 ID:", browserId);
      }

      // 2. 로그인 요청
      const loginRes = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ browserId })
      });

      cc.log("로그인 응답 상태:", loginRes.status);
      if (!loginRes.ok) {
        cc.error("로그인 실패:", await loginRes.text());
        return;
      }

      const loginData = await loginRes.json();
      const jwtToken = loginData.token;
      cc.log("JWT 토큰 발급됨:", jwtToken);
      localStorage.setItem('jwtToken', jwtToken);

      // 3. 프로필 저장 요청
      const profileRes = await fetch('http://localhost:3000/auth/set-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({ nickname, character })
      });

      cc.log("프로필 저장 응답 상태:", profileRes.status);
      if (!profileRes.ok) {
        cc.error("프로필 저장 실패:", await profileRes.text());
        return;
      }

      cc.log("로그인 및 프로필 저장 완료");

      // 4. 게임 시작 (씬 이동 등)
      cc.director.loadScene("MainScene");

    } catch (error) {
      cc.error("에러 발생:", error);
    }
  }

  generateBrowserId(): string {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
  }
}
