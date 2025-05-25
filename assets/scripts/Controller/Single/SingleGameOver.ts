import GameState from "../CommonUI/GameState";
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameOverUI extends cc.Component {
    @property(cc.Button)
    exitButton: cc.Button = null;

    @property(cc.Button)
    retryButton: cc.Button = null;

    onLoad() {
        if (this.exitButton) {
            this.registerButtonEvents(this.exitButton.node, this.onExitClick.bind(this));
        }
        if (this.retryButton) {
            this.registerButtonEvents(this.retryButton.node, this.onRetryClick.bind(this));
        }

        this.submitScoreToServer();
    }

    /** 버튼에 터치 & 클릭 이벤트 등록 */
    registerButtonEvents(node: cc.Node, callback: () => void) {
        node.on(cc.Node.EventType.TOUCH_END, callback);
        node.on(cc.Node.EventType.MOUSE_DOWN, callback);
    }

    onExitClick() {
        console.log("나가기 버튼 클릭 → SingleGameList 씬으로 이동");
        cc.director.loadScene("SingleGameList");
    }

    onRetryClick() {
        const sceneToLoad = GameState.lastGameScene;
        if (sceneToLoad && sceneToLoad.length > 0) {
            cc.log(`다시하기 → ${sceneToLoad}`);
            cc.director.loadScene(sceneToLoad);
        } else {
            cc.warn("이전 씬 정보가 없습니다. 메인으로 이동");
            cc.director.loadScene("MainScene");
        }
    }

    async submitScoreToServer() {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            console.warn("JWT 토큰이 없어 점수 저장 불가");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/score/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    gameId: GameState.gameId,
                    score: GameState.score,
                    mode: "single"
                })
            });

            const result = await response.json();
            if (response.ok) {
                console.log("점수 저장 성공:", result);
            } else {
                console.warn("점수 저장 실패:", result.message);
            }
        } catch (error) {
            console.error("점수 저장 중 오류 발생:", error);
        }
    }
}
