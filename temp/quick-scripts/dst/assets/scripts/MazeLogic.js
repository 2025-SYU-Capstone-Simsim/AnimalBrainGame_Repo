
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