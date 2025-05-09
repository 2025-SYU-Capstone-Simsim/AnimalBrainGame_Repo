
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
require('./assets/scripts/Controller/LoginManager');
require('./assets/scripts/Controller/MainMenuScene');
require('./assets/scripts/Controller/SingleGameList');
require('./assets/scripts/Jang/GameData');
require('./assets/scripts/Jang/GameOverManager');
require('./assets/scripts/Jang/MainMenuManager');
require('./assets/scripts/Jang/MazeGameManager');
require('./assets/scripts/Jang/MazeLogic');
require('./assets/scripts/Jang/MazePlayer');
require('./assets/scripts/Sim/BlockCountGame/BlockCountGameManager');
require('./assets/scripts/Sim/RememberGame/RememberGameController');
require('./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button');
require('./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init');
require('./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic');
require('./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA');
require('./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn');
require('./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager');
require('./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init');
require('./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic');
require('./assets/scripts/Yu/3Match/3MatchBoard');
require('./assets/scripts/Yu/3Match/3MatchManager');
require('./assets/scripts/Yu/3Match/Tile');
require('./assets/scripts/Yu/MoleGame/MoleGameScene');

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
                    var __filename = 'preview-scripts/assets/scripts/Yu/MoleGame/MoleGameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c60ceABgEdFG7Git8NFhaSz', 'MoleGameScene');
