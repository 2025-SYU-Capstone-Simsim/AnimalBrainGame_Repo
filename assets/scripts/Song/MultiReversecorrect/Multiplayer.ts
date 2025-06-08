import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

declare global {
    interface Window {
        GameState: any;
    }
}

@ccclass
export default class Multiplayer extends cc.Component {
     @property(cc.Prefab) scoreDisplayPrefab: cc.Prefab = null;
    @property(cc.Prefab) timerDisplayPrefab: cc.Prefab = null;

    @property(cc.Node) correctSign: cc.Node = null;
    @property(cc.Node) wrongSign: cc.Node = null;

    private numbersToShow: number[] = [];
    private userInput: number[] = [];
    private isReverseMode: boolean = false;

    private score: number = 0;
    private questionLength: number = 3;

    private scoreLabel: cc.Label = null;
    private timerLabel: cc.Label = null;

    private timer: number = 30;
    private timerNode: cc.Node = null;

    startGame() {
        this.initScoreUI();
        this.initTimerUI();

        this.score = 0;
        this.questionLength = 3;

        this.schedule(this.decreaseTimer, 1);
        this.updateScoreLabel();
        this.showNewQuestion();
    }

    initScoreUI() {
        const scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(scoreNode);
        this.scoreLabel = scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScoreLabel();
    }

    initTimerUI() {
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimerLabel();
    }

    updateScoreLabel() {
        if (this.scoreLabel) {
            this.scoreLabel.string = `${this.score}`;
        }
    }

    updateTimerLabel() {
        if (this.timerLabel) {
            this.timerLabel.string = `${this.timer}`;
        }
    }

    decreaseTimer() {
        if (this.timer <= 0) {
            this.endGame();
            return;
        }
        this.timer--;
        this.updateTimerLabel();
    }

    showNewQuestion() {
        this.userInput = [];
        this.isReverseMode = Math.random() < 0.5;
        this.numbersToShow = [];

        for (let i = 0; i < this.questionLength; i++) {
            this.numbersToShow.push(Math.floor(Math.random() * 10));
        }

        cc.director.emit("spawn-question", {
            numbers: this.numbersToShow,
            direction: this.isReverseMode ? "reverse" : "forward",
        });
    }

    onNumberClick(event: cc.Event.EventTouch, customData: string) {
        const inputNum = parseInt(customData);
        if (isNaN(inputNum)) return;

        this.userInput.push(inputNum);

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
            this.score += 10;
            this.updateScoreLabel();
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

        cc.director.emit("answer-result", {
            input: [...this.userInput],
            isCorrect: isCorrect,
        });

        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        if (window.socket && roomId) {
            window.socket.emit("game-event", {
                type: "score-update",
                roomId,
                payload: {
                    player: GameState.isHost ? "host" : "guest",
                    score: this.score,
                },
            });
        }
    }

    endGame() {
        this.unscheduleAllCallbacks();
        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        if (window.socket && roomId) {
            window.socket.emit("game-event", {
                type: "game-end",
                roomId,
                payload: {
                    score: this.score,
                    nickname: GameState.nickname,
                    character: GameState.character,
                    isHost: GameState.isHost === true,
                },
            });
        }
        cc.log("게임 종료. 최종 점수:", this.score);
    }
}