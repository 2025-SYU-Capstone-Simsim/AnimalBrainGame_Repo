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
            cc.director.loadScene('LoginScene');  // 로그인 씬으로 리다이렉트
            return;
        }

        console.log('인증 토큰 확인 완료. 메인 메뉴에 접근 허용');

        // 버튼 이벤트 등록
        this.singleButton.node.on('click', this.onClickSingle, this);
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
