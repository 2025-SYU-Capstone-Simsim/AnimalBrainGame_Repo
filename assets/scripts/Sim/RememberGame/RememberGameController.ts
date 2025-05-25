import GameState from "../../Controller/CommonUI/GameState";
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {
    @property(cc.Button) startButton: cc.Button = null;
    @property(cc.Button) redButton: cc.Button = null;
    @property(cc.Button) yellowButton: cc.Button = null;
    @property(cc.Button) greenButton: cc.Button = null;
    @property(cc.Button) blueButton: cc.Button = null;
    @property(cc.Label) statusLabel: cc.Label = null;
    @property(cc.Label) hintLabel: cc.Label = null;
    @property(cc.Button) exitButton: cc.Button = null;
    @property(cc.Sprite) frogSprite: cc.Sprite = null;
    @property(cc.Prefab) gameStartOverlayPrefab: cc.Prefab = null;
    @property(cc.Prefab) gameOverUIPrefab: cc.Prefab = null;

    @property(cc.Prefab) scoreUIPrefab: cc.Prefab = null;
    @property(cc.Prefab) timerUIPrefab: cc.Prefab = null;

    private scoreLabel: cc.Label = null;
    private timerLabel: cc.Label = null;
    private colorSequence: string[] = [];
    private userInput: string[] = [];
    private score: number = 0;
    private level: number = 1;
    private isGameActive: boolean = false;
    private remainingTime: number = 0;
    private tickCallback: () => void;
    private buttonMap: { [key: string]: cc.Button } = {};
    private colors: string[] = ["red", "yellow", "green", "blue"];

onLoad() {
    GameState.lastGameScene = cc.director.getScene().name;

    // ✅ Score UI 프리팹 인스턴스화 및 Label 연결
    if (this.scoreUIPrefab) {
        const scoreUI = cc.instantiate(this.scoreUIPrefab);
        this.node.addChild(scoreUI);

        const scoreLabelNode = scoreUI.getChildByName("ScoreLabel");
        if (scoreLabelNode) {
            this.scoreLabel = scoreLabelNode.getComponent(cc.Label);
        }

        if (!this.scoreLabel) {
            console.warn("⚠️ ScoreLabel 연결 실패: 프리팹 구조를 확인하세요.");
        }
    }

    // ✅ Timer UI 프리팹 인스턴스화 및 Label 연결
    if (this.timerUIPrefab) {
        const timerUI = cc.instantiate(this.timerUIPrefab);
        this.node.addChild(timerUI);

        const timerLabelNode = timerUI.getChildByName("TimerLabel");
        if (timerLabelNode) {
            this.timerLabel = timerLabelNode.getComponent(cc.Label);
        }

        if (!this.timerLabel) {
            console.warn("⚠️ TimerLabel 연결 실패: 프리팹 구조를 확인하세요.");
        }
    }

    // ✅ 게임 시작 오버레이
    if (this.gameStartOverlayPrefab) {
        const overlay = cc.instantiate(this.gameStartOverlayPrefab);
        this.node.addChild(overlay);
        overlay.setPosition(0, 0);

        this.scheduleOnce(() => {
            this.beginGame();
        }, 2);
    } else {
        this.beginGame();
    }

    cc.debug.setDisplayStats(false);

    // 버튼 매핑 및 클릭 이벤트 설정
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
    this.startButton.node.active = false;

    // ✅ 더 이상 timerLabel.node.active = false 제거 (프리팹에서 직접 조절)

    this.tickCallback = this.updateTimer.bind(this);
    this.setFrogState("neutral");

    // 테스트용 콘솔 로그
    cc.find('Canvas/yellowButton').on('click', () => console.log('yellowButton 눌림'));
    cc.find('Canvas/greenButton').on('click', () => console.log('greenButton 눌림'));
    cc.find('Canvas/blueButton').on('click', () => console.log('blueButton 눌림'));
    cc.find('Canvas/redButton').on('click', () => console.log('redButton 눌림'));
}






    private beginGame() {
        if (this.isGameActive) return; // 중복 방지
        this.colorSequence = [];
        this.userInput = [];
        this.score = 0;
        this.level = 1;
        this.updateScore();
        this.setStatusMessage("게임 시작!");
        this.hintLabel.string = "";
        this.isGameActive = true;
        this.setFrogState("neutral");
        this.startTimer();
        this.generateColorSequence();
        this.showColorSequence();
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

        this.userInput.push(color);
        this.checkUserInput();
    }

    private updateTimer() {
        this.remainingTime--;
        this.timerLabel.string = `${this.remainingTime}`;
        if (this.remainingTime <= 0) {
            this.unschedule(this.tickCallback);
            this.onTimeUp();
        }
    }

    private startTimer() {
        this.unschedule(this.tickCallback);
        this.remainingTime = 10;
        this.timerLabel.string = `${this.remainingTime}`;
        this.timerLabel.node.active = true;
        this.schedule(this.tickCallback, 1);
    }

    private onTimeUp() {
        this.isGameActive = false;
        this.disableButtons(true);
        this.startButton.interactable = false;

        // 게임 상태 저장
        GameState.lastGameScene = cc.director.getScene().name;
        GameState.score = this.score;
        GameState.gameId = "remember-game"; // 기억력 게임 고유 식별자
        // 게임종료 Prefab 생성
        const gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI);  // 또는 Canvas에 직접 붙여도 됨

        // 정중앙 배치
        gameOverUI.setPosition(0, 0);


    }


    private checkUserInput() {
        let correct = true;
        let targetSequence = this.level === 3 ? [...this.colorSequence].reverse() : this.colorSequence;

        for (let i = 0; i < this.userInput.length; i++) {
            if (this.userInput[i] !== targetSequence[i]) {
                correct = false;
                break;
            }
        }

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
        this.hintLabel.string = this.level === 3 ? "불이 깜빡이는 순서를 반대로 입력하라." : "";
        console.log("생성된 색상 순서:", this.colorSequence);
    }

    private setInitialButtonState() {
        Object.values(this.buttonMap).forEach(btn => {
            btn.node.opacity = 100;
            btn.interactable = false;
        });
    }

    private showColorSequence() {
        this.setFrogState("neutral");

        this.setInitialButtonState();
        let delay = 0;
        this.colorSequence.forEach(color => {
            const btn = this.buttonMap[color];
            this.scheduleOnce(() => this.activateButtonForBlink(btn), delay);
            delay += 1.0;
        });
        this.scheduleOnce(() => {
            this.enableAnswerInput();
            this.setStatusMessage("버튼 순서를 맞춰주세요!");
        }, delay);
    }


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
    }

    private setStatusMessage(message: string) {
        this.statusLabel.string = message;
    }

    private disableButtons(disable: boolean) {
        Object.values(this.buttonMap).forEach(btn => {
            btn.interactable = !disable;
        });
    }

    loadList() {
        cc.director.loadScene('SingleGameList');
    }

}
