
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81297qxCTZCurG9mmv7Zz7H', 'GameOver');
// scripts/GameOver.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
// GameOver.ts
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Restart 버튼 컴포넌트 참조 (cc.Button)
        _this.restartButton = null;
        return _this;
    }
    GameOver.prototype.onLoad = function () {
        // Restart 버튼 클릭 시 onRestart 함수 실행
        this.restartButton.node.on("click", this.onRestart, this);
    };
    GameOver.prototype.onDestroy = function () {
        // 자원 해제를 위해 클릭 이벤트를 제거
        this.restartButton.node.off("click", this.onRestart, this);
    };
    GameOver.prototype.onRestart = function () {
        // MainScene으로 씬 전환 (원하는 씬 이름으로 수정 가능)
        cc.director.loadScene("MainScene");
    };
    __decorate([
        property(cc.Button)
    ], GameOver.prototype, "restartButton", void 0);
    GameOver = __decorate([
        ccclass
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFDLG9CQUFvQjtBQUNyQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsY0FBYztBQUNSLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUJDO1FBbEJHLGlDQUFpQztRQUVqQyxtQkFBYSxHQUFjLElBQUssQ0FBQzs7SUFnQnJDLENBQUM7SUFkRyx5QkFBTSxHQUFOO1FBQ0ksa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxzQ0FBc0M7UUFDdEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2E7SUFIaEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1CNUI7SUFBRCxlQUFDO0NBbkJELEFBbUJDLENBbkJxQyxFQUFFLENBQUMsU0FBUyxHQW1CakQ7a0JBbkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsi77u/Ly8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbi8vIEdhbWVPdmVyLnRzXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIFJlc3RhcnQg67KE7Yq8IOy7tO2PrOuEjO2KuCDssLjsobAgKGNjLkJ1dHRvbilcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHJlc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGwhO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBSZXN0YXJ0IOuyhO2KvCDtgbTrpq0g7IucIG9uUmVzdGFydCDtlajsiJgg7Iuk7ZaJXG4gICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5ub2RlLm9uKFwiY2xpY2tcIiwgdGhpcy5vblJlc3RhcnQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8g7J6Q7JuQIO2VtOygnOulvCDsnITtlbQg7YG066atIOydtOuypO2KuOulvCDsoJzqsbBcbiAgICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uLm5vZGUub2ZmKFwiY2xpY2tcIiwgdGhpcy5vblJlc3RhcnQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uUmVzdGFydCgpIHtcbiAgICAgICAgLy8gTWFpblNjZW5l7Jy866GcIOyUrCDsoITtmZggKOybkO2VmOuKlCDslKwg7J2066aE7Jy866GcIOyImOyglSDqsIDriqUpXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcbiAgICB9XG59Il19