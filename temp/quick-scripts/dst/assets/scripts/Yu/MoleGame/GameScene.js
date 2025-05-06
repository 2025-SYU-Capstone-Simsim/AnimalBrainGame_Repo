
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Yu/MoleGame/GameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXE1vbGVHYW1lXFxHYW1lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF3R0M7UUF0R0csWUFBWTtRQUNPLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTdDLGNBQWM7UUFDTyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUVsRCxZQUFZO1FBQ1EsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFeEMsZUFBUyxHQUFjLEVBQUUsQ0FBQyxDQUFFLGFBQWE7UUFDekMsV0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFFLEtBQUs7UUFDekIsV0FBSyxHQUFXLEVBQUUsQ0FBQyxDQUFFLFVBQVU7O0lBcUYzQyxDQUFDO0lBbkZHLFFBQVE7SUFDUix5QkFBSyxHQUFMO1FBQ0ksZUFBZTtRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ2pELENBQUM7UUFFRix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztR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LENBQUMsSUFBSSxDQUFDO2dEQUEyQjtJQUMxQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFBMkI7SUFDMUI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQTJCO0lBQzFCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUEyQjtJQUMxQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFBMkI7SUFHeEI7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQThCO0lBRzlCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUE2QjtJQUM1QjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFBNkI7SUFmL0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdHN0I7SUFBRCxnQkFBQztDQXhHRCxBQXdHQyxDQXhHc0MsRUFBRSxDQUFDLFNBQVMsR0F3R2xEO2tCQXhHb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyDqtazrqY0g64W465OcIOyEpOyglSBcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBtb2xlSG9sZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIG1vbGVIb2xlMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgbW9sZUhvbGUzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBtb2xlSG9sZTQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIG1vbGVIb2xlNTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgbW9sZUhvbGU2OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyDrkZDrjZTsp4Ag7ZSE66as7Yy5IOyEpOygleyglVxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgbW9sZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyDsoJDsiJgg67CPIO2DgOydtOuouCBcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtb2xlSG9sZXM6IGNjLk5vZGVbXSA9IFtdOyAgLy8g6rWs66mN7J2EIOyggOyepe2VoCDrsLDsl7RcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7ICAvLyDsoJDsiJhcclxuICAgIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDMwOyAgLy8g7YOA7J2066i4IDMw7LSIXHJcblxyXG4gICAgLy8g6rKM7J6EIOyLnOyekVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g6rWs66mNIOuFuOuTnCDrsLDsl7Tsl5Ag7LaU6rCAXHJcbiAgICAgICAgdGhpcy5tb2xlSG9sZXMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMubW9sZUhvbGUxLCB0aGlzLm1vbGVIb2xlMiwgdGhpcy5tb2xlSG9sZTMsIFxyXG4gICAgICAgICAgICB0aGlzLm1vbGVIb2xlNCwgdGhpcy5tb2xlSG9sZTUsIHRoaXMubW9sZUhvbGU2XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8g6rKM7J6EIOyLnOyekSDsi5wsIO2DgOydtOuouOyZgCDsoJDsiJgg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDMwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVMYWJlbCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG5cclxuICAgICAgICAvLyDtg4DsnbTrqLgg6rCQ7IaMICgx7LSI7JSpKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5kZWNyZWFzZVRpbWVyLCAxKTtcclxuXHJcbiAgICAgICAgLy8g7LKrIOuyiOynuCDrkZDrjZTsp4Ag7KCgIFxyXG4gICAgICAgIHRoaXMuc3Bhd25Nb2xlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIO2DgOydtOuouCDqsJDshoxcclxuICAgIGRlY3JlYXNlVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lci0tO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50aW1lciA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7YOA7J2066i4ICDsl4XrjbDsnbTtirhcclxuICAgIHVwZGF0ZVRpbWVyTGFiZWwoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGBUaW1lOiAke3RoaXMudGltZXJ9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsoJDsiJgg7JeF642w7J207Yq4XHJcbiAgICB1cGRhdGVTY29yZUxhYmVsKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgU2NvcmU6ICR7dGhpcy5zY29yZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOuRkOuNlOyngCDrnpzrjaQg7KCgIFxyXG4gICAgc3Bhd25Nb2xlcygpIHtcclxuICAgICAgICAvLyDsnbzsoJUg7Iuc6rCE66eI64ukIOuRkOuNlOyngCDsg53shLEgXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUhvbGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubW9sZUhvbGVzLmxlbmd0aCk7ICAvLyDrnpzrjaQg7J24642x7IqkXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSG9sZSA9IHRoaXMubW9sZUhvbGVzW3JhbmRvbUhvbGVJbmRleF07ICAvLyDrnpzrjaTsnLzroZwg7ISg7YOd65CcIOq1rOupjVxyXG5cclxuICAgICAgICAgICAgLy8g65GQ642U7KeAIOyDneyEsVxyXG4gICAgICAgICAgICBjb25zdCBtb2xlID0gY2MuaW5zdGFudGlhdGUodGhpcy5tb2xlUHJlZmFiKTtcclxuICAgICAgICAgICAgbW9sZS5uYW1lID0gXCJNb2xlXCI7ICBcclxuICAgICAgICAgICAgbW9sZS5hY3RpdmUgPSB0cnVlOyAgLy8g65GQ642U7KeAIO2ZnOyEse2ZlFxyXG4gICAgICAgICAgICBzZWxlY3RlZEhvbGUuYWRkQ2hpbGQobW9sZSk7ICAvLyDqtazrqY3sl5Ag65GQ642U7KeAIOy2lOqwgFxyXG5cclxuICAgICAgICAgICAgLy8g65GQ642U7KeAIOyeoeq4sCDtgbTrpq0g7J2067Kk7Yq4IOyymOumrFxyXG4gICAgICAgICAgICBtb2xlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbk1vbGVDbGljaywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyDrkZDrjZTsp4Ag7Iio6riw6riwICgx7LSIIO2bhClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9sZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMSk7ICAvLyAx7LSIIO2bhCDrkZDrjZTsp4Ag7Iio6riw6riwXHJcbiAgICAgICAgfSwgMC41LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUik7ICAvLyAwLjXstIjrp4jri6Qg65GQ642U7KeAIO2VmOuCmOyUqSDstpTqsIBcclxuICAgIH1cclxuXHJcbiAgICAvLyDrkZDrjZTsp4Ag7J6h6riwIO2BtOumrSDsnbTrsqTtirgg7KCV7J2YXHJcbiAgICBvbk1vbGVDbGljayhldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IG1vbGUgPSBldmVudC50YXJnZXQ7ICAvLyDtgbTrpq3rkJwg65GQ642U7KeAXHJcblxyXG4gICAgICAgIC8vIOydtOuvuCDtgbTrpq3rkJwg65GQ642U7KeA64qUIOuLpOyLnCDtgbTrpq3tlaAg7IiYIOyXhuuPhOuhnSDsspjrpqxcclxuICAgICAgICBpZiAoIW1vbGUuYWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIOuRkOuNlOyngCDtgbTrpq0g7IucIOygkOyImCDspp3qsIBcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZUxhYmVsKCk7XHJcblxyXG4gICAgICAgIC8vIOuRkOuNlOyngCDtmZzshLHtmZQg64GE6riwKOyIqOq4sOq4sClcclxuICAgICAgICBtb2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOqyjOyehCDsooXro4xcclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVPdmVyU2NlbmVcIik7ICAvLyDqsozsnoQg7Jik67KEIO2bhCDqsozsnoQg7Jik67KEIOyUrOycvOuhnCDsoITtmZhcclxuICAgIH1cclxufVxyXG4iXX0=