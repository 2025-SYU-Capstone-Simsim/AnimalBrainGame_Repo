const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiOpponent extends cc.Component {
    @property(cc.Label) questionLabel: cc.Label = null;
    @property(cc.Label) sequenceLabel: cc.Label = null;
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
        this.sequenceLabel.string = "";
        this.correctSign.active = false;
        this.wrongSign.active = false;
    }

    showNewQuestion(numbers: number[], direction: string) {
        const displayNums = direction === "reverse" ? [...numbers].reverse() : numbers;
        this.questionLabel.string = displayNums.join("");
        this.questionLabel.node.active = true;
        this.sequenceLabel.node.active = false;

        this.scheduleOnce(() => {
            this.questionLabel.node.active = false;
            this.sequenceLabel.string = direction === "reverse" ? "역방향" : "정방향";
            this.sequenceLabel.node.active = true;
        }, 1.2);
    }

    showAnswerResult(input: number[], isCorrect: boolean) {
        const signNode = isCorrect ? this.correctSign : this.wrongSign;
        signNode.active = true;
        this.scheduleOnce(() => {
            signNode.active = false;
        }, 1.0);
    }

    updateScore(newScore: number) {
        this.score = newScore;
        this.updateScoreLabel();
    }

    updateScoreLabel() {
        if (this.scoreLabel) {
            this.scoreLabel.string = `${this.score}`;
        }
    }
}
