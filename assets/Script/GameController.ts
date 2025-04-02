const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {

    @property(cc.Button)
    startButton: cc.Button = null; // 시작 버튼

    @property(cc.Button)
    redButton: cc.Button = null;   // 빨강 버튼

    @property(cc.Button)
    yellowButton: cc.Button = null; // 노랑 버튼

    @property(cc.Button)
    greenButton: cc.Button = null;  // 초록 버튼

    @property(cc.Button)
    blueButton: cc.Button = null;   // 파랑 버튼

    @property(cc.Label)
    scoreLabel: cc.Label = null;    // 점수 라벨

    @property(cc.Label)
    statusLabel: cc.Label = null;   // 진행 상태 라벨

    private colorSequence: string[] = [];  // 랜덤 색상 순서
    private userInput: string[] = [];      // 사용자가 입력한 순서
    private score: number = 0;             // 점수
    private level: number = 1;             // 게임 단계
    private isGameActive: boolean = false; // 게임 활성화 상태

    // 색상에 맞는 버튼 객체를 저장
    private buttonMap: { [key: string]: cc.Button } = {};

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

        // 초기화: 버튼을 어두운 색으로 비활성화
        this.setInitialButtonState();
    }

    // 게임 시작
    private onStartGame() {
        this.colorSequence = [];
        this.userInput = [];
        this.score = 0;
        this.level = 1;  // 게임 시작 시 레벨 1
        this.updateScore();
        this.setStatusMessage("게임 시작!");
        this.isGameActive = true;
        this.disableButtons(true); // 버튼 비활성화
        this.generateColorSequence(); // 색상 순서 생성
        this.showColorSequence(); // 색상 순서 깜빡이기
    }

    // 색상 버튼 클릭 시
    private onColorButtonClick(color: string) {
        if (!this.isGameActive) return;

        this.userInput.push(color);
        this.checkUserInput();
    }

    // 정답 확인
    private checkUserInput() {
        let correct = true;

        // 사용자 입력과 원본 색상 순서를 정확히 비교
        for (let i = 0; i < this.userInput.length; i++) {
            if (this.userInput[i] !== this.colorSequence[i]) {
                correct = false;
                break;
            }
        }

        // 모든 입력이 맞다면
        if (correct) {
            // 사용자가 입력한 순서의 길이가 색상 순서 길이와 같으면
            if (this.userInput.length === this.colorSequence.length) {
                this.setStatusMessage("정답! 다음 단계로!");
                this.score += 10;  // 점수 증가
                this.updateScore();
                this.userInput = [];  // 사용자 입력 초기화
                this.level++;  // 레벨 증가
                this.generateColorSequence(); // 색상 순서 길이 증가
                this.scheduleOnce(() => {
                    this.showColorSequence();  // 새로 생성된 순서 깜빡이기
                }, 3);  // 3초 후에 새로 깜빡이기 시작
            }
        } else {
            // 틀렸을 경우
            this.setStatusMessage("틀렸습니다! 다시 시도하세요.");
            this.userInput = [];  // 사용자 입력 초기화
        }
    }

    private generateColorSequence() {
        const colors: string[] = ["red", "yellow", "green", "blue"];
        this.colorSequence = []; // 기존 색상 순서 초기화
    
        // 레벨에 맞는 색상 순서 생성
        for (let i = 0; i < this.level + 3; i++) { // 첫 번째 단계에서 4개, 두 번째에서 5개, 세 번째에서 6개
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.colorSequence.push(randomColor);
        }
    
        console.log("랜덤으로 부여된 색상 순서:", this.colorSequence);
    }

    // 초기 버튼 상태 설정 (어두운 색과 비활성화)
    private setInitialButtonState() {
        const darkenColor = (color: cc.Button) => {
            color.node.opacity = 100; // 어두운 색으로 변경
            color.interactable = false; // 비활성화
        };
        darkenColor(this.redButton);
        darkenColor(this.yellowButton);
        darkenColor(this.greenButton);
        darkenColor(this.blueButton);
    }

    // 색상 순서 깜빡이기
    private showColorSequence() {
        let delay = 0; // 초기 딜레이 설정

        // 색상 순서를 랜덤하게 섞음
        let shuffledSequence = [...this.colorSequence];
        // this.shuffleArray(shuffledSequence); // 순서 랜덤화

        console.log("랜덤으로 부여된 색상 순서:", shuffledSequence); // 랜덤 순서 출력

        // 모든 버튼을 비활성화
        this.disableButtons(true);

        // 순차적으로 각 버튼을 활성화하고 다시 비활성화
        shuffledSequence.forEach((color, index) => {
            const button = this.buttonMap[color];

            // 각 버튼에 대해 딜레이를 두고 활성화 후 다시 비활성화
            this.scheduleOnce(() => {
                this.activateButtonForBlink(button); // 버튼 활성화 후 비활성화
            }, delay);

            delay += 1.0; // 버튼 간 간격을 1초로 설정
        });

        // 깜빡임이 끝난 후 모든 버튼을 다시 원색으로 보여주고 활성화
        this.scheduleOnce(() => {
            this.resetButtonState(); // 모든 버튼 원색으로 활성화
            this.setStatusMessage("버튼 순서를 맞춰주세요!");
        }, delay);
    }

    // 버튼 활성화 후 비활성화
    private activateButtonForBlink(button: cc.Button) {
        button.interactable = true; // 버튼 활성화
        cc.tween(button.node)
            .to(0.3, { opacity: 255 }) // 버튼을 활성화된 상태로 잠깐 보여줌
            .to(0.3, { opacity: 100 })  // 버튼을 다시 어두운 상태로
            .start();
        this.scheduleOnce(() => {
            button.interactable = false; // 버튼 다시 비활성화
        }, 0.6); // 0.6초 후에 비활성화
    }

    // 배열 섞기 (랜덤 순서)
    private shuffleArray(array: string[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // 모든 버튼을 원색으로 복원하고 활성화
    private resetButtonState() {
        const resetColor = (color: cc.Button) => {
            color.node.opacity = 255; // 원래 색으로 복원
            color.interactable = true; // 버튼 활성화
        };
        resetColor(this.redButton);
        resetColor(this.yellowButton);
        resetColor(this.greenButton);
        resetColor(this.blueButton);
    }

    // 점수 업데이트
    private updateScore() {
        this.scoreLabel.string = `점수: ${this.score}`;
    }

    // 진행 상태 메시지 설정
    private setStatusMessage(message: string) {
        this.statusLabel.string = message;
    }

    // 버튼 활성화/비활성화
    private disableButtons(disable: boolean) {
        this.redButton.interactable = !disable;
        this.yellowButton.interactable = !disable;
        this.greenButton.interactable = !disable;
        this.blueButton.interactable = !disable;
    }
}

