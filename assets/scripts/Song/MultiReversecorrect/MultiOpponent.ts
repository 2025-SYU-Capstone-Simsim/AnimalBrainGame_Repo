const { ccclass, property } = cc._decorator;

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

@ccclass
export default class MultiOpponent extends cc.Component {
    @property(cc.Label) questionLabel: cc.Label = null;
    @property(cc.Label) sequenceLabel: cc.Label = null;
    @property(cc.Prefab) scoreDisplayPrefab: cc.Prefab = null;
    @property(cc.Node) correctSign: cc.Node = null;
    @property(cc.Node) wrongSign: cc.Node = null;

    private scoreLabel: cc.Label = null;
    private lastQuestionNumbers: number[] = [];

    onLoad() {
        this.initScoreUI();

        window.socket.on("game-event", (data) => {
            if (!data || !data.type) return;

            switch (data.type) {
                case "spawn-question":
                    this.showQuestion(data.payload.numbers, data.payload.direction);
                    break;
                case "answer-result":
                    this.showResult(data.payload.input, data.payload.isCorrect);
                    break;
                case "score-update":
                    this.updateScore(data.payload.score);
                    break;
            }
        });
    }

    initScoreUI() {
        const scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(scoreNode);
        this.scoreLabel = scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);
    }

    showQuestion(numbers: number[], direction: string) {
        // 숫자 저장 (나중에 재표시용)
        this.lastQuestionNumbers = numbers;

        // 1. 랜덤 숫자 표시
        this.questionLabel.string = numbers.join("");
        this.questionLabel.node.active = true;

        // 2. 방향은 나중에 보여줄 것 → 초기 숨김
        this.sequenceLabel.node.active = false;

        // 3. 1.5초 후에 숫자 숨기고 방향 표시
        this.scheduleOnce(() => {
            this.questionLabel.node.active = false;

            this.sequenceLabel.string = direction === "reverse" ? "역방향" : "정방향";
            this.sequenceLabel.node.active = true;
        }, 1.5);
    }

    async showResult(input: number[], isCorrect: boolean) {
    const signNode = isCorrect ? this.correctSign : this.wrongSign;

    // 숨기기 전에 새 문제 숫자가 표시되지 않게 questionLabel 초기화
    this.sequenceLabel.node.active = false;
    this.questionLabel.node.active = false;

    this.questionLabel.string = input.join(" ");
    this.questionLabel.node.active = true;

    signNode.active = true;

    await delay(1500);

    signNode.active = false;

    // label 내용이 이전 input일 때만 비활성화
    if (this.questionLabel.string === input.join(" ")) {
        this.questionLabel.node.active = false;
    }
}



    updateScore(score: number) {
        if (this.scoreLabel) this.scoreLabel.string = `${score}`;
    }
}
