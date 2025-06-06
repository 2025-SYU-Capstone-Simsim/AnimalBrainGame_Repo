import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

declare global {
    interface Window {
        GameState: any;
    }
}

@ccclass
export default class Multiplayer extends cc.Component {
    @property(cc.Label) questionLabel: cc.Label = null;
    @property(cc.Label) scoreLabel: cc.Label = null;

    private currentAnswer: string = "";
    private inputBuffer: string = "";
    private score: number = 0;
    private questionLength: number = 3;

    startGame() {
        this.score = 0;
        this.questionLength = 3;
        this.updateScoreLabel();
        this.showNewQuestion();
    }

    updateScoreLabel() {
        this.scoreLabel.string = `${this.score}`;
    }

    showNewQuestion() {
        const digits = this.generateRandomDigits(this.questionLength);
        const isReverse = Math.random() < 0.5;

        const questionText = isReverse ? digits.split("").reverse().join("") : digits;
        this.currentAnswer = isReverse ? digits : digits.split("").reverse().join("");

        this.questionLabel.string = questionText;
        this.inputBuffer = "";

        // 문제 출제 이벤트 emit
        const roomId = window.GameState.createdRoomId || window.GameState.incomingRoomId;
        if (window.socket && roomId) {
            window.socket.emit("game-event", {
                type: "show-question",
                roomId,
                payload: {
                    question: questionText
                }
            });
        }
    }

    onNumberClick(event: cc.Event, customData: string) {
        this.inputBuffer += customData;

        // 정답 길이 도달 시 판별
        if (this.inputBuffer.length === this.currentAnswer.length) {
            const isCorrect = this.inputBuffer === this.currentAnswer;
            if (isCorrect) {
                this.score += 10;
                this.questionLength = Math.min(this.questionLength + 1, 8); // 점점 더 길게
            }

            this.updateScoreLabel();
            this.showFeedback(isCorrect);
            this.showNewQuestion();

            // 결과 이벤트 emit
            const roomId = window.GameState.createdRoomId || window.GameState.incomingRoomId;
            if (window.socket && roomId) {
                window.socket.emit("game-event", {
                    type: "submit-answer",
                    roomId,
                    payload: {
                        input: this.inputBuffer,
                        isCorrect: isCorrect
                    }
                });

                window.socket.emit("game-event", {
                    type: "score-update",
                    roomId,
                    payload: {
                        player: window.GameState.isHost ? "host" : "guest",
                        score: this.score
                    }
                });
            }
        }
    }

    showFeedback(isCorrect: boolean) {
        const feedbackNodeName = isCorrect ? "correct_sign" : "wrong_sign";
        const sign = this.node.getChildByName(feedbackNodeName);
        if (!sign) return;

        sign.active = true;
        sign.opacity = 255;
        cc.tween(sign)
            .delay(0.5)
            .to(0.3, { opacity: 0 })
            .call(() => (sign.active = false))
            .start();
    }

    generateRandomDigits(length: number): string {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10).toString();
        }
        return result;
    }
}
