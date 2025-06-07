const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiOpponent extends cc.Component {
    @property(cc.Label) questionLabel: cc.Label = null;
    @property(cc.Label) scoreLabel: cc.Label = null;

    @property(cc.Node) correctSign: cc.Node = null;
    @property(cc.Node) wrongSign: cc.Node = null;

    private score: number = 0;

    onLoad() {
        this.resetDisplay();
    }

    resetDisplay() {
        this.questionLabel.string = "";
        this.scoreLabel.string = "0";
        this.correctSign.active = false;
        this.wrongSign.active = false;
    }

    showNewQuestion(numbers: number[], direction: string) {
        const showNumbers = direction === "reverse" ? [...numbers].reverse() : numbers;
        const numberString = showNumbers.join("");

        this.questionLabel.string = numberString;
        this.questionLabel.node.active = true;

        this.scheduleOnce(() => {
            this.questionLabel.node.active = false;
        }, 1.0);

        this.correctSign.active = false;
        this.wrongSign.active = false;
    }

    showAnswerResult(input: number[], isCorrect: boolean) {
        const targetSign = isCorrect ? this.correctSign : this.wrongSign;
        if (!targetSign) return;

        targetSign.active = true;
        this.scheduleOnce(() => {
            targetSign.active = false;
        }, 1.0);
    }

    updateScore(newScore: number) {
        this.score = newScore;
        this.scoreLabel.string = `${this.score}`;
    }
}
