
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MazeGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWF6ZUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQW9DO0FBQ3BDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStFSztRQTdFRCxtQkFBYSxHQUFZLElBQUssQ0FBQyxDQUFFLGFBQWE7UUFFOUMsZ0JBQVUsR0FBWSxJQUFLLENBQUMsQ0FBSyxVQUFVO1FBRTNDLGNBQVEsR0FBWSxJQUFLLENBQUMsQ0FBTyxRQUFROztJQXlFekMsQ0FBQztJQXJFRCx3QkFBSyxHQUFMO1FBQ0kscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRXBELGNBQWM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFNUIsNEJBQTRCO1FBQzVCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxR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LENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBRTdDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFO1lBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVO1NBQ2hEO0lBQ0wsQ0FBQztJQTVFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQU5ULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErRXhCO0lBQUQsZUFBQztDQS9FTCxBQStFSyxDQS9FaUMsRUFBRSxDQUFDLFNBQVMsR0ErRTdDO2tCQS9FZ0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIu+7v1xuaW1wb3J0IE1hemVMb2dpYyBmcm9tIFwiLi9NYXplTG9naWNcIjtcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hemVHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXplQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbCE7ICAvLyDrr7jroZzrpbwg6re466a0IOuFuOuTnOuTnFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsITsgICAgIC8vIO2UjOugiOydtOyWtCDrhbjrk5xcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBnb2FsTm9kZTogY2MuTm9kZSA9IG51bGwhOyAgICAgICAvLyDrqqntkZwg64W465OcXG5cbiAgICBwcml2YXRlIG1hemVMb2dpYzogTWF6ZUxvZ2ljO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIE1hemVDb250YWluZXLsnZgg7JW17Luk7JmAIOychOy5mOulvCAoMCwgMCnsnLzroZwg7ISk7KCVXG4gICAgICAgIHRoaXMubWF6ZUNvbnRhaW5lci5zZXRBbmNob3JQb2ludCgwLCAwKTtcbiAgICAgICAgdGhpcy5tYXplQ29udGFpbmVyLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAvLyAyMcOXMjEg6re466as65OcLCDqsIEg7IWAIDUw7ZS97IWAIOyghOyytCDtgazquLDripQgMTA1MMOXMTA1MCDtlL3shYBcbiAgICAgICAgdGhpcy5tYXplQ29udGFpbmVyLnNldENvbnRlbnRTaXplKDIxICogNTAsIDIxICogNTApO1xuXG4gICAgICAgIC8vIOuvuOuhnCDsg53shLEg67CPIOugjOuNlOungVxuICAgICAgICB0aGlzLm1hemVMb2dpYyA9IG5ldyBNYXplTG9naWMoMjEsIDIxLCB0aGlzLm1hemVDb250YWluZXIpO1xuICAgICAgICB0aGlzLm1hemVMb2dpYy5nZW5lcmF0ZU1hemUoKTtcbiAgICAgICAgdGhpcy5tYXplTG9naWMucmVuZGVyTWF6ZSgpO1xuXG4gICAgICAgIC8vIO2UjOugiOydtOyWtCDsnITsuZjrpbwg7Iuc7J6RIOyFgCgxLDEp7JeQIOunnuqyjCDshKTsoJVcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSB0aGlzLm1hemVMb2dpYy5nZXRTdGFydFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMucGxheWVyTm9kZS5zZXRQb3NpdGlvbihzdGFydFBvcy54ICogdGhpcy5tYXplTG9naWMuY2VsbFNpemUsIHN0YXJ0UG9zLnkgKiB0aGlzLm1hemVMb2dpYy5jZWxsU2l6ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyQXBwZWFyYW5jZSgpO1xuXG4gICAgICAgIC8vIOuqqe2RnCDsnITsuZjrpbwgKGNvbHMgLSAyLCByb3dzIC0gMinroZwg7ISk7KCVXG4gICAgICAgIGNvbnN0IGdvYWxQb3MgPSB0aGlzLm1hemVMb2dpYy5nZXRHb2FsUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5nb2FsTm9kZS5zZXRQb3NpdGlvbihnb2FsUG9zLnggKiB0aGlzLm1hemVMb2dpYy5jZWxsU2l6ZSwgZ29hbFBvcy55ICogdGhpcy5tYXplTG9naWMuY2VsbFNpemUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdvYWxBcHBlYXJhbmNlKCk7XG5cbiAgICAgICAgLy8g7ZSM66CI7J207Ja0LCDrqqntkZwg7J6Y67O07J2064+E66GdIHppbmRleCDsobDsoIjsoIhcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnpJbmRleCA9IDEwO1xuICAgICAgICB0aGlzLmdvYWxOb2RlLnpJbmRleCA9IDEwO1xuXG4gICAgICAgIC8vIFBsYXllckNvbnRyb2xsZXLsl5Ag66+466GcIOygleuztOulvCDsoITri6xcbiAgICAgICAgY29uc3QgcGxheWVyQ3RybCA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoUGxheWVyQ29udHJvbGxlcik7XG4gICAgICAgIGlmIChwbGF5ZXJDdHJsKSB7XG4gICAgICAgICAgICBwbGF5ZXJDdHJsLm1hemVMb2dpYyA9IHRoaXMubWF6ZUxvZ2ljO1xuICAgICAgICAgICAgcGxheWVyQ3RybC5jZWxsU2l6ZSA9IHRoaXMubWF6ZUxvZ2ljLmNlbGxTaXplO1xuICAgICAgICAgICAgcGxheWVyQ3RybC5ncmlkQ29scyA9IDIxO1xuICAgICAgICAgICAgcGxheWVyQ3RybC5ncmlkUm93cyA9IDIxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUGxheWVyQXBwZWFyYW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkgcmV0dXJuO1xuICAgICAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgaWYgKCFncmFwaGljcykgZ3JhcGhpY3MgPSB0aGlzLnBsYXllck5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEO1xuICAgICAgICAvLyDtlIzroIjsnbTslrQ6IOqwgSDshYAg7KSR7JWZ7JeQIOq3uOugpOyngOuKlCDsm5AgKOuwmOyngOumhCA9IOyFgCDtgazquLDsnZggMS8zKVxuICAgICAgICBncmFwaGljcy5jaXJjbGUodGhpcy5tYXplTG9naWMuY2VsbFNpemUgLyAyLCB0aGlzLm1hemVMb2dpYy5jZWxsU2l6ZSAvIDIsIHRoaXMubWF6ZUxvZ2ljLmNlbGxTaXplIC8gMyk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVHb2FsQXBwZWFyYW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ29hbE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpIHJldHVybjtcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gdGhpcy5nb2FsTm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICBpZiAoIWdyYXBoaWNzKSBncmFwaGljcyA9IHRoaXMuZ29hbE5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgICAgIC8vIOuqqe2RnDog7IWA7J2YIOyghOyytCDtgazquLDrpbwg7LGE7Jqw64qUIOyCrOqwge2YlVxuICAgICAgICBncmFwaGljcy5yZWN0KDAsIDAsIHRoaXMubWF6ZUxvZ2ljLmNlbGxTaXplLCB0aGlzLm1hemVMb2dpYy5jZWxsU2l6ZSk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMucGxheWVyTm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBnb2FsUG9zID0gdGhpcy5nb2FsTm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSA1OyAvLyDtlL3shYAg64uo7JyEIOyehOqzhOqwkiAo7ZWE7JqU7JeQIOuUsOudvCDsobDsoJUpXG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHBsYXllclBvcy54IC0gZ29hbFBvcy54KSA8IHRocmVzaG9sZCAmJlxuICAgICAgICAgICAgTWF0aC5hYnMocGxheWVyUG9zLnkgLSBnb2FsUG9zLnkpIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJZb3UgV2luIVwiKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVPdmVyXCIpOyAvLyDqsozsnoTsmKTrsoQg7JSs7JSsXG4gICAgICAgIH1cbiAgICB9XG4gICAgfSJdfQ==