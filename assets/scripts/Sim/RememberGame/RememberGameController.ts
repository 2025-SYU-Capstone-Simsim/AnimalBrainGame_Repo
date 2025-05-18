const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {
<<<<<<< HEAD

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

    // 리스트 돌아가기 버튼
    @property(cc.Button)
    exitButton: cc.Button = null;

=======
    @property(cc.Button) startButton: cc.Button = null;
    @property(cc.Button) redButton: cc.Button = null;
    @property(cc.Button) yellowButton: cc.Button = null;
    @property(cc.Button) greenButton: cc.Button = null;
    @property(cc.Button) blueButton: cc.Button = null;
    @property(cc.Label) scoreLabel: cc.Label = null;
    @property(cc.Label) statusLabel: cc.Label = null;
    @property(cc.Label) hintLabel: cc.Label = null;
    @property(cc.Label) timerLabel: cc.Label = null;
    @property(cc.Label) timeoutLabel: cc.Label = null;
    @property(cc.Button) exitButton: cc.Button = null;
    @property(cc.Sprite) frogSprite: cc.Sprite = null;
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357

    private colorSequence: string[] = [];
    private userInput: string[] = [];
    private score: number = 0;
    private level: number = 1;
    private isGameActive: boolean = false;
<<<<<<< HEAD

    // 남은 시간(초)
    private remainingTime: number = 0;
    // 1초마다 호출할 콜백 참조
    private tickCallback: () => void;

=======
    private remainingTime: number = 0;
    private tickCallback: () => void;
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
    private buttonMap: { [key: string]: cc.Button } = {};
    private colors: string[] = ["red", "yellow", "green", "blue"];

    onLoad() {
        cc.debug.setDisplayStats(false);

<<<<<<< HEAD
        // 버튼 맵핑
=======
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
        this.buttonMap = {
            red: this.redButton,
            yellow: this.yellowButton,
            green: this.greenButton,
            blue: this.blueButton
        };

<<<<<<< HEAD
        // 클릭 이벤트 바인딩
=======
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
        this.startButton.node.on('click', this.onStartGame, this);
        this.redButton.node.on('click', () => this.onColorButtonClick('red'), this);
        this.yellowButton.node.on('click', () => this.onColorButtonClick('yellow'), this);
        this.greenButton.node.on('click', () => this.onColorButtonClick('green'), this);
        this.blueButton.node.on('click', () => this.onColorButtonClick('blue'), this);

<<<<<<< HEAD
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
=======
        this.setInitialButtonState();
        this.startButton.node.active = true;
        this.timerLabel.node.active = false;
        this.timeoutLabel.node.active = false;

        this.tickCallback = this.updateTimer.bind(this);
        this.setFrogState("neutral");

            cc.find('Canvas/yellowButton').on('click', () => {
            console.log('yellowButton 눌림');
            });
            
            cc.find('Canvas/greenButton').on('click', () => {
            console.log('greenButton 눌림');
            });
            
            cc.find('Canvas/blueButton').on('click', () => {
            console.log('blueButton 눌림');
            });
            
            cc.find('Canvas/redButton').on('click', () => {
            console.log('redButton 눌림');
            });
    }

    private setFrogState(state: "neutral" | "smile" | "cry") {
        const spriteMap = {
            neutral: "무표정개굴",
            smile: "웃는개굴",
            cry: "우는개굴"
        };

        // 이미지마다 개별 사이즈 지정
        const sizeMap = {
            neutral: { width: 450, height: 510 },
            smile: { width: 450, height: 600 },
            cry: { width: 600, height: 500 }
        };

        const spriteName = spriteMap[state];
        const size = sizeMap[state];

        cc.resources.load(`Images/Sim/${spriteName}`, cc.SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.error(`개구리 이미지 로드 실패: ${spriteName}`, err);
                return;
            }
            this.frogSprite.spriteFrame = spriteFrame;
            this.frogSprite.type = cc.Sprite.Type.SIMPLE;
            this.frogSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            this.frogSprite.node.setContentSize(size.width, size.height);
        });
    }


    private onStartGame() {
        const btnLabel = this.startButton.node.getComponentInChildren(cc.Label).string;

        if (btnLabel === "다시 도전") {
            this.userInput = [];
            this.setStatusMessage("현재 단계 다시 시작!");
            this.hintLabel.string = "";
            this.isGameActive = true;
            this.startButton.node.active = false;
            this.setFrogState("neutral");
            this.generateColorSequence();
            this.showColorSequence();
        } else {
            this.colorSequence = [];
            this.userInput = [];
            this.score = 0;
            this.level = 1; 
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
            this.updateScore();
            this.setStatusMessage("게임 시작!");
            this.hintLabel.string = "";
            this.isGameActive = true;
<<<<<<< HEAD
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
=======
            this.startButton.node.active = false;
            this.setFrogState("neutral");
            this.startTimer();
            this.generateColorSequence();
            this.showColorSequence();
        }
    }

    private onColorButtonClick(color: string) {
        if (!this.isGameActive) return;
        if (!this.buttonMap[color].interactable) return;

        const btn = this.buttonMap[color];
        const originalScale = btn.node.scale;
        const originalPos = btn.node.getPosition();

        // 연잎 클릭 효과 (강조 버전)
        cc.tween(btn.node)
            .parallel(
                cc.tween().to(0.1, { scale: originalScale * 0.85 }, { easing: 'quadIn' }),
                cc.tween().to(0.1, { opacity: 180 }),
                cc.tween().to(0.1, { position: cc.v3(originalPos.x, originalPos.y - 5) })
            )
            .parallel(
                cc.tween().to(0.1, { scale: originalScale }, { easing: 'quadOut' }),
                cc.tween().to(0.1, { opacity: 255 }),
                cc.tween().to(0.1, { position: originalPos })
            )
            .start();

>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
        this.userInput.push(color);
        this.checkUserInput();
    }

