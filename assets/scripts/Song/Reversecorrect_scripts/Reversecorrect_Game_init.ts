import show_QnA from "./Reversecorrect_Show_QnA"
const {ccclass, property} = cc._decorator;
@ccclass
export default class Game_init extends cc.Component {
    @property(cc.Label)
    timer_label: cc.Label = null;
    @property(cc.Label)
    score_label: cc.Label = null;
    @property(show_QnA)
    qna: show_QnA = null;

    private currentTime: number = 120;
    private score: number = 0;
    static instance: Game_init = null;

    onLoad(){
        Game_init.instance = this;
        this.schedule(this.updateTimer,1);
    }
    start () {
        this.updateTimer();
    }
    updateTimer() {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            show_QnA.isGameOver = true;
            this.qna.setButtonsInteractable(false);
        }
        this.timer_label.string = `${this.currentTime}`;
    }

    public addScore(value: number) {
        this.score += value;
        this.score_label.string = `${this.score}`;
    }
}
