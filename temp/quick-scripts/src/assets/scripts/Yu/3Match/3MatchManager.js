"use strict";
cc._RF.push(module, '091b5m547lGtbmQKguAskOZ', '3MatchManager');
// scripts/Yu/3Match/3MatchManager.ts

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
var GameState_1 = require("../../Controller/CommonUI/GameState");
var ThreeMatchManager = /** @class */ (function (_super) {
    __extends(ThreeMatchManager, _super);
    function ThreeMatchManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timerDisplayPrefab = null;
        _this.scoreDisplayPrefab = null;
        _this.boardNode = null;
        _this.comboGauge = null;
        _this.feverSprite = null;
        _this.exitButton = null;
        _this.gameOverUIPrefab = null;
        _this.gameStartOverlayPrefab = null;
        _this.totalTime = 30;
        _this.currentTime = 30;
        _this.score = 0;
        _this.timerNode = null;
        _this.scoreNode = null;
        _this.timerLabel = null;
        _this.scoreLabel = null;
        _this.comboValue = 0;
        _this.comboMax = 300;
        _this.isFeverTime = false;
        return _this;
    }
    ThreeMatchManager.prototype.start = function () {
        var _this = this;
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        if (this.feverSprite && this.feverSprite.isValid) {
            this.feverSprite.active = false;
        }
        if (this.gameStartOverlayPrefab) {
            var startOverlay = cc.instantiate(this.gameStartOverlayPrefab);
            this.node.addChild(startOverlay);
            startOverlay.setPosition(0, 0);
            // 애니메이션 시간 후에 시작 (2초 권장)
            this.scheduleOnce(function () {
                _this.startGameLogic();
            }, 2);
        }
        else {
            this.startGameLogic();
        }
    };
    ThreeMatchManager.prototype.startGameLogic = function () {
        // 타이머 UI
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimer();
        // 점수 UI
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);
        // 피버 관련 초기화
        this.comboValue = 0;
        this.comboMax = 300;
        this.comboGauge.progress = 0;
        this.isFeverTime = false;
        if (this.feverSprite)
            this.feverSprite.active = false;
        // 타이머 시작
        this.schedule(this.updateTimer, 1);
    };
    ThreeMatchManager.prototype.updateTimer = function () {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            this.onGameOver();
        }
        this.timerLabel.string = "" + this.currentTime;
    };
    ThreeMatchManager.prototype.updateScore = function (amount) {
        this.score += amount;
        this.scoreLabel.string = "" + this.score;
        this.increaseComboGauge(amount);
    };
    ThreeMatchManager.prototype.increaseComboGauge = function (amount) {
        if (this.isFeverTime)
            return;
        this.comboValue += amount;
        if (this.comboValue >= this.comboMax) {
            this.comboValue = this.comboMax;
            this.startFeverTime();
        }
        this.comboGauge.progress = this.comboValue / this.comboMax;
    };
    ThreeMatchManager.prototype.startFeverTime = function () {
        var _this = this;
        this.isFeverTime = true;
        this.feverSprite.active = true;
        this.scheduleOnce(function () {
            _this.endFeverTime();
        }, 10);
    };
    ThreeMatchManager.prototype.endFeverTime = function () {
        this.isFeverTime = false;
        this.comboValue = 0;
        this.comboGauge.progress = 0;
        this.feverSprite.active = false;
    };
    ThreeMatchManager.prototype.addMatchScore = function (matchCount) {
        var scoreToAdd = matchCount * 10;
        var finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
        this.updateScore(finalScore);
    };
    ThreeMatchManager.prototype.onGameOver = function () {
        cc.log("게임 종료!");
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        GameState_1.default.score = this.score;
        GameState_1.default.gameId = "FruitPuzzle";
        var gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI);
        gameOverUI.setPosition(0, 0);
    };
    ThreeMatchManager.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene("SingleGameList");
    };
    __decorate([
        property(cc.Prefab)
    ], ThreeMatchManager.prototype, "timerDisplayPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], ThreeMatchManager.prototype, "scoreDisplayPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeMatchManager.prototype, "boardNode", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ThreeMatchManager.prototype, "comboGauge", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeMatchManager.prototype, "feverSprite", void 0);
    __decorate([
        property(cc.Button)
    ], ThreeMatchManager.prototype, "exitButton", void 0);
    __decorate([
        property(cc.Prefab)
    ], ThreeMatchManager.prototype, "gameOverUIPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], ThreeMatchManager.prototype, "gameStartOverlayPrefab", void 0);
    ThreeMatchManager = __decorate([
        ccclass
    ], ThreeMatchManager);
    return ThreeMatchManager;
}(cc.Component));
exports.default = ThreeMatchManager;

cc._RF.pop();