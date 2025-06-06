// MultiOpponent.ts
const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiOpponent extends cc.Component {
    @property(cc.Label) questionLabel: cc.Label = null;
    @property(cc.Label) scoreLabel: cc.Label = null;
    @property(cc.Label) statusLabel: cc.Label = null;

    private score: number = 0;

    onLoad() {
        this.resetDisplay();
    }

    resetDisplay() {
        this.questionLabel.string = "";
        this.statusLabel.string = "";
        this.scoreLabel.string = "0";
    }

    showNewQuestion(numbers: number[], direction: string) {
        this.questionLabel.string = numbers.join(" ") + (direction === "reverse" ? " 🔁" : "");
        this.statusLabel.string = "";
    }

    showAnswerResult(input: number[], isCorrect: boolean) {
        this.statusLabel.string = `${input.join(" ")} → ${isCorrect ? "⭕" : "❌"}`;
    }

    updateScore(newScore: number) {
        this.score = newScore;
        this.scoreLabel.string = `${this.score}`;
    }
}