<<<<<<< HEAD
    // 1초마다 호출: 남은 시간 감소 및 체크
    private updateTimer() {
        this.remainingTime--;
        this.timerLabel.string = `남은 시간: ${this.remainingTime}s`;

=======


    private updateTimer() {
        this.remainingTime--;
        this.timerLabel.string = `${this.remainingTime}`;
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
        if (this.remainingTime <= 0) {
            this.unschedule(this.tickCallback);
            this.onTimeUp();
        }
    }

<<<<<<< HEAD
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
=======
    private startTimer() {
        this.unschedule(this.tickCallback);
        this.remainingTime = 100;
        this.timerLabel.string = `${this.remainingTime}`;
        this.timerLabel.node.active = true;
        this.timeoutLabel.node.active = false;
        this.schedule(this.tickCallback, 1);
    }

    private onTimeUp() {
        this.isGameActive = false;
        this.disableButtons(true);
        this.startButton.interactable = false;
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
        this.timeoutLabel.string = "TimeOut!";
        this.timeoutLabel.node.active = true;
    }

    private checkUserInput() {
        let correct = true;
<<<<<<< HEAD
        let targetSequence = this.colorSequence;

        // 3단계엔 역순 체크
        if (this.level === 3) {
            targetSequence = [...this.colorSequence].reverse();
        }
=======
        let targetSequence = this.level === 3 ? [...this.colorSequence].reverse() : this.colorSequence;
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357

        for (let i = 0; i < this.userInput.length; i++) {
            if (this.userInput[i] !== targetSequence[i]) {
                correct = false;
                break;
            }
        }

<<<<<<< HEAD
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
=======
        if (correct && this.userInput.length === targetSequence.length) {
            this.setFrogState("smile");
            this.setStatusMessage("정답! 다음 단계로!");
            this.score += 10;
            this.updateScore();
            this.userInput = [];
            this.level++;
            this.scheduleOnce(() => {
                this.generateColorSequence();
                this.showColorSequence();
            }, 3);
        } else if (!correct) {
            this.setFrogState("cry");
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
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
<<<<<<< HEAD
        this.hintLabel.string = (this.level === 3) ? "불이 깜빡이는 순서를 반대로 입력하라." : "";
=======
        this.hintLabel.string = this.level === 3 ? "불이 깜빡이는 순서를 반대로 입력하라." : "";
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
        console.log("생성된 색상 순서:", this.colorSequence);
    }

    private setInitialButtonState() {
<<<<<<< HEAD
        [this.redButton, this.yellowButton, this.greenButton, this.blueButton].forEach(btn => {
=======
        Object.values(this.buttonMap).forEach(btn => {
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
            btn.node.opacity = 100;
            btn.interactable = false;
        });
    }

    private showColorSequence() {
<<<<<<< HEAD
        let delay = 0;
        this.disableButtons(true);

=======
        this.setFrogState("neutral"); 

        this.setInitialButtonState();
        let delay = 0;
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
        this.colorSequence.forEach(color => {
            const btn = this.buttonMap[color];
            this.scheduleOnce(() => this.activateButtonForBlink(btn), delay);
            delay += 1.0;
        });
<<<<<<< HEAD

        this.scheduleOnce(() => {
            this.resetButtonState();
=======
        this.scheduleOnce(() => {
            this.enableAnswerInput();
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
            this.setStatusMessage("버튼 순서를 맞춰주세요!");
        }, delay);
    }

<<<<<<< HEAD
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
=======

    private activateButtonForBlink(button: cc.Button) {
        const originalScale = button.node.scale;
        button.node.opacity = 100;
        button.interactable = false;
        cc.tween(button.node)
            .to(0.15, { opacity: 255, scale: originalScale * 1.05 }, { easing: 'quadOut' })
            .to(0.15, { opacity: 100, scale: originalScale }, { easing: 'quadIn' })
            .start();
    }

    private enableAnswerInput() {
        Object.values(this.buttonMap).forEach(btn => {
            const bg = btn.node.getChildByName('Background');
            if (bg) {
                // 💡 Background의 크기를 따라가게 맞춤
                btn.node.setContentSize(bg.getContentSize());
            }

            btn.node.opacity = 255;
            btn.interactable = true;

            console.log(`${btn.node.name} size:`, btn.node.width, btn.node.height);
        });
    }


    private updateScore() {
        this.scoreLabel.string = `${this.score}`;
>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
    }

    private setStatusMessage(message: string) {
        this.statusLabel.string = message;
    }

    private disableButtons(disable: boolean) {
<<<<<<< HEAD
        this.redButton.interactable    = !disable;
        this.yellowButton.interactable = !disable;
        this.greenButton.interactable  = !disable;
        this.blueButton.interactable   = !disable;
    }

    loadList(){
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
      }
=======
        Object.values(this.buttonMap).forEach(btn => {
            btn.interactable = !disable;
        });
    }

    loadList() {
        cc.director.loadScene('SingleGameList');
    }



>>>>>>> 3c97828376fae611d05c5213c7f7123adcfd3357
}
