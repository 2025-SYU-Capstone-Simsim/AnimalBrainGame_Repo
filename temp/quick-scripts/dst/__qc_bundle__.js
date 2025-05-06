
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
require('./assets/scripts/Yu/3Match/3MatchBoard');
require('./assets/scripts/Yu/3Match/3MatchManager');
require('./assets/scripts/Yu/3Match/ThreeMatchManager');
require('./assets/scripts/Yu/3Match/Tile');
require('./assets/scripts/Yu/MoleGame/GameScene');

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
var _3MatchManager_1 = require("./3MatchManager");
var Tile_1 = require("./Tile");
var ThreeMatchBoard = /** @class */ (function (_super) {
    __extends(ThreeMatchBoard, _super);
    function ThreeMatchBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tilePrefab = null;
        _this.gameManager = null;
        _this.boardSize = 8; // 항상 8x8 고정
        _this.tileSize = 100;
        _this.gap = 5;
        _this.board = [];
        _this.isSwapping = false;
        return _this;
    }
    ThreeMatchBoard.prototype.start = function () {
        this.node.color = cc.Color.GRAY;
        this.createBoard();
    };
    ThreeMatchBoard.prototype.createBoard = function () {
        this.board = [];
        var totalTileSize = this.tileSize + this.gap;
        var startX = -(this.boardSize - 1) * totalTileSize / 2;
        var startY = (this.boardSize - 1) * totalTileSize / 2;
        for (var row = 0; row < this.boardSize; row++) {
            this.board[row] = [];
            for (var col = 0; col < this.boardSize; col++) {
                var tileNode = cc.instantiate(this.tilePrefab);
                tileNode.parent = this.node;
                var posX = startX + col * totalTileSize;
                var posY = startY - row * totalTileSize;
                tileNode.setPosition(posX, posY);
                var tile = tileNode.getComponent(Tile_1.default);
                tile.row = row;
                tile.col = col;
                var bannedColors = [];
                if (col >= 2) {
                    var left1 = this.board[row][col - 1];
                    var left2 = this.board[row][col - 2];
                    if (left1 && left2 && left1.node.color.equals(left2.node.color)) {
                        bannedColors.push(left1.node.color);
                    }
                }
                if (row >= 2) {
                    var top1 = this.board[row - 1][col];
                    var top2 = this.board[row - 2][col];
                    if (top1 && top2 && top1.node.color.equals(top2.node.color)) {
                        bannedColors.push(top1.node.color);
                    }
                }
                tile.setRandomColorExcluding(bannedColors);
                tile.addOutline();
                this.board[row][col] = tile;
            }
        }
    };
    ThreeMatchBoard.prototype.colorsAreEqual = function (c1, c2) {
        return c1.r === c2.r && c1.g === c2.g && c1.b === c2.b;
    };
    ThreeMatchBoard.prototype.checkAndExplodeMatches = function () {
        var _this = this;
        var matchedTiles = [];
        for (var row = 0; row < this.boardSize; row++) {
            for (var col = 0; col < this.boardSize; col++) {
                var tile = this.board[row][col];
                if (!tile)
                    continue;
                // 가로 검사
                if (col <= this.boardSize - 3) {
                    var t1 = this.board[row][col + 1];
                    var t2 = this.board[row][col + 2];
                    if (t1 && t2 && this.colorsAreEqual(tile.node.color, t1.node.color) && this.colorsAreEqual(tile.node.color, t2.node.color)) {
                        console.log("\uAC00\uB85C \uB9E4\uCE6D \uBC1C\uACAC! (" + row + ", " + col + ")");
                        matchedTiles.push(tile, t1, t2);
                    }
                }
                // 세로 검사
                if (row <= this.boardSize - 3) {
                    var t1 = this.board[row + 1][col];
                    var t2 = this.board[row + 2][col];
                    if (t1 && t2 && this.colorsAreEqual(tile.node.color, t1.node.color) && this.colorsAreEqual(tile.node.color, t2.node.color)) {
                        console.log("\uC138\uB85C \uB9E4\uCE6D \uBC1C\uACAC! (" + row + ", " + col + ")");
                        matchedTiles.push(tile, t1, t2);
                    }
                }
            }
        }
        matchedTiles = Array.from(new Set(matchedTiles));
        if (matchedTiles.length > 0) {
            console.log(matchedTiles.length + "\uAC1C \uD0C0\uC77C \uD3ED\uBC1C!");
            if (this.gameManager) {
                this.gameManager.addMatchScore(matchedTiles.length);
            }
            for (var _i = 0, matchedTiles_1 = matchedTiles; _i < matchedTiles_1.length; _i++) {
                var tile = matchedTiles_1[_i];
                tile.explode();
                this.board[tile.row][tile.col] = null;
            }
            this.scheduleOnce(function () {
                _this.fillEmptySpaces();
                _this.scheduleOnce(function () {
                    _this.spawnNewTiles();
                    _this.scheduleOnce(function () {
                        _this.checkAndExplodeMatches();
                    }, 0.3);
                }, 0.3);
            }, 0.3);
        }
    };
    ThreeMatchBoard.prototype.swapTiles = function (tileA, tileB) {
        var _this = this;
        if (this.isSwapping)
            return;
        var rowDiff = Math.abs(tileA.row - tileB.row);
        var colDiff = Math.abs(tileA.col - tileB.col);
        if (!((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1))) {
            console.log(" 인접한 타일이 아닙니다! 교환 불가");
            return;
        }
        this.isSwapping = true;
        var tempRow = tileA.row;
        var tempCol = tileA.col;
        this.board[tileA.row][tileA.col] = tileB;
        this.board[tileB.row][tileB.col] = tileA;
        tileA.row = tileB.row;
        tileA.col = tileB.col;
        tileB.row = tempRow;
        tileB.col = tempCol;
        var moveA = cc.moveTo(0.2, tileB.node.getPosition());
        var moveB = cc.moveTo(0.2, tileA.node.getPosition());
        cc.tween(tileA.node)
            .then(moveA)
            .start();
        cc.tween(tileB.node)
            .then(moveB)
            .call(function () {
            _this.checkAndExplodeMatches();
            _this.isSwapping = false;
        })
            .start();
    };
    ThreeMatchBoard.prototype.fillEmptySpaces = function () {
        for (var col = 0; col < this.boardSize; col++) {
            for (var row = this.boardSize - 1; row >= 0; row--) {
                if (!this.board[row][col]) {
                    for (var upperRow = row - 1; upperRow >= 0; upperRow--) {
                        if (this.board[upperRow][col]) {
                            var fallingTile = this.board[upperRow][col];
                            this.board[row][col] = fallingTile;
                            this.board[upperRow][col] = null;
                            fallingTile.row = row;
                            fallingTile.col = col;
                            var targetPos = this.getTilePosition(row, col);
                            cc.tween(fallingTile.node)
                                .to(0.2, { position: targetPos })
                                .start();
                            break;
                        }
                    }
                }
            }
        }
    };
    ThreeMatchBoard.prototype.spawnNewTiles = function () {
        for (var row = 0; row < this.boardSize; row++) {
            for (var col = 0; col < this.boardSize; col++) {
                if (!this.board[row][col]) {
                    var tileNode = cc.instantiate(this.tilePrefab);
                    tileNode.parent = this.node;
                    var pos = this.getTilePosition(row, col);
                    tileNode.setPosition(pos);
                    var tile = tileNode.getComponent(Tile_1.default);
                    tile.row = row;
                    tile.col = col;
                    tile.setRandomColor();
                    tile.addOutline();
                    this.board[row][col] = tile;
                }
            }
        }
    };
    ThreeMatchBoard.prototype.getTilePosition = function (row, col) {
        var totalTileSize = this.tileSize + this.gap;
        var startX = -(this.boardSize - 1) * totalTileSize / 2;
        var startY = (this.boardSize - 1) * totalTileSize / 2;
        var x = startX + col * totalTileSize;
        var y = startY - row * totalTileSize;
        return new cc.Vec3(x, y, 0);
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
    return ThreeMatchBoard;
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsa0RBQWdEO0FBQ2hELCtCQUEwQjtBQUcxQjtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTROQztRQTNOd0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDckIsaUJBQVcsR0FBc0IsSUFBSSxDQUFDO1FBRTNELGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBRSxZQUFZO1FBQ3BDLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFDdkIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUVoQixXQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGdCQUFVLEdBQVksS0FBSyxDQUFDOztJQW1OeEMsQ0FBQztJQWpORywrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFFdEQsS0FBSyxJQUFJLEdBQUcsR0FBRyxD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QUFHLENBQUMsQ0FBQyxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUM7UUFFckMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBdk5vQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFBOEI7SUFDckI7UUFBNUIsUUFBUSxDQUFDLHdCQUFpQixDQUFDO3dEQUF1QztJQUZsRCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNE5uQztJQUFELHNCQUFDO0NBNU5ELEFBNE5DLENBNU40QyxFQUFFLENBQUMsU0FBUyxHQTROeEQ7a0JBNU5vQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFRocmVlTWF0Y2hNYW5hZ2VyIGZyb20gXCIuLzNNYXRjaE1hbmFnZXJcIjtcclxuaW1wb3J0IFRpbGUgZnJvbSBcIi4vVGlsZVwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVNYXRjaEJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIHRpbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoVGhyZWVNYXRjaE1hbmFnZXIpIGdhbWVNYW5hZ2VyOiBUaHJlZU1hdGNoTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBib2FyZFNpemU6IG51bWJlciA9IDg7ICAvLyDtla3sg4EgOHg4IOqzoOyglVxyXG4gICAgcHJpdmF0ZSB0aWxlU2l6ZTogbnVtYmVyID0gMTAwO1xyXG4gICAgcHJpdmF0ZSBnYXA6IG51bWJlciA9IDU7XHJcblxyXG4gICAgcHJpdmF0ZSBib2FyZDogVGlsZVtdW10gPSBbXTtcclxuICAgIHByaXZhdGUgaXNTd2FwcGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCb2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcclxuICAgICAgICBsZXQgdG90YWxUaWxlU2l6ZSA9IHRoaXMudGlsZVNpemUgKyB0aGlzLmdhcDtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLSh0aGlzLmJvYXJkU2l6ZSAtIDEpICogdG90YWxUaWxlU2l6ZSAvIDI7XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9ICh0aGlzLmJvYXJkU2l6ZSAtIDEpICogdG90YWxUaWxlU2l6ZSAvIDI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuYm9hcmRTaXplOyByb3crKykge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5ib2FyZFNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGlsZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpbGVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGlsZU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gc3RhcnRYICsgY29sICogdG90YWxUaWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NZID0gc3RhcnRZIC0gcm93ICogdG90YWxUaWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRpbGVOb2RlLnNldFBvc2l0aW9uKHBvc1gsIHBvc1kpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGlsZU5vZGUuZ2V0Q29tcG9uZW50KFRpbGUpO1xyXG4gICAgICAgICAgICAgICAgdGlsZS5yb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmNvbCA9IGNvbDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYmFubmVkQ29sb3JzOiBjYy5Db2xvcltdID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdDEgPSB0aGlzLmJvYXJkW3Jvd11bY29sIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnQyID0gdGhpcy5ib2FyZFtyb3ddW2NvbCAtIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0MSAmJiBsZWZ0MiAmJiBsZWZ0MS5ub2RlLmNvbG9yLmVxdWFscyhsZWZ0Mi5ub2RlLmNvbG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5uZWRDb2xvcnMucHVzaChsZWZ0MS5ub2RlLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocm93ID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9wMSA9IHRoaXMuYm9hcmRbcm93IC0gMV1bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9wMiA9IHRoaXMuYm9hcmRbcm93IC0gMl1bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9wMSAmJiB0b3AyICYmIHRvcDEubm9kZS5jb2xvci5lcXVhbHModG9wMi5ub2RlLmNvbG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5uZWRDb2xvcnMucHVzaCh0b3AxLm5vZGUuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aWxlLnNldFJhbmRvbUNvbG9yRXhjbHVkaW5nKGJhbm5lZENvbG9ycyk7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmFkZE91dGxpbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IHRpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xvcnNBcmVFcXVhbChjMTogY2MuQ29sb3IsIGMyOiBjYy5Db2xvcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjMS5yID09PSBjMi5yICYmIGMxLmcgPT09IGMyLmcgJiYgYzEuYiA9PT0gYzIuYjtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0FuZEV4cGxvZGVNYXRjaGVzKCkge1xyXG4gICAgICAgIGxldCBtYXRjaGVkVGlsZXM6IFRpbGVbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmJvYXJkU2l6ZTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5ib2FyZFNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aWxlKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDqsIDroZwg6rKA7IKsXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sIDw9IHRoaXMuYm9hcmRTaXplIC0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0MSA9IHRoaXMuYm9hcmRbcm93XVtjb2wgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdDIgPSB0aGlzLmJvYXJkW3Jvd11bY29sICsgMl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0MSAmJiB0MiAmJiB0aGlzLmNvbG9yc0FyZUVxdWFsKHRpbGUubm9kZS5jb2xvciwgdDEubm9kZS5jb2xvcikgJiYgdGhpcy5jb2xvcnNBcmVFcXVhbCh0aWxlLm5vZGUuY29sb3IsIHQyLm5vZGUuY29sb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDqsIDroZwg66ek7LmtIOuwnOqyrCEgKCR7cm93fSwgJHtjb2x9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkVGlsZXMucHVzaCh0aWxlLCB0MSwgdDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDshLjroZwg6rKA7IKsXHJcbiAgICAgICAgICAgICAgICBpZiAocm93IDw9IHRoaXMuYm9hcmRTaXplIC0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0MSA9IHRoaXMuYm9hcmRbcm93ICsgMV1bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdDIgPSB0aGlzLmJvYXJkW3JvdyArIDJdW2NvbF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0MSAmJiB0MiAmJiB0aGlzLmNvbG9yc0FyZUVxdWFsKHRpbGUubm9kZS5jb2xvciwgdDEubm9kZS5jb2xvcikgJiYgdGhpcy5jb2xvcnNBcmVFcXVhbCh0aWxlLm5vZGUuY29sb3IsIHQyLm5vZGUuY29sb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDshLjroZwg66ek7LmtIOuwnOqyrCEgKCR7cm93fSwgJHtjb2x9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkVGlsZXMucHVzaCh0aWxlLCB0MSwgdDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0Y2hlZFRpbGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KG1hdGNoZWRUaWxlcykpO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hlZFRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bWF0Y2hlZFRpbGVzLmxlbmd0aH3qsJwg7YOA7J28IO2PreuwnCFgKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuYWRkTWF0Y2hTY29yZShtYXRjaGVkVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgbWF0Y2hlZFRpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmV4cGxvZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbdGlsZS5yb3ddW3RpbGUuY29sXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEVtcHR5U3BhY2VzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bk5ld1RpbGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQW5kRXhwbG9kZU1hdGNoZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcFRpbGVzKHRpbGVBOiBUaWxlLCB0aWxlQjogVGlsZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3dhcHBpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHJvd0RpZmYgPSBNYXRoLmFicyh0aWxlQS5yb3cgLSB0aWxlQi5yb3cpO1xyXG4gICAgICAgIGxldCBjb2xEaWZmID0gTWF0aC5hYnModGlsZUEuY29sIC0gdGlsZUIuY29sKTtcclxuXHJcbiAgICAgICAgaWYgKCEoKHJvd0RpZmYgPT09IDEgJiYgY29sRGlmZiA9PT0gMCkgfHwgKHJvd0RpZmYgPT09IDAgJiYgY29sRGlmZiA9PT0gMSkpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIOyduOygke2VnCDtg4DsnbzsnbQg7JWE64uZ64uI64ukISDqtZDtmZgg67aI6rCAXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTd2FwcGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB0ZW1wUm93ID0gdGlsZUEucm93O1xyXG4gICAgICAgIGxldCB0ZW1wQ29sID0gdGlsZUEuY29sO1xyXG5cclxuICAgICAgICB0aGlzLmJvYXJkW3RpbGVBLnJvd11bdGlsZUEuY29sXSA9IHRpbGVCO1xyXG4gICAgICAgIHRoaXMuYm9hcmRbdGlsZUIucm93XVt0aWxlQi5jb2xdID0gdGlsZUE7XHJcblxyXG4gICAgICAgIHRpbGVBLnJvdyA9IHRpbGVCLnJvdztcclxuICAgICAgICB0aWxlQS5jb2wgPSB0aWxlQi5jb2w7XHJcbiAgICAgICAgdGlsZUIucm93ID0gdGVtcFJvdztcclxuICAgICAgICB0aWxlQi5jb2wgPSB0ZW1wQ29sO1xyXG5cclxuICAgICAgICBsZXQgbW92ZUEgPSBjYy5tb3ZlVG8oMC4yLCB0aWxlQi5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGxldCBtb3ZlQiA9IGNjLm1vdmVUbygwLjIsIHRpbGVBLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRpbGVBLm5vZGUpXHJcbiAgICAgICAgICAgIC50aGVuKG1vdmVBKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGlsZUIubm9kZSlcclxuICAgICAgICAgICAgLnRoZW4obW92ZUIpXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbmRFeHBsb2RlTWF0Y2hlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N3YXBwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxFbXB0eVNwYWNlcygpIHtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmJvYXJkU2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gdGhpcy5ib2FyZFNpemUgLSAxOyByb3cgPj0gMDsgcm93LS0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtyb3ddW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1cHBlclJvdyA9IHJvdyAtIDE7IHVwcGVyUm93ID49IDA7IHVwcGVyUm93LS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbdXBwZXJSb3ddW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxpbmdUaWxlID0gdGhpcy5ib2FyZFt1cHBlclJvd11bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gZmFsbGluZ1RpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3VwcGVyUm93XVtjb2xdID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxsaW5nVGlsZS5yb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxsaW5nVGlsZS5jb2wgPSBjb2w7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy5nZXRUaWxlUG9zaXRpb24ocm93LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZmFsbGluZ1RpbGUubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduTmV3VGlsZXMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ib2FyZFNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuYm9hcmRTaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW3Jvd11bY29sXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0VGlsZVBvc2l0aW9uKHJvdywgY29sKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZU5vZGUuZ2V0Q29tcG9uZW50KFRpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUucm93ID0gcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY29sID0gY29sO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aWxlLnNldFJhbmRvbUNvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRPdXRsaW5lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gdGlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlUG9zaXRpb24ocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogY2MuVmVjMyB7XHJcbiAgICAgICAgbGV0IHRvdGFsVGlsZVNpemUgPSB0aGlzLnRpbGVTaXplICsgdGhpcy5nYXA7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0odGhpcy5ib2FyZFNpemUgLSAxKSAqIHRvdGFsVGlsZVNpemUgLyAyO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAodGhpcy5ib2FyZFNpemUgLSAxKSAqIHRvdGFsVGlsZVNpemUgLyAyO1xyXG5cclxuICAgICAgICBsZXQgeCA9IHN0YXJ0WCArIGNvbCAqIHRvdGFsVGlsZVNpemU7XHJcbiAgICAgICAgbGV0IHkgPSBzdGFydFkgLSByb3cgKiB0b3RhbFRpbGVTaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzMoeCwgeSwgMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG59XHJcbiJdfQ==
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
var _3MatchBoard_1 = require("./3MatchBoard");
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null; // 기존 sprite 속성 복구
        _this.explosionPrefab = null;
        _this.colors = [
            cc.Color.RED, cc.Color.BLUE, cc.Color.GREEN, cc.Color.YELLOW, cc.Color.ORANGE
        ];
        _this.row = 0;
        _this.col = 0;
        return _this;
    }
    Tile_1 = Tile;
    // 노드가 씬에 생성되면서 초기화 단계.
    // 이 시점에 컴포넌트, 스프라이트, 이벤트 리스너 등을 등록
    Tile.prototype.onLoad = function () {
        // 스프라이트 컴포넌트가 없으면 추가
        if (!this.sprite) {
            this.sprite = this.node.addComponent(cc.Sprite);
        }
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTileClicked, this);
    };
    Tile.prototype.setRandomColor = function () {
        var randomIndex = Math.floor(Math.random() * this.colors.length);
        this.node.color = this.colors[randomIndex];
    };
    Tile.prototype.setRandomColorExcluding = function (excludeColors) {
        var availableColors = this.colors.filter(function (color) {
            return !excludeColors.some(function (ex) { return ex.equals(color); });
        });
        // 혹시 모든 색이 제외되면 그냥 랜덤으로 (안전장치)
        if (availableColors.length === 0) {
            availableColors = this.colors;
        }
        var randomIndex = Math.floor(Math.random() * availableColors.length);
        var color = availableColors[randomIndex];
        this.node.color = color;
    };
    Tile.prototype.addOutline = function () {
        // 기존에 있던 Graphics가 있으면 제거
        var existingGraphics = this.node.getComponent(cc.Graphics);
        if (existingGraphics) {
            this.node.removeComponent(existingGraphics);
        }
        // 새 Graphics 노드 생성
        var graphicsNode = new cc.Node();
        graphicsNode.parent = this.node;
        graphicsNode.setPosition(0, 0);
        var graphics = graphicsNode.addComponent(cc.Graphics);
        graphics.lineWidth = 5; // 테두리 두께
        graphics.strokeColor = cc.Color.BLACK; // 테두리 색상
        var size = this.node.getContentSize();
        console.log("Tile Size:", size); // 디버깅 로그
        // 테두리 그리기
        graphics.rect(-size.width / 2, -size.height / 2, size.width, size.height);
        graphics.stroke();
    };
    Tile.prototype.onTileClicked = function () {
        if (!cc.isValid(this.node))
            return;
        if (Tile_1.selectedTile === null) {
            Tile_1.selectedTile = this;
            this.highlight(true);
        }
        else {
            if (!cc.isValid(Tile_1.selectedTile.node)) {
                Tile_1.selectedTile = null;
                return;
            }
            if (Tile_1.selectedTile === this) {
                this.highlight(false);
                Tile_1.selectedTile = null;
                return;
            }
            this.highlight(false);
            Tile_1.selectedTile.highlight(false);
            var board = this.node.parent.getComponent(_3MatchBoard_1.default);
            if (board) {
                board.swapTiles(this, Tile_1.selectedTile);
            }
            Tile_1.selectedTile = null;
        }
    };
    Tile.prototype.highlight = function (enable) {
        if (!this.node || !cc.isValid(this.node))
            return; // 추가
        this.node.scale = enable ? 1.1 : 1.0;
    };
    Tile.prototype.swapPosition = function (otherTile) {
        // 위치 바꾸기
        var tempPos = this.node.getPosition();
        this.node.setPosition(otherTile.node.getPosition());
        otherTile.node.setPosition(tempPos);
        // row, col 교환
        var tempRow = this.row;
        var tempCol = this.col;
        this.row = otherTile.row;
        this.col = otherTile.col;
        otherTile.row = tempRow;
        otherTile.col = tempCol;
    };
    Tile.prototype.explode = function () {
        var _this = this;
        console.log("explode() \uC2E4\uD589: (" + this.row + ", " + this.col + ")");
        // 이펙트 생성
        if (this.explosionPrefab) {
            console.log("\uD3ED\uBC1C \uC774\uD399\uD2B8 \uC0DD\uC131: (" + this.row + ", " + this.col + ")");
            var effect_1 = cc.instantiate(this.explosionPrefab);
            effect_1.parent = this.node.parent;
            effect_1.setPosition(this.node.getPosition());
            // 효과가 끝나면 자동 제거
            var ps = effect_1.getComponent(cc.ParticleSystem);
            ps && ps.resetSystem();
            this.scheduleOnce(function () {
                console.log("\uD3ED\uBC1C \uC774\uD399\uD2B8 \uC81C\uAC70: (" + _this.row + ", " + _this.col + ")");
                effect_1.destroy();
            }, 1);
        }
        // 애니메이션 + 파괴
        this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.2, 1.5).easing(cc.easeBackOut()), cc.fadeOut(0.2)), cc.callFunc(function () {
            if (Tile_1.selectedTile === _this) {
                Tile_1.selectedTile = null; // 사라질 때 선택 해제
            }
            _this.node.destroy();
        })));
    };
    var Tile_1;
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
    return Tile;
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw4Q0FBNEM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFzS0M7UUFwS0csWUFBTSxHQUFjLElBQUksQ0FBQyxDQUFFLGtCQUFrQjtRQUc3QyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQWU7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQ2hGLENBQUM7UUFFSyxTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUcsR0FBVyxDQUFDLENBQUM7O0lBMEozQixDQUFDO2FBdEtvQixJQUFJO0lBZ0JyQix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLHFCQUFNLEdBQU47UUFDSSxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhFLENBQUM7SUFFRCw2QkFBYyxHQUFkO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxD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RyxVQUFLLEtBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQyxDQUFDO2dCQUNyRCxRQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxhQUFhO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsS0FBSyxDQUNKLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsRUFDN0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDbEIsRUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxNQUFJLENBQUMsWUFBWSxLQUFLLEtBQUksRUFBRTtnQkFDNUIsTUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBRSxjQUFjO2FBQzVDO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FDTCxDQUNKLENBQUM7SUFDTixDQUFDOztJQW5KYyxpQkFBWSxHQUFTLElBQUksQ0FBQztJQVp6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCO3dDQUNaO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBa0I7aURBQ0w7SUFMakIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNLeEI7SUFBRCxXQUFDO0NBdEtELEFBc0tDLENBdEtpQyxFQUFFLENBQUMsU0FBUyxHQXNLN0M7a0JBdEtvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFRocmVlTWF0Y2hCb2FyZCBmcm9tIFwiLi8zTWF0Y2hCb2FyZFwiO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpIC8vIOyKpO2UhOudvOydtO2KuCDsu7Ttj6zrhIztirgg7Jew6rKwXHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7ICAvLyDquLDsobQgc3ByaXRlIOyGjeyEsSDrs7XqtaxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSAvLyDtj63rsJwg7Zqo6rO8IO2UhOumrO2MuSDsho3shLEg7LaU6rCAXHJcbiAgICBleHBsb3Npb25QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xvcnM6IGNjLkNvbG9yW10gPSBbXHJcbiAgICAgICAgY2MuQ29sb3IuUkVELCBjYy5Db2xvci5CTFVFLCBjYy5Db2xvci5HUkVFTiwgY2MuQ29sb3IuWUVMTE9XLCBjYy5Db2xvci5PUkFOR0VcclxuICAgIF07XHJcblxyXG4gICAgcHVibGljIHJvdzogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjb2w6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0ZWRUaWxlOiBUaWxlID0gbnVsbDtcclxuXHJcbiAgICAvLyDrhbjrk5zqsIAg7JSs7JeQIOyDneyEseuQmOuptOyEnCDstIjquLDtmZQg64uo6rOELlxyXG4gICAgLy8g7J20IOyLnOygkOyXkCDsu7Ttj6zrhIztirgsIOyKpO2UhOudvOydtO2KuCwg7J2067Kk7Yq4IOumrOyKpOuEiCDrk7HsnYQg65Ox66GdXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g7Iqk7ZSE65287J207Yq4IOy7tO2PrOuEjO2KuOqwgCDsl4bsnLzrqbQg7LaU6rCAXHJcbiAgICAgICAgaWYgKCF0aGlzLnNwcml0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25UaWxlQ2xpY2tlZCwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFJhbmRvbUNvbG9yKCkge1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sb3JzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5jb2xvcnNbcmFuZG9tSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJhbmRvbUNvbG9yRXhjbHVkaW5nKGV4Y2x1ZGVDb2xvcnM6IGNjLkNvbG9yW10pIHtcclxuICAgICAgICBsZXQgYXZhaWxhYmxlQ29sb3JzID0gdGhpcy5jb2xvcnMuZmlsdGVyKGNvbG9yID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFleGNsdWRlQ29sb3JzLnNvbWUoZXggPT4gZXguZXF1YWxzKGNvbG9yKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAvLyDtmLnsi5wg66qo65OgIOyDieydtCDsoJzsmbjrkJjrqbQg6re464OlIOuenOuNpOycvOuhnCAo7JWI7KCE7J6l7LmYKVxyXG4gICAgICAgIGlmIChhdmFpbGFibGVDb2xvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUNvbG9ycyA9IHRoaXMuY29sb3JzO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29sb3JzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBhdmFpbGFibGVDb2xvcnNbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgYWRkT3V0bGluZSgpIHtcclxuICAgICAgICAvLyDquLDsobTsl5Ag7J6I642YIEdyYXBoaWNz6rCAIOyeiOycvOuptCDsoJzqsbBcclxuICAgICAgICBsZXQgZXhpc3RpbmdHcmFwaGljcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0dyYXBoaWNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVDb21wb25lbnQoZXhpc3RpbmdHcmFwaGljcyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8g7IOIIEdyYXBoaWNzIOuFuOuTnCDsg53shLFcclxuICAgICAgICBsZXQgZ3JhcGhpY3NOb2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBncmFwaGljc05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGdyYXBoaWNzTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGdyYXBoaWNzTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDU7IC8vIO2FjOuRkOumrCDrkZDqu5hcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkJMQUNLOyAvLyDthYzrkZDrpqwg7IOJ7IOBXHJcbiAgICBcclxuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlsZSBTaXplOlwiLCBzaXplKTsgLy8g65SU67KE6rmFIOuhnOq3uFxyXG4gICAgXHJcbiAgICAgICAgLy8g7YWM65GQ66asIOq3uOumrOq4sFxyXG4gICAgICAgIGdyYXBoaWNzLnJlY3QoLXNpemUud2lkdGggLyAyLCAtc2l6ZS5oZWlnaHQgLyAyLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UaWxlQ2xpY2tlZCgpIHtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKFRpbGUuc2VsZWN0ZWRUaWxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFRpbGUuc2VsZWN0ZWRUaWxlID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKFRpbGUuc2VsZWN0ZWRUaWxlLm5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBUaWxlLnNlbGVjdGVkVGlsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoVGlsZS5zZWxlY3RlZFRpbGUgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIFRpbGUuc2VsZWN0ZWRUaWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGZhbHNlKTtcclxuICAgICAgICAgICAgVGlsZS5zZWxlY3RlZFRpbGUuaGlnaGxpZ2h0KGZhbHNlKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFRocmVlTWF0Y2hCb2FyZCk7XHJcbiAgICAgICAgICAgIGlmIChib2FyZCkge1xyXG4gICAgICAgICAgICAgICAgYm9hcmQuc3dhcFRpbGVzKHRoaXMsIFRpbGUuc2VsZWN0ZWRUaWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIFRpbGUuc2VsZWN0ZWRUaWxlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGhpZ2hsaWdodChlbmFibGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZSB8fCAhY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSByZXR1cm47ICAvLyDstpTqsIBcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSBlbmFibGUgPyAxLjEgOiAxLjA7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBzd2FwUG9zaXRpb24ob3RoZXJUaWxlOiBUaWxlKSB7XHJcbiAgICAgICAgLy8g7JyE7LmYIOuwlOq+uOq4sFxyXG4gICAgICAgIGNvbnN0IHRlbXBQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ob3RoZXJUaWxlLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgb3RoZXJUaWxlLm5vZGUuc2V0UG9zaXRpb24odGVtcFBvcyk7XHJcblxyXG4gICAgICAgIC8vIHJvdywgY29sIOq1kO2ZmFxyXG4gICAgICAgIGNvbnN0IHRlbXBSb3cgPSB0aGlzLnJvdztcclxuICAgICAgICBjb25zdCB0ZW1wQ29sID0gdGhpcy5jb2w7XHJcbiAgICAgICAgdGhpcy5yb3cgPSBvdGhlclRpbGUucm93O1xyXG4gICAgICAgIHRoaXMuY29sID0gb3RoZXJUaWxlLmNvbDtcclxuICAgICAgICBvdGhlclRpbGUucm93ID0gdGVtcFJvdztcclxuICAgICAgICBvdGhlclRpbGUuY29sID0gdGVtcENvbDtcclxuICAgIH1cclxuXHJcbiAgICBleHBsb2RlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBleHBsb2RlKCkg7Iuk7ZaJOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgXHJcbiAgICAgICAgLy8g7J207Y6Z7Yq4IOyDneyEsVxyXG4gICAgICAgIGlmICh0aGlzLmV4cGxvc2lvblByZWZhYikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg7Y+t67CcIOydtO2Ome2KuCDsg53shLE6ICgke3RoaXMucm93fSwgJHt0aGlzLmNvbH0pYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXhwbG9zaW9uUHJlZmFiKTtcclxuICAgICAgICAgICAgZWZmZWN0LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g7Zqo6rO86rCAIOuBneuCmOuptCDsnpDrj5kg7KCc6rGwXHJcbiAgICAgICAgICAgIGNvbnN0IHBzID0gZWZmZWN0LmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgICAgIHBzICYmIHBzLnJlc2V0U3lzdGVtKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYO2PreuwnCDsnbTtjpntirgg7KCc6rGwOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8g7JWg64uI66mU7J207IWYICsg7YyM6rS0XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMS41KS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmFkZU91dCgwLjIpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUaWxlLnNlbGVjdGVkVGlsZSA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaWxlLnNlbGVjdGVkVGlsZSA9IG51bGw7ICAvLyDsgqzrnbzsp4gg65WMIOyEoO2DnSDtlbTsoJxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Yu/3Match/ThreeMatchManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6a44XYfjdEJrJ3NV15E68z', 'ThreeMatchManager');
// scripts/Yu/3Match/ThreeMatchManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcVGhyZWVNYXRjaE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFnSEM7UUE5R0csZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHbkIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFDdkIsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBeUZ6QyxDQUFDO0lBdEZHLGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixnQkFBZ0I7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxpQkFBaUI7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRzdCLGNBQWM7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7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SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5REFDUztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNTO0lBZFYsaUJBQWlCO1FBRHJDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztPQUNSLGlCQUFpQixDQWdIckM7SUFBRCx3QkFBQztDQWhIRCxBQWdIQyxDQWhIOEMsRUFBRSxDQUFDLFNBQVMsR0FnSDFEO2tCQWhIb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFRocmVlTWF0Y2hCb2FyZCBmcm9tIFwiLi8zTWF0Y2hCb2FyZFwiO1xyXG5cclxuQGNjY2xhc3MoXCJUaHJlZU1hdGNoTWFuYWdlclwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZU1hdGNoTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm9hcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBjb21ib0dhdWdlOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmZXZlckxhYmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbFRpbWU6IG51bWJlciA9IDEyMDtcclxuICAgIHByaXZhdGUgY3VycmVudFRpbWU6IG51bWJlciA9IDEyMDtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjb21ib1ZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb21ib01heDogbnVtYmVyID0gMzAwO1xyXG4gICAgcHJpdmF0ZSBpc0ZldmVyVGltZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAxKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDApO1xyXG4gICAgICAgICAgICAvLyDsvaTrs7Qg6rKM7J207KeAIOq0gOugqCDstIjquLDtmZRcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY29tYm9NYXggPSAyMDA7IC8vIO2YueydgCDtlYTsmpTsl5Ag65Sw6528IOqwkiDshKTsoJVcclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgLy8g7ZS867KE7YOA7J6EIFVJIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZldmVyTGFiZWwuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGxhYmVsID0gdGhpcy5mZXZlckxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgLy8gbGFiZWwuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcclxuICAgICAgICAvLyBsYWJlbC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XHJcbiAgICAgICAgLy8gbGFiZWwub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTks7ICAvLyDrhIjrrLQg6ri466m0IOy2leyGjFxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lLS07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYOuCqOydgCDsi5zqsIQ6ICR7dGhpcy5jdXJyZW50VGltZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBhbW91bnQ7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGDtmo3rk50g7KCQ7IiYOiAke3RoaXMuc2NvcmV9YDtcclxuICAgICAgICAvLyDsoJDsiJgg7ZqN65Od7IucIOy9pOuztOqyjOydtOyngCDstpTqsIAg66mU7ISc65OcIOyLpO2WiSAgICBcclxuICAgICAgICB0aGlzLmluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQpOyAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhZGRNYXRjaFNjb3JlKG1hdGNoQ291bnQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICBjb25zdCBzY29yZVRvQWRkID0gbWF0Y2hDb3VudCAqIDEwOyAvLyDtlLzrsoQg7JWE64uQIOuVjCDsoJDsiJgg7LaU6rCAXHJcbiAgICBcclxuICAgICAgICAvLyDtlLzrsoTtg4DsnoTsnbTrqbQg7KCQ7IiYIDLrsLDroZwg7ISk7KCVXHJcbiAgICAgICAgY29uc3QgZmluYWxTY29yZSA9IHRoaXMuaXNGZXZlclRpbWUgPyBzY29yZVRvQWRkICogMiA6IHNjb3JlVG9BZGQ7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKGZpbmFsU2NvcmUpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgaW5jcmVhc2VDb21ib0dhdWdlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGZXZlclRpbWUpIHJldHVybjsgLy8g7ZS867KE7YOA7J6E7KSR7JeUIOqyjOydtOyngCDslYjsmKzrnbzqsJDqsJBcclxuICAgIFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tYm9WYWx1ZSA+PSB0aGlzLmNvbWJvTWF4KSB7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSB0aGlzLmNvbWJvTWF4O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RmV2ZXJUaW1lKCk7IC8vIO2YhOyerCDqsozsnbTsp4Ag6rCS7J20IOunpeyKpOqwkuuztOuLpCDtgazqsbDrgpgg6rCZ7JWE7KeA66m0IO2UvOuyhO2DgOyehCDrqZTshJzrk5wg7Iuk7ZaJXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IHRoaXMuY29tYm9WYWx1ZSAvIHRoaXMuY29tYm9NYXg7IC8vIHVp7Iuk7ZaJXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRGZXZlclRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZXZlckxhYmVsLmFjdGl2ZSA9IHRydWU7IC8vIO2UvOuyhCBVSSDrs7Tsl6zso7zquLBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gMTDstIgg7ZuEIOyiheujjFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmRGZXZlclRpbWUoKTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVuZEZldmVyVGltZSgpIHtcclxuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gZmFsc2U7IC8vIO2UvOuyhO2DgOyehCDsg4Htg5wgZmFsc2XroZxcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSAwOyAvLyDtmITsnqwg7L2k67O0IOuwuOulmCwgdWkg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5jb21ib0dhdWdlLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLmZldmVyTGFiZWwuYWN0aXZlID0gZmFsc2U7IC8vIO2UvOuyhCBVSSDsiKjquLDquLBcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIG9uR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgY2MubG9nKFwi6rKM7J6EIOyiheujjCFcIik7XHJcbiAgICAgICAgLy8g7J207ZuEIOqyjOyehCDsooXro4wg7LKY66asIOy2lOqwgCDqsIDriqVcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
