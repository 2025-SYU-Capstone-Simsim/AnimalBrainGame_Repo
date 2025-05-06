"use strict";
cc._RF.push(module, 'c60ceABgEdFG7Git8NFhaSz', 'GameScene');
// scripts/Yu/MoleGame/GameScene.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 구멍 노드 설정 
        _this.moleHole1 = null;
        _this.moleHole2 = null;
        _this.moleHole3 = null;
        _this.moleHole4 = null;
        _this.moleHole5 = null;
        _this.moleHole6 = null;
        // 두더지 프리팹 설정정
        _this.molePrefab = null;
        // 점수 및 타이머 
        _this.scoreLabel = null;
        _this.timerLabel = null;
        _this.moleHoles = []; // 구멍을 저장할 배열
        _this.score = 0; // 점수
        _this.timer = 30; // 타이머 30초
        return _this;
    }
    // 게임 시작
    GameScene.prototype.start = function () {
        // 구멍 노드 배열에 추가
        this.moleHoles = [
            this.moleHole1, this.moleHole2, this.moleHole3,
            this.moleHole4, this.moleHole5, this.moleHole6
        ];
        // 게임 시작 시, 타이머와 점수 초기화
        this.score = 0;
        this.timer = 30;
        this.updateScoreLabel();
        this.updateTimerLabel();
        // 타이머 감소 (1초씩)
        this.schedule(this.decreaseTimer, 1);
        // 첫 번째 두더지 젠 
        this.spawnMoles();
    };
    // 타이머 감소
    GameScene.prototype.decreaseTimer = function () {
        this.timer--;
        this.updateTimerLabel();
        if (this.timer <= 0) {
            this.gameOver();
        }
    };
    // 타이머  업데이트
    GameScene.prototype.updateTimerLabel = function () {
        this.timerLabel.string = "Time: " + this.timer;
    };
    // 점수 업데이트
    GameScene.prototype.updateScoreLabel = function () {
        this.scoreLabel.string = "Score: " + this.score;
    };
    // 두더지 랜덤 젠 
    GameScene.prototype.spawnMoles = function () {
        var _this = this;
        // 일정 시간마다 두더지 생성 
        this.schedule(function () {
            var randomHoleIndex = Math.floor(Math.random() * _this.moleHoles.length); // 랜덤 인덱스
            var selectedHole = _this.moleHoles[randomHoleIndex]; // 랜덤으로 선택된 구멍
            // 두더지 생성
            var mole = cc.instantiate(_this.molePrefab);
            mole.name = "Mole";
            mole.active = true; // 두더지 활성화
            selectedHole.addChild(mole); // 구멍에 두더지 추가
            // 두더지 잡기 클릭 이벤트 처리
            mole.on(cc.Node.EventType.TOUCH_END, _this.onMoleClick, _this);
            // 두더지 숨기기 (1초 후)
            _this.scheduleOnce(function () {
                mole.active = false;
            }, 1); // 1초 후 두더지 숨기기
        }, 0.5, cc.macro.REPEAT_FOREVER); // 0.5초마다 두더지 하나씩 추가
    };
    // 두더지 잡기 클릭 이벤트 정의
    GameScene.prototype.onMoleClick = function (event) {
        var mole = event.target; // 클릭된 두더지
        // 이미 클릭된 두더지는 다시 클릭할 수 없도록 처리
        if (!mole.active)
            return;
        // 두더지 클릭 시 점수 증가
        this.score += 1;
        this.updateScoreLabel();
        // 두더지 활성화 끄기(숨기기)
        mole.active = false;
    };
    // 게임 종료
    GameScene.prototype.gameOver = function () {
        cc.director.loadScene("GameOverScene"); // 게임 오버 후 게임 오버 씬으로 전환
    };
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "moleHole1", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "moleHole2", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "moleHole3", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "moleHole4", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "moleHole5", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "moleHole6", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameScene.prototype, "molePrefab", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "timerLabel", void 0);
    GameScene = __decorate([
        ccclass
    ], GameScene);
    return GameScene;
}(cc.Component));
exports.default = GameScene;

cc._RF.pop();