
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
        this.timerLabel.string = "\uB0A8\uC740 \uC2DC\uAC04: " + this.currentTime;
    };
    ThreeMatchManager.prototype.updateScore = function (amount) {
        this.score += amount;
        this.scoreLabel.string = "\uD68D\uB4DD \uC810\uC218: " + this.score;
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
        ccclass("ThreeMatchManager")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQWdIQztRQTlHRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUdsQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUduQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUF5RnpDLENBQUM7SUF0Rkcsa0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFnQjtRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFHN0IsY0FBYztRQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUv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QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lEQUNTO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1M7SUFkVixpQkFBaUI7UUFEckMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO09BQ1IsaUJBQWlCLENBZ0hyQztJQUFELHdCQUFDO0NBaEhELEFBZ0hDLENBaEg4QyxFQUFFLENBQUMsU0FBUyxHQWdIMUQ7a0JBaEhvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgVGhyZWVNYXRjaEJvYXJkIGZyb20gXCIuLzNNYXRjaEJvYXJkXCI7XHJcblxyXG5AY2NjbGFzcyhcIlRocmVlTWF0Y2hNYW5hZ2VyXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTWF0Y2hNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGNvbWJvR2F1Z2U6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZldmVyTGFiZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNvbWJvVmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvbWJvTWF4OiBudW1iZXIgPSAzMDA7XHJcbiAgICBwcml2YXRlIGlzRmV2ZXJUaW1lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUoMCk7XHJcbiAgICAgICAgICAgIC8vIOy9pOuztCDqsozsnbTsp4Ag6rSA66CoIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21ib01heCA9IDIwMDsgLy8g7Zi57J2AIO2VhOyalOyXkCDrlLDrnbwg6rCSIOyEpOyglVxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IDA7XHJcblxyXG5cclxuICAgICAgICAvLyDtlLzrsoTtg4DsnoQgVUkg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmV2ZXJMYWJlbC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgbGFiZWwgPSB0aGlzLmZldmVyTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAvLyBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIC8vIGxhYmVsLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcclxuICAgICAgICAvLyBsYWJlbC5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LlNIUklOSzsgIC8vIOuEiOustCDquLjrqbQg7LaV7IaMXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUtLTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uR2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBg64Ko7J2AIOyLnOqwhDogJHt0aGlzLmN1cnJlbnRUaW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2NvcmUoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IGFtb3VudDtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYO2ajeuTnSDsoJDsiJg6ICR7dGhpcy5zY29yZX1gO1xyXG4gICAgICAgIC8vIOygkOyImCDtmo3rk53si5wg7L2k67O06rKM7J207KeAIOy2lOqwgCDrqZTshJzrk5wg7Iuk7ZaJICAgIFxyXG4gICAgICAgIHRoaXMuaW5jcmVhc2VDb21ib0dhdWdlKGFtb3VudCk7ICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFkZE1hdGNoU2NvcmUobWF0Y2hDb3VudDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3JlVG9BZGQgPSBtYXRjaENvdW50ICogMTA7IC8vIO2UvOuyhCDslYTri5Ag65WMIOygkOyImCDstpTqsIBcclxuICAgIFxyXG4gICAgICAgIC8vIO2UvOuyhO2DgOyehOydtOuptCDsoJDsiJggMuuwsOuhnCDshKTsoJVcclxuICAgICAgICBjb25zdCBmaW5hbFNjb3JlID0gdGhpcy5pc0ZldmVyVGltZSA/IHNjb3JlVG9BZGQgKiAyIDogc2NvcmVUb0FkZDtcclxuICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUoZmluYWxTY29yZSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBpbmNyZWFzZUNvbWJvR2F1Z2UoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ZldmVyVGltZSkgcmV0dXJuOyAvLyDtlLzrsoTtg4DsnoTspJHsl5Qg6rKM7J207KeAIOyViOyYrOudvOqwkOqwkFxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5jb21ib1ZhbHVlICs9IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5jb21ib1ZhbHVlID49IHRoaXMuY29tYm9NYXgpIHsgXHJcbiAgICAgICAgICAgIHRoaXMuY29tYm9WYWx1ZSA9IHRoaXMuY29tYm9NYXg7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRGZXZlclRpbWUoKTsgLy8g7ZiE7J6sIOqyjOydtOyngCDqsJLsnbQg66el7Iqk6rCS67O064ukIO2BrOqxsOuCmCDqsJnslYTsp4DrqbQg7ZS867KE7YOA7J6EIOuplOyEnOuTnCDsi6TtlolcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21ib0dhdWdlLnByb2dyZXNzID0gdGhpcy5jb21ib1ZhbHVlIC8gdGhpcy5jb21ib01heDsgLy8gdWnsi6TtlolcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEZldmVyVGltZSgpIHtcclxuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZldmVyTGFiZWwuYWN0aXZlID0gdHJ1ZTsgLy8g7ZS867KEIFVJIOuztOyXrOyjvOq4sFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyAxMOy0iCDtm4Qg7KKF66OMXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEZldmVyVGltZSgpO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZW5kRmV2ZXJUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSBmYWxzZTsgLy8g7ZS867KE7YOA7J6EIOyDge2DnCBmYWxzZeuhnFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSA9IDA7IC8vIO2YhOyerCDsvaTrs7Qg67C466WYLCB1aSDstIjquLDtmZRcclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuZmV2ZXJMYWJlbC5hY3RpdmUgPSBmYWxzZTsgLy8g7ZS867KEIFVJIOyIqOq4sOq4sFxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgb25HYW1lT3ZlcigpIHtcclxuICAgICAgICBjYy5sb2coXCLqsozsnoQg7KKF66OMIVwiKTtcclxuICAgICAgICAvLyDsnbTtm4Qg6rKM7J6EIOyiheujjCDsspjrpqwg7LaU6rCAIOqwgOuKpVxyXG4gICAgfVxyXG59XHJcbiJdfQ==