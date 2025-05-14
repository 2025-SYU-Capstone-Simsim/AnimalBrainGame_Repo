
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
        _this.explosionPrefabs = [];
        _this.fruitSprites = [];
        _this.row = 0;
        _this.col = 0;
        _this.touchStartPos = null;
        _this.fruitIndex = 0; // 현재 과일 인덱스
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
        // this.node.on(cc.Node.EventType.TOUCH_END, this.onTileClicked, this);
        // 드래그 감지용 이벤트 등록
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    Tile.prototype.setRandomFruit = function () {
        var randomIndex = Math.floor(Math.random() * this.fruitSprites.length);
        this.fruitIndex = randomIndex;
        this.sprite.spriteFrame = this.fruitSprites[randomIndex];
    };
    Tile.prototype.setRandomFruitExcluding = function (excludeIndices) {
        var availableIndices = this.fruitSprites
            .map(function (_, index) { return index; })
            .filter(function (index) { return !excludeIndices.includes(index); });
        if (availableIndices.length === 0) {
            availableIndices = this.fruitSprites.map(function (_, index) { return index; });
        }
        var randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        this.fruitIndex = randomIndex;
        this.sprite.spriteFrame = this.fruitSprites[randomIndex];
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
    Tile.prototype.onTouchStart = function (event) {
        this.touchStartPos = event.getLocation();
        // 또는 this.touchStartPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("드래그 시작 위치:", this.touchStartPos);
    };
    Tile.prototype.onTouchEnd = function (event) {
        var endPos = event.getLocation();
        var delta = endPos.sub(this.touchStartPos);
        console.log("드래그 끝 위치:", endPos);
        console.log("드래그 거리:", delta);
        // 최소 거리 체크 (조금 더 유연하게, 예: 3픽셀 이상이면 처리)
        if (delta.len() < 3) {
            console.log("드래그 너무 짧아서 무시됨");
            return;
        }
        var absX = Math.abs(delta.x);
        var absY = Math.abs(delta.y);
        // 아주 작은 delta.x나 delta.y일 경우, 방향 보정
        if (absX < 1 && absY < 1) {
            console.log("움직임이 너무 작아서 무시됨");
            return;
        }
        var direction = "";
        if (absX > absY) {
            direction = delta.x > 0 ? "right" : "left";
        }
        else {
            direction = delta.y > 0 ? "up" : "down";
        }
        console.log("드래그 방향:", direction);
        var board = this.node.parent.getComponent(_3MatchBoard_1.default);
        if (!board || !board["board"]) {
            console.warn("ThreeMatchBoard를 찾을 수 없음");
            return;
        }
        var targetTile = null;
        var row = this.row;
        var col = this.col;
        switch (direction) {
            case "up":
                if (row > 0)
                    targetTile = board["board"][row - 1][col];
                break;
            case "down":
                if (row < board["boardSize"] - 1)
                    targetTile = board["board"][row + 1][col];
                break;
            case "left":
                if (col > 0)
                    targetTile = board["board"][row][col - 1];
                break;
            case "right":
                if (col < board["boardSize"] - 1)
                    targetTile = board["board"][row][col + 1];
                break;
        }
        if (targetTile) {
            console.log("\uD0C0\uC77C \uAD50\uD658: (" + row + ", " + col + ") <-> (" + targetTile.row + ", " + targetTile.col + ")");
            board.swapTiles(this, targetTile);
        }
    };
    Tile.prototype.explode = function () {
        var _this = this;
        console.log("explode() \uC2E4\uD589: (" + this.row + ", " + this.col + ")");
        var prefab = this.explosionPrefabs[this.fruitIndex];
        if (prefab) {
            console.log("\uD3ED\uBC1C \uC774\uD399\uD2B8 \uC0DD\uC131 (fruitIndex " + this.fruitIndex + "): (" + this.row + ", " + this.col + ")");
            var effect_1 = cc.instantiate(prefab);
            effect_1.parent = this.node.parent;
            effect_1.setPosition(this.node.getPosition());
            effect_1.setScale(1.2);
            effect_1.angle = Math.random() * 360;
            var ps = effect_1.getComponent(cc.ParticleSystem);
            if (ps) {
                ps.startSize = 160; // 파티클 자체 크기 키움
                ps.startSizeVar = 80; // 다양한 크기 조합
                ps.life = 0.25;
                ps.lifeVar = 0.05;
                ps.resetSystem();
            }
            this.scheduleOnce(function () {
                effect_1.destroy();
            }, 1);
        }
        this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.1, 1.8).easing(cc.easeCubicActionOut()), cc.fadeOut(0.15)), cc.callFunc(function () {
            if (Tile_1.selectedTile === _this) {
                Tile_1.selectedTile = null;
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
        property([cc.Prefab])
    ], Tile.prototype, "explosionPrefabs", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Tile.prototype, "fruitSprites", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw4Q0FBNEM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1TUM7UUFyTUcsWUFBTSxHQUFjLElBQUksQ0FBQyxDQUFFLGtCQUFrQjtRQUc3QyxzQkFBZ0IsR0FBZ0IsRUFBRSxDQUFDO1FBSW5DLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUU3QixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFZixtQkFBYSxHQUFZLElBQUksQ0FBQztRQW1COUIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZOztJQXNLaEQsQ0FBQzthQXZNb0IsSUFBSTtJQWlCckIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxxQkFBTSxHQUFOO1FBQ0kscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7UUFFRCx1RUFBdUU7UUFDdkUsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFD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QUFDLGdCQUFnQjt3Q0FDWjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztrREFDYTtJQUluQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs4Q0FDUztJQVRuQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBdU14QjtJQUFELFdBQUM7Q0F2TUQsQUF1TUMsQ0F2TWlDLEVBQUUsQ0FBQyxTQUFTLEdBdU03QztrQkF2TW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgVGhyZWVNYXRjaEJvYXJkIGZyb20gXCIuLzNNYXRjaEJvYXJkXCI7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgLy8g7Iqk7ZSE65287J207Yq4IOy7tO2PrOuEjO2KuCDsl7DqsrBcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDsgIC8vIOq4sOyhtCBzcHJpdGUg7IaN7ISxIOuzteq1rFxyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGV4cGxvc2lvblByZWZhYnM6IGNjLlByZWZhYltdID0gW107XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgZnJ1aXRTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgcHVibGljIHJvdzogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjb2w6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIHNlbGVjdGVkVGlsZTogVGlsZSA9IG51bGw7XHJcblxyXG4gICAgLy8g64W465Oc6rCAIOyUrOyXkCDsg53shLHrkJjrqbTshJwg7LSI6riw7ZmUIOuLqOqzhC5cclxuICAgIC8vIOydtCDsi5zsoJDsl5Ag7Lu07Y+s64SM7Yq4LCDsiqTtlITrnbzsnbTtirgsIOydtOuypO2KuCDrpqzsiqTrhIgg65Ox7J2EIOuTseuhnVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOyKpO2UhOudvOydtO2KuCDsu7Ttj6zrhIztirjqsIAg7JeG7Jy866m0IOy2lOqwgFxyXG4gICAgICAgIGlmICghdGhpcy5zcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVGlsZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgIC8vIOuTnOuemOq3uCDqsJDsp4Dsmqkg7J2067Kk7Yq4IOuTseuhnVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmcnVpdEluZGV4OiBudW1iZXIgPSAwOyAvLyDtmITsnqwg6rO87J28IOyduOuNseyKpFxyXG5cclxuICAgIHNldFJhbmRvbUZydWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5mcnVpdFNwcml0ZXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLmZydWl0SW5kZXggPSByYW5kb21JbmRleDtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJ1aXRTcHJpdGVzW3JhbmRvbUluZGV4XTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHNldFJhbmRvbUZydWl0RXhjbHVkaW5nKGV4Y2x1ZGVJbmRpY2VzOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCBhdmFpbGFibGVJbmRpY2VzID0gdGhpcy5mcnVpdFNwcml0ZXNcclxuICAgICAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+IGluZGV4KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGluZGV4ID0+ICFleGNsdWRlSW5kaWNlcy5pbmNsdWRlcyhpbmRleCkpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZUluZGljZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUluZGljZXMgPSB0aGlzLmZydWl0U3ByaXRlcy5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBhdmFpbGFibGVJbmRpY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUluZGljZXMubGVuZ3RoKV07XHJcbiAgICAgICAgdGhpcy5mcnVpdEluZGV4ID0gcmFuZG9tSW5kZXg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmZydWl0U3ByaXRlc1tyYW5kb21JbmRleF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGFkZE91dGxpbmUoKSB7XHJcbiAgICAgICAgLy8g6riw7KG07JeQIOyeiOuNmCBHcmFwaGljc+qwgCDsnojsnLzrqbQg7KCc6rGwXHJcbiAgICAgICAgbGV0IGV4aXN0aW5nR3JhcGhpY3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdHcmFwaGljcykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ29tcG9uZW50KGV4aXN0aW5nR3JhcGhpY3MpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIOyDiCBHcmFwaGljcyDrhbjrk5wg7IOd7ISxXHJcbiAgICAgICAgbGV0IGdyYXBoaWNzTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgZ3JhcGhpY3NOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBncmFwaGljc05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICBcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBncmFwaGljc05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSA1OyAvLyDthYzrkZDrpqwg65GQ6ruYXHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5CTEFDSzsgLy8g7YWM65GQ66asIOyDieyDgVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbGUgU2l6ZTpcIiwgc2l6ZSk7IC8vIOuUlOuyhOq5hSDroZzqt7hcclxuICAgIFxyXG4gICAgICAgIC8vIO2FjOuRkOumrCDqt7jrpqzquLBcclxuICAgICAgICBncmFwaGljcy5yZWN0KC1zaXplLndpZHRoIC8gMiwgLXNpemUuaGVpZ2h0IC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgLy8g65iQ64qUIHRoaXMudG91Y2hTdGFydFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuTnOuemOq3uCDsi5zsnpEg7JyE7LmYOlwiLCB0aGlzLnRvdWNoU3RhcnRQb3MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgZW5kUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IGVuZFBvcy5zdWIodGhpcy50b3VjaFN0YXJ0UG9zKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrk5zrnpjqt7gg64GdIOychOy5mDpcIiwgZW5kUG9zKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuTnOuemOq3uCDqsbDrpqw6XCIsIGRlbHRhKTtcclxuXHJcbiAgICAgICAgLy8g7LWc7IaMIOqxsOumrCDssrTtgawgKOyhsOq4iCDrjZQg7Jyg7Jew7ZWY6rKMLCDsmIg6IDPtlL3shYAg7J207IOB7J2066m0IOyymOumrClcclxuICAgICAgICBpZiAoZGVsdGEubGVuKCkgPCAzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi65Oc656Y6re4IOuEiOustCDsp6fslYTshJwg66y07Iuc65CoXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWJzWCA9IE1hdGguYWJzKGRlbHRhLngpO1xyXG4gICAgICAgIGxldCBhYnNZID0gTWF0aC5hYnMoZGVsdGEueSk7XHJcblxyXG4gICAgICAgIC8vIOyVhOyjvCDsnpHsnYAgZGVsdGEueOuCmCBkZWx0YS557J28IOqyveyasCwg67Cp7ZalIOuztOyglVxyXG4gICAgICAgIGlmIChhYnNYIDwgMSAmJiBhYnNZIDwgMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuybgOyngeyehOydtCDrhIjrrLQg7J6R7JWE7IScIOustOyLnOuQqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGFic1ggPiBhYnNZKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRlbHRhLnggPiAwID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZGVsdGEueSA+IDAgPyBcInVwXCIgOiBcImRvd25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi65Oc656Y6re4IOuwqe2WpTpcIiwgZGlyZWN0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFRocmVlTWF0Y2hCb2FyZCk7XHJcbiAgICAgICAgaWYgKCFib2FyZCB8fCAhYm9hcmRbXCJib2FyZFwiXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaHJlZU1hdGNoQm9hcmTrpbwg7LC+7J2EIOyImCDsl4bsnYxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRUaWxlOiBUaWxlID0gbnVsbDtcclxuICAgICAgICBjb25zdCByb3cgPSB0aGlzLnJvdztcclxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAocm93ID4gMCkgdGFyZ2V0VGlsZSA9IGJvYXJkW1wiYm9hcmRcIl1bcm93IC0gMV1bY29sXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IGJvYXJkW1wiYm9hcmRTaXplXCJdIC0gMSkgdGFyZ2V0VGlsZSA9IGJvYXJkW1wiYm9hcmRcIl1bcm93ICsgMV1bY29sXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+IDApIHRhcmdldFRpbGUgPSBib2FyZFtcImJvYXJkXCJdW3Jvd11bY29sIC0gMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sIDwgYm9hcmRbXCJib2FyZFNpemVcIl0gLSAxKSB0YXJnZXRUaWxlID0gYm9hcmRbXCJib2FyZFwiXVtyb3ddW2NvbCArIDFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0VGlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg7YOA7J28IOq1kO2ZmDogKCR7cm93fSwgJHtjb2x9KSA8LT4gKCR7dGFyZ2V0VGlsZS5yb3d9LCAke3RhcmdldFRpbGUuY29sfSlgKTtcclxuICAgICAgICAgICAgYm9hcmQuc3dhcFRpbGVzKHRoaXMsIHRhcmdldFRpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBsb2RlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBleHBsb2RlKCkg7Iuk7ZaJOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG5cclxuICAgICAgICBjb25zdCBwcmVmYWIgPSB0aGlzLmV4cGxvc2lvblByZWZhYnNbdGhpcy5mcnVpdEluZGV4XTtcclxuICAgICAgICBpZiAocHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDtj63rsJwg7J207Y6Z7Yq4IOyDneyEsSAoZnJ1aXRJbmRleCAke3RoaXMuZnJ1aXRJbmRleH0pOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgICAgICAgICBjb25zdCBlZmZlY3QgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBlZmZlY3QucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgZWZmZWN0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgICAgIGVmZmVjdC5zZXRTY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICBlZmZlY3QuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHMgPSBlZmZlY3QuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICAgICAgaWYgKHBzKSB7XHJcbiAgICAgICAgICAgICAgICBwcy5zdGFydFNpemUgPSAxNjA7ICAgICAgIC8vIO2MjO2LsO2BtCDsnpDssrQg7YGs6riwIO2CpOybgFxyXG4gICAgICAgICAgICAgICAgcHMuc3RhcnRTaXplVmFyID0gODA7ICAgICAvLyDri6TslpHtlZwg7YGs6riwIOyhsO2VqVxyXG4gICAgICAgICAgICAgICAgcHMubGlmZSA9IDAuMjU7XHJcbiAgICAgICAgICAgICAgICBwcy5saWZlVmFyID0gMC4wNTtcclxuICAgICAgICAgICAgICAgIHBzLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMS44KS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4xNSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRpbGUuc2VsZWN0ZWRUaWxlID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRpbGUuc2VsZWN0ZWRUaWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcbn1cclxuIl19