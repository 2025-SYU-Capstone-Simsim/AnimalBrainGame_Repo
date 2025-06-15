import GameState from "../CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MyPage extends cc.Component {
  @property(cc.Sprite)
  characterSprite: cc.Sprite = null;

  @property(cc.Label)
  nicknameLabel: cc.Label = null;

   @property(cc.Button)
  deleteAccountButton: cc.Button = null;

  start() {
    this.nicknameLabel.string = GameState.nickname || "이름 없음";
    this.setCharacterSprite(this.characterSprite.node, GameState.character);
  }

  setCharacterSprite(node: cc.Node, characterKey: string) {
    const sprite = node.getComponent(cc.Sprite);
    if (!sprite) return;

    if (!['dog', 'rabbit', 'tiger'].includes(characterKey)) {
      characterKey = 'dog';
    }

    const path = `Images/Common/characters/${characterKey}`;
    cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
      if (!err && spriteFrame) {
        sprite.spriteFrame = spriteFrame;
      }
    });
  }

  onClickDeleteAccount() {
    localStorage.clear(); // 저장된 토큰, 닉네임, 캐릭터 등 삭제
    GameState.nickname = '';
    GameState.character = '';
    GameState.browserId = '';


    cc.director.loadScene("LoginScene"); // 로그인 씬으로 이동
  }
}
