"use strict";
cc._RF.push(module, 'fbe93ZxnltKsJJjvgukOYdx', 'PlayerController');
// scripts/PlayerController.ts

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
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mazeLogic = null;
        _this.cellSize = 50;
        _this.gridCols = 21;
        _this.gridRows = 21;
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    PlayerController.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    PlayerController.prototype.onKeyDown = function (event) {
        var currentPos = this.node.getPosition();
        var newPos = currentPos.clone();
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                newPos.y += this.cellSize;
                break;
            case cc.macro.KEY.down:
                newPos.y -= this.cellSize;
                break;
            case cc.macro.KEY.left:
                newPos.x -= this.cellSize;
                break;
            case cc.macro.KEY.right:
                newPos.x += this.cellSize;
                break;
        }
        // 새 위치를 해당 셀 좌표로 환산
        var cellX = Math.round(newPos.x / this.cellSize);
        var cellY = Math.round(newPos.y / this.cellSize);
        if (this.mazeLogic && !this.mazeLogic.isWalkable({ x: cellX, y: cellY })) {
            return; // 이동할 셀이 벽이면 이동 불가
        }
        this.node.setPosition(newPos);
    };
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();