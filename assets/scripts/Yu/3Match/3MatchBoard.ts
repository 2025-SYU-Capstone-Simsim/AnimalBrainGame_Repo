const { ccclass, property } = cc._decorator;
import ThreeMatchManager from "./3MatchManager";
import Tile from "./Tile";

@ccclass
export default class ThreeMatchBoard extends cc.Component {
    @property(cc.Prefab) tilePrefab: cc.Prefab = null;
    @property(ThreeMatchManager) gameManager: ThreeMatchManager = null;

    private boardSize: number = 8;  // 항상 8x8 고정
    private tileSize: number = 100;
    private gap: number = 5;

    private board: Tile[][] = [];
    private isSwapping: boolean = false;

    start() {
        this.node.color = cc.Color.GRAY;
        this.createBoard();
    }

    createBoard() {
        this.board = [];
        let totalTileSize = this.tileSize + this.gap;
        let startX = -(this.boardSize - 1) * totalTileSize / 2;
        let startY = (this.boardSize - 1) * totalTileSize / 2;

        for (let row = 0; row < this.boardSize; row++) {
            this.board[row] = [];
            for (let col = 0; col < this.boardSize; col++) {
                let tileNode = cc.instantiate(this.tilePrefab);
                tileNode.parent = this.node;

                let posX = startX + col * totalTileSize;
                let posY = startY - row * totalTileSize;
                tileNode.setPosition(posX, posY);

                let tile = tileNode.getComponent(Tile);
                tile.row = row;
                tile.col = col;

                let bannedColors: cc.Color[] = [];
                if (col >= 2) {
                    let left1 = this.board[row][col - 1];
                    let left2 = this.board[row][col - 2];
                    if (left1 && left2 && left1.node.color.equals(left2.node.color)) {
                        bannedColors.push(left1.node.color);
                    }
                }
                if (row >= 2) {
                    let top1 = this.board[row - 1][col];
                    let top2 = this.board[row - 2][col];
                    if (top1 && top2 && top1.node.color.equals(top2.node.color)) {
                        bannedColors.push(top1.node.color);
                    }
                }

                tile.setRandomColorExcluding(bannedColors);
                tile.addOutline();

                this.board[row][col] = tile;
            }
        }
    }

    private colorsAreEqual(c1: cc.Color, c2: cc.Color): boolean {
        return c1.r === c2.r && c1.g === c2.g && c1.b === c2.b;
    }

    checkAndExplodeMatches() {
        let matchedTiles: Tile[] = [];

        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                let tile = this.board[row][col];
                if (!tile) continue;

                // 가로 검사
                if (col <= this.boardSize - 3) {
                    let t1 = this.board[row][col + 1];
                    let t2 = this.board[row][col + 2];

                    if (t1 && t2 && this.colorsAreEqual(tile.node.color, t1.node.color) && this.colorsAreEqual(tile.node.color, t2.node.color)) {
                        console.log(`가로 매칭 발견! (${row}, ${col})`);
                        matchedTiles.push(tile, t1, t2);
                    }
                }

                // 세로 검사
                if (row <= this.boardSize - 3) {
                    let t1 = this.board[row + 1][col];
                    let t2 = this.board[row + 2][col];

                    if (t1 && t2 && this.colorsAreEqual(tile.node.color, t1.node.color) && this.colorsAreEqual(tile.node.color, t2.node.color)) {
                        console.log(`세로 매칭 발견! (${row}, ${col})`);
                        matchedTiles.push(tile, t1, t2);
                    }
                }
            }
        }

        matchedTiles = Array.from(new Set(matchedTiles));

        if (matchedTiles.length > 0) {
            console.log(`${matchedTiles.length}개 타일 폭발!`);
            if (this.gameManager) {
                this.gameManager.addMatchScore(matchedTiles.length);
            }
            for (const tile of matchedTiles) {
                tile.explode();
                this.board[tile.row][tile.col] = null;
            }

            this.scheduleOnce(() => {
                this.fillEmptySpaces();
                this.scheduleOnce(() => {
                    this.spawnNewTiles();
                    this.scheduleOnce(() => {
                        this.checkAndExplodeMatches();
                    }, 0.3);
                }, 0.3);
            }, 0.3);
        }
    }

    swapTiles(tileA: Tile, tileB: Tile) {
        if (this.isSwapping) return;

        let rowDiff = Math.abs(tileA.row - tileB.row);
        let colDiff = Math.abs(tileA.col - tileB.col);

        if (!((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1))) {
            console.log(" 인접한 타일이 아닙니다! 교환 불가");
            return;
        }
        this.isSwapping = true;

        let tempRow = tileA.row;
        let tempCol = tileA.col;

        this.board[tileA.row][tileA.col] = tileB;
        this.board[tileB.row][tileB.col] = tileA;

        tileA.row = tileB.row;
        tileA.col = tileB.col;
        tileB.row = tempRow;
        tileB.col = tempCol;

        let moveA = cc.moveTo(0.2, tileB.node.getPosition());
        let moveB = cc.moveTo(0.2, tileA.node.getPosition());

        cc.tween(tileA.node)
            .then(moveA)
            .start();

        cc.tween(tileB.node)
            .then(moveB)
            .call(() => {
                this.checkAndExplodeMatches();
                this.isSwapping = false;
            })
            .start();
    }

    fillEmptySpaces() {
        for (let col = 0; col < this.boardSize; col++) {
            for (let row = this.boardSize - 1; row >= 0; row--) {
                if (!this.board[row][col]) {
                    for (let upperRow = row - 1; upperRow >= 0; upperRow--) {
                        if (this.board[upperRow][col]) {
                            const fallingTile = this.board[upperRow][col];
                            this.board[row][col] = fallingTile;
                            this.board[upperRow][col] = null;

                            fallingTile.row = row;
                            fallingTile.col = col;

                            const targetPos = this.getTilePosition(row, col);
                            cc.tween(fallingTile.node)
                                .to(0.2, { position: targetPos })
                                .start();
                            break;
                        }
                    }
                }
            }
        }
    }

    spawnNewTiles() {
        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                if (!this.board[row][col]) {
                    const tileNode = cc.instantiate(this.tilePrefab);
                    tileNode.parent = this.node;

                    const pos = this.getTilePosition(row, col);
                    tileNode.setPosition(pos);

                    const tile = tileNode.getComponent(Tile);
                    tile.row = row;
                    tile.col = col;

                    tile.setRandomColor();
                    tile.addOutline();

                    this.board[row][col] = tile;
                }
            }
        }
    }

    getTilePosition(row: number, col: number): cc.Vec3 {
        let totalTileSize = this.tileSize + this.gap;
        let startX = -(this.boardSize - 1) * totalTileSize / 2;
        let startY = (this.boardSize - 1) * totalTileSize / 2;

        let x = startX + col * totalTileSize;
        let y = startY - row * totalTileSize;

        return new cc.Vec3(x, y, 0);
    }


    
}
