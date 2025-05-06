"use strict";
cc._RF.push(module, '7452bJV3khEK7pOpauLnBJR', 'GameStart');
// scripts/GameStart.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameStart = /** @class */ (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null; // Start 버튼 참조
        return _this;
    }
    GameStart.prototype.onLoad = function () {
        // Start 버튼 클릭 이벤트를 등록합니다
        this.startButton.node.on('click', this.onStartGame, this);
    };
    GameStart.prototype.onStartGame = function () {
        // MainScene으로 전환합니다
        cc.director.loadScene('MainScene');
    };
    GameStart.prototype.onDestroy = function () {
        // 이벤트 리스너를 제거합니다
        this.startButton.node.off('click', this.onStartGame, this);
    };
    __decorate([
        property(cc.Button)
    ], GameStart.prototype, "startButton", void 0);
    GameStart = __decorate([
        ccclass
    ], GameStart);
    return GameStart;
}(cc.Component));
exports.default = GameStart;

cc._RF.pop();