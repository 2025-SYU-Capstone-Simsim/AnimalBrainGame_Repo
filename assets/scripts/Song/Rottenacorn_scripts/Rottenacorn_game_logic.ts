const { ccclass, property } = cc._decorator;

import AcornManager from "./Rottenacorn_acorn_manager";
import Acorn from "./Rottenacorn_acorn"

@ccclass
export default class RottenacornGameLogic extends cc.Component {

    @property(AcornManager)
    acornManager: AcornManager = null;

    @property(cc.Node)
    frontbutton: cc.Node = null;

    @property(cc.Node)
    backbutton: cc.Node = null;

    @property(cc.Node)
    chocicebutton: cc.Node = null;

    @property(cc.Label)
    timerLabel: cc.Label = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property
    timeLimit: number = 60;

    private remainingTime: number = 0;
    private isGameOver: boolean = false;
    private score: number = 0;

    private normalCount: number = 2;
    private rottenCount: number = 1;
    private correctStreak: number = 0;

    private currentAcorns: cc.Node[] = [];
    private selectedIndex: number = 0;

    private rottenIndices: number[] = [];
    private selectedIndices: Set<number> = new Set();

    onLoad() {
        this.frontbutton?.on(cc.Node.EventType.TOUCH_END, this.onNext, this);
        this.backbutton?.on(cc.Node.EventType.TOUCH_END, this.onPrev, this);
        this.chocicebutton?.on(cc.Node.EventType.TOUCH_END, this.onConfirm, this);
    }

    start() {
        this.remainingTime = this.timeLimit;
        this.isGameOver = false;
        this.score = 0;
        this.updateScoreLabel();

        this.startRound();
    }

    update(dt: number): void {
        if (this.isGameOver) return;

        this.remainingTime -= dt;
        if (this.remainingTime <= 0) {
            this.remainingTime = 0;
            this.endGame();
        }

        this.timerLabel.string = `남은 시간: ${Math.ceil(this.remainingTime)}초`;
    }

    updateScoreLabel(): void {
        this.scoreLabel.string = `점수: ${this.score}`;
    }

    startRound(): void {
        this.acornManager.resetAll();

        const total = this.normalCount + this.rottenCount;
        this.rottenIndices = this.pickRandomIndices(total, this.rottenCount);
        this.selectedIndices.clear();

        this.currentAcorns = [];

        for (let i = 0; i < total; i++) {
            const isRotten = this.rottenIndices.includes(i);
            const acorn = this.acornManager.getAcorn(isRotten);

            if (acorn) {
                const x = -((total - 1) * 60) + i * 120;
                const y = 100;
                acorn.setPosition(x, y);
                this.currentAcorns.push(acorn);

                console.log(`🍂 도토리 ${i} 생성됨 - 썩음: ${isRotten}, 위치: (${x}, ${y})`);
            }
        }

        this.selectedIndex = 0;
        this.updateSelectionVisual();
    }

    updateSelectionVisual(): void {
        for (let i = 0; i < this.currentAcorns.length; i++) {
            const acorn = this.currentAcorns[i];
            const sprite = acorn.getComponent(cc.Sprite);
            if (sprite) {
                sprite.setState(i === this.selectedIndex ? cc.Sprite.State.GRAY : cc.Sprite.State.NORMAL);
                acorn.color = (i === this.selectedIndex) ? cc.Color.YELLOW : cc.Color.WHITE;
            }
        }
    }

    onNext(): void {
        if (this.currentAcorns.length === 0) return;

        let nextIndex = this.selectedIndex;
        const total = this.currentAcorns.length;

        do {
            nextIndex = (nextIndex + 1) % total;
        } while (this.selectedIndices.has(nextIndex) && nextIndex !== this.selectedIndex);

        this.selectedIndex = nextIndex;
        this.updateSelectionVisual();
    }

    onPrev(): void {
        if (this.currentAcorns.length === 0) return;

        let prevIndex = this.selectedIndex;
        const total = this.currentAcorns.length;

        do {
            prevIndex = (prevIndex - 1 + total) % total;
        } while (this.selectedIndices.has(prevIndex) && prevIndex !== this.selectedIndex);

        this.selectedIndex = prevIndex;
        this.updateSelectionVisual();
    }

    onConfirm(): void {
        if (this.currentAcorns.length === 0 || this.isGameOver) return;

        const index = this.selectedIndex;
        if (this.selectedIndices.has(index)) {
            return;
        }

        this.selectedIndices.add(index);

        const isCorrect = this.rottenIndices.includes(index);
        const selected = this.currentAcorns[index];
        const acornScript = selected.getComponent(Acorn);

        if (isCorrect) {
            // 점수 추가
            this.score++;
            this.updateScoreLabel();

            // 벌레 보이기 유지
            if (acornScript?.bugNode) {
                acornScript.unscheduleAllCallbacks();
                acornScript.bugNode.active = true;
            }
        } else {
            this.scheduleOnce(() => {
                this.startRound();
            }, 1);
            return;
        }

        if (this.selectedIndices.size === this.rottenIndices.length) {
            this.scheduleOnce(() => {
                this.handleCorrectAnswer();
            }, 1);
        }
    }

    handleCorrectAnswer(): void {
        this.correctStreak++;

        if (this.correctStreak >= 2 && this.normalCount < 4) {
            this.normalCount++;
            this.correctStreak = 0;
        } else {
            if (this.rottenCount < this.normalCount && this.rottenCount < 4) {
                this.rottenCount++;
            }
        }

        this.startRound();
    }

    endGame(): void {
        if (this.isGameOver) return;
        this.isGameOver = true;
        this.frontbutton.active = false;
        this.backbutton.active = false;
        this.chocicebutton.active = false;

        this.currentAcorns = [];
    }

    pickRandomIndices(total: number, count: number): number[] {
        const indices = Array.from(Array(total).keys());
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        return indices.slice(0, count);
    }
}
