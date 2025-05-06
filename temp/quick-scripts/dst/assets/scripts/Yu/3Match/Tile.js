
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw4Q0FBNEM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFzS0M7UUFwS0csWUFBTSxHQUFjLElBQUksQ0FBQyxDQUFFLGtCQUFrQjtRQUc3QyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQWU7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQ2hGLENBQUM7UUFFSyxTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUcsR0FBVyxDQUFDLENBQUM7O0lBMEozQixDQUFDO2FBdEtvQixJQUFJO0lBZ0JyQix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLHFCQUFNLEdBQU47UUFDSSxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhFLENBQUM7SUFFRCw2QkFBYyxHQUFkO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQ0FBdUIsR0FBdkIsVUFBd0IsYUFBeUI7UUFDN0MsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLO1lBQzFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO1FBRUgsK0JBQStCO1FBQy9CLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDakM7UUFFRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkUsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBR0QseUJBQVUsR0FBVjtRQUNJLDBCQUEwQjtRQUMxQixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLGdCQUFnQixFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0M7UUFFRCxtQkFBbUI7UUFDbkIsSUFBSSxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRS9CLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNqQyxRQUFRLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUztRQUVoRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztRQUUxQyxVQUFVO1FBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0QkFBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFFbkMsSUFBSSxNQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUM1QixNQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyQyxNQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsT0FBTzthQUNWO1lBRUQsSUFBSSxNQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsTUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsTUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLHNCQUFlLENBQUMsQ0FBQztZQUM3RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDNUM7WUFFRCxNQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFJRCx3QkFBUyxHQUFULFVBQVUsTUFBZTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBRSxLQUFLO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDekMsQ0FBQztJQUdELDJCQUFZLEdBQVosVUFBYSxTQUFlO1FBQ3hCLFNBQVM7UUFDVCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNwRCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwQyxjQUFjO1FBQ2QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN6QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDekIsU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDeEIsU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFBQSxpQkFtQ0M7UUFsQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBa0IsSUFBSSxDQUFDLEdBQUcsVUFBSyxJQUFJLENBQUMsR0FBRyxNQUFHLENBQUMsQ0FBQztRQUV4RCxTQUFTO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQWUsSUFBSSxDQUFDLEdBQUcsVUFBSyxJQUFJLENBQUMsR0FBRyxNQUFHLENBQUMsQ0FBQztZQUNyRCxJQUFNLFFBQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwRCxRQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2pDLFFBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBRTVDLGdCQUFnQjtZQUNoQixJQUFNLEVBQUUsR0FBRyxRQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRCxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBZSxLQUFJLENBQUMsR0FBRyxVQUFLLEtBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQyxDQUFDO2dCQUNyRCxRQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxhQUFhO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsS0FBSyxDQUNKLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsRUFDN0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDbEIsRUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxNQUFJLENBQUMsWUFBWSxLQUFLLEtBQUksRUFBRTtnQkFDNUIsTUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBRSxjQUFjO2FBQzVDO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FDTCxDQUNKLENBQUM7SUFDTixDQUFDOztJQW5KYyxpQkFBWSxHQUFTLElBQUksQ0FBQztJQVp6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCO3dDQUNaO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBa0I7aURBQ0w7SUFMakIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNLeEI7SUFBRCxXQUFDO0NBdEtELEFBc0tDLENBdEtpQyxFQUFFLENBQUMsU0FBUyxHQXNLN0M7a0JBdEtvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFRocmVlTWF0Y2hCb2FyZCBmcm9tIFwiLi8zTWF0Y2hCb2FyZFwiO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpIC8vIOyKpO2UhOudvOydtO2KuCDsu7Ttj6zrhIztirgg7Jew6rKwXHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7ICAvLyDquLDsobQgc3ByaXRlIOyGjeyEsSDrs7XqtaxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSAvLyDtj63rsJwg7Zqo6rO8IO2UhOumrO2MuSDsho3shLEg7LaU6rCAXHJcbiAgICBleHBsb3Npb25QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xvcnM6IGNjLkNvbG9yW10gPSBbXHJcbiAgICAgICAgY2MuQ29sb3IuUkVELCBjYy5Db2xvci5CTFVFLCBjYy5Db2xvci5HUkVFTiwgY2MuQ29sb3IuWUVMTE9XLCBjYy5Db2xvci5PUkFOR0VcclxuICAgIF07XHJcblxyXG4gICAgcHVibGljIHJvdzogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjb2w6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0ZWRUaWxlOiBUaWxlID0gbnVsbDtcclxuXHJcbiAgICAvLyDrhbjrk5zqsIAg7JSs7JeQIOyDneyEseuQmOuptOyEnCDstIjquLDtmZQg64uo6rOELlxyXG4gICAgLy8g7J20IOyLnOygkOyXkCDsu7Ttj6zrhIztirgsIOyKpO2UhOudvOydtO2KuCwg7J2067Kk7Yq4IOumrOyKpOuEiCDrk7HsnYQg65Ox66GdXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g7Iqk7ZSE65287J207Yq4IOy7tO2PrOuEjO2KuOqwgCDsl4bsnLzrqbQg7LaU6rCAXHJcbiAgICAgICAgaWYgKCF0aGlzLnNwcml0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25UaWxlQ2xpY2tlZCwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFJhbmRvbUNvbG9yKCkge1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sb3JzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5jb2xvcnNbcmFuZG9tSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJhbmRvbUNvbG9yRXhjbHVkaW5nKGV4Y2x1ZGVDb2xvcnM6IGNjLkNvbG9yW10pIHtcclxuICAgICAgICBsZXQgYXZhaWxhYmxlQ29sb3JzID0gdGhpcy5jb2xvcnMuZmlsdGVyKGNvbG9yID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFleGNsdWRlQ29sb3JzLnNvbWUoZXggPT4gZXguZXF1YWxzKGNvbG9yKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAvLyDtmLnsi5wg66qo65OgIOyDieydtCDsoJzsmbjrkJjrqbQg6re464OlIOuenOuNpOycvOuhnCAo7JWI7KCE7J6l7LmYKVxyXG4gICAgICAgIGlmIChhdmFpbGFibGVDb2xvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUNvbG9ycyA9IHRoaXMuY29sb3JzO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29sb3JzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBhdmFpbGFibGVDb2xvcnNbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgYWRkT3V0bGluZSgpIHtcclxuICAgICAgICAvLyDquLDsobTsl5Ag7J6I642YIEdyYXBoaWNz6rCAIOyeiOycvOuptCDsoJzqsbBcclxuICAgICAgICBsZXQgZXhpc3RpbmdHcmFwaGljcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0dyYXBoaWNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVDb21wb25lbnQoZXhpc3RpbmdHcmFwaGljcyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8g7IOIIEdyYXBoaWNzIOuFuOuTnCDsg53shLFcclxuICAgICAgICBsZXQgZ3JhcGhpY3NOb2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBncmFwaGljc05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGdyYXBoaWNzTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGdyYXBoaWNzTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDU7IC8vIO2FjOuRkOumrCDrkZDqu5hcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkJMQUNLOyAvLyDthYzrkZDrpqwg7IOJ7IOBXHJcbiAgICBcclxuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlsZSBTaXplOlwiLCBzaXplKTsgLy8g65SU67KE6rmFIOuhnOq3uFxyXG4gICAgXHJcbiAgICAgICAgLy8g7YWM65GQ66asIOq3uOumrOq4sFxyXG4gICAgICAgIGdyYXBoaWNzLnJlY3QoLXNpemUud2lkdGggLyAyLCAtc2l6ZS5oZWlnaHQgLyAyLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UaWxlQ2xpY2tlZCgpIHtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKFRpbGUuc2VsZWN0ZWRUaWxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFRpbGUuc2VsZWN0ZWRUaWxlID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKFRpbGUuc2VsZWN0ZWRUaWxlLm5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBUaWxlLnNlbGVjdGVkVGlsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoVGlsZS5zZWxlY3RlZFRpbGUgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIFRpbGUuc2VsZWN0ZWRUaWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGZhbHNlKTtcclxuICAgICAgICAgICAgVGlsZS5zZWxlY3RlZFRpbGUuaGlnaGxpZ2h0KGZhbHNlKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFRocmVlTWF0Y2hCb2FyZCk7XHJcbiAgICAgICAgICAgIGlmIChib2FyZCkge1xyXG4gICAgICAgICAgICAgICAgYm9hcmQuc3dhcFRpbGVzKHRoaXMsIFRpbGUuc2VsZWN0ZWRUaWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIFRpbGUuc2VsZWN0ZWRUaWxlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGhpZ2hsaWdodChlbmFibGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZSB8fCAhY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSByZXR1cm47ICAvLyDstpTqsIBcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSBlbmFibGUgPyAxLjEgOiAxLjA7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBzd2FwUG9zaXRpb24ob3RoZXJUaWxlOiBUaWxlKSB7XHJcbiAgICAgICAgLy8g7JyE7LmYIOuwlOq+uOq4sFxyXG4gICAgICAgIGNvbnN0IHRlbXBQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ob3RoZXJUaWxlLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgb3RoZXJUaWxlLm5vZGUuc2V0UG9zaXRpb24odGVtcFBvcyk7XHJcblxyXG4gICAgICAgIC8vIHJvdywgY29sIOq1kO2ZmFxyXG4gICAgICAgIGNvbnN0IHRlbXBSb3cgPSB0aGlzLnJvdztcclxuICAgICAgICBjb25zdCB0ZW1wQ29sID0gdGhpcy5jb2w7XHJcbiAgICAgICAgdGhpcy5yb3cgPSBvdGhlclRpbGUucm93O1xyXG4gICAgICAgIHRoaXMuY29sID0gb3RoZXJUaWxlLmNvbDtcclxuICAgICAgICBvdGhlclRpbGUucm93ID0gdGVtcFJvdztcclxuICAgICAgICBvdGhlclRpbGUuY29sID0gdGVtcENvbDtcclxuICAgIH1cclxuXHJcbiAgICBleHBsb2RlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBleHBsb2RlKCkg7Iuk7ZaJOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgXHJcbiAgICAgICAgLy8g7J207Y6Z7Yq4IOyDneyEsVxyXG4gICAgICAgIGlmICh0aGlzLmV4cGxvc2lvblByZWZhYikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg7Y+t67CcIOydtO2Ome2KuCDsg53shLE6ICgke3RoaXMucm93fSwgJHt0aGlzLmNvbH0pYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXhwbG9zaW9uUHJlZmFiKTtcclxuICAgICAgICAgICAgZWZmZWN0LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g7Zqo6rO86rCAIOuBneuCmOuptCDsnpDrj5kg7KCc6rGwXHJcbiAgICAgICAgICAgIGNvbnN0IHBzID0gZWZmZWN0LmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgICAgIHBzICYmIHBzLnJlc2V0U3lzdGVtKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYO2PreuwnCDsnbTtjpntirgg7KCc6rGwOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8g7JWg64uI66mU7J207IWYICsg7YyM6rS0XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMS41KS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmFkZU91dCgwLjIpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUaWxlLnNlbGVjdGVkVGlsZSA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaWxlLnNlbGVjdGVkVGlsZSA9IG51bGw7ICAvLyDsgqzrnbzsp4gg65WMIOyEoO2DnSDtlbTsoJxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBcclxufVxyXG4iXX0=