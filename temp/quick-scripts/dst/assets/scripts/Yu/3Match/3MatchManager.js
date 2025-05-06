
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
var ThreeMatchManager = /** @class */ (function (_super) {
    __extends(ThreeMatchManager, _super);
    function ThreeMatchManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timerLabel = null;
        _this.scoreLabel = null;
        _this.boardNode = null;
        _this.comboGauge = null;
        _this.feverLabel = null;
        _this.exitButton = null;
        _this.totalTime = 120;
        _this.currentTime = 120;
        _this.score = 0;
        _this.comboValue = 0;
        _this.comboMax = 300;
        _this.isFeverTime = false;
        return _this;
    }
    ThreeMatchManager.prototype.onLoad = function () {
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
    };
    ThreeMatchManager.prototype.updateTimer = function () {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            this.onGameOver();
        }
        this.timerLabel.string = "\uC2DC\uAC04: " + this.currentTime;
    };
    ThreeMatchManager.prototype.updateScore = function (amount) {
        this.score += amount;
        this.scoreLabel.string = "" + this.score;
        // 점수 획득시 콤보게이지 추가 메서드 실행    
        this.increaseComboGauge(amount);
    };
    ThreeMatchManager.prototype.addMatchScore = function (matchCount) {
        var scoreToAdd = matchCount * 10; // 피버 아닐 때 점수 추가
        // 피버타임이면 점수 2배로 설정
        var finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
        this.updateScore(finalScore);
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
        this.feverLabel.active = true; // 피버 UI 보여주기
        // 10초 후 종료
        this.scheduleOnce(function () {
            _this.endFeverTime();
        }, 10);
    };
    ThreeMatchManager.prototype.endFeverTime = function () {
        this.isFeverTime = false; // 피버타임 상태 false로
        this.comboValue = 0; // 현재 콤보 밸류, ui 초기화
        this.comboGauge.progress = 0;
        this.feverLabel.active = false; // 피버 UI 숨기기
    };
    ThreeMatchManager.prototype.onGameOver = function () {
        cc.log("게임 종료!");
        // 이후 게임 종료 처리 추가 가능
    };
    ThreeMatchManager.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기기");
        cc.director.loadScene('SingleGameList');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXdIQztRQXRIRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUdsQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUE4RnpDLENBQUM7SUEzRkcsa0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFnQjtRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFHN0IsY0FBYztRQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENB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QUM7SUFySEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lEQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5REFDUztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1M7SUFqQlosaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0F3SHJDO0lBQUQsd0JBQUM7Q0F4SEQsQUF3SEMsQ0F4SDhDLEVBQUUsQ0FBQyxTQUFTLEdBd0gxRDtrQkF4SG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBUaHJlZU1hdGNoQm9hcmQgZnJvbSBcIi4vM01hdGNoQm9hcmRcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTWF0Y2hNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGNvbWJvR2F1Z2U6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZldmVyTGFiZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBleGl0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNvbWJvVmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvbWJvTWF4OiBudW1iZXIgPSAzMDA7XHJcbiAgICBwcml2YXRlIGlzRmV2ZXJUaW1lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUoMCk7XHJcbiAgICAgICAgICAgIC8vIOy9pOuztCDqsozsnbTsp4Ag6rSA66CoIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21ib01heCA9IDIwMDsgLy8g7Zi57J2AIO2VhOyalOyXkCDrlLDrnbwg6rCSIOyEpOyglVxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IDA7XHJcblxyXG5cclxuICAgICAgICAvLyDtlLzrsoTtg4DsnoQgVUkg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmV2ZXJMYWJlbC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgbGFiZWwgPSB0aGlzLmZldmVyTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAvLyBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIC8vIGxhYmVsLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcclxuICAgICAgICAvLyBsYWJlbC5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LlNIUklOSzsgIC8vIOuEiOustCDquLjrqbQg7LaV7IaMXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUtLTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uR2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBg7Iuc6rCEOiAke3RoaXMuY3VycmVudFRpbWV9YDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY29yZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gYW1vdW50O1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbiAgICAgICAgLy8g7KCQ7IiYIO2ajeuTneyLnCDsvaTrs7TqsozsnbTsp4Ag7LaU6rCAIOuplOyEnOuTnCDsi6TtlokgICAgXHJcbiAgICAgICAgdGhpcy5pbmNyZWFzZUNvbWJvR2F1Z2UoYW1vdW50KTsgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWRkTWF0Y2hTY29yZShtYXRjaENvdW50OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcmVUb0FkZCA9IG1hdGNoQ291bnQgKiAxMDsgLy8g7ZS867KEIOyVhOuLkCDrlYwg7KCQ7IiYIOy2lOqwgFxyXG4gICAgXHJcbiAgICAgICAgLy8g7ZS867KE7YOA7J6E7J2066m0IOygkOyImCAy67Cw66GcIOyEpOyglVxyXG4gICAgICAgIGNvbnN0IGZpbmFsU2NvcmUgPSB0aGlzLmlzRmV2ZXJUaW1lID8gc2NvcmVUb0FkZCAqIDIgOiBzY29yZVRvQWRkO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZShmaW5hbFNjb3JlKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmV2ZXJUaW1lKSByZXR1cm47IC8vIO2UvOuyhO2DgOyehOykkeyXlCDqsozsnbTsp4Ag7JWI7Jis65286rCQ6rCQXHJcbiAgICBcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgKz0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbWJvVmFsdWUgPj0gdGhpcy5jb21ib01heCkgeyBcclxuICAgICAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gdGhpcy5jb21ib01heDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEZldmVyVGltZSgpOyAvLyDtmITsnqwg6rKM7J207KeAIOqwkuydtCDrp6XsiqTqsJLrs7Tri6Qg7YGs6rGw64KYIOqwmeyVhOyngOuptCDtlLzrsoTtg4DsnoQg66mU7ISc65OcIOyLpO2WiVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSB0aGlzLmNvbWJvVmFsdWUgLyB0aGlzLmNvbWJvTWF4OyAvLyB1aeyLpO2WiVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0RmV2ZXJUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmV2ZXJMYWJlbC5hY3RpdmUgPSB0cnVlOyAvLyDtlLzrsoQgVUkg67O07Jes7KO86riwXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIDEw7LSIIO2bhCDsooXro4xcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kRmV2ZXJUaW1lKCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbmRGZXZlclRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IGZhbHNlOyAvLyDtlLzrsoTtg4DsnoQg7IOB7YOcIGZhbHNl66GcXHJcbiAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gMDsgLy8g7ZiE7J6sIOy9pOuztCDrsLjrpZgsIHVpIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5mZXZlckxhYmVsLmFjdGl2ZSA9IGZhbHNlOyAvLyDtlLzrsoQgVUkg7Iio6riw6riwXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBvbkdhbWVPdmVyKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIuqyjOyehCDsooXro4whXCIpO1xyXG4gICAgICAgIC8vIOydtO2bhCDqsozsnoQg7KKF66OMIOyymOumrCDstpTqsIAg6rCA64qlXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZExpc3QoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyLseq4gCDqsozsnoQg66as7Iqk7Yq466GcIOuPjOyVhOqwgOq4sOq4sFwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1NpbmdsZUdhbWVMaXN0Jyk7XHJcbiAgICB9XHJcbn1cclxuIl19