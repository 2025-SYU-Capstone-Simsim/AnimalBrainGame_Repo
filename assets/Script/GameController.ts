const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {

    @property(cc.Button)
    startButton: cc.Button = null;

    @property(cc.Button)
    redButton: cc.Button = null;

    @property(cc.Button)
    yellowButton: cc.Button = null;

    @property(cc.Button)
    greenButton: cc.Button = null;

    @property(cc.Button)
    blueButton: cc.Button = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Label)
    statusLabel: cc.Label = null;

    @property(cc.Label)
    hintLabel: cc.Label = null;

    private colorSequence: string[] = [];
    private userInput: string[] = [];
    private score: number = 0;
    private level: number = 1;
    private isGameActive: boolean = false;

    private buttonMap: { [key: string]: cc.Button } = {};
    private colors: string[] = ["red", "yellow", "green", "blue"];

    onLoad() {
        cc.debug.setDisplayStats(false);

        this.buttonMap = {
            red: this.redButton,
            yellow: this.yellowButton,
            green: this.greenButton,
            blue: this.blueButton
        };

        this.startButton.node.on('click', this.onStartGame, this);
        this.redButton.node.on('click', () => this.onColorButtonClick('red'), this);
        this.yellowButton.node.on('click', () => this.onColorButtonClick('yellow'), this);
        this.greenButton.node.on('click', () => this.onColorButtonClick('green'), this);
        this.blueButton.node.on('click', () => this.onColorButtonClick('blue'), this);

        this.setInitialButtonState();
        this.startButton.node.active = true; // 처음에만 시작 버튼을 보이게
    }

    private onStartGame() {
        if (this.startButton.node.getComponentInChildren(cc.Label).string === "다시 도전") {
            // "다시 도전"을 클릭한 경우, 게임을 다시 시작하되, 현재 레벨을 유지
            this.userInput = [];
            this.setStatusMessage("현재 단계 다시 시작!");
            this.hintLabel.string = "";  // 힌트 초기화

            // 현재 레벨에 맞게 색상 순서 다시 생성 및 표시
            this.generateColorSequence();
            this.showColorSequence();

            this.startButton.node.getComponentInChildren(cc.Label).string = "게임 시작";  // 텍스트 변경
            this.startButton.node.active = false;  // 게임 중에는 시작 버튼 숨기기
            this.isGameActive = true;  // 게임 활성화
            this.disableButtons(false);  // 버튼 활성화
        } else {
            // 처음 게임 시작
            this.colorSequence = [];
            this.userInput = [];
            this.score = 0;
            this.level = 1;
            this.updateScore();
            this.setStatusMessage("게임 시작!");
            this.hintLabel.string = "";
            this.isGameActive = true;
            this.disableButtons(true);
            this.generateColorSequence();
            this.showColorSequence();
            this.startButton.node.active = false;  // 첫 게임 시작 시 버튼 숨기기
        }
    }

    private onColorButtonClick(color: string) {
        if (!this.isGameActive) return;

        this.userInput.push(color);
        this.checkUserInput();
    }

    private checkUserInput() {
        let correct = true;

        // 3단계에서만 정답 순서를 반대로!
        let targetSequence = this.colorSequence;
        if (this.level === 3) {
            targetSequence = [...this.colorSequence].reverse();
        }

        for (let i = 0; i < this.userInput.length; i++) {
            if (this.userInput[i] !== targetSequence[i]) {
                correct = false;
                break;
            }
        }

        if (correct) {
            if (this.userInput.length === targetSequence.length) {
                this.setStatusMessage("정답! 다음 단계로!");
                this.score += 10;
                this.updateScore();
                this.userInput = [];
                this.level++;

                this.scheduleOnce(() => {
                    this.generateColorSequence();
                    this.showColorSequence();
                }, 3);
            }
        } else {
            this.setStatusMessage("틀렸습니다! 다시 시도하세요.");
            this.userInput = [];
            this.startButton.node.getComponentInChildren(cc.Label).string = "다시 도전";  // 시작 버튼 텍스트 변경
            this.startButton.node.active = true;  // 틀린 경우, 다시 도전 버튼 보이게
            this.isGameActive = false;  // 게임을 비활성화
            this.disableButtons(true);  // 버튼 비활성화
        }
    }

    private generateColorSequence() {
        this.colorSequence = [];
        const sequenceLength = this.level >= 5 ? 7 : this.level + 2; // 5단계 이상부터는 7개로 고정
        for (let i = 0; i < sequenceLength; i++) {
            const randomIndex = Math.floor(Math.random() * this.colors.length);
            this.colorSequence.push(this.colors[randomIndex]);
        }

        // 힌트는 3단계에서만 표시
        if (this.level === 3) {
            this.hintLabel.string = "불이 깜빡이는 순서를 반대로 입력하라.";
        } else {
            this.hintLabel.string = "";
        }

        console.log("생성된 색상 순서:", this.colorSequence);
    }

    private setInitialButtonState() {
        const darkenColor = (button: cc.Button) => {
            button.node.opacity = 100;
            button.interactable = false;
        };
        darkenColor(this.redButton);
        darkenColor(this.yellowButton);
        darkenColor(this.greenButton);
        darkenColor(this.blueButton);
    }

    private showColorSequence() {
        let delay = 0;
        const sequenceToShow = [...this.colorSequence]; // 보여줄 순서

        this.disableButtons(true);

        sequenceToShow.forEach((color) => {
            const button = this.buttonMap[color];
            this.scheduleOnce(() => {
                this.activateButtonForBlink(button);
            }, delay);
            delay += 1.0;
        });

        this.scheduleOnce(() => {
            this.resetButtonState();
            this.setStatusMessage("버튼 순서를 맞춰주세요!");
        }, delay);
    }

    private activateButtonForBlink(button: cc.Button) {
        button.interactable = true;
        cc.tween(button.node)
            .to(0.3, { opacity: 255 })
            .to(0.3, { opacity: 100 })
            .start();
        this.scheduleOnce(() => {
            button.interactable = false;
        }, 0.6);
    }

    private resetButtonState() {
        const reset = (btn: cc.Button) => {
            btn.node.opacity = 255;
            btn.interactable = true;
        };
        reset(this.redButton);
        reset(this.yellowButton);
        reset(this.greenButton);
        reset(this.blueButton);
    }

    private updateScore() {
        this.scoreLabel.string = `점수: ${this.score}`;
    }

    private setStatusMessage(message: string) {
        this.statusLabel.string = message;
    }

    private disableButtons(disable: boolean) {
        this.redButton.interactable = !disable;
        this.yellowButton.interactable = !disable;
        this.greenButton.interactable = !disable;
        this.blueButton.interactable = !disable;
    }
}
