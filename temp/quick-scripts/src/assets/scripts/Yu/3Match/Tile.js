"use strict";
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