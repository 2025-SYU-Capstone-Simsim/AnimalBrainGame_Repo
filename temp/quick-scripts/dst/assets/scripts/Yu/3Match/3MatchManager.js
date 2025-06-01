
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
cc._RF.push(module, 'b50cdZeRIBML5xf5ovOKREW', '3MatchManager');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxpRUFBNEQ7QUFHNUQ7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFtSkM7UUFqSkcsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBR3JDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUdsQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsNEJBQXNCLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUE4R3pDLENBQUM7SUE1R0csaUNBQUssR0FBTDtRQUFBLGlCQW1CQztRQWxCRyxtQkFBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxP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RUFDcUI7SUF2QnhCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBbUpyQztJQUFELHdCQUFDO0NBbkpELEFBbUpDLENBbko4QyxFQUFFLENBQUMsU0FBUyxHQW1KMUQ7a0JBbkpvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IFRocmVlTWF0Y2hCb2FyZCBmcm9tIFwiLi8zTWF0Y2hCb2FyZFwiO1xuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlci9Db21tb25VSS9HYW1lU3RhdGVcIjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTWF0Y2hNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHRpbWVyRGlzcGxheVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2NvcmVEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm9hcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBjb21ib0dhdWdlOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmZXZlclNwcml0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGV4aXRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVPdmVyVUlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVTdGFydE92ZXJsYXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gMzA7XG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMzA7XG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgdGltZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwcml2YXRlIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgY29tYm9WYWx1ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbWJvTWF4OiBudW1iZXIgPSAzMDA7XG4gICAgcHJpdmF0ZSBpc0ZldmVyVGltZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xuICAgICAgICBpZiAodGhpcy5mZXZlclNwcml0ZSAmJiB0aGlzLmZldmVyU3ByaXRlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmV2ZXJTcHJpdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGFydE92ZXJsYXlQcmVmYWIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0T3ZlcmxheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZVN0YXJ0T3ZlcmxheVByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc3RhcnRPdmVybGF5KTtcbiAgICAgICAgICAgIHN0YXJ0T3ZlcmxheS5zZXRQb3NpdGlvbigwLCAwKTtcblxuICAgICAgICAgICAgLy8g7JWg64uI66mU7J207IWYIOyLnOqwhCDtm4Tsl5Ag7Iuc7J6RICgy7LSIIOq2jOyepSlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZUxvZ2ljKCk7XG4gICAgICAgICAgICB9LCAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lTG9naWMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0R2FtZUxvZ2ljKCkge1xuICAgICAgICAvLyDtg4DsnbTrqLggVUlcbiAgICAgICAgdGhpcy50aW1lck5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpbWVyRGlzcGxheVByZWZhYik7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnRpbWVyTm9kZSk7XG4gICAgICAgIHRoaXMudGltZXJMYWJlbCA9IHRoaXMudGltZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiVGltZXJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyKCk7XG5cbiAgICAgICAgLy8g7KCQ7IiYIFVJXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZURpc3BsYXlQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zY29yZU5vZGUpO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwgPSB0aGlzLnNjb3JlTm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNjb3JlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgwKTtcblxuICAgICAgICAvLyDtlLzrsoQg6rSA66CoIOy0iOq4sO2ZlFxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLmNvbWJvTWF4ID0gMzAwO1xuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmZldmVyU3ByaXRlKSB0aGlzLmZldmVyU3ByaXRlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIO2DgOydtOuouCDsi5zsnpFcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUaW1lcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZS0tO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMub25HYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLmN1cnJlbnRUaW1lfWA7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NvcmUoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSBhbW91bnQ7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XG4gICAgICAgIHRoaXMuaW5jcmVhc2VDb21ib0dhdWdlKGFtb3VudCk7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VDb21ib0dhdWdlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRmV2ZXJUaW1lKSByZXR1cm47XG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSArPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmNvbWJvVmFsdWUgPj0gdGhpcy5jb21ib01heCkge1xuICAgICAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gdGhpcy5jb21ib01heDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRGZXZlclRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSB0aGlzLmNvbWJvVmFsdWUgLyB0aGlzLmNvbWJvTWF4O1xuICAgIH1cblxuICAgIHN0YXJ0RmV2ZXJUaW1lKCkge1xuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW5kRmV2ZXJUaW1lKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgICBlbmRGZXZlclRpbWUoKSB7XG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5jb21ib0dhdWdlLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTWF0Y2hTY29yZShtYXRjaENvdW50OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2NvcmVUb0FkZCA9IG1hdGNoQ291bnQgKiAxMDtcbiAgICAgICAgY29uc3QgZmluYWxTY29yZSA9IHRoaXMuaXNGZXZlclRpbWUgPyBzY29yZVRvQWRkICogMiA6IHNjb3JlVG9BZGQ7XG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUoZmluYWxTY29yZSk7XG4gICAgfVxuXG4gICAgb25HYW1lT3ZlcigpIHtcbiAgICAgICAgY2MubG9nKFwi6rKM7J6EIOyiheujjCFcIik7XG4gICAgICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xuICAgICAgICBHYW1lU3RhdGUuc2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgICBHYW1lU3RhdGUuZ2FtZUlkID0gXCJGcnVpdFB1enpsZVwiO1xuXG4gICAgICAgIGNvbnN0IGdhbWVPdmVyVUkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVPdmVyVUlQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZU92ZXJVSSk7XG4gICAgICAgIGdhbWVPdmVyVUkuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgfVxuXG4gICAgbG9hZExpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7Iux6riAIOqyjOyehCDrpqzsiqTtirjroZwg64+M7JWE6rCA6riwXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTaW5nbGVHYW1lTGlzdFwiKTtcbiAgICB9XG59XG4iXX0=