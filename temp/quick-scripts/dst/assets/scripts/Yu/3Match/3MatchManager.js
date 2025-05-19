
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
        // @property(cc.Label)
        // timerLabel: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Label)
        // scoreLabel: cc.Label = null;
        _this.timerDisplayPrefab = null;
        _this.scoreDisplayPrefab = null;
        _this.boardNode = null;
        _this.comboGauge = null;
        _this.feverSprite = null;
        _this.exitButton = null;
        _this.totalTime = 60;
        _this.currentTime = 60;
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
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        // 타이머 프리팹 인스턴스화
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimer();
        // 점수 프리팹 인스턴스화
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);
        // 나머지 초기화
        this.comboValue = 0;
        this.comboMax = 200;
        this.comboGauge.progress = 0;
        this.isFeverTime = false;
        this.feverSprite.active = false;
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
            return; // 피버타임중엔 게이지 안올라감감
        this.comboValue += amount;
        if (this.comboValue >= this.comboMax) {
            this.comboValue = this.comboMax;
            this.startFeverTime(); // 현재 게이지 값이 맥스값보다 크거나 같아지면 피버타임 메서드 실행
        }
        this.comboGauge.progress = this.comboValue / this.comboMax; // ui실행
    };
    ThreeMatchManager.prototype.startFeverTime = function () {
        var _this = this;
        this.isFeverTime = true;
        this.feverSprite.active = true; // 피버 UI 보여주기
        // 10초 후 종료
        this.scheduleOnce(function () {
            _this.endFeverTime();
        }, 10);
    };
    ThreeMatchManager.prototype.addMatchScore = function (matchCount) {
        var scoreToAdd = matchCount * 10;
        var finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
        this.updateScore(finalScore); // 콤보 게이지까지 처리됨
    };
    ThreeMatchManager.prototype.endFeverTime = function () {
        this.isFeverTime = false; // 피버타임 상태 false로
        this.comboValue = 0; // 현재 콤보 밸류, ui 초기화
        this.comboGauge.progress = 0;
        this.feverSprite.active = false; // 피버 UI 숨기기
    };
    ThreeMatchManager.prototype.onGameOver = function () {
        cc.log("게임 종료!");
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        GameState_1.default.score = this.score;
        GameState_1.default.gameId = "FruitPuzzle";
        cc.director.loadScene('GameOver');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxpRUFBNEQ7QUFHNUQ7SUFBK0MscUNBQVk7SUFBM0Q7UUFDSSxzQkFBc0I7UUFDdEIsK0JBQStCO1FBRm5DLHFFQXdJQztRQXBJRyxzQkFBc0I7UUFDdEIsK0JBQStCO1FBRy9CLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFJckMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHckIsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVksS0FBSyxDQUFDOztJQWdHekMsQ0FBQztJQTdGRyxpQ0FBSyxHQUFMO1FBQ0ksbUJBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDdEQsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixlQUFlO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQixVQUFVO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUlELHVDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxXQUFhLENBQUM7SUFDbkQsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUcsSUFBSSxDQUFDLEtBQU8sQ0FBQztRQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDhDQUFrQixHQUFsQixVQUFtQixNQUFjO1FBQzdCLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPLENBQUMsbUJBQW1CO1FBRWpELElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyx1Q0FBdUM7U0FDakU7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPO0lBQ3ZFLENBQUM7SUFFRCwwQ0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxhQUFhO1FBRzdDLFdBQVc7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSx5Q0FBYSxHQUFwQixVQUFxQixVQUFrQjtRQUN2QyxJQUFNLFVBQVUsR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ25DLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsZUFBZTtJQUM3QyxDQUFDO0lBR0Qsd0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsaUJBQWlCO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsbUJBQW1CO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxZQUFZO0lBRWpELENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQixtQkFBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztRQUN0RCxtQkFBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLG1CQUFTLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUNqQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBR0Qsb0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUEvSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpRUFDaUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpRUFDaUI7SUFJckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lEQUNTO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDUztJQXhCWixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXdJckM7SUFBRCx3QkFBQztDQXhJRCxBQXdJQyxDQXhJOEMsRUFBRSxDQUFDLFNBQVMsR0F3STFEO2tCQXhJb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFRocmVlTWF0Y2hCb2FyZCBmcm9tIFwiLi8zTWF0Y2hCb2FyZFwiO1xyXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi8uLi9Db250cm9sbGVyL0NvbW1vblVJL0dhbWVTdGF0ZVwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVNYXRjaE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgLy8gdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIC8vIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdGltZXJEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzY29yZURpc3BsYXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm9hcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBjb21ib0dhdWdlOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmZXZlclNwcml0ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGV4aXRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgdG90YWxUaW1lOiBudW1iZXIgPSA2MDtcclxuICAgIHByaXZhdGUgY3VycmVudFRpbWU6IG51bWJlciA9IDYwO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb21ib1ZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb21ib01heDogbnVtYmVyID0gMzAwO1xyXG4gICAgcHJpdmF0ZSBpc0ZldmVyVGltZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBHYW1lU3RhdGUubGFzdEdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuICAgICAgICAvLyDtg4DsnbTrqLgg7ZSE66as7Yy5IOyduOyKpO2EtOyKpO2ZlFxyXG4gICAgICAgIHRoaXMudGltZXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aW1lckRpc3BsYXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnRpbWVyTm9kZSk7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsID0gdGhpcy50aW1lck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lckxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lcigpO1xyXG5cclxuICAgICAgICAvLyDsoJDsiJgg7ZSE66as7Yy5IOyduOyKpO2EtOyKpO2ZlFxyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZURpc3BsYXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnNjb3JlTm9kZSk7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsID0gdGhpcy5zY29yZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTY29yZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgwKTtcclxuXHJcbiAgICAgICAgLy8g64KY66i47KeAIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21ib01heCA9IDIwMDtcclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZldmVyU3ByaXRlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdXBkYXRlVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZS0tO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5jdXJyZW50VGltZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBhbW91bnQ7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgICAgICB0aGlzLmluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmV2ZXJUaW1lKSByZXR1cm47IC8vIO2UvOuyhO2DgOyehOykkeyXlCDqsozsnbTsp4Ag7JWI7Jis65286rCQ6rCQXHJcbiAgICBcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgKz0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbWJvVmFsdWUgPj0gdGhpcy5jb21ib01heCkgeyBcclxuICAgICAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gdGhpcy5jb21ib01heDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEZldmVyVGltZSgpOyAvLyDtmITsnqwg6rKM7J207KeAIOqwkuydtCDrp6XsiqTqsJLrs7Tri6Qg7YGs6rGw64KYIOqwmeyVhOyngOuptCDtlLzrsoTtg4DsnoQg66mU7ISc65OcIOyLpO2WiVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSB0aGlzLmNvbWJvVmFsdWUgLyB0aGlzLmNvbWJvTWF4OyAvLyB1aeyLpO2WiVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0RmV2ZXJUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmV2ZXJTcHJpdGUuYWN0aXZlID0gdHJ1ZTsgLy8g7ZS867KEIFVJIOuztOyXrOyjvOq4sFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyAxMOy0iCDtm4Qg7KKF66OMXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEZldmVyVGltZSgpO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWF0Y2hTY29yZShtYXRjaENvdW50OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHNjb3JlVG9BZGQgPSBtYXRjaENvdW50ICogMTA7XHJcbiAgICBjb25zdCBmaW5hbFNjb3JlID0gdGhpcy5pc0ZldmVyVGltZSA/IHNjb3JlVG9BZGQgKiAyIDogc2NvcmVUb0FkZDtcclxuICAgIHRoaXMudXBkYXRlU2NvcmUoZmluYWxTY29yZSk7IC8vIOy9pOuztCDqsozsnbTsp4DquYzsp4Ag7LKY66as65CoXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBlbmRGZXZlclRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IGZhbHNlOyAvLyDtlLzrsoTtg4DsnoQg7IOB7YOcIGZhbHNl66GcXHJcbiAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gMDsgLy8g7ZiE7J6sIOy9pOuztCDrsLjrpZgsIHVpIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSBmYWxzZTsgLy8g7ZS867KEIFVJIOyIqOq4sOq4sFxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25HYW1lT3ZlcigpIHtcclxuICAgICAgICBjYy5sb2coXCLqsozsnoQg7KKF66OMIVwiKTtcclxuICAgICAgICBHYW1lU3RhdGUubGFzdEdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuICAgICAgICBHYW1lU3RhdGUuc2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdGF0ZS5nYW1lSWQgPSBcIkZydWl0UHV6emxlXCI7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lT3ZlcicpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkTGlzdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7Iux6riAIOqyjOyehCDrpqzsiqTtirjroZwg64+M7JWE6rCA6riwXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNpbmdsZUdhbWVMaXN0XCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==