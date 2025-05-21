const { ccclass, property } = cc._decorator;

@ccclass
export default class GameTitleManager extends cc.Component {
    @property(cc.Button)
    gameStartButton: cc.Button = null;

    @property(cc.Button)
    BackToSingleGameListButton: cc.Button = null;

    onLoad() {
        // 클릭 이벤트
        this.gameStartButton.node.on('click', this.onClickStartGame, this);

        // 마우스 진입 시 커서 및 hover 효과
        this.gameStartButton.node.on(cc.Node.EventType.MOUSE_ENTER, () => {
            cc.game.canvas.style.cursor = "pointer";
            this.gameStartButton.node.runAction(
                cc.scaleTo(0.1, 1.1) // 약간 확대
            );
        });

        // 마우스 나감 시 커서 및 효과 복귀
        this.gameStartButton.node.on(cc.Node.EventType.MOUSE_LEAVE, () => {
            cc.game.canvas.style.cursor = "default";
            this.gameStartButton.node.runAction(
                cc.scaleTo(0.1, 1.0) // 원래 크기로
            );
        });
    }

    onClickStartGame() {
        cc.log("게임 시작 버튼 클릭됨");
        cc.director.loadScene("3M_GameScene");
    }

    onClickBackSingleGameList() {
        cc.log("싱글게임리스트로 돌아가기");
        cc.director.loadScene("SingleGameList");
    }
}
