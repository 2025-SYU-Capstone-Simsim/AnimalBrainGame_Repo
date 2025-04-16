"use strict";
cc._RF.push(module, 'a6b27eouOVMFLtAzhs0I6SX', 'MazeGame');
// scripts/MazeGame.ts

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
var MazeLogic_1 = require("./MazeLogic");
var PlayerController_1 = require("./PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MazeGame = /** @class */ (function (_super) {
    __extends(MazeGame, _super);
    function MazeGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mazeContainer = null; // 미로를 그릴 노드드
        _this.playerNode = null; // 플레이어 노드
        _this.goalNode = null; // 목표 노드
        return _this;
    }
    MazeGame.prototype.start = function () {
        // MazeContainer의 앵커와 위치를 (0, 0)으로 설정
        this.mazeContainer.setAnchorPoint(0, 0);
        this.mazeContainer.setPosition(0, 0);
        // 21×21 그리드, 각 셀 50픽셀 전체 크기는 1050×1050 픽셀
        this.mazeContainer.setContentSize(21 * 50, 21 * 50);
        // 미로 생성 및 렌더링
        this.mazeLogic = new MazeLogic_1.default(21, 21, this.mazeContainer);
        this.mazeLogic.generateMaze();
        this.mazeLogic.renderMaze();
        // 플레이어 위치를 시작 셀(1,1)에 맞게 설정
        var startPos = this.mazeLogic.getStartPosition();
        this.playerNode.setPosition(startPos.x * this.mazeLogic.cellSize, startPos.y * this.mazeLogic.cellSize);
        this.updatePlayerAppearance();
        // 목표 위치를 (cols - 2, rows - 2)로 설정
        var goalPos = this.mazeLogic.getGoalPosition();
        this.goalNode.setPosition(goalPos.x * this.mazeLogic.cellSize, goalPos.y * this.mazeLogic.cellSize);
        this.updateGoalAppearance();
        // 플레이어, 목표 잘보이도록 zindex 조절절
        this.playerNode.zIndex = 10;
        this.goalNode.zIndex = 10;
        // PlayerController에 미로 정보를 전달
        var playerCtrl = this.playerNode.getComponent(PlayerController_1.default);
        if (playerCtrl) {
            playerCtrl.mazeLogic = this.mazeLogic;
            playerCtrl.cellSize = this.mazeLogic.cellSize;
            playerCtrl.gridCols = 21;
            playerCtrl.gridRows = 21;
        }
    };
    MazeGame.prototype.updatePlayerAppearance = function () {
        if (this.playerNode.getComponent(cc.Sprite))
            return;
        var graphics = this.playerNode.getComponent(cc.Graphics);
        if (!graphics)
            graphics = this.playerNode.addComponent(cc.Graphics);
        graphics.clear();
        graphics.fillColor = cc.Color.RED;
        // 플레이어: 각 셀 중앙에 그려지는 원 (반지름 = 셀 크기의 1/3)
        graphics.circle(this.mazeLogic.cellSize / 2, this.mazeLogic.cellSize / 2, this.mazeLogic.cellSize / 3);
        graphics.fill();
    };
    MazeGame.prototype.updateGoalAppearance = function () {
        if (this.goalNode.getComponent(cc.Sprite))
            return;
        var graphics = this.goalNode.getComponent(cc.Graphics);
        if (!graphics)
            graphics = this.goalNode.addComponent(cc.Graphics);
        graphics.clear();
        graphics.fillColor = cc.Color.GREEN;
        // 목표: 셀의 전체 크기를 채우는 사각형
        graphics.rect(0, 0, this.mazeLogic.cellSize, this.mazeLogic.cellSize);
        graphics.fill();
    };
    MazeGame.prototype.update = function () {
        var playerPos = this.playerNode.getPosition();
        var goalPos = this.goalNode.getPosition();
        var threshold = 5; // 픽셀 단위 임계값 (필요에 따라 조정)
        if (Math.abs(playerPos.x - goalPos.x) < threshold &&
            Math.abs(playerPos.y - goalPos.y) < threshold) {
            cc.log("You Win!");
            cc.director.loadScene("GameOver"); // 게임오버 씬씬
        }
    };
    __decorate([
        property(cc.Node)
    ], MazeGame.prototype, "mazeContainer", void 0);
    __decorate([
        property(cc.Node)
    ], MazeGame.prototype, "playerNode", void 0);
    __decorate([
        property(cc.Node)
    ], MazeGame.prototype, "goalNode", void 0);
    MazeGame = __decorate([
        ccclass
    ], MazeGame);
    return MazeGame;
}(cc.Component));
exports.default = MazeGame;

cc._RF.pop();