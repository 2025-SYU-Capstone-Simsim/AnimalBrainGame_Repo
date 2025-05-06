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

    // 타이머 표시용 레이블
    @property(cc.Label)
    timerLabel: cc.Label = null;

    // 타임아웃 메시지용 레이블
    @property(cc.Label)
    timeoutLabel: cc.Label = null;

    private colorSequence: string[] = [];
    private userInput: string[] = [];
    private score: number = 0;
    private level: number = 1;
    private isGameActive: boolean = false;

    // 남은 시간(초)
    private remainingTime: number = 0;
    // 1초마다 호출할 콜백 참조
    private tickCallback: () => void;

    private buttonMap: { [key: string]: cc.Button } = {};
    private colors: string[] = ["red", "yellow", "green", "blue"];

    onLoad() {
        cc.debug.setDisplayStats(false);

        // 버튼 맵핑
        this.buttonMap = {
            red: this.redButton,
            yellow: this.yellowButton,
            green: this.greenButton,
            blue: this.blueButton
        };

        // 클릭 이벤트 바인딩
        this.startButton.node.on('click', this.onStartGame, this);
        this.redButton.node.on('click', () => this.onColorButtonClick('red'), this);
        this.yellowButton.node.on('click', () => this.onColorButtonClick('yellow'), this);
        this.greenButton.node.on('click', () => this.onColorButtonClick('green'), this);
        this.blueButton.node.on('click', () => this.onColorButtonClick('blue'), this);

        // 초기 상태 설정
        this.setInitialButtonState();
        this.startButton.node.active = true;

        // 타이머/타임아웃 레이블 숨기기
        this.timerLabel.node.active = false;
        this.timeoutLabel.node.active = false;

        // tickCallback 바인딩
        this.tickCallback = this.updateTimer.bind(this);
    }

    private onStartGame() {
        const btnLabel = this.startButton.node.getComponentInChildren(cc.Label).string;
        if (btnLabel === "다시 도전") {
            // 현재 레벨 재도전
            this.userInput = [];
            this.setStatusMessage("현재 단계 다시 시작!");
            this.hintLabel.string = "";
            this.generateColorSequence();
            this.showColorSequence();
    
            this.startButton.node.getComponentInChildren(cc.Label).string = "게임 시작";
            this.startButton.node.active = false;
            this.isGameActive = true;
            // ★ 여기만 변경: false → true
            this.disableButtons(true);
        } else {
            // 새 게임 시작
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
            this.startButton.node.active = false;
        }
    
        // 타이머도 다시 시작
        this.startTimer();
    }
    

    private onColorButtonClick(color: string) {
        if (!this.isGameActive) return;
        this.userInput.push(color);
        this.checkUserInput();
    }

    // 1초마다 호출: 남은 시간 감소 및 체크
    private updateTimer() {
        this.remainingTime--;
        this.timerLabel.string = `남은 시간: ${this.remainingTime}s`;

        if (this.remainingTime <= 0) {
            this.unschedule(this.tickCallback);
            this.onTimeUp();
        }
    }

    // 타이머 초기화 & 시작
    private startTimer() {
        // 기존 스케줄 초기화
        this.unschedule(this.tickCallback);

        // 100초로 세팅
        this.remainingTime = 100;
        this.timerLabel.string = `남은 시간: ${this.remainingTime}s`;
        this.timerLabel.node.active = true;
        // 타임아웃 메시지 숨기기
        this.timeoutLabel.node.active = false;
        // 1초마다 updateTimer 호출
        this.schedule(this.tickCallback, 1);
    }

    // 시간 초과 시 처리
    private onTimeUp() {
        this.isGameActive = false;
        // 모든 버튼 비활성화
        this.disableButtons(true);
        this.startButton.interactable = false;

        // 타임아웃 레이블에 메시지 표시
        this.timeoutLabel.string = "TimeOut!";
        this.timeoutLabel.node.active = true;
    }

    private checkUserInput() {
        let correct = true;
        let targetSequence = this.colorSequence;

        // 3단계엔 역순 체크
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
            this.startButton.node.getComponentInChildren(cc.Label).string = "다시 도전";
            this.startButton.node.active = true;
            this.isGameActive = false;
            this.disableButtons(true);
        }
    }

    private generateColorSequence() {
        this.colorSequence = [];
        const length = this.level >= 5 ? 7 : this.level + 2;
        for (let i = 0; i < length; i++) {
            const idx = Math.floor(Math.random() * this.colors.length);
            this.colorSequence.push(this.colors[idx]);
        }
        this.hintLabel.string = (this.level === 3) ? "불이 깜빡이는 순서를 반대로 입력하라." : "";
        console.log("생성된 색상 순서:", this.colorSequence);
    }

    private setInitialButtonState() {
        [this.redButton, this.yellowButton, this.greenButton, this.blueButton].forEach(btn => {
            btn.node.opacity = 100;
            btn.interactable = false;
        });
    }

    private showColorSequence() {
        let delay = 0;
        this.disableButtons(true);

        this.colorSequence.forEach(color => {
            const btn = this.buttonMap[color];
            this.scheduleOnce(() => this.activateButtonForBlink(btn), delay);
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
        this.scheduleOnce(() => { button.interactable = false; }, 0.6);
    }

    private resetButtonState() {
        [this.redButton, this.yellowButton, this.greenButton, this.blueButton].forEach(btn => {
            btn.node.opacity = 255;
            btn.interactable = true;
        });
    }

    private updateScore() {
        this.scoreLabel.string = `점수: ${this.score}`;
    }

    private setStatusMessage(message: string) {
        this.statusLabel.string = message;
    }

    private disableButtons(disable: boolean) {
        this.redButton.interactable    = !disable;
        this.yellowButton.interactable = !disable;
        this.greenButton.interactable  = !disable;
        this.blueButton.interactable   = !disable;
    }
}
