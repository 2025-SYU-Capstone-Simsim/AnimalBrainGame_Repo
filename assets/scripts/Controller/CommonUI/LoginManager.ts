import GameState from "./GameState";
const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginManager extends cc.Component {
  @property(cc.EditBox)
  nicknameInput: cc.EditBox = null;

  @property(cc.Button)
  startButton: cc.Button = null;

  @property(cc.Prefab)
  dogPrefab: cc.Prefab = null;
  @property(cc.Prefab)
  rabbitPrefab: cc.Prefab = null;
  @property(cc.Prefab)
  tigerPrefab: cc.Prefab = null;

  @property(cc.Node) dogCharacter: cc.Node = null;
  @property(cc.Node) rabbitCharacter: cc.Node = null;
  @property(cc.Node) tigerCharacter: cc.Node = null;

  @property(cc.Node)
  dogSlot: cc.Node = null;
  @property(cc.Node)
  rabbitSlot: cc.Node = null;
  @property(cc.Node)
  tigerSlot: cc.Node = null;

  private currentSelectedContainer: cc.Node = null;
  private selectedCharacter: string = '';

  onLoad() {
    const overlay = cc.find("Canvas/TransitionOverlay");
    if (overlay) {
      overlay.active = false;
      overlay.opacity = 0;
    }

    
    this.startButton.interactable = false;

    this.tryAutoLogin();

    this.clearSlots();
    this.instantiateCharacter('dog');
    this.instantiateCharacter('rabbit');
    this.instantiateCharacter('tiger');

    // 모바일 & 데스크탑 모두 버튼 작동하도록 이벤트 등록
    this.registerButtonEvents(this.startButton.node, this.onClickStart.bind(this));

    // 마우스 커서 변경은 데스크탑에서만
    if (!cc.sys.isMobile) {
      this.startButton.node.on(cc.Node.EventType.MOUSE_ENTER, () => {
        cc.game.canvas.style.cursor = "pointer";
      });
      this.startButton.node.on(cc.Node.EventType.MOUSE_LEAVE, () => {
        cc.game.canvas.style.cursor = "default";
      });
    }
  }

  registerButtonEvents(node: cc.Node, callback: () => void) {
    node.on(cc.Node.EventType.TOUCH_END, callback);
    node.on(cc.Node.EventType.MOUSE_DOWN, callback);
  }

  clearSlots() {
    this.dogSlot.removeAllChildren();
    this.rabbitSlot.removeAllChildren();
    this.tigerSlot.removeAllChildren();
  }

  instantiateCharacter(type: 'dog' | 'rabbit' | 'tiger') {
    let prefab: cc.Prefab;
    let slot: cc.Node;
    let container: cc.Node;

    switch (type) {
      case 'dog': prefab = this.dogPrefab; slot = this.dogSlot; container = this.dogCharacter; break;
      case 'rabbit': prefab = this.rabbitPrefab; slot = this.rabbitSlot; container = this.rabbitCharacter; break;
      case 'tiger': prefab = this.tigerPrefab; slot = this.tigerSlot; container = this.tigerCharacter; break;
    }

    if (prefab && slot && container) {
      const instance = cc.instantiate(prefab);
      slot.removeAllChildren();
      slot.addChild(instance);

      // 모바일 터치와 데스크탑 마우스 모두 대응
      container.on(cc.Node.EventType.MOUSE_DOWN, () => {
        this.selectCharacter(type, container);
      });
      container.on(cc.Node.EventType.TOUCH_START, () => {
        this.selectCharacter(type, container);
      });

      if (!cc.sys.isMobile) {
        container.on(cc.Node.EventType.MOUSE_ENTER, () => {
          cc.game.canvas.style.cursor = "pointer";
        });
        container.on(cc.Node.EventType.MOUSE_LEAVE, () => {
          cc.game.canvas.style.cursor = "default";
        });
      }
    }
  }

  selectCharacter(type: string, container: cc.Node) {
    this.selectedCharacter = type;

    if (this.currentSelectedContainer && this.currentSelectedContainer !== container) {
      this.setCharacterEffect(this.currentSelectedContainer, false);
    }

    this.setCharacterEffect(container, true);
    this.currentSelectedContainer = container;

    this.checkFormValid();
  }

  setCharacterEffect(node: cc.Node, selected: boolean) {
    node.setScale(selected ? 1.2 : 1);
    node.opacity = selected ? 255 : 200;
  }

  onSelectCharacter(_: cc.Event, character: string) {
    if (typeof character === 'string') {
      this.selectedCharacter = character;
      cc.log("캐릭터 선택됨:", character);
    } else {
      cc.warn("잘못된 캐릭터 선택값:", character);
      this.selectedCharacter = '';
    }
    this.checkFormValid();
  }

  onNicknameChanged() {
    cc.log("닉네임 입력 중:", this.nicknameInput.string);
    this.checkFormValid();
  }

  checkFormValid() {
    const isFilled = this.nicknameInput.string.trim() !== '' && this.selectedCharacter !== '';
    this.startButton.interactable = isFilled;
    cc.log("폼 유효성:", isFilled);
  }

  async onClickStart() {
    const nickname = this.nicknameInput.string.trim();
    const character = this.selectedCharacter;

    if (!nickname || !character) return;

    try {
      let browserId = localStorage.getItem('browserId');
      if (!browserId) {
        browserId = this.generateBrowserId();
        localStorage.setItem('browserId', browserId);
      }
      GameState.browserId = browserId;

      const loginRes = await fetch('https://smartzoo.shop/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ browserId })
      });

      if (!loginRes.ok) return;
      const loginData = await loginRes.json();
      const jwtToken = loginData.token;
      localStorage.setItem('jwtToken', jwtToken);

      const profileRes = await fetch('https://smartzoo.shop/auth/set-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({ nickname, character })
      });

      if (!profileRes.ok) return;

      GameState.nickname = nickname;
      GameState.character = character;

      const pendingRoomId = localStorage.getItem("pendingRoomId");
      if (pendingRoomId) {
        GameState.incomingRoomId = pendingRoomId;
        GameState.isHost = false;
        localStorage.removeItem("pendingRoomId");
        this.fadeOutToScene("PlayerConnect"); // 초대방으로 페이드 전환
      } else {
        this.fadeOutToScene("MainScene"); // 일반 진입 시 페이드 전환
      }

    } catch (error) {
      cc.error("에러 발생:", error);
    }
  }

  generateBrowserId(): string {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async tryAutoLogin() {
    const jwtToken = localStorage.getItem('jwtToken');
    const browserId = localStorage.getItem('browserId');
    if (!jwtToken || !browserId) return;
    GameState.browserId = browserId;

    const verify = await fetch('https://smartzoo.shop/auth/verify-token', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    });

    const verifyResult = await verify.json();
    if (!verify.ok || !verifyResult.success) return;

    const res = await fetch('https://smartzoo.shop/auth/user-info', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    });

    const result = await res.json();
    if (result.success) {
      GameState.nickname = result.nickname;
      GameState.character = result.character;
      GameState.recentSingleScores = result.recentSingleScores;
      cc.log("자동 로그인 GameState 채움:", GameState);
      this.fadeOutToScene("MainScene"); // 페이드 효과로 전환
    }
  }

  fadeOutToScene(sceneName: string) {
    const overlay = cc.find("Canvas/TransitionOverlay");
    if (!overlay) {
      cc.warn("TransitionOverlay를 찾을 수 없습니다.");
      cc.director.loadScene(sceneName); // fallback
      return;
    }

    overlay.active = true;
    overlay.opacity = 0;

    cc.tween(overlay)
      .to(0.5, { opacity: 255 })
      .call(() => {
        cc.director.loadScene(sceneName);
      })
      .start();
  }


}
