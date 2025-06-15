    // File: MultiPlayerRememberGame.ts

    import GameState from "../../Controller/CommonUI/GameState";
    import MultiGameFlowController from "../../Controller/Multi/MultiFlowController";

    const { ccclass, property } = cc._decorator;

    @ccclass
    export default class GameController extends cc.Component {
    @property(cc.Button) startButton: cc.Button = null;
    @property(cc.Button) redButton: cc.Button = null;
    @property(cc.Button) yellowButton: cc.Button = null;
    @property(cc.Button) greenButton: cc.Button = null;
    @property(cc.Button) blueButton: cc.Button = null;
    @property(cc.Sprite) frogSprite: cc.Sprite = null;
    @property(cc.Prefab) gameStartOverlayPrefab: cc.Prefab = null;
    @property(cc.Prefab) gameOverUIPrefab: cc.Prefab = null;

    @property(cc.Prefab) scoreUIPrefab: cc.Prefab = null;
    @property(cc.Prefab) timerUIPrefab: cc.Prefab = null;

    private scoreLabel: cc.Label = null;
    private timerLabel: cc.Label = null;
    private colorSequence: string[] = [];
    private userInput: string[] = [];

    /** 이제 `score` 를 public 으로 선언합니다. */
    public score: number = 0;

    private level: number = 1;
    private isGameActive: boolean = false;

    /** FlowController가 요구하는 `isGameOver` 를 public 으로 선언합니다. */
    public isGameOver: boolean = false;

    private remainingTime: number = 0;
    private tickCallback: () => void;
    private buttonMap: { [key: string]: cc.Button } = {};
    private colors: string[] = ["red", "yellow", "green", "blue"];

    onLoad() {
        GameState.lastGameScene = cc.director.getScene().name;

        // 1) FlowController에서 “multi-game-start” 이벤트 수신 시 beginGame() 호출
        cc.director.on("multi-game-start", () => {
        this.beginGame();
        });

        // 2) Score UI 프리팹 인스턴스화 및 Label 연결
        if (this.scoreUIPrefab) {
        const scoreUI = cc.instantiate(this.scoreUIPrefab);
        this.node.addChild(scoreUI);

        const scoreLabelNode = scoreUI.getChildByName("ScoreLabel");
        if (scoreLabelNode) {
            this.scoreLabel = scoreLabelNode.getComponent(cc.Label);
        }
        if (!this.scoreLabel) {
            console.warn("ScoreLabel 연결 실패: 프리팹 구조를 확인하세요.");
        }
        }

        // 3) Timer UI 프리팹 인스턴스화 및 Label 연결
        if (this.timerUIPrefab) {
        const timerUI = cc.instantiate(this.timerUIPrefab);
        this.node.addChild(timerUI);

        const timerLabelNode = timerUI.getChildByName("TimerLabel");
        if (timerLabelNode) {
            this.timerLabel = timerLabelNode.getComponent(cc.Label);
        }
        if (!this.timerLabel) {
            console.warn("TimerLabel 연결 실패: 프리팹 구조를 확인하세요.");
        }
        }

        // 4) 게임 시작 오버레이 (FlowController가 “multi-game-start”를 보내지 않을 때만)
        // if (this.gameStartOverlayPrefab) {
        // const overlay = cc.instantiate(this.gameStartOverlayPrefab);
        // this.node.addChild(overlay);
        // overlay.setPosition(0, 400);

        // this.scheduleOnce(() => {
        //     this.beginGame();
        // }, 2);
        // }

        cc.debug.setDisplayStats(false);

        // 5) 버튼 매핑 및 클릭 이벤트 설정
        this.buttonMap = {
        red: this.redButton,
        yellow: this.yellowButton,
        green: this.greenButton,
        blue: this.blueButton,
        };

        this.startButton.node.on("click", this.onStartGame, this);
        this.redButton.node.on("click", () => this.onColorButtonClick("red"), this);
        this.yellowButton.node.on("click", () => this.onColorButtonClick("yellow"), this);
        this.greenButton.node.on("click", () => this.onColorButtonClick("green"), this);
        this.blueButton.node.on("click", () => this.onColorButtonClick("blue"), this);

        this.setInitialButtonState();
        this.startButton.node.active = false;

        this.tickCallback = this.updateTimer.bind(this);
        this.setFrogState("neutral");

        
    }

    // FlowController에서 호출할 수 있도록 public으로 노출
    public startGame() {
        this.beginGame();
    }

    private beginGame() {
        if (this.isGameActive) return; // 중복 방지

        // 초기화
        this.colorSequence = [];
        this.userInput = [];
        this.score = 0;
        this.level = 1;
        this.updateScore();

        this.isGameActive = true;
        this.setFrogState("neutral");
        this.startTimer();

        // 3초 딜레이 후에 실제 시퀀스 생성/표시
        const delaySeconds = 3;
        this.scheduleOnce(() => {
        this.generateColorSequence();
        this.showColorSequence();
        }, delaySeconds);
    }

    private setFrogState(state: "neutral" | "smile" | "cry") {
        const spriteMap = {
        neutral: "무표정개굴",
        smile: "웃는개굴",
        cry: "우는개굴",
        };
        const sizeMap = {
        neutral: { width: 200, height: 200 },
        smile: { width: 200, height: 250 },
        cry: { width: 300, height: 300 },
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
        if (btnLabel === "다시") {
        this.userInput = [];
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

        // 클릭 애니메이션
        cc.tween(btn.node)
        .parallel(
            cc.tween().to(0.1, { scale: originalScale * 0.85 }, { easing: "quadIn" }),
            cc.tween().to(0.1, { opacity: 180 }),
            cc.tween().to(0.1, { position: cc.v3(originalPos.x, originalPos.y - 5) })
        )
        .parallel(
            cc.tween().to(0.1, { scale: originalScale }, { easing: "quadOut" }),
            cc.tween().to(0.1, { opacity: 255 }),
            cc.tween().to(0.1, { position: originalPos })
        )
        .start();

        this.userInput.push(color);

        // ─── 멀티용 “user-input” 이벤트 전송 ───
        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        if (!cc.sys.isNative && window.socket && roomId) {
        window.socket.emit("game-event", {
            type: "user-input",
            roomId,
            payload: {
            color: color,
            inputIndex: this.userInput.length - 1,
            },
        });
        }

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
        this.remainingTime = 60;
        this.timerLabel.string = `${this.remainingTime}`;
        this.timerLabel.node.active = true;
        this.schedule(this.tickCallback, 1);
    }

    // “게임 오버” 시 호출되는 메서드
    private onTimeUp() {
        this.isGameActive = false;
        this.disableButtons(true);
        this.startButton.interactable = false;

        // ─── FlowController에 게임 종료 알림 ───
        this.endGame();

        // // 게임 종료 UI 생성
        // GameState.lastGameScene = cc.director.getScene().name;
        // GameState.score = this.score;
        // GameState.gameId = "remember-game";
        // const gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        // this.node.addChild(gameOverUI);
        // gameOverUI.setPosition(0, 400);
    }

    private checkUserInput() {
        let correct = true;
        const targetSequence =
        this.level === 3 ? [...this.colorSequence].reverse() : this.colorSequence;

        for (let i = 0; i < this.userInput.length; i++) {
        if (this.userInput[i] !== targetSequence[i]) {
            correct = false;
            break;
        }
        }

        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        const playerRole = GameState.isHost ? "host" : "guest";

        if (correct && this.userInput.length === targetSequence.length) {
        // 정답 처리
        this.setFrogState("smile");
        this.score += 10;
        this.updateScore();

        // ─── 멀티용 “input-result” 이벤트(정답) 전송 ───
        if (!cc.sys.isNative && window.socket && roomId) {
            window.socket.emit("game-event", {
            type: "input-result",
            roomId,
            payload: {
                correct: true,
                level: this.level,
                player: playerRole,
            },
            });
        }

        // ─── 멀티용 “score-update” 이벤트 전송 ───
        if (!cc.sys.isNative && window.socket && roomId) {
            window.socket.emit("game-event", {
            type: "score-update",
            roomId,
            payload: {
                player: playerRole,
                score: this.score,
            },
            });
        }

        // ─── 멀티용 “level-up” 이벤트 전송 ───
        if (!cc.sys.isNative && window.socket && roomId) {
            window.socket.emit("game-event", {
            type: "level-up",
            roomId,
            payload: {
                newLevel: this.level + 1,
                player: playerRole,
            },
            });
        }

        // 다음 레벨 준비
        this.userInput = [];
        this.level++;
        this.scheduleOnce(() => {
            this.generateColorSequence();
            this.showColorSequence();
        }, 3);
        } else if (!correct) {
        // 오답 처리
        this.setFrogState("cry");
        this.userInput = [];
        this.startButton.node.getComponentInChildren(cc.Label).string = "다시";
        this.startButton.node.active = true;
        this.isGameActive = false;
        this.disableButtons(true);

        // ─── 멀티용 “input-result” 이벤트(오답) 전송 ───
        if (!cc.sys.isNative && window.socket && roomId) {
            window.socket.emit("game-event", {
            type: "input-result",
            roomId,
            payload: {
                correct: false,
                level: this.level,
                player: playerRole,
            },
            });
        }
        }
    }

    private generateColorSequence() {
        this.colorSequence = [];
        const length = this.level >= 5 ? 7 : this.level + 2;
        for (let i = 0; i < length; i++) {
        const idx = Math.floor(Math.random() * this.colors.length);
        this.colorSequence.push(this.colors[idx]);
        }
        console.log("생성된 색상 순서:", this.colorSequence);

        // ─── 멀티용 “sequence-generated” 이벤트 전송 ───
        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        if (!cc.sys.isNative && window.socket && roomId) {
        window.socket.emit("game-event", {
            type: "sequence-generated",
            roomId,
            payload: {
            level: this.level,
            sequence: this.colorSequence.slice(),
            },
        });
        }
    }

    private setInitialButtonState() {
        Object.values(this.buttonMap).forEach((btn) => {
        btn.node.opacity = 100;
        btn.interactable = false;
        });
    }

    private showColorSequence() {
        this.setFrogState("neutral");

        this.setInitialButtonState();
        let delay = 0;
        this.colorSequence.forEach((color) => {
        const btn = this.buttonMap[color];
        this.scheduleOnce(() => this.activateButtonForBlink(btn), delay);
        delay += 1.0;
        });
        this.scheduleOnce(() => {
        this.enableAnswerInput();
        }, delay);
    }

    private activateButtonForBlink(button: cc.Button) {
        const originalScale = button.node.scale;
        button.node.opacity = 100;
        button.interactable = false;
        cc.tween(button.node)
        .to(0.15, { opacity: 255, scale: originalScale * 1.05 }, { easing: "quadOut" })
        .to(0.15, { opacity: 100, scale: originalScale }, { easing: "quadIn" })
        .start();
    }

    private enableAnswerInput() {
        Object.values(this.buttonMap).forEach((btn) => {
        const bg = btn.node.getChildByName("Background");
        if (bg) {
            btn.node.setContentSize(bg.getContentSize());
        }
        btn.node.opacity = 255;
        btn.interactable = true;
        console.log(`${btn.node.name} size:`, btn.node.width, btn.node.height);
        });
    }

    private updateScore() {
        if (this.scoreLabel) {
        this.scoreLabel.string = `${this.score}`;
        }
    }

    private disableButtons(disable: boolean) {
        Object.values(this.buttonMap).forEach((btn) => {
        btn.interactable = !disable;
        });
    }

    // loadList() {
    //     cc.director.loadScene("SingleGameList");
    // }

    /**
     * MultiGameFlowController.endGame(this) 을 호출할 수 있도록 하는 헬퍼 메서드입니다.
     * - isGameOver 플래그 세팅
     * - 모든 스케줄러 해제
     * - 서버에 game-end emit
     */
    private endGame(): void {
        MultiGameFlowController.endGame(this);
    }
    }
