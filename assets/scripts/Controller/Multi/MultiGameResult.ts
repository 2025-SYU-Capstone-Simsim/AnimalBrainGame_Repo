import GameState from "../CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiGameResult extends cc.Component {

    @property(cc.Label)
    NameLabel: cc.Label = null;

    @property(cc.Label)
    ScoreLabel: cc.Label = null;

    @property(cc.Sprite)
    VictoryCharacter: cc.Sprite = null;

    @property(cc.Button)
    BackButton: cc.Button = null;

    start() {
        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        if (!roomId) {
            cc.warn("roomId 없음");
            return;
        }
        fetch(`http://43.201.75.158:3000/multi/game/result/${roomId}`)
            .then(res => res.json())
            .then(data => {
                if (data.success && data.data?.winner && !data.data.winner.isTie) {
                    const winner = data.data.winner;
                    cc.log("승자 정보:", winner);

                    // 닉네임 및 점수 표시
                    this.NameLabel.string = winner.nickname || "???";
                    this.ScoreLabel.string = `${winner.score}점`;

                    // 캐릭터 이미지 로딩
                    this.setCharacterSprite(winner.character);
                } else {
                    cc.warn("승자 없음 또는 무승부");
                    this.NameLabel.string = "무승부";
                    this.ScoreLabel.string = "";
                }
            })
            .catch(err => {
                cc.error("결과 API 오류:", err);
            });
    }

    setCharacterSprite(characterKey: string) {
        const path = `Images/Common/characters/${characterKey}`;
        cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
            if (!err && spriteFrame) {
                this.VictoryCharacter.spriteFrame = spriteFrame;
            } else {
                cc.warn("캐릭터 이미지 로딩 실패:", path);
            }
        });
    }

    
    onClickBack() {
        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        const playerId = GameState.browserId;

        // 멀티방에서 나가기
        if (window.socket && roomId && playerId) {
            window.socket.emit("leave-room", { roomId, playerId });
        }

        // 상태 초기화 및 메인 이동
        cc.sys.localStorage.removeItem("isHost");
        GameState.resetMultiplay();
        cc.director.loadScene("MainScene");
    }
}
