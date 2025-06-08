const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiOpponent extends cc.Component {
    @property(cc.Label) questionLabel: cc.Label = null;
    @property(cc.Prefab) scoreDisplayPrefab: cc.Prefab = null;

    @property(cc.Node) correctSign: cc.Node = null;
    @property(cc.Node) wrongSign: cc.Node = null;

    private scoreNode: cc.Node = null;
    private scoreLabel: cc.Label = null;
    private score: number = 0;

    onLoad() {
        this.resetDisplay();

        if (this.scoreDisplayPrefab) {
            this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
            this.node.addChild(this.scoreNode);
            this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
            this.updateScoreLabel();
        }
    }

    resetDisplay() {
        this.questionLabel.string = "";
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
        this.updateScoreLabel();
    }

    private updateScoreLabel() {
        if (this.scoreLabel) {
            this.scoreLabel.string = `${this.score}`;
        }
    }
}
