
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Controller/LoginManager');
require('./assets/scripts/Controller/MainMenuScene');
require('./assets/scripts/Controller/SingleGameList');
require('./assets/scripts/Jang/GameData');
require('./assets/scripts/Jang/GameOverManager');
require('./assets/scripts/Jang/MainMenuManager');
require('./assets/scripts/Jang/MazeGameManager');
require('./assets/scripts/Jang/MazeLogic');
require('./assets/scripts/Jang/MazePlayer');
require('./assets/scripts/Sim/BlockCountGame/BlockCountGameManager');
require('./assets/scripts/Sim/RememberGame/RememberGameController');
require('./assets/scripts/Yu/3Match/3MatchBoard');
require('./assets/scripts/Yu/3Match/3MatchManager');
require('./assets/scripts/Yu/3Match/Tile');
require('./assets/scripts/Yu/MoleGame/MoleGameScene');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountGameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f2d2MhIYtOX5HlJict5IJh', 'BlockCountGameManager');
// scripts/Sim/BlockCountGame/BlockCountGameManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let GameManager = class GameManager extends cc.Component {
    constructor() {
        super(...arguments);
        // 1) 옵션 버튼들
        this.optionButtons = [];
        // 2) 결과 레이블
        this.resultLabel = null;
        // 3) 블록 부모 노드
        this.blockParent = null;
        // 4) 블록 프리팹
        this.blockPrefab = null;
        // 5) Next/Skip 버튼
        this.nextButton = null;
        // 6) Score 레이블
        this.scoreLabel = null;
        // 7) TIMEOUT 표시용 레이블
        this.timeoutLabel = null;
        // 8) 남은 시간 표시용 레이블
        this.timeLabel = null;
        this.correctCount = 0;
        this.score = 0;
        this.answered = false;
        // 전체 게임 시간 (초)
        this.timeLeft = 100;
        // y축(높이)마다 사용할 색상
        this.layerColors = [
            cc.color(100, 170, 255),
            cc.color(255, 100, 100),
            cc.color(100, 255, 100),
            cc.color(255, 255, 100),
        ];
    }
    onLoad() {
        // Next/Skip 버튼 클릭
        if (this.nextButton) {
            this.nextButton.node.on('click', this.nextQuestion, this);
        }
        // Score 초기화
        this.score = 0;
        if (this.scoreLabel) {
            this.scoreLabel.string = `점수 : ${this.score}점`;
        }
        // TIMEOUT 레이블 숨기기
        if (this.timeoutLabel) {
            this.timeoutLabel.node.active = false;
        }
        // 남은 시간 레이블 초기화
        this.timeLeft = 100;
        if (this.timeLabel) {
            this.timeLabel.string = `남은 시간: ${this.timeLeft}초`;
        }
        // 전체 게임 100초 카운트다운 시작
        this.startTimer();
        // 첫 문제 생성
        this.generateQuestion();
    }
    /** 100초 타이머 시작 */
    startTimer() {
        this.unschedule(this.updateTimer);
        this.timeLeft = 100;
        if (this.timeLabel) {
            this.timeLabel.string = `남은 시간: ${this.timeLeft}초`;
        }
        this.schedule(this.updateTimer, 1);
    }
    /** 1초마다 호출되어 남은 시간을 갱신 */
    updateTimer() {
        this.timeLeft--;
        if (this.timeLabel) {
            this.timeLabel.string = `남은 시간: ${this.timeLeft}초`;
        }
        if (this.timeLeft <= 0) {
            this.unschedule(this.updateTimer);
            this.onTimeout();
        }
    }
    /** 전체 시간이 다 됐을 때 호출 */
    onTimeout() {
        // “TIMEOUT” 표시
        if (this.timeoutLabel) {
            this.timeoutLabel.node.active = true;
            this.timeoutLabel.string = 'TIMEOUT';
        }
        // 모든 버튼 비활성화
        this.optionButtons.forEach(btn => btn.interactable = false);
        if (this.nextButton) {
            this.nextButton.interactable = false;
        }
    }
    /** 새 문제 생성 (시간은 계속 흐릅니다) */
    generateQuestion() {
        this.answered = false;
        // Next 버튼 레이블 초기화
        if (this.nextButton) {
            const lbl = this.nextButton.node.getComponentInChildren(cc.Label);
            lbl.string = '건너뛰기';
            this.nextButton.interactable = true;
        }
        // 결과 레이블 초기화
        this.resultLabel.string = '';
        // 정답 개수 결정 및 블록 배치
        this.correctCount = Math.floor(Math.random() * 20) + 1;
        this.spawnBlocks(this.correctCount);
        // 보기 세팅
        const options = new Set([this.correctCount]);
        while (options.size < this.optionButtons.length) {
            options.add(Math.floor(Math.random() * 30) + 1);
        }
        const list = Array.from(options);
        this.shuffleArray(list);
        this.optionButtons.forEach((btn, i) => {
            btn.interactable = true;
            const lbl = btn.node.getComponentInChildren(cc.Label);
            lbl.string = list[i].toString();
            btn.node.off('click');
            btn.node.on('click', () => this.checkAnswer(list[i]));
        });
    }
    /** 답안 확인 */
    checkAnswer(selected) {
        if (this.answered)
            return;
        // 정답인 경우
        if (selected === this.correctCount) {
            this.answered = true;
            this.resultLabel.string = '🎉 정답입니다!';
            this.score += 20; // 맞았을 때 +10
            if (this.scoreLabel) {
                this.scoreLabel.string = `점수 : ${this.score}점`;
            }
            if (this.nextButton) {
                const lbl = this.nextButton.node.getComponentInChildren(cc.Label);
                lbl.string = '다음으로';
            }
        }
        // 오답인 경우
        else {
            this.resultLabel.string = '❌ 틀렸습니다!';
            this.score -= 10; // 틀렸을 때 -10
            if (this.scoreLabel) {
                this.scoreLabel.string = `점수 : ${this.score}점`;
            }
            if (this.nextButton) {
                const lbl = this.nextButton.node.getComponentInChildren(cc.Label);
                lbl.string = '건너뛰기';
            }
        }
    }
    /** 다음 문제로 넘어가기 */
    nextQuestion() {
        if (this.timeLeft > 0) {
            this.generateQuestion();
        }
    }
    /** 블록 생성 & 애니메이션 (column-first, y축 기준) */
    spawnBlocks(count) {
        if (!this.blockParent) {
            console.error('[GameManager] blockParent가 연결되지 않았습니다!');
            return;
        }
        this.blockParent.removeAllChildren();
        const blockW = 100, blockH = 50, blockD = 50;
        const maxSize = 4, maxHeight = 4;
        // 가능한 (x,z) 좌표 셔플
        const xzList = [];
        for (let x = 0; x < maxSize; x++) {
            for (let z = 0; z < maxSize; z++) {
                xzList.push({ x, z });
            }
        }
        this.shuffleArray(xzList);
        const placedCoords = [];
        let placed = 0;
        outer: for (const { x, z } of xzList) {
            for (let y = 0; y < maxHeight && placed < count; y++) {
                placedCoords.push({ x, z, y });
                placed++;
            }
            if (placed >= count)
                break outer;
        }
        // y층별 그룹핑
        const layers = [];
        let maxY = 0;
        placedCoords.forEach(p => {
            maxY = Math.max(maxY, p.y);
            if (!layers[p.y])
                layers[p.y] = [];
            layers[p.y].push(p);
        });
        // 애니메이션 파라미터
        const dropH = 500;
        const dropDur = 0.15;
        const layerGap = dropDur + 0.08;
        const itemGap = 0.05;
        // y=0→1→… 순서대로 떨어뜨리기
        for (let y = 0; y <= maxY; y++) {
            const layer = layers[y] || [];
            layer.forEach((p, i) => {
                var _a;
                const block = cc.instantiate(this.blockPrefab);
                block.parent = this.blockParent;
                block.zIndex = p.x + p.z + p.y * 10;
                // 아이소메트릭 목표 위치
                const isoX = (p.x - p.z) * (blockW / 2);
                const floorY = -300;
                const baseY = floorY + blockH / 2;
                const targetY = -(p.x + p.z) * (blockH / 2)
                    + baseY
                    + p.y * blockD;
                block.setPosition(isoX, targetY + dropH, 0);
                // 층마다 색상 적용
                const spr = block.getComponent(cc.Sprite);
                spr.node.color = (_a = this.layerColors[p.y]) !== null && _a !== void 0 ? _a : cc.color(200, 200, 200);
                // tween 애니메이션
                const totalDelay = y * layerGap + i * itemGap;
                cc.tween(block)
                    .delay(totalDelay)
                    .to(dropDur, { position: cc.v3(isoX, targetY, 0) }, { easing: 'bounceOut' })
                    .start();
            });
        }
    }
    /** 배열 셔플 유틸 */
    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
};
__decorate([
    property([cc.Button])
], GameManager.prototype, "optionButtons", void 0);
__decorate([
    property(cc.Label)
], GameManager.prototype, "resultLabel", void 0);
__decorate([
    property(cc.Node)
], GameManager.prototype, "blockParent", void 0);
__decorate([
    property(cc.Prefab)
], GameManager.prototype, "blockPrefab", void 0);
__decorate([
    property(cc.Button)
], GameManager.prototype, "nextButton", void 0);
__decorate([
    property(cc.Label)
], GameManager.prototype, "scoreLabel", void 0);
__decorate([
    property(cc.Label)
], GameManager.prototype, "timeoutLabel", void 0);
__decorate([
    property(cc.Label)
], GameManager.prototype, "timeLabel", void 0);
GameManager = __decorate([
    ccclass
], GameManager);
exports.default = GameManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxCbG9ja0NvdW50R2FtZVxcQmxvY2tDb3VudEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRzVDLElBQXFCLFdBQVcsR0FBaEMsTUFBcUIsV0FBWSxTQUFRLEVBQUUsQ0FBQyxTQUFTO0lBQXJEOztRQUNFLFlBQVk7UUFFWixrQkFBYSxHQUFnQixFQUFFLENBQUM7UUFFaEMsWUFBWTtRQUVaLGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGNBQWM7UUFFZCxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFZO1FBRVosZ0JBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsa0JBQWtCO1FBRWxCLGVBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsZUFBZTtRQUVmLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIscUJBQXFCO1FBRXJCLGlCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLG1CQUFtQjtRQUVuQixjQUFTLEdBQWEsSUFBSSxDQUFDO1FBRW5CLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUVsQyxlQUFlO1FBQ1AsYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUUvQixrQkFBa0I7UUFDVixnQkFBVyxHQUFlO1lBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FB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QUFDLENBQUM7a0RBQ1U7QUFJaEM7SUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDVTtBQUk3QjtJQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNVO0FBSTVCO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1U7QUFJOUI7SUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUztBQUk3QjtJQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNTO0FBSTVCO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1c7QUFJOUI7SUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDUTtBQS9CUixXQUFXO0lBRC9CLE9BQU87R0FDYSxXQUFXLENBZ1IvQjtrQkFoUm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIDEpIOyYteyFmCDrsoTtirzrk6RcclxuICBAcHJvcGVydHkoW2NjLkJ1dHRvbl0pXHJcbiAgb3B0aW9uQnV0dG9uczogY2MuQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgLy8gMikg6rKw6rO8IOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICByZXN1bHRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAvLyAzKSDruJTroZ0g67aA66qoIOuFuOuTnFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJsb2NrUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gNCkg67iU66GdIO2UhOumrO2MuVxyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgYmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gIC8vIDUpIE5leHQvU2tpcCDrsoTtirxcclxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gIG5leHRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gIC8vIDYpIFNjb3JlIOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIC8vIDcpIFRJTUVPVVQg7ZGc7Iuc7JqpIOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICB0aW1lb3V0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgLy8gOCkg64Ko7J2AIOyLnOqwhCDtkZzsi5zsmqkg66CI7J2067iUXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHRpbWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGNvcnJlY3RDb3VudDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgYW5zd2VyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8g7KCE7LK0IOqyjOyehCDsi5zqsIQgKOy0iClcclxuICBwcml2YXRlIHRpbWVMZWZ0OiBudW1iZXIgPSAxMDA7XHJcblxyXG4gIC8vIHnstpUo64aS7J20KeuniOuLpCDsgqzsmqntlaAg7IOJ7IOBXHJcbiAgcHJpdmF0ZSBsYXllckNvbG9yczogY2MuQ29sb3JbXSA9IFtcclxuICAgIGNjLmNvbG9yKDEwMCwgMTcwLCAyNTUpLCAgLy8geT0wXHJcbiAgICBjYy5jb2xvcigyNTUsIDEwMCwgMTAwKSwgIC8vIHk9MVxyXG4gICAgY2MuY29sb3IoMTAwLCAyNTUsIDEwMCksICAvLyB5PTJcclxuICAgIGNjLmNvbG9yKDI1NSwgMjU1LCAxMDApLCAgLy8geT0zXHJcbiAgXTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gTmV4dC9Ta2lwIOuyhO2KvCDtgbTrpq1cclxuICAgIGlmICh0aGlzLm5leHRCdXR0b24pIHtcclxuICAgICAgdGhpcy5uZXh0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5uZXh0UXVlc3Rpb24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNjb3JlIOy0iOq4sO2ZlFxyXG4gICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICBpZiAodGhpcy5zY29yZUxhYmVsKSB7XHJcbiAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBg7KCQ7IiYIDogJHt0aGlzLnNjb3JlfeygkGA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVElNRU9VVCDroIjsnbTruJQg7Iio6riw6riwXHJcbiAgICBpZiAodGhpcy50aW1lb3V0TGFiZWwpIHtcclxuICAgICAgdGhpcy50aW1lb3V0TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDrgqjsnYAg7Iuc6rCEIOugiOydtOu4lCDstIjquLDtmZRcclxuICAgIHRoaXMudGltZUxlZnQgPSAxMDA7XHJcbiAgICBpZiAodGhpcy50aW1lTGFiZWwpIHtcclxuICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gYOuCqOydgCDsi5zqsIQ6ICR7dGhpcy50aW1lTGVmdH3stIhgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOyghOyytCDqsozsnoQgMTAw7LSIIOy5tOyatO2KuOuLpOyatCDsi5zsnpFcclxuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG5cclxuICAgIC8vIOyyqyDrrLjsoJwg7IOd7ISxXHJcbiAgICB0aGlzLmdlbmVyYXRlUXVlc3Rpb24oKTtcclxuICB9XHJcblxyXG4gIC8qKiAxMDDstIgg7YOA7J2066i4IOyLnOyekSAqL1xyXG4gIHByaXZhdGUgc3RhcnRUaW1lcigpIHtcclxuICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcclxuICAgIHRoaXMudGltZUxlZnQgPSAxMDA7XHJcbiAgICBpZiAodGhpcy50aW1lTGFiZWwpIHtcclxuICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gYOuCqOydgCDsi5zqsIQ6ICR7dGhpcy50aW1lTGVmdH3stIhgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAxKTtcclxuICB9XHJcblxyXG4gIC8qKiAx7LSI66eI64ukIO2YuOy2nOuQmOyWtCDrgqjsnYAg7Iuc6rCE7J2EIOqwseyLoCAqL1xyXG4gIHByaXZhdGUgdXBkYXRlVGltZXIoKSB7XHJcbiAgICB0aGlzLnRpbWVMZWZ0LS07XHJcbiAgICBpZiAodGhpcy50aW1lTGFiZWwpIHtcclxuICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gYOuCqOydgCDsi5zqsIQ6ICR7dGhpcy50aW1lTGVmdH3stIhgO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGltZUxlZnQgPD0gMCkge1xyXG4gICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lcik7XHJcbiAgICAgIHRoaXMub25UaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog7KCE7LK0IOyLnOqwhOydtCDri6Qg65CQ7J2EIOuVjCDtmLjstpwgKi9cclxuICBwcml2YXRlIG9uVGltZW91dCgpIHtcclxuICAgIC8vIOKAnFRJTUVPVVTigJ0g7ZGc7IucXHJcbiAgICBpZiAodGhpcy50aW1lb3V0TGFiZWwpIHtcclxuICAgICAgdGhpcy50aW1lb3V0TGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnRpbWVvdXRMYWJlbC5zdHJpbmcgPSAnVElNRU9VVCc7XHJcbiAgICB9XHJcbiAgICAvLyDrqqjrk6Ag67KE7Yq8IOu5hO2ZnOyEse2ZlFxyXG4gICAgdGhpcy5vcHRpb25CdXR0b25zLmZvckVhY2goYnRuID0+IGJ0bi5pbnRlcmFjdGFibGUgPSBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDsg4gg66y47KCcIOyDneyEsSAo7Iuc6rCE7J2AIOqzhOyGjSDtnZDrpoXri4jri6QpICovXHJcbiAgZ2VuZXJhdGVRdWVzdGlvbigpIHtcclxuICAgIHRoaXMuYW5zd2VyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBOZXh0IOuyhO2KvCDroIjsnbTruJQg7LSI6riw7ZmUXHJcbiAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgIGNvbnN0IGxibCA9IHRoaXMubmV4dEJ1dHRvbi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpITtcclxuICAgICAgbGJsLnN0cmluZyA9ICfqsbTrhIjrm7DquLAnO1xyXG4gICAgICB0aGlzLm5leHRCdXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDqsrDqs7wg66CI7J2067iUIOy0iOq4sO2ZlFxyXG4gICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgPSAnJztcclxuXHJcbiAgICAvLyDsoJXri7Ug6rCc7IiYIOqysOyglSDrsI8g67iU66GdIOuwsOy5mFxyXG4gICAgdGhpcy5jb3JyZWN0Q291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxO1xyXG4gICAgdGhpcy5zcGF3bkJsb2Nrcyh0aGlzLmNvcnJlY3RDb3VudCk7XHJcblxyXG4gICAgLy8g67O06riwIOyEuO2MhVxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQ8bnVtYmVyPihbdGhpcy5jb3JyZWN0Q291bnRdKTtcclxuICAgIHdoaWxlIChvcHRpb25zLnNpemUgPCB0aGlzLm9wdGlvbkJ1dHRvbnMubGVuZ3RoKSB7XHJcbiAgICAgIG9wdGlvbnMuYWRkKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSArIDEpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20ob3B0aW9ucyk7XHJcbiAgICB0aGlzLnNodWZmbGVBcnJheShsaXN0KTtcclxuICAgIHRoaXMub3B0aW9uQnV0dG9ucy5mb3JFYWNoKChidG4sIGkpID0+IHtcclxuICAgICAgYnRuLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgIGNvbnN0IGxibCA9IGJ0bi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpITtcclxuICAgICAgbGJsLnN0cmluZyA9IGxpc3RbaV0udG9TdHJpbmcoKTtcclxuICAgICAgYnRuLm5vZGUub2ZmKCdjbGljaycpO1xyXG4gICAgICBidG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmNoZWNrQW5zd2VyKGxpc3RbaV0pKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIOuLteyViCDtmZXsnbggKi9cclxuICBjaGVja0Fuc3dlcihzZWxlY3RlZDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5hbnN3ZXJlZCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIOygleuLteyduCDqsr3smrBcclxuICAgIGlmIChzZWxlY3RlZCA9PT0gdGhpcy5jb3JyZWN0Q291bnQpIHtcclxuICAgICAgICB0aGlzLmFuc3dlcmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9ICfwn46JIOygleuLteyeheuLiOuLpCEnO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMjA7ICAvLyDrp57slZjsnYQg65WMICsxMFxyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlTGFiZWwpIHtcclxuICAgICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBg7KCQ7IiYIDogJHt0aGlzLnNjb3JlfeygkGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5leHRCdXR0b24pIHtcclxuICAgICAgICAgIGNvbnN0IGxibCA9IHRoaXMubmV4dEJ1dHRvbi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpITtcclxuICAgICAgICAgIGxibC5zdHJpbmcgPSAn64uk7J2M7Jy866GcJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC8vIOyYpOuLteyduCDqsr3smrBcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJ+KdjCDti4DroLjsirXri4jri6QhJztcclxuICAgICAgICB0aGlzLnNjb3JlIC09IDEwOyAgLy8g7YuA66C47J2EIOuVjCAtMTBcclxuICAgICAgICBpZiAodGhpcy5zY29yZUxhYmVsKSB7XHJcbiAgICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYOygkOyImCA6ICR7dGhpcy5zY29yZX3soJBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgICAgICBjb25zdCBsYmwgPSB0aGlzLm5leHRCdXR0b24ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSE7XHJcbiAgICAgICAgICBsYmwuc3RyaW5nID0gJ+qxtOuEiOubsOq4sCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog64uk7J2MIOusuOygnOuhnCDrhJjslrTqsIDquLAgKi9cclxuICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy50aW1lTGVmdCA+IDApIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog67iU66GdIOyDneyEsSAmIOyVoOuLiOuplOydtOyFmCAoY29sdW1uLWZpcnN0LCB57LaVIOq4sOykgCkgKi9cclxuICBzcGF3bkJsb2Nrcyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuYmxvY2tQYXJlbnQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignW0dhbWVNYW5hZ2VyXSBibG9ja1BhcmVudOqwgCDsl7DqsrDrkJjsp4Ag7JWK7JWY7Iq164uI64ukIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmJsb2NrUGFyZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcblxyXG4gICAgY29uc3QgYmxvY2tXID0gMTAwLCBibG9ja0ggPSA1MCwgYmxvY2tEID0gNTA7XHJcbiAgICBjb25zdCBtYXhTaXplID0gNCwgbWF4SGVpZ2h0ID0gNDtcclxuXHJcbiAgICAvLyDqsIDriqXtlZwgKHgseikg7KKM7ZGcIOyFlO2UjFxyXG4gICAgY29uc3QgeHpMaXN0OiB7IHg6IG51bWJlcjsgejogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXhTaXplOyB4KyspIHtcclxuICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBtYXhTaXplOyB6KyspIHtcclxuICAgICAgICB4ekxpc3QucHVzaCh7IHgsIHogfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2h1ZmZsZUFycmF5KHh6TGlzdCk7XHJcblxyXG4gICAgLy8g7Lus65+8IOuLqOychOuhnCB5PTDihpIx4oaS4oCmIOyxhOyasOq4sFxyXG4gICAgdHlwZSBQb3MgPSB7IHg6IG51bWJlcjsgejogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICAgIGNvbnN0IHBsYWNlZENvb3JkczogUG9zW10gPSBbXTtcclxuICAgIGxldCBwbGFjZWQgPSAwO1xyXG4gICAgb3V0ZXI6IGZvciAoY29uc3QgeyB4LCB6IH0gb2YgeHpMaXN0KSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWF4SGVpZ2h0ICYmIHBsYWNlZCA8IGNvdW50OyB5KyspIHtcclxuICAgICAgICBwbGFjZWRDb29yZHMucHVzaCh7IHgsIHosIHkgfSk7XHJcbiAgICAgICAgcGxhY2VkKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBsYWNlZCA+PSBjb3VudCkgYnJlYWsgb3V0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8geey4teuzhCDqt7jro7ntlZFcclxuICAgIGNvbnN0IGxheWVyczogUG9zW11bXSA9IFtdO1xyXG4gICAgbGV0IG1heFkgPSAwO1xyXG4gICAgcGxhY2VkQ29vcmRzLmZvckVhY2gocCA9PiB7XHJcbiAgICAgIG1heFkgPSBNYXRoLm1heChtYXhZLCBwLnkpO1xyXG4gICAgICBpZiAoIWxheWVyc1twLnldKSBsYXllcnNbcC55XSA9IFtdO1xyXG4gICAgICBsYXllcnNbcC55XS5wdXNoKHApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g7JWg64uI66mU7J207IWYIO2MjOudvOuvuO2EsFxyXG4gICAgY29uc3QgZHJvcEggICAgPSA1MDA7XHJcbiAgICBjb25zdCBkcm9wRHVyICA9IDAuMTU7XHJcbiAgICBjb25zdCBsYXllckdhcCA9IGRyb3BEdXIgKyAwLjA4O1xyXG4gICAgY29uc3QgaXRlbUdhcCAgPSAwLjA1O1xyXG5cclxuICAgIC8vIHk9MOKGkjHihpLigKYg7Iic7ISc64yA66GcIOuWqOyWtOucqOumrOq4sFxyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW3ldIHx8IFtdO1xyXG4gICAgICBsYXllci5mb3JFYWNoKChwLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrUHJlZmFiKTtcclxuICAgICAgICBibG9jay5wYXJlbnQgPSB0aGlzLmJsb2NrUGFyZW50O1xyXG4gICAgICAgIGJsb2NrLnpJbmRleCA9IHAueCArIHAueiArIHAueSAqIDEwO1xyXG5cclxuICAgICAgICAvLyDslYTsnbTshozrqZTtirjrpq0g66qp7ZGcIOychOy5mFxyXG4gICAgICAgIGNvbnN0IGlzb1ggICA9IChwLnggLSBwLnopICogKGJsb2NrVyAvIDIpO1xyXG4gICAgICAgIGNvbnN0IGZsb29yWSA9IC0zMDA7XHJcbiAgICAgICAgY29uc3QgYmFzZVkgID0gZmxvb3JZICsgYmxvY2tIIC8gMjtcclxuICAgICAgICBjb25zdCB0YXJnZXRZID0gLShwLnggKyBwLnopICogKGJsb2NrSCAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYmFzZVlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBwLnkgKiBibG9ja0Q7XHJcblxyXG4gICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKGlzb1gsIHRhcmdldFkgKyBkcm9wSCwgMCk7XHJcblxyXG4gICAgICAgIC8vIOy4teuniOuLpCDsg4nsg4Eg7KCB7JqpXHJcbiAgICAgICAgY29uc3Qgc3ByID0gYmxvY2suZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkhO1xyXG4gICAgICAgIHNwci5ub2RlLmNvbG9yID0gdGhpcy5sYXllckNvbG9yc1twLnldID8/IGNjLmNvbG9yKDIwMCwgMjAwLCAyMDApO1xyXG5cclxuICAgICAgICAvLyB0d2VlbiDslaDri4jrqZTsnbTshZhcclxuICAgICAgICBjb25zdCB0b3RhbERlbGF5ID0geSAqIGxheWVyR2FwICsgaSAqIGl0ZW1HYXA7XHJcbiAgICAgICAgY2MudHdlZW4oYmxvY2spXHJcbiAgICAgICAgICAuZGVsYXkodG90YWxEZWxheSlcclxuICAgICAgICAgIC50byhkcm9wRHVyLCB7IHBvc2l0aW9uOiBjYy52Myhpc29YLCB0YXJnZXRZLCAwKSB9LCB7IGVhc2luZzogJ2JvdW5jZU91dCcgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDrsLDsl7Qg7IWU7ZSMIOycoO2LuCAqL1xyXG4gIHNodWZmbGVBcnJheTxUPihhcnI6IFRbXSkge1xyXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgW2FycltpXSwgYXJyW2pdXSA9IFthcnJbal0sIGFycltpXV07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Yu/3Match/Tile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f3cb0i5QNNLrR1c4wMAUw2', 'Tile');
// scripts/Yu/3Match/Tile.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Tile_1;
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
const _3MatchBoard_1 = require("./3MatchBoard");
let Tile = Tile_1 = class Tile extends cc.Component {
    constructor() {
        super(...arguments);
        this.sprite = null; // 기존 sprite 속성 복구
        this.explosionPrefab = null;
        this.colors = [
            cc.Color.RED, cc.Color.BLUE, cc.Color.GREEN, cc.Color.YELLOW, cc.Color.ORANGE
        ];
        this.row = 0;
        this.col = 0;
        this.touchStartPos = null;
    }
    // 노드가 씬에 생성되면서 초기화 단계.
    // 이 시점에 컴포넌트, 스프라이트, 이벤트 리스너 등을 등록
    onLoad() {
        // 스프라이트 컴포넌트가 없으면 추가
        if (!this.sprite) {
            this.sprite = this.node.addComponent(cc.Sprite);
        }
        // this.node.on(cc.Node.EventType.TOUCH_END, this.onTileClicked, this);
        // 드래그 감지용 이벤트 등록
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    setRandomColor() {
        let randomIndex = Math.floor(Math.random() * this.colors.length);
        this.node.color = this.colors[randomIndex];
    }
    setRandomColorExcluding(excludeColors) {
        let availableColors = this.colors.filter(color => {
            return !excludeColors.some(ex => ex.equals(color));
        });
        // 혹시 모든 색이 제외되면 그냥 랜덤으로 (안전장치)
        if (availableColors.length === 0) {
            availableColors = this.colors;
        }
        const randomIndex = Math.floor(Math.random() * availableColors.length);
        const color = availableColors[randomIndex];
        this.node.color = color;
    }
    addOutline() {
        // 기존에 있던 Graphics가 있으면 제거
        let existingGraphics = this.node.getComponent(cc.Graphics);
        if (existingGraphics) {
            this.node.removeComponent(existingGraphics);
        }
        // 새 Graphics 노드 생성
        let graphicsNode = new cc.Node();
        graphicsNode.parent = this.node;
        graphicsNode.setPosition(0, 0);
        let graphics = graphicsNode.addComponent(cc.Graphics);
        graphics.lineWidth = 5; // 테두리 두께
        graphics.strokeColor = cc.Color.BLACK; // 테두리 색상
        let size = this.node.getContentSize();
        console.log("Tile Size:", size); // 디버깅 로그
        // 테두리 그리기
        graphics.rect(-size.width / 2, -size.height / 2, size.width, size.height);
        graphics.stroke();
    }
    onTouchStart(event) {
        this.touchStartPos = event.getLocation();
        // 또는 this.touchStartPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("드래그 시작 위치:", this.touchStartPos);
    }
    onTouchEnd(event) {
        const endPos = event.getLocation();
        const delta = endPos.sub(this.touchStartPos);
        console.log("드래그 끝 위치:", endPos);
        console.log("드래그 거리:", delta);
        // 최소 거리 체크 (조금 더 유연하게, 예: 3픽셀 이상이면 처리)
        if (delta.len() < 3) {
            console.log("드래그 너무 짧아서 무시됨");
            return;
        }
        let absX = Math.abs(delta.x);
        let absY = Math.abs(delta.y);
        // 아주 작은 delta.x나 delta.y일 경우, 방향 보정
        if (absX < 1 && absY < 1) {
            console.log("움직임이 너무 작아서 무시됨");
            return;
        }
        let direction = "";
        if (absX > absY) {
            direction = delta.x > 0 ? "right" : "left";
        }
        else {
            direction = delta.y > 0 ? "up" : "down";
        }
        console.log("드래그 방향:", direction);
        const board = this.node.parent.getComponent(_3MatchBoard_1.default);
        if (!board || !board["board"]) {
            console.warn("ThreeMatchBoard를 찾을 수 없음");
            return;
        }
        let targetTile = null;
        const row = this.row;
        const col = this.col;
        switch (direction) {
            case "up":
                if (row > 0)
                    targetTile = board["board"][row - 1][col];
                break;
            case "down":
                if (row < board["boardSize"] - 1)
                    targetTile = board["board"][row + 1][col];
                break;
            case "left":
                if (col > 0)
                    targetTile = board["board"][row][col - 1];
                break;
            case "right":
                if (col < board["boardSize"] - 1)
                    targetTile = board["board"][row][col + 1];
                break;
        }
        if (targetTile) {
            console.log(`타일 교환: (${row}, ${col}) <-> (${targetTile.row}, ${targetTile.col})`);
            board.swapTiles(this, targetTile);
        }
    }
    explode() {
        console.log(`explode() 실행: (${this.row}, ${this.col})`);
        // 이펙트 생성
        if (this.explosionPrefab) {
            console.log(`폭발 이펙트 생성: (${this.row}, ${this.col})`);
            const effect = cc.instantiate(this.explosionPrefab);
            effect.parent = this.node.parent;
            effect.setPosition(this.node.getPosition());
            // 효과가 끝나면 자동 제거
            const ps = effect.getComponent(cc.ParticleSystem);
            ps && ps.resetSystem();
            this.scheduleOnce(() => {
                console.log(`폭발 이펙트 제거: (${this.row}, ${this.col})`);
                effect.destroy();
            }, 1);
        }
        // 애니메이션 + 파괴
        this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.2, 1.5).easing(cc.easeBackOut()), cc.fadeOut(0.2)), cc.callFunc(() => {
            if (Tile_1.selectedTile === this) {
                Tile_1.selectedTile = null; // 사라질 때 선택 해제
            }
            this.node.destroy();
        })));
    }
};
Tile.selectedTile = null;
__decorate([
    property(cc.Sprite) // 스프라이트 컴포넌트 연결
], Tile.prototype, "sprite", void 0);
__decorate([
    property(cc.Prefab) // 폭발 효과 프리팹 속성 추가
], Tile.prototype, "explosionPrefab", void 0);
Tile = Tile_1 = __decorate([
    ccclass
], Tile);
exports.default = Tile;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDNUMsZ0RBQTRDO0FBRTVDLElBQXFCLElBQUksWUFBekIsTUFBcUIsSUFBSyxTQUFRLEVBQUUsQ0FBQyxTQUFTO0lBQTlDOztRQUVJLFdBQU0sR0FBYyxJQUFJLENBQUMsQ0FBRSxrQkFBa0I7UUFHN0Msb0JBQWUsR0FBYyxJQUFJLENBQUM7UUFFMUIsV0FBTSxHQUFlO1lBQ3pCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUNoRixDQUFDO1FBRUssUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBRWYsa0JBQWEsR0FBWSxJQUFJLENBQUM7SUE2SzFDLENBQUM7SUExS0csdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxNQUFNO1FBQ0YscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7UUFFRCx1RUFBdUU7UUFDdkUsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJ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RyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxhQUFhO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsS0FBSyxDQUNKLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsRUFDN0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDbEIsRUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksTUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLE1BQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUUsY0FBYzthQUM1QztZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQ0wsQ0FDSixDQUFDO0lBQ04sQ0FBQztDQUtKLENBQUE7QUE1S2tCLGlCQUFZLEdBQVMsSUFBSSxDQUFDO0FBYnpDO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0I7b0NBQ1o7QUFHekI7SUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQjs2Q0FDTDtBQUxqQixJQUFJO0lBRHhCLE9BQU87R0FDYSxJQUFJLENBMkx4QjtrQkEzTG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgVGhyZWVNYXRjaEJvYXJkIGZyb20gXCIuLzNNYXRjaEJvYXJkXCI7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgLy8g7Iqk7ZSE65287J207Yq4IOy7tO2PrOuEjO2KuCDsl7DqsrBcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDsgIC8vIOq4sOyhtCBzcHJpdGUg7IaN7ISxIOuzteq1rFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIC8vIO2PreuwnCDtmqjqs7wg7ZSE66as7Yy5IOyGjeyEsSDstpTqsIBcclxuICAgIGV4cGxvc2lvblByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbG9yczogY2MuQ29sb3JbXSA9IFtcclxuICAgICAgICBjYy5Db2xvci5SRUQsIGNjLkNvbG9yLkJMVUUsIGNjLkNvbG9yLkdSRUVOLCBjYy5Db2xvci5ZRUxMT1csIGNjLkNvbG9yLk9SQU5HRVxyXG4gICAgXTtcclxuXHJcbiAgICBwdWJsaWMgcm93OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGNvbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0ZWRUaWxlOiBUaWxlID0gbnVsbDtcclxuXHJcbiAgICAvLyDrhbjrk5zqsIAg7JSs7JeQIOyDneyEseuQmOuptOyEnCDstIjquLDtmZQg64uo6rOELlxyXG4gICAgLy8g7J20IOyLnOygkOyXkCDsu7Ttj6zrhIztirgsIOyKpO2UhOudvOydtO2KuCwg7J2067Kk7Yq4IOumrOyKpOuEiCDrk7HsnYQg65Ox66GdXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g7Iqk7ZSE65287J207Yq4IOy7tO2PrOuEjO2KuOqwgCDsl4bsnLzrqbQg7LaU6rCAXHJcbiAgICAgICAgaWYgKCF0aGlzLnNwcml0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25UaWxlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgLy8g65Oc656Y6re4IOqwkOyngOyaqSDsnbTrsqTtirgg65Ox66GdXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRSYW5kb21Db2xvcigpIHtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbG9ycy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5jb2xvciA9IHRoaXMuY29sb3JzW3JhbmRvbUluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSYW5kb21Db2xvckV4Y2x1ZGluZyhleGNsdWRlQ29sb3JzOiBjYy5Db2xvcltdKSB7XHJcbiAgICAgICAgbGV0IGF2YWlsYWJsZUNvbG9ycyA9IHRoaXMuY29sb3JzLmZpbHRlcihjb2xvciA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhZXhjbHVkZUNvbG9ycy5zb21lKGV4ID0+IGV4LmVxdWFscyhjb2xvcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8g7Zi57IucIOuqqOuToCDsg4nsnbQg7KCc7Jm465CY66m0IOq3uOuDpSDrnpzrjaTsnLzroZwgKOyViOyghOyepey5mClcclxuICAgICAgICBpZiAoYXZhaWxhYmxlQ29sb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVDb2xvcnMgPSB0aGlzLmNvbG9ycztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvbG9ycy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gYXZhaWxhYmxlQ29sb3JzW3JhbmRvbUluZGV4XTtcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGFkZE91dGxpbmUoKSB7XHJcbiAgICAgICAgLy8g6riw7KG07JeQIOyeiOuNmCBHcmFwaGljc+qwgCDsnojsnLzrqbQg7KCc6rGwXHJcbiAgICAgICAgbGV0IGV4aXN0aW5nR3JhcGhpY3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdHcmFwaGljcykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ29tcG9uZW50KGV4aXN0aW5nR3JhcGhpY3MpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIOyDiCBHcmFwaGljcyDrhbjrk5wg7IOd7ISxXHJcbiAgICAgICAgbGV0IGdyYXBoaWNzTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgZ3JhcGhpY3NOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBncmFwaGljc05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICBcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBncmFwaGljc05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSA1OyAvLyDthYzrkZDrpqwg65GQ6ruYXHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5CTEFDSzsgLy8g7YWM65GQ66asIOyDieyDgVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbGUgU2l6ZTpcIiwgc2l6ZSk7IC8vIOuUlOuyhOq5hSDroZzqt7hcclxuICAgIFxyXG4gICAgICAgIC8vIO2FjOuRkOumrCDqt7jrpqzquLBcclxuICAgICAgICBncmFwaGljcy5yZWN0KC1zaXplLndpZHRoIC8gMiwgLXNpemUuaGVpZ2h0IC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgLy8g65iQ64qUIHRoaXMudG91Y2hTdGFydFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuTnOuemOq3uCDsi5zsnpEg7JyE7LmYOlwiLCB0aGlzLnRvdWNoU3RhcnRQb3MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgZW5kUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IGVuZFBvcy5zdWIodGhpcy50b3VjaFN0YXJ0UG9zKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrk5zrnpjqt7gg64GdIOychOy5mDpcIiwgZW5kUG9zKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuTnOuemOq3uCDqsbDrpqw6XCIsIGRlbHRhKTtcclxuXHJcbiAgICAgICAgLy8g7LWc7IaMIOqxsOumrCDssrTtgawgKOyhsOq4iCDrjZQg7Jyg7Jew7ZWY6rKMLCDsmIg6IDPtlL3shYAg7J207IOB7J2066m0IOyymOumrClcclxuICAgICAgICBpZiAoZGVsdGEubGVuKCkgPCAzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi65Oc656Y6re4IOuEiOustCDsp6fslYTshJwg66y07Iuc65CoXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWJzWCA9IE1hdGguYWJzKGRlbHRhLngpO1xyXG4gICAgICAgIGxldCBhYnNZID0gTWF0aC5hYnMoZGVsdGEueSk7XHJcblxyXG4gICAgICAgIC8vIOyVhOyjvCDsnpHsnYAgZGVsdGEueOuCmCBkZWx0YS557J28IOqyveyasCwg67Cp7ZalIOuztOyglVxyXG4gICAgICAgIGlmIChhYnNYIDwgMSAmJiBhYnNZIDwgMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuybgOyngeyehOydtCDrhIjrrLQg7J6R7JWE7IScIOustOyLnOuQqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGFic1ggPiBhYnNZKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRlbHRhLnggPiAwID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZGVsdGEueSA+IDAgPyBcInVwXCIgOiBcImRvd25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi65Oc656Y6re4IOuwqe2WpTpcIiwgZGlyZWN0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFRocmVlTWF0Y2hCb2FyZCk7XHJcbiAgICAgICAgaWYgKCFib2FyZCB8fCAhYm9hcmRbXCJib2FyZFwiXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaHJlZU1hdGNoQm9hcmTrpbwg7LC+7J2EIOyImCDsl4bsnYxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRUaWxlOiBUaWxlID0gbnVsbDtcclxuICAgICAgICBjb25zdCByb3cgPSB0aGlzLnJvdztcclxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAocm93ID4gMCkgdGFyZ2V0VGlsZSA9IGJvYXJkW1wiYm9hcmRcIl1bcm93IC0gMV1bY29sXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IGJvYXJkW1wiYm9hcmRTaXplXCJdIC0gMSkgdGFyZ2V0VGlsZSA9IGJvYXJkW1wiYm9hcmRcIl1bcm93ICsgMV1bY29sXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+IDApIHRhcmdldFRpbGUgPSBib2FyZFtcImJvYXJkXCJdW3Jvd11bY29sIC0gMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sIDwgYm9hcmRbXCJib2FyZFNpemVcIl0gLSAxKSB0YXJnZXRUaWxlID0gYm9hcmRbXCJib2FyZFwiXVtyb3ddW2NvbCArIDFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0VGlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg7YOA7J28IOq1kO2ZmDogKCR7cm93fSwgJHtjb2x9KSA8LT4gKCR7dGFyZ2V0VGlsZS5yb3d9LCAke3RhcmdldFRpbGUuY29sfSlgKTtcclxuICAgICAgICAgICAgYm9hcmQuc3dhcFRpbGVzKHRoaXMsIHRhcmdldFRpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBsb2RlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBleHBsb2RlKCkg7Iuk7ZaJOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgXHJcbiAgICAgICAgLy8g7J207Y6Z7Yq4IOyDneyEsVxyXG4gICAgICAgIGlmICh0aGlzLmV4cGxvc2lvblByZWZhYikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg7Y+t67CcIOydtO2Ome2KuCDsg53shLE6ICgke3RoaXMucm93fSwgJHt0aGlzLmNvbH0pYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXhwbG9zaW9uUHJlZmFiKTtcclxuICAgICAgICAgICAgZWZmZWN0LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g7Zqo6rO86rCAIOuBneuCmOuptCDsnpDrj5kg7KCc6rGwXHJcbiAgICAgICAgICAgIGNvbnN0IHBzID0gZWZmZWN0LmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgICAgIHBzICYmIHBzLnJlc2V0U3lzdGVtKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYO2PreuwnCDsnbTtjpntirgg7KCc6rGwOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8g7JWg64uI66mU7J207IWYICsg7YyM6rS0XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMS41KS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmFkZU91dCgwLjIpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUaWxlLnNlbGVjdGVkVGlsZSA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaWxlLnNlbGVjdGVkVGlsZSA9IG51bGw7ICAvLyDsgqzrnbzsp4gg65WMIOyEoO2DnSDtlbTsoJxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/LoginManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27642C/u3lNKZ4yxR6PTK/R', 'LoginManager');
// scripts/Controller/LoginManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let LoginManager = class LoginManager extends cc.Component {
    constructor() {
        super(...arguments);
        this.nicknameInput = null;
        this.dogSprite = null;
        this.tigerSprite = null;
        this.rabbitSprite = null;
        this.startButton = null;
        this.selectedCharacter = '';
    }
    onLoad() {
        this.startButton.interactable = false;
        // cc.log("LoginManager loaded");
    }
    onSelectCharacter(event, character) {
        this.selectedCharacter = character;
        // cc.log("캐릭터 선택됨:", character); 
        this.checkFormValid();
    }
    onNicknameChanged() {
        // cc.log("닉네임 입력 중:", this.nicknameInput.string);
        this.checkFormValid();
    }
    checkFormValid() {
        const isFilled = this.nicknameInput.string.trim() !== '' && this.selectedCharacter !== '';
        this.startButton.interactable = isFilled;
        // cc.log("폼 유효성 검사:", isFilled);
    }
    onClickStart() {
        return __awaiter(this, void 0, void 0, function* () {
            const nickname = this.nicknameInput.string.trim();
            const character = this.selectedCharacter;
            cc.log("Start 버튼 클릭됨 - 닉네임:", nickname, "캐릭터:", character);
            if (!nickname) {
                // cc.log("닉네임을 입력해주세요.");
                return;
            }
            if (!character) {
                // cc.log("캐릭터를 선택해주세요.");
                return;
            }
            try {
                // 1. 브라우저 고유 ID 생성 or 가져오기
                let browserId = localStorage.getItem('browserId');
                if (!browserId) {
                    browserId = this.generateBrowserId();
                    localStorage.setItem('browserId', browserId);
                    cc.log("새 브라우저 ID 생성됨:", browserId);
                }
                else {
                    cc.log("기존 브라우저 ID:", browserId);
                }
                // 2. 로그인 요청
                const loginRes = yield fetch('http://localhost:3000/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ browserId })
                });
                cc.log("로그인 응답 상태:", loginRes.status);
                if (!loginRes.ok) {
                    cc.error("로그인 실패:", yield loginRes.text());
                    return;
                }
                const loginData = yield loginRes.json();
                const jwtToken = loginData.token;
                cc.log("JWT 토큰 발급됨:", jwtToken);
                localStorage.setItem('jwtToken', jwtToken);
                // 3. 프로필 저장 요청
                const profileRes = yield fetch('http://localhost:3000/auth/set-profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwtToken}`
                    },
                    body: JSON.stringify({ nickname, character })
                });
                cc.log("프로필 저장 응답 상태:", profileRes.status);
                if (!profileRes.ok) {
                    cc.error("프로필 저장 실패:", yield profileRes.text());
                    return;
                }
                cc.log("로그인 및 프로필 저장 완료");
                // 4. 게임 시작 (씬 이동 등)
                cc.director.loadScene("MainScene");
            }
            catch (error) {
                cc.error("에러 발생:", error);
            }
        });
    }
    generateBrowserId() {
        const array = new Uint8Array(16);
        window.crypto.getRandomValues(array);
        return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
    }
};
__decorate([
    property(cc.EditBox)
], LoginManager.prototype, "nicknameInput", void 0);
__decorate([
    property(cc.Sprite)
], LoginManager.prototype, "dogSprite", void 0);
__decorate([
    property(cc.Sprite)
], LoginManager.prototype, "tigerSprite", void 0);
__decorate([
    property(cc.Sprite)
], LoginManager.prototype, "rabbitSprite", void 0);
__decorate([
    property(cc.Button)
], LoginManager.prototype, "startButton", void 0);
LoginManager = __decorate([
    ccclass
], LoginManager);
exports.default = LoginManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcTG9naW5NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRzVDLElBQXFCLFlBQVksR0FBakMsTUFBcUIsWUFBYSxTQUFRLEVBQUUsQ0FBQyxTQUFTO0lBQXREOztRQUVFLGtCQUFhLEdBQWUsSUFBSSxDQUFDO1FBR2pDLGNBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsZ0JBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsaUJBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IsZ0JBQVcsR0FBYyxJQUFJLENBQUM7UUFFdEIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO0lBcUd6QyxDQUFDO0lBbkdDLE1BQU07UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDdEMsaUNBQWlDO0lBQ25DLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFlLEVBQUUsU0FBaUI7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztRQUNuQyxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHRCxpQkFBaUI7UUFDZixrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1osTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxFQUFFLENBQUM7UUFDMUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ3pDLGlDQUFpQztJQUNuQyxDQUFDO0lBRUssWUFBWTs7WUFDaEIsTUFB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LENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUM7S0FBQTtJQUVELGlCQUFpQjtRQUNmLE1BQU0sS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNGLENBQUE7QUFqSEM7SUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzttREFDWTtBQUdqQztJQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0FBRTVCO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1U7QUFFOUI7SUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDVztBQUcvQjtJQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0FBWlgsWUFBWTtJQURoQyxPQUFPO0dBQ2EsWUFBWSxDQW1IaEM7a0JBbkhvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICBuaWNrbmFtZUlucHV0OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBkb2dTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIHRpZ2VyU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICByYWJiaXRTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgcHJpdmF0ZSBzZWxlY3RlZENoYXJhY3Rlcjogc3RyaW5nID0gJyc7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc3RhcnRCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgLy8gY2MubG9nKFwiTG9naW5NYW5hZ2VyIGxvYWRlZFwiKTtcbiAgfVxuXG4gIG9uU2VsZWN0Q2hhcmFjdGVyKGV2ZW50OiBjYy5FdmVudCwgY2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVyID0gY2hhcmFjdGVyO1xuICAgIC8vIGNjLmxvZyhcIuy6kOumre2EsCDshKDtg53rkKg6XCIsIGNoYXJhY3Rlcik7IFxuICAgIHRoaXMuY2hlY2tGb3JtVmFsaWQoKTtcbiAgfVxuICBcblxuICBvbk5pY2tuYW1lQ2hhbmdlZCgpIHtcbiAgICAvLyBjYy5sb2coXCLri4nrhKTsnoQg7J6F66ClIOykkTpcIiwgdGhpcy5uaWNrbmFtZUlucHV0LnN0cmluZyk7XG4gICAgdGhpcy5jaGVja0Zvcm1WYWxpZCgpO1xuICB9XG5cbiAgY2hlY2tGb3JtVmFsaWQoKSB7XG4gICAgY29uc3QgaXNGaWxsZWQgPSB0aGlzLm5pY2tuYW1lSW5wdXQuc3RyaW5nLnRyaW0oKSAhPT0gJycgJiYgdGhpcy5zZWxlY3RlZENoYXJhY3RlciAhPT0gJyc7XG4gICAgdGhpcy5zdGFydEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBpc0ZpbGxlZDtcbiAgICAvLyBjYy5sb2coXCLtj7wg7Jyg7Zqo7ISxIOqygOyCrDpcIiwgaXNGaWxsZWQpO1xuICB9XG5cbiAgYXN5bmMgb25DbGlja1N0YXJ0KCkge1xuICAgIGNvbnN0IG5pY2tuYW1lID0gdGhpcy5uaWNrbmFtZUlucHV0LnN0cmluZy50cmltKCk7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gdGhpcy5zZWxlY3RlZENoYXJhY3RlcjtcblxuICAgIGNjLmxvZyhcIlN0YXJ0IOuyhO2KvCDtgbTrpq3rkKggLSDri4nrhKTsnoQ6XCIsIG5pY2tuYW1lLCBcIuy6kOumre2EsDpcIiwgY2hhcmFjdGVyKTtcblxuICAgIGlmICghbmlja25hbWUpIHtcbiAgICAgIC8vIGNjLmxvZyhcIuuLieuEpOyehOydhCDsnoXroKXtlbTso7zshLjsmpQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAvLyBjYy5sb2coXCLsupDrpq3thLDrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gMS4g67iM65287Jqw7KCAIOqzoOycoCBJRCDsg53shLEgb3Ig6rCA7KC47Jik6riwXG4gICAgICBsZXQgYnJvd3NlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jyb3dzZXJJZCcpO1xuICAgICAgaWYgKCFicm93c2VySWQpIHtcbiAgICAgICAgYnJvd3NlcklkID0gdGhpcy5nZW5lcmF0ZUJyb3dzZXJJZCgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnJvd3NlcklkJywgYnJvd3NlcklkKTtcbiAgICAgICAgY2MubG9nKFwi7IOIIOu4jOudvOyasOyggCBJRCDsg53shLHrkKg6XCIsIGJyb3dzZXJJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYy5sb2coXCLquLDsobQg67iM65287Jqw7KCAIElEOlwiLCBicm93c2VySWQpO1xuICAgICAgfVxuXG4gICAgICAvLyAyLiDroZzqt7jsnbgg7JqU7LKtXG4gICAgICBjb25zdCBsb2dpblJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9sb2dpbicsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGJyb3dzZXJJZCB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNjLmxvZyhcIuuhnOq3uOyduCDsnZHri7Ug7IOB7YOcOlwiLCBsb2dpblJlcy5zdGF0dXMpO1xuICAgICAgaWYgKCFsb2dpblJlcy5vaykge1xuICAgICAgICBjYy5lcnJvcihcIuuhnOq3uOyduCDsi6TtjKg6XCIsIGF3YWl0IGxvZ2luUmVzLnRleHQoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9naW5EYXRhID0gYXdhaXQgbG9naW5SZXMuanNvbigpO1xuICAgICAgY29uc3Qgand0VG9rZW4gPSBsb2dpbkRhdGEudG9rZW47XG4gICAgICBjYy5sb2coXCJKV1Qg7Yag7YGwIOuwnOq4ieuQqDpcIiwgand0VG9rZW4pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dFRva2VuJywgand0VG9rZW4pO1xuXG4gICAgICAvLyAzLiDtlITroZztlYQg7KCA7J6lIOyalOyyrVxuICAgICAgY29uc3QgcHJvZmlsZVJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9zZXQtcHJvZmlsZScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2p3dFRva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuaWNrbmFtZSwgY2hhcmFjdGVyIH0pXG4gICAgICB9KTtcblxuICAgICAgY2MubG9nKFwi7ZSE66Gc7ZWEIOyggOyepSDsnZHri7Ug7IOB7YOcOlwiLCBwcm9maWxlUmVzLnN0YXR1cyk7XG4gICAgICBpZiAoIXByb2ZpbGVSZXMub2spIHtcbiAgICAgICAgY2MuZXJyb3IoXCLtlITroZztlYQg7KCA7J6lIOyLpO2MqDpcIiwgYXdhaXQgcHJvZmlsZVJlcy50ZXh0KCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNjLmxvZyhcIuuhnOq3uOyduCDrsI8g7ZSE66Gc7ZWEIOyggOyepSDsmYTro4xcIik7XG5cbiAgICAgIC8vIDQuIOqyjOyehCDsi5zsnpEgKOyUrCDsnbTrj5kg65OxKVxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNjLmVycm9yKFwi7JeQ65+sIOuwnOyDnTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQnJvd3NlcklkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYXJyYXkgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycmF5KS5tYXAoYiA9PiBiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Sim/RememberGame/RememberGameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'RememberGameController');
// scripts/Sim/RememberGame/RememberGameController.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let GameController = class GameController extends cc.Component {
    constructor() {
        super(...arguments);
        this.startButton = null;
        this.redButton = null;
        this.yellowButton = null;
        this.greenButton = null;
        this.blueButton = null;
        this.scoreLabel = null;
        this.statusLabel = null;
        this.hintLabel = null;
        // 타이머 표시용 레이블
        this.timerLabel = null;
        // 타임아웃 메시지용 레이블
        this.timeoutLabel = null;
        this.colorSequence = [];
        this.userInput = [];
        this.score = 0;
        this.level = 1;
        this.isGameActive = false;
        // 남은 시간(초)
        this.remainingTime = 0;
        this.buttonMap = {};
        this.colors = ["red", "yellow", "green", "blue"];
    }
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
    onStartGame() {
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
        }
        else {
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
    onColorButtonClick(color) {
        if (!this.isGameActive)
            return;
        this.userInput.push(color);
        this.checkUserInput();
    }
    // 1초마다 호출: 남은 시간 감소 및 체크
    updateTimer() {
        this.remainingTime--;
        this.timerLabel.string = `남은 시간: ${this.remainingTime}s`;
        if (this.remainingTime <= 0) {
            this.unschedule(this.tickCallback);
            this.onTimeUp();
        }
    }
    // 타이머 초기화 & 시작
    startTimer() {
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
    onTimeUp() {
        this.isGameActive = false;
        // 모든 버튼 비활성화
        this.disableButtons(true);
        this.startButton.interactable = false;
        // 타임아웃 레이블에 메시지 표시
        this.timeoutLabel.string = "TimeOut!";
        this.timeoutLabel.node.active = true;
    }
    checkUserInput() {
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
        }
        else {
            this.setStatusMessage("틀렸습니다! 다시 시도하세요.");
            this.userInput = [];
            this.startButton.node.getComponentInChildren(cc.Label).string = "다시 도전";
            this.startButton.node.active = true;
            this.isGameActive = false;
            this.disableButtons(true);
        }
    }
    generateColorSequence() {
        this.colorSequence = [];
        const length = this.level >= 5 ? 7 : this.level + 2;
        for (let i = 0; i < length; i++) {
            const idx = Math.floor(Math.random() * this.colors.length);
            this.colorSequence.push(this.colors[idx]);
        }
        this.hintLabel.string = (this.level === 3) ? "불이 깜빡이는 순서를 반대로 입력하라." : "";
        console.log("생성된 색상 순서:", this.colorSequence);
    }
    setInitialButtonState() {
        [this.redButton, this.yellowButton, this.greenButton, this.blueButton].forEach(btn => {
            btn.node.opacity = 100;
            btn.interactable = false;
        });
    }
    showColorSequence() {
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
    activateButtonForBlink(button) {
        button.interactable = true;
        cc.tween(button.node)
            .to(0.3, { opacity: 255 })
            .to(0.3, { opacity: 100 })
            .start();
        this.scheduleOnce(() => { button.interactable = false; }, 0.6);
    }
    resetButtonState() {
        [this.redButton, this.yellowButton, this.greenButton, this.blueButton].forEach(btn => {
            btn.node.opacity = 255;
            btn.interactable = true;
        });
    }
    updateScore() {
        this.scoreLabel.string = `점수: ${this.score}`;
    }
    setStatusMessage(message) {
        this.statusLabel.string = message;
    }
    disableButtons(disable) {
        this.redButton.interactable = !disable;
        this.yellowButton.interactable = !disable;
        this.greenButton.interactable = !disable;
        this.blueButton.interactable = !disable;
    }
};
__decorate([
    property(cc.Button)
], GameController.prototype, "startButton", void 0);
__decorate([
    property(cc.Button)
], GameController.prototype, "redButton", void 0);
__decorate([
    property(cc.Button)
], GameController.prototype, "yellowButton", void 0);
__decorate([
    property(cc.Button)
], GameController.prototype, "greenButton", void 0);
__decorate([
    property(cc.Button)
], GameController.prototype, "blueButton", void 0);
__decorate([
    property(cc.Label)
], GameController.prototype, "scoreLabel", void 0);
__decorate([
    property(cc.Label)
], GameController.prototype, "statusLabel", void 0);
__decorate([
    property(cc.Label)
], GameController.prototype, "hintLabel", void 0);
__decorate([
    property(cc.Label)
], GameController.prototype, "timerLabel", void 0);
__decorate([
    property(cc.Label)
], GameController.prototype, "timeoutLabel", void 0);
GameController = __decorate([
    ccclass
], GameController);
exports.default = GameController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxSZW1lbWJlckdhbWVcXFJlbWVtYmVyR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFHNUMsSUFBcUIsY0FBYyxHQUFuQyxNQUFxQixjQUFlLFNBQVEsRUFBRSxDQUFDLFNBQVM7SUFBeEQ7O1FBR0ksZ0JBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsY0FBUyxHQUFjLElBQUksQ0FBQztRQUc1QixpQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixnQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixlQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVcsR0FBYSxJQUFJLENBQUM7UUFHN0IsY0FBUyxHQUFhLElBQUksQ0FBQztRQUUzQixjQUFjO1FBRWQsZUFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixnQkFBZ0I7UUFFaEIsaUJBQVksR0FBYSxJQUFJLENBQUM7UUFFdEIsa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFdEMsV0FBVztRQUNILGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBSTFCLGNBQVMsR0FBaUMsRUFBRSxDQUFDO1FBQzdDLFdBQU0sR0FBYSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBc05sRSxDQUFDO0lBcE5HLE1BQU07UUFDRixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxRQUFRO1FBQ1IsSUFBSSxD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LENBQUMsS0FBSyxDQUFDO29EQUNXO0FBaENiLGNBQWM7SUFEbEMsT0FBTztHQUNhLGNBQWMsQ0FvUWxDO2tCQXBRb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHN0YXJ0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICByZWRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHllbGxvd0J1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgZ3JlZW5CdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJsdWVCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHN0YXR1c0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaGludExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8g7YOA7J2066i4IO2RnOyLnOyaqSDroIjsnbTruJRcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyDtg4DsnoTslYTsm4Mg66mU7Iuc7KeA7JqpIOugiOydtOu4lFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZW91dExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xvclNlcXVlbmNlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB1c2VySW5wdXQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgaXNHYW1lQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8g64Ko7J2AIOyLnOqwhCjstIgpXHJcbiAgICBwcml2YXRlIHJlbWFpbmluZ1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvLyAx7LSI66eI64ukIO2YuOy2nO2VoCDsvZzrsLEg7LC47KGwXHJcbiAgICBwcml2YXRlIHRpY2tDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwcml2YXRlIGJ1dHRvbk1hcDogeyBba2V5OiBzdHJpbmddOiBjYy5CdXR0b24gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBjb2xvcnM6IHN0cmluZ1tdID0gW1wicmVkXCIsIFwieWVsbG93XCIsIFwiZ3JlZW5cIiwgXCJibHVlXCJdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyDrsoTtirwg66e17ZWRXHJcbiAgICAgICAgdGhpcy5idXR0b25NYXAgPSB7XHJcbiAgICAgICAgICAgIHJlZDogdGhpcy5yZWRCdXR0b24sXHJcbiAgICAgICAgICAgIHllbGxvdzogdGhpcy55ZWxsb3dCdXR0b24sXHJcbiAgICAgICAgICAgIGdyZWVuOiB0aGlzLmdyZWVuQnV0dG9uLFxyXG4gICAgICAgICAgICBibHVlOiB0aGlzLmJsdWVCdXR0b25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDtgbTrpq0g7J2067Kk7Yq4IOuwlOyduOuUqVxyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uU3RhcnRHYW1lLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Db2xvckJ1dHRvbkNsaWNrKCdyZWQnKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy55ZWxsb3dCdXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29sb3JCdXR0b25DbGljaygneWVsbG93JyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ3JlZW5CdXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29sb3JCdXR0b25DbGljaygnZ3JlZW4nKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ibHVlQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbG9yQnV0dG9uQ2xpY2soJ2JsdWUnKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOy0iOq4sCDsg4Htg5wg7ISk7KCVXHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsQnV0dG9uU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8g7YOA7J2066i4L+2DgOyehOyVhOybgyDroIjsnbTruJQg7Iio6riw6riwXHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdGlja0NhbGxiYWNrIOuwlOyduOuUqVxyXG4gICAgICAgIHRoaXMudGlja0NhbGxiYWNrID0gdGhpcy51cGRhdGVUaW1lci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TdGFydEdhbWUoKSB7XHJcbiAgICAgICAgY29uc3QgYnRuTGFiZWwgPSB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgIGlmIChidG5MYWJlbCA9PT0gXCLri6Tsi5wg64+E7KCEXCIpIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIOugiOuyqCDsnqzrj4TsoIRcclxuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi7ZiE7J6sIOuLqOqzhCDri6Tsi5wg7Iuc7J6RIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5oaW50TGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBcIuqyjOyehCDsi5zsnpFcIjtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIOKYhSDsl6zquLDrp4wg67OA6rK9OiBmYWxzZSDihpIgdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25zKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOyDiCDqsozsnoQg7Iuc7J6RXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JTZXF1ZW5jZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi6rKM7J6EIOyLnOyekSFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGludExhYmVsLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9ucyh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8g7YOA7J2066i464+EIOuLpOyLnCDsi5zsnpFcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHByaXZhdGUgb25Db2xvckJ1dHRvbkNsaWNrKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lQWN0aXZlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQucHVzaChjb2xvcik7XHJcbiAgICAgICAgdGhpcy5jaGVja1VzZXJJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDHstIjrp4jri6Qg7Zi47LacOiDrgqjsnYAg7Iuc6rCEIOqwkOyGjCDrsI8g7LK07YGsXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nVGltZS0tO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBg64Ko7J2AIOyLnOqwhDogJHt0aGlzLnJlbWFpbmluZ1RpbWV9c2A7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlbWFpbmluZ1RpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aWNrQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICB0aGlzLm9uVGltZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIO2DgOydtOuouCDstIjquLDtmZQgJiDsi5zsnpFcclxuICAgIHByaXZhdGUgc3RhcnRUaW1lcigpIHtcclxuICAgICAgICAvLyDquLDsobQg7Iqk7LyA7KSEIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpY2tDYWxsYmFjayk7XHJcblxyXG4gICAgICAgIC8vIDEwMOy0iOuhnCDshLjtjIVcclxuICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUgPSAxMDA7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGDrgqjsnYAg7Iuc6rCEOiAke3RoaXMucmVtYWluaW5nVGltZX1zYDtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIO2DgOyehOyVhOybgyDrqZTsi5zsp4Ag7Iio6riw6riwXHJcbiAgICAgICAgdGhpcy50aW1lb3V0TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyAx7LSI66eI64ukIHVwZGF0ZVRpbWVyIO2YuOy2nFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aWNrQ2FsbGJhY2ssIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOyLnOqwhCDstIjqs7wg7IucIOyymOumrFxyXG4gICAgcHJpdmF0ZSBvblRpbWVVcCgpIHtcclxuICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOuqqOuToCDrsoTtirwg67mE7Zmc7ISx7ZmUXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9ucyh0cnVlKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyDtg4DsnoTslYTsm4Mg66CI7J2067iU7JeQIOuplOyLnOyngCDtkZzsi5xcclxuICAgICAgICB0aGlzLnRpbWVvdXRMYWJlbC5zdHJpbmcgPSBcIlRpbWVPdXQhXCI7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0TGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tVc2VySW5wdXQoKSB7XHJcbiAgICAgICAgbGV0IGNvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0YXJnZXRTZXF1ZW5jZSA9IHRoaXMuY29sb3JTZXF1ZW5jZTtcclxuXHJcbiAgICAgICAgLy8gM+uLqOqzhOyXlCDsl63siJwg7LK07YGsXHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDMpIHtcclxuICAgICAgICAgICAgdGFyZ2V0U2VxdWVuY2UgPSBbLi4udGhpcy5jb2xvclNlcXVlbmNlXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlcklucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbnB1dFtpXSAhPT0gdGFyZ2V0U2VxdWVuY2VbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29ycmVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VySW5wdXQubGVuZ3RoID09PSB0YXJnZXRTZXF1ZW5jZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzTWVzc2FnZShcIuygleuLtSEg64uk7J2MIOuLqOqzhOuhnCFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi7YuA66C47Iq164uI64ukISDri6Tsi5wg7Iuc64+E7ZWY7IS47JqULlwiKTtcclxuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IFwi64uk7IucIOuPhOyghFwiO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9ucyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUNvbG9yU2VxdWVuY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvclNlcXVlbmNlID0gW107XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZXZlbCA+PSA1ID8gNyA6IHRoaXMubGV2ZWwgKyAyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb2xvcnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvclNlcXVlbmNlLnB1c2godGhpcy5jb2xvcnNbaWR4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGludExhYmVsLnN0cmluZyA9ICh0aGlzLmxldmVsID09PSAzKSA/IFwi67aI7J20IOq5nOu5oeydtOuKlCDsiJzshJzrpbwg67CY64yA66GcIOyeheugpe2VmOudvC5cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsg53shLHrkJwg7IOJ7IOBIOyInOyEnDpcIiwgdGhpcy5jb2xvclNlcXVlbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEluaXRpYWxCdXR0b25TdGF0ZSgpIHtcclxuICAgICAgICBbdGhpcy5yZWRCdXR0b24sIHRoaXMueWVsbG93QnV0dG9uLCB0aGlzLmdyZWVuQnV0dG9uLCB0aGlzLmJsdWVCdXR0b25dLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgYnRuLm5vZGUub3BhY2l0eSA9IDEwMDtcclxuICAgICAgICAgICAgYnRuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0NvbG9yU2VxdWVuY2UoKSB7XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcclxuICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25zKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UuZm9yRWFjaChjb2xvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uTWFwW2NvbG9yXTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5hY3RpdmF0ZUJ1dHRvbkZvckJsaW5rKGJ0biksIGRlbGF5KTtcclxuICAgICAgICAgICAgZGVsYXkgKz0gMS4wO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c01lc3NhZ2UoXCLrsoTtirwg7Iic7ISc66W8IOunnuy2sOyjvOyEuOyalCFcIik7XHJcbiAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZhdGVCdXR0b25Gb3JCbGluayhidXR0b246IGNjLkJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKGJ1dHRvbi5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7IG9wYWNpdHk6IDEwMCB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IGJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTsgfSwgMC42KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0QnV0dG9uU3RhdGUoKSB7XHJcbiAgICAgICAgW3RoaXMucmVkQnV0dG9uLCB0aGlzLnllbGxvd0J1dHRvbiwgdGhpcy5ncmVlbkJ1dHRvbiwgdGhpcy5ibHVlQnV0dG9uXS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGDsoJDsiJg6ICR7dGhpcy5zY29yZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U3RhdHVzTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0xhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNhYmxlQnV0dG9ucyhkaXNhYmxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5yZWRCdXR0b24uaW50ZXJhY3RhYmxlICAgID0gIWRpc2FibGU7XHJcbiAgICAgICAgdGhpcy55ZWxsb3dCdXR0b24uaW50ZXJhY3RhYmxlID0gIWRpc2FibGU7XHJcbiAgICAgICAgdGhpcy5ncmVlbkJ1dHRvbi5pbnRlcmFjdGFibGUgID0gIWRpc2FibGU7XHJcbiAgICAgICAgdGhpcy5ibHVlQnV0dG9uLmludGVyYWN0YWJsZSAgID0gIWRpc2FibGU7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Yu/MoleGame/MoleGameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c60ceABgEdFG7Git8NFhaSz', 'MoleGameScene');
// scripts/Yu/MoleGame/MoleGameScene.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let GameScene = class GameScene extends cc.Component {
    constructor() {
        super(...arguments);
        // 구멍 노드 설정 (3x3 = 9개)
        this.Hole1 = null;
        this.Hole2 = null;
        this.Hole3 = null;
        this.Hole4 = null;
        this.Hole5 = null;
        this.Hole6 = null;
        this.Hole7 = null;
        this.Hole8 = null;
        this.Hole9 = null;
        // 두더지 프리팹 설정
        this.molePrefab = null;
        // 점수 및 타이머
        this.scoreLabel = null;
        this.timerLabel = null;
        // 망치 마우스 포인터 노드 설정
        this.hammerSprite = null;
        this.hammerNode = null;
        this.moleHoles = []; // 구멍을 저장할 배열
        this.score = 0; // 점수
        this.timer = 30; // 타이머 30초
        this.isGameOver = false;
    }
    // 게임 시작
    start() {
        this.hammerNode = new cc.Node("Hammer");
        const sprite = this.hammerNode.addComponent(cc.Sprite);
        sprite.spriteFrame = this.hammerSprite;
        this.hammerNode.parent = this.node;
        this.hammerNode.zIndex = 999; // 제일 위에 보이도록
        this.hammerNode.setContentSize(200, 300); // 크기 조절
        this.hammerNode.anchorX = 0.2;
        this.hammerNode.anchorY = 0.8; // 위쪽 (해머 머리 쪽 기준)
        // 구멍 노드 배열에 추가
        this.moleHoles = [
            this.Hole1, this.Hole2, this.Hole3,
            this.Hole4, this.Hole5, this.Hole6,
            this.Hole7, this.Hole8, this.Hole9
        ];
        // 게임 시작 시 타이머와 점수 초기화
        this.score = 0;
        this.timer = 30;
        this.updateScoreLabel();
        this.updateTimerLabel();
        // 타이머 감소 스케줄링
        this.schedule(this.decreaseTimer, 1);
        // 두더지 생성 시작
        this.spawnMoles();
    }
    // 타이머 감소
    decreaseTimer() {
        this.timer--;
        this.updateTimerLabel();
        if (this.timer <= 0) {
            this.gameOver();
        }
    }
    updateTimerLabel() {
        this.timerLabel.string = `시간: ${this.timer}`;
    }
    updateScoreLabel() {
        this.scoreLabel.string = `점수: ${this.score}`;
    }
    // 두더지 랜덤 생성
    spawnMoles() {
        this.schedule(() => {
            const randomHoleIndex = Math.floor(Math.random() * this.moleHoles.length);
            const selectedHole = this.moleHoles[randomHoleIndex];
            const mole = cc.instantiate(this.molePrefab);
            mole.name = "Mole";
            mole.active = true;
            selectedHole.addChild(mole);
            mole.on(cc.Node.EventType.TOUCH_END, this.onMoleClick, this);
            this.scheduleOnce(() => {
                mole.active = false;
            }, 1);
        }, 0.5, cc.macro.REPEAT_FOREVER);
    }
    onMoleClick(event) {
        const mole = event.target;
        if (!mole.active)
            return;
        this.score += 10;
        this.updateScoreLabel();
        mole.active = false;
    }
    onLoad() {
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseClick, this);
        // 기본 마우스 포인터 숨기기
        // cocos2.X 버전에선 보통 Canvas ID를 GameCanvas로 자동 할당함
        const canvas = document.getElementById('GameCanvas');
        if (canvas) {
            canvas.style.cursor = 'none'; // 기본 커서 숨김 
        }
    }
    onMouseMove(event) {
        // 마우스의 화면 좌표를 가져옴
        const location = event.getLocation();
        // 화면 좌표를 Canvas(Local) 좌표로 변환
        const localPos = cc.Canvas.instance.node.convertToNodeSpaceAR(location);
        // 망치 노드를 해당 위치로 이동
        this.hammerNode.setPosition(localPos);
    }
    onMouseClick() {
        // 클릭 시 망치 살짝 내리치는 애니메이션 (간단한 scale 애니메이션)
        this.hammerNode.stopAllActions();
        this.hammerNode.runAction(cc.sequence(cc.scaleTo(0.05, 0.9), cc.scaleTo(0.05, 1.0)));
    }
    gameOver() {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        this.unscheduleAllCallbacks(); // 모든 타이머 스케줄 정지
        this.timer = 0;
        this.updateTimerLabel();
        // 선택: 모든 두더지 비활성화
        for (const hole of this.moleHoles) {
            const mole = hole.getChildByName("Mole");
            if (mole) {
                mole.active = false;
            }
        }
        // 선택: "게임 종료!" 표시
        console.log("게임 종료!");
    }
};
__decorate([
    property(cc.Node)
], GameScene.prototype, "Hole1", void 0);
__decorate([
    property(cc.Node)
], GameScene.prototype, "Hole2", void 0);
__decorate([
    property(cc.Node)
], GameScene.prototype, "Hole3", void 0);
__decorate([
    property(cc.Node)
], GameScene.prototype, "Hole4", void 0);
__decorate([
    property(cc.Node)
], GameScene.prototype, "Hole5", void 0);
__decorate([
    property(cc.Node)
], GameScene.prototype, "Hole6", void 0);
__decorate([
    property(cc.Node)
], GameScene.prototype, "Hole7", void 0);
__decorate([
    property(cc.Node)
], GameScene.prototype, "Hole8", void 0);
__decorate([
    property(cc.Node)
], GameScene.prototype, "Hole9", void 0);
__decorate([
    property(cc.Prefab)
], GameScene.prototype, "molePrefab", void 0);
__decorate([
    property(cc.Label)
], GameScene.prototype, "scoreLabel", void 0);
__decorate([
    property(cc.Label)
], GameScene.prototype, "timerLabel", void 0);
__decorate([
    property(cc.SpriteFrame)
], GameScene.prototype, "hammerSprite", void 0);
GameScene = __decorate([
    ccclass
], GameScene);
exports.default = GameScene;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXE1vbGVHYW1lXFxNb2xlR2FtZVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRzFDLElBQXFCLFNBQVMsR0FBOUIsTUFBcUIsU0FBVSxTQUFRLEVBQUUsQ0FBQyxTQUFTO0lBQW5EOztRQUVJLHNCQUFzQjtRQUNILFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQVksSUFBSSxDQUFDO1FBRXpDLGFBQWE7UUFDUSxlQUFVLEdBQWMsSUFBSSxDQUFDO1FBRWxELFdBQVc7UUFDUyxlQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFFaEQsbUJBQW1CO1FBRW5CLGlCQUFZLEdBQW1CLElBQUksQ0FBQztRQUU1QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVMsR0FBYyxFQUFFLENBQUMsQ0FBRSxhQUFhO1FBQ3pDLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBRSxLQUFLO1FBQ3pCLFVBQUssR0FBVyxFQUFFLENBQUMsQ0FBRSxVQUFVO1FBQy9CLGVBQVUsR0FBWSxLQUFLLENBQUM7SUF3SXhDLENBQUM7SUF0SUcsUUFBUTtJQUNSLEtBQUs7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxNQUFNLE1BQU0s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O3dDQUF1QjtBQUN0QjtJQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FBdUI7QUFDdEI7SUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQXVCO0FBQ3RCO0lBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUF1QjtBQUN0QjtJQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FBdUI7QUFDdEI7SUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQXVCO0FBQ3RCO0lBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUF1QjtBQUN0QjtJQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FBdUI7QUFHcEI7SUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQThCO0FBRzlCO0lBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUE2QjtBQUM1QjtJQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FBNkI7QUFJaEQ7SUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDVztBQXRCbkIsU0FBUztJQUQ3QixPQUFPO0dBQ2EsU0FBUyxDQXFLN0I7a0JBcktvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIOq1rOupjSDrhbjrk5wg7ISk7KCVICgzeDMgPSA56rCcKVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGUxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlNTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTY6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU3OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlODogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIOuRkOuNlOyngCDtlITrpqztjLkg7ISk7KCVXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBtb2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIOygkOyImCDrsI8g7YOA7J2066i4XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIOunney5mCDrp4jsmrDsiqQg7Y+s7J247YSwIOuFuOuTnCDshKTsoJVcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGhhbW1lclNwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaGFtbWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtb2xlSG9sZXM6IGNjLk5vZGVbXSA9IFtdOyAgLy8g6rWs66mN7J2EIOyggOyepe2VoCDrsLDsl7RcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7ICAvLyDsoJDsiJhcclxuICAgIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDMwOyAgLy8g7YOA7J2066i4IDMw7LSIXHJcbiAgICBwcml2YXRlIGlzR2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyDqsozsnoQg7Iuc7J6RXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUgPSBuZXcgY2MuTm9kZShcIkhhbW1lclwiKTtcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmhhbW1lck5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5oYW1tZXJTcHJpdGU7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuekluZGV4ID0gOTk5OyAvLyDsoJzsnbwg7JyE7JeQIOuztOydtOuPhOuhnVxyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5zZXRDb250ZW50U2l6ZSgyMDAsIDMwMCk7IC8vIO2BrOq4sCDsobDsoIhcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuYW5jaG9yWCA9IDAuMjsgXHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLmFuY2hvclkgPSAwLjg7ICAgLy8g7JyE7Kq9ICjtlbTrqLgg66i466asIOyqvSDquLDspIApXHJcblxyXG5cclxuICAgICAgICAvLyDqtazrqY0g64W465OcIOuwsOyXtOyXkCDstpTqsIBcclxuICAgICAgICB0aGlzLm1vbGVIb2xlcyA9IFtcclxuICAgICAgICAgICAgdGhpcy5Ib2xlMSwgdGhpcy5Ib2xlMiwgdGhpcy5Ib2xlMyxcclxuICAgICAgICAgICAgdGhpcy5Ib2xlNCwgdGhpcy5Ib2xlNSwgdGhpcy5Ib2xlNixcclxuICAgICAgICAgICAgdGhpcy5Ib2xlNywgdGhpcy5Ib2xlOCwgdGhpcy5Ib2xlOVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIOqyjOyehCDsi5zsnpEg7IucIO2DgOydtOuouOyZgCDsoJDsiJgg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDMwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVMYWJlbCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG5cclxuICAgICAgICAvLyDtg4DsnbTrqLgg6rCQ7IaMIOyKpOy8gOykhOungVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5kZWNyZWFzZVRpbWVyLCAxKTtcclxuXHJcbiAgICAgICAgLy8g65GQ642U7KeAIOyDneyEsSDsi5zsnpFcclxuICAgICAgICB0aGlzLnNwYXduTW9sZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDtg4DsnbTrqLgg6rCQ7IaMXHJcbiAgICBkZWNyZWFzZVRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMudGltZXItLTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyTGFiZWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRpbWVyTGFiZWwoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGDsi5zqsIQ6ICR7dGhpcy50aW1lcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlTGFiZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGDsoJDsiJg6ICR7dGhpcy5zY29yZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOuRkOuNlOyngCDrnpzrjaQg7IOd7ISxXHJcbiAgICBzcGF3bk1vbGVzKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21Ib2xlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm1vbGVIb2xlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEhvbGUgPSB0aGlzLm1vbGVIb2xlc1tyYW5kb21Ib2xlSW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9sZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubW9sZVByZWZhYik7XHJcbiAgICAgICAgICAgIG1vbGUubmFtZSA9IFwiTW9sZVwiO1xyXG4gICAgICAgICAgICBtb2xlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSG9sZS5hZGRDaGlsZChtb2xlKTtcclxuXHJcbiAgICAgICAgICAgIG1vbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uTW9sZUNsaWNrLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vbGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH0sIDAuNSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgb25Nb2xlQ2xpY2soZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBjb25zdCBtb2xlID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICghbW9sZS5hY3RpdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlTGFiZWwoKTtcclxuXHJcbiAgICAgICAgbW9sZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5vbk1vdXNlTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIC8vIOq4sOuzuCDrp4jsmrDsiqQg7Y+s7J247YSwIOyIqOq4sOq4sFxyXG4gICAgICAgIC8vIGNvY29zMi5YIOuyhOyghOyXkOyEoCDrs7TthrUgQ2FudmFzIElE66W8IEdhbWVDYW52YXProZwg7J6Q64+ZIO2VoOuLue2VqFxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdHYW1lQ2FudmFzJyk7IFxyXG4gICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9ICdub25lJzsgLy8g6riw67O4IOy7pOyEnCDsiKjquYAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbk1vdXNlTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRNb3VzZSkge1xyXG4gICAgICAgIC8vIOuniOyasOyKpOydmCDtmZTrqbQg7KKM7ZGc66W8IOqwgOyguOyYtFxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgIFxyXG4gICAgICAgIC8vIO2ZlOuptCDsooztkZzrpbwgQ2FudmFzKExvY2FsKSDsooztkZzroZwg67OA7ZmYXHJcbiAgICAgICAgY29uc3QgbG9jYWxQb3MgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbik7XHJcbiAgICBcclxuICAgICAgICAvLyDrp53suZgg64W465Oc66W8IO2VtOuLuSDsnITsuZjroZwg7J2064+ZXHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlQ2xpY2soKSB7XHJcbiAgICAgICAgLy8g7YG066atIOyLnCDrp53suZgg7IK07KedIOuCtOumrOy5mOuKlCDslaDri4jrqZTsnbTshZggKOqwhOuLqO2VnCBzY2FsZSDslaDri4jrqZTsnbTshZgpXHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMDUsIDAuOSksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMDUsIDEuMClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7IC8vIOuqqOuToCDtg4DsnbTrqLgg7Iqk7LyA7KSEIOygleyngFxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgXHJcbiAgICAgICAgLy8g7ISg7YOdOiDrqqjrk6Ag65GQ642U7KeAIOu5hO2ZnOyEse2ZlFxyXG4gICAgICAgIGZvciAoY29uc3QgaG9sZSBvZiB0aGlzLm1vbGVIb2xlcykge1xyXG4gICAgICAgICAgICBjb25zdCBtb2xlID0gaG9sZS5nZXRDaGlsZEJ5TmFtZShcIk1vbGVcIik7XHJcbiAgICAgICAgICAgIGlmIChtb2xlKSB7XHJcbiAgICAgICAgICAgICAgICBtb2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8g7ISg7YOdOiBcIuqyjOyehCDsooXro4whXCIg7ZGc7IucXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLqsozsnoQg7KKF66OMIVwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/MainMenuScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41bf0ewRo5Mm5+zTEYBxk9j', 'MainMenuScene');
// scripts/Controller/MainMenuScene.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let MainMenu = class MainMenu extends cc.Component {
    constructor() {
        super(...arguments);
        this.singleButton = null;
    }
    onLoad() {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            console.warn('로그인이 필요합니다.');
            cc.director.loadScene('LoginScene'); // 로그인 씬으로 리다이렉트
            return;
        }
        console.log('인증 토큰 확인 완료. 메인 메뉴에 접근 허용');
        // 버튼 이벤트 등록
        this.singleButton.node.on('click', this.onClickSingle, this);
    }
    onClickSingle() {
        cc.log("싱글 게임 버튼 클릭됨. SingleGameList 씬으로 이동.");
        cc.director.loadScene("SingleGameList");
    }
};
__decorate([
    property(cc.Button)
], MainMenu.prototype, "singleButton", void 0);
MainMenu = __decorate([
    ccclass
], MainMenu);
exports.default = MainMenu;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcTWFpbk1lbnVTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUc1QyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxFQUFFLENBQUMsU0FBUztJQUFsRDs7UUFHSSxpQkFBWSxHQUFjLElBQUksQ0FBQztJQXFCbkMsQ0FBQztJQW5CRyxNQUFNO1FBQ0YsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFFLGdCQUFnQjtZQUN0RCxPQUFPO1NBQ1Y7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFekMsWUFBWTtRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsYUFBYTtRQUNULEVBQUUsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSixDQUFBO0FBckJHO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1c7QUFIZCxRQUFRO0lBRDVCLE9BQU87R0FDYSxRQUFRLENBd0I1QjtrQkF4Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgc2luZ2xlQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjb25zdCBqd3RUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3RUb2tlbicpO1xuICAgIFxuICAgICAgICBpZiAoIWp3dFRva2VuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0xvZ2luU2NlbmUnKTsgIC8vIOuhnOq3uOyduCDslKzsnLzroZwg66as64uk7J2066CJ7Yq4XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygn7J247KadIO2GoO2BsCDtmZXsnbgg7JmE66OMLiDrqZTsnbgg66mU64m07JeQIOygkeq3vCDtl4jsmqknKTtcblxuICAgICAgICAvLyDrsoTtirwg7J2067Kk7Yq4IOuTseuhnVxuICAgICAgICB0aGlzLnNpbmdsZUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25DbGlja1NpbmdsZSwgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIG9uQ2xpY2tTaW5nbGUoKSB7XG4gICAgICAgIGNjLmxvZyhcIuyLseq4gCDqsozsnoQg67KE7Yq8IO2BtOumreuQqC4gU2luZ2xlR2FtZUxpc3Qg7JSs7Jy866GcIOydtOuPmS5cIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNpbmdsZUdhbWVMaXN0XCIpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MainMenuManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ce4bjAkZFBSr8F4aGIbGs9', 'MainMenuManager');
// scripts/Jang/MainMenuManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameData_1 = require("./GameData"); // 글로벌 데이터를 관리하는 스크립트
const { ccclass, property } = cc._decorator;
let MainMenuManager = class MainMenuManager extends cc.Component {
    constructor() {
        super(...arguments);
        this.startGameButton = null; // 에디터에서 게임 시작 버튼 노드를 연결
    }
    start() {
        // 게임 시작 시 글로벌 레벨 데이터를 1로 초기화 (MainScene 갔다오면 항상 1레벨부터 시작)
        GameData_1.default.currentLevel = 1;
        // 게임 시작 버튼 클릭 이벤트 연결
        this.startGameButton.on('click', this.onStartGame, this);
    }
    onStartGame() {
        // MazeScene으로 씬 전환
        cc.director.loadScene("MazeScene");
    }
};
__decorate([
    property(cc.Node)
], MainMenuManager.prototype, "startGameButton", void 0);
MainMenuManager = __decorate([
    ccclass
], MainMenuManager);
exports.default = MainMenuManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWFpbk1lbnVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFFdEYseUNBQWtDLENBQUMscUJBQXFCO0FBQ3hELE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUc1QyxJQUFxQixlQUFlLEdBQXBDLE1BQXFCLGVBQWdCLFNBQVEsRUFBRSxDQUFDLFNBQVM7SUFBekQ7O1FBRUksb0JBQWUsR0FBWSxJQUFJLENBQUMsQ0FBRSx3QkFBd0I7SUFjOUQsQ0FBQztJQVpHLEtBQUs7UUFDRCwwREFBMEQ7UUFDMUQsa0JBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsV0FBVztRQUNQLG1CQUFtQjtRQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0osQ0FBQTtBQWRHO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2M7QUFGZixlQUFlO0lBRG5DLE9BQU87R0FDYSxlQUFlLENBZ0JuQztrQkFoQm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4vR2FtZURhdGFcIjsgLy8g6riA66Gc67KMIOuNsOydtO2EsOulvCDqtIDrpqztlZjripQg7Iqk7YGs66a97Yq4XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydEdhbWVCdXR0b246IGNjLk5vZGUgPSBudWxsOyAgLy8g7JeQ65SU7YSw7JeQ7IScIOqyjOyehCDsi5zsnpEg67KE7Yq8IOuFuOuTnOulvCDsl7DqsrBcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyDqsozsnoQg7Iuc7J6RIOyLnCDquIDroZzrsowg66CI67KoIOuNsOydtO2EsOulvCAx66GcIOy0iOq4sO2ZlCAoTWFpblNjZW5lIOqwlOuLpOyYpOuptCDtla3sg4EgMeugiOuyqOu2gO2EsCDsi5zsnpEpXHJcbiAgICAgICAgR2FtZURhdGEuY3VycmVudExldmVsID0gMTtcclxuXHJcbiAgICAgICAgLy8g6rKM7J6EIOyLnOyekSDrsoTtirwg7YG066atIOydtOuypO2KuCDsl7DqsrBcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5vbignY2xpY2snLCB0aGlzLm9uU3RhcnRHYW1lLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0R2FtZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBNYXplU2NlbmXsnLzroZwg7JSsIOyghO2ZmFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1hemVTY2VuZVwiKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Yu/3Match/3MatchBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76cf13tGPlGmqE1XkPp95og', '3MatchBoard');
// scripts/Yu/3Match/3MatchBoard.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
const _3MatchManager_1 = require("./3MatchManager");
const Tile_1 = require("./Tile");
let ThreeMatchBoard = class ThreeMatchBoard extends cc.Component {
    constructor() {
        super(...arguments);
        this.tilePrefab = null;
        this.gameManager = null;
        this.boardSize = 7; // 항상 8x8 고정
        this.tileSize = 100;
        this.gap = 10;
        this.board = [];
        this.isSwapping = false;
    }
    start() {
        this.node.color = cc.Color.GRAY;
        this.createBoard();
        this.scheduleOnce(() => {
            this.checkAndExplodeMatches(); // 게임 시작 후 첫 매칭 탐지
        }, 0.1);
    }
    createBoard() {
        this.board = [];
        let totalTileSize = this.tileSize + this.gap;
        let startX = -(this.boardSize - 1) * totalTileSize / 2;
        let startY = (this.boardSize - 1) * totalTileSize / 2;
        for (let row = 0; row < this.boardSize; row++) {
            this.board[row] = [];
            for (let col = 0; col < this.boardSize; col++) {
                let tileNode = cc.instantiate(this.tilePrefab);
                tileNode.parent = this.node;
                let posX = startX + col * totalTileSize;
                let posY = startY - row * totalTileSize;
                tileNode.setPosition(posX, posY);
                let tile = tileNode.getComponent(Tile_1.default);
                tile.row = row;
                tile.col = col;
                let bannedColors = [];
                if (col >= 2) {
                    let left1 = this.board[row][col - 1];
                    let left2 = this.board[row][col - 2];
                    if (left1 && left2 && left1.node.color.equals(left2.node.color)) {
                        bannedColors.push(left1.node.color);
                    }
                }
                if (row >= 2) {
                    let top1 = this.board[row - 1][col];
                    let top2 = this.board[row - 2][col];
                    if (top1 && top2 && top1.node.color.equals(top2.node.color)) {
                        bannedColors.push(top1.node.color);
                    }
                }
                tile.setRandomColorExcluding(bannedColors);
                tile.addOutline();
                this.board[row][col] = tile;
            }
        }
    }
    colorsAreEqual(c1, c2) {
        return c1.r === c2.r && c1.g === c2.g && c1.b === c2.b;
    }
    checkAndExplodeMatches() {
        let matchedTiles = [];
        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                let tile = this.board[row][col];
                if (!tile)
                    continue;
                // 가로 검사
                if (col <= this.boardSize - 3) {
                    let t1 = this.board[row][col + 1];
                    let t2 = this.board[row][col + 2];
                    if (t1 && t2 && this.colorsAreEqual(tile.node.color, t1.node.color) && this.colorsAreEqual(tile.node.color, t2.node.color)) {
                        matchedTiles.push(tile, t1, t2);
                    }
                }
                // 세로 검사
                if (row <= this.boardSize - 3) {
                    let t1 = this.board[row + 1][col];
                    let t2 = this.board[row + 2][col];
                    if (t1 && t2 && this.colorsAreEqual(tile.node.color, t1.node.color) && this.colorsAreEqual(tile.node.color, t2.node.color)) {
                        matchedTiles.push(tile, t1, t2);
                    }
                }
            }
        }
        matchedTiles = Array.from(new Set(matchedTiles));
        if (matchedTiles.length > 0) {
            if (this.gameManager) {
                this.gameManager.addMatchScore(matchedTiles.length);
            }
            for (const tile of matchedTiles) {
                tile.explode();
                this.board[tile.row][tile.col] = null;
            }
            this.scheduleOnce(() => {
                this.fillEmptySpaces();
                this.scheduleOnce(() => {
                    this.spawnNewTiles();
                    this.scheduleOnce(() => {
                        // **다시 매칭이 일어날 수 있으므로 재귀 호출**
                        this.checkAndExplodeMatches();
                    }, 0.3);
                }, 0.3);
            }, 0.3);
        }
        else {
            // 폭발된 타일이 없으면 다음 행동 없음
            this.isSwapping = false;
        }
    }
    swapTiles(tileA, tileB) {
        if (this.isSwapping)
            return;
        let rowDiff = Math.abs(tileA.row - tileB.row);
        let colDiff = Math.abs(tileA.col - tileB.col);
        if (!((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1))) {
            console.log("인접한 타일이 아닙니다! 교환 불가");
            return;
        }
        this.isSwapping = true;
        // 보드에서 교환
        const tempRow = tileA.row;
        const tempCol = tileA.col;
        this.board[tileA.row][tileA.col] = tileB;
        this.board[tileB.row][tileB.col] = tileA;
        tileA.row = tileB.row;
        tileA.col = tileB.col;
        tileB.row = tempRow;
        tileB.col = tempCol;
        const posA = this.getTilePosition(tileA.row, tileA.col);
        const posB = this.getTilePosition(tileB.row, tileB.col);
        cc.tween(tileA.node).to(0.2, { position: posA }).start();
        cc.tween(tileB.node).to(0.2, { position: posB }).call(() => {
            // 임시로 매칭 탐지
            const matchedTiles = [];
            const detectTempMatch = () => {
                for (let row = 0; row < this.boardSize; row++) {
                    for (let col = 0; col < this.boardSize; col++) {
                        const tile = this.board[row][col];
                        if (!tile)
                            continue;
                        // 가로
                        if (col <= this.boardSize - 3) {
                            const t1 = this.board[row][col + 1];
                            const t2 = this.board[row][col + 2];
                            if (t1 && t2 && this.colorsAreEqual(tile.node.color, t1.node.color) && this.colorsAreEqual(tile.node.color, t2.node.color)) {
                                return true;
                            }
                        }
                        // 세로
                        if (row <= this.boardSize - 3) {
                            const t1 = this.board[row + 1][col];
                            const t2 = this.board[row + 2][col];
                            if (t1 && t2 && this.colorsAreEqual(tile.node.color, t1.node.color) && this.colorsAreEqual(tile.node.color, t2.node.color)) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            };
            if (detectTempMatch()) {
                this.checkAndExplodeMatches(); // 매칭이 있으면 계속 진행
            }
            else {
                // 없으면 되돌리기
                // 위치, 보드 정보 다시 교환
                this.board[tileA.row][tileA.col] = tileB;
                this.board[tileB.row][tileB.col] = tileA;
                const tempRow2 = tileA.row;
                const tempCol2 = tileA.col;
                tileA.row = tileB.row;
                tileA.col = tileB.col;
                tileB.row = tempRow2;
                tileB.col = tempCol2;
                const resetPosA = this.getTilePosition(tileA.row, tileA.col);
                const resetPosB = this.getTilePosition(tileB.row, tileB.col);
                cc.tween(tileA.node).to(0.2, { position: resetPosA }).start();
                cc.tween(tileB.node).to(0.2, { position: resetPosB }).call(() => {
                    this.isSwapping = false;
                }).start();
            }
        }).start();
    }
    fillEmptySpaces() {
        for (let col = 0; col < this.boardSize; col++) {
            for (let row = this.boardSize - 1; row >= 0; row--) {
                if (!this.board[row][col]) {
                    for (let upperRow = row - 1; upperRow >= 0; upperRow--) {
                        if (this.board[upperRow][col]) {
                            const fallingTile = this.board[upperRow][col];
                            this.board[row][col] = fallingTile;
                            this.board[upperRow][col] = null;
                            fallingTile.row = row;
                            fallingTile.col = col;
                            const targetPos = this.getTilePosition(row, col);
                            cc.tween(fallingTile.node)
                                .to(0.2, { position: targetPos })
                                .start();
                            break;
                        }
                    }
                }
            }
        }
    }
    spawnNewTiles() {
        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                if (!this.board[row][col]) {
                    const tileNode = cc.instantiate(this.tilePrefab);
                    tileNode.parent = this.node;
                    const pos = this.getTilePosition(row, col);
                    tileNode.setPosition(pos);
                    const tile = tileNode.getComponent(Tile_1.default);
                    tile.row = row;
                    tile.col = col;
                    tile.setRandomColor();
                    tile.addOutline();
                    this.board[row][col] = tile;
                }
            }
        }
    }
    getTilePosition(row, col) {
        let totalTileSize = this.tileSize + this.gap;
        let startX = -(this.boardSize - 1) * totalTileSize / 2;
        let startY = (this.boardSize - 1) * totalTileSize / 2;
        let x = startX + col * totalTileSize;
        let y = startY - row * totalTileSize;
        return new cc.Vec3(x, y, 0);
    }
};
__decorate([
    property(cc.Prefab)
], ThreeMatchBoard.prototype, "tilePrefab", void 0);
__decorate([
    property(_3MatchManager_1.default)
], ThreeMatchBoard.prototype, "gameManager", void 0);
ThreeMatchBoard = __decorate([
    ccclass
], ThreeMatchBoard);
exports.default = ThreeMatchBoard;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDNUMsb0RBQWdEO0FBQ2hELGlDQUEwQjtBQUcxQixJQUFxQixlQUFlLEdBQXBDLE1BQXFCLGVBQWdCLFNBQVEsRUFBRSxDQUFDLFNBQVM7SUFBekQ7O1FBQ3lCLGVBQVUsR0FBYyxJQUFJLENBQUM7UUFDckIsZ0JBQVcsR0FBc0IsSUFBSSxDQUFDO1FBRTVELGNBQVMsR0FBVyxDQUFDLENBQUMsQ0FBRSxZQUFZO1FBQ25DLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFDdkIsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUVsQixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBWSxLQUFLLENBQUM7SUE0UXhDLENBQUM7SUExUUQsS0FBSztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFFLGtCQUFrQjtRQUN0RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBR0csV0FBVztRQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM3QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElB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IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgVGhyZWVNYXRjaE1hbmFnZXIgZnJvbSBcIi4vM01hdGNoTWFuYWdlclwiO1xyXG5pbXBvcnQgVGlsZSBmcm9tIFwiLi9UaWxlXCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZU1hdGNoQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgdGlsZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShUaHJlZU1hdGNoTWFuYWdlcikgZ2FtZU1hbmFnZXI6IFRocmVlTWF0Y2hNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgYm9hcmRTaXplOiBudW1iZXIgPSA3OyAgLy8g7ZWt7IOBIDh4OCDqs6DsoJVcclxuICAgIHByaXZhdGUgdGlsZVNpemU6IG51bWJlciA9IDEwMDtcclxuICAgIHByaXZhdGUgZ2FwOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBwdWJsaWMgYm9hcmQ6IFRpbGVbXVtdID0gW107XHJcbiAgICBwcml2YXRlIGlzU3dhcHBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbnN0YXJ0KCkge1xyXG4gICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcclxuICAgIHRoaXMuY3JlYXRlQm9hcmQoKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGVja0FuZEV4cGxvZGVNYXRjaGVzKCk7ICAvLyDqsozsnoQg7Iuc7J6RIO2bhCDssqsg66ek7LmtIO2DkOyngFxyXG4gICAgfSwgMC4xKTtcclxufVxyXG5cclxuXHJcbiAgICBjcmVhdGVCb2FyZCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gW107XHJcbiAgICAgICAgbGV0IHRvdGFsVGlsZVNpemUgPSB0aGlzLnRpbGVTaXplICsgdGhpcy5nYXA7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0odGhpcy5ib2FyZFNpemUgLSAxKSAqIHRvdGFsVGlsZVNpemUgLyAyO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAodGhpcy5ib2FyZFNpemUgLSAxKSAqIHRvdGFsVGlsZVNpemUgLyAyO1xyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmJvYXJkU2l6ZTsgcm93KyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuYm9hcmRTaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRpbGVOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWCA9IHN0YXJ0WCArIGNvbCAqIHRvdGFsVGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHN0YXJ0WSAtIHJvdyAqIHRvdGFsVGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICB0aWxlTm9kZS5zZXRQb3NpdGlvbihwb3NYLCBwb3NZKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRpbGVOb2RlLmdldENvbXBvbmVudChUaWxlKTtcclxuICAgICAgICAgICAgICAgIHRpbGUucm93ID0gcm93O1xyXG4gICAgICAgICAgICAgICAgdGlsZS5jb2wgPSBjb2w7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJhbm5lZENvbG9yczogY2MuQ29sb3JbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnQxID0gdGhpcy5ib2FyZFtyb3ddW2NvbCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0MiA9IHRoaXMuYm9hcmRbcm93XVtjb2wgLSAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGVmdDEgJiYgbGVmdDIgJiYgbGVmdDEubm9kZS5jb2xvci5lcXVhbHMobGVmdDIubm9kZS5jb2xvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVkQ29sb3JzLnB1c2gobGVmdDEubm9kZS5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvcDEgPSB0aGlzLmJvYXJkW3JvdyAtIDFdW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvcDIgPSB0aGlzLmJvYXJkW3JvdyAtIDJdW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvcDEgJiYgdG9wMiAmJiB0b3AxLm5vZGUuY29sb3IuZXF1YWxzKHRvcDIubm9kZS5jb2xvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVkQ29sb3JzLnB1c2godG9wMS5ub2RlLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGlsZS5zZXRSYW5kb21Db2xvckV4Y2x1ZGluZyhiYW5uZWRDb2xvcnMpO1xyXG4gICAgICAgICAgICAgICAgdGlsZS5hZGRPdXRsaW5lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSB0aWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29sb3JzQXJlRXF1YWwoYzE6IGNjLkNvbG9yLCBjMjogY2MuQ29sb3IpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gYzEuciA9PT0gYzIuciAmJiBjMS5nID09PSBjMi5nICYmIGMxLmIgPT09IGMyLmI7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tBbmRFeHBsb2RlTWF0Y2hlcygpIHtcclxuICAgICAgICBsZXQgbWF0Y2hlZFRpbGVzOiBUaWxlW10gPSBbXTtcclxuICAgIFxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuYm9hcmRTaXplOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmJvYXJkU2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGUpIGNvbnRpbnVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyDqsIDroZwg6rKA7IKsXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sIDw9IHRoaXMuYm9hcmRTaXplIC0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0MSA9IHRoaXMuYm9hcmRbcm93XVtjb2wgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdDIgPSB0aGlzLmJvYXJkW3Jvd11bY29sICsgMl07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAodDEgJiYgdDIgJiYgdGhpcy5jb2xvcnNBcmVFcXVhbCh0aWxlLm5vZGUuY29sb3IsIHQxLm5vZGUuY29sb3IpICYmIHRoaXMuY29sb3JzQXJlRXF1YWwodGlsZS5ub2RlLmNvbG9yLCB0Mi5ub2RlLmNvbG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkVGlsZXMucHVzaCh0aWxlLCB0MSwgdDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g7IS466GcIOqygOyCrFxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8PSB0aGlzLmJvYXJkU2l6ZSAtIDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdDEgPSB0aGlzLmJvYXJkW3JvdyArIDFdW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHQyID0gdGhpcy5ib2FyZFtyb3cgKyAyXVtjb2xdO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQxICYmIHQyICYmIHRoaXMuY29sb3JzQXJlRXF1YWwodGlsZS5ub2RlLmNvbG9yLCB0MS5ub2RlLmNvbG9yKSAmJiB0aGlzLmNvbG9yc0FyZUVxdWFsKHRpbGUubm9kZS5jb2xvciwgdDIubm9kZS5jb2xvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFRpbGVzLnB1c2godGlsZSwgdDEsIHQyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBtYXRjaGVkVGlsZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQobWF0Y2hlZFRpbGVzKSk7XHJcbiAgICBcclxuICAgICAgICBpZiAobWF0Y2hlZFRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuYWRkTWF0Y2hTY29yZShtYXRjaGVkVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgbWF0Y2hlZFRpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmV4cGxvZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbdGlsZS5yb3ddW3RpbGUuY29sXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxFbXB0eVNwYWNlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25OZXdUaWxlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKirri6Tsi5wg66ek7Lmt7J20IOydvOyWtOuCoCDsiJgg7J6I7Jy866+A66GcIOyerOq3gCDtmLjstpwqKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQW5kRXhwbG9kZU1hdGNoZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDtj63rsJzrkJwg7YOA7J287J20IOyXhuycvOuptCDri6TsnYwg7ZaJ64+ZIOyXhuydjFxyXG4gICAgICAgICAgICB0aGlzLmlzU3dhcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBzd2FwVGlsZXModGlsZUE6IFRpbGUsIHRpbGVCOiBUaWxlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTd2FwcGluZykgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHJvd0RpZmYgPSBNYXRoLmFicyh0aWxlQS5yb3cgLSB0aWxlQi5yb3cpO1xyXG4gICAgICAgIGxldCBjb2xEaWZmID0gTWF0aC5hYnModGlsZUEuY29sIC0gdGlsZUIuY29sKTtcclxuICAgIFxyXG4gICAgICAgIGlmICghKChyb3dEaWZmID09PSAxICYmIGNvbERpZmYgPT09IDApIHx8IChyb3dEaWZmID09PSAwICYmIGNvbERpZmYgPT09IDEpKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuyduOygke2VnCDtg4DsnbzsnbQg7JWE64uZ64uI64ukISDqtZDtmZgg67aI6rCAXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5pc1N3YXBwaW5nID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgICAgIC8vIOuztOuTnOyXkOyEnCDqtZDtmZhcclxuICAgICAgICBjb25zdCB0ZW1wUm93ID0gdGlsZUEucm93O1xyXG4gICAgICAgIGNvbnN0IHRlbXBDb2wgPSB0aWxlQS5jb2w7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmJvYXJkW3RpbGVBLnJvd11bdGlsZUEuY29sXSA9IHRpbGVCO1xyXG4gICAgICAgIHRoaXMuYm9hcmRbdGlsZUIucm93XVt0aWxlQi5jb2xdID0gdGlsZUE7XHJcbiAgICBcclxuICAgICAgICB0aWxlQS5yb3cgPSB0aWxlQi5yb3c7XHJcbiAgICAgICAgdGlsZUEuY29sID0gdGlsZUIuY29sO1xyXG4gICAgICAgIHRpbGVCLnJvdyA9IHRlbXBSb3c7XHJcbiAgICAgICAgdGlsZUIuY29sID0gdGVtcENvbDtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHBvc0EgPSB0aGlzLmdldFRpbGVQb3NpdGlvbih0aWxlQS5yb3csIHRpbGVBLmNvbCk7XHJcbiAgICAgICAgY29uc3QgcG9zQiA9IHRoaXMuZ2V0VGlsZVBvc2l0aW9uKHRpbGVCLnJvdywgdGlsZUIuY29sKTtcclxuICAgIFxyXG4gICAgICAgIGNjLnR3ZWVuKHRpbGVBLm5vZGUpLnRvKDAuMiwgeyBwb3NpdGlvbjogcG9zQSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRpbGVCLm5vZGUpLnRvKDAuMiwgeyBwb3NpdGlvbjogcG9zQiB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8g7J6E7Iuc66GcIOunpOy5rSDtg5Dsp4BcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZFRpbGVzOiBUaWxlW10gPSBbXTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkZXRlY3RUZW1wTWF0Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmJvYXJkU2l6ZTsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmJvYXJkU2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRpbGUpIGNvbnRpbnVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOqwgOuhnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDw9IHRoaXMuYm9hcmRTaXplIC0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdDEgPSB0aGlzLmJvYXJkW3Jvd11bY29sICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0MiA9IHRoaXMuYm9hcmRbcm93XVtjb2wgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0MSAmJiB0MiAmJiB0aGlzLmNvbG9yc0FyZUVxdWFsKHRpbGUubm9kZS5jb2xvciwgdDEubm9kZS5jb2xvcikgJiYgdGhpcy5jb2xvcnNBcmVFcXVhbCh0aWxlLm5vZGUuY29sb3IsIHQyLm5vZGUuY29sb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDshLjroZxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyA8PSB0aGlzLmJvYXJkU2l6ZSAtIDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQxID0gdGhpcy5ib2FyZFtyb3cgKyAxXVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdDIgPSB0aGlzLmJvYXJkW3JvdyArIDJdW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodDEgJiYgdDIgJiYgdGhpcy5jb2xvcnNBcmVFcXVhbCh0aWxlLm5vZGUuY29sb3IsIHQxLm5vZGUuY29sb3IpICYmIHRoaXMuY29sb3JzQXJlRXF1YWwodGlsZS5ub2RlLmNvbG9yLCB0Mi5ub2RlLmNvbG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChkZXRlY3RUZW1wTWF0Y2goKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FuZEV4cGxvZGVNYXRjaGVzKCk7ICAvLyDrp6Tsua3snbQg7J6I7Jy866m0IOqzhOyGjSDsp4TtlolcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOyXhuycvOuptCDrkJjrj4zrpqzquLBcclxuICAgICAgICAgICAgICAgIC8vIOychOy5mCwg67O065OcIOygleuztCDri6Tsi5wg6rWQ7ZmYXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3RpbGVBLnJvd11bdGlsZUEuY29sXSA9IHRpbGVCO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt0aWxlQi5yb3ddW3RpbGVCLmNvbF0gPSB0aWxlQTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcFJvdzIgPSB0aWxlQS5yb3c7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wQ29sMiA9IHRpbGVBLmNvbDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGlsZUEucm93ID0gdGlsZUIucm93O1xyXG4gICAgICAgICAgICAgICAgdGlsZUEuY29sID0gdGlsZUIuY29sO1xyXG4gICAgICAgICAgICAgICAgdGlsZUIucm93ID0gdGVtcFJvdzI7XHJcbiAgICAgICAgICAgICAgICB0aWxlQi5jb2wgPSB0ZW1wQ29sMjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzZXRQb3NBID0gdGhpcy5nZXRUaWxlUG9zaXRpb24odGlsZUEucm93LCB0aWxlQS5jb2wpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzZXRQb3NCID0gdGhpcy5nZXRUaWxlUG9zaXRpb24odGlsZUIucm93LCB0aWxlQi5jb2wpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aWxlQS5ub2RlKS50bygwLjIsIHsgcG9zaXRpb246IHJlc2V0UG9zQSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGlsZUIubm9kZSkudG8oMC4yLCB7IHBvc2l0aW9uOiByZXNldFBvc0IgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N3YXBwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGZpbGxFbXB0eVNwYWNlcygpIHtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmJvYXJkU2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gdGhpcy5ib2FyZFNpemUgLSAxOyByb3cgPj0gMDsgcm93LS0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtyb3ddW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1cHBlclJvdyA9IHJvdyAtIDE7IHVwcGVyUm93ID49IDA7IHVwcGVyUm93LS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbdXBwZXJSb3ddW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxpbmdUaWxlID0gdGhpcy5ib2FyZFt1cHBlclJvd11bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gZmFsbGluZ1RpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3VwcGVyUm93XVtjb2xdID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxsaW5nVGlsZS5yb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxsaW5nVGlsZS5jb2wgPSBjb2w7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy5nZXRUaWxlUG9zaXRpb24ocm93LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZmFsbGluZ1RpbGUubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduTmV3VGlsZXMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ib2FyZFNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuYm9hcmRTaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW3Jvd11bY29sXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0VGlsZVBvc2l0aW9uKHJvdywgY29sKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZU5vZGUuZ2V0Q29tcG9uZW50KFRpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUucm93ID0gcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY29sID0gY29sO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aWxlLnNldFJhbmRvbUNvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRPdXRsaW5lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gdGlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlUG9zaXRpb24ocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogY2MuVmVjMyB7XHJcbiAgICAgICAgbGV0IHRvdGFsVGlsZVNpemUgPSB0aGlzLnRpbGVTaXplICsgdGhpcy5nYXA7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0odGhpcy5ib2FyZFNpemUgLSAxKSAqIHRvdGFsVGlsZVNpemUgLyAyO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAodGhpcy5ib2FyZFNpemUgLSAxKSAqIHRvdGFsVGlsZVNpemUgLyAyO1xyXG5cclxuICAgICAgICBsZXQgeCA9IHN0YXJ0WCArIGNvbCAqIHRvdGFsVGlsZVNpemU7XHJcbiAgICAgICAgbGV0IHkgPSBzdGFydFkgLSByb3cgKiB0b3RhbFRpbGVTaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzMoeCwgeSwgMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeGameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f092SlID9Pt5Qa8xNU9wGe', 'MazeGameManager');
// scripts/Jang/MazeGameManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const MazeLogic_1 = require("./MazeLogic");
const MazePlayer_1 = require("./MazePlayer");
const GameData_1 = require("./GameData");
const { ccclass, property } = cc._decorator;
let MazeGameManager = class MazeGameManager extends cc.Component {
    constructor() {
        super(...arguments);
        this.mazeContainer = null;
        this.player = null;
        this.nextLevelButton = null;
        this.backButton = null;
        this.timerLabel = null;
        this.levelLabel = null;
        this.goal = null;
        // 에디터에서 연결할 Goal 스프라이트 프레임
        this.goalFrame = null;
        // 타일맵용 에셋
        this.tilePrefab = null;
        this.pathFrame = null;
        this.grassFrame = null;
        this.cellSize = 50;
        this.cols = 15;
        this.rows = 15;
        this.mazeLogic = null;
        this.timeRemaining = 60;
        this.gameOver = false;
        this.goalReached = false;
        this.currentLevel = 1;
        this.playerComp = null;
    }
    onLoad() {
        this.nextLevelButton.on("click", this.onNextLevelButtonClick, this);
        this.backButton.on("click", this.onBackButtonClick, this);
    }
    start() {
        this.currentLevel = GameData_1.default.currentLevel;
        this.levelLabel.string = `Level: ${this.currentLevel}`;
        this.nextLevelButton.active = false;
        this.playerComp = this.player.getComponent(MazePlayer_1.default);
        if (this.playerComp)
            this.playerComp.gameManager = this;
        this.startLevel(this.currentLevel);
    }
    getMazeLogic() {
        return this.mazeLogic;
    }
    startLevel(level) {
        // cols/rows: 1~7레벨 9→21, 그 이후 21로 고정
        const size = Math.min(9 + (level - 1) * 2, 21);
        this.cols = size;
        this.rows = size;
        // cellSize 고정
        this.cellSize = 50;
        // MazeLogic 세팅
        this.mazeLogic = new MazeLogic_1.default(this.rows, this.cols, this.mazeContainer);
        this.mazeLogic.cellSize = this.cellSize;
        this.mazeLogic.tilePrefab = this.tilePrefab;
        this.mazeLogic.pathFrame = this.pathFrame;
        this.mazeLogic.grassFrame = this.grassFrame;
        this.mazeLogic.generateMaze(level);
        this.mazeLogic.renderMaze();
        // 중앙 정렬
        const w = this.cols * this.cellSize;
        const h = this.rows * this.cellSize;
        const baseX = (1080 - w) / 2;
        const baseY = (1920 - h) / 2;
        this.mazeContainer.setPosition(baseX, baseY);
        // 플레이어 배치
        const start = this.mazeLogic.getStartPosition();
        this.player.setPosition(cc.v2(baseX + start.x * this.cellSize + this.cellSize / 2, baseY + start.y * this.cellSize + this.cellSize / 2));
        if (this.playerComp)
            this.playerComp.currentGridPos = cc.v2(start.x, start.y);
        // UI 초기화
        this.timeRemaining = 60;
        this.updateTimerLabel();
        this.gameOver = false;
        this.goalReached = false;
        this.nextLevelButton.active = false;
        this.levelLabel.string = `Level: ${level}`;
        // Goal(바나나) 자동 스케일 & 배치
        if (this.goal && this.goalFrame) {
            // 스프라이트 컴포넌트 확보
            const sp = this.goal.getComponent(cc.Sprite) || this.goal.addComponent(cc.Sprite);
            sp.spriteFrame = this.goalFrame;
            sp.type = cc.Sprite.Type.SIMPLE;
            sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            // 원본 프레임 크기 가져오기
            const rect = this.goalFrame.getRect();
            const origW = rect.width;
            const targetSize = this.cellSize * 0.8;
            // 스케일 계산 & 적용
            const scale = targetSize / origW;
            this.goal.setScale(scale);
            // 위치 계산 후 배치
            const goalGrid = this.mazeLogic.getGoalPosition();
            this.goal.setPosition(cc.v2(baseX + goalGrid.x * this.cellSize + this.cellSize / 2, baseY + goalGrid.y * this.cellSize + this.cellSize / 2));
            this.goal.zIndex = 500;
        }
    }
    update(dt) {
        if (this.gameOver)
            return;
        this.timeRemaining -= dt;
        if (this.timeRemaining <= 0) {
            this.timeRemaining = 0;
            this.updateTimerLabel();
            this.onGameOver();
            return;
        }
        this.updateTimerLabel();
        if (!this.goalReached) {
            const goalGrid = this.mazeLogic.getGoalPosition();
            const w = this.cols * this.cellSize;
            const h = this.rows * this.cellSize;
            const baseX = (1080 - w) / 2;
            const baseY = (1920 - h) / 2;
            const goalPos = cc.v2(baseX + goalGrid.x * this.cellSize + this.cellSize / 2, baseY + goalGrid.y * this.cellSize + this.cellSize / 2);
            if (this.player.getPosition().sub(goalPos).mag() < this.cellSize * 0.4) {
                this.goalReached = true;
                this.onMazeCleared();
            }
        }
    }
    updateTimerLabel() {
        this.timerLabel.string = `Time: ${Math.ceil(this.timeRemaining)}s`;
    }
    onMazeCleared() {
        this.nextLevelButton.active = true;
    }
    onNextLevelButtonClick() {
        this.nextLevelButton.active = false;
        this.currentLevel++;
        GameData_1.default.currentLevel = this.currentLevel;
        this.startLevel(this.currentLevel);
    }
    onGameOver() {
        this.gameOver = true;
        cc.director.loadScene("GameOverScene");
    }
    onBackButtonClick() {
        GameData_1.default.currentLevel = 1;
        cc.director.loadScene("MainScene");
    }
};
__decorate([
    property(cc.Node)
], MazeGameManager.prototype, "mazeContainer", void 0);
__decorate([
    property(cc.Node)
], MazeGameManager.prototype, "player", void 0);
__decorate([
    property(cc.Node)
], MazeGameManager.prototype, "nextLevelButton", void 0);
__decorate([
    property(cc.Node)
], MazeGameManager.prototype, "backButton", void 0);
__decorate([
    property(cc.Label)
], MazeGameManager.prototype, "timerLabel", void 0);
__decorate([
    property(cc.Label)
], MazeGameManager.prototype, "levelLabel", void 0);
__decorate([
    property(cc.Node)
], MazeGameManager.prototype, "goal", void 0);
__decorate([
    property(cc.SpriteFrame)
], MazeGameManager.prototype, "goalFrame", void 0);
__decorate([
    property(cc.Prefab)
], MazeGameManager.prototype, "tilePrefab", void 0);
__decorate([
    property(cc.SpriteFrame)
], MazeGameManager.prototype, "pathFrame", void 0);
__decorate([
    property(cc.SpriteFrame)
], MazeGameManager.prototype, "grassFrame", void 0);
MazeGameManager = __decorate([
    ccclass
], MazeGameManager);
exports.default = MazeGameManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZUdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9DO0FBQ3BDLDZDQUFzQztBQUN0Qyx5Q0FBa0M7QUFFbEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRzVDLElBQXFCLGVBQWUsR0FBcEMsTUFBcUIsZUFBZ0IsU0FBUSxFQUFFLENBQUMsU0FBUztJQUF6RDs7UUFDMkIsa0JBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLFdBQU0sR0FBd0IsSUFBSSxDQUFDO1FBQ25DLG9CQUFlLEdBQWUsSUFBSSxDQUFDO1FBQ25DLGVBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQ25DLGVBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQ25DLGVBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQ25DLFNBQUksR0FBMEIsSUFBSSxDQUFDO1FBRTVELDJCQUEyQjtRQUNELGNBQVMsR0FBcUIsSUFBSSxDQUFDO1FBRTdELFVBQVU7UUFDZ0IsZUFBVSxHQUFtQixJQUFJLENBQUM7UUFDbEMsY0FBUyxHQUFxQixJQUFJLENBQUM7UUFDbkMsZUFBVSxHQUFvQixJQUFJLENBQUM7UUFFdEQsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFFckIsY0FBUyxHQUFpQixJQUFJLENBQUM7UUFDL0Isa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFrQixLQUFLLENBQUM7UUFDaEMsZ0JBQVcsR0FBZSxLQUFLLENBQUM7UUFDaEMsaUJBQVksR0FBYyxDQUFDLENBQUM7UUFDNUIsZUFBVSxHQUFnQixJQUFJLENBQUM7SUFtSnpDLENBQUM7SUFqSkMsTUFBTTtRQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLE9BQU8s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RSxDQUFDLFdBQVcsQ0FBQzttREFBb0M7QUFmMUMsZUFBZTtJQURuQyxPQUFPO0dBQ2EsZUFBZSxDQTZLbkM7a0JBN0tvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hemVMb2dpYyBmcm9tIFwiLi9NYXplTG9naWNcIjtcclxuaW1wb3J0IE1hemVQbGF5ZXIgZnJvbSBcIi4vTWF6ZVBsYXllclwiO1xyXG5pbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4vR2FtZURhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXplR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBtYXplQ29udGFpbmVyOiBjYy5Ob2RlICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBwbGF5ZXI6IGNjLk5vZGUgICAgICAgICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBuZXh0TGV2ZWxCdXR0b246IGNjLk5vZGUgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlICAgICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbCkgICAgICB0aW1lckxhYmVsOiBjYy5MYWJlbCAgICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbCkgICAgICBsZXZlbExhYmVsOiBjYy5MYWJlbCAgICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBnb2FsOiBjYy5Ob2RlICAgICAgICAgICAgICAgPSBudWxsO1xyXG5cclxuICAvLyDsl5DrlJTthLDsl5DshJwg7Jew6rKw7ZWgIEdvYWwg7Iqk7ZSE65287J207Yq4IO2UhOugiOyehFxyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgZ29hbEZyYW1lOiBjYy5TcHJpdGVGcmFtZSAgID0gbnVsbDtcclxuXHJcbiAgLy8g7YOA7J2866e17JqpIOyXkOyFi1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpICAgICAgdGlsZVByZWZhYjogY2MuUHJlZmFiICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgcGF0aEZyYW1lOiBjYy5TcHJpdGVGcmFtZSAgID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIGdyYXNzRnJhbWU6IGNjLlNwcml0ZUZyYW1lICA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBjZWxsU2l6ZTogbnVtYmVyID0gNTA7XHJcbiAgcHVibGljIGNvbHM6IG51bWJlciAgICAgPSAxNTtcclxuICBwdWJsaWMgcm93czogbnVtYmVyICAgICA9IDE1O1xyXG5cclxuICBwcml2YXRlIG1hemVMb2dpYzogTWF6ZUxvZ2ljICAgID0gbnVsbDtcclxuICBwcml2YXRlIHRpbWVSZW1haW5pbmc6IG51bWJlciAgID0gNjA7XHJcbiAgcHVibGljICBnYW1lT3ZlcjogYm9vbGVhbiAgICAgICA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZ29hbFJlYWNoZWQ6IGJvb2xlYW4gICAgPSBmYWxzZTtcclxuICBwcml2YXRlIGN1cnJlbnRMZXZlbDogbnVtYmVyICAgID0gMTtcclxuICBwcml2YXRlIHBsYXllckNvbXA6IE1hemVQbGF5ZXIgID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5uZXh0TGV2ZWxCdXR0b24ub24oXCJjbGlja1wiLCB0aGlzLm9uTmV4dExldmVsQnV0dG9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgdGhpcy5iYWNrQnV0dG9uLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkJhY2tCdXR0b25DbGljaywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuY3VycmVudExldmVsID0gR2FtZURhdGEuY3VycmVudExldmVsO1xyXG4gICAgdGhpcy5sZXZlbExhYmVsLnN0cmluZyA9IGBMZXZlbDogJHt0aGlzLmN1cnJlbnRMZXZlbH1gO1xyXG4gICAgdGhpcy5uZXh0TGV2ZWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJDb21wID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KE1hemVQbGF5ZXIpO1xyXG4gICAgaWYgKHRoaXMucGxheWVyQ29tcCkgdGhpcy5wbGF5ZXJDb21wLmdhbWVNYW5hZ2VyID0gdGhpcztcclxuXHJcbiAgICB0aGlzLnN0YXJ0TGV2ZWwodGhpcy5jdXJyZW50TGV2ZWwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE1hemVMb2dpYygpOiBNYXplTG9naWMge1xyXG4gICAgcmV0dXJuIHRoaXMubWF6ZUxvZ2ljO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0TGV2ZWwobGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gY29scy9yb3dzOiAxfjfroIjrsqggOeKGkjIxLCDqt7gg7J207ZuEIDIx66GcIOqzoOyglVxyXG4gICAgY29uc3Qgc2l6ZSA9IE1hdGgubWluKDkgKyAobGV2ZWwgLSAxKSAqIDIsIDIxKTtcclxuICAgIHRoaXMuY29scyA9IHNpemU7XHJcbiAgICB0aGlzLnJvd3MgPSBzaXplO1xyXG5cclxuICAgIC8vIGNlbGxTaXplIOqzoOyglVxyXG4gICAgdGhpcy5jZWxsU2l6ZSA9IDUwO1xyXG5cclxuICAgIC8vIE1hemVMb2dpYyDshLjtjIVcclxuICAgIHRoaXMubWF6ZUxvZ2ljID0gbmV3IE1hemVMb2dpYyh0aGlzLnJvd3MsIHRoaXMuY29scywgdGhpcy5tYXplQ29udGFpbmVyKTtcclxuICAgIHRoaXMubWF6ZUxvZ2ljLmNlbGxTaXplICAgPSB0aGlzLmNlbGxTaXplO1xyXG4gICAgdGhpcy5tYXplTG9naWMudGlsZVByZWZhYiA9IHRoaXMudGlsZVByZWZhYjtcclxuICAgIHRoaXMubWF6ZUxvZ2ljLnBhdGhGcmFtZSAgPSB0aGlzLnBhdGhGcmFtZTtcclxuICAgIHRoaXMubWF6ZUxvZ2ljLmdyYXNzRnJhbWUgPSB0aGlzLmdyYXNzRnJhbWU7XHJcbiAgICB0aGlzLm1hemVMb2dpYy5nZW5lcmF0ZU1hemUobGV2ZWwpO1xyXG4gICAgdGhpcy5tYXplTG9naWMucmVuZGVyTWF6ZSgpO1xyXG5cclxuICAgIC8vIOykkeyVmSDsoJXroKxcclxuICAgIGNvbnN0IHcgPSB0aGlzLmNvbHMgKiB0aGlzLmNlbGxTaXplO1xyXG4gICAgY29uc3QgaCA9IHRoaXMucm93cyAqIHRoaXMuY2VsbFNpemU7XHJcbiAgICBjb25zdCBiYXNlWCA9ICgxMDgwIC0gdykgLyAyO1xyXG4gICAgY29uc3QgYmFzZVkgPSAoMTkyMCAtIGgpIC8gMjtcclxuICAgIHRoaXMubWF6ZUNvbnRhaW5lci5zZXRQb3NpdGlvbihiYXNlWCwgYmFzZVkpO1xyXG5cclxuICAgIC8vIO2UjOugiOydtOyWtCDrsLDsuZhcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5tYXplTG9naWMuZ2V0U3RhcnRQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc2V0UG9zaXRpb24oXHJcbiAgICAgIGNjLnYyKFxyXG4gICAgICAgIGJhc2VYICsgc3RhcnQueCAqIHRoaXMuY2VsbFNpemUgKyB0aGlzLmNlbGxTaXplIC8gMixcclxuICAgICAgICBiYXNlWSArIHN0YXJ0LnkgKiB0aGlzLmNlbGxTaXplICsgdGhpcy5jZWxsU2l6ZSAvIDJcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLnBsYXllckNvbXApIHRoaXMucGxheWVyQ29tcC5jdXJyZW50R3JpZFBvcyA9IGNjLnYyKHN0YXJ0LngsIHN0YXJ0LnkpO1xyXG5cclxuICAgIC8vIFVJIOy0iOq4sO2ZlFxyXG4gICAgdGhpcy50aW1lUmVtYWluaW5nID0gNjA7XHJcbiAgICB0aGlzLnVwZGF0ZVRpbWVyTGFiZWwoKTtcclxuICAgIHRoaXMuZ2FtZU92ZXIgICAgPSBmYWxzZTtcclxuICAgIHRoaXMuZ29hbFJlYWNoZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubmV4dExldmVsQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5sZXZlbExhYmVsLnN0cmluZyAgICAgID0gYExldmVsOiAke2xldmVsfWA7XHJcblxyXG4gICAgLy8gR29hbCjrsJTrgpjrgpgpIOyekOuPmSDsiqTsvIDsnbwgJiDrsLDsuZhcclxuICAgIGlmICh0aGlzLmdvYWwgJiYgdGhpcy5nb2FsRnJhbWUpIHtcclxuICAgICAgLy8g7Iqk7ZSE65287J207Yq4IOy7tO2PrOuEjO2KuCDtmZXrs7RcclxuICAgICAgY29uc3Qgc3AgPSB0aGlzLmdvYWwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgfHwgdGhpcy5nb2FsLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICBzcC5zcHJpdGVGcmFtZSA9IHRoaXMuZ29hbEZyYW1lO1xyXG4gICAgICBzcC50eXBlICAgICAgPSBjYy5TcHJpdGUuVHlwZS5TSU1QTEU7XHJcbiAgICAgIHNwLnNpemVNb2RlICA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcblxyXG4gICAgICAvLyDsm5Drs7gg7ZSE66CI7J6EIO2BrOq4sCDqsIDsoLjsmKTquLBcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ29hbEZyYW1lLmdldFJlY3QoKTtcclxuICAgICAgY29uc3Qgb3JpZ1cgPSByZWN0LndpZHRoO1xyXG4gICAgICBjb25zdCB0YXJnZXRTaXplID0gdGhpcy5jZWxsU2l6ZSAqIDAuODtcclxuXHJcbiAgICAgIC8vIOyKpOy8gOydvCDqs4TsgrAgJiDsoIHsmqlcclxuICAgICAgY29uc3Qgc2NhbGUgPSB0YXJnZXRTaXplIC8gb3JpZ1c7XHJcbiAgICAgIHRoaXMuZ29hbC5zZXRTY2FsZShzY2FsZSk7XHJcblxyXG4gICAgICAvLyDsnITsuZgg6rOE7IKwIO2bhCDrsLDsuZhcclxuICAgICAgY29uc3QgZ29hbEdyaWQgPSB0aGlzLm1hemVMb2dpYy5nZXRHb2FsUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5nb2FsLnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGNjLnYyKFxyXG4gICAgICAgICAgYmFzZVggKyBnb2FsR3JpZC54ICogdGhpcy5jZWxsU2l6ZSArIHRoaXMuY2VsbFNpemUgLyAyLFxyXG4gICAgICAgICAgYmFzZVkgKyBnb2FsR3JpZC55ICogdGhpcy5jZWxsU2l6ZSArIHRoaXMuY2VsbFNpemUgLyAyXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmdvYWwuekluZGV4ID0gNTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy50aW1lUmVtYWluaW5nIC09IGR0O1xyXG4gICAgaWYgKHRoaXMudGltZVJlbWFpbmluZyA8PSAwKSB7XHJcbiAgICAgIHRoaXMudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgICB0aGlzLm9uR2FtZU92ZXIoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVUaW1lckxhYmVsKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmdvYWxSZWFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IGdvYWxHcmlkID0gdGhpcy5tYXplTG9naWMuZ2V0R29hbFBvc2l0aW9uKCk7XHJcbiAgICAgIGNvbnN0IHcgPSB0aGlzLmNvbHMgKiB0aGlzLmNlbGxTaXplO1xyXG4gICAgICBjb25zdCBoID0gdGhpcy5yb3dzICogdGhpcy5jZWxsU2l6ZTtcclxuICAgICAgY29uc3QgYmFzZVggPSAoMTA4MCAtIHcpIC8gMjtcclxuICAgICAgY29uc3QgYmFzZVkgPSAoMTkyMCAtIGgpIC8gMjtcclxuICAgICAgY29uc3QgZ29hbFBvcyA9IGNjLnYyKFxyXG4gICAgICAgIGJhc2VYICsgZ29hbEdyaWQueCAqIHRoaXMuY2VsbFNpemUgKyB0aGlzLmNlbGxTaXplIC8gMixcclxuICAgICAgICBiYXNlWSArIGdvYWxHcmlkLnkgKiB0aGlzLmNlbGxTaXplICsgdGhpcy5jZWxsU2l6ZSAvIDJcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCkuc3ViKGdvYWxQb3MpLm1hZygpIDwgdGhpcy5jZWxsU2l6ZSAqIDAuNCkge1xyXG4gICAgICAgIHRoaXMuZ29hbFJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25NYXplQ2xlYXJlZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVRpbWVyTGFiZWwoKSB7XHJcbiAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYFRpbWU6ICR7TWF0aC5jZWlsKHRoaXMudGltZVJlbWFpbmluZyl9c2A7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTWF6ZUNsZWFyZWQoKSB7XHJcbiAgICB0aGlzLm5leHRMZXZlbEJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5leHRMZXZlbEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5uZXh0TGV2ZWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgR2FtZURhdGEuY3VycmVudExldmVsID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICB0aGlzLnN0YXJ0TGV2ZWwodGhpcy5jdXJyZW50TGV2ZWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkdhbWVPdmVyKCkge1xyXG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lT3ZlclNjZW5lXCIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkJhY2tCdXR0b25DbGljaygpIHtcclxuICAgIEdhbWVEYXRhLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2NlbmVcIik7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Yu/3Match/3MatchManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c77b4qzzIZMtIiyJOm/OGM6', '3MatchManager');
// scripts/Yu/3Match/3MatchManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let ThreeMatchManager = class ThreeMatchManager extends cc.Component {
    constructor() {
        super(...arguments);
        this.timerLabel = null;
        this.scoreLabel = null;
        this.boardNode = null;
        this.comboGauge = null;
        this.feverLabel = null;
        this.totalTime = 120;
        this.currentTime = 120;
        this.score = 0;
        this.comboValue = 0;
        this.comboMax = 300;
        this.isFeverTime = false;
    }
    onLoad() {
        this.schedule(this.updateTimer, 1);
        this.updateScore(0);
        // 콤보 게이지 관련 초기화
        this.comboValue = 0;
        this.comboMax = 200; // 혹은 필요에 따라 값 설정
        this.comboGauge.progress = 0;
        // 피버타임 UI 초기화
        this.isFeverTime = false;
        this.feverLabel.active = false;
        // const label = this.feverLabel.getComponent(cc.Label);
        // label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        // label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        // label.overflow = cc.Label.Overflow.SHRINK;  // 너무 길면 축소
    }
    updateTimer() {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            this.onGameOver();
        }
        this.timerLabel.string = `시간: ${this.currentTime}`;
    }
    updateScore(amount) {
        this.score += amount;
        this.scoreLabel.string = `${this.score}`;
        // 점수 획득시 콤보게이지 추가 메서드 실행    
        this.increaseComboGauge(amount);
    }
    addMatchScore(matchCount) {
        const scoreToAdd = matchCount * 10; // 피버 아닐 때 점수 추가
        // 피버타임이면 점수 2배로 설정
        const finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
        this.updateScore(finalScore);
    }
    increaseComboGauge(amount) {
        if (this.isFeverTime)
            return; // 피버타임중엔 게이지 안올라감감
        this.comboValue += amount;
        if (this.comboValue >= this.comboMax) {
            this.comboValue = this.comboMax;
            this.startFeverTime(); // 현재 게이지 값이 맥스값보다 크거나 같아지면 피버타임 메서드 실행
        }
        this.comboGauge.progress = this.comboValue / this.comboMax; // ui실행
    }
    startFeverTime() {
        this.isFeverTime = true;
        this.feverLabel.active = true; // 피버 UI 보여주기
        // 10초 후 종료
        this.scheduleOnce(() => {
            this.endFeverTime();
        }, 10);
    }
    endFeverTime() {
        this.isFeverTime = false; // 피버타임 상태 false로
        this.comboValue = 0; // 현재 콤보 밸류, ui 초기화
        this.comboGauge.progress = 0;
        this.feverLabel.active = false; // 피버 UI 숨기기
    }
    onGameOver() {
        cc.log("게임 종료!");
        // 이후 게임 종료 처리 추가 가능
    }
};
__decorate([
    property(cc.Label)
], ThreeMatchManager.prototype, "timerLabel", void 0);
__decorate([
    property(cc.Label)
], ThreeMatchManager.prototype, "scoreLabel", void 0);
__decorate([
    property(cc.Node)
], ThreeMatchManager.prototype, "boardNode", void 0);
__decorate([
    property(cc.ProgressBar)
], ThreeMatchManager.prototype, "comboGauge", void 0);
__decorate([
    property(cc.Node)
], ThreeMatchManager.prototype, "feverLabel", void 0);
ThreeMatchManager = __decorate([
    ccclass
], ThreeMatchManager);
exports.default = ThreeMatchManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUk1QyxJQUFxQixpQkFBaUIsR0FBdEMsTUFBcUIsaUJBQWtCLFNBQVEsRUFBRSxDQUFDLFNBQVM7SUFBM0Q7O1FBRUksZUFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixlQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUduQixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixhQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBeUZ6QyxDQUFDO0lBdEZHLE1BQU07UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixnQkFBZ0I7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxpQkFBaUI7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRzdCLGNBQWM7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFL0Isd0RB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Q0FBQztxREFDUztBQUdsQztJQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNTO0FBZFYsaUJBQWlCO0lBRHJDLE9BQU87R0FDYSxpQkFBaUIsQ0FnSHJDO2tCQWhIb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFRocmVlTWF0Y2hCb2FyZCBmcm9tIFwiLi8zTWF0Y2hCb2FyZFwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVNYXRjaE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJvYXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgY29tYm9HYXVnZTogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmV2ZXJMYWJlbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgdG90YWxUaW1lOiBudW1iZXIgPSAxMjA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAxMjA7XHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY29tYm9WYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY29tYm9NYXg6IG51bWJlciA9IDMwMDtcclxuICAgIHByaXZhdGUgaXNGZXZlclRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgwKTtcclxuICAgICAgICAgICAgLy8g7L2k67O0IOqyjOydtOyngCDqtIDroKgg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLmNvbWJvTWF4ID0gMjAwOyAvLyDtmLnsnYAg7ZWE7JqU7JeQIOuUsOudvCDqsJIg7ISk7KCVXHJcbiAgICAgICAgdGhpcy5jb21ib0dhdWdlLnByb2dyZXNzID0gMDtcclxuXHJcblxyXG4gICAgICAgIC8vIO2UvOuyhO2DgOyehCBVSSDstIjquLDtmZRcclxuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mZXZlckxhYmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBsYWJlbCA9IHRoaXMuZmV2ZXJMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIC8vIGxhYmVsLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XHJcbiAgICAgICAgLy8gbGFiZWwudmVydGljYWxBbGlnbiA9IGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIC8vIGxhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuU0hSSU5LOyAgLy8g64SI66y0IOq4uOuptCDstpXshoxcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZS0tO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMub25HYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGDsi5zqsIQ6ICR7dGhpcy5jdXJyZW50VGltZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBhbW91bnQ7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgICAgICAvLyDsoJDsiJgg7ZqN65Od7IucIOy9pOuztOqyjOydtOyngCDstpTqsIAg66mU7ISc65OcIOyLpO2WiSAgICBcclxuICAgICAgICB0aGlzLmluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQpOyAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhZGRNYXRjaFNjb3JlKG1hdGNoQ291bnQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICBjb25zdCBzY29yZVRvQWRkID0gbWF0Y2hDb3VudCAqIDEwOyAvLyDtlLzrsoQg7JWE64uQIOuVjCDsoJDsiJgg7LaU6rCAXHJcbiAgICBcclxuICAgICAgICAvLyDtlLzrsoTtg4DsnoTsnbTrqbQg7KCQ7IiYIDLrsLDroZwg7ISk7KCVXHJcbiAgICAgICAgY29uc3QgZmluYWxTY29yZSA9IHRoaXMuaXNGZXZlclRpbWUgPyBzY29yZVRvQWRkICogMiA6IHNjb3JlVG9BZGQ7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKGZpbmFsU2NvcmUpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgaW5jcmVhc2VDb21ib0dhdWdlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGZXZlclRpbWUpIHJldHVybjsgLy8g7ZS867KE7YOA7J6E7KSR7JeUIOqyjOydtOyngCDslYjsmKzrnbzqsJDqsJBcclxuICAgIFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tYm9WYWx1ZSA+PSB0aGlzLmNvbWJvTWF4KSB7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSB0aGlzLmNvbWJvTWF4O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RmV2ZXJUaW1lKCk7IC8vIO2YhOyerCDqsozsnbTsp4Ag6rCS7J20IOunpeyKpOqwkuuztOuLpCDtgazqsbDrgpgg6rCZ7JWE7KeA66m0IO2UvOuyhO2DgOyehCDrqZTshJzrk5wg7Iuk7ZaJXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IHRoaXMuY29tYm9WYWx1ZSAvIHRoaXMuY29tYm9NYXg7IC8vIHVp7Iuk7ZaJXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRGZXZlclRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZXZlckxhYmVsLmFjdGl2ZSA9IHRydWU7IC8vIO2UvOuyhCBVSSDrs7Tsl6zso7zquLBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gMTDstIgg7ZuEIOyiheujjFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmRGZXZlclRpbWUoKTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVuZEZldmVyVGltZSgpIHtcclxuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gZmFsc2U7IC8vIO2UvOuyhO2DgOyehCDsg4Htg5wgZmFsc2XroZxcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSAwOyAvLyDtmITsnqwg7L2k67O0IOuwuOulmCwgdWkg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5jb21ib0dhdWdlLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLmZldmVyTGFiZWwuYWN0aXZlID0gZmFsc2U7IC8vIO2UvOuyhCBVSSDsiKjquLDquLBcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIG9uR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgY2MubG9nKFwi6rKM7J6EIOyiheujjCFcIik7XHJcbiAgICAgICAgLy8g7J207ZuEIOqyjOyehCDsooXro4wg7LKY66asIOy2lOqwgCDqsIDriqVcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/GameOverManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba55241+4FM1oLcOvRC1meQ', 'GameOverManager');
// scripts/Jang/GameOverManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameData_1 = require("./GameData");
const { ccclass, property } = cc._decorator;
let GameOverManager = class GameOverManager extends cc.Component {
    constructor() {
        super(...arguments);
        this.retryButton = null;
        this.mainMenuButton = null;
    }
    start() {
        this.retryButton.on('click', this.onRetryButtonClick, this);
        this.mainMenuButton.on('click', this.onMainMenuButtonClick, this);
    }
    onRetryButtonClick() {
        // Retry → global currentLevel 값 그대로 MazeScene으로 로드 (실패했던 레벨부터 재시작)
        cc.director.loadScene("MazeScene");
    }
    onMainMenuButtonClick() {
        // Main Menu → global currentLevel 재설정 후 MainScene으로 전환
        GameData_1.default.currentLevel = 1;
        cc.director.loadScene("MainScene");
    }
};
__decorate([
    property(cc.Node)
], GameOverManager.prototype, "retryButton", void 0);
__decorate([
    property(cc.Node)
], GameOverManager.prototype, "mainMenuButton", void 0);
GameOverManager = __decorate([
    ccclass
], GameOverManager);
exports.default = GameOverManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcR2FtZU92ZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFFdEYseUNBQWtDO0FBRWxDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUc1QyxJQUFxQixlQUFlLEdBQXBDLE1BQXFCLGVBQWdCLFNBQVEsRUFBRSxDQUFDLFNBQVM7SUFBekQ7O1FBRUksZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsbUJBQWMsR0FBWSxJQUFJLENBQUM7SUFpQm5DLENBQUM7SUFmRyxLQUFLO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxrQkFBa0I7UUFDZCxtRUFBbUU7UUFDbkUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHFCQUFxQjtRQUNqQix1REFBdUQ7UUFDdkQsa0JBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSixDQUFBO0FBcEJHO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1U7QUFHNUI7SUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDYTtBQUxkLGVBQWU7SUFEbkMsT0FBTztHQUNhLGVBQWUsQ0FzQm5DO2tCQXRCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lRGF0YSBmcm9tIFwiLi9HYW1lRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJldHJ5QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haW5NZW51QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJldHJ5QnV0dG9uLm9uKCdjbGljaycsIHRoaXMub25SZXRyeUJ1dHRvbkNsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm1haW5NZW51QnV0dG9uLm9uKCdjbGljaycsIHRoaXMub25NYWluTWVudUJ1dHRvbkNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJldHJ5QnV0dG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gUmV0cnkg4oaSIGdsb2JhbCBjdXJyZW50TGV2ZWwg6rCSIOq3uOuMgOuhnCBNYXplU2NlbmXsnLzroZwg66Gc65OcICjsi6TtjKjtlojrjZgg66CI67Ko67aA7YSwIOyerOyLnOyekSlcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYXplU2NlbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25NYWluTWVudUJ1dHRvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE1haW4gTWVudSDihpIgZ2xvYmFsIGN1cnJlbnRMZXZlbCDsnqzshKTsoJUg7ZuEIE1haW5TY2VuZeycvOuhnCDsoITtmZhcclxuICAgICAgICBHYW1lRGF0YS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/SingleGameList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd26b1kYbyNKyKnGcPX9gaYS', 'SingleGameList');
// scripts/Controller/SingleGameList.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let MainController = class MainController extends cc.Component {
    loadMoleGame() {
        console.log("두더지 게임으로 이동");
        cc.director.loadScene('MoleGameScene');
    }
    loadThreeMatchGame() {
        console.log("쓰리매치 게임으로 이동");
        cc.director.loadScene('3M_GameScene');
    }
    loadBlockCountGame() {
        console.log("블록 개수 세기 게임으로 이동");
        const result = cc.director.loadScene('BlockCountGameScene');
        console.log("씬 로드 결과:", result);
    }
    loadRememberGame() {
        console.log("기억력 게임으로 이동");
        cc.director.loadScene('RememberGameScene');
    }
};
MainController = __decorate([
    ccclass
], MainController);
exports.default = MainController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcU2luZ2xlR2FtZUxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFHNUMsSUFBcUIsY0FBYyxHQUFuQyxNQUFxQixjQUFlLFNBQVEsRUFBRSxDQUFDLFNBQVM7SUFFcEQsWUFBWTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGtCQUFrQjtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGtCQUFrQjtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDL0MsQ0FBQztDQXVCSixDQUFBO0FBNUNvQixjQUFjO0lBRGxDLE9BQU87R0FDYSxjQUFjLENBNENsQztrQkE1Q29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgbG9hZE1vbGVHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuuRkOuNlOyngCDqsozsnoTsnLzroZwg7J2064+ZXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01vbGVHYW1lU2NlbmUnKTtcbiAgICB9XG4gICAgXG4gICAgbG9hZFRocmVlTWF0Y2hHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuyTsOumrOunpOy5mCDqsozsnoTsnLzroZwg7J2064+ZXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJzNNX0dhbWVTY2VuZScpO1xuICAgIH1cblxuICAgIGxvYWRCbG9ja0NvdW50R2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLruJTroZ0g6rCc7IiYIOyEuOq4sCDqsozsnoTsnLzroZwg7J2064+ZXCIpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0Jsb2NrQ291bnRHYW1lU2NlbmUnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLslKwg66Gc65OcIOqysOqzvDpcIiwgcmVzdWx0KTtcbiAgICB9XG5cbiAgICBsb2FkUmVtZW1iZXJHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuq4sOyWteugpSDqsozsnoTsnLzroZwg7J2064+ZXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1JlbWVtYmVyR2FtZVNjZW5lJyk7XG4gICAgfVxuICAgIFxuICAgIFxuIC8vIOy2lO2bhCDsi6TsoJwg7JSs7J2066aEIOy2lOqwgCAsIOy9lOy9lOyKpCDrgrQg67mM65Oc7YyM7J287JeQ64+EIOy2lOqwgFxuICAgIC8vIGxvYWRHYW1lMygpIHtcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lM1NjZW5lJyk7ICBcbiAgICAvLyB9XG5cbiAgICAvLyBsb2FkR2FtZTQoKSB7XG4gICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZTRTY2VuZScpO1xuICAgIC8vIH1cblxuICAgIC8vIGxvYWRHYW1lNSgpIHtcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lNVNjZW5lJyk7XG4gICAgLy8gfVxuXG4gICAgLy8gbG9hZEdhbWU2KCkge1xuICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWU2U2NlbmUnKTtcbiAgICAvLyB9XG5cbiAgICAvLyBsb2FkR2FtZTcoKSB7XG4gICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZTdTY2VuZScpO1xuICAgIC8vIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazePlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4945dCYaAtPU49aTpTuPF+Z', 'MazePlayer');
// scripts/Jang/MazePlayer.ts

