const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    @property(cc.Button)
    singleButton: cc.Button = null;

    @property(cc.Button)
    multiButton: cc.Button = null;

    @property(cc.Button)
    myPageButton: cc.Button = null;

    onLoad() {
        const jwtToken = localStorage.getItem('jwtToken');

        if (!jwtToken) {
            console.warn('로그인이 필요합니다.');
            cc.director.loadScene('LoginScene');
            return;
        }

        console.log('인증 토큰 확인 완료. 메인 메뉴에 접근 허용');

        // 버튼 클릭 이벤트 등록
        this.singleButton.node.on('click', this.onClickSingle, this);
        this.multiButton.node.on('click', this.onClickMulti, this);
        this.myPageButton.node.on('click', this.onClickMyPage, this);

        // 버튼 hover 효과 (scale only)
        [this.singleButton, this.multiButton, this.myPageButton].forEach(btn => {
            const node = btn.node;

            node.on(cc.Node.EventType.MOUSE_ENTER, () => {
                node.scale = 1.1;
                // 웹 빌드에서만 적용됨
                cc.game.canvas.style.cursor = "pointer";
                (node as any)._domID && (document.getElementById((node as any)._domID).style.cursor = "pointer");
            });

            node.on(cc.Node.EventType.MOUSE_LEAVE, () => {
                node.scale = 1.0;
                cc.game.canvas.style.cursor = "default";
                (node as any)._domID && (document.getElementById((node as any)._domID).style.cursor = "default");
            });
        });
    }



    onClickSingle() {
        cc.log("싱글 게임 버튼 클릭됨. SingleGameList 씬으로 이동.");
        cc.director.loadScene("SingleGameList");
    }

    onClickMulti() {
        cc.log("멀티 게임 버튼 클릭됨.  MultiWaiting씬으로 이동.");
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
