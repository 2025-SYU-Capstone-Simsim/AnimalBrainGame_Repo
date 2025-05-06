
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
require('./assets/scripts/GameOver');
require('./assets/scripts/GameStart');
require('./assets/scripts/MazeGame');
require('./assets/scripts/MazeLogic');
require('./assets/scripts/PlayerController');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsb0JBQW9CO0FBQ3JCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXVDQztRQXRDVSxlQUFTLEdBQWMsSUFBSyxDQUFDO1FBQzdCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFRLEdBQVcsRUFBRSxDQUFDOztJQW1DakMsQ0FBQztJQWpDRyxpQ0FBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLEtBQTZCO1FBQ25DLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFDbEIsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzFCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDMUIsTUFBTTtTQUNiO1FBQ0Qsb0JBQW9CO1FBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDdEUsT0FBTyxDQUFFLG1CQUFtQjtTQUMvQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUF0Q2dCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBdUNwQztJQUFELHVCQUFDO0NBdkNELEFBdUNDLENBdkM2QyxFQUFFLENBQUMsU0FBUyxHQXVDekQ7a0JBdkNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyLvu78vLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuLy8gUGxheWVyQ29udHJvbGxlci50c1xuLy8gUGxheWVyQ29udHJvbGxlci50c1xuaW1wb3J0IE1hemVMb2dpYyBmcm9tIFwiLi9NYXplTG9naWNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBtYXplTG9naWM6IE1hemVMb2dpYyA9IG51bGwhO1xuICAgIHB1YmxpYyBjZWxsU2l6ZTogbnVtYmVyID0gNTA7XG4gICAgcHVibGljIGdyaWRDb2xzOiBudW1iZXIgPSAyMTtcbiAgICBwdWJsaWMgZ3JpZFJvd3M6IG51bWJlciA9IDIxO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgbmV3UG9zID0gY3VycmVudFBvcy5jbG9uZSgpO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICAgICAgICAgIG5ld1Bvcy55ICs9IHRoaXMuY2VsbFNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxuICAgICAgICAgICAgICAgIG5ld1Bvcy55IC09IHRoaXMuY2VsbFNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIG5ld1Bvcy54IC09IHRoaXMuY2VsbFNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICBuZXdQb3MueCArPSB0aGlzLmNlbGxTaXplO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIOyDiCDsnITsuZjrpbwg7ZW064u5IOyFgCDsooztkZzroZwg7ZmY7IKwXG4gICAgICAgIGxldCBjZWxsWCA9IE1hdGgucm91bmQobmV3UG9zLnggLyB0aGlzLmNlbGxTaXplKTtcbiAgICAgICAgbGV0IGNlbGxZID0gTWF0aC5yb3VuZChuZXdQb3MueSAvIHRoaXMuY2VsbFNpemUpO1xuICAgICAgICBpZiAodGhpcy5tYXplTG9naWMgJiYgIXRoaXMubWF6ZUxvZ2ljLmlzV2Fsa2FibGUoeyB4OiBjZWxsWCwgeTogY2VsbFkgfSkpIHtcbiAgICAgICAgICAgIHJldHVybjsgIC8vIOydtOuPme2VoCDshYDsnbQg67K97J2066m0IOydtOuPmSDrtojqsIBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVN0YXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyxvQkFBb0I7QUFDckIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBa0JDO1FBaEJHLGlCQUFXLEdBQWMsSUFBSyxDQUFDLENBQUMsY0FBYzs7SUFnQmxELENBQUM7SUFkRywwQkFBTSxHQUFOO1FBQ0kseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLG9CQUFvQjtRQUNwQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1c7SUFGZCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBa0I3QjtJQUFELGdCQUFDO0NBbEJELEFBa0JDLENBbEJzQyxFQUFFLENBQUMsU0FBUyxHQWtCbEQ7a0JBbEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsi77u/Ly8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhcnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGwhOyAvLyBTdGFydCDrsoTtirwg7LC47KGwXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIFN0YXJ0IOuyhO2KvCDtgbTrpq0g7J2067Kk7Yq466W8IOuTseuhne2VqeuLiOuLpFxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblN0YXJ0R2FtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25TdGFydEdhbWUoKSB7XG4gICAgICAgIC8vIE1haW5TY2VuZeycvOuhnCDsoITtmZjtlanri4jri6RcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWluU2NlbmUnKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIOydtOuypO2KuCDrpqzsiqTrhIjrpbwg7KCc6rGw7ZWp64uI64ukXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vblN0YXJ0R2FtZSwgdGhpcyk7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MazeLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f13cK+5IBHXIuPbFHvNo2g', 'MazeLogic');
// scripts/MazeLogic.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
// MazeLogic.ts
var MazeLogic = /** @class */ (function () {
    function MazeLogic(rows, cols, container) {
        this.maze = [];
        this.cellSize = 50; //각셀 50픽셀 
        this.rows = rows;
        this.cols = cols;
        // cc.Graphics 추가가
        this.container = container.getComponent(cc.Graphics);
        if (!this.container) {
            this.container = container.addComponent(cc.Graphics);
        }
    }
    MazeLogic.prototype.generateMaze = function () {
        var _this = this;
        // 벽으로채운 2차원 배열 생성
        this.maze = Array.from({ length: this.rows }, function () {
            return Array(_this.cols).fill(1);
        });
        var stack = [];
        // 시작점을 (1, 1)로 지정
        var startX = 1;
        var startY = 1;
        this.maze[startY][startX] = 0;
        stack.push({ x: startX, y: startY });
        while (stack.length > 0) {
            var current = stack.pop();
            var neighbors = this.getUnvisitedNeighbors(current.x, current.y);
            if (neighbors.length > 0) {
                stack.push(current);
                var next = neighbors[Math.floor(Math.random() * neighbors.length)];
                this.maze[next.y][next.x] = 0;
                // 두 셀 사이의 벽(중간 셀) 제거????
                var wallX = (current.x + next.x) / 2;
                var wallY = (current.y + next.y) / 2;
                this.maze[wallY][wallX] = 0;
                stack.push(next);
            }
        }
    };
    MazeLogic.prototype.renderMaze = function () {
        this.container.clear();
        // 전체 미로 오솔길 : 갈색
        var pathColor = cc.color(205, 133, 63);
        this.container.fillColor = pathColor;
        this.container.rect(0, 0, this.cols * this.cellSize, this.rows * this.cellSize);
        this.container.fill();
        // 벽만 녹색 칠하기
        var bushColor = cc.color(34, 139, 34);
        for (var y = 0; y < this.rows; y++) {
            for (var x = 0; x < this.cols; x++) {
                if (this.maze[y][x] === 1) {
                    this.container.fillColor = bushColor;
                    this.container.rect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
                    this.container.fill();
                    // 3. 각 벽 셀의 경계를 얇은 선으로 그림
                    // 선 두께를 0.5로 설정해 보세요 (지원되지 않으면 1을 사용)
                    this.container.lineWidth = 1;
                    this.container.strokeColor = cc.Color.WHITE;
                    var rx = x * this.cellSize;
                    var ry = y * this.cellSize;
                    var w = this.cellSize;
                    var h = this.cellSize;
                    this.container.moveTo(rx, ry);
                    this.container.lineTo(rx + w, ry);
                    this.container.lineTo(rx + w, ry + h);
                    this.container.lineTo(rx, ry + h);
                    this.container.lineTo(rx, ry);
                    this.container.stroke();
                }
            }
        }
    };
    MazeLogic.prototype.getStartPosition = function () {
        return { x: 1, y: 1 };
    };
    MazeLogic.prototype.getGoalPosition = function () {
        return { x: this.cols - 2, y: this.rows - 2 };
    };
    //플레이어 미로 벽충돌 로직직
    MazeLogic.prototype.isWalkable = function (cell) {
        if (cell.x < 0 || cell.x >= this.cols || cell.y < 0 || cell.y >= this.rows) {
            return false;
        }
        return this.maze[cell.y][cell.x] === 0;
    };
    MazeLogic.prototype.getUnvisitedNeighbors = function (x, y) {
        var neighbors = [];
        if (x > 1 && this.maze[y][x - 2] === 1)
            neighbors.push({ x: x - 2, y: y });
        if (x < this.cols - 2 && this.maze[y][x + 2] === 1)
            neighbors.push({ x: x + 2, y: y });
        if (y > 1 && this.maze[y - 2][x] === 1)
            neighbors.push({ x: x, y: y - 2 });
        if (y < this.rows - 2 && this.maze[y + 2][x] === 1)
            neighbors.push({ x: x, y: y + 2 });
        return neighbors;
    };
    return MazeLogic;
}());
exports.default = MazeLogic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWF6ZUxvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7QUFFdEYsZUFBZTtBQUNmO0lBUUksbUJBQVksSUFBWSxFQUFFLElBQVksRUFBRSxTQUFrQjtRQUxsRCxTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxFQUFFLENBQUMsQ0FBRSxVQUFVO1FBS3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUFBLGlCQTJCQztRQTFCRyxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxPQUFBLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUF4QixDQUF3QixDQUMzQixDQUFDO1FBRUYsSUFBTSxLQUFLLEdBQStCLEVBQUUsQ0FBQztRQUM3QyxrQkFBa0I7UUFDbEIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJ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SUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxnQkFBQztBQUFELENBM0dBLEFBMkdDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuLy8gTWF6ZUxvZ2ljLnRzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXplTG9naWMge1xuICAgIHByaXZhdGUgcm93czogbnVtYmVyO1xuICAgIHByaXZhdGUgY29sczogbnVtYmVyO1xuICAgIHByaXZhdGUgbWF6ZTogbnVtYmVyW11bXSA9IFtdO1xuICAgIHB1YmxpYyBjZWxsU2l6ZTogbnVtYmVyID0gNTA7ICAvL+qwgeyFgCA1MO2UveyFgCBcblxuICAgIHByaXZhdGUgY29udGFpbmVyOiBjYy5HcmFwaGljcztcblxuICAgIGNvbnN0cnVjdG9yKHJvd3M6IG51bWJlciwgY29sczogbnVtYmVyLCBjb250YWluZXI6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5jb2xzID0gY29scztcbiAgICAgICAgLy8gY2MuR3JhcGhpY3Mg7LaU6rCA6rCAXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZU1hemUoKSB7XG4gICAgICAgIC8vIOuyveycvOuhnOyxhOyatCAy7LCo7JuQIOuwsOyXtCDsg53shLFcbiAgICAgICAgdGhpcy5tYXplID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5yb3dzIH0sICgpID0+XG4gICAgICAgICAgICBBcnJheSh0aGlzLmNvbHMpLmZpbGwoMSlcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzdGFjazogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10gPSBbXTtcbiAgICAgICAgLy8g7Iuc7J6R7KCQ7J2EICgxLCAxKeuhnCDsp4DsoJVcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gMTtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gMTtcbiAgICAgICAgdGhpcy5tYXplW3N0YXJ0WV1bc3RhcnRYXSA9IDA7XG4gICAgICAgIHN0YWNrLnB1c2goeyB4OiBzdGFydFgsIHk6IHN0YXJ0WSB9KTtcblxuICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHN0YWNrLnBvcCgpITtcbiAgICAgICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuZ2V0VW52aXNpdGVkTmVpZ2hib3JzKGN1cnJlbnQueCwgY3VycmVudC55KTtcbiAgICAgICAgICAgIGlmIChuZWlnaGJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5laWdoYm9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZWlnaGJvcnMubGVuZ3RoKV07XG4gICAgICAgICAgICAgICAgdGhpcy5tYXplW25leHQueV1bbmV4dC54XSA9IDA7XG4gICAgICAgICAgICAgICAgLy8g65GQIOyFgCDsgqzsnbTsnZgg67K9KOykkeqwhCDshYApIOygnOqxsD8/Pz9cbiAgICAgICAgICAgICAgICBjb25zdCB3YWxsWCA9IChjdXJyZW50LnggKyBuZXh0LngpIC8gMjtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWxsWSA9IChjdXJyZW50LnkgKyBuZXh0LnkpIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLm1hemVbd2FsbFldW3dhbGxYXSA9IDA7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlck1hemUoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XG5cbiAgICAgICAgLy8g7KCE7LK0IOuvuOuhnCDsmKTshpTquLggOiDqsIjsg4lcbiAgICAgICAgY29uc3QgcGF0aENvbG9yID0gY2MuY29sb3IoMjA1LCAxMzMsIDYzKTsgIFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5maWxsQ29sb3IgPSBwYXRoQ29sb3I7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlY3QoMCwgMCwgdGhpcy5jb2xzICogdGhpcy5jZWxsU2l6ZSwgdGhpcy5yb3dzICogdGhpcy5jZWxsU2l6ZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZpbGwoKTtcblxuICAgICAgICAvLyDrsr3rp4wg64W57IOJIOy5oO2VmOq4sFxuICAgICAgICBjb25zdCBidXNoQ29sb3IgPSBjYy5jb2xvcigzNCwgMTM5LCAzNCk7ICBcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHM7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hemVbeV1beF0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmlsbENvbG9yID0gYnVzaENvbG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZWN0KHggKiB0aGlzLmNlbGxTaXplLCB5ICogdGhpcy5jZWxsU2l6ZSwgdGhpcy5jZWxsU2l6ZSwgdGhpcy5jZWxsU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbGwoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAzLiDqsIEg67K9IOyFgOydmCDqsr3qs4Trpbwg7JaH7J2AIOyEoOycvOuhnCDqt7jrprxcbiAgICAgICAgICAgICAgICAgICAgLy8g7ISgIOuRkOq7mOulvCAwLjXroZwg7ISk7KCV7ZW0IOuztOyEuOyalCAo7KeA7JuQ65CY7KeAIOyViuycvOuptCAx7J2EIOyCrOyaqSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnggPSB4ICogdGhpcy5jZWxsU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnkgPSB5ICogdGhpcy5jZWxsU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdyA9IHRoaXMuY2VsbFNpemU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGggPSB0aGlzLmNlbGxTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5tb3ZlVG8ocngsIHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIubGluZVRvKHJ4ICsgdywgcnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5saW5lVG8ocnggKyB3LCByeSArIGgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5saW5lVG8ocngsIHJ5ICsgaCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmxpbmVUbyhyeCwgcnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTdGFydFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4geyB4OiAxLCB5OiAxIH07XG4gICAgfVxuXG4gICAgZ2V0R29hbFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLmNvbHMgLSAyLCB5OiB0aGlzLnJvd3MgLSAyIH07XG4gICAgfVxuLy/tlIzroIjsnbTslrQg66+466GcIOuyvey2qeuPjCDroZzsp4Hsp4FcbiAgICBwdWJsaWMgaXNXYWxrYWJsZShjZWxsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGNlbGwueCA8IDAgfHwgY2VsbC54ID49IHRoaXMuY29scyB8fCBjZWxsLnkgPCAwIHx8IGNlbGwueSA+PSB0aGlzLnJvd3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXplW2NlbGwueV1bY2VsbC54XSA9PT0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVudmlzaXRlZE5laWdoYm9ycyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3JzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSA9IFtdO1xuICAgICAgICBpZiAoeCA+IDEgJiYgdGhpcy5tYXplW3ldW3ggLSAyXSA9PT0gMSkgbmVpZ2hib3JzLnB1c2goeyB4OiB4IC0gMiwgeTogeSB9KTtcbiAgICAgICAgaWYgKHggPCB0aGlzLmNvbHMgLSAyICYmIHRoaXMubWF6ZVt5XVt4ICsgMl0gPT09IDEpIG5laWdoYm9ycy5wdXNoKHsgeDogeCArIDIsIHk6IHkgfSk7XG4gICAgICAgIGlmICh5ID4gMSAmJiB0aGlzLm1hemVbeSAtIDJdW3hdID09PSAxKSBuZWlnaGJvcnMucHVzaCh7IHg6IHgsIHk6IHkgLSAyIH0pO1xuICAgICAgICBpZiAoeSA8IHRoaXMucm93cyAtIDIgJiYgdGhpcy5tYXplW3kgKyAyXVt4XSA9PT0gMSkgbmVpZ2hib3JzLnB1c2goeyB4OiB4LCB5OiB5ICsgMiB9KTtcbiAgICAgICAgcmV0dXJuIG5laWdoYm9ycztcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------
