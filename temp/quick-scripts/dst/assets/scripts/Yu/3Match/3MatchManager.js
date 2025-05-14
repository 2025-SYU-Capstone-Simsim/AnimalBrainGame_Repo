
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
        cc.director.loadScene('GameOver');
    };
    ThreeMatchManager.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene("GameOver");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxpRUFBNEQ7QUFHNUQ7SUFBK0MscUNBQVk7SUFBM0Q7UUFDSSxzQkFBc0I7UUFDdEIsK0JBQStCO1FBRm5DLHFFQXFJQztRQWpJRyxzQkFBc0I7UUFDdEIsK0JBQStCO1FBRy9CLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFJckMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHckIsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVksS0FBSyxDQUFDOztJQTZGekMsQ0FBQztJQTFGRyxpQ0FBSyxHQUFMO1FBQ0ksZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFD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UztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1M7SUF4QlosaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FxSXJDO0lBQUQsd0JBQUM7Q0FySUQsQUFxSUMsQ0FySThDLEVBQUUsQ0FBQyxTQUFTLEdBcUkxRDtrQkFySW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBUaHJlZU1hdGNoQm9hcmQgZnJvbSBcIi4vM01hdGNoQm9hcmRcIjtcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlci9Db21tb25VSS9HYW1lU3RhdGVcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTWF0Y2hNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIC8vIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICAvLyBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRpbWVyRGlzcGxheVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2NvcmVEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJvYXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgY29tYm9HYXVnZTogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmV2ZXJTcHJpdGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBleGl0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gNjA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSA2MDtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29tYm9WYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY29tYm9NYXg6IG51bWJlciA9IDMwMDtcclxuICAgIHByaXZhdGUgaXNGZXZlclRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g7YOA7J2066i4IO2UhOumrO2MuSDsnbjsiqTthLTsiqTtmZRcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGltZXJEaXNwbGF5UHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy50aW1lck5vZGUpO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbCA9IHRoaXMudGltZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiVGltZXJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIoKTtcclxuXHJcbiAgICAgICAgLy8g7KCQ7IiYIO2UhOumrO2MuSDsnbjsiqTthLTsiqTtmZRcclxuICAgICAgICB0aGlzLnNjb3JlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2NvcmVEaXNwbGF5UHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zY29yZU5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbCA9IHRoaXMuc2NvcmVOb2RlLmdldENoaWxkQnlOYW1lKFwiU2NvcmVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUoMCk7XHJcblxyXG4gICAgICAgIC8vIOuCmOuouOyngCDstIjquLDtmZRcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY29tYm9NYXggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5jb21ib0dhdWdlLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxudXBkYXRlVGltZXIoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRUaW1lLS07XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIpO1xyXG4gICAgICAgIHRoaXMub25HYW1lT3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLmN1cnJlbnRUaW1lfWA7XHJcbn1cclxuXHJcbnVwZGF0ZVNjb3JlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNjb3JlICs9IGFtb3VudDtcclxuICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbiAgICB0aGlzLmluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQpO1xyXG59XHJcblxyXG4gICAgaW5jcmVhc2VDb21ib0dhdWdlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGZXZlclRpbWUpIHJldHVybjsgLy8g7ZS867KE7YOA7J6E7KSR7JeUIOqyjOydtOyngCDslYjsmKzrnbzqsJDqsJBcclxuICAgIFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tYm9WYWx1ZSA+PSB0aGlzLmNvbWJvTWF4KSB7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSB0aGlzLmNvbWJvTWF4O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RmV2ZXJUaW1lKCk7IC8vIO2YhOyerCDqsozsnbTsp4Ag6rCS7J20IOunpeyKpOqwkuuztOuLpCDtgazqsbDrgpgg6rCZ7JWE7KeA66m0IO2UvOuyhO2DgOyehCDrqZTshJzrk5wg7Iuk7ZaJXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IHRoaXMuY29tYm9WYWx1ZSAvIHRoaXMuY29tYm9NYXg7IC8vIHVp7Iuk7ZaJXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRGZXZlclRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSB0cnVlOyAvLyDtlLzrsoQgVUkg67O07Jes7KO86riwXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIDEw7LSIIO2bhCDsooXro4xcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kRmV2ZXJUaW1lKCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYXRjaFNjb3JlKG1hdGNoQ291bnQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc2NvcmVUb0FkZCA9IG1hdGNoQ291bnQgKiAxMDtcclxuICAgIGNvbnN0IGZpbmFsU2NvcmUgPSB0aGlzLmlzRmV2ZXJUaW1lID8gc2NvcmVUb0FkZCAqIDIgOiBzY29yZVRvQWRkO1xyXG4gICAgdGhpcy51cGRhdGVTY29yZShmaW5hbFNjb3JlKTsgLy8g7L2k67O0IOqyjOydtOyngOq5jOyngCDsspjrpqzrkKhcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGVuZEZldmVyVGltZSgpIHtcclxuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gZmFsc2U7IC8vIO2UvOuyhO2DgOyehCDsg4Htg5wgZmFsc2XroZxcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSAwOyAvLyDtmITsnqwg7L2k67O0IOuwuOulmCwgdWkg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5jb21ib0dhdWdlLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLmZldmVyU3ByaXRlLmFjdGl2ZSA9IGZhbHNlOyAvLyDtlLzrsoQgVUkg7Iio6riw6riwXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbm9uR2FtZU92ZXIoKSB7XHJcbiAgICBjYy5sb2coXCLqsozsnoQg7KKF66OMIVwiKTtcclxuICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lT3ZlcicpO1xyXG59XHJcblxyXG5cclxuICAgIGxvYWRMaXN0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsi7HquIAg6rKM7J6EIOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLBcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZU92ZXJcIik7XHJcbiAgICB9XHJcbn1cclxuIl19