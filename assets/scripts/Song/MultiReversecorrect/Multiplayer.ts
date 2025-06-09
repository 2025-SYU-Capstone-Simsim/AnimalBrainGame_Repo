import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Multiplayer extends cc.Component {
    @property(cc.Prefab) scoreDisplayPrefab: cc.Prefab = null;
    @property(cc.Prefab) timerDisplayPrefab: cc.Prefab = null;
    @property(cc.Node) correctSign: cc.Node = null;
    @property(cc.Node) wrongSign: cc.Node = null;
    @property(cc.Label) sequenceLabel: cc.Label = null;
    @property(cc.Label) inputDisplayLabel: cc.Label = null;

    private numbersToShow: number[] = [];
    private userInput: number[] = [];
    private isReverseMode: boolean = false;
    private correctCount: number = 0;
    private score: number = 0;
    private questionLength: number = 3;
    private timer: number = 60;
    private scoreLabel: cc.Label = null;
    private timerLabel: cc.Label = null;

    startGame() {
        this.initScoreUI();
        this.initTimerUI();
        this.schedule(this.decreaseTimer, 1);
        this.showNewQuestion();
    }

    initScoreUI() {
        const scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(scoreNode);
        this.scoreLabel = scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScoreLabel();
    }

    initTimerUI() {
        const timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(timerNode);
        this.timerLabel = timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimerLabel();
    }

    updateScoreLabel() {
        if (this.scoreLabel) this.scoreLabel.string = `${this.score}`;
    }

    updateTimerLabel() {
        if (this.timerLabel) this.timerLabel.string = `${this.timer}`;
    }

    decreaseTimer() {
        if (--this.timer < 0) {
            this.unscheduleAllCallbacks();
            return;
        }
        this.updateTimerLabel();
    }

    showNewQuestion() {
        this.userInput = [];
        this.inputDisplayLabel.string = "";
        this.isReverseMode = Math.random() < 0.5;

        const milestone = Math.floor(this.correctCount / 3);
        this.questionLength = 3 + milestone;
        const hideDelay = Math.max(0.8, 1.5 - milestone * 0.2);

        this.numbersToShow = [];
        let candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < this.questionLength; i++) {
            const rand = candidate[Math.floor(Math.random() * candidate.length)];
            this.numbersToShow.push(rand);
        }

        this.sequenceLabel.node.active = false;
        this.sequenceLabel.string = "";

        this.inputDisplayLabel.string = this.numbersToShow.join("");
        this.inputDisplayLabel.node.active = true;

        this.scheduleOnce(() => {
            this.inputDisplayLabel.node.active = false;
            this.sequenceLabel.string = this.isReverseMode ? "역방향" : "정방향";
            this.sequenceLabel.node.active = true;
        }, hideDelay);

        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        if (window.socket && roomId) {
            window.socket.emit("game-event", {
                type: "spawn-question",
                roomId,
                payload: {
                    numbers: this.numbersToShow,
                    direction: this.isReverseMode ? "reverse" : "forward"
                }
            });
        }
    }

    onNumberClick(event: cc.Event.EventTouch, customData: string) {
        const inputNum = parseInt(customData);
        if (isNaN(inputNum)) return;

        this.userInput.push(inputNum);
        this.inputDisplayLabel.string = this.userInput.join("");

        const target = this.isReverseMode
            ? this.numbersToShow[this.numbersToShow.length - this.userInput.length]
            : this.numbersToShow[this.userInput.length - 1];

        if (inputNum !== target) {
            this.showResult(false);
            return;
        }

        if (this.userInput.length === this.numbersToShow.length) {
            this.showResult(true);
        }
    }

    showResult(isCorrect: boolean) {
        if (isCorrect) {
            this.correctCount++;
            this.score += 10;
            this.correctSign.active = true;
            this.scheduleOnce(() => {
                this.correctSign.active = false;
                this.showNewQuestion();
            }, 0.5);
        } else {
            this.wrongSign.active = true;
            this.scheduleOnce(() => {
                this.wrongSign.active = false;
                this.showNewQuestion();
            }, 0.5);
        }

        this.updateScoreLabel();

        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        if (window.socket && roomId) {
            window.socket.emit("game-event", {
                type: "answer-result",
                roomId,
                payload: {
                    input: [...this.userInput],
                    isCorrect
                }
            });
        }
    }
}
