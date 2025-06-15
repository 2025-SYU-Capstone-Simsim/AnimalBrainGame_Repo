import show_QnA from "./Reversecorrect_Show_QnA"
import Game_init from "./Reversecorrect_Game_init"
const { ccclass, property } = cc._decorator;

@ccclass
export default class Game_logic extends cc.Component {
    @property(cc.Label)
    player_label_display: cc.Label = null;

    @property(show_QnA)
    qna: show_QnA = null;

    @property(cc.Label)
    sequence_label : cc.Label = null;

    @property(cc.Sprite)
    reverse_label : cc.Sprite = null;

    @property(cc.Sprite)
    verse_label : cc.Sprite = null;

    public static player_label_arr: number[] = [];
    public static count: number = 0;
    //사용자가 입력하는 label 업데이트
    updateInputLabel() {
        const numString = Game_logic.player_label_arr.join("");
        this.player_label_display.string = numString;
    }

    //사용자가 입력하는 매 숫자가 맞는지 확인하는 함수 맞는다면 맞는 표시 틀리면 틀리는 표시 2초로 설정
    checkAnswer() {
        if (show_QnA.isGameOver) return;

        const input = Game_logic.player_label_arr;
        const correct = show_QnA.isReverse
            ? [...show_QnA.qa].reverse()
            : [...show_QnA.qa];

        for (let i = 0; i < input.length; i++) {
            if (input[i] !== correct[i]) {
            Game_init.instance.wrong_sign.active = true;
            this.qna.setButtonsInteractable(false);
            cc.director.pause();
            setTimeout(() => {
                cc.director.resume();
                Game_init.instance.wrong_sign.active = false;
                this.nextProblem(false);
                }, 1500);
            return;
            }
        }

        if (input.length === correct.length) {
            Game_init.instance.updateScore(10);
            Game_init.instance.correct_sign.active = true;
            this.qna.setButtonsInteractable(false);
            cc.director.pause();
            setTimeout(() => {
                cc.director.resume();
                Game_init.instance.correct_sign.active = false;
                this.nextProblem(true);
            }, 1500);
            
        }
    }

    //맞았는지 틀렸는지 확인 후 카운트 세고 다음 문제로 넘어가는 함수
    nextProblem(isCorrect: boolean) {
        Game_logic.player_label_arr = [];
        Game_logic.count = 0;
        this.player_label_display.string = "";
        show_QnA.qa = [];

        if (this.sequence_label) {
            this.sequence_label.string = "";
            this.sequence_label.node.active = false;
        }

        if (isCorrect) {
            show_QnA.correctCount++;
        }
        if (this.qna) {
            this.qna.showNewQuestion();
        }
    }
}
