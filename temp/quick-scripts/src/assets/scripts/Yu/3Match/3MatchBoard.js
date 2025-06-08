"use strict";
cc._RF.push(module, '68e51hefodGuLgR18OVI/tx', '3MatchBoard');
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
        _this.boardSize = 7; // 항상 8x8 고정
        _this.tileSize = 100;
        _this.gap = 10;
        _this.board = [];
        _this.isSwapping = false;
        return _this;
    }
    ThreeMatchBoard.prototype.start = function () {
        var _this = this;
        this.node.color = cc.Color.GRAY;
        this.createBoard();
        this.scheduleOnce(function () {
            _this.checkAndExplodeMatches(); // 게임 시작 후 첫 매칭 탐지
        }, 0.1);
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
                // 1. bannedColors를 bannedIndices로
                var bannedIndices = [];
                if (col >= 2) {
                    var left1 = this.board[row][col - 1];
                    var left2 = this.board[row][col - 2];
                    if (left1 && left2 && left1['fruitIndex'] === left2['fruitIndex']) {
                        bannedIndices.push(left1['fruitIndex']);
                    }
                }
                if (row >= 2) {
                    var top1 = this.board[row - 1][col];
                    var top2 = this.board[row - 2][col];
                    if (top1 && top2 && top1['fruitIndex'] === top2['fruitIndex']) {
                        bannedIndices.push(top1['fruitIndex']);
                    }
                }
                // 2. 랜덤 과일 설정
                tile.setRandomFruitExcluding(bannedIndices);
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
                    // 색상 비교 → 과일 인덱스 비교
                    if (t1 && t2 && tile['fruitIndex'] === t1['fruitIndex'] && tile['fruitIndex'] === t2['fruitIndex']) {
                        matchedTiles.push(tile, t1, t2);
                    }
                }
                // 세로 검사
                if (row <= this.boardSize - 3) {
                    var t1 = this.board[row + 1][col];
                    var t2 = this.board[row + 2][col];
                    // 색상 비교 → 과일 인덱스 비교
                    if (t1 && t2 && tile['fruitIndex'] === t1['fruitIndex'] && tile['fruitIndex'] === t2['fruitIndex']) {
                        matchedTiles.push(tile, t1, t2);
                    }
                }
            }
        }
        matchedTiles = Array.from(new Set(matchedTiles));
        if (matchedTiles.length > 0) {
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
                        // **다시 매칭이 일어날 수 있으므로 재귀 호출**
                        _this.checkAndExplodeMatches();
                    }, 0.3);
                }, 0.3);
            }, 0.3);
        }
        else {
            // 폭발된 타일이 없으면 다음 행동 없음
            this.isSwapping = false;
        }
    };
    ThreeMatchBoard.prototype.swapTiles = function (tileA, tileB) {
        var _this = this;
        if (this.isSwapping)
            return;
        var rowDiff = Math.abs(tileA.row - tileB.row);
        var colDiff = Math.abs(tileA.col - tileB.col);
        if (!((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1))) {
            console.log("인접한 타일이 아닙니다! 교환 불가");
            return;
        }
        this.isSwapping = true;
        // 보드에서 교환
        var tempRow = tileA.row;
        var tempCol = tileA.col;
        this.board[tileA.row][tileA.col] = tileB;
        this.board[tileB.row][tileB.col] = tileA;
        tileA.row = tileB.row;
        tileA.col = tileB.col;
        tileB.row = tempRow;
        tileB.col = tempCol;
        var posA = this.getTilePosition(tileA.row, tileA.col);
        var posB = this.getTilePosition(tileB.row, tileB.col);
        cc.tween(tileA.node).to(0.2, { position: posA }).start();
        cc.tween(tileB.node).to(0.2, { position: posB }).call(function () {
            // 임시로 매칭 탐지
            var matchedTiles = [];
            var detectTempMatch = function () {
                for (var row = 0; row < _this.boardSize; row++) {
                    for (var col = 0; col < _this.boardSize; col++) {
                        var tile = _this.board[row][col];
                        if (!tile)
                            continue;
                        // 가로
                        if (col <= _this.boardSize - 3) {
                            var t1 = _this.board[row][col + 1];
                            var t2 = _this.board[row][col + 2];
                            if (t1 && t2 && tile['fruitIndex'] === t1['fruitIndex'] && tile['fruitIndex'] === t2['fruitIndex']) {
                                return true;
                            }
                        }
                        // 세로
                        if (row <= _this.boardSize - 3) {
                            var t1 = _this.board[row + 1][col];
                            var t2 = _this.board[row + 2][col];
                            if (t1 && t2 && tile['fruitIndex'] === t1['fruitIndex'] && tile['fruitIndex'] === t2['fruitIndex']) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            };
            if (detectTempMatch()) {
                _this.checkAndExplodeMatches(); // 매칭이 있으면 계속 진행
            }
            else {
                // 없으면 되돌리기
                // 위치, 보드 정보 다시 교환
                _this.board[tileA.row][tileA.col] = tileB;
                _this.board[tileB.row][tileB.col] = tileA;
                var tempRow2 = tileA.row;
                var tempCol2 = tileA.col;
                tileA.row = tileB.row;
                tileA.col = tileB.col;
                tileB.row = tempRow2;
                tileB.col = tempCol2;
                var resetPosA = _this.getTilePosition(tileA.row, tileA.col);
                var resetPosB = _this.getTilePosition(tileB.row, tileB.col);
                cc.tween(tileA.node).to(0.2, { position: resetPosA }).start();
                cc.tween(tileB.node).to(0.2, { position: resetPosB }).call(function () {
                    _this.isSwapping = false;
                }).start();
            }
        }).start();
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
                    tile.setRandomFruit(); // 이전의 setRandomColor()에서 교체
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