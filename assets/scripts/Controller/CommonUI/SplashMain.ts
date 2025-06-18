const { ccclass, property } = cc._decorator;

@ccclass
export default class SplashMain extends cc.Component {
    start() {
        // 로그인 상태면 바로 LoginScene으로 넘김
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            cc.director.loadScene("LoginScene");
            return;
        }

        // 2초(2000ms) 후 자동으로 StoryScene_1로 이동
        this.scheduleOnce(() => {
            cc.director.loadScene("StoryScene_1");
        }, 2); // 2초 후 실행
        this.node.on("touchend", () => {
        cc.director.loadScene("StoryScene_1");
});

    }
}