"use strict";
// Scripts/MazePlayer.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const MazeGameManager_1 = require("./MazeGameManager");
const { ccclass, property } = cc._decorator;
let MazePlayer = class MazePlayer extends cc.Component {
    constructor() {
        super(...arguments);
        /** 걷기 애니메이션용 프레임 배열 (Inspector 에서 4개 연결) */
        this.walkFrames = [];
        /** 현재 그리드 좌표 */
        this.currentGridPos = cc.v2(1, 1);
        this.isMoving = false;
        this.moveDuration = 0.1;
    }
    onLoad() {
        // 1) Canvas/Game Manager 노드에서 MazeGameManager 컴포넌트 찾아서 할당
        const gmNode = cc.find("Canvas/Game Manager");
        if (!gmNode) {
            cc.error("MazePlayer: 'Canvas/Game Manager' 노드를 찾을 수 없습니다!");
            return;
        }
        this.gameManager = gmNode.getComponent(MazeGameManager_1.default);
        if (!this.gameManager) {
            cc.error("MazePlayer: MazeGameManager 컴포넌트가 없습니다!");
            return;
        }
        // 2) Sprite & Animation 컴포넌트 확보
        this.sprite = this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
        this.anim = this.node.getComponent(cc.Animation) || this.node.addComponent(cc.Animation);
        // 3) 걷기 프레임이 설정되어 있으면 첫 프레임 적용 & 애니메이션 클립 생성
        if (this.walkFrames.length > 0) {
            // 첫 프레임 세팅
            this.sprite.spriteFrame = this.walkFrames[0];
            this.sprite.type = cc.Sprite.Type.SIMPLE;
            this.sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            // 12fps 애니메이션 클립 생성
            const clip = cc.AnimationClip.createWithSpriteFrames(this.walkFrames, 12 // 초당 12프레임
            );
            clip.name = "walk";
            clip.wrapMode = cc.WrapMode.Loop;
            this.anim.addClip(clip);
            // cellSize * 0.8 크기에 맞춰 자동 스케일링
            const origW = this.walkFrames[0].getRect().width;
            const target = this.gameManager.cellSize * 0.8;
            this.node.setScale(target / origW, target / origW);
        }
        else {
            cc.warn("MazePlayer: walkFrames가 설정되지 않았습니다!");
        }
        // 4) 앵커·zIndex 설정
        this.node.setAnchorPoint(0.5, 0.5);
        this.node.zIndex = 999;
        // 5) 키 입력 리스너 등록 (KEY_DOWN + KEY_UP)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    /** 키 누를 때 호출 */
    onKeyDown(e) {
        if (this.isMoving || this.gameManager.gameOver)
            return;
        let delta = cc.v2(0, 0);
        switch (e.keyCode) {
            case cc.macro.KEY.left:
                delta = cc.v2(-1, 0);
                break;
            case cc.macro.KEY.right:
                delta = cc.v2(1, 0);
                break;
            case cc.macro.KEY.up:
                delta = cc.v2(0, 1);
                break;
            case cc.macro.KEY.down:
                delta = cc.v2(0, -1);
                break;
            default: return;
        }
        // 걷기 애니메이션 재생
        if (this.anim.getClips().some(c => c.name === "walk")) {
            this.anim.play("walk");
        }
        this.move(delta);
    }
    /** 키 뗄 때 호출 */
    onKeyUp(e) {
        // 애니메이션 정지
        if (this.anim.getClips().some(c => c.name === "walk")) {
            this.anim.stop("walk");
        }
    }
    /** 실제 그리드 이동 & 노드 액션 처리 */
    move(delta) {
        const next = this.currentGridPos.add(delta);
        if (!this.gameManager.getMazeLogic().isWalkable({ x: next.x, y: next.y }))
            return;
        this.currentGridPos = next.clone();
        // 목표 월드 좌표 계산
        const cs = this.gameManager.cellSize;
        const w = this.gameManager.cols * cs;
        const h = this.gameManager.rows * cs;
        const ox = (1080 - w) / 2;
        const oy = (1920 - h) / 2;
        const dest = cc.v2(ox + next.x * cs + cs / 2, oy + next.y * cs + cs / 2);
        // 이동 처리
        this.isMoving = true;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.moveTo(this.moveDuration, dest), cc.callFunc(() => { this.isMoving = false; })));
    }
};
__decorate([
    property([cc.SpriteFrame])
], MazePlayer.prototype, "walkFrames", void 0);
MazePlayer = __decorate([
    ccclass
], MazePlayer);
exports.default = MazePlayer;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZVBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7OztBQUV4Qix1REFBZ0Q7QUFDaEQsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRzVDLElBQXFCLFVBQVUsR0FBL0IsTUFBcUIsVUFBVyxTQUFRLEVBQUUsQ0FBQyxTQUFTO0lBQXBEOztRQUNFLDRDQUE0QztRQUVyQyxlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUt6QyxnQkFBZ0I7UUFDVCxtQkFBYyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJDLGFBQVEsR0FBaUIsS0FBSyxDQUFDO1FBQy9CLGlCQUFZLEdBQWEsR0FBRyxDQUFDO0lBb0h2QyxDQUFDO0lBaEhDLE1BQU07UUFDSiwwREFBMEQ7UUFDMUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7WUFDN0QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDcEQsT0FBTztTQUNSO1FBRUQsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMs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QUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQ1QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzlDLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBN0hDO0lBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzhDQUNjO0FBSHRCLFVBQVU7SUFEOUIsT0FBTztHQUNhLFVBQVUsQ0FnSTlCO2tCQWhJb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNjcmlwdHMvTWF6ZVBsYXllci50c1xyXG5cclxuaW1wb3J0IE1hemVHYW1lTWFuYWdlciBmcm9tIFwiLi9NYXplR2FtZU1hbmFnZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hemVQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8qKiDqsbfquLAg7JWg64uI66mU7J207IWY7JqpIO2UhOugiOyehCDrsLDsl7QgKEluc3BlY3RvciDsl5DshJwgNOqwnCDsl7DqsrApICovXHJcbiAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgcHVibGljIHdhbGtGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgLyoqIOuCtOu2gOyXkOyEnCDsnpDrj5nsnLzroZwg7ZWg64u565CgIEdhbWVNYW5hZ2VyIOywuOyhsCAqL1xyXG4gIHByaXZhdGUgZ2FtZU1hbmFnZXIhOiBNYXplR2FtZU1hbmFnZXI7XHJcblxyXG4gIC8qKiDtmITsnqwg6re466as65OcIOyijO2RnCAqL1xyXG4gIHB1YmxpYyBjdXJyZW50R3JpZFBvczogY2MuVmVjMiA9IGNjLnYyKDEsIDEpO1xyXG5cclxuICBwcml2YXRlIGlzTW92aW5nOiBib29sZWFuICAgICAgPSBmYWxzZTtcclxuICBwcml2YXRlIG1vdmVEdXJhdGlvbjogbnVtYmVyICAgPSAwLjE7XHJcbiAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xyXG4gIHByaXZhdGUgc3ByaXRlITogY2MuU3ByaXRlO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyAxKSBDYW52YXMvR2FtZSBNYW5hZ2VyIOuFuOuTnOyXkOyEnCBNYXplR2FtZU1hbmFnZXIg7Lu07Y+s64SM7Yq4IOywvuyVhOyEnCDtlaDri7lcclxuICAgIGNvbnN0IGdtTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZSBNYW5hZ2VyXCIpO1xyXG4gICAgaWYgKCFnbU5vZGUpIHtcclxuICAgICAgY2MuZXJyb3IoXCJNYXplUGxheWVyOiAnQ2FudmFzL0dhbWUgTWFuYWdlcicg64W465Oc66W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukIVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lTWFuYWdlciA9IGdtTm9kZS5nZXRDb21wb25lbnQoTWF6ZUdhbWVNYW5hZ2VyKSE7XHJcbiAgICBpZiAoIXRoaXMuZ2FtZU1hbmFnZXIpIHtcclxuICAgICAgY2MuZXJyb3IoXCJNYXplUGxheWVyOiBNYXplR2FtZU1hbmFnZXIg7Lu07Y+s64SM7Yq46rCAIOyXhuyKteuLiOuLpCFcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyKSBTcHJpdGUgJiBBbmltYXRpb24g7Lu07Y+s64SM7Yq4IO2ZleuztFxyXG4gICAgdGhpcy5zcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgfHwgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgdGhpcy5hbmltICAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikgfHwgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG5cclxuICAgIC8vIDMpIOqxt+q4sCDtlITroIjsnoTsnbQg7ISk7KCV65CY7Ja0IOyeiOycvOuptCDssqsg7ZSE66CI7J6EIOyggeyaqSAmIOyVoOuLiOuplOydtOyFmCDtgbTrpr0g7IOd7ISxXHJcbiAgICBpZiAodGhpcy53YWxrRnJhbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8g7LKrIO2UhOugiOyehCDshLjtjIVcclxuICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLndhbGtGcmFtZXNbMF07XHJcbiAgICAgIHRoaXMuc3ByaXRlLnR5cGUgICAgID0gY2MuU3ByaXRlLlR5cGUuU0lNUExFO1xyXG4gICAgICB0aGlzLnNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcblxyXG4gICAgICAvLyAxMmZwcyDslaDri4jrqZTsnbTshZgg7YG066a9IOyDneyEsVxyXG4gICAgICBjb25zdCBjbGlwID0gY2MuQW5pbWF0aW9uQ2xpcC5jcmVhdGVXaXRoU3ByaXRlRnJhbWVzKFxyXG4gICAgICAgIHRoaXMud2Fsa0ZyYW1lcyxcclxuICAgICAgICAxMiAgLy8g7LSI64u5IDEy7ZSE66CI7J6EXHJcbiAgICAgICk7XHJcbiAgICAgIGNsaXAubmFtZSAgICAgPSBcIndhbGtcIjtcclxuICAgICAgY2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLkxvb3A7XHJcbiAgICAgIHRoaXMuYW5pbS5hZGRDbGlwKGNsaXApO1xyXG5cclxuICAgICAgLy8gY2VsbFNpemUgKiAwLjgg7YGs6riw7JeQIOunnuy2sCDsnpDrj5kg7Iqk7LyA7J2866eBXHJcbiAgICAgIGNvbnN0IG9yaWdXICAgID0gdGhpcy53YWxrRnJhbWVzWzBdLmdldFJlY3QoKS53aWR0aDtcclxuICAgICAgY29uc3QgdGFyZ2V0ICAgPSB0aGlzLmdhbWVNYW5hZ2VyLmNlbGxTaXplICogMC44O1xyXG4gICAgICB0aGlzLm5vZGUuc2V0U2NhbGUodGFyZ2V0IC8gb3JpZ1csIHRhcmdldCAvIG9yaWdXKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNjLndhcm4oXCJNYXplUGxheWVyOiB3YWxrRnJhbWVz6rCAIOyEpOygleuQmOyngCDslYrslZjsirXri4jri6QhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDQpIOyVtey7pMK3ekluZGV4IOyEpOyglVxyXG4gICAgdGhpcy5ub2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcclxuICAgIHRoaXMubm9kZS56SW5kZXggPSA5OTk7XHJcblxyXG4gICAgLy8gNSkg7YKkIOyeheugpSDrpqzsiqTrhIgg65Ox66GdIChLRVlfRE9XTiArIEtFWV9VUClcclxuICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgICB0aGlzLm9uS2V5VXAsICAgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgICB0aGlzLm9uS2V5VXAsICAgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiog7YKkIOuIhOulvCDrlYwg7Zi47LacICovXHJcbiAgcHJpdmF0ZSBvbktleURvd24oZTogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgaWYgKHRoaXMuaXNNb3ZpbmcgfHwgdGhpcy5nYW1lTWFuYWdlci5nYW1lT3ZlcikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBkZWx0YSA9IGNjLnYyKDAsIDApO1xyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDogIGRlbHRhID0gY2MudjIoLTEsICAwKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OiBkZWx0YSA9IGNjLnYyKCAxLCAgMCk7IGJyZWFrO1xyXG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDogICAgZGVsdGEgPSBjYy52MiggMCwgIDEpOyBicmVhaztcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjogIGRlbHRhID0gY2MudjIoIDAsIC0xKTsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDqsbfquLAg7JWg64uI66mU7J207IWYIOyerOyDnVxyXG4gICAgaWYgKHRoaXMuYW5pbS5nZXRDbGlwcygpLnNvbWUoYyA9PiBjLm5hbWUgPT09IFwid2Fsa1wiKSkge1xyXG4gICAgICB0aGlzLmFuaW0ucGxheShcIndhbGtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb3ZlKGRlbHRhKTtcclxuICB9XHJcblxyXG4gIC8qKiDtgqQg65eEIOuVjCDtmLjstpwgKi9cclxuICBwcml2YXRlIG9uS2V5VXAoZTogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgLy8g7JWg64uI66mU7J207IWYIOygleyngFxyXG4gICAgaWYgKHRoaXMuYW5pbS5nZXRDbGlwcygpLnNvbWUoYyA9PiBjLm5hbWUgPT09IFwid2Fsa1wiKSkge1xyXG4gICAgICB0aGlzLmFuaW0uc3RvcChcIndhbGtcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog7Iuk7KCcIOq3uOumrOuTnCDsnbTrj5kgJiDrhbjrk5wg7JWh7IWYIOyymOumrCAqL1xyXG4gIHByaXZhdGUgbW92ZShkZWx0YTogY2MuVmVjMikge1xyXG4gICAgY29uc3QgbmV4dCA9IHRoaXMuY3VycmVudEdyaWRQb3MuYWRkKGRlbHRhKTtcclxuICAgIGlmICghdGhpcy5nYW1lTWFuYWdlci5nZXRNYXplTG9naWMoKS5pc1dhbGthYmxlKHsgeDogbmV4dC54LCB5OiBuZXh0LnkgfSkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRHcmlkUG9zID0gbmV4dC5jbG9uZSgpO1xyXG5cclxuICAgIC8vIOuqqe2RnCDsm5Trk5wg7KKM7ZGcIOqzhOyCsFxyXG4gICAgY29uc3QgY3MgICA9IHRoaXMuZ2FtZU1hbmFnZXIuY2VsbFNpemU7XHJcbiAgICBjb25zdCB3ICAgID0gdGhpcy5nYW1lTWFuYWdlci5jb2xzICogY3M7XHJcbiAgICBjb25zdCBoICAgID0gdGhpcy5nYW1lTWFuYWdlci5yb3dzICogY3M7XHJcbiAgICBjb25zdCBveCAgID0gKDEwODAgLSB3KSAvIDI7XHJcbiAgICBjb25zdCBveSAgID0gKDE5MjAgLSBoKSAvIDI7XHJcbiAgICBjb25zdCBkZXN0ID0gY2MudjIoXHJcbiAgICAgIG94ICsgbmV4dC54ICogY3MgKyBjcyAvIDIsXHJcbiAgICAgIG95ICsgbmV4dC55ICogY3MgKyBjcyAvIDJcclxuICAgICk7XHJcblxyXG4gICAgLy8g7J2064+ZIOyymOumrFxyXG4gICAgdGhpcy5pc01vdmluZyA9IHRydWU7XHJcbiAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgIGNjLm1vdmVUbyh0aGlzLm1vdmVEdXJhdGlvbiwgZGVzdCksXHJcbiAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4geyB0aGlzLmlzTW92aW5nID0gZmFsc2U7IH0pXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff7a2su8tNBnoE+upLUF5DV', 'MazeLogic');
// scripts/Jang/MazeLogic.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let MazeLogic = class MazeLogic {
    constructor(rows, cols, container) {
        // 에디터에서 연결할 프리팹 & 스프라이트
        this.tilePrefab = null;
        this.pathFrame = null;
        this.grassFrame = null;
        this.maze = [];
        // 셀 크기 (픽셀)
        this.cellSize = 50;
        this.rows = rows;
        this.cols = cols;
        this.container = container;
    }
    generateMaze(level) {
        // (기존 DFS + addLoops 그대로)
        this.maze = Array.from({ length: this.rows }, () => Array(this.cols).fill(1));
        const stack = [];
        this.maze[1][1] = 0;
        stack.push({ x: 1, y: 1 });
        while (stack.length) {
            const cur = stack.pop();
            const neighbors = this.getUnvisitedNeighbors(cur.x, cur.y);
            if (neighbors.length) {
                stack.push(cur);
                const next = neighbors[Math.floor(Math.random() * neighbors.length)];
                this.maze[next.y][next.x] = 0;
                this.maze[(cur.y + next.y) / 2][(cur.x + next.x) / 2] = 0;
                stack.push(next);
            }
        }
        const loopProb = level >= 6 ? 0.05 : 0.03;
        this.addLoops(loopProb);
    }
    addLoops(prob) {
        for (let y = 1; y < this.rows - 1; y++) {
            for (let x = 1; x < this.cols - 1; x++) {
                if (this.maze[y][x] === 1 && Math.random() < prob) {
                    let cnt = 0;
                    if (this.maze[y - 1][x] === 0)
                        cnt++;
                    if (this.maze[y + 1][x] === 0)
                        cnt++;
                    if (this.maze[y][x - 1] === 0)
                        cnt++;
                    if (this.maze[y][x + 1] === 0)
                        cnt++;
                    if (cnt === 1)
                        this.maze[y][x] = 0;
                }
            }
        }
    }
    /** 타일(prefab) 인스턴스화해서 오솔길/풀숲 이미지로 렌더링 */
    renderMaze() {
        this.container.removeAllChildren();
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const tile = cc.instantiate(this.tilePrefab);
                tile.parent = this.container;
                // → 꼭 이 두 줄을 추가하세요 ←
                tile.setContentSize(this.cellSize, this.cellSize);
                tile.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE;
                // 스프라이트 프레임
                const sp = tile.getComponent(cc.Sprite);
                sp.spriteFrame = this.maze[y][x] === 0
                    ? this.pathFrame
                    : this.grassFrame;
                // 위치
                tile.setPosition(x * this.cellSize + this.cellSize / 2, y * this.cellSize + this.cellSize / 2);
            }
        }
    }
    getStartPosition() { return { x: 1, y: 1 }; }
    getGoalPosition() { return { x: this.cols - 2, y: this.rows - 2 }; }
    isWalkable(cell) {
        if (cell.x < 0 || cell.x >= this.cols || cell.y < 0 || cell.y >= this.rows)
            return false;
        return this.maze[cell.y][cell.x] === 0;
    }
    getUnvisitedNeighbors(x, y) {
        const list = [];
        if (x - 2 >= 0 && this.maze[y][x - 2] === 1)
            list.push({ x: x - 2, y });
        if (x + 2 < this.cols && this.maze[y][x + 2] === 1)
            list.push({ x: x + 2, y });
        if (y - 2 >= 0 && this.maze[y - 2][x] === 1)
            list.push({ x, y: y - 2 });
        if (y + 2 < this.rows && this.maze[y + 2][x] === 1)
            list.push({ x, y: y + 2 });
        return list;
    }
};
__decorate([
    property(cc.Prefab)
], MazeLogic.prototype, "tilePrefab", void 0);
__decorate([
    property(cc.SpriteFrame)
], MazeLogic.prototype, "pathFrame", void 0);
__decorate([
    property(cc.SpriteFrame)
], MazeLogic.prototype, "grassFrame", void 0);
MazeLogic = __decorate([
    ccclass
], MazeLogic);
exports.default = MazeLogic;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZUxvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRzVDLElBQXFCLFNBQVMsR0FBOUIsTUFBcUIsU0FBUztJQWM1QixZQUFZLElBQVksRUFBRSxJQUFZLEVBQUUsU0FBa0I7UUFiMUQsd0JBQXdCO1FBQ1EsZUFBVSxHQUFtQixJQUFJLENBQUM7UUFDbEMsY0FBUyxHQUFvQixJQUFJLENBQUM7UUFDbEMsZUFBVSxHQUFtQixJQUFJLENBQUM7UUFJMUQsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUc5QixZQUFZO1FBQ0wsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUczQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQWE7UUFDL0IsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxNQUFNLEtBQUssR0FBK0IsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLE9B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LENBQUMsS0FBSyxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUFuR2lDO0lBQS9CLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUE4QztBQUNsQztJQUEvQixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0Q0FBeUM7QUFDbEM7SUFBL0IsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQXlDO0FBSi9DLFNBQVM7SUFEN0IsT0FBTztHQUNhLFNBQVMsQ0FxRzdCO2tCQXJHb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXplTG9naWMge1xyXG4gIC8vIOyXkOuUlO2EsOyXkOyEnCDsl7DqsrDtlaAg7ZSE66as7Yy5ICYg7Iqk7ZSE65287J207Yq4XHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYikgICAgICAgICAgICB0aWxlUHJlZmFiOiBjYy5QcmVmYWIgICAgICA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSAgICAgICBwYXRoRnJhbWU6IGNjLlNwcml0ZUZyYW1lICA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSAgICAgICBncmFzc0ZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgcm93czogbnVtYmVyO1xyXG4gIHByaXZhdGUgY29sczogbnVtYmVyO1xyXG4gIHByaXZhdGUgbWF6ZTogbnVtYmVyW11bXSA9IFtdO1xyXG4gIHByaXZhdGUgY29udGFpbmVyOiBjYy5Ob2RlO1xyXG5cclxuICAvLyDshYAg7YGs6riwICjtlL3shYApXHJcbiAgcHVibGljIGNlbGxTaXplOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgY29uc3RydWN0b3Iocm93czogbnVtYmVyLCBjb2xzOiBudW1iZXIsIGNvbnRhaW5lcjogY2MuTm9kZSkge1xyXG4gICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgIHRoaXMuY29scyA9IGNvbHM7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZU1hemUobGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gKOq4sOyhtCBERlMgKyBhZGRMb29wcyDqt7jrjIDroZwpXHJcbiAgICB0aGlzLm1hemUgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLnJvd3MgfSwgKCkgPT4gQXJyYXkodGhpcy5jb2xzKS5maWxsKDEpKTtcclxuICAgIGNvbnN0IHN0YWNrOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgdGhpcy5tYXplWzFdWzFdID0gMDtcclxuICAgIHN0YWNrLnB1c2goeyB4OiAxLCB5OiAxIH0pO1xyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBjdXIgPSBzdGFjay5wb3AoKSE7XHJcbiAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuZ2V0VW52aXNpdGVkTmVpZ2hib3JzKGN1ci54LCBjdXIueSk7XHJcbiAgICAgIGlmIChuZWlnaGJvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgc3RhY2sucHVzaChjdXIpO1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSBuZWlnaGJvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmVpZ2hib3JzLmxlbmd0aCldO1xyXG4gICAgICAgIHRoaXMubWF6ZVtuZXh0LnldW25leHQueF0gPSAwO1xyXG4gICAgICAgIHRoaXMubWF6ZVsoY3VyLnkgKyBuZXh0LnkpIC8gMl1bKGN1ci54ICsgbmV4dC54KSAvIDJdID0gMDtcclxuICAgICAgICBzdGFjay5wdXNoKG5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb29wUHJvYiA9IGxldmVsID49IDYgPyAwLjA1IDogMC4wMztcclxuICAgIHRoaXMuYWRkTG9vcHMobG9vcFByb2IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRMb29wcyhwcm9iOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IHkgPSAxOyB5IDwgdGhpcy5yb3dzIC0gMTsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAxOyB4IDwgdGhpcy5jb2xzIC0gMTsgeCsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF6ZVt5XVt4XSA9PT0gMSAmJiBNYXRoLnJhbmRvbSgpIDwgcHJvYikge1xyXG4gICAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXplW3kgLSAxXVt4XSA9PT0gMCkgY250Kys7XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXplW3kgKyAxXVt4XSA9PT0gMCkgY250Kys7XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXplW3ldW3ggLSAxXSA9PT0gMCkgY250Kys7XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXplW3ldW3ggKyAxXSA9PT0gMCkgY250Kys7XHJcbiAgICAgICAgICBpZiAoY250ID09PSAxKSB0aGlzLm1hemVbeV1beF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIO2DgOydvChwcmVmYWIpIOyduOyKpO2EtOyKpO2ZlO2VtOyEnCDsmKTshpTquLgv7ZKA7IiyIOydtOuvuOyngOuhnCDroIzrjZTrp4EgKi9cclxuICBwdWJsaWMgcmVuZGVyTWF6ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzOyB4KyspIHtcclxuICAgICAgICBjb25zdCB0aWxlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUHJlZmFiKTtcclxuICAgICAgICB0aWxlLnBhcmVudCA9IHRoaXMuY29udGFpbmVyO1xyXG4gIFxyXG4gICAgICAgIC8vIOKGkiDqvK0g7J20IOuRkCDspITsnYQg7LaU6rCA7ZWY7IS47JqUIOKGkFxyXG4gICAgICAgIHRpbGUuc2V0Q29udGVudFNpemUodGhpcy5jZWxsU2l6ZSwgdGhpcy5jZWxsU2l6ZSk7XHJcbiAgICAgICAgdGlsZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSEudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNJTVBMRTtcclxuICBcclxuICAgICAgICAvLyDsiqTtlITrnbzsnbTtirgg7ZSE66CI7J6EXHJcbiAgICAgICAgY29uc3Qgc3AgPSB0aWxlLmdldENvbXBvbmVudChjYy5TcHJpdGUpITtcclxuICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHRoaXMubWF6ZVt5XVt4XSA9PT0gMFxyXG4gICAgICAgICAgPyB0aGlzLnBhdGhGcmFtZVxyXG4gICAgICAgICAgOiB0aGlzLmdyYXNzRnJhbWU7XHJcbiAgXHJcbiAgICAgICAgLy8g7JyE7LmYXHJcbiAgICAgICAgdGlsZS5zZXRQb3NpdGlvbihcclxuICAgICAgICAgIHggKiB0aGlzLmNlbGxTaXplICsgdGhpcy5jZWxsU2l6ZSAvIDIsXHJcbiAgICAgICAgICB5ICogdGhpcy5jZWxsU2l6ZSArIHRoaXMuY2VsbFNpemUgLyAyXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgcHVibGljIGdldFN0YXJ0UG9zaXRpb24oKSB7IHJldHVybiB7IHg6IDEsIHk6IDEgfTsgfVxyXG4gIHB1YmxpYyBnZXRHb2FsUG9zaXRpb24oKSAgeyByZXR1cm4geyB4OiB0aGlzLmNvbHMgLSAyLCB5OiB0aGlzLnJvd3MgLSAyIH07IH1cclxuXHJcbiAgcHVibGljIGlzV2Fsa2FibGUoY2VsbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoY2VsbC54IDwgMCB8fCBjZWxsLnggPj0gdGhpcy5jb2xzIHx8IGNlbGwueSA8IDAgfHwgY2VsbC55ID49IHRoaXMucm93cykgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMubWF6ZVtjZWxsLnldW2NlbGwueF0gPT09IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFVudmlzaXRlZE5laWdoYm9ycyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdIHtcclxuICAgIGNvbnN0IGxpc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdID0gW107XHJcbiAgICBpZiAoeCAtIDIgPj0gMCAmJiB0aGlzLm1hemVbeV1beCAtIDJdID09PSAxKSBsaXN0LnB1c2goeyB4OiB4IC0gMiwgeSB9KTtcclxuICAgIGlmICh4ICsgMiA8IHRoaXMuY29scyAmJiB0aGlzLm1hemVbeV1beCArIDJdID09PSAxKSBsaXN0LnB1c2goeyB4OiB4ICsgMiwgeSB9KTtcclxuICAgIGlmICh5IC0gMiA+PSAwICYmIHRoaXMubWF6ZVt5IC0gMl1beF0gPT09IDEpIGxpc3QucHVzaCh7IHgsIHk6IHkgLSAyIH0pO1xyXG4gICAgaWYgKHkgKyAyIDwgdGhpcy5yb3dzICYmIHRoaXMubWF6ZVt5ICsgMl1beF0gPT09IDEpIGxpc3QucHVzaCh7IHgsIHk6IHkgKyAyIH0pO1xyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40194f0OxFJo7xjtjiZh/ac', 'GameData');
// scripts/Jang/GameData.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
class GameData {
}
exports.default = GameData;
GameData.currentLevel = 1;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUV0RixNQUFxQixRQUFROztBQUE3QiwyQkFFRztBQURlLHFCQUFZLEdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZURhdGEge1xyXG4gICAgcHVibGljIHN0YXRpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgfSJdfQ==
//------QC-SOURCE-SPLIT------