// scripts/Yu/MoleGame/MoleGameScene.ts

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
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.exitButton = null;
        _this.Hole1 = null;
        _this.Hole2 = null;
        _this.Hole3 = null;
        _this.Hole4 = null;
        _this.Hole5 = null;
        _this.Hole6 = null;
        _this.Hole7 = null;
        _this.Hole8 = null;
        _this.Hole9 = null;
        _this.molePrefab = null;
        _this.molePrefabGood = null; // 순한 두더지
        _this.scoreLabel = null;
        _this.timerLabel = null;
        _this.hammerSprite = null;
        _this.hitParticlePrefab = null;
        _this.hammerNode = null;
        _this.moleHoles = [];
        _this.holeStates = [];
        _this.score = 0;
        _this.timer = 30;
        _this.isGameOver = false;
        _this.moleSpawnCallback = null;
        return _this;
    }
    GameScene.prototype.start = function () {
        this.moleHoles = [
            this.Hole1, this.Hole2, this.Hole3,
            this.Hole4, this.Hole5, this.Hole6,
            this.Hole7, this.Hole8, this.Hole9
        ];
        this.holeStates = new Array(this.moleHoles.length).fill(false);
        this.createHammer(); // 해머 생성 (기본 비활성)
        this.score = 0;
        this.timer = 30;
        this.updateScoreLabel();
        this.updateTimerLabel();
        this.schedule(this.decreaseTimer, 1);
        this.spawnMoles();
    };
    GameScene.prototype.createHammer = function () {
        this.hammerNode = new cc.Node("Hammer");
        var sprite = this.hammerNode.addComponent(cc.Sprite);
        sprite.spriteFrame = this.hammerSprite;
        this.hammerNode.parent = this.node;
        this.hammerNode.zIndex = 999;
        this.hammerNode.setContentSize(200, 200);
        this.hammerNode.anchorX = 0.2;
        this.hammerNode.anchorY = 0.8;
        this.hammerNode.active = false; // 기본 숨김
    };
    GameScene.prototype.decreaseTimer = function () {
        if (this.isGameOver)
            return;
        this.timer--;
        this.updateTimerLabel();
        if (this.timer <= 0)
            this.gameOver();
    };
    GameScene.prototype.updateScoreLabel = function () {
        this.scoreLabel.string = "\uC810\uC218: " + this.score;
    };
    GameScene.prototype.updateTimerLabel = function () {
        this.timerLabel.string = "\uC2DC\uAC04: " + this.timer;
    };
    GameScene.prototype.spawnMoles = function () {
        var _this = this;
        if (this.moleSpawnCallback)
            this.unschedule(this.moleSpawnCallback);
        this.moleSpawnCallback = function () {
            if (_this.isGameOver)
                return;
            var available = _this.holeStates
                .map(function (v, i) { return (!v ? i : -1); })
                .filter(function (i) { return i !== -1; });
            if (available.length === 0)
                return;
            var idx = available[Math.floor(Math.random() * available.length)];
            var hole = _this.moleHoles[idx];
            // 두더지 타입 랜덤 결정
            var isBadMole = Math.random() < 0.2;
            var mole = cc.instantiate(isBadMole ? _this.molePrefabGood : _this.molePrefab);
            mole.name = "Mole";
            hole.addChild(mole);
            mole.setPosition(0, -130);
            mole.active = true;
            _this.holeStates[idx] = true;
            var onHit = function (e) {
                e.stopPropagation();
                if (!mole.active || _this.isGameOver)
                    return;
                var worldPos = mole.convertToWorldSpaceAR(cc.v2(0, 0));
                var localPos = _this.node.convertToNodeSpaceAR(worldPos);
                _this.showHammerEffect(localPos);
                if (isBadMole) {
                    _this.score -= 10;
                }
                else {
                    _this.score += 10;
                }
                _this.updateScoreLabel();
                mole.off(cc.Node.EventType.TOUCH_END, onHit, _this);
                mole.destroy();
                _this.holeStates[idx] = false;
                var hit = cc.instantiate(_this.hitParticlePrefab);
                hit.setPosition(mole.getPosition());
                hole.addChild(hit);
            };
            mole.on(cc.Node.EventType.TOUCH_END, onHit, _this);
            cc.tween(mole)
                .to(0.2, { position: cc.v3(0, -20) }, { easing: 'sineOut' })
                .delay(1.0)
                .call(function () {
                if (mole.isValid) {
                    mole.off(cc.Node.EventType.TOUCH_END, onHit, _this);
                    mole.destroy();
                    _this.holeStates[idx] = false;
                }
            })
                .start();
        };
        this.schedule(this.moleSpawnCallback, 0.5, cc.macro.REPEAT_FOREVER);
    };
    GameScene.prototype.showHammerEffect = function (pos) {
        var _this = this;
        this.hammerNode.setPosition(pos);
        this.hammerNode.active = true;
        cc.tween(this.hammerNode)
            .set({ scale: 1.0 })
            .parallel(cc.tween().to(0.05, { scale: 1.2 }, { easing: 'cubicOut' }), cc.tween().by(0.05, { position: cc.v3(0, -30) }))
            .parallel(cc.tween().to(0.1, { scale: 1.0 }, { easing: 'bounceOut' }), cc.tween().by(0.1, { position: cc.v3(0, 30) }))
            .call(function () {
            _this.hammerNode.active = false;
        })
            .start();
    };
    GameScene.prototype.gameOver = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        if (this.moleSpawnCallback)
            this.unschedule(this.moleSpawnCallback);
        this.unscheduleAllCallbacks();
        this.timer = 0;
        this.updateTimerLabel();
        this.moleHoles.forEach(function (hole) {
            var mole = hole.getChildByName("Mole");
            if (mole)
                mole.active = false;
        });
        this.hammerNode.active = false;
        console.log("게임 종료!");
    };
    GameScene.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기");
        var canvas = document.getElementById('GameCanvas');
        if (canvas)
            canvas.style.cursor = 'default';
        cc.director.loadScene('SingleGameList');
    };
    __decorate([
        property(cc.Button)
    ], GameScene.prototype, "exitButton", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "Hole1", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "Hole2", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "Hole3", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "Hole4", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "Hole5", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "Hole6", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "Hole7", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "Hole8", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "Hole9", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameScene.prototype, "molePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameScene.prototype, "molePrefabGood", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "timerLabel", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameScene.prototype, "hammerSprite", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameScene.prototype, "hitParticlePrefab", void 0);
    GameScene = __decorate([
        ccclass
    ], GameScene);
    return GameScene;
}(cc.Component));
exports.default = GameScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXE1vbGVHYW1lXFxNb2xlR2FtZVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNExDO1FBM0x3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUVwQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUM3QixvQkFBYyxHQUFjLElBQUksQ0FBQyxDQUFDLFNBQVM7UUFDNUMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDdEIsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBQ3pDLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdqRCxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBQzFCLGdCQUFVLEdBQWMsRUFBRSxDQUFDO1FBQzNCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1Qix1QkFBaUIsR0FBYSxJQUFJLENBQUM7O0lBaUsvQyxDQUFDO0lBN0pHLHlCQUFLLEdBQUw7UUFDSSxJQUFJ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O2lEQUE2QjtJQUN0QjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFBcUM7SUFDekM7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQXFDO0lBbEJ4QyxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBNEw3QjtJQUFELGdCQUFDO0NBNUxELEFBNExDLENBNUxzQyxFQUFFLENBQUMsU0FBUyxHQTRMbEQ7a0JBNUxvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBleGl0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGUyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlNjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU4OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlOTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgbW9sZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIG1vbGVQcmVmYWJHb29kOiBjYy5QcmVmYWIgPSBudWxsOyAvLyDsiJztlZwg65GQ642U7KeAXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBoYW1tZXJTcHJpdGU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIGhpdFBhcnRpY2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtb2xlSG9sZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBob2xlU3RhdGVzOiBib29sZWFuW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAzMDtcclxuICAgIHByaXZhdGUgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBtb2xlU3Bhd25DYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2xlSG9sZXMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuSG9sZTEsIHRoaXMuSG9sZTIsIHRoaXMuSG9sZTMsXHJcbiAgICAgICAgICAgIHRoaXMuSG9sZTQsIHRoaXMuSG9sZTUsIHRoaXMuSG9sZTYsXHJcbiAgICAgICAgICAgIHRoaXMuSG9sZTcsIHRoaXMuSG9sZTgsIHRoaXMuSG9sZTlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuaG9sZVN0YXRlcyA9IG5ldyBBcnJheSh0aGlzLm1vbGVIb2xlcy5sZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSGFtbWVyKCk7ICAvLyDtlbTrqLgg7IOd7ISxICjquLDrs7gg67mE7Zmc7ISxKVxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAzMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlTGFiZWwoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyTGFiZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmRlY3JlYXNlVGltZXIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3Bhd25Nb2xlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNyZWF0ZUhhbW1lcigpIHtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUgPSBuZXcgY2MuTm9kZShcIkhhbW1lclwiKTtcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmhhbW1lck5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5oYW1tZXJTcHJpdGU7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuekluZGV4ID0gOTk5O1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5zZXRDb250ZW50U2l6ZSgyMDAsIDIwMCk7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLmFuY2hvclggPSAwLjI7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLmFuY2hvclkgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLmFjdGl2ZSA9IGZhbHNlOyAvLyDquLDrs7gg7Iio6rmAXHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVhc2VUaW1lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50aW1lci0tO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDw9IDApIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY29yZUxhYmVsKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBg7KCQ7IiYOiAke3RoaXMuc2NvcmV9YDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lckxhYmVsKCkge1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBg7Iuc6rCEOiAke3RoaXMudGltZXJ9YDtcclxuICAgIH1cclxuXHJcbiAgICBzcGF3bk1vbGVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vbGVTcGF3bkNhbGxiYWNrKSB0aGlzLnVuc2NoZWR1bGUodGhpcy5tb2xlU3Bhd25DYWxsYmFjayk7XHJcblxyXG50aGlzLm1vbGVTcGF3bkNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGF2YWlsYWJsZSA9IHRoaXMuaG9sZVN0YXRlc1xyXG4gICAgICAgIC5tYXAoKHYsIGkpID0+ICghdiA/IGkgOiAtMSkpXHJcbiAgICAgICAgLmZpbHRlcihpID0+IGkgIT09IC0xKTtcclxuICAgIGlmIChhdmFpbGFibGUubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWR4ID0gYXZhaWxhYmxlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZS5sZW5ndGgpXTtcclxuICAgIGNvbnN0IGhvbGUgPSB0aGlzLm1vbGVIb2xlc1tpZHhdO1xyXG5cclxuICAgIC8vIOuRkOuNlOyngCDtg4DsnoUg656c642kIOqysOyglVxyXG4gICAgY29uc3QgaXNCYWRNb2xlID0gTWF0aC5yYW5kb20oKSA8IDAuMjtcclxuICAgIGNvbnN0IG1vbGUgPSBjYy5pbnN0YW50aWF0ZShpc0JhZE1vbGUgPyB0aGlzLm1vbGVQcmVmYWJHb29kIDogdGhpcy5tb2xlUHJlZmFiKTtcclxuICAgIG1vbGUubmFtZSA9IFwiTW9sZVwiO1xyXG4gICAgaG9sZS5hZGRDaGlsZChtb2xlKTtcclxuICAgIG1vbGUuc2V0UG9zaXRpb24oMCwgLTEzMCk7XHJcbiAgICBtb2xlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmhvbGVTdGF0ZXNbaWR4XSA9IHRydWU7XHJcblxyXG4gICAgY29uc3Qgb25IaXQgPSAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgaWYgKCFtb2xlLmFjdGl2ZSB8fCB0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBtb2xlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIHRoaXMuc2hvd0hhbW1lckVmZmVjdChsb2NhbFBvcyk7XHJcblxyXG4gICAgICAgIGlmIChpc0JhZE1vbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSAtPSAxMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlTGFiZWwoKTtcclxuXHJcbiAgICAgICAgbW9sZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBvbkhpdCwgdGhpcyk7XHJcbiAgICAgICAgbW9sZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ob2xlU3RhdGVzW2lkeF0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgaGl0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5oaXRQYXJ0aWNsZVByZWZhYik7XHJcbiAgICAgICAgaGl0LnNldFBvc2l0aW9uKG1vbGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgaG9sZS5hZGRDaGlsZChoaXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBtb2xlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgb25IaXQsIHRoaXMpO1xyXG5cclxuICAgIGNjLnR3ZWVuKG1vbGUpXHJcbiAgICAgICAgLnRvKDAuMiwgeyBwb3NpdGlvbjogY2MudjMoMCwgLTIwKSB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pXHJcbiAgICAgICAgLmRlbGF5KDEuMClcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtb2xlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIG1vbGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgb25IaXQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbW9sZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGVTdGF0ZXNbaWR4XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxufTtcclxuXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZSh0aGlzLm1vbGVTcGF3bkNhbGxiYWNrLCAwLjUsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcclxufVxyXG5cclxuc2hvd0hhbW1lckVmZmVjdChwb3M6IGNjLlZlYzIpIHtcclxuICAgIHRoaXMuaGFtbWVyTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgdGhpcy5oYW1tZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgY2MudHdlZW4odGhpcy5oYW1tZXJOb2RlKVxyXG4gICAgICAgIC5zZXQoeyBzY2FsZTogMS4wIH0pXHJcbiAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMDUsIHsgc2NhbGU6IDEuMiB9LCB7IGVhc2luZzogJ2N1YmljT3V0JyB9KSxcclxuICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjA1LCB7IHBvc2l0aW9uOiBjYy52MygwLCAtMzApIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjEsIHsgc2NhbGU6IDEuMCB9LCB7IGVhc2luZzogJ2JvdW5jZU91dCcgfSksXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4xLCB7IHBvc2l0aW9uOiBjYy52MygwLCAzMCkgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbW1lck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxufVxyXG5cclxuXHJcblxyXG4gICAgZ2FtZU92ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMubW9sZVNwYXduQ2FsbGJhY2spIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1vbGVTcGF3bkNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyTGFiZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2xlSG9sZXMuZm9yRWFjaChob2xlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW9sZSA9IGhvbGUuZ2V0Q2hpbGRCeU5hbWUoXCJNb2xlXCIpO1xyXG4gICAgICAgICAgICBpZiAobW9sZSkgbW9sZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6rKM7J6EIOyiheujjCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZExpc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsi7HquIAg6rKM7J6EIOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLBcIik7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dhbWVDYW52YXMnKTtcclxuICAgICAgICBpZiAoY2FudmFzKSBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU2luZ2xlR2FtZUxpc3QnKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountGameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f2d2MhIYtOX5HlJict5IJh', 'BlockCountGameManager');
// scripts/Sim/BlockCountGame/BlockCountGameManager.ts

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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 1) 옵션 버튼들
        _this.optionButtons = [];
        // 2) 결과 레이블
        _this.resultLabel = null;
        // 3) 블록 부모 노드
        _this.blockParent = null;
        // 4) 블록 프리팹
        _this.blockPrefab = null;
        // 5) Next/Skip 버튼
        _this.nextButton = null;
        // 6) Score 레이블
        _this.scoreLabel = null;
        // 7) TIMEOUT 표시용 레이블
        _this.timeoutLabel = null;
        // 8) 남은 시간 표시용 레이블
        _this.timeLabel = null;
        // 리스트로 돌아가기 버튼 
        _this.exitButton = null;
        _this.correctCount = 0;
        _this.score = 0;
        _this.answered = false;
        // 전체 게임 시간 (초)
        _this.timeLeft = 100;
        // y축(높이)마다 사용할 색상
        _this.layerColors = [
            cc.color(100, 170, 255),
            cc.color(255, 100, 100),
            cc.color(100, 255, 100),
            cc.color(255, 255, 100),
        ];
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        // Next/Skip 버튼 클릭
        if (this.nextButton) {
            this.nextButton.node.on('click', this.nextQuestion, this);
        }
        // Score 초기화
        this.score = 0;
        if (this.scoreLabel) {
            this.scoreLabel.string = "\uC810\uC218 : " + this.score + "\uC810";
        }
        // TIMEOUT 레이블 숨기기
        if (this.timeoutLabel) {
            this.timeoutLabel.node.active = false;
        }
        // 남은 시간 레이블 초기화
        this.timeLeft = 100;
        if (this.timeLabel) {
            this.timeLabel.string = "\uB0A8\uC740 \uC2DC\uAC04: " + this.timeLeft + "\uCD08";
        }
        // 전체 게임 100초 카운트다운 시작
        this.startTimer();
        // 첫 문제 생성
        this.generateQuestion();
    };
    /** 100초 타이머 시작 */
    GameManager.prototype.startTimer = function () {
        this.unschedule(this.updateTimer);
        this.timeLeft = 100;
        if (this.timeLabel) {
            this.timeLabel.string = "\uB0A8\uC740 \uC2DC\uAC04: " + this.timeLeft + "\uCD08";
        }
        this.schedule(this.updateTimer, 1);
    };
    /** 1초마다 호출되어 남은 시간을 갱신 */
    GameManager.prototype.updateTimer = function () {
        this.timeLeft--;
        if (this.timeLabel) {
            this.timeLabel.string = "\uB0A8\uC740 \uC2DC\uAC04: " + this.timeLeft + "\uCD08";
        }
        if (this.timeLeft <= 0) {
            this.unschedule(this.updateTimer);
            this.onTimeout();
        }
    };
    /** 전체 시간이 다 됐을 때 호출 */
    GameManager.prototype.onTimeout = function () {
        // “TIMEOUT” 표시
        if (this.timeoutLabel) {
            this.timeoutLabel.node.active = true;
            this.timeoutLabel.string = 'TIMEOUT';
        }
        // 모든 버튼 비활성화
        this.optionButtons.forEach(function (btn) { return btn.interactable = false; });
        if (this.nextButton) {
            this.nextButton.interactable = false;
        }
    };
    /** 새 문제 생성 (시간은 계속 흐릅니다) */
    GameManager.prototype.generateQuestion = function () {
        var _this = this;
        this.answered = false;
        // Next 버튼 레이블 초기화
        if (this.nextButton) {
            var lbl = this.nextButton.node.getComponentInChildren(cc.Label);
            lbl.string = '건너뛰기';
            this.nextButton.interactable = true;
        }
        // 결과 레이블 초기화
        this.resultLabel.string = '';
        // 정답 개수 결정 및 블록 배치
        this.correctCount = Math.floor(Math.random() * 20) + 1;
        this.spawnBlocks(this.correctCount);
        // 보기 세팅
        var options = new Set([this.correctCount]);
        while (options.size < this.optionButtons.length) {
            options.add(Math.floor(Math.random() * 30) + 1);
        }
        var list = Array.from(options);
        this.shuffleArray(list);
        this.optionButtons.forEach(function (btn, i) {
            btn.interactable = true;
            var lbl = btn.node.getComponentInChildren(cc.Label);
            lbl.string = list[i].toString();
            btn.node.off('click');
            btn.node.on('click', function () { return _this.checkAnswer(list[i]); });
        });
    };
    /** 답안 확인 */
    GameManager.prototype.checkAnswer = function (selected) {
        if (this.answered)
            return;
        // 정답인 경우
        if (selected === this.correctCount) {
            this.answered = true;
            this.resultLabel.string = '🎉 정답입니다!';
            this.score += 20; // 맞았을 때 +10
            if (this.scoreLabel) {
                this.scoreLabel.string = "\uC810\uC218 : " + this.score + "\uC810";
            }
            if (this.nextButton) {
                var lbl = this.nextButton.node.getComponentInChildren(cc.Label);
                lbl.string = '다음으로';
            }
        }
        // 오답인 경우
        else {
            this.resultLabel.string = '❌ 틀렸습니다!';
            this.score -= 10; // 틀렸을 때 -10
            if (this.scoreLabel) {
                this.scoreLabel.string = "\uC810\uC218 : " + this.score + "\uC810";
            }
            if (this.nextButton) {
                var lbl = this.nextButton.node.getComponentInChildren(cc.Label);
                lbl.string = '건너뛰기';
            }
        }
    };
    /** 다음 문제로 넘어가기 */
    GameManager.prototype.nextQuestion = function () {
        if (this.timeLeft > 0) {
            this.generateQuestion();
        }
    };
    /** 블록 생성 & 애니메이션 (column-first, y축 기준) */
    GameManager.prototype.spawnBlocks = function (count) {
        var _this = this;
        if (!this.blockParent) {
            console.error('[GameManager] blockParent가 연결되지 않았습니다!');
            return;
        }
        this.blockParent.removeAllChildren();
        var blockW = 100, blockH = 50, blockD = 50;
        var maxSize = 4, maxHeight = 4;
        // 가능한 (x,z) 좌표 셔플
        var xzList = [];
        for (var x = 0; x < maxSize; x++) {
            for (var z = 0; z < maxSize; z++) {
                xzList.push({ x: x, z: z });
            }
        }
        this.shuffleArray(xzList);
        var placedCoords = [];
        var placed = 0;
        outer: for (var _i = 0, xzList_1 = xzList; _i < xzList_1.length; _i++) {
            var _a = xzList_1[_i], x = _a.x, z = _a.z;
            for (var y = 0; y < maxHeight && placed < count; y++) {
                placedCoords.push({ x: x, z: z, y: y });
                placed++;
            }
            if (placed >= count)
                break outer;
        }
        // y층별 그룹핑
        var layers = [];
        var maxY = 0;
        placedCoords.forEach(function (p) {
            maxY = Math.max(maxY, p.y);
            if (!layers[p.y])
                layers[p.y] = [];
            layers[p.y].push(p);
        });
        // 애니메이션 파라미터
        var dropH = 500;
        var dropDur = 0.15;
        var layerGap = dropDur + 0.08;
        var itemGap = 0.05;
        var _loop_1 = function (y) {
            var layer = layers[y] || [];
            layer.forEach(function (p, i) {
                var _a;
                var block = cc.instantiate(_this.blockPrefab);
                block.parent = _this.blockParent;
                block.zIndex = p.x + p.z + p.y * 10;
                // 아이소메트릭 목표 위치
                var isoX = (p.x - p.z) * (blockW / 2);
                var floorY = -300;
                var baseY = floorY + blockH / 2;
                var targetY = -(p.x + p.z) * (blockH / 2)
                    + baseY
                    + p.y * blockD;
                block.setPosition(isoX, targetY + dropH, 0);
                // 층마다 색상 적용
                var spr = block.getComponent(cc.Sprite);
                spr.node.color = (_a = _this.layerColors[p.y]) !== null && _a !== void 0 ? _a : cc.color(200, 200, 200);
                // tween 애니메이션
                var totalDelay = y * layerGap + i * itemGap;
                cc.tween(block)
                    .delay(totalDelay)
                    .to(dropDur, { position: cc.v3(isoX, targetY, 0) }, { easing: 'bounceOut' })
                    .start();
            });
        };
        // y=0→1→… 순서대로 떨어뜨리기
        for (var y = 0; y <= maxY; y++) {
            _loop_1(y);
        }
    };
    /** 배열 셔플 유틸 */
    GameManager.prototype.shuffleArray = function (arr) {
        var _a;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        }
    };
    GameManager.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기기");
        cc.director.loadScene('SingleGameList');
    };
    __decorate([
        property([cc.Button])
    ], GameManager.prototype, "optionButtons", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "resultLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "blockParent", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "blockPrefab", void 0);
    __decorate([
        property(cc.Button)
    ], GameManager.prototype, "nextButton", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "timeoutLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "timeLabel", void 0);
    __decorate([
        property(cc.Button)
    ], GameManager.prototype, "exitButton", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxCbG9ja0NvdW50R2FtZVxcQmxvY2tDb3VudEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMFJDO1FBelJDLFlBQVk7UUFFWixtQkFBYSxHQUFnQixFQUFFLENBQUM7UUFFaEMsWUFBWTtRQUVaLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGNBQWM7UUFFZCxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFZO1FBRVosaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsa0JBQWtCO1FBRWxCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGVBQWU7UUFFZixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixxQkFBcUI7UUFFckIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsbUJBQW1CO1FBRW5CLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZ0JBQWdCO1FBQ0ssZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRWxDLGVBQWU7UUFDUCxjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRS9CLGtCQUFrQjtRQUNWLGlCQUFXLEdBQWU7WUFDaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxH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IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIDEpIOyYteyFmCDrsoTtirzrk6RcclxuICBAcHJvcGVydHkoW2NjLkJ1dHRvbl0pXHJcbiAgb3B0aW9uQnV0dG9uczogY2MuQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgLy8gMikg6rKw6rO8IOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICByZXN1bHRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAvLyAzKSDruJTroZ0g67aA66qoIOuFuOuTnFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJsb2NrUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gNCkg67iU66GdIO2UhOumrO2MuVxyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgYmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gIC8vIDUpIE5leHQvU2tpcCDrsoTtirxcclxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gIG5leHRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gIC8vIDYpIFNjb3JlIOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIC8vIDcpIFRJTUVPVVQg7ZGc7Iuc7JqpIOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICB0aW1lb3V0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgLy8gOCkg64Ko7J2AIOyLnOqwhCDtkZzsi5zsmqkg66CI7J2067iUXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHRpbWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAvLyDrpqzsiqTtirjroZwg64+M7JWE6rCA6riwIOuyhO2KvCBcclxuICBAcHJvcGVydHkoY2MuQnV0dG9uKSBleGl0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBjb3JyZWN0Q291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGFuc3dlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIOyghOyytCDqsozsnoQg7Iuc6rCEICjstIgpXHJcbiAgcHJpdmF0ZSB0aW1lTGVmdDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAvLyB57LaVKOuGkuydtCnrp4jri6Qg7IKs7Jqp7ZWgIOyDieyDgVxyXG4gIHByaXZhdGUgbGF5ZXJDb2xvcnM6IGNjLkNvbG9yW10gPSBbXHJcbiAgICBjYy5jb2xvcigxMDAsIDE3MCwgMjU1KSwgIC8vIHk9MFxyXG4gICAgY2MuY29sb3IoMjU1LCAxMDAsIDEwMCksICAvLyB5PTFcclxuICAgIGNjLmNvbG9yKDEwMCwgMjU1LCAxMDApLCAgLy8geT0yXHJcbiAgICBjYy5jb2xvcigyNTUsIDI1NSwgMTAwKSwgIC8vIHk9M1xyXG4gIF07XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIE5leHQvU2tpcCDrsoTtirwg7YG066atXHJcbiAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMubmV4dFF1ZXN0aW9uLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTY29yZSDstIjquLDtmZRcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkge1xyXG4gICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYOygkOyImCA6ICR7dGhpcy5zY29yZX3soJBgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRJTUVPVVQg66CI7J2067iUIOyIqOq4sOq4sFxyXG4gICAgaWYgKHRoaXMudGltZW91dExhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g64Ko7J2AIOyLnOqwhCDroIjsnbTruJQg7LSI6riw7ZmUXHJcbiAgICB0aGlzLnRpbWVMZWZ0ID0gMTAwO1xyXG4gICAgaWYgKHRoaXMudGltZUxhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IGDrgqjsnYAg7Iuc6rCEOiAke3RoaXMudGltZUxlZnR97LSIYDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsoITssrQg6rKM7J6EIDEwMOy0iCDsubTsmrTtirjri6TsmrQg7Iuc7J6RXHJcbiAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuXHJcbiAgICAvLyDssqsg66y47KCcIOyDneyEsVxyXG4gICAgdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvKiogMTAw7LSIIO2DgOydtOuouCDsi5zsnpEgKi9cclxuICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XHJcbiAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lcik7XHJcbiAgICB0aGlzLnRpbWVMZWZ0ID0gMTAwO1xyXG4gICAgaWYgKHRoaXMudGltZUxhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IGDrgqjsnYAg7Iuc6rCEOiAke3RoaXMudGltZUxlZnR97LSIYDtcclxuICAgIH1cclxuICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMSk7XHJcbiAgfVxyXG5cclxuICAvKiogMey0iOuniOuLpCDtmLjstpzrkJjslrQg64Ko7J2AIOyLnOqwhOydhCDqsLHsi6AgKi9cclxuICBwcml2YXRlIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgdGhpcy50aW1lTGVmdC0tO1xyXG4gICAgaWYgKHRoaXMudGltZUxhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IGDrgqjsnYAg7Iuc6rCEOiAke3RoaXMudGltZUxlZnR97LSIYDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbWVMZWZ0IDw9IDApIHtcclxuICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIpO1xyXG4gICAgICB0aGlzLm9uVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOyghOyytCDsi5zqsITsnbQg64ukIOuQkOydhCDrlYwg7Zi47LacICovXHJcbiAgcHJpdmF0ZSBvblRpbWVvdXQoKSB7XHJcbiAgICAvLyDigJxUSU1FT1VU4oCdIO2RnOyLnFxyXG4gICAgaWYgKHRoaXMudGltZW91dExhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy50aW1lb3V0TGFiZWwuc3RyaW5nID0gJ1RJTUVPVVQnO1xyXG4gICAgfVxyXG4gICAgLy8g66qo65OgIOuyhO2KvCDruYTtmZzshLHtmZRcclxuICAgIHRoaXMub3B0aW9uQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uaW50ZXJhY3RhYmxlID0gZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMubmV4dEJ1dHRvbikge1xyXG4gICAgICB0aGlzLm5leHRCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog7IOIIOusuOygnCDsg53shLEgKOyLnOqwhOydgCDqs4Tsho0g7Z2Q66aF64uI64ukKSAqL1xyXG4gIGdlbmVyYXRlUXVlc3Rpb24oKSB7XHJcbiAgICB0aGlzLmFuc3dlcmVkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTmV4dCDrsoTtirwg66CI7J2067iUIOy0iOq4sO2ZlFxyXG4gICAgaWYgKHRoaXMubmV4dEJ1dHRvbikge1xyXG4gICAgICBjb25zdCBsYmwgPSB0aGlzLm5leHRCdXR0b24ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSE7XHJcbiAgICAgIGxibC5zdHJpbmcgPSAn6rG064SI65uw6riwJztcclxuICAgICAgdGhpcy5uZXh0QnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6rKw6rO8IOugiOydtOu4lCDstIjquLDtmZRcclxuICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJyc7XHJcblxyXG4gICAgLy8g7KCV64u1IOqwnOyImCDqsrDsoJUg67CPIOu4lOuhnSDrsLDsuZhcclxuICAgIHRoaXMuY29ycmVjdENvdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApICsgMTtcclxuICAgIHRoaXMuc3Bhd25CbG9ja3ModGhpcy5jb3JyZWN0Q291bnQpO1xyXG5cclxuICAgIC8vIOuztOq4sCDshLjtjIVcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0PG51bWJlcj4oW3RoaXMuY29ycmVjdENvdW50XSk7XHJcbiAgICB3aGlsZSAob3B0aW9ucy5zaXplIDwgdGhpcy5vcHRpb25CdXR0b25zLmxlbmd0aCkge1xyXG4gICAgICBvcHRpb25zLmFkZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKyAxKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpc3QgPSBBcnJheS5mcm9tKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5zaHVmZmxlQXJyYXkobGlzdCk7XHJcbiAgICB0aGlzLm9wdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICBjb25zdCBsYmwgPSBidG4ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSE7XHJcbiAgICAgIGxibC5zdHJpbmcgPSBsaXN0W2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgIGJ0bi5ub2RlLm9mZignY2xpY2snKTtcclxuICAgICAgYnRuLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5jaGVja0Fuc3dlcihsaXN0W2ldKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiDri7XslYgg7ZmV7J24ICovXHJcbiAgY2hlY2tBbnN3ZXIoc2VsZWN0ZWQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuYW5zd2VyZWQpIHJldHVybjtcclxuXHJcbiAgICAvLyDsoJXri7Xsnbgg6rK97JqwXHJcbiAgICBpZiAoc2VsZWN0ZWQgPT09IHRoaXMuY29ycmVjdENvdW50KSB7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgPSAn8J+OiSDsoJXri7XsnoXri4jri6QhJztcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDIwOyAgLy8g66ee7JWY7J2EIOuVjCArMTBcclxuICAgICAgICBpZiAodGhpcy5zY29yZUxhYmVsKSB7XHJcbiAgICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYOygkOyImCA6ICR7dGhpcy5zY29yZX3soJBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgICAgICBjb25zdCBsYmwgPSB0aGlzLm5leHRCdXR0b24ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSE7XHJcbiAgICAgICAgICBsYmwuc3RyaW5nID0gJ+uLpOydjOycvOuhnCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvLyDsmKTri7Xsnbgg6rK97JqwXHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9ICfinYwg7YuA66C47Iq164uI64ukISc7XHJcbiAgICAgICAgdGhpcy5zY29yZSAtPSAxMDsgIC8vIO2LgOuguOydhCDrlYwgLTEwXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkge1xyXG4gICAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGDsoJDsiJggOiAke3RoaXMuc2NvcmV97KCQYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dEJ1dHRvbikge1xyXG4gICAgICAgICAgY29uc3QgbGJsID0gdGhpcy5uZXh0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkhO1xyXG4gICAgICAgICAgbGJsLnN0cmluZyA9ICfqsbTrhIjrm7DquLAnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOuLpOydjCDrrLjsoJzroZwg64SY7Ja06rCA6riwICovXHJcbiAgbmV4dFF1ZXN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMudGltZUxlZnQgPiAwKSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVRdWVzdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOu4lOuhnSDsg53shLEgJiDslaDri4jrqZTsnbTshZggKGNvbHVtbi1maXJzdCwgeey2lSDquLDspIApICovXHJcbiAgc3Bhd25CbG9ja3MoY291bnQ6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLmJsb2NrUGFyZW50KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tHYW1lTWFuYWdlcl0gYmxvY2tQYXJlbnTqsIAg7Jew6rKw65CY7KeAIOyViuyVmOyKteuLiOuLpCEnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ibG9ja1BhcmVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgIGNvbnN0IGJsb2NrVyA9IDEwMCwgYmxvY2tIID0gNTAsIGJsb2NrRCA9IDUwO1xyXG4gICAgY29uc3QgbWF4U2l6ZSA9IDQsIG1heEhlaWdodCA9IDQ7XHJcblxyXG4gICAgLy8g6rCA64ql7ZWcICh4LHopIOyijO2RnCDshZTtlIxcclxuICAgIGNvbnN0IHh6TGlzdDogeyB4OiBudW1iZXI7IHo6IG51bWJlciB9W10gPSBbXTtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWF4U2l6ZTsgeCsrKSB7XHJcbiAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbWF4U2l6ZTsgeisrKSB7XHJcbiAgICAgICAgeHpMaXN0LnB1c2goeyB4LCB6IH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNodWZmbGVBcnJheSh4ekxpc3QpO1xyXG5cclxuICAgIC8vIOy7rOufvCDri6jsnITroZwgeT0w4oaSMeKGkuKApiDssYTsmrDquLBcclxuICAgIHR5cGUgUG9zID0geyB4OiBudW1iZXI7IHo6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgICBjb25zdCBwbGFjZWRDb29yZHM6IFBvc1tdID0gW107XHJcbiAgICBsZXQgcGxhY2VkID0gMDtcclxuICAgIG91dGVyOiBmb3IgKGNvbnN0IHsgeCwgeiB9IG9mIHh6TGlzdCkge1xyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1heEhlaWdodCAmJiBwbGFjZWQgPCBjb3VudDsgeSsrKSB7XHJcbiAgICAgICAgcGxhY2VkQ29vcmRzLnB1c2goeyB4LCB6LCB5IH0pO1xyXG4gICAgICAgIHBsYWNlZCsrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwbGFjZWQgPj0gY291bnQpIGJyZWFrIG91dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHnsuLXrs4Qg6re466O57ZWRXHJcbiAgICBjb25zdCBsYXllcnM6IFBvc1tdW10gPSBbXTtcclxuICAgIGxldCBtYXhZID0gMDtcclxuICAgIHBsYWNlZENvb3Jkcy5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICBtYXhZID0gTWF0aC5tYXgobWF4WSwgcC55KTtcclxuICAgICAgaWYgKCFsYXllcnNbcC55XSkgbGF5ZXJzW3AueV0gPSBbXTtcclxuICAgICAgbGF5ZXJzW3AueV0ucHVzaChwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOyVoOuLiOuplOydtOyFmCDtjIzrnbzrr7jthLBcclxuICAgIGNvbnN0IGRyb3BIICAgID0gNTAwO1xyXG4gICAgY29uc3QgZHJvcER1ciAgPSAwLjE1O1xyXG4gICAgY29uc3QgbGF5ZXJHYXAgPSBkcm9wRHVyICsgMC4wODtcclxuICAgIGNvbnN0IGl0ZW1HYXAgID0gMC4wNTtcclxuXHJcbiAgICAvLyB5PTDihpIx4oaS4oCmIOyInOyEnOuMgOuhnCDrlqjslrTrnKjrpqzquLBcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICBjb25zdCBsYXllciA9IGxheWVyc1t5XSB8fCBbXTtcclxuICAgICAgbGF5ZXIuZm9yRWFjaCgocCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9ja1ByZWZhYik7XHJcbiAgICAgICAgYmxvY2sucGFyZW50ID0gdGhpcy5ibG9ja1BhcmVudDtcclxuICAgICAgICBibG9jay56SW5kZXggPSBwLnggKyBwLnogKyBwLnkgKiAxMDtcclxuXHJcbiAgICAgICAgLy8g7JWE7J207IaM66mU7Yq466atIOuqqe2RnCDsnITsuZhcclxuICAgICAgICBjb25zdCBpc29YICAgPSAocC54IC0gcC56KSAqIChibG9ja1cgLyAyKTtcclxuICAgICAgICBjb25zdCBmbG9vclkgPSAtMzAwO1xyXG4gICAgICAgIGNvbnN0IGJhc2VZICA9IGZsb29yWSArIGJsb2NrSCAvIDI7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0WSA9IC0ocC54ICsgcC56KSAqIChibG9ja0ggLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGJhc2VZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgcC55ICogYmxvY2tEO1xyXG5cclxuICAgICAgICBibG9jay5zZXRQb3NpdGlvbihpc29YLCB0YXJnZXRZICsgZHJvcEgsIDApO1xyXG5cclxuICAgICAgICAvLyDsuLXrp4jri6Qg7IOJ7IOBIOyggeyaqVxyXG4gICAgICAgIGNvbnN0IHNwciA9IGJsb2NrLmdldENvbXBvbmVudChjYy5TcHJpdGUpITtcclxuICAgICAgICBzcHIubm9kZS5jb2xvciA9IHRoaXMubGF5ZXJDb2xvcnNbcC55XSA/PyBjYy5jb2xvcigyMDAsIDIwMCwgMjAwKTtcclxuXHJcbiAgICAgICAgLy8gdHdlZW4g7JWg64uI66mU7J207IWYXHJcbiAgICAgICAgY29uc3QgdG90YWxEZWxheSA9IHkgKiBsYXllckdhcCArIGkgKiBpdGVtR2FwO1xyXG4gICAgICAgIGNjLnR3ZWVuKGJsb2NrKVxyXG4gICAgICAgICAgLmRlbGF5KHRvdGFsRGVsYXkpXHJcbiAgICAgICAgICAudG8oZHJvcER1ciwgeyBwb3NpdGlvbjogY2MudjMoaXNvWCwgdGFyZ2V0WSwgMCkgfSwgeyBlYXNpbmc6ICdib3VuY2VPdXQnIH0pXHJcbiAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog67Cw7Je0IOyFlO2UjCDsnKDti7ggKi9cclxuICBzaHVmZmxlQXJyYXk8VD4oYXJyOiBUW10pIHtcclxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgIFthcnJbaV0sIGFycltqXV0gPSBbYXJyW2pdLCBhcnJbaV1dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZExpc3QoKXtcclxuICAgIGNvbnNvbGUubG9nKFwi7Iux6riAIOqyjOyehCDrpqzsiqTtirjroZwg64+M7JWE6rCA6riw6riwXCIpO1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTaW5nbGVHYW1lTGlzdCcpO1xyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MainMenuManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ce4bjAkZFBSr8F4aGIbGs9', 'MainMenuManager');
// scripts/Jang/MainMenuManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameData_1 = require("./GameData"); // 글로벌 데이터를 관리하는 스크립트
const { ccclass, property } = cc._decorator;
let MainMenuManager = class MainMenuManager extends cc.Component {
    constructor() {
        super(...arguments);
        this.startGameButton = null; // 에디터에서 게임 시작 버튼 노드를 연결
    }
    start() {
        // 게임 시작 시 글로벌 레벨 데이터를 1로 초기화 (MainScene 갔다오면 항상 1레벨부터 시작)
        GameData_1.default.currentLevel = 1;
        // 게임 시작 버튼 클릭 이벤트 연결
        this.startGameButton.on('click', this.onStartGame, this);
    }
    onStartGame() {
        // MazeScene으로 씬 전환
        cc.director.loadScene("MazeScene");
    }
};
__decorate([
    property(cc.Node)
], MainMenuManager.prototype, "startGameButton", void 0);
MainMenuManager = __decorate([
    ccclass
], MainMenuManager);
exports.default = MainMenuManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWFpbk1lbnVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFFdEYseUNBQWtDLENBQUMscUJBQXFCO0FBQ3hELE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUc1QyxJQUFxQixlQUFlLEdBQXBDLE1BQXFCLGVBQWdCLFNBQVEsRUFBRSxDQUFDLFNBQVM7SUFBekQ7O1FBRUksb0JBQWUsR0FBWSxJQUFJLENBQUMsQ0FBRSx3QkFBd0I7SUFjOUQsQ0FBQztJQVpHLEtBQUs7UUFDRCwwREFBMEQ7UUFDMUQsa0JBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsV0FBVztRQUNQLG1CQUFtQjtRQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0osQ0FBQTtBQWRHO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2M7QUFGZixlQUFlO0lBRG5DLE9BQU87R0FDYSxlQUFlLENBZ0JuQztrQkFoQm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4vR2FtZURhdGFcIjsgLy8g6riA66Gc67KMIOuNsOydtO2EsOulvCDqtIDrpqztlZjripQg7Iqk7YGs66a97Yq4XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydEdhbWVCdXR0b246IGNjLk5vZGUgPSBudWxsOyAgLy8g7JeQ65SU7YSw7JeQ7IScIOqyjOyehCDsi5zsnpEg67KE7Yq8IOuFuOuTnOulvCDsl7DqsrBcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyDqsozsnoQg7Iuc7J6RIOyLnCDquIDroZzrsowg66CI67KoIOuNsOydtO2EsOulvCAx66GcIOy0iOq4sO2ZlCAoTWFpblNjZW5lIOqwlOuLpOyYpOuptCDtla3sg4EgMeugiOuyqOu2gO2EsCDsi5zsnpEpXHJcbiAgICAgICAgR2FtZURhdGEuY3VycmVudExldmVsID0gMTtcclxuXHJcbiAgICAgICAgLy8g6rKM7J6EIOyLnOyekSDrsoTtirwg7YG066atIOydtOuypO2KuCDsl7DqsrBcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5vbignY2xpY2snLCB0aGlzLm9uU3RhcnRHYW1lLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0R2FtZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBNYXplU2NlbmXsnLzroZwg7JSsIOyghO2ZmFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1hemVTY2VuZVwiKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5e77uqnYZN8Zczx4Uw6LMj', 'Reversecorrect_Show_QnA');
// scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA.ts

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
var show_QnA = /** @class */ (function (_super) {
    __extends(show_QnA, _super);
    function show_QnA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.random_label = null;
        _this.buttonLayout = null;
        _this.sequence_label = null; // 
        _this.cnt = 3;
        _this.hideDelay = 1.5;
        _this.defaultHideDelay = 2; // 기본값 유지용
        _this.minHideDelay = 0.1; // 최소 표시 시간
        return _this;
    }
    show_QnA_1 = show_QnA;
    show_QnA.prototype.start = function () {
        this.showNewQuestion();
    };
    //문제 보여주는 로직 + 문제 맞출 수록 시간 초 조정 처음 1.6초 다음 1.4 다음 1.2
    show_QnA.prototype.showNewQuestion = function () {
        var _this = this;
        var roundIndex = show_QnA_1.correctCount % 3;
        this.hideDelay = 1.6 - (roundIndex * 0.2);
        show_QnA_1.isReverse = Math.random() < 0.5; // 
        var randomNum = this.print_randnum();
        this.random_label.string = "" + randomNum;
        this.random_label.node.active = true;
        this.setButtonsInteractable(false);
        if (this.sequence_label) {
            this.sequence_label.string = "";
            this.sequence_label.node.active = false;
        }
        this.scheduleOnce(function () {
            _this.random_label.node.active = false;
            if (_this.sequence_label) {
                _this.sequence_label.string = show_QnA_1.isReverse ? "역방향" : "정방향";
                _this.sequence_label.node.active = true;
            }
            if (!show_QnA_1.isGameOver) {
                _this.setButtonsInteractable(true);
            }
        }, this.hideDelay);
    };
    //비교 가능한 랜덤 난수 배열로 만드는 로직 + 3문제 마다 시간을 다시 초기화 
    show_QnA.prototype.make_randnum = function () {
        show_QnA_1.qa = [];
        var candid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (show_QnA_1.correctCount > 0 && show_QnA_1.correctCount % 3 === 0) {
            this.cnt++;
            this.hideDelay = this.defaultHideDelay; // 3문제 맞췄으면 시간 초기화
        }
        for (var i = 0; i < this.cnt; i++) {
            var rand = candid[Math.floor(Math.random() * candid.length)];
            show_QnA_1.qa.push(rand);
        }
        return show_QnA_1.qa;
    };
    // 랜덤 난수 생성 로직
    show_QnA.prototype.print_randnum = function () {
        var numbers = this.make_randnum();
        var result = 0;
        for (var i = 0; i < numbers.length; i++) {
            result = result * 10 + numbers[i];
        }
        return result;
    };
    //숫자 버튼 클릭 로직
    show_QnA.prototype.setButtonsInteractable = function (state) {
        var buttons = this.buttonLayout.getComponentsInChildren(cc.Button);
        for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
            var btn = buttons_1[_i];
            btn.interactable = state;
            if (state) {
                btn.node.resumeSystemEvents(true);
            }
            else {
                btn.node.pauseSystemEvents(true);
            }
        }
    };
    var show_QnA_1;
    show_QnA.correctCount = 0;
    show_QnA.qa = [];
    show_QnA.isGameOver = false;
    show_QnA.isReverse = false; //
    __decorate([
        property(cc.Label)
    ], show_QnA.prototype, "random_label", void 0);
    __decorate([
        property(cc.Node)
    ], show_QnA.prototype, "buttonLayout", void 0);
    __decorate([
        property(cc.Label)
    ], show_QnA.prototype, "sequence_label", void 0);
    show_QnA = show_QnA_1 = __decorate([
        ccclass
    ], show_QnA);
    return show_QnA;
}(cc.Component));
exports.default = show_QnA;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUmV2ZXJzZWNvcnJlY3Rfc2NyaXB0c1xcUmV2ZXJzZWNvcnJlY3RfU2hvd19RbkEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3RkM7UUF0Rkcsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isb0JBQWMsR0FBYSxJQUFJLENBQUMsQ0FBQyxHQUFHO1FBRTVCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixzQkFBZ0IsR0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ3hDLGtCQUFZLEdBQVcsR0FBRyxDQUFDLENBQUcsV0FBVzs7SUEyRXJELENBQUM7aUJBeEZvQixRQUFRO0lBbUJ6Qix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxxREFBcUQ7SUFDOUMsa0NBQWUsR0FBdEI7UUFBQSxpQkF5QkM7UUF4QkcsSUFBTSxVQUFVLEdBQUcsVUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUMsVUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRztRQUU3QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBRyxTQUFXLENBQUM7UUFDMUMs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QUFJLEtBQUssRUFBRTtnQkFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEM7U0FDSjtJQUNMLENBQUM7O0lBekVNLHFCQUFZLEdBQVcsQ0FBQyxDQUFDO0lBQ3pCLFdBQUUsR0FBYSxFQUFFLENBQUM7SUFDbEIsbUJBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsa0JBQVMsR0FBWSxLQUFLLENBQUMsQ0FBQyxFQUFFO0lBZnJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNhO0lBUmYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdGNUI7SUFBRCxlQUFDO0NBeEZELEFBd0ZDLENBeEZxQyxFQUFFLENBQUMsU0FBUyxHQXdGakQ7a0JBeEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNob3dfUW5BIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHJhbmRvbV9sYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnV0dG9uTGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzZXF1ZW5jZV9sYWJlbDogY2MuTGFiZWwgPSBudWxsOyAvLyBcclxuXHJcbiAgICBwcml2YXRlIGNudDogbnVtYmVyID0gMztcclxuICAgIHByaXZhdGUgaGlkZURlbGF5OiBudW1iZXIgPSAxLjU7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRIaWRlRGVsYXk6IG51bWJlciA9IDI7IC8vIOq4sOuzuOqwkiDsnKDsp4DsmqlcclxuICAgIHByaXZhdGUgbWluSGlkZURlbGF5OiBudW1iZXIgPSAwLjE7ICAgLy8g7LWc7IaMIO2RnOyLnCDsi5zqsIRcclxuICAgIHN0YXRpYyBjb3JyZWN0Q291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgcWE6IG51bWJlcltdID0gW107XHJcbiAgICBzdGF0aWMgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzUmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlOyAvL1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd05ld1F1ZXN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/rrLjsoJwg67O07Jes7KO864qUIOuhnOyngSArIOusuOygnCDrp57stpwg7IiY66GdIOyLnOqwhCDstIgg7KGw7KCVIOyymOydjCAxLjbstIgg64uk7J2MIDEuNCDri6TsnYwgMS4yXHJcbiAgICBwdWJsaWMgc2hvd05ld1F1ZXN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHJvdW5kSW5kZXggPSBzaG93X1FuQS5jb3JyZWN0Q291bnQgJSAzOyBcclxuICAgICAgICB0aGlzLmhpZGVEZWxheSA9IDEuNiAtIChyb3VuZEluZGV4ICogMC4yKTtcclxuICAgICAgICBzaG93X1FuQS5pc1JldmVyc2UgPSBNYXRoLnJhbmRvbSgpIDwgMC41OyAvLyBcclxuXHJcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gdGhpcy5wcmludF9yYW5kbnVtKCk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21fbGFiZWwuc3RyaW5nID0gYCR7cmFuZG9tTnVtfWA7XHJcbiAgICAgICAgdGhpcy5yYW5kb21fbGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0QnV0dG9uc0ludGVyYWN0YWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlcXVlbmNlX2xhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VfbGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZV9sYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbV9sYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXF1ZW5jZV9sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZV9sYWJlbC5zdHJpbmcgPSBzaG93X1FuQS5pc1JldmVyc2UgPyBcIuyXreuwqe2WpVwiIDogXCLsoJXrsKntlqVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VfbGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2hvd19RbkEuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25zSW50ZXJhY3RhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5oaWRlRGVsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v67mE6rWQIOqwgOuKpe2VnCDrnpzrjaQg64Kc7IiYIOuwsOyXtOuhnCDrp4zrk5zripQg66Gc7KeBICsgM+usuOygnCDrp4jri6Qg7Iuc6rCE7J2EIOuLpOyLnCDstIjquLDtmZQgXHJcbiAgICBtYWtlX3JhbmRudW0oKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHNob3dfUW5BLnFhID0gW107XHJcbiAgICAgICAgbGV0IGNhbmRpZCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuICAgICAgICBpZiAoc2hvd19RbkEuY29ycmVjdENvdW50ID4gMCAmJiBzaG93X1FuQS5jb3JyZWN0Q291bnQgJSAzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY250Kys7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURlbGF5ID0gdGhpcy5kZWZhdWx0SGlkZURlbGF5OyAvLyAz66y47KCcIOunnuy3hOycvOuptCDsi5zqsIQg7LSI6riw7ZmUXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kID0gY2FuZGlkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhbmRpZC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgc2hvd19RbkEucWEucHVzaChyYW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNob3dfUW5BLnFhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOuenOuNpCDrgpzsiJgg7IOd7ISxIOuhnOyngVxyXG4gICAgcHJpbnRfcmFuZG51bSgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG51bWJlcnMgPSB0aGlzLm1ha2VfcmFuZG51bSgpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKiAxMCArIG51bWJlcnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy/siKvsnpAg67KE7Yq8IO2BtOumrSDroZzsp4FcclxuICAgIHNldEJ1dHRvbnNJbnRlcmFjdGFibGUoc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25MYXlvdXQuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuQnV0dG9uKTtcclxuICAgICAgICBmb3IgKGxldCBidG4gb2YgYnV0dG9ucykge1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gc3RhdGU7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgYnRuLm5vZGUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLm5vZGUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/LoginManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27642C/u3lNKZ4yxR6PTK/R', 'LoginManager');
// scripts/Controller/LoginManager.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoginManager = /** @class */ (function (_super) {
    __extends(LoginManager, _super);
    function LoginManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nicknameInput = null;
        _this.dogSprite = null;
        _this.tigerSprite = null;
        _this.rabbitSprite = null;
        _this.startButton = null;
        _this.selectedCharacter = '';
        return _this;
    }
    LoginManager.prototype.onLoad = function () {
        this.startButton.interactable = false;
        // cc.log("LoginManager loaded");
    };
    LoginManager.prototype.onSelectCharacter = function (event, character) {
        this.selectedCharacter = character;
        cc.log("캐릭터 선택됨:", character);
        this.checkFormValid();
    };
    LoginManager.prototype.onNicknameChanged = function () {
        cc.log("닉네임 입력 중:", this.nicknameInput.string);
        this.checkFormValid();
    };
    LoginManager.prototype.checkFormValid = function () {
        var isFilled = this.nicknameInput.string.trim() !== '' && this.selectedCharacter !== '';
        this.startButton.interactable = isFilled;
        // cc.log("폼 유효성 검사:", isFilled);
    };
    LoginManager.prototype.onClickStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nickname, character, browserId, loginRes, _a, _b, _c, loginData, jwtToken, profileRes, _d, _e, _f, error_1;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        nickname = this.nicknameInput.string.trim();
                        character = this.selectedCharacter;
                        cc.log("Start 버튼 클릭됨 - 닉네임:", nickname, "캐릭터:", character);
                        if (!nickname) {
                            cc.log("닉네임을 입력해주세요.");
                            return [2 /*return*/];
                        }
                        if (!character) {
                            cc.log("캐릭터를 선택해주세요.");
                            return [2 /*return*/];
                        }
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 9, , 10]);
                        browserId = localStorage.getItem('browserId');
                        if (!browserId) {
                            browserId = this.generateBrowserId();
                            localStorage.setItem('browserId', browserId);
                            cc.log("새 브라우저 ID 생성됨:", browserId);
                        }
                        else {
                            cc.log("기존 브라우저 ID:", browserId);
                        }
                        return [4 /*yield*/, fetch('http://localhost:3000/auth/login', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ browserId: browserId })
                            })];
                    case 2:
                        loginRes = _g.sent();
                        cc.log("로그인 응답 상태:", loginRes.status);
                        if (!!loginRes.ok) return [3 /*break*/, 4];
                        _b = (_a = cc).error;
                        _c = ["로그인 실패:"];
                        return [4 /*yield*/, loginRes.text()];
                    case 3:
                        _b.apply(_a, _c.concat([_g.sent()]));
                        return [2 /*return*/];
                    case 4: return [4 /*yield*/, loginRes.json()];
                    case 5:
                        loginData = _g.sent();
                        jwtToken = loginData.token;
                        cc.log("JWT 토큰 발급됨:", jwtToken);
                        localStorage.setItem('jwtToken', jwtToken);
                        return [4 /*yield*/, fetch('http://localhost:3000/auth/set-profile', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': "Bearer " + jwtToken
                                },
                                body: JSON.stringify({ nickname: nickname, character: character })
                            })];
                    case 6:
                        profileRes = _g.sent();
                        cc.log("프로필 저장 응답 상태:", profileRes.status);
                        if (!!profileRes.ok) return [3 /*break*/, 8];
                        _e = (_d = cc).error;
                        _f = ["프로필 저장 실패:"];
                        return [4 /*yield*/, profileRes.text()];
                    case 7:
                        _e.apply(_d, _f.concat([_g.sent()]));
                        return [2 /*return*/];
                    case 8:
                        cc.log("로그인 및 프로필 저장 완료");
                        // 4. 게임 시작 (씬 이동 등)
                        cc.director.loadScene("MainScene");
                        return [3 /*break*/, 10];
                    case 9:
                        error_1 = _g.sent();
                        cc.error("에러 발생:", error_1);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    LoginManager.prototype.generateBrowserId = function () {
        var array = new Uint8Array(16);
        window.crypto.getRandomValues(array);
        return Array.from(array).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    };
    __decorate([
        property(cc.EditBox)
    ], LoginManager.prototype, "nicknameInput", void 0);
    __decorate([
        property(cc.Sprite)
    ], LoginManager.prototype, "dogSprite", void 0);
    __decorate([
        property(cc.Sprite)
    ], LoginManager.prototype, "tigerSprite", void 0);
    __decorate([
        property(cc.Sprite)
    ], LoginManager.prototype, "rabbitSprite", void 0);
    __decorate([
        property(cc.Button)
    ], LoginManager.prototype, "startButton", void 0);
    LoginManager = __decorate([
        ccclass
    ], LoginManager);
    return LoginManager;
}(cc.Component));
exports.default = LoginManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcTG9naW5NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbUhDO1FBakhDLG1CQUFhLEdBQWUsSUFBSSxDQUFDO1FBR2pDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFdEIsdUJBQWlCLEdBQVcsRUFBRSxDQUFDOztJQXFHekMsQ0FBQztJQW5HQyw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLGlDQUFpQztJQUNuQyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCLFVBQWtCLEtBQWUsRUFBRSxTQUFpQjtRQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0Qsd0NBQWlCLEdBQWpCO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJ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bkhELEFBbUhDLENBbkh5QyxFQUFFLENBQUMsU0FBUyxHQW1IckQ7a0JBbkhvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICBuaWNrbmFtZUlucHV0OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBkb2dTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIHRpZ2VyU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICByYWJiaXRTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgcHJpdmF0ZSBzZWxlY3RlZENoYXJhY3Rlcjogc3RyaW5nID0gJyc7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc3RhcnRCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgLy8gY2MubG9nKFwiTG9naW5NYW5hZ2VyIGxvYWRlZFwiKTtcbiAgfVxuXG4gIG9uU2VsZWN0Q2hhcmFjdGVyKGV2ZW50OiBjYy5FdmVudCwgY2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVyID0gY2hhcmFjdGVyO1xuICAgIGNjLmxvZyhcIuy6kOumre2EsCDshKDtg53rkKg6XCIsIGNoYXJhY3Rlcik7IFxuICAgIHRoaXMuY2hlY2tGb3JtVmFsaWQoKTtcbiAgfVxuICBcblxuICBvbk5pY2tuYW1lQ2hhbmdlZCgpIHtcbiAgICBjYy5sb2coXCLri4nrhKTsnoQg7J6F66ClIOykkTpcIiwgdGhpcy5uaWNrbmFtZUlucHV0LnN0cmluZyk7XG4gICAgdGhpcy5jaGVja0Zvcm1WYWxpZCgpO1xuICB9XG5cbiAgY2hlY2tGb3JtVmFsaWQoKSB7XG4gICAgY29uc3QgaXNGaWxsZWQgPSB0aGlzLm5pY2tuYW1lSW5wdXQuc3RyaW5nLnRyaW0oKSAhPT0gJycgJiYgdGhpcy5zZWxlY3RlZENoYXJhY3RlciAhPT0gJyc7XG4gICAgdGhpcy5zdGFydEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBpc0ZpbGxlZDtcbiAgICAvLyBjYy5sb2coXCLtj7wg7Jyg7Zqo7ISxIOqygOyCrDpcIiwgaXNGaWxsZWQpO1xuICB9XG5cbiAgYXN5bmMgb25DbGlja1N0YXJ0KCkge1xuICAgIGNvbnN0IG5pY2tuYW1lID0gdGhpcy5uaWNrbmFtZUlucHV0LnN0cmluZy50cmltKCk7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gdGhpcy5zZWxlY3RlZENoYXJhY3RlcjtcblxuICAgIGNjLmxvZyhcIlN0YXJ0IOuyhO2KvCDtgbTrpq3rkKggLSDri4nrhKTsnoQ6XCIsIG5pY2tuYW1lLCBcIuy6kOumre2EsDpcIiwgY2hhcmFjdGVyKTtcblxuICAgIGlmICghbmlja25hbWUpIHtcbiAgICAgIGNjLmxvZyhcIuuLieuEpOyehOydhCDsnoXroKXtlbTso7zshLjsmpQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICBjYy5sb2coXCLsupDrpq3thLDrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gMS4g67iM65287Jqw7KCAIOqzoOycoCBJRCDsg53shLEgb3Ig6rCA7KC47Jik6riwXG4gICAgICBsZXQgYnJvd3NlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jyb3dzZXJJZCcpO1xuICAgICAgaWYgKCFicm93c2VySWQpIHtcbiAgICAgICAgYnJvd3NlcklkID0gdGhpcy5nZW5lcmF0ZUJyb3dzZXJJZCgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnJvd3NlcklkJywgYnJvd3NlcklkKTtcbiAgICAgICAgY2MubG9nKFwi7IOIIOu4jOudvOyasOyggCBJRCDsg53shLHrkKg6XCIsIGJyb3dzZXJJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYy5sb2coXCLquLDsobQg67iM65287Jqw7KCAIElEOlwiLCBicm93c2VySWQpO1xuICAgICAgfVxuXG4gICAgICAvLyAyLiDroZzqt7jsnbgg7JqU7LKtXG4gICAgICBjb25zdCBsb2dpblJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9sb2dpbicsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGJyb3dzZXJJZCB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNjLmxvZyhcIuuhnOq3uOyduCDsnZHri7Ug7IOB7YOcOlwiLCBsb2dpblJlcy5zdGF0dXMpO1xuICAgICAgaWYgKCFsb2dpblJlcy5vaykge1xuICAgICAgICBjYy5lcnJvcihcIuuhnOq3uOyduCDsi6TtjKg6XCIsIGF3YWl0IGxvZ2luUmVzLnRleHQoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9naW5EYXRhID0gYXdhaXQgbG9naW5SZXMuanNvbigpO1xuICAgICAgY29uc3Qgand0VG9rZW4gPSBsb2dpbkRhdGEudG9rZW47XG4gICAgICBjYy5sb2coXCJKV1Qg7Yag7YGwIOuwnOq4ieuQqDpcIiwgand0VG9rZW4pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dFRva2VuJywgand0VG9rZW4pO1xuXG4gICAgICAvLyAzLiDtlITroZztlYQg7KCA7J6lIOyalOyyrVxuICAgICAgY29uc3QgcHJvZmlsZVJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9zZXQtcHJvZmlsZScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2p3dFRva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuaWNrbmFtZSwgY2hhcmFjdGVyIH0pXG4gICAgICB9KTtcblxuICAgICAgY2MubG9nKFwi7ZSE66Gc7ZWEIOyggOyepSDsnZHri7Ug7IOB7YOcOlwiLCBwcm9maWxlUmVzLnN0YXR1cyk7XG4gICAgICBpZiAoIXByb2ZpbGVSZXMub2spIHtcbiAgICAgICAgY2MuZXJyb3IoXCLtlITroZztlYQg7KCA7J6lIOyLpO2MqDpcIiwgYXdhaXQgcHJvZmlsZVJlcy50ZXh0KCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNjLmxvZyhcIuuhnOq3uOyduCDrsI8g7ZSE66Gc7ZWEIOyggOyepSDsmYTro4xcIik7XG5cbiAgICAgIC8vIDQuIOqyjOyehCDsi5zsnpEgKOyUrCDsnbTrj5kg65OxKVxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNjLmVycm9yKFwi7JeQ65+sIOuwnOyDnTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQnJvd3NlcklkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYXJyYXkgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycmF5KS5tYXAoYiA9PiBiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Sim/RememberGame/RememberGameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'RememberGameController');
// scripts/Sim/RememberGame/RememberGameController.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        _this.redButton = null;
        _this.yellowButton = null;
        _this.greenButton = null;
        _this.blueButton = null;
        _this.scoreLabel = null;
        _this.statusLabel = null;
        _this.hintLabel = null;
        // 타이머 표시용 레이블
        _this.timerLabel = null;
        // 타임아웃 메시지용 레이블
        _this.timeoutLabel = null;
        // 리스트 돌아가기 버튼
        _this.exitButton = null;
        _this.colorSequence = [];
        _this.userInput = [];
        _this.score = 0;
        _this.level = 1;
        _this.isGameActive = false;
        // 남은 시간(초)
        _this.remainingTime = 0;
        _this.buttonMap = {};
        _this.colors = ["red", "yellow", "green", "blue"];
        return _this;
    }
    GameController.prototype.onLoad = function () {
        var _this = this;
        cc.debug.setDisplayStats(false);
        // 버튼 맵핑
        this.buttonMap = {
            red: this.redButton,
            yellow: this.yellowButton,
            green: this.greenButton,
            blue: this.blueButton
        };
        // 클릭 이벤트 바인딩
        this.startButton.node.on('click', this.onStartGame, this);
        this.redButton.node.on('click', function () { return _this.onColorButtonClick('red'); }, this);
        this.yellowButton.node.on('click', function () { return _this.onColorButtonClick('yellow'); }, this);
        this.greenButton.node.on('click', function () { return _this.onColorButtonClick('green'); }, this);
        this.blueButton.node.on('click', function () { return _this.onColorButtonClick('blue'); }, this);
        // 초기 상태 설정
        this.setInitialButtonState();
        this.startButton.node.active = true;
        // 타이머/타임아웃 레이블 숨기기
        this.timerLabel.node.active = false;
        this.timeoutLabel.node.active = false;
        // tickCallback 바인딩
        this.tickCallback = this.updateTimer.bind(this);
    };
    GameController.prototype.onStartGame = function () {
        var btnLabel = this.startButton.node.getComponentInChildren(cc.Label).string;
        if (btnLabel === "다시 도전") {
            // 현재 레벨 재도전
            this.userInput = [];
            this.setStatusMessage("현재 단계 다시 시작!");
            this.hintLabel.string = "";
            this.generateColorSequence();
            this.showColorSequence();
            this.startButton.node.getComponentInChildren(cc.Label).string = "게임 시작";
            this.startButton.node.active = false;
            this.isGameActive = true;
            // ★ 여기만 변경: false → true
            this.disableButtons(true);
        }
        else {
            // 새 게임 시작
            this.colorSequence = [];
            this.userInput = [];
            this.score = 0;
            this.level = 1;
            this.updateScore();
            this.setStatusMessage("게임 시작!");
            this.hintLabel.string = "";
            this.isGameActive = true;
            this.disableButtons(true);
            this.generateColorSequence();
            this.showColorSequence();
            this.startButton.node.active = false;
        }
        // 타이머도 다시 시작
        this.startTimer();
    };
    GameController.prototype.onColorButtonClick = function (color) {
        if (!this.isGameActive)
            return;
        this.userInput.push(color);
        this.checkUserInput();
    };
    // 1초마다 호출: 남은 시간 감소 및 체크
    GameController.prototype.updateTimer = function () {
        this.remainingTime--;
        this.timerLabel.string = "\uB0A8\uC740 \uC2DC\uAC04: " + this.remainingTime + "s";
        if (this.remainingTime <= 0) {
            this.unschedule(this.tickCallback);
            this.onTimeUp();
        }
    };
    // 타이머 초기화 & 시작
    GameController.prototype.startTimer = function () {
        // 기존 스케줄 초기화
        this.unschedule(this.tickCallback);
        // 100초로 세팅
        this.remainingTime = 100;
        this.timerLabel.string = "\uB0A8\uC740 \uC2DC\uAC04: " + this.remainingTime + "s";
        this.timerLabel.node.active = true;
        // 타임아웃 메시지 숨기기
        this.timeoutLabel.node.active = false;
        // 1초마다 updateTimer 호출
        this.schedule(this.tickCallback, 1);
    };
    // 시간 초과 시 처리
    GameController.prototype.onTimeUp = function () {
        this.isGameActive = false;
        // 모든 버튼 비활성화
        this.disableButtons(true);
        this.startButton.interactable = false;
        // 타임아웃 레이블에 메시지 표시
        this.timeoutLabel.string = "TimeOut!";
        this.timeoutLabel.node.active = true;
    };
    GameController.prototype.checkUserInput = function () {
        var _this = this;
        var correct = true;
        var targetSequence = this.colorSequence;
        // 3단계엔 역순 체크
        if (this.level === 3) {
            targetSequence = __spreadArrays(this.colorSequence).reverse();
        }
        for (var i = 0; i < this.userInput.length; i++) {
            if (this.userInput[i] !== targetSequence[i]) {
                correct = false;
                break;
            }
        }
        if (correct) {
            if (this.userInput.length === targetSequence.length) {
                this.setStatusMessage("정답! 다음 단계로!");
                this.score += 10;
                this.updateScore();
                this.userInput = [];
                this.level++;
                this.scheduleOnce(function () {
                    _this.generateColorSequence();
                    _this.showColorSequence();
                }, 3);
            }
        }
        else {
            this.setStatusMessage("틀렸습니다! 다시 시도하세요.");
            this.userInput = [];
            this.startButton.node.getComponentInChildren(cc.Label).string = "다시 도전";
            this.startButton.node.active = true;
            this.isGameActive = false;
            this.disableButtons(true);
        }
    };
    GameController.prototype.generateColorSequence = function () {
        this.colorSequence = [];
        var length = this.level >= 5 ? 7 : this.level + 2;
        for (var i = 0; i < length; i++) {
            var idx = Math.floor(Math.random() * this.colors.length);
            this.colorSequence.push(this.colors[idx]);
        }
        this.hintLabel.string = (this.level === 3) ? "불이 깜빡이는 순서를 반대로 입력하라." : "";
        console.log("생성된 색상 순서:", this.colorSequence);
    };
    GameController.prototype.setInitialButtonState = function () {
        [this.redButton, this.yellowButton, this.greenButton, this.blueButton].forEach(function (btn) {
            btn.node.opacity = 100;
            btn.interactable = false;
        });
    };
    GameController.prototype.showColorSequence = function () {
        var _this = this;
        var delay = 0;
        this.disableButtons(true);
        this.colorSequence.forEach(function (color) {
            var btn = _this.buttonMap[color];
            _this.scheduleOnce(function () { return _this.activateButtonForBlink(btn); }, delay);
            delay += 1.0;
        });
        this.scheduleOnce(function () {
            _this.resetButtonState();
            _this.setStatusMessage("버튼 순서를 맞춰주세요!");
        }, delay);
    };
    GameController.prototype.activateButtonForBlink = function (button) {
        button.interactable = true;
        cc.tween(button.node)
            .to(0.3, { opacity: 255 })
            .to(0.3, { opacity: 100 })
            .start();
        this.scheduleOnce(function () { button.interactable = false; }, 0.6);
    };
    GameController.prototype.resetButtonState = function () {
        [this.redButton, this.yellowButton, this.greenButton, this.blueButton].forEach(function (btn) {
            btn.node.opacity = 255;
            btn.interactable = true;
        });
    };
    GameController.prototype.updateScore = function () {
        this.scoreLabel.string = "\uC810\uC218: " + this.score;
    };
    GameController.prototype.setStatusMessage = function (message) {
        this.statusLabel.string = message;
    };
    GameController.prototype.disableButtons = function (disable) {
        this.redButton.interactable = !disable;
        this.yellowButton.interactable = !disable;
        this.greenButton.interactable = !disable;
        this.blueButton.interactable = !disable;
    };
    GameController.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
    };
    __decorate([
        property(cc.Button)
    ], GameController.prototype, "startButton", void 0);
    __decorate([
        property(cc.Button)
    ], GameController.prototype, "redButton", void 0);
    __decorate([
        property(cc.Button)
    ], GameController.prototype, "yellowButton", void 0);
    __decorate([
        property(cc.Button)
    ], GameController.prototype, "greenButton", void 0);
    __decorate([
        property(cc.Button)
    ], GameController.prototype, "blueButton", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "statusLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "hintLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "timerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "timeoutLabel", void 0);
    __decorate([
        property(cc.Button)
    ], GameController.prototype, "exitButton", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxSZW1lbWJlckdhbWVcXFJlbWVtYmVyR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBOFFDO1FBM1FHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFHN0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixjQUFjO1FBRWQsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsZ0JBQWdCO1FBRWhCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLGNBQWM7UUFFZCxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUdyQixtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixlQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUV0QyxXQUFXO1FBQ0gsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFJMUIsZUFBUyxHQUFpQyxFQUFFLENBQUM7UUFDN0MsWUFBTSxHQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7O0lBMk5sRSxDQUFDO0lBek5HLCtCQUFNLEdBQU47UUFBQSxpQkE0QkM7UUEzQkcsRUFB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dURBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDUTtJQUkzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNTO0lBSTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ1c7SUFJOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDUztJQXBDWixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBOFFsQztJQUFELHFCQUFDO0NBOVFELEFBOFFDLENBOVEyQyxFQUFFLENBQUMsU0FBUyxHQThRdkQ7a0JBOVFvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHJlZEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgeWVsbG93QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBncmVlbkJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYmx1ZUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc3RhdHVzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBoaW50TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyDtg4DsnbTrqLgg7ZGc7Iuc7JqpIOugiOydtOu4lFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIO2DgOyehOyVhOybgyDrqZTsi5zsp4Dsmqkg66CI7J2067iUXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lb3V0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyDrpqzsiqTtirgg64+M7JWE6rCA6riwIOuyhO2KvFxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGV4aXRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29sb3JTZXF1ZW5jZTogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgdXNlcklucHV0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGlzR2FtZUFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIOuCqOydgCDsi5zqsIQo7LSIKVxyXG4gICAgcHJpdmF0ZSByZW1haW5pbmdUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gMey0iOuniOuLpCDtmLjstpztlaAg7L2c67CxIOywuOyhsFxyXG4gICAgcHJpdmF0ZSB0aWNrQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgcHJpdmF0ZSBidXR0b25NYXA6IHsgW2tleTogc3RyaW5nXTogY2MuQnV0dG9uIH0gPSB7fTtcclxuICAgIHByaXZhdGUgY29sb3JzOiBzdHJpbmdbXSA9IFtcInJlZFwiLCBcInllbGxvd1wiLCBcImdyZWVuXCIsIFwiYmx1ZVwiXTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8g67KE7Yq8IOunte2VkVxyXG4gICAgICAgIHRoaXMuYnV0dG9uTWFwID0ge1xyXG4gICAgICAgICAgICByZWQ6IHRoaXMucmVkQnV0dG9uLFxyXG4gICAgICAgICAgICB5ZWxsb3c6IHRoaXMueWVsbG93QnV0dG9uLFxyXG4gICAgICAgICAgICBncmVlbjogdGhpcy5ncmVlbkJ1dHRvbixcclxuICAgICAgICAgICAgYmx1ZTogdGhpcy5ibHVlQnV0dG9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g7YG066atIOydtOuypO2KuCDrsJTsnbjrlKlcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblN0YXJ0R2FtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWRCdXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29sb3JCdXR0b25DbGljaygncmVkJyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMueWVsbG93QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbG9yQnV0dG9uQ2xpY2soJ3llbGxvdycpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdyZWVuQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbG9yQnV0dG9uQ2xpY2soJ2dyZWVuJyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmx1ZUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Db2xvckJ1dHRvbkNsaWNrKCdibHVlJyksIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDstIjquLAg7IOB7YOcIOyEpOyglVxyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbEJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIO2DgOydtOuouC/tg4DsnoTslYTsm4Mg66CI7J2067iUIOyIqOq4sOq4sFxyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHRpY2tDYWxsYmFjayDrsJTsnbjrlKlcclxuICAgICAgICB0aGlzLnRpY2tDYWxsYmFjayA9IHRoaXMudXBkYXRlVGltZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGNvbnN0IGJ0bkxhYmVsID0gdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZztcclxuICAgICAgICBpZiAoYnRuTGFiZWwgPT09IFwi64uk7IucIOuPhOyghFwiKSB7XHJcbiAgICAgICAgICAgIC8vIO2YhOyerCDroIjrsqgg7J6s64+E7KCEXHJcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzTWVzc2FnZShcIu2YhOyerCDri6jqs4Qg64uk7IucIOyLnOyekSFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGludExhYmVsLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbG9yU2VxdWVuY2UoKTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gXCLqsozsnoQg7Iuc7J6RXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyDimIUg7Jes6riw66eMIOuzgOqyvTogZmFsc2Ug4oaSIHRydWVcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9ucyh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDsg4gg6rKM7J6EIOyLnOyekVxyXG4gICAgICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzTWVzc2FnZShcIuqyjOyehCDsi5zsnpEhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpbnRMYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbnModHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIO2DgOydtOuouOuPhCDri6Tsi5wg7Iuc7J6RXHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBwcml2YXRlIG9uQ29sb3JCdXR0b25DbGljayhjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzR2FtZUFjdGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0LnB1c2goY29sb3IpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tVc2VySW5wdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAx7LSI66eI64ukIO2YuOy2nDog64Ko7J2AIOyLnOqwhCDqsJDshowg67CPIOyytO2BrFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaW1lcigpIHtcclxuICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUtLTtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYOuCqOydgCDsi5zqsIQ6ICR7dGhpcy5yZW1haW5pbmdUaW1lfXNgO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudGlja0NhbGxiYWNrKTtcclxuICAgICAgICAgICAgdGhpcy5vblRpbWVVcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDtg4DsnbTrqLgg7LSI6riw7ZmUICYg7Iuc7J6RXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgLy8g6riw7KG0IOyKpOy8gOykhCDstIjquLDtmZRcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aWNrQ2FsbGJhY2spO1xyXG5cclxuICAgICAgICAvLyAxMDDstIjroZwg7IS47YyFXHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdUaW1lID0gMTAwO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBg64Ko7J2AIOyLnOqwhDogJHt0aGlzLnJlbWFpbmluZ1RpbWV9c2A7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyDtg4DsnoTslYTsm4Mg66mU7Iuc7KeAIOyIqOq4sOq4sFxyXG4gICAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gMey0iOuniOuLpCB1cGRhdGVUaW1lciDtmLjstpxcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGlja0NhbGxiYWNrLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsi5zqsIQg7LSI6rO8IOyLnCDsspjrpqxcclxuICAgIHByaXZhdGUgb25UaW1lVXAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0dhbWVBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyDrqqjrk6Ag67KE7Yq8IOu5hO2ZnOyEse2ZlFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbnModHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g7YOA7J6E7JWE7JuDIOugiOydtOu4lOyXkCDrqZTsi5zsp4Ag7ZGc7IucXHJcbiAgICAgICAgdGhpcy50aW1lb3V0TGFiZWwuc3RyaW5nID0gXCJUaW1lT3V0IVwiO1xyXG4gICAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrVXNlcklucHV0KCkge1xyXG4gICAgICAgIGxldCBjb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdGFyZ2V0U2VxdWVuY2UgPSB0aGlzLmNvbG9yU2VxdWVuY2U7XHJcblxyXG4gICAgICAgIC8vIDPri6jqs4Tsl5Qg7Jet7IicIOyytO2BrFxyXG4gICAgICAgIGlmICh0aGlzLmxldmVsID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFNlcXVlbmNlID0gWy4uLnRoaXMuY29sb3JTZXF1ZW5jZV0ucmV2ZXJzZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJJbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VySW5wdXRbaV0gIT09IHRhcmdldFNlcXVlbmNlW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvcnJlY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlcklucHV0Lmxlbmd0aCA9PT0gdGFyZ2V0U2VxdWVuY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c01lc3NhZ2UoXCLsoJXri7UhIOuLpOydjCDri6jqs4TroZwhXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzTWVzc2FnZShcIu2LgOuguOyKteuLiOuLpCEg64uk7IucIOyLnOuPhO2VmOyEuOyalC5cIik7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBcIuuLpOyLnCDrj4TsoIRcIjtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbnModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVDb2xvclNlcXVlbmNlKCkge1xyXG4gICAgICAgIHRoaXMuY29sb3JTZXF1ZW5jZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGV2ZWwgPj0gNSA/IDcgOiB0aGlzLmxldmVsICsgMjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sb3JzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JTZXF1ZW5jZS5wdXNoKHRoaXMuY29sb3JzW2lkeF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpbnRMYWJlbC5zdHJpbmcgPSAodGhpcy5sZXZlbCA9PT0gMykgPyBcIuu2iOydtCDquZzruaHsnbTripQg7Iic7ISc66W8IOuwmOuMgOuhnCDsnoXroKXtlZjrnbwuXCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7IOd7ISx65CcIOyDieyDgSDsiJzshJw6XCIsIHRoaXMuY29sb3JTZXF1ZW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsQnV0dG9uU3RhdGUoKSB7XHJcbiAgICAgICAgW3RoaXMucmVkQnV0dG9uLCB0aGlzLnllbGxvd0J1dHRvbiwgdGhpcy5ncmVlbkJ1dHRvbiwgdGhpcy5ibHVlQnV0dG9uXS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5ub2RlLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dDb2xvclNlcXVlbmNlKCkge1xyXG4gICAgICAgIGxldCBkZWxheSA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9ucyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xvclNlcXVlbmNlLmZvckVhY2goY29sb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbk1hcFtjb2xvcl07XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuYWN0aXZhdGVCdXR0b25Gb3JCbGluayhidG4pLCBkZWxheSk7XHJcbiAgICAgICAgICAgIGRlbGF5ICs9IDEuMDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uU3RhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi67KE7Yq8IOyInOyEnOulvCDrp57strDso7zshLjsmpQhXCIpO1xyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlQnV0dG9uRm9yQmxpbmsoYnV0dG9uOiBjYy5CdXR0b24pIHtcclxuICAgICAgICBidXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2VlbihidXR0b24ubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMywgeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgLnRvKDAuMywgeyBvcGFjaXR5OiAxMDAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyBidXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7IH0sIDAuNik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEJ1dHRvblN0YXRlKCkge1xyXG4gICAgICAgIFt0aGlzLnJlZEJ1dHRvbiwgdGhpcy55ZWxsb3dCdXR0b24sIHRoaXMuZ3JlZW5CdXR0b24sIHRoaXMuYmx1ZUJ1dHRvbl0uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4ubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBg7KCQ7IiYOiAke3RoaXMuc2NvcmV9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFN0YXR1c01lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNMYWJlbC5zdHJpbmcgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlzYWJsZUJ1dHRvbnMoZGlzYWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMucmVkQnV0dG9uLmludGVyYWN0YWJsZSAgICA9ICFkaXNhYmxlO1xyXG4gICAgICAgIHRoaXMueWVsbG93QnV0dG9uLmludGVyYWN0YWJsZSA9ICFkaXNhYmxlO1xyXG4gICAgICAgIHRoaXMuZ3JlZW5CdXR0b24uaW50ZXJhY3RhYmxlICA9ICFkaXNhYmxlO1xyXG4gICAgICAgIHRoaXMuYmx1ZUJ1dHRvbi5pbnRlcmFjdGFibGUgICA9ICFkaXNhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMaXN0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsi7HquIAg6rKM7J6EIOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLBcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTaW5nbGVHYW1lTGlzdCcpO1xyXG4gICAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw4Q0FBNEM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE4TEM7UUE1TEcsWUFBTSxHQUFjLElBQUksQ0FBQyxDQUFFLGtCQUFrQjtRQUc3QyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFFN0IsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBRWYsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFtQjlCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWTs7SUE4SmhELENBQUM7YUE5TG9CLElBQUk7SUFnQnJCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMscUJBQU0sR0FBTjtRQUNJLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO1FBRUQsdUVBQXVFO1FBQ3ZFLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztR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SUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBUaHJlZU1hdGNoQm9hcmQgZnJvbSBcIi4vM01hdGNoQm9hcmRcIjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKSAvLyDsiqTtlITrnbzsnbTtirgg7Lu07Y+s64SM7Yq4IOyXsOqysFxyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsOyAgLy8g6riw7KG0IHNwcml0ZSDsho3shLEg67O16rWsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgLy8g7Y+t67CcIO2aqOqzvCDtlITrpqztjLkg7IaN7ISxIOy2lOqwgFxyXG4gICAgZXhwbG9zaW9uUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgZnJ1aXRTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgcHVibGljIHJvdzogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjb2w6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIHNlbGVjdGVkVGlsZTogVGlsZSA9IG51bGw7XHJcblxyXG4gICAgLy8g64W465Oc6rCAIOyUrOyXkCDsg53shLHrkJjrqbTshJwg7LSI6riw7ZmUIOuLqOqzhC5cclxuICAgIC8vIOydtCDsi5zsoJDsl5Ag7Lu07Y+s64SM7Yq4LCDsiqTtlITrnbzsnbTtirgsIOydtOuypO2KuCDrpqzsiqTrhIgg65Ox7J2EIOuTseuhnVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOyKpO2UhOudvOydtO2KuCDsu7Ttj6zrhIztirjqsIAg7JeG7Jy866m0IOy2lOqwgFxyXG4gICAgICAgIGlmICghdGhpcy5zcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVGlsZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgIC8vIOuTnOuemOq3uCDqsJDsp4Dsmqkg7J2067Kk7Yq4IOuTseuhnVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmcnVpdEluZGV4OiBudW1iZXIgPSAwOyAvLyDtmITsnqwg6rO87J28IOyduOuNseyKpFxyXG5cclxuICAgIHNldFJhbmRvbUZydWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5mcnVpdFNwcml0ZXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLmZydWl0SW5kZXggPSByYW5kb21JbmRleDtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJ1aXRTcHJpdGVzW3JhbmRvbUluZGV4XTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHNldFJhbmRvbUZydWl0RXhjbHVkaW5nKGV4Y2x1ZGVJbmRpY2VzOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCBhdmFpbGFibGVJbmRpY2VzID0gdGhpcy5mcnVpdFNwcml0ZXNcclxuICAgICAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+IGluZGV4KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGluZGV4ID0+ICFleGNsdWRlSW5kaWNlcy5pbmNsdWRlcyhpbmRleCkpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZUluZGljZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUluZGljZXMgPSB0aGlzLmZydWl0U3ByaXRlcy5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBhdmFpbGFibGVJbmRpY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUluZGljZXMubGVuZ3RoKV07XHJcbiAgICAgICAgdGhpcy5mcnVpdEluZGV4ID0gcmFuZG9tSW5kZXg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmZydWl0U3ByaXRlc1tyYW5kb21JbmRleF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGFkZE91dGxpbmUoKSB7XHJcbiAgICAgICAgLy8g6riw7KG07JeQIOyeiOuNmCBHcmFwaGljc+qwgCDsnojsnLzrqbQg7KCc6rGwXHJcbiAgICAgICAgbGV0IGV4aXN0aW5nR3JhcGhpY3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdHcmFwaGljcykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ29tcG9uZW50KGV4aXN0aW5nR3JhcGhpY3MpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIOyDiCBHcmFwaGljcyDrhbjrk5wg7IOd7ISxXHJcbiAgICAgICAgbGV0IGdyYXBoaWNzTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgZ3JhcGhpY3NOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBncmFwaGljc05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICBcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBncmFwaGljc05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSA1OyAvLyDthYzrkZDrpqwg65GQ6ruYXHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5CTEFDSzsgLy8g7YWM65GQ66asIOyDieyDgVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbGUgU2l6ZTpcIiwgc2l6ZSk7IC8vIOuUlOuyhOq5hSDroZzqt7hcclxuICAgIFxyXG4gICAgICAgIC8vIO2FjOuRkOumrCDqt7jrpqzquLBcclxuICAgICAgICBncmFwaGljcy5yZWN0KC1zaXplLndpZHRoIC8gMiwgLXNpemUuaGVpZ2h0IC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgLy8g65iQ64qUIHRoaXMudG91Y2hTdGFydFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuTnOuemOq3uCDsi5zsnpEg7JyE7LmYOlwiLCB0aGlzLnRvdWNoU3RhcnRQb3MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgZW5kUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IGVuZFBvcy5zdWIodGhpcy50b3VjaFN0YXJ0UG9zKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrk5zrnpjqt7gg64GdIOychOy5mDpcIiwgZW5kUG9zKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuTnOuemOq3uCDqsbDrpqw6XCIsIGRlbHRhKTtcclxuXHJcbiAgICAgICAgLy8g7LWc7IaMIOqxsOumrCDssrTtgawgKOyhsOq4iCDrjZQg7Jyg7Jew7ZWY6rKMLCDsmIg6IDPtlL3shYAg7J207IOB7J2066m0IOyymOumrClcclxuICAgICAgICBpZiAoZGVsdGEubGVuKCkgPCAzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi65Oc656Y6re4IOuEiOustCDsp6fslYTshJwg66y07Iuc65CoXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWJzWCA9IE1hdGguYWJzKGRlbHRhLngpO1xyXG4gICAgICAgIGxldCBhYnNZID0gTWF0aC5hYnMoZGVsdGEueSk7XHJcblxyXG4gICAgICAgIC8vIOyVhOyjvCDsnpHsnYAgZGVsdGEueOuCmCBkZWx0YS557J28IOqyveyasCwg67Cp7ZalIOuztOyglVxyXG4gICAgICAgIGlmIChhYnNYIDwgMSAmJiBhYnNZIDwgMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuybgOyngeyehOydtCDrhIjrrLQg7J6R7JWE7IScIOustOyLnOuQqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGFic1ggPiBhYnNZKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRlbHRhLnggPiAwID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZGVsdGEueSA+IDAgPyBcInVwXCIgOiBcImRvd25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi65Oc656Y6re4IOuwqe2WpTpcIiwgZGlyZWN0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFRocmVlTWF0Y2hCb2FyZCk7XHJcbiAgICAgICAgaWYgKCFib2FyZCB8fCAhYm9hcmRbXCJib2FyZFwiXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaHJlZU1hdGNoQm9hcmTrpbwg7LC+7J2EIOyImCDsl4bsnYxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRUaWxlOiBUaWxlID0gbnVsbDtcclxuICAgICAgICBjb25zdCByb3cgPSB0aGlzLnJvdztcclxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAocm93ID4gMCkgdGFyZ2V0VGlsZSA9IGJvYXJkW1wiYm9hcmRcIl1bcm93IC0gMV1bY29sXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IGJvYXJkW1wiYm9hcmRTaXplXCJdIC0gMSkgdGFyZ2V0VGlsZSA9IGJvYXJkW1wiYm9hcmRcIl1bcm93ICsgMV1bY29sXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+IDApIHRhcmdldFRpbGUgPSBib2FyZFtcImJvYXJkXCJdW3Jvd11bY29sIC0gMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sIDwgYm9hcmRbXCJib2FyZFNpemVcIl0gLSAxKSB0YXJnZXRUaWxlID0gYm9hcmRbXCJib2FyZFwiXVtyb3ddW2NvbCArIDFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0VGlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg7YOA7J28IOq1kO2ZmDogKCR7cm93fSwgJHtjb2x9KSA8LT4gKCR7dGFyZ2V0VGlsZS5yb3d9LCAke3RhcmdldFRpbGUuY29sfSlgKTtcclxuICAgICAgICAgICAgYm9hcmQuc3dhcFRpbGVzKHRoaXMsIHRhcmdldFRpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBsb2RlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBleHBsb2RlKCkg7Iuk7ZaJOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgXHJcbiAgICAgICAgLy8g7J207Y6Z7Yq4IOyDneyEsVxyXG4gICAgICAgIGlmICh0aGlzLmV4cGxvc2lvblByZWZhYikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg7Y+t67CcIOydtO2Ome2KuCDsg53shLE6ICgke3RoaXMucm93fSwgJHt0aGlzLmNvbH0pYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXhwbG9zaW9uUHJlZmFiKTtcclxuICAgICAgICAgICAgZWZmZWN0LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g7Zqo6rO86rCAIOuBneuCmOuptCDsnpDrj5kg7KCc6rGwXHJcbiAgICAgICAgICAgIGNvbnN0IHBzID0gZWZmZWN0LmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgICAgIHBzICYmIHBzLnJlc2V0U3lzdGVtKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYO2PreuwnCDsnbTtjpntirgg7KCc6rGwOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8g7JWg64uI66mU7J207IWYICsg7YyM6rS0XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMS41KS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmFkZU91dCgwLjIpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUaWxlLnNlbGVjdGVkVGlsZSA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaWxlLnNlbGVjdGVkVGlsZSA9IG51bGw7ICAvLyDsgqzrnbzsp4gg65WMIOyEoO2DnSDtlbTsoJxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4810lOqyBGeZnU+y/P5j0Y', 'Rottenacorn_acorn');
// scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn.ts

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
var Acorn = /** @class */ (function (_super) {
    __extends(Acorn, _super);
    function Acorn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bugNode = null;
        _this.speed = 300;
        _this.minSpeed = 150;
        return _this;
    }
    Acorn.prototype.activate = function (isRotten) {
        var _this = this;
        // 벌레 노출
        if (this.bugNode) {
            this.bugNode.active = isRotten;
            if (isRotten) {
                this.scheduleOnce(function () {
                    _this.bugNode.active = false;
                }, 1);
            }
        }
        // 물리 속도 적용
        var rigid = this.node.getComponent(cc.RigidBody);
        if (rigid) {
            var angle = Math.random() * 2 * Math.PI;
            var vx = Math.cos(angle) * this.speed;
            var vy = Math.sin(angle) * this.speed;
            rigid.linearVelocity = cc.v2(vx, vy);
            rigid.awake = true;
        }
    };
    Acorn.prototype.update = function (dt) {
        var rigid = this.node.getComponent(cc.RigidBody);
        if (!rigid)
            return;
        var velocity = rigid.linearVelocity;
        var currentSpeed = velocity.mag();
        if (currentSpeed < this.minSpeed) {
            var direction = velocity.normalizeSelf();
            var corrected = direction.mul(this.minSpeed);
            rigid.linearVelocity = corrected;
        }
    };
    __decorate([
        property(cc.Node)
    ], Acorn.prototype, "bugNode", void 0);
    Acorn = __decorate([
        ccclass
    ], Acorn);
    return Acorn;
}(cc.Component));
exports.default = Acorn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUm90dGVuYWNvcm5fc2NyaXB0c1xcUm90dGVuYWNvcm5fYWNvcm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE0Q0M7UUF6Q0csYUFBTyxHQUFZLElBQUksQ0FBQztRQUVoQixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGNBQVEsR0FBVyxHQUFHLENBQUM7O0lBc0NuQyxDQUFDO0lBcENVLHdCQUFRLEdBQWYsVUFBZ0IsUUFBaUI7UUFBakMsaUJBcUJDO1FBcEJHLFFBQVE7UUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDL0IsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNUO1NBQ0o7UUFFRCxXQUFXO1FBQ1gsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzFDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFeEMsS0FBSyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFFbkIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUN0QyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFcEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0MsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ007SUFIUCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNEN6QjtJQUFELFlBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q2tDLEVBQUUsQ0FBQyxTQUFTLEdBNEM5QztrQkE1Q29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNvcm4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnVnTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gMzAwO1xyXG4gICAgcHJpdmF0ZSBtaW5TcGVlZDogbnVtYmVyID0gMTUwO1xyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShpc1JvdHRlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIOuyjOugiCDrhbjstpxcclxuICAgICAgICBpZiAodGhpcy5idWdOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVnTm9kZS5hY3RpdmUgPSBpc1JvdHRlbjtcclxuICAgICAgICAgICAgaWYgKGlzUm90dGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOusvOumrCDsho3rj4Qg7KCB7JqpXHJcbiAgICAgICAgY29uc3QgcmlnaWQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKHJpZ2lkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xyXG4gICAgICAgICAgICBjb25zdCB2eCA9IE1hdGguY29zKGFuZ2xlKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHZ5ID0gTWF0aC5zaW4oYW5nbGUpICogdGhpcy5zcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHJpZ2lkLmxpbmVhclZlbG9jaXR5ID0gY2MudjIodngsIHZ5KTtcclxuICAgICAgICAgICAgcmlnaWQuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJpZ2lkID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghcmlnaWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSByaWdpZC5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICBjb25zdCBjdXJyZW50U3BlZWQgPSB2ZWxvY2l0eS5tYWcoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRTcGVlZCA8IHRoaXMubWluU3BlZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdmVsb2NpdHkubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0ZWQgPSBkaXJlY3Rpb24ubXVsKHRoaXMubWluU3BlZWQpO1xyXG4gICAgICAgICAgICByaWdpZC5saW5lYXJWZWxvY2l0eSA9IGNvcnJlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazePlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4945dCYaAtPU49aTpTuPF+Z', 'MazePlayer');
// scripts/Jang/MazePlayer.ts

"use strict";
// Scripts/MazePlayer.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const MazeGameManager_1 = require("./MazeGameManager");
const { ccclass, property } = cc._decorator;
let MazePlayer = class MazePlayer extends cc.Component {
    constructor() {
        super(...arguments);
        /** 걷기 애니메이션용 프레임 배열 (Inspector 에서 4개 연결) */
        this.walkFrames = [];
        /** 현재 그리드 좌표 */
        this.currentGridPos = cc.v2(1, 1);
        this.isMoving = false;
        this.moveDuration = 0.1;
    }
    onLoad() {
        // 1) Canvas/Game Manager 노드에서 MazeGameManager 컴포넌트 찾아서 할당
        const gmNode = cc.find("Canvas/Game Manager");
        if (!gmNode) {
            cc.error("MazePlayer: 'Canvas/Game Manager' 노드를 찾을 수 없습니다!");
            return;
        }
        this.gameManager = gmNode.getComponent(MazeGameManager_1.default);
        if (!this.gameManager) {
            cc.error("MazePlayer: MazeGameManager 컴포넌트가 없습니다!");
            return;
        }
        // 2) Sprite & Animation 컴포넌트 확보
        this.sprite = this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
        this.anim = this.node.getComponent(cc.Animation) || this.node.addComponent(cc.Animation);
        // 3) 걷기 프레임이 설정되어 있으면 첫 프레임 적용 & 애니메이션 클립 생성
        if (this.walkFrames.length > 0) {
            // 첫 프레임 세팅
            this.sprite.spriteFrame = this.walkFrames[0];
            this.sprite.type = cc.Sprite.Type.SIMPLE;
            this.sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            // 12fps 애니메이션 클립 생성
            const clip = cc.AnimationClip.createWithSpriteFrames(this.walkFrames, 12 // 초당 12프레임
            );
            clip.name = "walk";
            clip.wrapMode = cc.WrapMode.Loop;
            this.anim.addClip(clip);
            // cellSize * 0.8 크기에 맞춰 자동 스케일링
            const origW = this.walkFrames[0].getRect().width;
            const target = this.gameManager.cellSize * 0.8;
            this.node.setScale(target / origW, target / origW);
        }
        else {
            cc.warn("MazePlayer: walkFrames가 설정되지 않았습니다!");
        }
        // 4) 앵커·zIndex 설정
        this.node.setAnchorPoint(0.5, 0.5);
        this.node.zIndex = 999;
        // 5) 키 입력 리스너 등록 (KEY_DOWN + KEY_UP)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    /** 키 누를 때 호출 */
    onKeyDown(e) {
        if (this.isMoving || this.gameManager.gameOver)
            return;
        let delta = cc.v2(0, 0);
        switch (e.keyCode) {
            case cc.macro.KEY.left:
                delta = cc.v2(-1, 0);
                break;
            case cc.macro.KEY.right:
                delta = cc.v2(1, 0);
                break;
            case cc.macro.KEY.up:
                delta = cc.v2(0, 1);
                break;
            case cc.macro.KEY.down:
                delta = cc.v2(0, -1);
                break;
            default: return;
        }
        // 걷기 애니메이션 재생
        if (this.anim.getClips().some(c => c.name === "walk")) {
            this.anim.play("walk");
        }
        this.move(delta);
    }
    /** 키 뗄 때 호출 */
    onKeyUp(e) {
        // 애니메이션 정지
        if (this.anim.getClips().some(c => c.name === "walk")) {
            this.anim.stop("walk");
        }
    }
    /** 실제 그리드 이동 & 노드 액션 처리 */
    move(delta) {
        const next = this.currentGridPos.add(delta);
        if (!this.gameManager.getMazeLogic().isWalkable({ x: next.x, y: next.y }))
            return;
        this.currentGridPos = next.clone();
        // 목표 월드 좌표 계산
        const cs = this.gameManager.cellSize;
        const w = this.gameManager.cols * cs;
        const h = this.gameManager.rows * cs;
        const ox = (1080 - w) / 2;
        const oy = (1920 - h) / 2;
        const dest = cc.v2(ox + next.x * cs + cs / 2, oy + next.y * cs + cs / 2);
        // 이동 처리
        this.isMoving = true;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.moveTo(this.moveDuration, dest), cc.callFunc(() => { this.isMoving = false; })));
    }
};
__decorate([
    property([cc.SpriteFrame])
], MazePlayer.prototype, "walkFrames", void 0);
MazePlayer = __decorate([
    ccclass
], MazePlayer);
exports.default = MazePlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZVBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7OztBQUV4Qix1REFBZ0Q7QUFDaEQsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRzVDLElBQXFCLFVBQVUsR0FBL0IsTUFBcUIsVUFBVyxTQUFRLEVBQUUsQ0FBQyxTQUFTO0lBQXBEOztRQUNFLDRDQUE0QztRQUVyQyxlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUt6QyxnQkFBZ0I7UUFDVCxtQkFBYyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJDLGFBQVEsR0FBaUIsS0FBSyxDQUFDO1FBQy9CLGlCQUFZLEdBQWEsR0FBRyxDQUFDO0lBb0h2QyxDQUFDO0lBaEhDLE1BQU07UUFDSiwwREFBMEQ7UUFDMUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7WUFDN0QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDcEQsT0FBTztTQUNSO1FBRUQsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMs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QUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQ1QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzlDLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBN0hDO0lBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzhDQUNjO0FBSHRCLFVBQVU7SUFEOUIsT0FBTztHQUNhLFVBQVUsQ0FnSTlCO2tCQWhJb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNjcmlwdHMvTWF6ZVBsYXllci50c1xyXG5cclxuaW1wb3J0IE1hemVHYW1lTWFuYWdlciBmcm9tIFwiLi9NYXplR2FtZU1hbmFnZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hemVQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8qKiDqsbfquLAg7JWg64uI66mU7J207IWY7JqpIO2UhOugiOyehCDrsLDsl7QgKEluc3BlY3RvciDsl5DshJwgNOqwnCDsl7DqsrApICovXHJcbiAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgcHVibGljIHdhbGtGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgLyoqIOuCtOu2gOyXkOyEnCDsnpDrj5nsnLzroZwg7ZWg64u565CgIEdhbWVNYW5hZ2VyIOywuOyhsCAqL1xyXG4gIHByaXZhdGUgZ2FtZU1hbmFnZXIhOiBNYXplR2FtZU1hbmFnZXI7XHJcblxyXG4gIC8qKiDtmITsnqwg6re466as65OcIOyijO2RnCAqL1xyXG4gIHB1YmxpYyBjdXJyZW50R3JpZFBvczogY2MuVmVjMiA9IGNjLnYyKDEsIDEpO1xyXG5cclxuICBwcml2YXRlIGlzTW92aW5nOiBib29sZWFuICAgICAgPSBmYWxzZTtcclxuICBwcml2YXRlIG1vdmVEdXJhdGlvbjogbnVtYmVyICAgPSAwLjE7XHJcbiAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xyXG4gIHByaXZhdGUgc3ByaXRlITogY2MuU3ByaXRlO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyAxKSBDYW52YXMvR2FtZSBNYW5hZ2VyIOuFuOuTnOyXkOyEnCBNYXplR2FtZU1hbmFnZXIg7Lu07Y+s64SM7Yq4IOywvuyVhOyEnCDtlaDri7lcclxuICAgIGNvbnN0IGdtTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZSBNYW5hZ2VyXCIpO1xyXG4gICAgaWYgKCFnbU5vZGUpIHtcclxuICAgICAgY2MuZXJyb3IoXCJNYXplUGxheWVyOiAnQ2FudmFzL0dhbWUgTWFuYWdlcicg64W465Oc66W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukIVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lTWFuYWdlciA9IGdtTm9kZS5nZXRDb21wb25lbnQoTWF6ZUdhbWVNYW5hZ2VyKSE7XHJcbiAgICBpZiAoIXRoaXMuZ2FtZU1hbmFnZXIpIHtcclxuICAgICAgY2MuZXJyb3IoXCJNYXplUGxheWVyOiBNYXplR2FtZU1hbmFnZXIg7Lu07Y+s64SM7Yq46rCAIOyXhuyKteuLiOuLpCFcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyKSBTcHJpdGUgJiBBbmltYXRpb24g7Lu07Y+s64SM7Yq4IO2ZleuztFxyXG4gICAgdGhpcy5zcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgfHwgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgdGhpcy5hbmltICAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikgfHwgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG5cclxuICAgIC8vIDMpIOqxt+q4sCDtlITroIjsnoTsnbQg7ISk7KCV65CY7Ja0IOyeiOycvOuptCDssqsg7ZSE66CI7J6EIOyggeyaqSAmIOyVoOuLiOuplOydtOyFmCDtgbTrpr0g7IOd7ISxXHJcbiAgICBpZiAodGhpcy53YWxrRnJhbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8g7LKrIO2UhOugiOyehCDshLjtjIVcclxuICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLndhbGtGcmFtZXNbMF07XHJcbiAgICAgIHRoaXMuc3ByaXRlLnR5cGUgICAgID0gY2MuU3ByaXRlLlR5cGUuU0lNUExFO1xyXG4gICAgICB0aGlzLnNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcblxyXG4gICAgICAvLyAxMmZwcyDslaDri4jrqZTsnbTshZgg7YG066a9IOyDneyEsVxyXG4gICAgICBjb25zdCBjbGlwID0gY2MuQW5pbWF0aW9uQ2xpcC5jcmVhdGVXaXRoU3ByaXRlRnJhbWVzKFxyXG4gICAgICAgIHRoaXMud2Fsa0ZyYW1lcyxcclxuICAgICAgICAxMiAgLy8g7LSI64u5IDEy7ZSE66CI7J6EXHJcbiAgICAgICk7XHJcbiAgICAgIGNsaXAubmFtZSAgICAgPSBcIndhbGtcIjtcclxuICAgICAgY2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLkxvb3A7XHJcbiAgICAgIHRoaXMuYW5pbS5hZGRDbGlwKGNsaXApO1xyXG5cclxuICAgICAgLy8gY2VsbFNpemUgKiAwLjgg7YGs6riw7JeQIOunnuy2sCDsnpDrj5kg7Iqk7LyA7J2866eBXHJcbiAgICAgIGNvbnN0IG9yaWdXICAgID0gdGhpcy53YWxrRnJhbWVzWzBdLmdldFJlY3QoKS53aWR0aDtcclxuICAgICAgY29uc3QgdGFyZ2V0ICAgPSB0aGlzLmdhbWVNYW5hZ2VyLmNlbGxTaXplICogMC44O1xyXG4gICAgICB0aGlzLm5vZGUuc2V0U2NhbGUodGFyZ2V0IC8gb3JpZ1csIHRhcmdldCAvIG9yaWdXKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNjLndhcm4oXCJNYXplUGxheWVyOiB3YWxrRnJhbWVz6rCAIOyEpOygleuQmOyngCDslYrslZjsirXri4jri6QhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDQpIOyVtey7pMK3ekluZGV4IOyEpOyglVxyXG4gICAgdGhpcy5ub2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcclxuICAgIHRoaXMubm9kZS56SW5kZXggPSA5OTk7XHJcblxyXG4gICAgLy8gNSkg7YKkIOyeheugpSDrpqzsiqTrhIgg65Ox66GdIChLRVlfRE9XTiArIEtFWV9VUClcclxuICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgICB0aGlzLm9uS2V5VXAsICAgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgICB0aGlzLm9uS2V5VXAsICAgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiog7YKkIOuIhOulvCDrlYwg7Zi47LacICovXHJcbiAgcHJpdmF0ZSBvbktleURvd24oZTogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgaWYgKHRoaXMuaXNNb3ZpbmcgfHwgdGhpcy5nYW1lTWFuYWdlci5nYW1lT3ZlcikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBkZWx0YSA9IGNjLnYyKDAsIDApO1xyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDogIGRlbHRhID0gY2MudjIoLTEsICAwKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OiBkZWx0YSA9IGNjLnYyKCAxLCAgMCk7IGJyZWFrO1xyXG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDogICAgZGVsdGEgPSBjYy52MiggMCwgIDEpOyBicmVhaztcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjogIGRlbHRhID0gY2MudjIoIDAsIC0xKTsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDqsbfquLAg7JWg64uI66mU7J207IWYIOyerOyDnVxyXG4gICAgaWYgKHRoaXMuYW5pbS5nZXRDbGlwcygpLnNvbWUoYyA9PiBjLm5hbWUgPT09IFwid2Fsa1wiKSkge1xyXG4gICAgICB0aGlzLmFuaW0ucGxheShcIndhbGtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb3ZlKGRlbHRhKTtcclxuICB9XHJcblxyXG4gIC8qKiDtgqQg65eEIOuVjCDtmLjstpwgKi9cclxuICBwcml2YXRlIG9uS2V5VXAoZTogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgLy8g7JWg64uI66mU7J207IWYIOygleyngFxyXG4gICAgaWYgKHRoaXMuYW5pbS5nZXRDbGlwcygpLnNvbWUoYyA9PiBjLm5hbWUgPT09IFwid2Fsa1wiKSkge1xyXG4gICAgICB0aGlzLmFuaW0uc3RvcChcIndhbGtcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog7Iuk7KCcIOq3uOumrOuTnCDsnbTrj5kgJiDrhbjrk5wg7JWh7IWYIOyymOumrCAqL1xyXG4gIHByaXZhdGUgbW92ZShkZWx0YTogY2MuVmVjMikge1xyXG4gICAgY29uc3QgbmV4dCA9IHRoaXMuY3VycmVudEdyaWRQb3MuYWRkKGRlbHRhKTtcclxuICAgIGlmICghdGhpcy5nYW1lTWFuYWdlci5nZXRNYXplTG9naWMoKS5pc1dhbGthYmxlKHsgeDogbmV4dC54LCB5OiBuZXh0LnkgfSkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRHcmlkUG9zID0gbmV4dC5jbG9uZSgpO1xyXG5cclxuICAgIC8vIOuqqe2RnCDsm5Trk5wg7KKM7ZGcIOqzhOyCsFxyXG4gICAgY29uc3QgY3MgICA9IHRoaXMuZ2FtZU1hbmFnZXIuY2VsbFNpemU7XHJcbiAgICBjb25zdCB3ICAgID0gdGhpcy5nYW1lTWFuYWdlci5jb2xzICogY3M7XHJcbiAgICBjb25zdCBoICAgID0gdGhpcy5nYW1lTWFuYWdlci5yb3dzICogY3M7XHJcbiAgICBjb25zdCBveCAgID0gKDEwODAgLSB3KSAvIDI7XHJcbiAgICBjb25zdCBveSAgID0gKDE5MjAgLSBoKSAvIDI7XHJcbiAgICBjb25zdCBkZXN0ID0gY2MudjIoXHJcbiAgICAgIG94ICsgbmV4dC54ICogY3MgKyBjcyAvIDIsXHJcbiAgICAgIG95ICsgbmV4dC55ICogY3MgKyBjcyAvIDJcclxuICAgICk7XHJcblxyXG4gICAgLy8g7J2064+ZIOyymOumrFxyXG4gICAgdGhpcy5pc01vdmluZyA9IHRydWU7XHJcbiAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgIGNjLm1vdmVUbyh0aGlzLm1vdmVEdXJhdGlvbiwgZGVzdCksXHJcbiAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4geyB0aGlzLmlzTW92aW5nID0gZmFsc2U7IH0pXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/GameOverManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba55241+4FM1oLcOvRC1meQ', 'GameOverManager');
// scripts/Jang/GameOverManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameData_1 = require("./GameData");
const { ccclass, property } = cc._decorator;
let GameOverManager = class GameOverManager extends cc.Component {
    constructor() {
        super(...arguments);
        this.retryButton = null;
        this.mainMenuButton = null;
    }
    start() {
        this.retryButton.on('click', this.onRetryButtonClick, this);
        this.mainMenuButton.on('click', this.onMainMenuButtonClick, this);
    }
    onRetryButtonClick() {
        // Retry → global currentLevel 값 그대로 MazeScene으로 로드 (실패했던 레벨부터 재시작)
        cc.director.loadScene("MazeScene");
    }
    onMainMenuButtonClick() {
        // Main Menu → global currentLevel 재설정 후 MainScene으로 전환
        GameData_1.default.currentLevel = 1;
        cc.director.loadScene("MainScene");
    }
};
__decorate([
    property(cc.Node)
], GameOverManager.prototype, "retryButton", void 0);
__decorate([
    property(cc.Node)
], GameOverManager.prototype, "mainMenuButton", void 0);
GameOverManager = __decorate([
    ccclass
], GameOverManager);
exports.default = GameOverManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcR2FtZU92ZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFFdEYseUNBQWtDO0FBRWxDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUc1QyxJQUFxQixlQUFlLEdBQXBDLE1BQXFCLGVBQWdCLFNBQVEsRUFBRSxDQUFDLFNBQVM7SUFBekQ7O1FBRUksZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsbUJBQWMsR0FBWSxJQUFJLENBQUM7SUFpQm5DLENBQUM7SUFmRyxLQUFLO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxrQkFBa0I7UUFDZCxtRUFBbUU7UUFDbkUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHFCQUFxQjtRQUNqQix1REFBdUQ7UUFDdkQsa0JBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSixDQUFBO0FBcEJHO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1U7QUFHNUI7SUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDYTtBQUxkLGVBQWU7SUFEbkMsT0FBTztHQUNhLGVBQWUsQ0FzQm5DO2tCQXRCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lRGF0YSBmcm9tIFwiLi9HYW1lRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJldHJ5QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haW5NZW51QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJldHJ5QnV0dG9uLm9uKCdjbGljaycsIHRoaXMub25SZXRyeUJ1dHRvbkNsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm1haW5NZW51QnV0dG9uLm9uKCdjbGljaycsIHRoaXMub25NYWluTWVudUJ1dHRvbkNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJldHJ5QnV0dG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gUmV0cnkg4oaSIGdsb2JhbCBjdXJyZW50TGV2ZWwg6rCSIOq3uOuMgOuhnCBNYXplU2NlbmXsnLzroZwg66Gc65OcICjsi6TtjKjtlojrjZgg66CI67Ko67aA7YSwIOyerOyLnOyekSlcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYXplU2NlbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25NYWluTWVudUJ1dHRvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE1haW4gTWVudSDihpIgZ2xvYmFsIGN1cnJlbnRMZXZlbCDsnqzshKTsoJUg7ZuEIE1haW5TY2VuZeycvOuhnCDsoITtmZhcclxuICAgICAgICBHYW1lRGF0YS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeGameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f092SlID9Pt5Qa8xNU9wGe', 'MazeGameManager');
// scripts/Jang/MazeGameManager.ts

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
var MazePlayer_1 = require("./MazePlayer");
var GameData_1 = require("./GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MazeGameManager = /** @class */ (function (_super) {
    __extends(MazeGameManager, _super);
    function MazeGameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mazeContainer = null;
        _this.player = null;
        _this.nextLevelButton = null;
        _this.backButton = null;
        _this.timerLabel = null;
        _this.levelLabel = null;
        _this.goal = null;
        // 에디터에서 연결할 Goal 스프라이트 프레임
        _this.goalFrame = null;
        // 타일맵용 에셋
        _this.tilePrefab = null;
        _this.pathFrame = null;
        _this.grassFrame = null;
        _this.cellSize = 50;
        _this.cols = 15;
        _this.rows = 15;
        _this.mazeLogic = null;
        _this.timeRemaining = 60;
        _this.gameOver = false;
        _this.goalReached = false;
        _this.currentLevel = 1;
        _this.playerComp = null;
        return _this;
    }
    MazeGameManager.prototype.onLoad = function () {
        this.nextLevelButton.on("click", this.onNextLevelButtonClick, this);
        this.backButton.on("click", this.onBackButtonClick, this);
    };
    MazeGameManager.prototype.start = function () {
        this.currentLevel = GameData_1.default.currentLevel;
        this.levelLabel.string = "Level: " + this.currentLevel;
        this.nextLevelButton.active = false;
        this.playerComp = this.player.getComponent(MazePlayer_1.default);
        if (this.playerComp)
            this.playerComp.gameManager = this;
        this.startLevel(this.currentLevel);
    };
    MazeGameManager.prototype.getMazeLogic = function () {
        return this.mazeLogic;
    };
    MazeGameManager.prototype.startLevel = function (level) {
        // cols/rows: 1~7레벨 9→21, 그 이후 21로 고정
        var size = Math.min(9 + (level - 1) * 2, 21);
        this.cols = size;
        this.rows = size;
        // cellSize 고정
        this.cellSize = 50;
        // MazeLogic 세팅
        this.mazeLogic = new MazeLogic_1.default(this.rows, this.cols, this.mazeContainer);
        this.mazeLogic.cellSize = this.cellSize;
        this.mazeLogic.tilePrefab = this.tilePrefab;
        this.mazeLogic.pathFrame = this.pathFrame;
        this.mazeLogic.grassFrame = this.grassFrame;
        this.mazeLogic.generateMaze(level);
        this.mazeLogic.renderMaze();
        // 중앙 정렬
        var w = this.cols * this.cellSize;
        var h = this.rows * this.cellSize;
        var baseX = (1080 - w) / 2;
        var baseY = (1920 - h) / 2;
        this.mazeContainer.setPosition(baseX, baseY);
        // 플레이어 배치
        var start = this.mazeLogic.getStartPosition();
        this.player.setPosition(cc.v2(baseX + start.x * this.cellSize + this.cellSize / 2, baseY + start.y * this.cellSize + this.cellSize / 2));
        if (this.playerComp)
            this.playerComp.currentGridPos = cc.v2(start.x, start.y);
        // UI 초기화
        this.timeRemaining = 60;
        this.updateTimerLabel();
        this.gameOver = false;
        this.goalReached = false;
        this.nextLevelButton.active = false;
        this.levelLabel.string = "Level: " + level;
        // Goal(바나나) 자동 스케일 & 배치
        if (this.goal && this.goalFrame) {
            // 스프라이트 컴포넌트 확보
            var sp = this.goal.getComponent(cc.Sprite) || this.goal.addComponent(cc.Sprite);
            sp.spriteFrame = this.goalFrame;
            sp.type = cc.Sprite.Type.SIMPLE;
            sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            // 원본 프레임 크기 가져오기
            var rect = this.goalFrame.getRect();
            var origW = rect.width;
            var targetSize = this.cellSize * 0.8;
            // 스케일 계산 & 적용
            var scale = targetSize / origW;
            this.goal.setScale(scale);
            // 위치 계산 후 배치
            var goalGrid = this.mazeLogic.getGoalPosition();
            this.goal.setPosition(cc.v2(baseX + goalGrid.x * this.cellSize + this.cellSize / 2, baseY + goalGrid.y * this.cellSize + this.cellSize / 2));
            this.goal.zIndex = 500;
        }
    };
    MazeGameManager.prototype.update = function (dt) {
        if (this.gameOver)
            return;
        this.timeRemaining -= dt;
        if (this.timeRemaining <= 0) {
            this.timeRemaining = 0;
            this.updateTimerLabel();
            this.onGameOver();
            return;
        }
        this.updateTimerLabel();
        if (!this.goalReached) {
            var goalGrid = this.mazeLogic.getGoalPosition();
            var w = this.cols * this.cellSize;
            var h = this.rows * this.cellSize;
            var baseX = (1080 - w) / 2;
            var baseY = (1920 - h) / 2;
            var goalPos = cc.v2(baseX + goalGrid.x * this.cellSize + this.cellSize / 2, baseY + goalGrid.y * this.cellSize + this.cellSize / 2);
            if (this.player.getPosition().sub(goalPos).mag() < this.cellSize * 0.4) {
                this.goalReached = true;
                this.onMazeCleared();
            }
        }
    };
    MazeGameManager.prototype.updateTimerLabel = function () {
        this.timerLabel.string = "Time: " + Math.ceil(this.timeRemaining) + "s";
    };
    MazeGameManager.prototype.onMazeCleared = function () {
        this.nextLevelButton.active = true;
    };
    MazeGameManager.prototype.onNextLevelButtonClick = function () {
        this.nextLevelButton.active = false;
        this.currentLevel++;
        GameData_1.default.currentLevel = this.currentLevel;
        this.startLevel(this.currentLevel);
    };
    MazeGameManager.prototype.onGameOver = function () {
        this.gameOver = true;
        cc.director.loadScene("GameOverScene");
    };
    MazeGameManager.prototype.onBackButtonClick = function () {
        GameData_1.default.currentLevel = 1;
        cc.director.loadScene("SingleGameList");
    };
    __decorate([
        property(cc.Node)
    ], MazeGameManager.prototype, "mazeContainer", void 0);
    __decorate([
        property(cc.Node)
    ], MazeGameManager.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], MazeGameManager.prototype, "nextLevelButton", void 0);
    __decorate([
        property(cc.Node)
    ], MazeGameManager.prototype, "backButton", void 0);
    __decorate([
        property(cc.Label)
    ], MazeGameManager.prototype, "timerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], MazeGameManager.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Node)
    ], MazeGameManager.prototype, "goal", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MazeGameManager.prototype, "goalFrame", void 0);
    __decorate([
        property(cc.Prefab)
    ], MazeGameManager.prototype, "tilePrefab", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MazeGameManager.prototype, "pathFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MazeGameManager.prototype, "grassFrame", void 0);
    MazeGameManager = __decorate([
        ccclass
    ], MazeGameManager);
    return MazeGameManager;
}(cc.Component));
exports.default = MazeGameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZUdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBc0M7QUFDdEMsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBNktDO1FBNUswQixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDbkMsWUFBTSxHQUF3QixJQUFJLENBQUM7UUFDbkMscUJBQWUsR0FBZSxJQUFJLENBQUM7UUFDbkMsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQ25DLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUNuQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDbkMsVUFBSSxHQUEwQixJQUFJLENBQUM7UUFFNUQsMkJBQTJCO1FBQ0QsZUFBUyxHQUFxQixJQUFJLENBQUM7UUFFN0QsVUFBVTtRQUNnQixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFDbEMsZUFBUyxHQUFxQixJQUFJLENBQUM7UUFDbkMsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBRXRELGNBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsVUFBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixVQUFJLEdBQWUsRUFBRSxDQUFDO1FBRXJCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLG1CQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLGNBQVEsR0FBa0IsS0FBSyxDQUFDO1FBQ2hDLGlCQUFXLEdBQWUsS0FBSyxDQUFDO1FBQ2hDLGtCQUFZLEdBQWMsQ0FBQyxDQUFDO1FBQzVCLGdCQUFVLEdBQWdCLElBQUksQ0FBQzs7SUFtSnpDLENBQUM7SUFqSkMsZ0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxD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QyxXQUFXLENBQUM7c0RBQW9DO0lBQ25DO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUFvQztJQWYxQyxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNktuQztJQUFELHNCQUFDO0NBN0tELEFBNktDLENBN0s0QyxFQUFFLENBQUMsU0FBUyxHQTZLeEQ7a0JBN0tvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hemVMb2dpYyBmcm9tIFwiLi9NYXplTG9naWNcIjtcclxuaW1wb3J0IE1hemVQbGF5ZXIgZnJvbSBcIi4vTWF6ZVBsYXllclwiO1xyXG5pbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4vR2FtZURhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXplR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBtYXplQ29udGFpbmVyOiBjYy5Ob2RlICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBwbGF5ZXI6IGNjLk5vZGUgICAgICAgICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBuZXh0TGV2ZWxCdXR0b246IGNjLk5vZGUgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlICAgICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbCkgICAgICB0aW1lckxhYmVsOiBjYy5MYWJlbCAgICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbCkgICAgICBsZXZlbExhYmVsOiBjYy5MYWJlbCAgICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSAgICAgICBnb2FsOiBjYy5Ob2RlICAgICAgICAgICAgICAgPSBudWxsO1xyXG5cclxuICAvLyDsl5DrlJTthLDsl5DshJwg7Jew6rKw7ZWgIEdvYWwg7Iqk7ZSE65287J207Yq4IO2UhOugiOyehFxyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgZ29hbEZyYW1lOiBjYy5TcHJpdGVGcmFtZSAgID0gbnVsbDtcclxuXHJcbiAgLy8g7YOA7J2866e17JqpIOyXkOyFi1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpICAgICAgdGlsZVByZWZhYjogY2MuUHJlZmFiICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgcGF0aEZyYW1lOiBjYy5TcHJpdGVGcmFtZSAgID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIGdyYXNzRnJhbWU6IGNjLlNwcml0ZUZyYW1lICA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBjZWxsU2l6ZTogbnVtYmVyID0gNTA7XHJcbiAgcHVibGljIGNvbHM6IG51bWJlciAgICAgPSAxNTtcclxuICBwdWJsaWMgcm93czogbnVtYmVyICAgICA9IDE1O1xyXG5cclxuICBwcml2YXRlIG1hemVMb2dpYzogTWF6ZUxvZ2ljICAgID0gbnVsbDtcclxuICBwcml2YXRlIHRpbWVSZW1haW5pbmc6IG51bWJlciAgID0gNjA7XHJcbiAgcHVibGljICBnYW1lT3ZlcjogYm9vbGVhbiAgICAgICA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZ29hbFJlYWNoZWQ6IGJvb2xlYW4gICAgPSBmYWxzZTtcclxuICBwcml2YXRlIGN1cnJlbnRMZXZlbDogbnVtYmVyICAgID0gMTtcclxuICBwcml2YXRlIHBsYXllckNvbXA6IE1hemVQbGF5ZXIgID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5uZXh0TGV2ZWxCdXR0b24ub24oXCJjbGlja1wiLCB0aGlzLm9uTmV4dExldmVsQnV0dG9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgdGhpcy5iYWNrQnV0dG9uLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkJhY2tCdXR0b25DbGljaywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuY3VycmVudExldmVsID0gR2FtZURhdGEuY3VycmVudExldmVsO1xyXG4gICAgdGhpcy5sZXZlbExhYmVsLnN0cmluZyA9IGBMZXZlbDogJHt0aGlzLmN1cnJlbnRMZXZlbH1gO1xyXG4gICAgdGhpcy5uZXh0TGV2ZWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJDb21wID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KE1hemVQbGF5ZXIpO1xyXG4gICAgaWYgKHRoaXMucGxheWVyQ29tcCkgdGhpcy5wbGF5ZXJDb21wLmdhbWVNYW5hZ2VyID0gdGhpcztcclxuXHJcbiAgICB0aGlzLnN0YXJ0TGV2ZWwodGhpcy5jdXJyZW50TGV2ZWwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE1hemVMb2dpYygpOiBNYXplTG9naWMge1xyXG4gICAgcmV0dXJuIHRoaXMubWF6ZUxvZ2ljO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0TGV2ZWwobGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gY29scy9yb3dzOiAxfjfroIjrsqggOeKGkjIxLCDqt7gg7J207ZuEIDIx66GcIOqzoOyglVxyXG4gICAgY29uc3Qgc2l6ZSA9IE1hdGgubWluKDkgKyAobGV2ZWwgLSAxKSAqIDIsIDIxKTtcclxuICAgIHRoaXMuY29scyA9IHNpemU7XHJcbiAgICB0aGlzLnJvd3MgPSBzaXplO1xyXG5cclxuICAgIC8vIGNlbGxTaXplIOqzoOyglVxyXG4gICAgdGhpcy5jZWxsU2l6ZSA9IDUwO1xyXG5cclxuICAgIC8vIE1hemVMb2dpYyDshLjtjIVcclxuICAgIHRoaXMubWF6ZUxvZ2ljID0gbmV3IE1hemVMb2dpYyh0aGlzLnJvd3MsIHRoaXMuY29scywgdGhpcy5tYXplQ29udGFpbmVyKTtcclxuICAgIHRoaXMubWF6ZUxvZ2ljLmNlbGxTaXplICAgPSB0aGlzLmNlbGxTaXplO1xyXG4gICAgdGhpcy5tYXplTG9naWMudGlsZVByZWZhYiA9IHRoaXMudGlsZVByZWZhYjtcclxuICAgIHRoaXMubWF6ZUxvZ2ljLnBhdGhGcmFtZSAgPSB0aGlzLnBhdGhGcmFtZTtcclxuICAgIHRoaXMubWF6ZUxvZ2ljLmdyYXNzRnJhbWUgPSB0aGlzLmdyYXNzRnJhbWU7XHJcbiAgICB0aGlzLm1hemVMb2dpYy5nZW5lcmF0ZU1hemUobGV2ZWwpO1xyXG4gICAgdGhpcy5tYXplTG9naWMucmVuZGVyTWF6ZSgpO1xyXG5cclxuICAgIC8vIOykkeyVmSDsoJXroKxcclxuICAgIGNvbnN0IHcgPSB0aGlzLmNvbHMgKiB0aGlzLmNlbGxTaXplO1xyXG4gICAgY29uc3QgaCA9IHRoaXMucm93cyAqIHRoaXMuY2VsbFNpemU7XHJcbiAgICBjb25zdCBiYXNlWCA9ICgxMDgwIC0gdykgLyAyO1xyXG4gICAgY29uc3QgYmFzZVkgPSAoMTkyMCAtIGgpIC8gMjtcclxuICAgIHRoaXMubWF6ZUNvbnRhaW5lci5zZXRQb3NpdGlvbihiYXNlWCwgYmFzZVkpO1xyXG5cclxuICAgIC8vIO2UjOugiOydtOyWtCDrsLDsuZhcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5tYXplTG9naWMuZ2V0U3RhcnRQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc2V0UG9zaXRpb24oXHJcbiAgICAgIGNjLnYyKFxyXG4gICAgICAgIGJhc2VYICsgc3RhcnQueCAqIHRoaXMuY2VsbFNpemUgKyB0aGlzLmNlbGxTaXplIC8gMixcclxuICAgICAgICBiYXNlWSArIHN0YXJ0LnkgKiB0aGlzLmNlbGxTaXplICsgdGhpcy5jZWxsU2l6ZSAvIDJcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLnBsYXllckNvbXApIHRoaXMucGxheWVyQ29tcC5jdXJyZW50R3JpZFBvcyA9IGNjLnYyKHN0YXJ0LngsIHN0YXJ0LnkpO1xyXG5cclxuICAgIC8vIFVJIOy0iOq4sO2ZlFxyXG4gICAgdGhpcy50aW1lUmVtYWluaW5nID0gNjA7XHJcbiAgICB0aGlzLnVwZGF0ZVRpbWVyTGFiZWwoKTtcclxuICAgIHRoaXMuZ2FtZU92ZXIgICAgPSBmYWxzZTtcclxuICAgIHRoaXMuZ29hbFJlYWNoZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubmV4dExldmVsQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5sZXZlbExhYmVsLnN0cmluZyAgICAgID0gYExldmVsOiAke2xldmVsfWA7XHJcblxyXG4gICAgLy8gR29hbCjrsJTrgpjrgpgpIOyekOuPmSDsiqTsvIDsnbwgJiDrsLDsuZhcclxuICAgIGlmICh0aGlzLmdvYWwgJiYgdGhpcy5nb2FsRnJhbWUpIHtcclxuICAgICAgLy8g7Iqk7ZSE65287J207Yq4IOy7tO2PrOuEjO2KuCDtmZXrs7RcclxuICAgICAgY29uc3Qgc3AgPSB0aGlzLmdvYWwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgfHwgdGhpcy5nb2FsLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICBzcC5zcHJpdGVGcmFtZSA9IHRoaXMuZ29hbEZyYW1lO1xyXG4gICAgICBzcC50eXBlICAgICAgPSBjYy5TcHJpdGUuVHlwZS5TSU1QTEU7XHJcbiAgICAgIHNwLnNpemVNb2RlICA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcblxyXG4gICAgICAvLyDsm5Drs7gg7ZSE66CI7J6EIO2BrOq4sCDqsIDsoLjsmKTquLBcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ29hbEZyYW1lLmdldFJlY3QoKTtcclxuICAgICAgY29uc3Qgb3JpZ1cgPSByZWN0LndpZHRoO1xyXG4gICAgICBjb25zdCB0YXJnZXRTaXplID0gdGhpcy5jZWxsU2l6ZSAqIDAuODtcclxuXHJcbiAgICAgIC8vIOyKpOy8gOydvCDqs4TsgrAgJiDsoIHsmqlcclxuICAgICAgY29uc3Qgc2NhbGUgPSB0YXJnZXRTaXplIC8gb3JpZ1c7XHJcbiAgICAgIHRoaXMuZ29hbC5zZXRTY2FsZShzY2FsZSk7XHJcblxyXG4gICAgICAvLyDsnITsuZgg6rOE7IKwIO2bhCDrsLDsuZhcclxuICAgICAgY29uc3QgZ29hbEdyaWQgPSB0aGlzLm1hemVMb2dpYy5nZXRHb2FsUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5nb2FsLnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGNjLnYyKFxyXG4gICAgICAgICAgYmFzZVggKyBnb2FsR3JpZC54ICogdGhpcy5jZWxsU2l6ZSArIHRoaXMuY2VsbFNpemUgLyAyLFxyXG4gICAgICAgICAgYmFzZVkgKyBnb2FsR3JpZC55ICogdGhpcy5jZWxsU2l6ZSArIHRoaXMuY2VsbFNpemUgLyAyXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmdvYWwuekluZGV4ID0gNTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy50aW1lUmVtYWluaW5nIC09IGR0O1xyXG4gICAgaWYgKHRoaXMudGltZVJlbWFpbmluZyA8PSAwKSB7XHJcbiAgICAgIHRoaXMudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgICB0aGlzLm9uR2FtZU92ZXIoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVUaW1lckxhYmVsKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmdvYWxSZWFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IGdvYWxHcmlkID0gdGhpcy5tYXplTG9naWMuZ2V0R29hbFBvc2l0aW9uKCk7XHJcbiAgICAgIGNvbnN0IHcgPSB0aGlzLmNvbHMgKiB0aGlzLmNlbGxTaXplO1xyXG4gICAgICBjb25zdCBoID0gdGhpcy5yb3dzICogdGhpcy5jZWxsU2l6ZTtcclxuICAgICAgY29uc3QgYmFzZVggPSAoMTA4MCAtIHcpIC8gMjtcclxuICAgICAgY29uc3QgYmFzZVkgPSAoMTkyMCAtIGgpIC8gMjtcclxuICAgICAgY29uc3QgZ29hbFBvcyA9IGNjLnYyKFxyXG4gICAgICAgIGJhc2VYICsgZ29hbEdyaWQueCAqIHRoaXMuY2VsbFNpemUgKyB0aGlzLmNlbGxTaXplIC8gMixcclxuICAgICAgICBiYXNlWSArIGdvYWxHcmlkLnkgKiB0aGlzLmNlbGxTaXplICsgdGhpcy5jZWxsU2l6ZSAvIDJcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCkuc3ViKGdvYWxQb3MpLm1hZygpIDwgdGhpcy5jZWxsU2l6ZSAqIDAuNCkge1xyXG4gICAgICAgIHRoaXMuZ29hbFJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25NYXplQ2xlYXJlZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVRpbWVyTGFiZWwoKSB7XHJcbiAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYFRpbWU6ICR7TWF0aC5jZWlsKHRoaXMudGltZVJlbWFpbmluZyl9c2A7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTWF6ZUNsZWFyZWQoKSB7XHJcbiAgICB0aGlzLm5leHRMZXZlbEJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5leHRMZXZlbEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5uZXh0TGV2ZWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgR2FtZURhdGEuY3VycmVudExldmVsID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICB0aGlzLnN0YXJ0TGV2ZWwodGhpcy5jdXJyZW50TGV2ZWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkdhbWVPdmVyKCkge1xyXG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lT3ZlclNjZW5lXCIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkJhY2tCdXR0b25DbGljaygpIHtcclxuICAgIEdhbWVEYXRhLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTaW5nbGVHYW1lTGlzdFwiKTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40194f0OxFJo7xjtjiZh/ac', 'GameData');
// scripts/Jang/GameData.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
class GameData {
}
exports.default = GameData;
GameData.currentLevel = 1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUV0RixNQUFxQixRQUFROztBQUE3QiwyQkFFRztBQURlLHFCQUFZLEdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZURhdGEge1xyXG4gICAgcHVibGljIHN0YXRpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgfSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c718aMM5FK8ZAbHIRNyguQ', 'Reversecorrect_Game_logic');
// scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Reversecorrect_Show_QnA_1 = require("./Reversecorrect_Show_QnA");
var Reversecorrect_Game_init_1 = require("./Reversecorrect_Game_init");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game_logic = /** @class */ (function (_super) {
    __extends(Game_logic, _super);
    function Game_logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player_label_display = null;
        _this.qna = null;
        _this.sequence_label = null;
        return _this;
    }
    Game_logic_1 = Game_logic;
    //사용자가 입력하는 label 업데이트
    Game_logic.prototype.updateInputLabel = function () {
        var numString = Game_logic_1.player_label_arr.join("");
        this.player_label_display.string = numString;
    };
    //사용자가 입력하는 매 숫자가 맞는지 확인하는 함수
    Game_logic.prototype.checkAnswer = function () {
        if (Reversecorrect_Show_QnA_1.default.isGameOver)
            return;
        var input = Game_logic_1.player_label_arr;
        var correct = Reversecorrect_Show_QnA_1.default.isReverse
            ? __spreadArrays(Reversecorrect_Show_QnA_1.default.qa).reverse()
            : __spreadArrays(Reversecorrect_Show_QnA_1.default.qa);
        for (var i = 0; i < input.length; i++) {
            if (input[i] !== correct[i]) {
                this.nextProblem(false);
                return;
            }
        }
        if (input.length === correct.length) {
            Reversecorrect_Game_init_1.default.instance.addScore(10);
            this.nextProblem(true);
        }
    };
    //맞았는지 틀렸는지 확인 후 카운트 세고 다음 문제로 넘어가는 함수
    Game_logic.prototype.nextProblem = function (isCorrect) {
        Game_logic_1.player_label_arr = [];
        Game_logic_1.count = 0;
        this.player_label_display.string = "";
        Reversecorrect_Show_QnA_1.default.qa = [];
        if (this.sequence_label) {
            this.sequence_label.string = "";
            this.sequence_label.node.active = false;
        }
        if (isCorrect) {
            Reversecorrect_Show_QnA_1.default.correctCount++;
        }
        if (this.qna) {
            this.qna.showNewQuestion();
        }
    };
    var Game_logic_1;
    Game_logic.player_label_arr = [];
    Game_logic.count = 0;
    __decorate([
        property(cc.Label)
    ], Game_logic.prototype, "player_label_display", void 0);
    __decorate([
        property(Reversecorrect_Show_QnA_1.default)
    ], Game_logic.prototype, "qna", void 0);
    __decorate([
        property(cc.Label)
    ], Game_logic.prototype, "sequence_label", void 0);
    Game_logic = Game_logic_1 = __decorate([
        ccclass
    ], Game_logic);
    return Game_logic;
}(cc.Component));
exports.default = Game_logic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUmV2ZXJzZWNvcnJlY3Rfc2NyaXB0c1xcUmV2ZXJzZWNvcnJlY3RfR2FtZV9sb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdEO0FBQ2hELHVFQUFrRDtBQUM1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQThEQztRQTVERywwQkFBb0IsR0FBYSxJQUFJLENBQUM7UUFHdEMsU0FBRyxHQUFhLElBQUksQ0FBQztRQUdyQixvQkFBYyxHQUFjLElBQUksQ0FBQzs7SUFzRHJDLENBQUM7bUJBOURvQixVQUFVO0lBYzNCLHNCQUFzQjtJQUN0QixxQ0FBZ0IsR0FBaEI7UUFDSSxJQUFNLFNBQVMsR0FBRyxZQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFFRCw2QkFBNkI7SUFDN0IsZ0NBQVcsR0FBWDtRQUNJLElBQUksaUNBQVEsQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUVoQyxJQUFNLEtBQUssR0FBRyxZQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDMUMsSUFBTSxPQUFPLEdBQUcsaUNBQVEsQ0FBQyxTQUFTO1lBQzlCLENBQUMsQ0FBQyxlQUFJLGlDQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRTtZQUM1QixDQUFDLGdCQUFLLGlDQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixPQUFPO2FBQ1Y7U0FDSjtRQUVELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2pDLGtDQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxnQ0FBVyxHQUFYLFVBQVksU0FBa0I7UUFDMUIsWUFBVSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUNqQyxZQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN0QyxpQ0FBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFakIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxTQUFTLEVBQUU7WUFDWCxpQ0FBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7O0lBakRhLDJCQUFnQixHQUFhLEVBQUUsQ0FBQztJQUNoQyxnQkFBSyxHQUFXLENBQUMsQ0FBQztJQVZoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNtQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxpQ0FBUSxDQUFDOzJDQUNFO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ2M7SUFSaEIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThEOUI7SUFBRCxpQkFBQztDQTlERCxBQThEQyxDQTlEdUMsRUFBRSxDQUFDLFNBQVMsR0E4RG5EO2tCQTlEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG93X1FuQSBmcm9tIFwiLi9SZXZlcnNlY29ycmVjdF9TaG93X1FuQVwiXHJcbmltcG9ydCBHYW1lX2luaXQgZnJvbSBcIi4vUmV2ZXJzZWNvcnJlY3RfR2FtZV9pbml0XCJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVfbG9naWMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcGxheWVyX2xhYmVsX2Rpc3BsYXk6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoc2hvd19RbkEpXHJcbiAgICBxbmE6IHNob3dfUW5BID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzZXF1ZW5jZV9sYWJlbCA6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5ZXJfbGFiZWxfYXJyOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIFxyXG4gICAgLy/sgqzsmqnsnpDqsIAg7J6F66Cl7ZWY64qUIGxhYmVsIOyXheuNsOydtO2KuFxyXG4gICAgdXBkYXRlSW5wdXRMYWJlbCgpIHtcclxuICAgICAgICBjb25zdCBudW1TdHJpbmcgPSBHYW1lX2xvZ2ljLnBsYXllcl9sYWJlbF9hcnIuam9pbihcIlwiKTtcclxuICAgICAgICB0aGlzLnBsYXllcl9sYWJlbF9kaXNwbGF5LnN0cmluZyA9IG51bVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvL+yCrOyaqeyekOqwgCDsnoXroKXtlZjripQg66ekIOyIq+yekOqwgCDrp57ripTsp4Ag7ZmV7J247ZWY64qUIO2VqOyImFxyXG4gICAgY2hlY2tBbnN3ZXIoKSB7XHJcbiAgICAgICAgaWYgKHNob3dfUW5BLmlzR2FtZU92ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBHYW1lX2xvZ2ljLnBsYXllcl9sYWJlbF9hcnI7XHJcbiAgICAgICAgY29uc3QgY29ycmVjdCA9IHNob3dfUW5BLmlzUmV2ZXJzZVxyXG4gICAgICAgICAgICA/IFsuLi5zaG93X1FuQS5xYV0ucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgIDogWy4uLnNob3dfUW5BLnFhXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRbaV0gIT09IGNvcnJlY3RbaV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFByb2JsZW0oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID09PSBjb3JyZWN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBHYW1lX2luaXQuaW5zdGFuY2UuYWRkU2NvcmUoMTApO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRQcm9ibGVtKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+unnuyVmOuKlOyngCDti4DroLjripTsp4Ag7ZmV7J24IO2bhCDsubTsmrTtirgg7IS46rOgIOuLpOydjCDrrLjsoJzroZwg64SY7Ja06rCA64qUIO2VqOyImFxyXG4gICAgbmV4dFByb2JsZW0oaXNDb3JyZWN0OiBib29sZWFuKSB7XHJcbiAgICAgICAgR2FtZV9sb2dpYy5wbGF5ZXJfbGFiZWxfYXJyID0gW107XHJcbiAgICAgICAgR2FtZV9sb2dpYy5jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfbGFiZWxfZGlzcGxheS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHNob3dfUW5BLnFhID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlcXVlbmNlX2xhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VfbGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZV9sYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgICBzaG93X1FuQS5jb3JyZWN0Q291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucW5hKSB7XHJcbiAgICAgICAgICAgIHRoaXMucW5hLnNob3dOZXdRdWVzdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/MainMenuScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41bf0ewRo5Mm5+zTEYBxk9j', 'MainMenuScene');
// scripts/Controller/MainMenuScene.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let MainMenu = class MainMenu extends cc.Component {
    constructor() {
        super(...arguments);
        this.singleButton = null;
    }
    onLoad() {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            console.warn('로그인이 필요합니다.');
            cc.director.loadScene('LoginScene'); // 로그인 씬으로 리다이렉트
            return;
        }
        console.log('인증 토큰 확인 완료. 메인 메뉴에 접근 허용');
        // 버튼 이벤트 등록
        this.singleButton.node.on('click', this.onClickSingle, this);
    }
    onClickSingle() {
        cc.log("싱글 게임 버튼 클릭됨. SingleGameList 씬으로 이동.");
        cc.director.loadScene("SingleGameList");
    }
};
__decorate([
    property(cc.Button)
], MainMenu.prototype, "singleButton", void 0);
MainMenu = __decorate([
    ccclass
], MainMenu);
exports.default = MainMenu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcTWFpbk1lbnVTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUc1QyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxFQUFFLENBQUMsU0FBUztJQUFsRDs7UUFHSSxpQkFBWSxHQUFjLElBQUksQ0FBQztJQXFCbkMsQ0FBQztJQW5CRyxNQUFNO1FBQ0YsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFFLGdCQUFnQjtZQUN0RCxPQUFPO1NBQ1Y7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFekMsWUFBWTtRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsYUFBYTtRQUNULEVBQUUsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSixDQUFBO0FBckJHO0lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1c7QUFIZCxRQUFRO0lBRDVCLE9BQU87R0FDYSxRQUFRLENBd0I1QjtrQkF4Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgc2luZ2xlQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjb25zdCBqd3RUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3RUb2tlbicpO1xuICAgIFxuICAgICAgICBpZiAoIWp3dFRva2VuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0xvZ2luU2NlbmUnKTsgIC8vIOuhnOq3uOyduCDslKzsnLzroZwg66as64uk7J2066CJ7Yq4XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygn7J247KadIO2GoO2BsCDtmZXsnbgg7JmE66OMLiDrqZTsnbgg66mU64m07JeQIOygkeq3vCDtl4jsmqknKTtcblxuICAgICAgICAvLyDrsoTtirwg7J2067Kk7Yq4IOuTseuhnVxuICAgICAgICB0aGlzLnNpbmdsZUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25DbGlja1NpbmdsZSwgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIG9uQ2xpY2tTaW5nbGUoKSB7XG4gICAgICAgIGNjLmxvZyhcIuyLseq4gCDqsozsnoQg67KE7Yq8IO2BtOumreuQqC4gU2luZ2xlR2FtZUxpc3Qg7JSs7Jy866GcIOydtOuPmS5cIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNpbmdsZUdhbWVMaXN0XCIpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff7a2su8tNBnoE+upLUF5DV', 'MazeLogic');
// scripts/Jang/MazeLogic.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let MazeLogic = class MazeLogic {
    constructor(rows, cols, container) {
        // 에디터에서 연결할 프리팹 & 스프라이트
        this.tilePrefab = null;
        this.pathFrame = null;
        this.grassFrame = null;
        this.maze = [];
        // 셀 크기 (픽셀)
        this.cellSize = 50;
        this.rows = rows;
        this.cols = cols;
        this.container = container;
    }
    generateMaze(level) {
        // (기존 DFS + addLoops 그대로)
        this.maze = Array.from({ length: this.rows }, () => Array(this.cols).fill(1));
        const stack = [];
        this.maze[1][1] = 0;
        stack.push({ x: 1, y: 1 });
        while (stack.length) {
            const cur = stack.pop();
            const neighbors = this.getUnvisitedNeighbors(cur.x, cur.y);
            if (neighbors.length) {
                stack.push(cur);
                const next = neighbors[Math.floor(Math.random() * neighbors.length)];
                this.maze[next.y][next.x] = 0;
                this.maze[(cur.y + next.y) / 2][(cur.x + next.x) / 2] = 0;
                stack.push(next);
            }
        }
        const loopProb = level >= 6 ? 0.05 : 0.03;
        this.addLoops(loopProb);
    }
    addLoops(prob) {
        for (let y = 1; y < this.rows - 1; y++) {
            for (let x = 1; x < this.cols - 1; x++) {
                if (this.maze[y][x] === 1 && Math.random() < prob) {
                    let cnt = 0;
                    if (this.maze[y - 1][x] === 0)
                        cnt++;
                    if (this.maze[y + 1][x] === 0)
                        cnt++;
                    if (this.maze[y][x - 1] === 0)
                        cnt++;
                    if (this.maze[y][x + 1] === 0)
                        cnt++;
                    if (cnt === 1)
                        this.maze[y][x] = 0;
                }
            }
        }
    }
    /** 타일(prefab) 인스턴스화해서 오솔길/풀숲 이미지로 렌더링 */
    renderMaze() {
        this.container.removeAllChildren();
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const tile = cc.instantiate(this.tilePrefab);
                tile.parent = this.container;
                // → 꼭 이 두 줄을 추가하세요 ←
                tile.setContentSize(this.cellSize, this.cellSize);
                tile.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE;
                // 스프라이트 프레임
                const sp = tile.getComponent(cc.Sprite);
                sp.spriteFrame = this.maze[y][x] === 0
                    ? this.pathFrame
                    : this.grassFrame;
                // 위치
                tile.setPosition(x * this.cellSize + this.cellSize / 2, y * this.cellSize + this.cellSize / 2);
            }
        }
    }
    getStartPosition() { return { x: 1, y: 1 }; }
    getGoalPosition() { return { x: this.cols - 2, y: this.rows - 2 }; }
    isWalkable(cell) {
        if (cell.x < 0 || cell.x >= this.cols || cell.y < 0 || cell.y >= this.rows)
            return false;
        return this.maze[cell.y][cell.x] === 0;
    }
    getUnvisitedNeighbors(x, y) {
        const list = [];
        if (x - 2 >= 0 && this.maze[y][x - 2] === 1)
            list.push({ x: x - 2, y });
        if (x + 2 < this.cols && this.maze[y][x + 2] === 1)
            list.push({ x: x + 2, y });
        if (y - 2 >= 0 && this.maze[y - 2][x] === 1)
            list.push({ x, y: y - 2 });
        if (y + 2 < this.rows && this.maze[y + 2][x] === 1)
            list.push({ x, y: y + 2 });
        return list;
    }
};
__decorate([
    property(cc.Prefab)
], MazeLogic.prototype, "tilePrefab", void 0);
__decorate([
    property(cc.SpriteFrame)
], MazeLogic.prototype, "pathFrame", void 0);
__decorate([
    property(cc.SpriteFrame)
], MazeLogic.prototype, "grassFrame", void 0);
MazeLogic = __decorate([
    ccclass
], MazeLogic);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZUxvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRzVDLElBQXFCLFNBQVMsR0FBOUIsTUFBcUIsU0FBUztJQWM1QixZQUFZLElBQVksRUFBRSxJQUFZLEVBQUUsU0FBa0I7UUFiMUQsd0JBQXdCO1FBQ1EsZUFBVSxHQUFtQixJQUFJLENBQUM7UUFDbEMsY0FBUyxHQUFvQixJQUFJLENBQUM7UUFDbEMsZUFBVSxHQUFtQixJQUFJLENBQUM7UUFJMUQsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUc5QixZQUFZO1FBQ0wsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUczQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQWE7UUFDL0IsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxNQUFNLEtBQUssR0FBK0IsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLE9B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LENBQUMsS0FBSyxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUFuR2lDO0lBQS9CLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUE4QztBQUNsQztJQUEvQixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0Q0FBeUM7QUFDbEM7SUFBL0IsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQXlDO0FBSi9DLFNBQVM7SUFEN0IsT0FBTztHQUNhLFNBQVMsQ0FxRzdCO2tCQXJHb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXplTG9naWMge1xyXG4gIC8vIOyXkOuUlO2EsOyXkOyEnCDsl7DqsrDtlaAg7ZSE66as7Yy5ICYg7Iqk7ZSE65287J207Yq4XHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYikgICAgICAgICAgICB0aWxlUHJlZmFiOiBjYy5QcmVmYWIgICAgICA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSAgICAgICBwYXRoRnJhbWU6IGNjLlNwcml0ZUZyYW1lICA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSAgICAgICBncmFzc0ZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgcm93czogbnVtYmVyO1xyXG4gIHByaXZhdGUgY29sczogbnVtYmVyO1xyXG4gIHByaXZhdGUgbWF6ZTogbnVtYmVyW11bXSA9IFtdO1xyXG4gIHByaXZhdGUgY29udGFpbmVyOiBjYy5Ob2RlO1xyXG5cclxuICAvLyDshYAg7YGs6riwICjtlL3shYApXHJcbiAgcHVibGljIGNlbGxTaXplOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgY29uc3RydWN0b3Iocm93czogbnVtYmVyLCBjb2xzOiBudW1iZXIsIGNvbnRhaW5lcjogY2MuTm9kZSkge1xyXG4gICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgIHRoaXMuY29scyA9IGNvbHM7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZU1hemUobGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gKOq4sOyhtCBERlMgKyBhZGRMb29wcyDqt7jrjIDroZwpXHJcbiAgICB0aGlzLm1hemUgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLnJvd3MgfSwgKCkgPT4gQXJyYXkodGhpcy5jb2xzKS5maWxsKDEpKTtcclxuICAgIGNvbnN0IHN0YWNrOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgdGhpcy5tYXplWzFdWzFdID0gMDtcclxuICAgIHN0YWNrLnB1c2goeyB4OiAxLCB5OiAxIH0pO1xyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBjdXIgPSBzdGFjay5wb3AoKSE7XHJcbiAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuZ2V0VW52aXNpdGVkTmVpZ2hib3JzKGN1ci54LCBjdXIueSk7XHJcbiAgICAgIGlmIChuZWlnaGJvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgc3RhY2sucHVzaChjdXIpO1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSBuZWlnaGJvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmVpZ2hib3JzLmxlbmd0aCldO1xyXG4gICAgICAgIHRoaXMubWF6ZVtuZXh0LnldW25leHQueF0gPSAwO1xyXG4gICAgICAgIHRoaXMubWF6ZVsoY3VyLnkgKyBuZXh0LnkpIC8gMl1bKGN1ci54ICsgbmV4dC54KSAvIDJdID0gMDtcclxuICAgICAgICBzdGFjay5wdXNoKG5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb29wUHJvYiA9IGxldmVsID49IDYgPyAwLjA1IDogMC4wMztcclxuICAgIHRoaXMuYWRkTG9vcHMobG9vcFByb2IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRMb29wcyhwcm9iOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IHkgPSAxOyB5IDwgdGhpcy5yb3dzIC0gMTsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAxOyB4IDwgdGhpcy5jb2xzIC0gMTsgeCsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF6ZVt5XVt4XSA9PT0gMSAmJiBNYXRoLnJhbmRvbSgpIDwgcHJvYikge1xyXG4gICAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXplW3kgLSAxXVt4XSA9PT0gMCkgY250Kys7XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXplW3kgKyAxXVt4XSA9PT0gMCkgY250Kys7XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXplW3ldW3ggLSAxXSA9PT0gMCkgY250Kys7XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXplW3ldW3ggKyAxXSA9PT0gMCkgY250Kys7XHJcbiAgICAgICAgICBpZiAoY250ID09PSAxKSB0aGlzLm1hemVbeV1beF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIO2DgOydvChwcmVmYWIpIOyduOyKpO2EtOyKpO2ZlO2VtOyEnCDsmKTshpTquLgv7ZKA7IiyIOydtOuvuOyngOuhnCDroIzrjZTrp4EgKi9cclxuICBwdWJsaWMgcmVuZGVyTWF6ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzOyB4KyspIHtcclxuICAgICAgICBjb25zdCB0aWxlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUHJlZmFiKTtcclxuICAgICAgICB0aWxlLnBhcmVudCA9IHRoaXMuY29udGFpbmVyO1xyXG4gIFxyXG4gICAgICAgIC8vIOKGkiDqvK0g7J20IOuRkCDspITsnYQg7LaU6rCA7ZWY7IS47JqUIOKGkFxyXG4gICAgICAgIHRpbGUuc2V0Q29udGVudFNpemUodGhpcy5jZWxsU2l6ZSwgdGhpcy5jZWxsU2l6ZSk7XHJcbiAgICAgICAgdGlsZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSEudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNJTVBMRTtcclxuICBcclxuICAgICAgICAvLyDsiqTtlITrnbzsnbTtirgg7ZSE66CI7J6EXHJcbiAgICAgICAgY29uc3Qgc3AgPSB0aWxlLmdldENvbXBvbmVudChjYy5TcHJpdGUpITtcclxuICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHRoaXMubWF6ZVt5XVt4XSA9PT0gMFxyXG4gICAgICAgICAgPyB0aGlzLnBhdGhGcmFtZVxyXG4gICAgICAgICAgOiB0aGlzLmdyYXNzRnJhbWU7XHJcbiAgXHJcbiAgICAgICAgLy8g7JyE7LmYXHJcbiAgICAgICAgdGlsZS5zZXRQb3NpdGlvbihcclxuICAgICAgICAgIHggKiB0aGlzLmNlbGxTaXplICsgdGhpcy5jZWxsU2l6ZSAvIDIsXHJcbiAgICAgICAgICB5ICogdGhpcy5jZWxsU2l6ZSArIHRoaXMuY2VsbFNpemUgLyAyXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgcHVibGljIGdldFN0YXJ0UG9zaXRpb24oKSB7IHJldHVybiB7IHg6IDEsIHk6IDEgfTsgfVxyXG4gIHB1YmxpYyBnZXRHb2FsUG9zaXRpb24oKSAgeyByZXR1cm4geyB4OiB0aGlzLmNvbHMgLSAyLCB5OiB0aGlzLnJvd3MgLSAyIH07IH1cclxuXHJcbiAgcHVibGljIGlzV2Fsa2FibGUoY2VsbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoY2VsbC54IDwgMCB8fCBjZWxsLnggPj0gdGhpcy5jb2xzIHx8IGNlbGwueSA8IDAgfHwgY2VsbC55ID49IHRoaXMucm93cykgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMubWF6ZVtjZWxsLnldW2NlbGwueF0gPT09IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFVudmlzaXRlZE5laWdoYm9ycyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdIHtcclxuICAgIGNvbnN0IGxpc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdID0gW107XHJcbiAgICBpZiAoeCAtIDIgPj0gMCAmJiB0aGlzLm1hemVbeV1beCAtIDJdID09PSAxKSBsaXN0LnB1c2goeyB4OiB4IC0gMiwgeSB9KTtcclxuICAgIGlmICh4ICsgMiA8IHRoaXMuY29scyAmJiB0aGlzLm1hemVbeV1beCArIDJdID09PSAxKSBsaXN0LnB1c2goeyB4OiB4ICsgMiwgeSB9KTtcclxuICAgIGlmICh5IC0gMiA+PSAwICYmIHRoaXMubWF6ZVt5IC0gMl1beF0gPT09IDEpIGxpc3QucHVzaCh7IHgsIHk6IHkgLSAyIH0pO1xyXG4gICAgaWYgKHkgKyAyIDwgdGhpcy5yb3dzICYmIHRoaXMubWF6ZVt5ICsgMl1beF0gPT09IDEpIGxpc3QucHVzaCh7IHgsIHk6IHkgKyAyIH0pO1xyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5a9eAEZjtNuIymEkL0217h', 'Rottenacorn_acorn_manager');
// scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager.ts

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
var Rottenacorn_acorn_1 = require("./Rottenacorn_acorn");
var AcornManager = /** @class */ (function (_super) {
    __extends(AcornManager, _super);
    function AcornManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.acornPrefab = null;
        _this.acornParent = null;
        _this.pool = [];
        return _this;
    }
    AcornManager.prototype.onLoad = function () {
        this.initPool();
    };
    AcornManager.prototype.initPool = function () {
        for (var i = 0; i < 8; i++) {
            var acorn = cc.instantiate(this.acornPrefab);
            acorn.parent = this.acornParent;
            acorn.active = false;
            this.pool.push(acorn);
        }
    };
    AcornManager.prototype.getAcorn = function (isRotten) {
        for (var _i = 0, _a = this.pool; _i < _a.length; _i++) {
            var acorn = _a[_i];
            if (!acorn.active) {
                this.setupAcorn(acorn, isRotten);
                return acorn;
            }
        }
        return null;
    };
    AcornManager.prototype.setupAcorn = function (node, isRotten) {
        node.active = true;
        // activate() 호출로 물리 속도 + 벌레 처리
        var acornScript = node.getComponent(Rottenacorn_acorn_1.default);
        if (acornScript) {
            acornScript.activate(isRotten);
        }
        // 랜덤 위치 분산 배치
        var x = Math.random() * 400 - 200; // -200 ~ +200
        var y = Math.random() * 200 - 100; // -100 ~ +100
        node.setPosition(x, y);
    };
    AcornManager.prototype.resetAll = function () {
        for (var _i = 0, _a = this.pool; _i < _a.length; _i++) {
            var acorn = _a[_i];
            acorn.active = false;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], AcornManager.prototype, "acornPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], AcornManager.prototype, "acornParent", void 0);
    AcornManager = __decorate([
        ccclass
    ], AcornManager);
    return AcornManager;
}(cc.Component));
exports.default = AcornManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUm90dGVuYWNvcm5fc2NyaXB0c1xcUm90dGVuYWNvcm5fYWNvcm5fbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qyx5REFBdUM7QUFHdkM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFxREM7UUFsREcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFcEIsVUFBSSxHQUFjLEVBQUUsQ0FBQzs7SUE2Q2pDLENBQUM7SUEzQ0csNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxRQUFpQjtRQUN0QixLQUFrQixVQUFTLEVBQVQsS0FBQSxJQUFJLENBQUMsSUFBSSxFQUFULGNBQVMsRUFBVCxJQUFTLEVBQUU7WUFBeEIsSUFBSSxLQUFLLFNBQUE7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDakMsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsSUFBYSxFQUFFLFFBQWlCO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLCtCQUErQjtRQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDJCQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLFdBQVcsRUFBRTtZQUNiLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7UUFFRCxjQUFjO1FBQ2QsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBRSxjQUFjO1FBQ3BELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUUsY0FBYztRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLEtBQWtCLFVBQVMsRUFBVCxLQUFBLElBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVMsRUFBRTtZQUF4QixJQUFJLEtBQUssU0FBQTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQWpERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFOWCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBcURoQztJQUFELG1CQUFDO0NBckRELEFBcURDLENBckR5QyxFQUFFLENBQUMsU0FBUyxHQXFEckQ7a0JBckRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCBBY29ybiBmcm9tIFwiLi9Sb3R0ZW5hY29ybl9hY29yblwiXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY29ybk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBhY29yblByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFjb3JuUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBvb2w6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmluaXRQb29sKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBvb2woKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYWNvcm4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFjb3JuUHJlZmFiKTtcclxuICAgICAgICAgICAgYWNvcm4ucGFyZW50ID0gdGhpcy5hY29yblBhcmVudDtcclxuICAgICAgICAgICAgYWNvcm4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbC5wdXNoKGFjb3JuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNvcm4oaXNSb3R0ZW46IGJvb2xlYW4pOiBjYy5Ob2RlIHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChsZXQgYWNvcm4gb2YgdGhpcy5wb29sKSB7XHJcbiAgICAgICAgICAgIGlmICghYWNvcm4uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwQWNvcm4oYWNvcm4sIGlzUm90dGVuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY29ybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEFjb3JuKG5vZGU6IGNjLk5vZGUsIGlzUm90dGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBhY3RpdmF0ZSgpIO2YuOy2nOuhnCDrrLzrpqwg7IaN64+EICsg67KM66CIIOyymOumrFxyXG4gICAgICAgIGNvbnN0IGFjb3JuU2NyaXB0ID0gbm9kZS5nZXRDb21wb25lbnQoQWNvcm4pO1xyXG4gICAgICAgIGlmIChhY29yblNjcmlwdCkge1xyXG4gICAgICAgICAgICBhY29yblNjcmlwdC5hY3RpdmF0ZShpc1JvdHRlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDrnpzrjaQg7JyE7LmYIOu2hOyCsCDrsLDsuZhcclxuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIDQwMCAtIDIwMDsgIC8vIC0yMDAgfiArMjAwXHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiAyMDAgLSAxMDA7ICAvLyAtMTAwIH4gKzEwMFxyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgYWNvcm4gb2YgdGhpcy5wb29sKSB7XHJcbiAgICAgICAgICAgIGFjb3JuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f919fmA72VKiZRgvUwx00zD', 'Reversecorrect_Button');
// scripts/Song/Reversecorrect_scripts/Reversecorrect_Button.ts

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
var Reversecorrect_Game_logic_1 = require("./Reversecorrect_Game_logic");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameLogic = null;
        return _this;
    }
    Button.prototype.start = function () {
        var _this = this;
        this.node.children.forEach(function (child) {
            var btn = child.getComponent(cc.Button);
            if (btn) {
                btn.node.on('touchend', _this.ButtonClicked, _this);
            }
        });
    };
    Button.prototype.ButtonClicked = function (event) {
        var btnNode = event.target;
        var num = 0;
        switch (btnNode.name) {
            case "number1":
                num = 1;
                break;
            case "number2":
                num = 2;
                break;
            case "number3":
                num = 3;
                break;
            case "number4":
                num = 4;
                break;
            case "number5":
                num = 5;
                break;
            case "number6":
                num = 6;
                break;
            case "number7":
                num = 7;
                break;
            case "number8":
                num = 8;
                break;
            case "number9":
                num = 9;
                break;
        }
        Reversecorrect_Game_logic_1.default.player_label_arr.push(num);
        Reversecorrect_Game_logic_1.default.count++;
        if (this.gameLogic) {
            this.gameLogic.updateInputLabel();
            this.gameLogic.checkAnswer();
        }
    };
    __decorate([
        property(Reversecorrect_Game_logic_1.default)
    ], Button.prototype, "gameLogic", void 0);
    Button = __decorate([
        ccclass
    ], Button);
    return Button;
}(cc.Component));
exports.default = Button;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUmV2ZXJzZWNvcnJlY3Rfc2NyaXB0c1xcUmV2ZXJzZWNvcnJlY3RfQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFvRDtBQUM5QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQW9DQztRQWxDRyxlQUFTLEdBQWUsSUFBSSxDQUFDOztJQWtDakMsQ0FBQztJQWhDRyxzQkFBSyxHQUFMO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQzVCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLElBQUksR0FBRyxFQUFFO2dCQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxDQUFDO2FBQ3JEO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQWEsR0FBYixVQUFjLEtBQWU7UUFDekIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQWlCLENBQUM7UUFDeEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2xCLEtBQUssU0FBUztnQkFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDL0IsS0FBSyxTQUFTO2dCQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMvQixLQUFLLFNBQVM7Z0JBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQy9CLEtBQUssU0FBUztnQkFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDL0IsS0FBSyxTQUFTO2dCQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMvQixLQUFLLFNBQVM7Z0JBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQy9CLEtBQUssU0FBUztnQkFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDL0IsS0FBSyxTQUFTO2dCQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMvQixLQUFLLFNBQVM7Z0JBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFBQyxNQUFNO1NBQ2xDO1FBRUQsbUNBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsbUNBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLG1DQUFVLENBQUM7NkNBQ1E7SUFGWixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBb0MxQjtJQUFELGFBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ21DLEVBQUUsQ0FBQyxTQUFTLEdBb0MvQztrQkFwQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZV9sb2dpYyBmcm9tIFwiLi9SZXZlcnNlY29ycmVjdF9HYW1lX2xvZ2ljXCJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoR2FtZV9sb2dpYylcclxuICAgIGdhbWVMb2dpYzogR2FtZV9sb2dpYyA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG4gPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgaWYgKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgYnRuLm5vZGUub24oJ3RvdWNoZW5kJywgdGhpcy5CdXR0b25DbGlja2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEJ1dHRvbkNsaWNrZWQoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYnRuTm9kZSA9IGV2ZW50LnRhcmdldCBhcyBjYy5Ob2RlO1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgIHN3aXRjaCAoYnRuTm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJudW1iZXIxXCI6IG51bSA9IDE7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyMlwiOiBudW0gPSAyOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm51bWJlcjNcIjogbnVtID0gMzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJudW1iZXI0XCI6IG51bSA9IDQ7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyNVwiOiBudW0gPSA1OyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm51bWJlcjZcIjogbnVtID0gNjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJudW1iZXI3XCI6IG51bSA9IDc7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyOFwiOiBudW0gPSA4OyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm51bWJlcjlcIjogbnVtID0gOTsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHYW1lX2xvZ2ljLnBsYXllcl9sYWJlbF9hcnIucHVzaChudW0pO1xyXG4gICAgICAgIEdhbWVfbG9naWMuY291bnQrKztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUxvZ2ljKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxvZ2ljLnVwZGF0ZUlucHV0TGFiZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTG9naWMuY2hlY2tBbnN3ZXIoKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Yu/3Match/3MatchBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76cf13tGPlGmqE1XkPp95og', '3MatchBoard');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsa0RBQWdEO0FBQ2hELCtCQUEwQjtBQUcxQjtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQThSQztRQTdSd0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDckIsaUJBQVcsR0FBc0IsSUFBSSxDQUFDO1FBRTVELGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBRSxZQUFZO1FBQ25DLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFDdkIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUVsQixXQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3BCLGdCQUFVLEdBQVksS0FBSyxDQUFDOztJQXFSeEMsQ0FBQztJQW5SRCwrQkFBSyxHQUFMO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUUsa0JBQWtCO1FBQ3RELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFHRyxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLGFBQWEsR0FBRyxDQUFDLENB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O2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLEdBQVcsRUFBRSxHQUFXO1FBQ3BDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM3QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBRXJDLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQXpSb0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQThCO0lBQ3JCO1FBQTVCLFFBQVEsQ0FBQyx3QkFBaUIsQ0FBQzt3REFBdUM7SUFGbEQsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQThSbkM7SUFBRCxzQkFBQztDQTlSRCxBQThSQyxDQTlSNEMsRUFBRSxDQUFDLFNBQVMsR0E4UnhEO2tCQTlSb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBUaHJlZU1hdGNoTWFuYWdlciBmcm9tIFwiLi8zTWF0Y2hNYW5hZ2VyXCI7XHJcbmltcG9ydCBUaWxlIGZyb20gXCIuL1RpbGVcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTWF0Y2hCb2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSB0aWxlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFRocmVlTWF0Y2hNYW5hZ2VyKSBnYW1lTWFuYWdlcjogVGhyZWVNYXRjaE1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBib2FyZFNpemU6IG51bWJlciA9IDc7ICAvLyDtla3sg4EgOHg4IOqzoOyglVxyXG4gICAgcHJpdmF0ZSB0aWxlU2l6ZTogbnVtYmVyID0gMTAwO1xyXG4gICAgcHJpdmF0ZSBnYXA6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIHB1YmxpYyBib2FyZDogVGlsZVtdW10gPSBbXTtcclxuICAgIHByaXZhdGUgaXNTd2FwcGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuc3RhcnQoKSB7XHJcbiAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xyXG4gICAgdGhpcy5jcmVhdGVCb2FyZCgpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNoZWNrQW5kRXhwbG9kZU1hdGNoZXMoKTsgIC8vIOqyjOyehCDsi5zsnpEg7ZuEIOyyqyDrp6Tsua0g7YOQ7KeAXHJcbiAgICB9LCAwLjEpO1xyXG59XHJcblxyXG5cclxuICAgIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcclxuICAgICAgICBsZXQgdG90YWxUaWxlU2l6ZSA9IHRoaXMudGlsZVNpemUgKyB0aGlzLmdhcDtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLSh0aGlzLmJvYXJkU2l6ZSAtIDEpICogdG90YWxUaWxlU2l6ZSAvIDI7XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9ICh0aGlzLmJvYXJkU2l6ZSAtIDEpICogdG90YWxUaWxlU2l6ZSAvIDI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuYm9hcmRTaXplOyByb3crKykge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5ib2FyZFNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGlsZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpbGVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGlsZU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gc3RhcnRYICsgY29sICogdG90YWxUaWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NZID0gc3RhcnRZIC0gcm93ICogdG90YWxUaWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRpbGVOb2RlLnNldFBvc2l0aW9uKHBvc1gsIHBvc1kpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGlsZU5vZGUuZ2V0Q29tcG9uZW50KFRpbGUpO1xyXG4gICAgICAgICAgICAgICAgdGlsZS5yb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmNvbCA9IGNvbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxLiBiYW5uZWRDb2xvcnPrpbwgYmFubmVkSW5kaWNlc+uhnFxyXG4gICAgICAgICAgICAgICAgbGV0IGJhbm5lZEluZGljZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnQxID0gdGhpcy5ib2FyZFtyb3ddW2NvbCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0MiA9IHRoaXMuYm9hcmRbcm93XVtjb2wgLSAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGVmdDEgJiYgbGVmdDIgJiYgbGVmdDFbJ2ZydWl0SW5kZXgnXSA9PT0gbGVmdDJbJ2ZydWl0SW5kZXgnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5uZWRJbmRpY2VzLnB1c2gobGVmdDFbJ2ZydWl0SW5kZXgnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvcDEgPSB0aGlzLmJvYXJkW3JvdyAtIDFdW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvcDIgPSB0aGlzLmJvYXJkW3JvdyAtIDJdW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvcDEgJiYgdG9wMiAmJiB0b3AxWydmcnVpdEluZGV4J10gPT09IHRvcDJbJ2ZydWl0SW5kZXgnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5uZWRJbmRpY2VzLnB1c2godG9wMVsnZnJ1aXRJbmRleCddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMi4g656c642kIOqzvOydvCDshKTsoJVcclxuICAgICAgICAgICAgICAgIHRpbGUuc2V0UmFuZG9tRnJ1aXRFeGNsdWRpbmcoYmFubmVkSW5kaWNlcyk7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmFkZE91dGxpbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IHRpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xvcnNBcmVFcXVhbChjMTogY2MuQ29sb3IsIGMyOiBjYy5Db2xvcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjMS5yID09PSBjMi5yICYmIGMxLmcgPT09IGMyLmcgJiYgYzEuYiA9PT0gYzIuYjtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0FuZEV4cGxvZGVNYXRjaGVzKCkge1xyXG4gICAgICAgIGxldCBtYXRjaGVkVGlsZXM6IFRpbGVbXSA9IFtdO1xyXG4gICAgXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ib2FyZFNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuYm9hcmRTaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcclxuICAgICAgICAgICAgICAgIGlmICghdGlsZSkgY29udGludWU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIOqwgOuhnCDqsoDsgqxcclxuICAgICAgICAgICAgICAgIGlmIChjb2wgPD0gdGhpcy5ib2FyZFNpemUgLSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHQxID0gdGhpcy5ib2FyZFtyb3ddW2NvbCArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0MiA9IHRoaXMuYm9hcmRbcm93XVtjb2wgKyAyXTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOyDieyDgSDruYTqtZAg4oaSIOqzvOydvCDsnbjrjbHsiqQg67mE6rWQXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQxICYmIHQyICYmIHRpbGVbJ2ZydWl0SW5kZXgnXSA9PT0gdDFbJ2ZydWl0SW5kZXgnXSAmJiB0aWxlWydmcnVpdEluZGV4J10gPT09IHQyWydmcnVpdEluZGV4J10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFRpbGVzLnB1c2godGlsZSwgdDEsIHQyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyDshLjroZwg6rKA7IKsXHJcbiAgICAgICAgICAgICAgICBpZiAocm93IDw9IHRoaXMuYm9hcmRTaXplIC0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0MSA9IHRoaXMuYm9hcmRbcm93ICsgMV1bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdDIgPSB0aGlzLmJvYXJkW3JvdyArIDJdW2NvbF07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyDsg4nsg4Eg67mE6rWQIOKGkiDqs7zsnbwg7J24642x7IqkIOu5hOq1kFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0MSAmJiB0MiAmJiB0aWxlWydmcnVpdEluZGV4J10gPT09IHQxWydmcnVpdEluZGV4J10gJiYgdGlsZVsnZnJ1aXRJbmRleCddID09PSB0MlsnZnJ1aXRJbmRleCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRUaWxlcy5wdXNoKHRpbGUsIHQxLCB0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIG1hdGNoZWRUaWxlcyA9IEFycmF5LmZyb20obmV3IFNldChtYXRjaGVkVGlsZXMpKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChtYXRjaGVkVGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lTWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5hZGRNYXRjaFNjb3JlKG1hdGNoZWRUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBtYXRjaGVkVGlsZXMpIHtcclxuICAgICAgICAgICAgICAgIHRpbGUuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt0aWxlLnJvd11bdGlsZS5jb2xdID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEVtcHR5U3BhY2VzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bk5ld1RpbGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAqKuuLpOyLnCDrp6Tsua3snbQg7J287Ja064KgIOyImCDsnojsnLzrr4DroZwg7J6s6reAIO2YuOy2nCoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbmRFeHBsb2RlTWF0Y2hlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIO2PreuwnOuQnCDtg4DsnbzsnbQg7JeG7Jy866m0IOuLpOydjCDtlonrj5kg7JeG7J2MXHJcbiAgICAgICAgICAgIHRoaXMuaXNTd2FwcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHN3YXBUaWxlcyh0aWxlQTogVGlsZSwgdGlsZUI6IFRpbGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N3YXBwaW5nKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBsZXQgcm93RGlmZiA9IE1hdGguYWJzKHRpbGVBLnJvdyAtIHRpbGVCLnJvdyk7XHJcbiAgICAgICAgbGV0IGNvbERpZmYgPSBNYXRoLmFicyh0aWxlQS5jb2wgLSB0aWxlQi5jb2wpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKCEoKHJvd0RpZmYgPT09IDEgJiYgY29sRGlmZiA9PT0gMCkgfHwgKHJvd0RpZmYgPT09IDAgJiYgY29sRGlmZiA9PT0gMSkpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi7J247KCR7ZWcIO2DgOydvOydtCDslYTri5nri4jri6QhIOq1kO2ZmCDrtojqsIBcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB0aGlzLmlzU3dhcHBpbmcgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAgICAgLy8g67O065Oc7JeQ7IScIOq1kO2ZmFxyXG4gICAgICAgIGNvbnN0IHRlbXBSb3cgPSB0aWxlQS5yb3c7XHJcbiAgICAgICAgY29uc3QgdGVtcENvbCA9IHRpbGVBLmNvbDtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuYm9hcmRbdGlsZUEucm93XVt0aWxlQS5jb2xdID0gdGlsZUI7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt0aWxlQi5yb3ddW3RpbGVCLmNvbF0gPSB0aWxlQTtcclxuICAgIFxyXG4gICAgICAgIHRpbGVBLnJvdyA9IHRpbGVCLnJvdztcclxuICAgICAgICB0aWxlQS5jb2wgPSB0aWxlQi5jb2w7XHJcbiAgICAgICAgdGlsZUIucm93ID0gdGVtcFJvdztcclxuICAgICAgICB0aWxlQi5jb2wgPSB0ZW1wQ29sO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcG9zQSA9IHRoaXMuZ2V0VGlsZVBvc2l0aW9uKHRpbGVBLnJvdywgdGlsZUEuY29sKTtcclxuICAgICAgICBjb25zdCBwb3NCID0gdGhpcy5nZXRUaWxlUG9zaXRpb24odGlsZUIucm93LCB0aWxlQi5jb2wpO1xyXG4gICAgXHJcbiAgICAgICAgY2MudHdlZW4odGlsZUEubm9kZSkudG8oMC4yLCB7IHBvc2l0aW9uOiBwb3NBIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgY2MudHdlZW4odGlsZUIubm9kZSkudG8oMC4yLCB7IHBvc2l0aW9uOiBwb3NCIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDsnoTsi5zroZwg66ek7LmtIO2DkOyngFxyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkVGlsZXM6IFRpbGVbXSA9IFtdO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRldGVjdFRlbXBNYXRjaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuYm9hcmRTaXplOyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuYm9hcmRTaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGlsZSkgY29udGludWU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6rCA66GcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPD0gdGhpcy5ib2FyZFNpemUgLSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0MSA9IHRoaXMuYm9hcmRbcm93XVtjb2wgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQyID0gdGhpcy5ib2FyZFtyb3ddW2NvbCArIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQxICYmIHQyICYmIHRpbGVbJ2ZydWl0SW5kZXgnXSA9PT0gdDFbJ2ZydWl0SW5kZXgnXSAmJiB0aWxlWydmcnVpdEluZGV4J10gPT09IHQyWydmcnVpdEluZGV4J10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7IS466GcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cgPD0gdGhpcy5ib2FyZFNpemUgLSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0MSA9IHRoaXMuYm9hcmRbcm93ICsgMV1bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQyID0gdGhpcy5ib2FyZFtyb3cgKyAyXVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQxICYmIHQyICYmIHRpbGVbJ2ZydWl0SW5kZXgnXSA9PT0gdDFbJ2ZydWl0SW5kZXgnXSAmJiB0aWxlWydmcnVpdEluZGV4J10gPT09IHQyWydmcnVpdEluZGV4J10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChkZXRlY3RUZW1wTWF0Y2goKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FuZEV4cGxvZGVNYXRjaGVzKCk7ICAvLyDrp6Tsua3snbQg7J6I7Jy866m0IOqzhOyGjSDsp4TtlolcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOyXhuycvOuptCDrkJjrj4zrpqzquLBcclxuICAgICAgICAgICAgICAgIC8vIOychOy5mCwg67O065OcIOygleuztCDri6Tsi5wg6rWQ7ZmYXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3RpbGVBLnJvd11bdGlsZUEuY29sXSA9IHRpbGVCO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt0aWxlQi5yb3ddW3RpbGVCLmNvbF0gPSB0aWxlQTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcFJvdzIgPSB0aWxlQS5yb3c7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wQ29sMiA9IHRpbGVBLmNvbDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGlsZUEucm93ID0gdGlsZUIucm93O1xyXG4gICAgICAgICAgICAgICAgdGlsZUEuY29sID0gdGlsZUIuY29sO1xyXG4gICAgICAgICAgICAgICAgdGlsZUIucm93ID0gdGVtcFJvdzI7XHJcbiAgICAgICAgICAgICAgICB0aWxlQi5jb2wgPSB0ZW1wQ29sMjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzZXRQb3NBID0gdGhpcy5nZXRUaWxlUG9zaXRpb24odGlsZUEucm93LCB0aWxlQS5jb2wpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzZXRQb3NCID0gdGhpcy5nZXRUaWxlUG9zaXRpb24odGlsZUIucm93LCB0aWxlQi5jb2wpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aWxlQS5ub2RlKS50bygwLjIsIHsgcG9zaXRpb246IHJlc2V0UG9zQSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGlsZUIubm9kZSkudG8oMC4yLCB7IHBvc2l0aW9uOiByZXNldFBvc0IgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N3YXBwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGZpbGxFbXB0eVNwYWNlcygpIHtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmJvYXJkU2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gdGhpcy5ib2FyZFNpemUgLSAxOyByb3cgPj0gMDsgcm93LS0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtyb3ddW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1cHBlclJvdyA9IHJvdyAtIDE7IHVwcGVyUm93ID49IDA7IHVwcGVyUm93LS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbdXBwZXJSb3ddW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxpbmdUaWxlID0gdGhpcy5ib2FyZFt1cHBlclJvd11bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gZmFsbGluZ1RpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3VwcGVyUm93XVtjb2xdID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxsaW5nVGlsZS5yb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxsaW5nVGlsZS5jb2wgPSBjb2w7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy5nZXRUaWxlUG9zaXRpb24ocm93LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZmFsbGluZ1RpbGUubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduTmV3VGlsZXMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ib2FyZFNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuYm9hcmRTaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW3Jvd11bY29sXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0VGlsZVBvc2l0aW9uKHJvdywgY29sKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZU5vZGUuZ2V0Q29tcG9uZW50KFRpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUucm93ID0gcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY29sID0gY29sO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aWxlLnNldFJhbmRvbUZydWl0KCk7ICAvLyDsnbTsoITsnZggc2V0UmFuZG9tQ29sb3IoKeyXkOyEnCDqtZDssrRcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmFkZE91dGxpbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSB0aWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbGVQb3NpdGlvbihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBjYy5WZWMzIHtcclxuICAgICAgICBsZXQgdG90YWxUaWxlU2l6ZSA9IHRoaXMudGlsZVNpemUgKyB0aGlzLmdhcDtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLSh0aGlzLmJvYXJkU2l6ZSAtIDEpICogdG90YWxUaWxlU2l6ZSAvIDI7XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9ICh0aGlzLmJvYXJkU2l6ZSAtIDEpICogdG90YWxUaWxlU2l6ZSAvIDI7XHJcblxyXG4gICAgICAgIGxldCB4ID0gc3RhcnRYICsgY29sICogdG90YWxUaWxlU2l6ZTtcclxuICAgICAgICBsZXQgeSA9IHN0YXJ0WSAtIHJvdyAqIHRvdGFsVGlsZVNpemU7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMyh4LCB5LCAwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d79f0nZ65IBbE0bW75SBoI', 'Rottenacorn_game_logic');
// scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic.ts

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
var Rottenacorn_acorn_manager_1 = require("./Rottenacorn_acorn_manager");
var Rottenacorn_acorn_1 = require("./Rottenacorn_acorn");
var RottenacornGameLogic = /** @class */ (function (_super) {
    __extends(RottenacornGameLogic, _super);
    function RottenacornGameLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.acornManager = null;
        _this.frontbutton = null;
        _this.backbutton = null;
        _this.chocicebutton = null;
        _this.timerLabel = null;
        _this.scoreLabel = null;
        _this.timeLimit = 60;
        _this.remainingTime = 0;
        _this.isGameOver = false;
        _this.score = 0;
        _this.normalCount = 2;
        _this.rottenCount = 1;
        _this.correctStreak = 0;
        _this.currentAcorns = [];
        _this.selectedIndex = 0;
        _this.rottenIndices = [];
        _this.selectedIndices = new Set();
        return _this;
    }
    RottenacornGameLogic.prototype.onLoad = function () {
        var _a, _b, _c;
        (_a = this.frontbutton) === null || _a === void 0 ? void 0 : _a.on(cc.Node.EventType.TOUCH_END, this.onNext, this);
        (_b = this.backbutton) === null || _b === void 0 ? void 0 : _b.on(cc.Node.EventType.TOUCH_END, this.onPrev, this);
        (_c = this.chocicebutton) === null || _c === void 0 ? void 0 : _c.on(cc.Node.EventType.TOUCH_END, this.onConfirm, this);
    };
    RottenacornGameLogic.prototype.start = function () {
        this.remainingTime = this.timeLimit;
        this.isGameOver = false;
        this.score = 0;
        this.updateScoreLabel();
        this.startRound();
    };
    RottenacornGameLogic.prototype.update = function (dt) {
        if (this.isGameOver)
            return;
        this.remainingTime -= dt;
        if (this.remainingTime <= 0) {
            this.remainingTime = 0;
            this.endGame();
        }
        this.timerLabel.string = "\uB0A8\uC740 \uC2DC\uAC04: " + Math.ceil(this.remainingTime) + "\uCD08";
    };
    RottenacornGameLogic.prototype.updateScoreLabel = function () {
        this.scoreLabel.string = "\uC810\uC218: " + this.score;
    };
    RottenacornGameLogic.prototype.startRound = function () {
        this.acornManager.resetAll();
        var total = this.normalCount + this.rottenCount;
        this.rottenIndices = this.pickRandomIndices(total, this.rottenCount);
        this.selectedIndices.clear();
        this.currentAcorns = [];
        for (var i = 0; i < total; i++) {
            var isRotten = this.rottenIndices.includes(i);
            var acorn = this.acornManager.getAcorn(isRotten);
            if (acorn) {
                var x = -((total - 1) * 60) + i * 120;
                var y = 100;
                acorn.setPosition(x, y);
                this.currentAcorns.push(acorn);
            }
        }
        this.selectedIndex = 0;
        this.updateSelectionVisual();
    };
    RottenacornGameLogic.prototype.updateSelectionVisual = function () {
        for (var i = 0; i < this.currentAcorns.length; i++) {
            var acorn = this.currentAcorns[i];
            var sprite = acorn.getComponent(cc.Sprite);
            if (sprite) {
                sprite.setState(i === this.selectedIndex ? cc.Sprite.State.GRAY : cc.Sprite.State.NORMAL);
                acorn.color = (i === this.selectedIndex) ? cc.Color.YELLOW : cc.Color.WHITE;
            }
        }
    };
    RottenacornGameLogic.prototype.onNext = function () {
        if (this.currentAcorns.length === 0)
            return;
        var nextIndex = this.selectedIndex;
        var total = this.currentAcorns.length;
        do {
            nextIndex = (nextIndex + 1) % total;
        } while (this.selectedIndices.has(nextIndex) && nextIndex !== this.selectedIndex);
        this.selectedIndex = nextIndex;
        this.updateSelectionVisual();
    };
    RottenacornGameLogic.prototype.onPrev = function () {
        if (this.currentAcorns.length === 0)
            return;
        var prevIndex = this.selectedIndex;
        var total = this.currentAcorns.length;
        do {
            prevIndex = (prevIndex - 1 + total) % total;
        } while (this.selectedIndices.has(prevIndex) && prevIndex !== this.selectedIndex);
        this.selectedIndex = prevIndex;
        this.updateSelectionVisual();
    };
    RottenacornGameLogic.prototype.onConfirm = function () {
        var _this = this;
        if (this.currentAcorns.length === 0 || this.isGameOver)
            return;
        var index = this.selectedIndex;
        if (this.selectedIndices.has(index)) {
            return;
        }
        this.selectedIndices.add(index);
        var isCorrect = this.rottenIndices.includes(index);
        var selected = this.currentAcorns[index];
        var acornScript = selected.getComponent(Rottenacorn_acorn_1.default);
        if (isCorrect) {
            // 점수 추가
            this.score++;
            this.updateScoreLabel();
            // 벌레 보이기 유지
            if (acornScript === null || acornScript === void 0 ? void 0 : acornScript.bugNode) {
                acornScript.unscheduleAllCallbacks();
                acornScript.bugNode.active = true;
            }
        }
        else {
            this.scheduleOnce(function () {
                _this.startRound();
            }, 1);
            return;
        }
        if (this.selectedIndices.size === this.rottenIndices.length) {
            this.scheduleOnce(function () {
                _this.handleCorrectAnswer();
            }, 1);
        }
    };
    RottenacornGameLogic.prototype.handleCorrectAnswer = function () {
        this.correctStreak++;
        if (this.correctStreak >= 2 && this.normalCount < 4) {
            this.normalCount++;
            this.correctStreak = 0;
        }
        else {
            if (this.rottenCount < this.normalCount && this.rottenCount < 4) {
                this.rottenCount++;
            }
        }
        this.startRound();
    };
    RottenacornGameLogic.prototype.endGame = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        this.frontbutton.active = false;
        this.backbutton.active = false;
        this.chocicebutton.active = false;
        this.currentAcorns = [];
    };
    RottenacornGameLogic.prototype.pickRandomIndices = function (total, count) {
        var _a;
        var indices = Array.from(Array(total).keys());
        for (var i = indices.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [indices[j], indices[i]], indices[i] = _a[0], indices[j] = _a[1];
        }
        return indices.slice(0, count);
    };
    __decorate([
        property(Rottenacorn_acorn_manager_1.default)
    ], RottenacornGameLogic.prototype, "acornManager", void 0);
    __decorate([
        property(cc.Node)
    ], RottenacornGameLogic.prototype, "frontbutton", void 0);
    __decorate([
        property(cc.Node)
    ], RottenacornGameLogic.prototype, "backbutton", void 0);
    __decorate([
        property(cc.Node)
    ], RottenacornGameLogic.prototype, "chocicebutton", void 0);
    __decorate([
        property(cc.Label)
    ], RottenacornGameLogic.prototype, "timerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], RottenacornGameLogic.prototype, "scoreLabel", void 0);
    __decorate([
        property
    ], RottenacornGameLogic.prototype, "timeLimit", void 0);
    RottenacornGameLogic = __decorate([
        ccclass
    ], RottenacornGameLogic);
    return RottenacornGameLogic;
}(cc.Component));
exports.default = RottenacornGameLogic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUm90dGVuYWNvcm5fc2NyaXB0c1xcUm90dGVuYWNvcm5fZ2FtZV9sb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qyx5RUFBdUQ7QUFDdkQseURBQXVDO0FBR3ZDO0lBQWtELHdDQUFZO0lBQTlEO1FBQUEscUVBMk1DO1FBeE1HLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBRWYsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUM5QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixxQkFBZSxHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDOztJQXdLckQsQ0FBQztJQXRLRyxxQ0FBTSxHQUFOOztRQUNJLE1BQUEsSUFBSSxDQUFDLFdBQVcsMENBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtRQUNy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O0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NERBQ1M7SUFHNUI7UUFEQyxRQUFROzJEQUNjO0lBckJOLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBMk14QztJQUFELDJCQUFDO0NBM01ELEFBMk1DLENBM01pRCxFQUFFLENBQUMsU0FBUyxHQTJNN0Q7a0JBM01vQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0IEFjb3JuTWFuYWdlciBmcm9tIFwiLi9Sb3R0ZW5hY29ybl9hY29ybl9tYW5hZ2VyXCI7XHJcbmltcG9ydCBBY29ybiBmcm9tIFwiLi9Sb3R0ZW5hY29ybl9hY29yblwiXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3R0ZW5hY29ybkdhbWVMb2dpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEFjb3JuTWFuYWdlcilcclxuICAgIGFjb3JuTWFuYWdlcjogQWNvcm5NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZyb250YnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tidXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hvY2ljZWJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRpbWVMaW1pdDogbnVtYmVyID0gNjA7XHJcblxyXG4gICAgcHJpdmF0ZSByZW1haW5pbmdUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpc0dhbWVPdmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgbm9ybWFsQ291bnQ6IG51bWJlciA9IDI7XHJcbiAgICBwcml2YXRlIHJvdHRlbkNvdW50OiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBjb3JyZWN0U3RyZWFrOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudEFjb3JuczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSByb3R0ZW5JbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEluZGljZXM6IFNldDxudW1iZXI+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmZyb250YnV0dG9uPy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25OZXh0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJhY2tidXR0b24/Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblByZXYsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hvY2ljZWJ1dHRvbj8ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ29uZmlybSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdUaW1lID0gdGhpcy50aW1lTGltaXQ7XHJcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZUxhYmVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRSb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUgLT0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nVGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtYWluaW5nVGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGDrgqjsnYAg7Iuc6rCEOiAke01hdGguY2VpbCh0aGlzLnJlbWFpbmluZ1RpbWUpfey0iGA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2NvcmVMYWJlbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYOygkOyImDogJHt0aGlzLnNjb3JlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRSb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjb3JuTWFuYWdlci5yZXNldEFsbCgpO1xyXG5cclxuICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMubm9ybWFsQ291bnQgKyB0aGlzLnJvdHRlbkNvdW50O1xyXG4gICAgICAgIHRoaXMucm90dGVuSW5kaWNlcyA9IHRoaXMucGlja1JhbmRvbUluZGljZXModG90YWwsIHRoaXMucm90dGVuQ291bnQpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRpY2VzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEFjb3JucyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXNSb3R0ZW4gPSB0aGlzLnJvdHRlbkluZGljZXMuaW5jbHVkZXMoaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjb3JuID0gdGhpcy5hY29ybk1hbmFnZXIuZ2V0QWNvcm4oaXNSb3R0ZW4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFjb3JuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gLSgodG90YWwgLSAxKSAqIDYwKSArIGkgKiAxMjA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgYWNvcm4uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY29ybnMucHVzaChhY29ybik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb25WaXN1YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTZWxlY3Rpb25WaXN1YWwoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRBY29ybnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYWNvcm4gPSB0aGlzLmN1cnJlbnRBY29ybnNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IGFjb3JuLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc2V0U3RhdGUoaSA9PT0gdGhpcy5zZWxlY3RlZEluZGV4ID8gY2MuU3ByaXRlLlN0YXRlLkdSQVkgOiBjYy5TcHJpdGUuU3RhdGUuTk9STUFMKTtcclxuICAgICAgICAgICAgICAgIGFjb3JuLmNvbG9yID0gKGkgPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkgPyBjYy5Db2xvci5ZRUxMT1cgOiBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk5leHQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjb3Jucy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMuY3VycmVudEFjb3Jucy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gKG5leHRJbmRleCArIDEpICUgdG90YWw7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5zZWxlY3RlZEluZGljZXMuaGFzKG5leHRJbmRleCkgJiYgbmV4dEluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb25WaXN1YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblByZXYoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjb3Jucy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHByZXZJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMuY3VycmVudEFjb3Jucy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgcHJldkluZGV4ID0gKHByZXZJbmRleCAtIDEgKyB0b3RhbCkgJSB0b3RhbDtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLnNlbGVjdGVkSW5kaWNlcy5oYXMocHJldkluZGV4KSAmJiBwcmV2SW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHByZXZJbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvblZpc3VhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QWNvcm5zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRpY2VzLmhhcyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGljZXMuYWRkKGluZGV4KTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNDb3JyZWN0ID0gdGhpcy5yb3R0ZW5JbmRpY2VzLmluY2x1ZGVzKGluZGV4KTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuY3VycmVudEFjb3Juc1tpbmRleF07XHJcbiAgICAgICAgY29uc3QgYWNvcm5TY3JpcHQgPSBzZWxlY3RlZC5nZXRDb21wb25lbnQoQWNvcm4pO1xyXG5cclxuICAgICAgICBpZiAoaXNDb3JyZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIOygkOyImCDstpTqsIBcclxuICAgICAgICAgICAgdGhpcy5zY29yZSsrO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlTGFiZWwoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOuyjOugiCDrs7TsnbTquLAg7Jyg7KeAXHJcbiAgICAgICAgICAgIGlmIChhY29yblNjcmlwdD8uYnVnTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgYWNvcm5TY3JpcHQudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgYWNvcm5TY3JpcHQuYnVnTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJvdW5kKCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGljZXMuc2l6ZSA9PT0gdGhpcy5yb3R0ZW5JbmRpY2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNvcnJlY3RBbnN3ZXIoKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNvcnJlY3RBbnN3ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0U3RyZWFrKys7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3RTdHJlYWsgPj0gMiAmJiB0aGlzLm5vcm1hbENvdW50IDwgNCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbENvdW50Kys7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0cmVhayA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm90dGVuQ291bnQgPCB0aGlzLm5vcm1hbENvdW50ICYmIHRoaXMucm90dGVuQ291bnQgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdHRlbkNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRSb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZEdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mcm9udGJ1dHRvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJhY2tidXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9jaWNlYnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRBY29ybnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwaWNrUmFuZG9tSW5kaWNlcyh0b3RhbDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBBcnJheS5mcm9tKEFycmF5KHRvdGFsKS5rZXlzKCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRpY2VzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgICAgICBbaW5kaWNlc1tpXSwgaW5kaWNlc1tqXV0gPSBbaW5kaWNlc1tqXSwgaW5kaWNlc1tpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbmRpY2VzLnNsaWNlKDAsIGNvdW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/SingleGameList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd26b1kYbyNKyKnGcPX9gaYS', 'SingleGameList');
// scripts/Controller/SingleGameList.ts

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
var MainController = /** @class */ (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainController.prototype.loadMoleGame = function () {
        console.log("두더지 게임으로 이동");
        cc.director.loadScene('MoleGameScene');
    };
    MainController.prototype.loadThreeMatchGame = function () {
        console.log("쓰리매치 게임으로 이동");
        cc.director.loadScene('3M_GameScene');
    };
    MainController.prototype.loadBlockCountGame = function () {
        console.log("블록 개수 세기 게임으로 이동");
        var result = cc.director.loadScene('BlockCountGameScene');
        console.log("씬 로드 결과:", result);
    };
    MainController.prototype.loadRememberGame = function () {
        console.log("기억력 게임으로 이동");
        cc.director.loadScene('RememberGameScene');
    };
    MainController.prototype.loadMazeGame = function () {
        console.log("미로찾기 게임으로 이동");
        cc.director.loadScene('StartMazeScene');
    };
    MainController.prototype.loadReverseCorrectGame = function () {
        console.log("숫자 거꾸로 맞추기 게임으로 이동");
        cc.director.loadScene('Reversecorrect_mainscene');
    };
    MainController.prototype.loadRottenacornGame = function () {
        console.log("도토리리 게임으로 이동");
        cc.director.loadScene('Rottenacorn_mainscene');
    };
    MainController = __decorate([
        ccclass
    ], MainController);
    return MainController;
}(cc.Component));
exports.default = MainController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcU2luZ2xlR2FtZUxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBMkRBLENBQUM7SUF6REcscUNBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdELHFDQUFZLEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELCtDQUFzQixHQUF0QjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXJDZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTJEbEM7SUFBRCxxQkFBQztDQTNERCxBQTJEQyxDQTNEMkMsRUFBRSxDQUFDLFNBQVMsR0EyRHZEO2tCQTNEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBsb2FkTW9sZUdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi65GQ642U7KeAIOqyjOyehOycvOuhnCDsnbTrj5lcIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTW9sZUdhbWVTY2VuZScpO1xuICAgIH1cbiAgICBcbiAgICBsb2FkVGhyZWVNYXRjaEdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7JOw66as66ek7LmYIOqyjOyehOycvOuhnCDsnbTrj5lcIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnM01fR2FtZVNjZW5lJyk7XG4gICAgfVxuXG4gICAgbG9hZEJsb2NrQ291bnRHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuu4lOuhnSDqsJzsiJgg7IS46riwIOqyjOyehOycvOuhnCDsnbTrj5lcIik7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnQmxvY2tDb3VudEdhbWVTY2VuZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuyUrCDroZzrk5wg6rKw6rO8OlwiLCByZXN1bHQpO1xuICAgIH1cblxuICAgIGxvYWRSZW1lbWJlckdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6riw7Ja166ClIOqyjOyehOycvOuhnCDsnbTrj5lcIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUmVtZW1iZXJHYW1lU2NlbmUnKTtcbiAgICB9XG5cbiAgICBcbiAgICBsb2FkTWF6ZUdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi66+466Gc7LC+6riwIOqyjOyehOycvOuhnCDsnbTrj5lcIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU3RhcnRNYXplU2NlbmUnKTtcbiAgICB9XG4gICAgXG4gICAgbG9hZFJldmVyc2VDb3JyZWN0R2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLsiKvsnpAg6rGw6r6466GcIOunnuy2lOq4sCDqsozsnoTsnLzroZwg7J2064+ZXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1JldmVyc2Vjb3JyZWN0X21haW5zY2VuZScpO1xuICAgIH1cblxuICAgIGxvYWRSb3R0ZW5hY29ybkdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi64+E7Yag66as66asIOqyjOyehOycvOuhnCDsnbTrj5lcIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUm90dGVuYWNvcm5fbWFpbnNjZW5lJyk7XG4gICAgfVxuICAgIFxuIC8vIOy2lO2bhCDsi6TsoJwg7JSs7J2066aEIOy2lOqwgCAsIOy9lOy9lOyKpCDrgrQg67mM65Oc7YyM7J287JeQ64+EIOy2lOqwgFxuICAgIC8vIGxvYWRHYW1lMygpIHtcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lM1NjZW5lJyk7ICBcbiAgICAvLyB9XG5cbiAgICAvLyBsb2FkR2FtZTQoKSB7XG4gICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZTRTY2VuZScpO1xuICAgIC8vIH1cblxuICAgIC8vIGxvYWRHYW1lNSgpIHtcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lNVNjZW5lJyk7XG4gICAgLy8gfVxuXG4gICAgLy8gbG9hZEdhbWU2KCkge1xuICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWU2U2NlbmUnKTtcbiAgICAvLyB9XG5cbiAgICAvLyBsb2FkR2FtZTcoKSB7XG4gICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZTdTY2VuZScpO1xuICAgIC8vIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51d5eam6QRMlYtW5l10P8xH', 'Rottenacorn_game_init');
// scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init.ts

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
var GameInit = /** @class */ (function (_super) {
    __extends(GameInit, _super);
    function GameInit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.acornPrefab = null;
        // 리스트 돌아가기 버튼
        _this.exitButton = null;
        return _this;
    }
    GameInit.prototype.onLoad = function () {
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, 0);
        // manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
    };
    GameInit.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
    };
    __decorate([
        property(cc.Prefab)
    ], GameInit.prototype, "acornPrefab", void 0);
    __decorate([
        property(cc.Button)
    ], GameInit.prototype, "exitButton", void 0);
    GameInit = __decorate([
        ccclass
    ], GameInit);
    return GameInit;
}(cc.Component));
exports.default = GameInit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUm90dGVuYWNvcm5fc2NyaXB0c1xcUm90dGVuYWNvcm5fZ2FtZV9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUJDO1FBcEJHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGNBQWM7UUFFZCxnQkFBVSxHQUFjLElBQUksQ0FBQzs7SUFnQmpDLENBQUM7SUFkRyx5QkFBTSxHQUFOO1FBQ0ksSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsa0VBQWtFO0lBQ3RFLENBQUM7SUFHRCwyQkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWpCSDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBSTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFQWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUI1QjtJQUFELGVBQUM7Q0F2QkQsQUF1QkMsQ0F2QnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUJqRDtrQkF2Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUluaXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBhY29yblByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyDrpqzsiqTtirgg64+M7JWE6rCA6riwIOuyhO2KvFxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGV4aXRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5ncmF2aXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgLy8gbWFuYWdlci5kZWJ1Z0RyYXdGbGFncyA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBsb2FkTGlzdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7Iux6riAIOqyjOyehCDrpqzsiqTtirjroZwg64+M7JWE6rCA6riwXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU2luZ2xlR2FtZUxpc3QnKTtcclxuICAgICAgfVxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4754JUFndJMpLQkeWjjUsc', 'Reversecorrect_Game_init');
// scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init.ts

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
var Reversecorrect_Show_QnA_1 = require("./Reversecorrect_Show_QnA");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game_init = /** @class */ (function (_super) {
    __extends(Game_init, _super);
    function Game_init() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timer_label = null;
        _this.score_label = null;
        _this.qna = null;
        // 리스트 돌아가기 버튼
        _this.exitButton = null;
        _this.currentTime = 120;
        _this.score = 0;
        return _this;
    }
    Game_init_1 = Game_init;
    Game_init.prototype.onLoad = function () {
        Game_init_1.instance = this;
        this.schedule(this.updateTimer, 1);
    };
    Game_init.prototype.start = function () {
        this.updateTimer();
    };
    Game_init.prototype.updateTimer = function () {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            Reversecorrect_Show_QnA_1.default.isGameOver = true;
            this.qna.setButtonsInteractable(false);
        }
        this.timer_label.string = "" + this.currentTime;
    };
    Game_init.prototype.addScore = function (value) {
        this.score += value;
        this.score_label.string = "" + this.score;
    };
    Game_init.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene('SingleGameList');
    };
    var Game_init_1;
    Game_init.instance = null;
    __decorate([
        property(cc.Label)
    ], Game_init.prototype, "timer_label", void 0);
    __decorate([
        property(cc.Label)
    ], Game_init.prototype, "score_label", void 0);
    __decorate([
        property(Reversecorrect_Show_QnA_1.default)
    ], Game_init.prototype, "qna", void 0);
    __decorate([
        property(cc.Button)
    ], Game_init.prototype, "exitButton", void 0);
    Game_init = Game_init_1 = __decorate([
        ccclass
    ], Game_init);
    return Game_init;
}(cc.Component));
exports.default = Game_init;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUmV2ZXJzZWNvcnJlY3Rfc2NyaXB0c1xcUmV2ZXJzZWNvcnJlY3RfR2FtZV9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRDtBQUMxQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTJDQztRQXpDRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBRXJCLGNBQWM7UUFFZCxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUVyQixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQThCOUIsQ0FBQztrQkEzQ29CLFNBQVM7SUFnQjFCLDBCQUFNLEdBQU47UUFDSSxXQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELCtCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsQyxpQ0FBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUcsSUFBSSxDQUFDLFdBQWEsQ0FBQztJQUNwRCxDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUcsSUFBSSxDQUFDLEtBQU8sQ0FBQztJQUM5QyxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0lBNUJJLGtCQUFRLEdBQWMsSUFBSSxDQUFDO0lBWmxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDVTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxpQ0FBUSxDQUFDOzBDQUNFO0lBSXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1M7SUFWWixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMkM3QjtJQUFELGdCQUFDO0NBM0NELEFBMkNDLENBM0NzQyxFQUFFLENBQUMsU0FBUyxHQTJDbEQ7a0JBM0NvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3dfUW5BIGZyb20gXCIuL1JldmVyc2Vjb3JyZWN0X1Nob3dfUW5BXCJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVfaW5pdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lcl9sYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVfbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzaG93X1FuQSlcclxuICAgIHFuYTogc2hvd19RbkEgPSBudWxsO1xyXG5cclxuICAgIC8vIOumrOyKpO2KuCDrj4zslYTqsIDquLAg67KE7Yq8XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgZXhpdEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAxMjA7XHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGluc3RhbmNlOiBHYW1lX2luaXQgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIEdhbWVfaW5pdC5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLDEpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUtLTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lcik7XHJcbiAgICAgICAgICAgIHNob3dfUW5BLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnFuYS5zZXRCdXR0b25zSW50ZXJhY3RhYmxlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lcl9sYWJlbC5zdHJpbmcgPSBgJHt0aGlzLmN1cnJlbnRUaW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNjb3JlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2NvcmVfbGFiZWwuc3RyaW5nID0gYCR7dGhpcy5zY29yZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMaXN0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsi7HquIAg6rKM7J6EIOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLBcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTaW5nbGVHYW1lTGlzdCcpO1xyXG4gICAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Yu/3Match/3MatchManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c77b4qzzIZMtIiyJOm/OGM6', '3MatchManager');
// scripts/Yu/3Match/3MatchManager.ts

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
var ThreeMatchManager = /** @class */ (function (_super) {
    __extends(ThreeMatchManager, _super);
    function ThreeMatchManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timerLabel = null;
        _this.scoreLabel = null;
        _this.boardNode = null;
        _this.comboGauge = null;
        _this.feverLabel = null;
        _this.exitButton = null;
        _this.totalTime = 120;
        _this.currentTime = 120;
        _this.score = 0;
        _this.comboValue = 0;
        _this.comboMax = 300;
        _this.isFeverTime = false;
        return _this;
    }
    ThreeMatchManager.prototype.onLoad = function () {
        this.schedule(this.updateTimer, 1);
        this.updateScore(0);
        // 콤보 게이지 관련 초기화
        this.comboValue = 0;
        this.comboMax = 200; // 혹은 필요에 따라 값 설정
        this.comboGauge.progress = 0;
        // 피버타임 UI 초기화
        this.isFeverTime = false;
        this.feverLabel.active = false;
        // const label = this.feverLabel.getComponent(cc.Label);
        // label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        // label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        // label.overflow = cc.Label.Overflow.SHRINK;  // 너무 길면 축소
    };
    ThreeMatchManager.prototype.updateTimer = function () {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            this.onGameOver();
        }
        this.timerLabel.string = "\uC2DC\uAC04: " + this.currentTime;
    };
    ThreeMatchManager.prototype.updateScore = function (amount) {
        this.score += amount;
        this.scoreLabel.string = "" + this.score;
        // 점수 획득시 콤보게이지 추가 메서드 실행    
        this.increaseComboGauge(amount);
    };
    ThreeMatchManager.prototype.addMatchScore = function (matchCount) {
        var scoreToAdd = matchCount * 10; // 피버 아닐 때 점수 추가
        // 피버타임이면 점수 2배로 설정
        var finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
        this.updateScore(finalScore);
    };
    ThreeMatchManager.prototype.increaseComboGauge = function (amount) {
        if (this.isFeverTime)
            return; // 피버타임중엔 게이지 안올라감감
        this.comboValue += amount;
        if (this.comboValue >= this.comboMax) {
            this.comboValue = this.comboMax;
            this.startFeverTime(); // 현재 게이지 값이 맥스값보다 크거나 같아지면 피버타임 메서드 실행
        }
        this.comboGauge.progress = this.comboValue / this.comboMax; // ui실행
    };
    ThreeMatchManager.prototype.startFeverTime = function () {
        var _this = this;
        this.isFeverTime = true;
        this.feverLabel.active = true; // 피버 UI 보여주기
        // 10초 후 종료
        this.scheduleOnce(function () {
            _this.endFeverTime();
        }, 10);
    };
    ThreeMatchManager.prototype.endFeverTime = function () {
        this.isFeverTime = false; // 피버타임 상태 false로
        this.comboValue = 0; // 현재 콤보 밸류, ui 초기화
        this.comboGauge.progress = 0;
        this.feverLabel.active = false; // 피버 UI 숨기기
    };
    ThreeMatchManager.prototype.onGameOver = function () {
        cc.log("게임 종료!");
        // 이후 게임 종료 처리 추가 가능
    };
    ThreeMatchManager.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기기");
        cc.director.loadScene('SingleGameList');
    };
    __decorate([
        property(cc.Label)
    ], ThreeMatchManager.prototype, "timerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], ThreeMatchManager.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeMatchManager.prototype, "boardNode", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ThreeMatchManager.prototype, "comboGauge", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeMatchManager.prototype, "feverLabel", void 0);
    __decorate([
        property(cc.Button)
    ], ThreeMatchManager.prototype, "exitButton", void 0);
    ThreeMatchManager = __decorate([
        ccclass
    ], ThreeMatchManager);
    return ThreeMatchManager;
}(cc.Component));
exports.default = ThreeMatchManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXdIQztRQXRIRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUdsQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUE4RnpDLENBQUM7SUEzRkcsa0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFnQjtRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFHN0IsY0FBYztRQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENB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QUM7SUFySEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lEQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5REFDUztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1M7SUFqQlosaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0F3SHJDO0lBQUQsd0JBQUM7Q0F4SEQsQUF3SEMsQ0F4SDhDLEVBQUUsQ0FBQyxTQUFTLEdBd0gxRDtrQkF4SG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBUaHJlZU1hdGNoQm9hcmQgZnJvbSBcIi4vM01hdGNoQm9hcmRcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTWF0Y2hNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGNvbWJvR2F1Z2U6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZldmVyTGFiZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBleGl0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNvbWJvVmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvbWJvTWF4OiBudW1iZXIgPSAzMDA7XHJcbiAgICBwcml2YXRlIGlzRmV2ZXJUaW1lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUoMCk7XHJcbiAgICAgICAgICAgIC8vIOy9pOuztCDqsozsnbTsp4Ag6rSA66CoIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21ib01heCA9IDIwMDsgLy8g7Zi57J2AIO2VhOyalOyXkCDrlLDrnbwg6rCSIOyEpOyglVxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IDA7XHJcblxyXG5cclxuICAgICAgICAvLyDtlLzrsoTtg4DsnoQgVUkg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmV2ZXJMYWJlbC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgbGFiZWwgPSB0aGlzLmZldmVyTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAvLyBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIC8vIGxhYmVsLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcclxuICAgICAgICAvLyBsYWJlbC5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LlNIUklOSzsgIC8vIOuEiOustCDquLjrqbQg7LaV7IaMXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUtLTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uR2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBg7Iuc6rCEOiAke3RoaXMuY3VycmVudFRpbWV9YDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY29yZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gYW1vdW50O1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbiAgICAgICAgLy8g7KCQ7IiYIO2ajeuTneyLnCDsvaTrs7TqsozsnbTsp4Ag7LaU6rCAIOuplOyEnOuTnCDsi6TtlokgICAgXHJcbiAgICAgICAgdGhpcy5pbmNyZWFzZUNvbWJvR2F1Z2UoYW1vdW50KTsgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWRkTWF0Y2hTY29yZShtYXRjaENvdW50OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcmVUb0FkZCA9IG1hdGNoQ291bnQgKiAxMDsgLy8g7ZS867KEIOyVhOuLkCDrlYwg7KCQ7IiYIOy2lOqwgFxyXG4gICAgXHJcbiAgICAgICAgLy8g7ZS867KE7YOA7J6E7J2066m0IOygkOyImCAy67Cw66GcIOyEpOyglVxyXG4gICAgICAgIGNvbnN0IGZpbmFsU2NvcmUgPSB0aGlzLmlzRmV2ZXJUaW1lID8gc2NvcmVUb0FkZCAqIDIgOiBzY29yZVRvQWRkO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZShmaW5hbFNjb3JlKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmV2ZXJUaW1lKSByZXR1cm47IC8vIO2UvOuyhO2DgOyehOykkeyXlCDqsozsnbTsp4Ag7JWI7Jis65286rCQ6rCQXHJcbiAgICBcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgKz0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbWJvVmFsdWUgPj0gdGhpcy5jb21ib01heCkgeyBcclxuICAgICAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gdGhpcy5jb21ib01heDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEZldmVyVGltZSgpOyAvLyDtmITsnqwg6rKM7J207KeAIOqwkuydtCDrp6XsiqTqsJLrs7Tri6Qg7YGs6rGw64KYIOqwmeyVhOyngOuptCDtlLzrsoTtg4DsnoQg66mU7ISc65OcIOyLpO2WiVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSB0aGlzLmNvbWJvVmFsdWUgLyB0aGlzLmNvbWJvTWF4OyAvLyB1aeyLpO2WiVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0RmV2ZXJUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmV2ZXJMYWJlbC5hY3RpdmUgPSB0cnVlOyAvLyDtlLzrsoQgVUkg67O07Jes7KO86riwXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIDEw7LSIIO2bhCDsooXro4xcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kRmV2ZXJUaW1lKCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbmRGZXZlclRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IGZhbHNlOyAvLyDtlLzrsoTtg4DsnoQg7IOB7YOcIGZhbHNl66GcXHJcbiAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gMDsgLy8g7ZiE7J6sIOy9pOuztCDrsLjrpZgsIHVpIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5mZXZlckxhYmVsLmFjdGl2ZSA9IGZhbHNlOyAvLyDtlLzrsoQgVUkg7Iio6riw6riwXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBvbkdhbWVPdmVyKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIuqyjOyehCDsooXro4whXCIpO1xyXG4gICAgICAgIC8vIOydtO2bhCDqsozsnoQg7KKF66OMIOyymOumrCDstpTqsIAg6rCA64qlXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZExpc3QoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyLseq4gCDqsozsnoQg66as7Iqk7Yq466GcIOuPjOyVhOqwgOq4sOq4sFwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1NpbmdsZUdhbWVMaXN0Jyk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
