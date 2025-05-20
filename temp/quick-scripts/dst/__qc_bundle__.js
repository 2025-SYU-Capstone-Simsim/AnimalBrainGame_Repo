
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
require('./assets/scripts/Controller/CommonUI/GameState');
require('./assets/scripts/Controller/CommonUI/LoginManager');
require('./assets/scripts/Controller/CommonUI/MainMenuScene');
require('./assets/scripts/Controller/Single/SingleGameList');
require('./assets/scripts/Controller/Single/SingleGameOver');
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
                    var __filename = 'preview-scripts/assets/scripts/Controller/CommonUI/GameState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4db5YVN/VL2re16CyqMZfs', 'GameState');
// scripts/Controller/CommonUI/GameState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameState = /** @class */ (function () {
    function GameState() {
    }
    GameState.resetGame = function () {
        this.lastGameScene = '';
        this.score = 0;
    };
    GameState.resetUser = function () {
        this.nickname = '';
        this.character = '';
    };
    GameState.lastGameScene = '';
    GameState.nickname = '';
    GameState.character = '';
    GameState.score = 0; // 점수 저장 용
    GameState.gameId = ''; // 어떤 게임인지 구분용 ("mole-game", "3match-game")
    return GameState;
}());
exports.default = GameState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcQ29tbW9uVUlcXEdhbWVTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFtQkEsQ0FBQztJQVZRLG1CQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFakIsQ0FBQztJQUVNLG1CQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQWpCTSx1QkFBYSxHQUFXLEVBQUUsQ0FBQztJQUMzQixrQkFBUSxHQUFXLEVBQUUsQ0FBQztJQUN0QixtQkFBUyxHQUFXLEVBQUUsQ0FBQztJQUV2QixlQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtJQUM3QixnQkFBTSxHQUFXLEVBQUUsQ0FBQyxDQUFDLDJDQUEyQztJQWF6RSxnQkFBQztDQW5CRCxBQW1CQyxJQUFBO2tCQW5Cb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZSB7XG4gIHN0YXRpYyBsYXN0R2FtZVNjZW5lOiBzdHJpbmcgPSAnJztcbiAgc3RhdGljIG5pY2tuYW1lOiBzdHJpbmcgPSAnJztcbiAgc3RhdGljIGNoYXJhY3Rlcjogc3RyaW5nID0gJyc7XG4gIFxuICBzdGF0aWMgc2NvcmU6IG51bWJlciA9IDA7IC8vIOygkOyImCDsoIDsnqUg7JqpXG4gIHN0YXRpYyBnYW1lSWQ6IHN0cmluZyA9ICcnOyAvLyDslrTrlqQg6rKM7J6E7J247KeAIOq1rOu2hOyaqSAoXCJtb2xlLWdhbWVcIiwgXCIzbWF0Y2gtZ2FtZVwiKVxuXG5cbiAgc3RhdGljIHJlc2V0R2FtZSgpIHtcbiAgICB0aGlzLmxhc3RHYW1lU2NlbmUgPSAnJztcbiAgICB0aGlzLnNjb3JlID0gMDtcblxuICB9XG5cbiAgc3RhdGljIHJlc2V0VXNlcigpIHtcbiAgICB0aGlzLm5pY2tuYW1lID0gJyc7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSAnJztcbiAgfVxufVxuIl19
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
var GameState_1 = require("../../Controller/CommonUI/GameState");
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
        _this.timerLabel = null;
        _this.timeoutLabel = null;
        _this.exitButton = null;
        _this.frogSprite = null;
        _this.colorSequence = [];
        _this.userInput = [];
        _this.score = 0;
        _this.level = 1;
        _this.isGameActive = false;
        _this.remainingTime = 0;
        _this.buttonMap = {};
        _this.colors = ["red", "yellow", "green", "blue"];
        return _this;
    }
    GameController.prototype.onLoad = function () {
        var _this = this;
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        cc.debug.setDisplayStats(false);
        this.buttonMap = {
            red: this.redButton,
            yellow: this.yellowButton,
            green: this.greenButton,
            blue: this.blueButton
        };
        this.startButton.node.on('click', this.onStartGame, this);
        this.redButton.node.on('click', function () { return _this.onColorButtonClick('red'); }, this);
        this.yellowButton.node.on('click', function () { return _this.onColorButtonClick('yellow'); }, this);
        this.greenButton.node.on('click', function () { return _this.onColorButtonClick('green'); }, this);
        this.blueButton.node.on('click', function () { return _this.onColorButtonClick('blue'); }, this);
        this.setInitialButtonState();
        this.startButton.node.active = true;
        this.timerLabel.node.active = false;
        this.timeoutLabel.node.active = false;
        this.tickCallback = this.updateTimer.bind(this);
        this.setFrogState("neutral");
        cc.find('Canvas/yellowButton').on('click', function () {
            console.log('yellowButton 눌림');
        });
        cc.find('Canvas/greenButton').on('click', function () {
            console.log('greenButton 눌림');
        });
        cc.find('Canvas/blueButton').on('click', function () {
            console.log('blueButton 눌림');
        });
        cc.find('Canvas/redButton').on('click', function () {
            console.log('redButton 눌림');
        });
    };
    GameController.prototype.setFrogState = function (state) {
        var _this = this;
        var spriteMap = {
            neutral: "무표정개굴",
            smile: "웃는개굴",
            cry: "우는개굴"
        };
        // 이미지마다 개별 사이즈 지정
        var sizeMap = {
            neutral: { width: 450, height: 510 },
            smile: { width: 450, height: 600 },
            cry: { width: 600, height: 500 }
        };
        var spriteName = spriteMap[state];
        var size = sizeMap[state];
        cc.resources.load("Images/Sim/" + spriteName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                console.error("\uAC1C\uAD6C\uB9AC \uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC2E4\uD328: " + spriteName, err);
                return;
            }
            _this.frogSprite.spriteFrame = spriteFrame;
            _this.frogSprite.type = cc.Sprite.Type.SIMPLE;
            _this.frogSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            _this.frogSprite.node.setContentSize(size.width, size.height);
        });
    };
    GameController.prototype.onStartGame = function () {
        var btnLabel = this.startButton.node.getComponentInChildren(cc.Label).string;
        if (btnLabel === "다시 도전") {
            this.userInput = [];
            this.setStatusMessage("현재 단계 다시 시작!");
            this.hintLabel.string = "";
            this.isGameActive = true;
            this.startButton.node.active = false;
            this.setFrogState("neutral");
            this.generateColorSequence();
            this.showColorSequence();
        }
        else {
            this.colorSequence = [];
            this.userInput = [];
            this.score = 0;
            this.level = 1;
            this.updateScore();
            this.setStatusMessage("게임 시작!");
            this.hintLabel.string = "";
            this.isGameActive = true;
            this.startButton.node.active = false;
            this.setFrogState("neutral");
            this.startTimer();
            this.generateColorSequence();
            this.showColorSequence();
        }
    };
    GameController.prototype.onColorButtonClick = function (color) {
        if (!this.isGameActive)
            return;
        if (!this.buttonMap[color].interactable)
            return;
        var btn = this.buttonMap[color];
        var originalScale = btn.node.scale;
        var originalPos = btn.node.getPosition();
        // 연잎 클릭 효과 (강조 버전)
        cc.tween(btn.node)
            .parallel(cc.tween().to(0.1, { scale: originalScale * 0.85 }, { easing: 'quadIn' }), cc.tween().to(0.1, { opacity: 180 }), cc.tween().to(0.1, { position: cc.v3(originalPos.x, originalPos.y - 5) }))
            .parallel(cc.tween().to(0.1, { scale: originalScale }, { easing: 'quadOut' }), cc.tween().to(0.1, { opacity: 255 }), cc.tween().to(0.1, { position: originalPos }))
            .start();
        this.userInput.push(color);
        this.checkUserInput();
    };
    GameController.prototype.updateTimer = function () {
        this.remainingTime--;
        this.timerLabel.string = "" + this.remainingTime;
        if (this.remainingTime <= 0) {
            this.unschedule(this.tickCallback);
            this.onTimeUp();
        }
    };
    GameController.prototype.startTimer = function () {
        this.unschedule(this.tickCallback);
        this.remainingTime = 60;
        this.timerLabel.string = "" + this.remainingTime;
        this.timerLabel.node.active = true;
        this.timeoutLabel.node.active = false;
        this.schedule(this.tickCallback, 1);
    };
    GameController.prototype.onTimeUp = function () {
        this.isGameActive = false;
        this.disableButtons(true);
        this.startButton.interactable = false;
        this.timeoutLabel.string = "TimeOut!";
        this.timeoutLabel.node.active = true;
        // 게임 상태 저장
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        GameState_1.default.score = this.score;
        GameState_1.default.gameId = "remember-game"; // 기억력 게임 고유 식별자
        // 게임 오버 씬으로 이동
        cc.director.loadScene("GameOver");
    };
    GameController.prototype.checkUserInput = function () {
        var _this = this;
        var correct = true;
        var targetSequence = this.level === 3 ? __spreadArrays(this.colorSequence).reverse() : this.colorSequence;
        for (var i = 0; i < this.userInput.length; i++) {
            if (this.userInput[i] !== targetSequence[i]) {
                correct = false;
                break;
            }
        }
        if (correct && this.userInput.length === targetSequence.length) {
            this.setFrogState("smile");
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
        else if (!correct) {
            this.setFrogState("cry");
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
        this.hintLabel.string = this.level === 3 ? "불이 깜빡이는 순서를 반대로 입력하라." : "";
        console.log("생성된 색상 순서:", this.colorSequence);
    };
    GameController.prototype.setInitialButtonState = function () {
        Object.values(this.buttonMap).forEach(function (btn) {
            btn.node.opacity = 100;
            btn.interactable = false;
        });
    };
    GameController.prototype.showColorSequence = function () {
        var _this = this;
        this.setFrogState("neutral");
        this.setInitialButtonState();
        var delay = 0;
        this.colorSequence.forEach(function (color) {
            var btn = _this.buttonMap[color];
            _this.scheduleOnce(function () { return _this.activateButtonForBlink(btn); }, delay);
            delay += 1.0;
        });
        this.scheduleOnce(function () {
            _this.enableAnswerInput();
            _this.setStatusMessage("버튼 순서를 맞춰주세요!");
        }, delay);
    };
    GameController.prototype.activateButtonForBlink = function (button) {
        var originalScale = button.node.scale;
        button.node.opacity = 100;
        button.interactable = false;
        cc.tween(button.node)
            .to(0.15, { opacity: 255, scale: originalScale * 1.05 }, { easing: 'quadOut' })
            .to(0.15, { opacity: 100, scale: originalScale }, { easing: 'quadIn' })
            .start();
    };
    GameController.prototype.enableAnswerInput = function () {
        Object.values(this.buttonMap).forEach(function (btn) {
            var bg = btn.node.getChildByName('Background');
            if (bg) {
                // 💡 Background의 크기를 따라가게 맞춤
                btn.node.setContentSize(bg.getContentSize());
            }
            btn.node.opacity = 255;
            btn.interactable = true;
            console.log(btn.node.name + " size:", btn.node.width, btn.node.height);
        });
    };
    GameController.prototype.updateScore = function () {
        this.scoreLabel.string = "" + this.score;
    };
    GameController.prototype.setStatusMessage = function (message) {
        this.statusLabel.string = message;
    };
    GameController.prototype.disableButtons = function (disable) {
        Object.values(this.buttonMap).forEach(function (btn) {
            btn.interactable = !disable;
        });
    };
    GameController.prototype.loadList = function () {
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
    __decorate([
        property(cc.Sprite)
    ], GameController.prototype, "frogSprite", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxSZW1lbWJlckdhbWVcXFJlbWVtYmVyR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUN0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQThTQztRQTdTd0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFDOUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUM3QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQzdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQzdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTFDLG1CQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLGVBQVMsR0FBaUMsRUFBRSxDQUFDO1FBQzdDLFlBQU0sR0FBYSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztJQXdSbEUsQ0FBQztJQXRSRywrQkFBTSxHQUFOO1FBQUEsaUJBd0NDO1FBdkNHLG1CQUFT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QUMsTUFBTSxDQUFDO3dEQUFnQztJQUMvQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFBK0I7SUFDOUI7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQThCO0lBQzlCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUE2QjtJQUM1QjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFBOEI7SUFDN0I7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQTRCO0lBQzNCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUE2QjtJQUM1QjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFBK0I7SUFDN0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQThCO0lBQzdCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUE4QjtJQVpqQyxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBOFNsQztJQUFELHFCQUFDO0NBOVNELEFBOFNDLENBOVMyQyxFQUFFLENBQUMsU0FBUyxHQThTdkQ7a0JBOVNvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlci9Db21tb25VSS9HYW1lU3RhdGVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIHN0YXJ0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgcmVkQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgeWVsbG93QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgZ3JlZW5CdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBibHVlQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHN0YXR1c0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIGhpbnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHRpbWVvdXRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgZXhpdEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpIGZyb2dTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xvclNlcXVlbmNlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB1c2VySW5wdXQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgaXNHYW1lQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJlbWFpbmluZ1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpY2tDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgYnV0dG9uTWFwOiB7IFtrZXk6IHN0cmluZ106IGNjLkJ1dHRvbiB9ID0ge307XHJcbiAgICBwcml2YXRlIGNvbG9yczogc3RyaW5nW10gPSBbXCJyZWRcIiwgXCJ5ZWxsb3dcIiwgXCJncmVlblwiLCBcImJsdWVcIl07XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uTWFwID0ge1xyXG4gICAgICAgICAgICByZWQ6IHRoaXMucmVkQnV0dG9uLFxyXG4gICAgICAgICAgICB5ZWxsb3c6IHRoaXMueWVsbG93QnV0dG9uLFxyXG4gICAgICAgICAgICBncmVlbjogdGhpcy5ncmVlbkJ1dHRvbixcclxuICAgICAgICAgICAgYmx1ZTogdGhpcy5ibHVlQnV0dG9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25TdGFydEdhbWUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVkQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbG9yQnV0dG9uQ2xpY2soJ3JlZCcpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnllbGxvd0J1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Db2xvckJ1dHRvbkNsaWNrKCd5ZWxsb3cnKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ncmVlbkJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Db2xvckJ1dHRvbkNsaWNrKCdncmVlbicpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJsdWVCdXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29sb3JCdXR0b25DbGljaygnYmx1ZScpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsQnV0dG9uU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVvdXRMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnRpY2tDYWxsYmFjayA9IHRoaXMudXBkYXRlVGltZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEZyb2dTdGF0ZShcIm5ldXRyYWxcIik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMveWVsbG93QnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygneWVsbG93QnV0dG9uIOuIjOumvCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ncmVlbkJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dyZWVuQnV0dG9uIOuIjOumvCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ibHVlQnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmx1ZUJ1dHRvbiDriIzrprwnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvcmVkQnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkQnV0dG9uIOuIjOumvCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEZyb2dTdGF0ZShzdGF0ZTogXCJuZXV0cmFsXCIgfCBcInNtaWxlXCIgfCBcImNyeVwiKSB7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlTWFwID0ge1xyXG4gICAgICAgICAgICBuZXV0cmFsOiBcIuustO2RnOygleqwnOq1tFwiLFxyXG4gICAgICAgICAgICBzbWlsZTogXCLsm4PripTqsJzqtbRcIixcclxuICAgICAgICAgICAgY3J5OiBcIuyasOuKlOqwnOq1tFwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g7J2066+47KeA66eI64ukIOqwnOuzhCDsgqzsnbTspogg7KeA7KCVXHJcbiAgICAgICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgICAgICAgbmV1dHJhbDogeyB3aWR0aDogNDUwLCBoZWlnaHQ6IDUxMCB9LFxyXG4gICAgICAgICAgICBzbWlsZTogeyB3aWR0aDogNDUwLCBoZWlnaHQ6IDYwMCB9LFxyXG4gICAgICAgICAgICBjcnk6IHsgd2lkdGg6IDYwMCwgaGVpZ2h0OiA1MDAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNwcml0ZU5hbWUgPSBzcHJpdGVNYXBbc3RhdGVdO1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSBzaXplTWFwW3N0YXRlXTtcclxuXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYEltYWdlcy9TaW0vJHtzcHJpdGVOYW1lfWAsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGDqsJzqtazrpqwg7J2066+47KeAIOuhnOuTnCDsi6TtjKg6ICR7c3ByaXRlTmFtZX1gLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZnJvZ1Nwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmZyb2dTcHJpdGUudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNJTVBMRTtcclxuICAgICAgICAgICAgdGhpcy5mcm9nU3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgICAgICAgICAgdGhpcy5mcm9nU3ByaXRlLm5vZGUuc2V0Q29udGVudFNpemUoc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uU3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGNvbnN0IGJ0bkxhYmVsID0gdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKGJ0bkxhYmVsID09PSBcIuuLpOyLnCDrj4TsoIRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c01lc3NhZ2UoXCLtmITsnqwg64uo6rOEIOuLpOyLnCDsi5zsnpEhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpbnRMYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcm9nU3RhdGUoXCJuZXV0cmFsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvclNlcXVlbmNlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsID0gMTsgXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi6rKM7J6EIOyLnOyekSFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGludExhYmVsLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZyb2dTdGF0ZShcIm5ldXRyYWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Db2xvckJ1dHRvbkNsaWNrKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lQWN0aXZlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ1dHRvbk1hcFtjb2xvcl0uaW50ZXJhY3RhYmxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uTWFwW2NvbG9yXTtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFNjYWxlID0gYnRuLm5vZGUuc2NhbGU7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQb3MgPSBidG4ubm9kZS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAvLyDsl7Dsno4g7YG066atIO2aqOqzvCAo6rCV7KGwIOuyhOyghClcclxuICAgICAgICBjYy50d2VlbihidG4ubm9kZSlcclxuICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjEsIHsgc2NhbGU6IG9yaWdpbmFsU2NhbGUgKiAwLjg1IH0sIHsgZWFzaW5nOiAncXVhZEluJyB9KSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4xLCB7IG9wYWNpdHk6IDE4MCB9KSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4xLCB7IHBvc2l0aW9uOiBjYy52MyhvcmlnaW5hbFBvcy54LCBvcmlnaW5hbFBvcy55IC0gNSkgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMSwgeyBzY2FsZTogb3JpZ2luYWxTY2FsZSB9LCB7IGVhc2luZzogJ3F1YWRPdXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjEsIHsgcG9zaXRpb246IG9yaWdpbmFsUG9zIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlcklucHV0LnB1c2goY29sb3IpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tVc2VySW5wdXQoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdUaW1lLS07XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGAke3RoaXMucmVtYWluaW5nVGltZX1gO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbWFpbmluZ1RpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aWNrQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICB0aGlzLm9uVGltZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRUaW1lcigpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aWNrQ2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nVGltZSA9IDYwO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnJlbWFpbmluZ1RpbWV9YDtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnRpY2tDYWxsYmFjaywgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRpbWVVcCgpIHtcclxuICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbnModHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVvdXRMYWJlbC5zdHJpbmcgPSBcIlRpbWVPdXQhXCI7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0TGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyDqsozsnoQg7IOB7YOcIOyggOyepVxyXG4gICAgICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgICAgIEdhbWVTdGF0ZS5zY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN0YXRlLmdhbWVJZCA9IFwicmVtZW1iZXItZ2FtZVwiOyAvLyDquLDslrXroKUg6rKM7J6EIOqzoOycoCDsi53rs4TsnpBcclxuXHJcbiAgICAgICAgLy8g6rKM7J6EIOyYpOuyhCDslKzsnLzroZwg7J2064+ZXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZU92ZXJcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tVc2VySW5wdXQoKSB7XHJcbiAgICAgICAgbGV0IGNvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0YXJnZXRTZXF1ZW5jZSA9IHRoaXMubGV2ZWwgPT09IDMgPyBbLi4udGhpcy5jb2xvclNlcXVlbmNlXS5yZXZlcnNlKCkgOiB0aGlzLmNvbG9yU2VxdWVuY2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VySW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlcklucHV0W2ldICE9PSB0YXJnZXRTZXF1ZW5jZVtpXSkge1xyXG4gICAgICAgICAgICAgICAgY29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3JyZWN0ICYmIHRoaXMudXNlcklucHV0Lmxlbmd0aCA9PT0gdGFyZ2V0U2VxdWVuY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RnJvZ1N0YXRlKFwic21pbGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzTWVzc2FnZShcIuygleuLtSEg64uk7J2MIOuLqOqzhOuhnCFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFjb3JyZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RnJvZ1N0YXRlKFwiY3J5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c01lc3NhZ2UoXCLti4DroLjsirXri4jri6QhIOuLpOyLnCDsi5zrj4TtlZjshLjsmpQuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gXCLri6Tsi5wg64+E7KCEXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25zKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlQ29sb3JTZXF1ZW5jZSgpIHtcclxuICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UgPSBbXTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxldmVsID49IDUgPyA3IDogdGhpcy5sZXZlbCArIDI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbG9ycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UucHVzaCh0aGlzLmNvbG9yc1tpZHhdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaW50TGFiZWwuc3RyaW5nID0gdGhpcy5sZXZlbCA9PT0gMyA/IFwi67aI7J20IOq5nOu5oeydtOuKlCDsiJzshJzrpbwg67CY64yA66GcIOyeheugpe2VmOudvC5cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsg53shLHrkJwg7IOJ7IOBIOyInOyEnDpcIiwgdGhpcy5jb2xvclNlcXVlbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEluaXRpYWxCdXR0b25TdGF0ZSgpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuYnV0dG9uTWFwKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5ub2RlLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dDb2xvclNlcXVlbmNlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RnJvZ1N0YXRlKFwibmV1dHJhbFwiKTsgXHJcblxyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbEJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcclxuICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UuZm9yRWFjaChjb2xvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uTWFwW2NvbG9yXTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5hY3RpdmF0ZUJ1dHRvbkZvckJsaW5rKGJ0biksIGRlbGF5KTtcclxuICAgICAgICAgICAgZGVsYXkgKz0gMS4wO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVBbnN3ZXJJbnB1dCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c01lc3NhZ2UoXCLrsoTtirwg7Iic7ISc66W8IOunnuy2sOyjvOyEuOyalCFcIik7XHJcbiAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlQnV0dG9uRm9yQmxpbmsoYnV0dG9uOiBjYy5CdXR0b24pIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFNjYWxlID0gYnV0dG9uLm5vZGUuc2NhbGU7XHJcbiAgICAgICAgYnV0dG9uLm5vZGUub3BhY2l0eSA9IDEwMDtcclxuICAgICAgICBidXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4oYnV0dG9uLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjE1LCB7IG9wYWNpdHk6IDI1NSwgc2NhbGU6IG9yaWdpbmFsU2NhbGUgKiAxLjA1IH0sIHsgZWFzaW5nOiAncXVhZE91dCcgfSlcclxuICAgICAgICAgICAgLnRvKDAuMTUsIHsgb3BhY2l0eTogMTAwLCBzY2FsZTogb3JpZ2luYWxTY2FsZSB9LCB7IGVhc2luZzogJ3F1YWRJbicgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmFibGVBbnN3ZXJJbnB1dCgpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuYnV0dG9uTWFwKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnID0gYnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0JhY2tncm91bmQnKTtcclxuICAgICAgICAgICAgaWYgKGJnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDwn5KhIEJhY2tncm91bmTsnZgg7YGs6riw66W8IOuUsOudvOqwgOqyjCDrp57stqRcclxuICAgICAgICAgICAgICAgIGJ0bi5ub2RlLnNldENvbnRlbnRTaXplKGJnLmdldENvbnRlbnRTaXplKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidG4ubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2J0bi5ub2RlLm5hbWV9IHNpemU6YCwgYnRuLm5vZGUud2lkdGgsIGJ0bi5ub2RlLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFN0YXR1c01lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNMYWJlbC5zdHJpbmcgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlzYWJsZUJ1dHRvbnMoZGlzYWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5idXR0b25NYXApLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgYnRuLmludGVyYWN0YWJsZSA9ICFkaXNhYmxlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMaXN0KCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU2luZ2xlR2FtZUxpc3QnKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=
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
    //사용자가 입력하는 매 숫자가 맞는지 확인하는 함수 맞는다면 맞는 표시 틀리면 틀리는 표시 2초로 설정
    Game_logic.prototype.checkAnswer = function () {
        var _this = this;
        if (Reversecorrect_Show_QnA_1.default.isGameOver)
            return;
        var input = Game_logic_1.player_label_arr;
        var correct = Reversecorrect_Show_QnA_1.default.isReverse
            ? __spreadArrays(Reversecorrect_Show_QnA_1.default.qa).reverse()
            : __spreadArrays(Reversecorrect_Show_QnA_1.default.qa);
        for (var i = 0; i < input.length; i++) {
            if (input[i] !== correct[i]) {
                Reversecorrect_Game_init_1.default.instance.wrong_sign.active = true;
                this.qna.setButtonsInteractable(false);
                cc.director.pause();
                setTimeout(function () {
                    cc.director.resume();
                    Reversecorrect_Game_init_1.default.instance.wrong_sign.active = false;
                    _this.nextProblem(false);
                }, 1500);
                return;
            }
        }
        if (input.length === correct.length) {
            Reversecorrect_Game_init_1.default.instance.addScore(10);
            Reversecorrect_Game_init_1.default.instance.correct_sign.active = true;
            this.qna.setButtonsInteractable(false);
            cc.director.pause();
            setTimeout(function () {
                cc.director.resume();
                Reversecorrect_Game_init_1.default.instance.correct_sign.active = false;
                _this.nextProblem(true);
            }, 1500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUmV2ZXJzZWNvcnJlY3Rfc2NyaXB0c1xcUmV2ZXJzZWNvcnJlY3RfR2FtZV9sb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdEO0FBQ2hELHVFQUFrRDtBQUM1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTRFQztRQTFFRywwQkFBb0IsR0FBYSxJQUFJLENBQUM7UUFHdEMsU0FBRyxHQUFhLElBQUksQ0FBQztRQUdyQixvQkFBYyxHQUFjLElBQUksQ0FBQzs7SUFvRXJDLENBQUM7bUJBNUVvQixVQUFVO0lBYTNCLHNCQUFzQjtJQUN0QixxQ0FBZ0IsR0FBaEI7UUFDSSxJQUFNLFNBQVMsR0FBRyxZQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsZ0NBQVcsR0FBWDtRQUFBLGlCQWtDQztRQWpDRyxJQUFJLGlDQUFRLENBQUMsVUFBVTtZQUFFLE9BQU87UUFFaEMsSUFBTSxLQUFLLEdBQUcsWUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQzFDLElBQU0sT0FBTyxHQUFHLGlDQUFRLENBQUMsU0FBUztZQUM5QixDQUFDLENBQUMsZUFBSSxpQ0FBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7WUFDNUIsQ0FBQyxnQkFBSyxpQ0FBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0Isa0NBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BCLFVBQVUsQ0FBQztvQkFDUCxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNyQixrQ0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDN0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNiLE9BQU87YUFDTjtTQUNKO1FBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDakMsa0NBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLGtDQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixVQUFVLENBQUM7Z0JBQ1AsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDckIsa0NBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBRVo7SUFDTCxDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLGdDQUFXLEdBQVgsVUFBWSxTQUFrQjtRQUMxQixZQUFVLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLFlBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLGlDQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0M7UUFFRCxJQUFJLFNBQVMsRUFBRTtZQUNYLGlDQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQzs7SUEvRGEsMkJBQWdCLEdBQWEsRUFBRSxDQUFDO0lBQ2hDLGdCQUFLLEdBQVcsQ0FBQyxDQUFDO0lBVmhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NERBQ21CO0lBR3RDO1FBREMsUUFBUSxDQUFDLGlDQUFRLENBQUM7MkNBQ0U7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDYztJQVJoQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNEU5QjtJQUFELGlCQUFDO0NBNUVELEFBNEVDLENBNUV1QyxFQUFFLENBQUMsU0FBUyxHQTRFbkQ7a0JBNUVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3dfUW5BIGZyb20gXCIuL1JldmVyc2Vjb3JyZWN0X1Nob3dfUW5BXCJcclxuaW1wb3J0IEdhbWVfaW5pdCBmcm9tIFwiLi9SZXZlcnNlY29ycmVjdF9HYW1lX2luaXRcIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZV9sb2dpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwbGF5ZXJfbGFiZWxfZGlzcGxheTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShzaG93X1FuQSlcclxuICAgIHFuYTogc2hvd19RbkEgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNlcXVlbmNlX2xhYmVsIDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYXllcl9sYWJlbF9hcnI6IG51bWJlcltdID0gW107XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLy/sgqzsmqnsnpDqsIAg7J6F66Cl7ZWY64qUIGxhYmVsIOyXheuNsOydtO2KuFxyXG4gICAgdXBkYXRlSW5wdXRMYWJlbCgpIHtcclxuICAgICAgICBjb25zdCBudW1TdHJpbmcgPSBHYW1lX2xvZ2ljLnBsYXllcl9sYWJlbF9hcnIuam9pbihcIlwiKTtcclxuICAgICAgICB0aGlzLnBsYXllcl9sYWJlbF9kaXNwbGF5LnN0cmluZyA9IG51bVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvL+yCrOyaqeyekOqwgCDsnoXroKXtlZjripQg66ekIOyIq+yekOqwgCDrp57ripTsp4Ag7ZmV7J247ZWY64qUIO2VqOyImCDrp57ripTri6TrqbQg66ee64qUIO2RnOyLnCDti4DrpqzrqbQg7YuA66as64qUIO2RnOyLnCAy7LSI66GcIOyEpOyglVxyXG4gICAgY2hlY2tBbnN3ZXIoKSB7XHJcbiAgICAgICAgaWYgKHNob3dfUW5BLmlzR2FtZU92ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBHYW1lX2xvZ2ljLnBsYXllcl9sYWJlbF9hcnI7XHJcbiAgICAgICAgY29uc3QgY29ycmVjdCA9IHNob3dfUW5BLmlzUmV2ZXJzZVxyXG4gICAgICAgICAgICA/IFsuLi5zaG93X1FuQS5xYV0ucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgIDogWy4uLnNob3dfUW5BLnFhXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRbaV0gIT09IGNvcnJlY3RbaV0pIHtcclxuICAgICAgICAgICAgR2FtZV9pbml0Lmluc3RhbmNlLndyb25nX3NpZ24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5xbmEuc2V0QnV0dG9uc0ludGVyYWN0YWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICAgICAgICAgICAgICBHYW1lX2luaXQuaW5zdGFuY2Uud3Jvbmdfc2lnbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFByb2JsZW0oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gY29ycmVjdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgR2FtZV9pbml0Lmluc3RhbmNlLmFkZFNjb3JlKDEwKTtcclxuICAgICAgICAgICAgR2FtZV9pbml0Lmluc3RhbmNlLmNvcnJlY3Rfc2lnbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnFuYS5zZXRCdXR0b25zSW50ZXJhY3RhYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgICAgIEdhbWVfaW5pdC5pbnN0YW5jZS5jb3JyZWN0X3NpZ24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRQcm9ibGVtKHRydWUpO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v66ee7JWY64qU7KeAIO2LgOuguOuKlOyngCDtmZXsnbgg7ZuEIOy5tOyatO2KuCDshLjqs6Ag64uk7J2MIOusuOygnOuhnCDrhJjslrTqsIDripQg7ZWo7IiYXHJcbiAgICBuZXh0UHJvYmxlbShpc0NvcnJlY3Q6IGJvb2xlYW4pIHtcclxuICAgICAgICBHYW1lX2xvZ2ljLnBsYXllcl9sYWJlbF9hcnIgPSBbXTtcclxuICAgICAgICBHYW1lX2xvZ2ljLmNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnBsYXllcl9sYWJlbF9kaXNwbGF5LnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgc2hvd19RbkEucWEgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VxdWVuY2VfbGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZV9sYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlX2xhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNDb3JyZWN0KSB7XHJcbiAgICAgICAgICAgIHNob3dfUW5BLmNvcnJlY3RDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5xbmEpIHtcclxuICAgICAgICAgICAgdGhpcy5xbmEuc2hvd05ld1F1ZXN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/Single/SingleGameList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd26b1kYbyNKyKnGcPX9gaYS', 'SingleGameList');
// scripts/Controller/Single/SingleGameList.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcU2luZ2xlXFxTaW5nbGVHYW1lTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDs7SUEyREEsQ0FBQztJQXpERyxxQ0FBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBR0QscUNBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsK0NBQXNCLEdBQXRCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBckNnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBMkRsQztJQUFELHFCQUFDO0NBM0RELEFBMkRDLENBM0QyQyxFQUFFLENBQUMsU0FBUyxHQTJEdkQ7a0JBM0RvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGxvYWRNb2xlR2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLrkZDrjZTsp4Ag6rKM7J6E7Jy866GcIOydtOuPmVwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNb2xlR2FtZVNjZW5lJyk7XG4gICAgfVxuICAgIFxuICAgIGxvYWRUaHJlZU1hdGNoR2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLsk7Drpqzrp6TsuZgg6rKM7J6E7Jy866GcIOydtOuPmVwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCczTV9HYW1lU2NlbmUnKTtcbiAgICB9XG5cbiAgICBsb2FkQmxvY2tDb3VudEdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi67iU66GdIOqwnOyImCDshLjquLAg6rKM7J6E7Jy866GcIOydtOuPmVwiKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdCbG9ja0NvdW50R2FtZVNjZW5lJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7JSsIOuhnOuTnCDqsrDqs7w6XCIsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgbG9hZFJlbWVtYmVyR2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLquLDslrXroKUg6rKM7J6E7Jy866GcIOydtOuPmVwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdSZW1lbWJlckdhbWVTY2VuZScpO1xuICAgIH1cblxuICAgIFxuICAgIGxvYWRNYXplR2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLrr7jroZzssL7quLAg6rKM7J6E7Jy866GcIOydtOuPmVwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydE1hemVTY2VuZScpO1xuICAgIH1cbiAgICBcbiAgICBsb2FkUmV2ZXJzZUNvcnJlY3RHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuyIq+yekCDqsbDqvrjroZwg66ee7LaU6riwIOqyjOyehOycvOuhnCDsnbTrj5lcIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUmV2ZXJzZWNvcnJlY3RfbWFpbnNjZW5lJyk7XG4gICAgfVxuXG4gICAgbG9hZFJvdHRlbmFjb3JuR2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLrj4TthqDrpqzrpqwg6rKM7J6E7Jy866GcIOydtOuPmVwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdSb3R0ZW5hY29ybl9tYWluc2NlbmUnKTtcbiAgICB9XG4gICAgXG4gLy8g7LaU7ZuEIOyLpOygnCDslKzsnbTrpoQg7LaU6rCAICwg7L2U7L2U7IqkIOuCtCDruYzrk5ztjIzsnbzsl5Drj4Qg7LaU6rCAXG4gICAgLy8gbG9hZEdhbWUzKCkge1xuICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUzU2NlbmUnKTsgIFxuICAgIC8vIH1cblxuICAgIC8vIGxvYWRHYW1lNCgpIHtcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lNFNjZW5lJyk7XG4gICAgLy8gfVxuXG4gICAgLy8gbG9hZEdhbWU1KCkge1xuICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWU1U2NlbmUnKTtcbiAgICAvLyB9XG5cbiAgICAvLyBsb2FkR2FtZTYoKSB7XG4gICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZTZTY2VuZScpO1xuICAgIC8vIH1cblxuICAgIC8vIGxvYWRHYW1lNygpIHtcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lN1NjZW5lJyk7XG4gICAgLy8gfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUm90dGVuYWNvcm5fc2NyaXB0c1xcUm90dGVuYWNvcm5fYWNvcm5fbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qyx5REFBdUM7QUFHdkM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFzREM7UUFuREcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFcEIsVUFBSSxHQUFjLEVBQUUsQ0FBQzs7SUE4Q2pDLENBQUM7SUE1Q0csNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxRQUFpQjtRQUN0QixLQUFrQixVQUFTLEVBQVQsS0FBQSxJQUFJLENBQUMsSUFBSSxFQUFULGNBQVMsRUFBVCxJQUFTLEVBQUU7WUFBeEIsSUFBSSxLQUFLLFNBQUE7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDakMsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsSUFBYSxFQUFFLFFBQWlCO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLCtCQUErQjtRQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDJCQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLFdBQVcsRUFBRTtZQUNiLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7UUFHRCxjQUFjO1FBQ2QsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBRSxjQUFjO1FBQ3BELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUUsY0FBYztRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLEtBQWtCLFVBQVMsRUFBVCxLQUFBLElBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVMsRUFBRTtZQUF4QixJQUFJLEtBQUssU0FBQTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQWxERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFOWCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBc0RoQztJQUFELG1CQUFDO0NBdERELEFBc0RDLENBdER5QyxFQUFFLENBQUMsU0FBUyxHQXNEckQ7a0JBdERvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCBBY29ybiBmcm9tIFwiLi9Sb3R0ZW5hY29ybl9hY29yblwiXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY29ybk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBhY29yblByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFjb3JuUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBvb2w6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmluaXRQb29sKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBvb2woKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYWNvcm4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFjb3JuUHJlZmFiKTtcclxuICAgICAgICAgICAgYWNvcm4ucGFyZW50ID0gdGhpcy5hY29yblBhcmVudDtcclxuICAgICAgICAgICAgYWNvcm4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbC5wdXNoKGFjb3JuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNvcm4oaXNSb3R0ZW46IGJvb2xlYW4pOiBjYy5Ob2RlIHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChsZXQgYWNvcm4gb2YgdGhpcy5wb29sKSB7XHJcbiAgICAgICAgICAgIGlmICghYWNvcm4uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwQWNvcm4oYWNvcm4sIGlzUm90dGVuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY29ybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEFjb3JuKG5vZGU6IGNjLk5vZGUsIGlzUm90dGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBhY3RpdmF0ZSgpIO2YuOy2nOuhnCDrrLzrpqwg7IaN64+EICsg67KM66CIIOyymOumrFxyXG4gICAgICAgIGNvbnN0IGFjb3JuU2NyaXB0ID0gbm9kZS5nZXRDb21wb25lbnQoQWNvcm4pO1xyXG4gICAgICAgIGlmIChhY29yblNjcmlwdCkge1xyXG4gICAgICAgICAgICBhY29yblNjcmlwdC5hY3RpdmF0ZShpc1JvdHRlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyDrnpzrjaQg7JyE7LmYIOu2hOyCsCDrsLDsuZhcclxuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIDQwMCAtIDIwMDsgIC8vIC0yMDAgfiArMjAwXHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiAyMDAgLSAxMDA7ICAvLyAtMTAwIH4gKzEwMFxyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgYWNvcm4gb2YgdGhpcy5wb29sKSB7XHJcbiAgICAgICAgICAgIGFjb3JuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
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
var GameState_1 = require("../../Controller/CommonUI/GameState");
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
        _this.timeLeft = 60;
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
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        cc.debug.setDisplayStats(false);
        // Next/Skip 버튼 클릭
        if (this.nextButton) {
            this.nextButton.node.on('click', this.nextQuestion, this);
        }
        // Score 초기화
        this.score = 0;
        if (this.scoreLabel) {
            this.scoreLabel.string = "" + this.score;
        }
        // TIMEOUT 레이블 숨기기
        if (this.timeoutLabel) {
            this.timeoutLabel.node.active = false;
        }
        // 남은 시간 레이블 초기화
        this.timeLeft = 100;
        if (this.timeLabel) {
            this.timeLabel.string = "" + this.timeLeft;
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
            this.timeLabel.string = "" + this.timeLeft;
        }
        this.schedule(this.updateTimer, 1);
    };
    /** 1초마다 호출되어 남은 시간을 갱신 */
    GameManager.prototype.updateTimer = function () {
        this.timeLeft--;
        if (this.timeLabel) {
            this.timeLabel.string = "" + this.timeLeft;
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
        // 게임 상태 저장
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        GameState_1.default.score = this.score;
        GameState_1.default.gameId = "block-count-game"; // 원하는 식별자
        // 게임오버 씬으로 이동
        cc.director.loadScene("GameOver");
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
                this.scoreLabel.string = "" + this.score;
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
                this.scoreLabel.string = "" + this.score;
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
        console.log("싱글 게임 리스트로 돌아가기");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxCbG9ja0NvdW50R2FtZVxcQmxvY2tDb3VudEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXNTQztRQXJTQyxZQUFZO1FBRVosbUJBQWEsR0FBZ0IsRUFBRSxDQUFDO1FBRWhDLFlBQVk7UUFFWixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixjQUFjO1FBRWQsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBWTtRQUVaLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGtCQUFrQjtRQUVsQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixlQUFlO1FBRWYsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIscUJBQXFCO1FBRXJCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLG1CQUFtQjtRQUVuQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGdCQUFnQjtRQUNLLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRXhDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUVsQyxlQUFlO1FBQ1AsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUU5QixrQkFBa0I7UUFDVixpQkFBVyxHQUFlO1lBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFB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QUFDLEtBQUssQ0FBQzttREFDUztJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNXO0lBSTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1E7SUFHTjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFBNEI7SUFsQzdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FzUy9CO0lBQUQsa0JBQUM7Q0F0U0QsQUFzU0MsQ0F0U3dDLEVBQUUsQ0FBQyxTQUFTLEdBc1NwRDtrQkF0U29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi8uLi9Db250cm9sbGVyL0NvbW1vblVJL0dhbWVTdGF0ZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLyAxKSDsmLXshZgg67KE7Yq865OkXHJcbiAgQHByb3BlcnR5KFtjYy5CdXR0b25dKVxyXG4gIG9wdGlvbkJ1dHRvbnM6IGNjLkJ1dHRvbltdID0gW107XHJcblxyXG4gIC8vIDIpIOqysOqzvCDroIjsnbTruJRcclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgcmVzdWx0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgLy8gMykg67iU66GdIOu2gOuqqCDrhbjrk5xcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBibG9ja1BhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIDQpIOu4lOuhnSDtlITrpqztjLlcclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGJsb2NrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAvLyA1KSBOZXh0L1NraXAg67KE7Yq8XHJcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICBuZXh0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAvLyA2KSBTY29yZSDroIjsnbTruJRcclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAvLyA3KSBUSU1FT1VUIO2RnOyLnOyaqSDroIjsnbTruJRcclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgdGltZW91dExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIC8vIDgpIOuCqOydgCDsi5zqsIQg7ZGc7Iuc7JqpIOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICB0aW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgLy8g66as7Iqk7Yq466GcIOuPjOyVhOqwgOq4sCDrsoTtirwgXHJcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbikgZXhpdEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgY29ycmVjdENvdW50OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBhbnN3ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLyDsoITssrQg6rKM7J6EIOyLnOqwhCAo7LSIKVxyXG4gIHByaXZhdGUgdGltZUxlZnQ6IG51bWJlciA9IDYwO1xyXG5cclxuICAvLyB57LaVKOuGkuydtCnrp4jri6Qg7IKs7Jqp7ZWgIOyDieyDgVxyXG4gIHByaXZhdGUgbGF5ZXJDb2xvcnM6IGNjLkNvbG9yW10gPSBbXHJcbiAgICBjYy5jb2xvcigxMDAsIDE3MCwgMjU1KSwgIC8vIHk9MFxyXG4gICAgY2MuY29sb3IoMjU1LCAxMDAsIDEwMCksICAvLyB5PTFcclxuICAgIGNjLmNvbG9yKDEwMCwgMjU1LCAxMDApLCAgLy8geT0yXHJcbiAgICBjYy5jb2xvcigyNTUsIDI1NSwgMTAwKSwgIC8vIHk9M1xyXG4gIF07XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgIC8vIE5leHQvU2tpcCDrsoTtirwg7YG066atXHJcbiAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMubmV4dFF1ZXN0aW9uLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTY29yZSDstIjquLDtmZRcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkge1xyXG4gICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5zY29yZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRJTUVPVVQg66CI7J2067iUIOyIqOq4sOq4sFxyXG4gICAgaWYgKHRoaXMudGltZW91dExhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g64Ko7J2AIOyLnOqwhCDroIjsnbTruJQg7LSI6riw7ZmUXHJcbiAgICB0aGlzLnRpbWVMZWZ0ID0gMTAwO1xyXG4gICAgaWYgKHRoaXMudGltZUxhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IGAke3RoaXMudGltZUxlZnR9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsoITssrQg6rKM7J6EIDEwMOy0iCDsubTsmrTtirjri6TsmrQg7Iuc7J6RXHJcbiAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuXHJcbiAgICAvLyDssqsg66y47KCcIOyDneyEsVxyXG4gICAgdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvKiogMTAw7LSIIO2DgOydtOuouCDsi5zsnpEgKi9cclxuICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XHJcbiAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lcik7XHJcbiAgICB0aGlzLnRpbWVMZWZ0ID0gMTAwO1xyXG4gICAgaWYgKHRoaXMudGltZUxhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IGAke3RoaXMudGltZUxlZnR9YDtcclxuICAgIH1cclxuICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMSk7XHJcbiAgfVxyXG5cclxuICAvKiogMey0iOuniOuLpCDtmLjstpzrkJjslrQg64Ko7J2AIOyLnOqwhOydhCDqsLHsi6AgKi9cclxuICBwcml2YXRlIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgdGhpcy50aW1lTGVmdC0tO1xyXG4gICAgaWYgKHRoaXMudGltZUxhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IGAke3RoaXMudGltZUxlZnR9YDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbWVMZWZ0IDw9IDApIHtcclxuICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIpO1xyXG4gICAgICB0aGlzLm9uVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOyghOyytCDsi5zqsITsnbQg64ukIOuQkOydhCDrlYwg7Zi47LacICovXHJcbiAgcHJpdmF0ZSBvblRpbWVvdXQoKSB7XHJcbiAgICAvLyDigJxUSU1FT1VU4oCdIO2RnOyLnFxyXG4gICAgaWYgKHRoaXMudGltZW91dExhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy50aW1lb3V0TGFiZWwuc3RyaW5nID0gJ1RJTUVPVVQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOuqqOuToCDrsoTtirwg67mE7Zmc7ISx7ZmUXHJcbiAgICB0aGlzLm9wdGlvbkJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmludGVyYWN0YWJsZSA9IGZhbHNlKTtcclxuICAgIGlmICh0aGlzLm5leHRCdXR0b24pIHtcclxuICAgICAgdGhpcy5uZXh0QnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOqyjOyehCDsg4Htg5wg7KCA7J6lXHJcbiAgICBHYW1lU3RhdGUubGFzdEdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuICAgIEdhbWVTdGF0ZS5zY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICBHYW1lU3RhdGUuZ2FtZUlkID0gXCJibG9jay1jb3VudC1nYW1lXCI7IC8vIOybkO2VmOuKlCDsi53rs4TsnpBcclxuXHJcbiAgICAvLyDqsozsnoTsmKTrsoQg7JSs7Jy866GcIOydtOuPmVxyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZU92ZXJcIik7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIOyDiCDrrLjsoJwg7IOd7ISxICjsi5zqsITsnYAg6rOE7IaNIO2dkOumheuLiOuLpCkgKi9cclxuICBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xyXG4gICAgdGhpcy5hbnN3ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIE5leHQg67KE7Yq8IOugiOydtOu4lCDstIjquLDtmZRcclxuICAgIGlmICh0aGlzLm5leHRCdXR0b24pIHtcclxuICAgICAgY29uc3QgbGJsID0gdGhpcy5uZXh0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkhO1xyXG4gICAgICBsYmwuc3RyaW5nID0gJ+qxtOuEiOubsOq4sCc7XHJcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOqysOqzvCDroIjsnbTruJQg7LSI6riw7ZmUXHJcbiAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8vIOygleuLtSDqsJzsiJgg6rKw7KCVIOuwjyDruJTroZ0g67Cw7LmYXHJcbiAgICB0aGlzLmNvcnJlY3RDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSArIDE7XHJcbiAgICB0aGlzLnNwYXduQmxvY2tzKHRoaXMuY29ycmVjdENvdW50KTtcclxuXHJcbiAgICAvLyDrs7TquLAg7IS47YyFXHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldDxudW1iZXI+KFt0aGlzLmNvcnJlY3RDb3VudF0pO1xyXG4gICAgd2hpbGUgKG9wdGlvbnMuc2l6ZSA8IHRoaXMub3B0aW9uQnV0dG9ucy5sZW5ndGgpIHtcclxuICAgICAgb3B0aW9ucy5hZGQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICsgMSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0ID0gQXJyYXkuZnJvbShvcHRpb25zKTtcclxuICAgIHRoaXMuc2h1ZmZsZUFycmF5KGxpc3QpO1xyXG4gICAgdGhpcy5vcHRpb25CdXR0b25zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICBidG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgY29uc3QgbGJsID0gYnRuLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkhO1xyXG4gICAgICBsYmwuc3RyaW5nID0gbGlzdFtpXS50b1N0cmluZygpO1xyXG4gICAgICBidG4ubm9kZS5vZmYoJ2NsaWNrJyk7XHJcbiAgICAgIGJ0bi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMuY2hlY2tBbnN3ZXIobGlzdFtpXSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiog64u17JWIIO2ZleyduCAqL1xyXG4gIGNoZWNrQW5zd2VyKHNlbGVjdGVkOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmFuc3dlcmVkKSByZXR1cm47XHJcblxyXG4gICAgLy8g7KCV64u17J24IOqyveyasFxyXG4gICAgaWYgKHNlbGVjdGVkID09PSB0aGlzLmNvcnJlY3RDb3VudCkge1xyXG4gICAgICAgIHRoaXMuYW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJ/Cfjokg7KCV64u17J6F64uI64ukISc7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAyMDsgIC8vIOunnuyVmOydhCDrlYwgKzEwXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkge1xyXG4gICAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dEJ1dHRvbikge1xyXG4gICAgICAgICAgY29uc3QgbGJsID0gdGhpcy5uZXh0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkhO1xyXG4gICAgICAgICAgbGJsLnN0cmluZyA9ICfri6TsnYzsnLzroZwnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLy8g7Jik64u17J24IOqyveyasFxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgPSAn4p2MIO2LgOuguOyKteuLiOuLpCEnO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgLT0gMTA7ICAvLyDti4DroLjsnYQg65WMIC0xMFxyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlTGFiZWwpIHtcclxuICAgICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5leHRCdXR0b24pIHtcclxuICAgICAgICAgIGNvbnN0IGxibCA9IHRoaXMubmV4dEJ1dHRvbi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpITtcclxuICAgICAgICAgIGxibC5zdHJpbmcgPSAn6rG064SI65uw6riwJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDri6TsnYwg66y47KCc66GcIOuEmOyWtOqwgOq4sCAqL1xyXG4gIG5leHRRdWVzdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlUXVlc3Rpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDruJTroZ0g7IOd7ISxICYg7JWg64uI66mU7J207IWYIChjb2x1bW4tZmlyc3QsIHnstpUg6riw7KSAKSAqL1xyXG4gIHNwYXduQmxvY2tzKGNvdW50OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5ibG9ja1BhcmVudCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbR2FtZU1hbmFnZXJdIGJsb2NrUGFyZW506rCAIOyXsOqysOuQmOyngCDslYrslZjsirXri4jri6QhJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYmxvY2tQYXJlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICBjb25zdCBibG9ja1cgPSAxMDAsIGJsb2NrSCA9IDUwLCBibG9ja0QgPSA1MDtcclxuICAgIGNvbnN0IG1heFNpemUgPSA0LCBtYXhIZWlnaHQgPSA0O1xyXG5cclxuICAgIC8vIOqwgOuKpe2VnCAoeCx6KSDsooztkZwg7IWU7ZSMXHJcbiAgICBjb25zdCB4ekxpc3Q6IHsgeDogbnVtYmVyOyB6OiBudW1iZXIgfVtdID0gW107XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1heFNpemU7IHgrKykge1xyXG4gICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG1heFNpemU7IHorKykge1xyXG4gICAgICAgIHh6TGlzdC5wdXNoKHsgeCwgeiB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaHVmZmxlQXJyYXkoeHpMaXN0KTtcclxuXHJcbiAgICAvLyDsu6zrn7wg64uo7JyE66GcIHk9MOKGkjHihpLigKYg7LGE7Jqw6riwXHJcbiAgICB0eXBlIFBvcyA9IHsgeDogbnVtYmVyOyB6OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgY29uc3QgcGxhY2VkQ29vcmRzOiBQb3NbXSA9IFtdO1xyXG4gICAgbGV0IHBsYWNlZCA9IDA7XHJcbiAgICBvdXRlcjogZm9yIChjb25zdCB7IHgsIHogfSBvZiB4ekxpc3QpIHtcclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXhIZWlnaHQgJiYgcGxhY2VkIDwgY291bnQ7IHkrKykge1xyXG4gICAgICAgIHBsYWNlZENvb3Jkcy5wdXNoKHsgeCwgeiwgeSB9KTtcclxuICAgICAgICBwbGFjZWQrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAocGxhY2VkID49IGNvdW50KSBicmVhayBvdXRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB57Li167OEIOq3uOujue2VkVxyXG4gICAgY29uc3QgbGF5ZXJzOiBQb3NbXVtdID0gW107XHJcbiAgICBsZXQgbWF4WSA9IDA7XHJcbiAgICBwbGFjZWRDb29yZHMuZm9yRWFjaChwID0+IHtcclxuICAgICAgbWF4WSA9IE1hdGgubWF4KG1heFksIHAueSk7XHJcbiAgICAgIGlmICghbGF5ZXJzW3AueV0pIGxheWVyc1twLnldID0gW107XHJcbiAgICAgIGxheWVyc1twLnldLnB1c2gocCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDslaDri4jrqZTsnbTshZgg7YyM652866+47YSwXHJcbiAgICBjb25zdCBkcm9wSCAgICA9IDUwMDtcclxuICAgIGNvbnN0IGRyb3BEdXIgID0gMC4xNTtcclxuICAgIGNvbnN0IGxheWVyR2FwID0gZHJvcER1ciArIDAuMDg7XHJcbiAgICBjb25zdCBpdGVtR2FwICA9IDAuMDU7XHJcblxyXG4gICAgLy8geT0w4oaSMeKGkuKApiDsiJzshJzrjIDroZwg65ao7Ja065yo66as6riwXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSBtYXhZOyB5KyspIHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBsYXllcnNbeV0gfHwgW107XHJcbiAgICAgIGxheWVyLmZvckVhY2goKHAsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tQcmVmYWIpO1xyXG4gICAgICAgIGJsb2NrLnBhcmVudCA9IHRoaXMuYmxvY2tQYXJlbnQ7XHJcbiAgICAgICAgYmxvY2suekluZGV4ID0gcC54ICsgcC56ICsgcC55ICogMTA7XHJcblxyXG4gICAgICAgIC8vIOyVhOydtOyGjOuplO2KuOumrSDrqqntkZwg7JyE7LmYXHJcbiAgICAgICAgY29uc3QgaXNvWCAgID0gKHAueCAtIHAueikgKiAoYmxvY2tXIC8gMik7XHJcbiAgICAgICAgY29uc3QgZmxvb3JZID0gLTMwMDtcclxuICAgICAgICBjb25zdCBiYXNlWSAgPSBmbG9vclkgKyBibG9ja0ggLyAyO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFkgPSAtKHAueCArIHAueikgKiAoYmxvY2tIIC8gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBiYXNlWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIHAueSAqIGJsb2NrRDtcclxuXHJcbiAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oaXNvWCwgdGFyZ2V0WSArIGRyb3BILCAwKTtcclxuXHJcbiAgICAgICAgLy8g7Li166eI64ukIOyDieyDgSDsoIHsmqlcclxuICAgICAgICBjb25zdCBzcHIgPSBibG9jay5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSE7XHJcbiAgICAgICAgc3ByLm5vZGUuY29sb3IgPSB0aGlzLmxheWVyQ29sb3JzW3AueV0gPz8gY2MuY29sb3IoMjAwLCAyMDAsIDIwMCk7XHJcblxyXG4gICAgICAgIC8vIHR3ZWVuIOyVoOuLiOuplOydtOyFmFxyXG4gICAgICAgIGNvbnN0IHRvdGFsRGVsYXkgPSB5ICogbGF5ZXJHYXAgKyBpICogaXRlbUdhcDtcclxuICAgICAgICBjYy50d2VlbihibG9jaylcclxuICAgICAgICAgIC5kZWxheSh0b3RhbERlbGF5KVxyXG4gICAgICAgICAgLnRvKGRyb3BEdXIsIHsgcG9zaXRpb246IGNjLnYzKGlzb1gsIHRhcmdldFksIDApIH0sIHsgZWFzaW5nOiAnYm91bmNlT3V0JyB9KVxyXG4gICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOuwsOyXtCDshZTtlIwg7Jyg7Yu4ICovXHJcbiAgc2h1ZmZsZUFycmF5PFQ+KGFycjogVFtdKSB7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICBbYXJyW2ldLCBhcnJbal1dID0gW2FycltqXSwgYXJyW2ldXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRMaXN0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIuyLseq4gCDqsozsnoQg66as7Iqk7Yq466GcIOuPjOyVhOqwgOq4sFwiKTtcclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU2luZ2xlR2FtZUxpc3QnKTtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/CommonUI/LoginManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27642C/u3lNKZ4yxR6PTK/R', 'LoginManager');
// scripts/Controller/CommonUI/LoginManager.ts

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
        // 강제 캐스팅 또는 타입 체크
        if (typeof character === 'string') {
            this.selectedCharacter = character;
            cc.log("캐릭터 선택됨:", character);
        }
        else {
            cc.warn("잘못된 캐릭터 선택값:", character);
            this.selectedCharacter = '';
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcQ29tbW9uVUlcXExvZ2luTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTJIQztRQXpIQyxtQkFBYSxHQUFlLElBQUksQ0FBQztRQUdqQyxlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRXRCLHVCQUFpQixHQUFXLEVBQUUsQ0FBQzs7SUE2R3pDLENBQUM7SUEzR0MsNkJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN0QyxpQ0FBaUM7SUFDbkMsQ0FBQztJQUVILHdDQUFpQixHQUFqQixVQUFrQixLQUFlLEVBQUUsU0FBYztRQUMvQyxrQkFBa0I7UUFDbEIsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBS0Msd0NBQWlCLEdBQWpCO1FBQ0UsRUFBRSxDQUFDLEdB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LE1BQU0sQ0FBQztxREFDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ1U7SUFaWCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBMkhoQztJQUFELG1CQUFDO0NBM0hELEFBMkhDLENBM0h5QyxFQUFFLENBQUMsU0FBUyxHQTJIckQ7a0JBM0hvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICBuaWNrbmFtZUlucHV0OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBkb2dTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIHRpZ2VyU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICByYWJiaXRTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgcHJpdmF0ZSBzZWxlY3RlZENoYXJhY3Rlcjogc3RyaW5nID0gJyc7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc3RhcnRCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgLy8gY2MubG9nKFwiTG9naW5NYW5hZ2VyIGxvYWRlZFwiKTtcbiAgfVxuXG5vblNlbGVjdENoYXJhY3RlcihldmVudDogY2MuRXZlbnQsIGNoYXJhY3RlcjogYW55KSB7XG4gIC8vIOqwleygnCDsupDsiqTtjIUg65iQ64qUIO2DgOyehSDssrTtgaxcbiAgaWYgKHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICBjYy5sb2coXCLsupDrpq3thLAg7ISg7YOd65CoOlwiLCBjaGFyYWN0ZXIpOyBcbiAgfSBlbHNlIHtcbiAgICBjYy53YXJuKFwi7J6Y66q765CcIOy6kOumre2EsCDshKDtg53qsJI6XCIsIGNoYXJhY3Rlcik7XG4gICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlciA9ICcnO1xuICB9XG4gIHRoaXMuY2hlY2tGb3JtVmFsaWQoKTtcbn1cblxuXG5cblxuICBvbk5pY2tuYW1lQ2hhbmdlZCgpIHtcbiAgICBjYy5sb2coXCLri4nrhKTsnoQg7J6F66ClIOykkTpcIiwgdGhpcy5uaWNrbmFtZUlucHV0LnN0cmluZyk7XG4gICAgdGhpcy5jaGVja0Zvcm1WYWxpZCgpO1xuICB9XG5cbiAgY2hlY2tGb3JtVmFsaWQoKSB7XG4gICAgY29uc3QgaXNGaWxsZWQgPSB0aGlzLm5pY2tuYW1lSW5wdXQuc3RyaW5nLnRyaW0oKSAhPT0gJycgJiYgdGhpcy5zZWxlY3RlZENoYXJhY3RlciAhPT0gJyc7XG4gICAgdGhpcy5zdGFydEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBpc0ZpbGxlZDtcbiAgICAvLyBjYy5sb2coXCLtj7wg7Jyg7Zqo7ISxIOqygOyCrDpcIiwgaXNGaWxsZWQpO1xuICB9XG5cbiAgYXN5bmMgb25DbGlja1N0YXJ0KCkge1xuICAgIGNvbnN0IG5pY2tuYW1lID0gdGhpcy5uaWNrbmFtZUlucHV0LnN0cmluZy50cmltKCk7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gdGhpcy5zZWxlY3RlZENoYXJhY3RlcjtcblxuICAgIGNjLmxvZyhcIlN0YXJ0IOuyhO2KvCDtgbTrpq3rkKggLSDri4nrhKTsnoQ6XCIsIG5pY2tuYW1lLCBcIuy6kOumre2EsDpcIiwgY2hhcmFjdGVyKTtcblxuICAgIGlmICghbmlja25hbWUpIHtcbiAgICAgIGNjLmxvZyhcIuuLieuEpOyehOydhCDsnoXroKXtlbTso7zshLjsmpQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICBjYy5sb2coXCLsupDrpq3thLDrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gMS4g67iM65287Jqw7KCAIOqzoOycoCBJRCDsg53shLEgb3Ig6rCA7KC47Jik6riwXG4gICAgICBsZXQgYnJvd3NlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jyb3dzZXJJZCcpO1xuICAgICAgaWYgKCFicm93c2VySWQpIHtcbiAgICAgICAgYnJvd3NlcklkID0gdGhpcy5nZW5lcmF0ZUJyb3dzZXJJZCgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnJvd3NlcklkJywgYnJvd3NlcklkKTtcbiAgICAgICAgY2MubG9nKFwi7IOIIOu4jOudvOyasOyggCBJRCDsg53shLHrkKg6XCIsIGJyb3dzZXJJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYy5sb2coXCLquLDsobQg67iM65287Jqw7KCAIElEOlwiLCBicm93c2VySWQpO1xuICAgICAgfVxuXG4gICAgICAvLyAyLiDroZzqt7jsnbgg7JqU7LKtXG4gICAgICBjb25zdCBsb2dpblJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9sb2dpbicsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGJyb3dzZXJJZCB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNjLmxvZyhcIuuhnOq3uOyduCDsnZHri7Ug7IOB7YOcOlwiLCBsb2dpblJlcy5zdGF0dXMpO1xuICAgICAgaWYgKCFsb2dpblJlcy5vaykge1xuICAgICAgICBjYy5lcnJvcihcIuuhnOq3uOyduCDsi6TtjKg6XCIsIGF3YWl0IGxvZ2luUmVzLnRleHQoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9naW5EYXRhID0gYXdhaXQgbG9naW5SZXMuanNvbigpO1xuICAgICAgY29uc3Qgand0VG9rZW4gPSBsb2dpbkRhdGEudG9rZW47XG4gICAgICBjYy5sb2coXCJKV1Qg7Yag7YGwIOuwnOq4ieuQqDpcIiwgand0VG9rZW4pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dFRva2VuJywgand0VG9rZW4pO1xuXG4gICAgICAvLyAzLiDtlITroZztlYQg7KCA7J6lIOyalOyyrVxuICAgICAgY29uc3QgcHJvZmlsZVJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9zZXQtcHJvZmlsZScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2p3dFRva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuaWNrbmFtZSwgY2hhcmFjdGVyIH0pXG4gICAgICB9KTtcblxuICAgICAgY2MubG9nKFwi7ZSE66Gc7ZWEIOyggOyepSDsnZHri7Ug7IOB7YOcOlwiLCBwcm9maWxlUmVzLnN0YXR1cyk7XG4gICAgICBpZiAoIXByb2ZpbGVSZXMub2spIHtcbiAgICAgICAgY2MuZXJyb3IoXCLtlITroZztlYQg7KCA7J6lIOyLpO2MqDpcIiwgYXdhaXQgcHJvZmlsZVJlcy50ZXh0KCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNjLmxvZyhcIuuhnOq3uOyduCDrsI8g7ZSE66Gc7ZWEIOyggOyepSDsmYTro4xcIik7XG5cbiAgICAgIC8vIDQuIOqyjOyehCDsi5zsnpEgKOyUrCDsnbTrj5kg65OxKVxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNjLmVycm9yKFwi7JeQ65+sIOuwnOyDnTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQnJvd3NlcklkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYXJyYXkgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycmF5KS5tYXAoYiA9PiBiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgfVxufVxuIl19
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
var GameState_1 = require("../../Controller/CommonUI/GameState");
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
        _this.hammerSprite = null;
        // @property(cc.Prefab) hitParticlePrefab: cc.Prefab = null; 
        _this.timerDisplayPrefab = null;
        _this.scoreDisplayPrefab = null;
        _this.moleHitSprite = null;
        _this.goodMoleHitSprite = null;
        _this.hammerNode = null;
        _this.moleHoles = [];
        _this.holeStates = [];
        _this.score = 0;
        _this.timer = 60;
        _this.timerNode = null;
        _this.timerLabel = null;
        _this.scoreNode = null;
        _this.scoreLabel = null;
        _this.isGameOver = false;
        _this.moleSpawnCallback = null;
        return _this;
    }
    GameScene.prototype.start = function () {
        //게임 씬 시작 시 무조건 GameState.lastGameScene 업데이트 해서 나가기 버튼 정상 작동 유지 
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        this.moleHoles = [
            this.Hole1, this.Hole2, this.Hole3,
            this.Hole4, this.Hole5, this.Hole6,
            this.Hole7, this.Hole8, this.Hole9
        ];
        this.holeStates = new Array(this.moleHoles.length).fill(false);
        this.createHammer();
        this.score = 0;
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimerLabel();
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScoreLabel();
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
        this.hammerNode.anchorY = 0.2;
        this.hammerNode.active = false;
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
        this.scoreLabel.string = "" + this.score;
    };
    GameScene.prototype.updateTimerLabel = function () {
        this.timerLabel.string = "" + this.timer;
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
            var isGoodMole = Math.random() < 0.3;
            var mole = cc.instantiate(isGoodMole ? _this.molePrefabGood : _this.molePrefab);
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
                var sprite = mole.getComponent(cc.Sprite);
                if (sprite) {
                    sprite.spriteFrame = isGoodMole ? _this.goodMoleHitSprite : _this.moleHitSprite;
                }
                _this.score += isGoodMole ? -10 : 10;
                _this.updateScoreLabel();
                mole.off(cc.Node.EventType.TOUCH_END, onHit, _this);
                // 흔들리는 애니메이션
                cc.tween(mole)
                    .repeat(3, cc.tween()
                    .by(0.05, { angle: 15 })
                    .by(0.05, { angle: -30 })
                    .by(0.05, { angle: 15 }))
                    .delay(0.8) // 애니메이션 후 표정 유지 시간
                    .call(function () {
                    if (mole && mole.isValid) {
                        mole.destroy();
                        _this.holeStates[idx] = false;
                    }
                })
                    .start();
                // 파티클 효과 주석 처리
                // const hit = cc.instantiate(this.hitParticlePrefab);
                // hit.setPosition(mole.getPosition());
                // hole.addChild(hit);
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
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        GameState_1.default.score = this.score; // 두더지 게임 점수
        GameState_1.default.gameId = "Molegame"; // 백엔드에 저장될 ID
        cc.director.loadScene("GameOver");
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
        property(cc.SpriteFrame)
    ], GameScene.prototype, "hammerSprite", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameScene.prototype, "timerDisplayPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameScene.prototype, "scoreDisplayPrefab", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameScene.prototype, "moleHitSprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameScene.prototype, "goodMoleHitSprite", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXE1vbGVHYW1lXFxNb2xlR2FtZVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUN0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTBOQztRQXpOd0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0Isb0JBQWMsR0FBYyxJQUFJLENBQUMsQ0FBQyxTQUFTO1FBQ3RDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUM5RCw2REFBNkQ7UUFDeEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBQ3JDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFDckMsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUUzRCxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBQzFCLGdCQUFVLEdBQWMsRUFBRSxDQUFDO1FBQzNCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsdUJBQWlCLEdBQWEsSUFBSSxDQUFDOztJQXlML0MsQ0FBQztJQXZMRyx5QkFBSyxHQUFMO1FBQ0ksZ0VBQWdFO1FBQ2hFLG1CQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBRXRELElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNyQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsb0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsS0FBTyxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxLQUFPLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFBQSxpQkErRUM7UUE5RUcsSUFBSSxJQUFJLENBQUMsaUJBQWlCO1lBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDckIsSUFBSSxLQUFJLENBQUMsVUFBVTtnQkFBRSxPQUFPO1lBRTVCLElBQU0sU0FBUyxHQUFHLEtBQUksQ0FBQyxVQUFVO2lCQUM1QixHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQztpQkFDNUIsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFSLENBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE9BQU87WUFFbkMsSUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUN2QyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUU1QixJQUFNLEtBQUssR0FBRyxVQUFDLENBQXNCO2dCQUNqQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxVQUFVO29CQUFFLE9BQU87Z0JBRTVDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRWhDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLE1BQU0sRUFBRTtvQkFDUixNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDO2lCQUNqRjtnQkFFRCxLQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBRXhCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsQ0FBQztnQkFFbkQsYUFBYTtnQkFDYixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztxQkFDVCxNQUFNLENBQUMsQ0FBQyxFQUNMLEVBQUUsQ0FBQyxLQUFLLEVBQUU7cUJBQ0wsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztxQkFDdkIsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3FCQUN4QixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQy9CO3FCQUNBLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBbUI7cUJBQzlCLElBQUksQ0FBQztvQkFDRixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQ2hDO2dCQUNMLENBQUMsQ0FBQztxQkFDRCxLQUFLLEVBQUUsQ0FBQztnQkFFYixlQUFlO2dCQUNmLHNEQUFzRDtnQkFDdEQsdUNBQXVDO2dCQUN2QyxzQkFBc0I7WUFDMUIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxDQUFDO1lBRWxELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUMzRCxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNWLElBQUksQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ2hDO1lBQ0wsQ0FBQyxDQUFDO2lCQUNELEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsR0FBWTtRQUE3QixpQkFrQkM7UUFqQkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNwQixHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDbkIsUUFBUSxDQUNMLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQzNELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUNuRDthQUNBLFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUMzRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQ2pEO2FBQ0EsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsaUJBQWlCO1lBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLG1CQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ3RELG1CQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZO1FBQzFDLG1CQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLGNBQWM7UUFDN0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxJQUFJLE1BQU07WUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDNUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBeE5vQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFBNEI7SUFFN0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQXVCO0lBQ3RCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUF1QjtJQUN0QjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FBdUI7SUFDdEI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQXVCO0lBQ3RCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUF1QjtJQUN0QjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FBdUI7SUFDdEI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQXVCO0lBQ3RCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUF1QjtJQUN0QjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FBdUI7SUFFcEI7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQThCO0lBQzdCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUFrQztJQUM1QjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFBcUM7SUFFekM7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQXNDO0lBQ3JDO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUFzQztJQUVoQztRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFBc0M7SUFDckM7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0RBQTBDO0lBckJsRCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBME43QjtJQUFELGdCQUFDO0NBMU5ELEFBME5DLENBMU5zQyxFQUFFLENBQUMsU0FBUyxHQTBObEQ7a0JBMU5vQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlci9Db21tb25VSS9HYW1lU3RhdGVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBleGl0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGUyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlNjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU4OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlOTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgbW9sZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIG1vbGVQcmVmYWJHb29kOiBjYy5QcmVmYWIgPSBudWxsOyAvLyDsiJztlZwg65GQ642U7KeAXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIGhhbW1lclNwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYikgaGl0UGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7IFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgdGltZXJEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgc2NvcmVEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgbW9sZUhpdFNwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBnb29kTW9sZUhpdFNwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaGFtbWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1vbGVIb2xlczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGhvbGVTdGF0ZXM6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDYwO1xyXG4gICAgcHJpdmF0ZSB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBtb2xlU3Bhd25DYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8v6rKM7J6EIOyUrCDsi5zsnpEg7IucIOustOyhsOqxtCBHYW1lU3RhdGUubGFzdEdhbWVTY2VuZSDsl4XrjbDsnbTtirgg7ZW07IScIOuCmOqwgOq4sCDrsoTtirwg7KCV7IOBIOyekeuPmSDsnKDsp4AgXHJcbiAgICAgICAgR2FtZVN0YXRlLmxhc3RHYW1lU2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMubW9sZUhvbGVzID0gW1xyXG4gICAgICAgICAgICB0aGlzLkhvbGUxLCB0aGlzLkhvbGUyLCB0aGlzLkhvbGUzLFxyXG4gICAgICAgICAgICB0aGlzLkhvbGU0LCB0aGlzLkhvbGU1LCB0aGlzLkhvbGU2LFxyXG4gICAgICAgICAgICB0aGlzLkhvbGU3LCB0aGlzLkhvbGU4LCB0aGlzLkhvbGU5XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLmhvbGVTdGF0ZXMgPSBuZXcgQXJyYXkodGhpcy5tb2xlSG9sZXMubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUhhbW1lcigpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGltZXJEaXNwbGF5UHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy50aW1lck5vZGUpO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbCA9IHRoaXMudGltZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiVGltZXJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2NvcmVEaXNwbGF5UHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zY29yZU5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbCA9IHRoaXMuc2NvcmVOb2RlLmdldENoaWxkQnlOYW1lKFwiU2NvcmVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVMYWJlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZGVjcmVhc2VUaW1lciwgMSk7XHJcbiAgICAgICAgdGhpcy5zcGF3bk1vbGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSGFtbWVyKCkge1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZSA9IG5ldyBjYy5Ob2RlKFwiSGFtbWVyXCIpO1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuaGFtbWVyTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmhhbW1lclNwcml0ZTtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS56SW5kZXggPSA5OTk7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLnNldENvbnRlbnRTaXplKDIwMCwgMjAwKTtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuYW5jaG9yWCA9IDAuMjtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuYW5jaG9yWSA9IDAuMjtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVhc2VUaW1lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50aW1lci0tO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDw9IDApIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY29yZUxhYmVsKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGltZXJMYWJlbCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy50aW1lcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduTW9sZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9sZVNwYXduQ2FsbGJhY2spIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1vbGVTcGF3bkNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2xlU3Bhd25DYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gdGhpcy5ob2xlU3RhdGVzXHJcbiAgICAgICAgICAgICAgICAubWFwKCh2LCBpKSA9PiAoIXYgPyBpIDogLTEpKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpID0+IGkgIT09IC0xKTtcclxuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGF2YWlsYWJsZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGUubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhvbGUgPSB0aGlzLm1vbGVIb2xlc1tpZHhdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNHb29kTW9sZSA9IE1hdGgucmFuZG9tKCkgPCAwLjM7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbGUgPSBjYy5pbnN0YW50aWF0ZShpc0dvb2RNb2xlID8gdGhpcy5tb2xlUHJlZmFiR29vZCA6IHRoaXMubW9sZVByZWZhYik7XHJcbiAgICAgICAgICAgIG1vbGUubmFtZSA9IFwiTW9sZVwiO1xyXG4gICAgICAgICAgICBob2xlLmFkZENoaWxkKG1vbGUpO1xyXG4gICAgICAgICAgICBtb2xlLnNldFBvc2l0aW9uKDAsIC0xMzApO1xyXG4gICAgICAgICAgICBtb2xlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaG9sZVN0YXRlc1tpZHhdID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9uSGl0ID0gKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1vbGUuYWN0aXZlIHx8IHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gbW9sZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SGFtbWVyRWZmZWN0KGxvY2FsUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBtb2xlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGlzR29vZE1vbGUgPyB0aGlzLmdvb2RNb2xlSGl0U3ByaXRlIDogdGhpcy5tb2xlSGl0U3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gaXNHb29kTW9sZSA/IC0xMCA6IDEwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZUxhYmVsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9sZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBvbkhpdCwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g7Z2U65Ok66as64qUIOyVoOuLiOuplOydtOyFmFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obW9sZSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwZWF0KDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgwLjA1LCB7IGFuZ2xlOiAxNSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDUsIHsgYW5nbGU6IC0zMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDUsIHsgYW5nbGU6IDE1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjgpIC8vIOyVoOuLiOuplOydtOyFmCDtm4Qg7ZGc7KCVIOycoOyngCDsi5zqsIRcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2xlICYmIG1vbGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9sZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGVTdGF0ZXNbaWR4XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDtjIzti7DtgbQg7Zqo6rO8IOyjvOyEnSDsspjrpqxcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGhpdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGl0UGFydGljbGVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgLy8gaGl0LnNldFBvc2l0aW9uKG1vbGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBob2xlLmFkZENoaWxkKGhpdCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBtb2xlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgb25IaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4obW9sZSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgcG9zaXRpb246IGNjLnYzKDAsIC0yMCkgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDEuMClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9sZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgb25IaXQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2xlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob2xlU3RhdGVzW2lkeF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLm1vbGVTcGF3bkNhbGxiYWNrLCAwLjUsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SGFtbWVyRWZmZWN0KHBvczogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmhhbW1lck5vZGUpXHJcbiAgICAgICAgICAgIC5zZXQoeyBzY2FsZTogMS4wIH0pXHJcbiAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4wNSwgeyBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjA1LCB7IHBvc2l0aW9uOiBjYy52MygwLCAtMzApIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjEsIHsgc2NhbGU6IDEuMCB9LCB7IGVhc2luZzogJ2JvdW5jZU91dCcgfSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMzApIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW1tZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5tb2xlU3Bhd25DYWxsYmFjaykgdGhpcy51bnNjaGVkdWxlKHRoaXMubW9sZVNwYXduQ2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLm1vbGVIb2xlcy5mb3JFYWNoKGhvbGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2xlID0gaG9sZS5nZXRDaGlsZEJ5TmFtZShcIk1vbGVcIik7XHJcbiAgICAgICAgICAgIGlmIChtb2xlKSBtb2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6rKM7J6EIOyiheujjCFcIik7XHJcbiAgICAgICAgR2FtZVN0YXRlLmxhc3RHYW1lU2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XHJcbiAgICAgICAgR2FtZVN0YXRlLnNjb3JlID0gdGhpcy5zY29yZTsgLy8g65GQ642U7KeAIOqyjOyehCDsoJDsiJhcclxuICAgICAgICBHYW1lU3RhdGUuZ2FtZUlkID0gXCJNb2xlZ2FtZVwiOyAvLyDrsLHsl5Trk5zsl5Ag7KCA7J6l65CgIElEXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZU92ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZExpc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsi7HquIAg6rKM7J6EIOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLBcIik7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dhbWVDYW52YXMnKTtcclxuICAgICAgICBpZiAoY2FudmFzKSBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU2luZ2xlR2FtZUxpc3QnKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/CommonUI/MainMenuScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41bf0ewRo5Mm5+zTEYBxk9j', 'MainMenuScene');
// scripts/Controller/CommonUI/MainMenuScene.ts

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
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.singleButton = null;
        return _this;
    }
    MainMenu.prototype.onLoad = function () {
        var jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            console.warn('로그인이 필요합니다.');
            cc.director.loadScene('LoginScene'); // 로그인 씬으로 리다이렉트
            return;
        }
        console.log('인증 토큰 확인 완료. 메인 메뉴에 접근 허용');
        // 버튼 이벤트 등록
        this.singleButton.node.on('click', this.onClickSingle, this);
    };
    MainMenu.prototype.onClickSingle = function () {
        cc.log("싱글 게임 버튼 클릭됨. SingleGameList 씬으로 이동.");
        cc.director.loadScene("SingleGameList");
    };
    __decorate([
        property(cc.Button)
    ], MainMenu.prototype, "singleButton", void 0);
    MainMenu = __decorate([
        ccclass
    ], MainMenu);
    return MainMenu;
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcQ29tbW9uVUlcXE1haW5NZW51U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3QkM7UUFyQkcsa0JBQVksR0FBYyxJQUFJLENBQUM7O0lBcUJuQyxDQUFDO0lBbkJHLHlCQUFNLEdBQU47UUFDSSxJQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUUsZ0JBQWdCO1lBQ3RELE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV6QyxZQUFZO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQXBCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNXO0lBSGQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdCNUI7SUFBRCxlQUFDO0NBeEJELEFBd0JDLENBeEJxQyxFQUFFLENBQUMsU0FBUyxHQXdCakQ7a0JBeEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHNpbmdsZUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc3Qgand0VG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0VG9rZW4nKTtcbiAgICBcbiAgICAgICAgaWYgKCFqd3RUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMb2dpblNjZW5lJyk7ICAvLyDroZzqt7jsnbgg7JSs7Jy866GcIOumrOuLpOydtOugie2KuFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ+yduOymnSDthqDtgbAg7ZmV7J24IOyZhOujjC4g66mU7J24IOuplOuJtOyXkCDsoJHqt7wg7ZeI7JqpJyk7XG5cbiAgICAgICAgLy8g67KE7Yq8IOydtOuypO2KuCDrk7HroZ1cbiAgICAgICAgdGhpcy5zaW5nbGVCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tTaW5nbGUsIHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBvbkNsaWNrU2luZ2xlKCkge1xuICAgICAgICBjYy5sb2coXCLsi7HquIAg6rKM7J6EIOuyhO2KvCDtgbTrpq3rkKguIFNpbmdsZUdhbWVMaXN0IOyUrOycvOuhnCDsnbTrj5kuXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTaW5nbGVHYW1lTGlzdFwiKTtcbiAgICB9XG59XG4iXX0=
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
        _this.sequence_label = null;
        _this.cnt = 3; // 시작 문제 자리수
        _this.hideDelay = 1.5;
        _this.defaultHideDelay = 2;
        _this.minHideDelay = 0.1;
        _this.lastMilestone = 0; //
        return _this;
    }
    show_QnA_1 = show_QnA;
    show_QnA.prototype.start = function () {
        this.showNewQuestion();
    };
    // 문제 표시 및 방향 설정, 숨김 시간 조절
    show_QnA.prototype.showNewQuestion = function () {
        var _this = this;
        var roundIndex = show_QnA_1.correctCount % 3;
        this.hideDelay = 1.6 - (roundIndex * 0.2);
        show_QnA_1.isReverse = Math.random() < 0.5;
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
                _this.setButtonsInteractable(true);
            }
            if (show_QnA_1.isGameOver === true) {
                _this.setButtonsInteractable(false);
            }
        }, this.hideDelay);
    };
    // 문제 숫자 배열 생성 + 자리수 조절
    show_QnA.prototype.make_randnum = function () {
        show_QnA_1.qa = [];
        var candid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var milestone = Math.floor(show_QnA_1.correctCount / 3);
        if (milestone > this.lastMilestone) {
            this.cnt++;
            this.lastMilestone = milestone;
            this.hideDelay = this.defaultHideDelay;
        }
        for (var i = 0; i < this.cnt; i++) {
            var rand = candid[Math.floor(Math.random() * candid.length)];
            show_QnA_1.qa.push(rand);
        }
        return show_QnA_1.qa;
    };
    // 숫자 배열을 실제 숫자 값으로 출력
    show_QnA.prototype.print_randnum = function () {
        var numbers = this.make_randnum();
        var result = 0;
        for (var i = 0; i < numbers.length; i++) {
            result = result * 10 + numbers[i];
        }
        return result;
    };
    // 버튼 인터랙션 켜고 끄기
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
    show_QnA.isReverse = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUmV2ZXJzZWNvcnJlY3Rfc2NyaXB0c1xcUmV2ZXJzZWNvcnJlY3RfU2hvd19RbkEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvR0M7UUFsR0csa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFeEIsU0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVk7UUFDN0IsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFFM0IsbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFOztJQXFGekMsQ0FBQztpQkFwR29CLFFBQVE7SUFzQnpCLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDBCQUEwQjtJQUNuQixrQ0FBZSxHQUF0QjtRQUFBLGlCQTZCQztRQTVCRyxJQUFNLFVBQVUsR0FBRyxVQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUUxQyxVQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFekMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUcsU0FBVyxDQUFD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QUFDO1FBQ3JFLEtBQWdCLFVBQU8sRUFBUCxtQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTyxFQUFFO1lBQXBCLElBQUksR0FBRyxnQkFBQTtZQUNSLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksS0FBSyxFQUFFO2dCQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztTQUNKO0lBQ0wsQ0FBQzs7SUFsRk0scUJBQVksR0FBVyxDQUFDLENBQUM7SUFDekIsV0FBRSxHQUFhLEVBQUUsQ0FBQztJQUNsQixtQkFBVSxHQUFZLEtBQUssQ0FBQztJQUM1QixrQkFBUyxHQUFZLEtBQUssQ0FBQztJQWxCbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ2E7SUFSZixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0c1QjtJQUFELGVBQUM7Q0FwR0QsQUFvR0MsQ0FwR3FDLEVBQUUsQ0FBQyxTQUFTLEdBb0dqRDtrQkFwR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2hvd19RbkEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcmFuZG9tX2xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidXR0b25MYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNlcXVlbmNlX2xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjbnQ6IG51bWJlciA9IDM7IC8vIOyLnOyekSDrrLjsoJwg7J6Q66as7IiYXHJcbiAgICBwcml2YXRlIGhpZGVEZWxheTogbnVtYmVyID0gMS41O1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0SGlkZURlbGF5OiBudW1iZXIgPSAyO1xyXG4gICAgcHJpdmF0ZSBtaW5IaWRlRGVsYXk6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgICBwcml2YXRlIGxhc3RNaWxlc3RvbmU6IG51bWJlciA9IDA7IC8vXHJcblxyXG4gICAgc3RhdGljIGNvcnJlY3RDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBxYTogbnVtYmVyW10gPSBbXTtcclxuICAgIHN0YXRpYyBpc0dhbWVPdmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TmV3UXVlc3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDrrLjsoJwg7ZGc7IucIOuwjyDrsKntlqUg7ISk7KCVLCDsiKjquYAg7Iuc6rCEIOyhsOygiFxyXG4gICAgcHVibGljIHNob3dOZXdRdWVzdGlvbigpIHtcclxuICAgICAgICBjb25zdCByb3VuZEluZGV4ID0gc2hvd19RbkEuY29ycmVjdENvdW50ICUgMztcclxuICAgICAgICB0aGlzLmhpZGVEZWxheSA9IDEuNiAtIChyb3VuZEluZGV4ICogMC4yKTtcclxuXHJcbiAgICAgICAgc2hvd19RbkEuaXNSZXZlcnNlID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcclxuXHJcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gdGhpcy5wcmludF9yYW5kbnVtKCk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21fbGFiZWwuc3RyaW5nID0gYCR7cmFuZG9tTnVtfWA7XHJcbiAgICAgICAgdGhpcy5yYW5kb21fbGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0QnV0dG9uc0ludGVyYWN0YWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlcXVlbmNlX2xhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VfbGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZV9sYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbV9sYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VxdWVuY2VfbGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VfbGFiZWwuc3RyaW5nID0gc2hvd19RbkEuaXNSZXZlcnNlID8gXCLsl63rsKntlqVcIiA6IFwi7KCV67Cp7ZalXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlX2xhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uc0ludGVyYWN0YWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNob3dfUW5BLmlzR2FtZU92ZXIgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uc0ludGVyYWN0YWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzLmhpZGVEZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g66y47KCcIOyIq+yekCDrsLDsl7Qg7IOd7ISxICsg7J6Q66as7IiYIOyhsOygiFxyXG4gICAgbWFrZV9yYW5kbnVtKCk6IG51bWJlcltdIHtcclxuICAgICAgICBzaG93X1FuQS5xYSA9IFtdO1xyXG4gICAgICAgIGxldCBjYW5kaWQgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbGVzdG9uZSA9IE1hdGguZmxvb3Ioc2hvd19RbkEuY29ycmVjdENvdW50IC8gMyk7XHJcbiAgICAgICAgaWYgKG1pbGVzdG9uZSA+IHRoaXMubGFzdE1pbGVzdG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNudCsrO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RNaWxlc3RvbmUgPSBtaWxlc3RvbmU7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURlbGF5ID0gdGhpcy5kZWZhdWx0SGlkZURlbGF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmQgPSBjYW5kaWRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FuZGlkLmxlbmd0aCldO1xyXG4gICAgICAgICAgICBzaG93X1FuQS5xYS5wdXNoKHJhbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNob3dfUW5BLnFhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOyIq+yekCDrsLDsl7TsnYQg7Iuk7KCcIOyIq+yekCDqsJLsnLzroZwg7Lac66ClXHJcbiAgICBwcmludF9yYW5kbnVtKCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVycyA9IHRoaXMubWFrZV9yYW5kbnVtKCk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAqIDEwICsgbnVtYmVyc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDrsoTtirwg7J247YSw656Z7IWYIOy8nOqzoCDrgYTquLBcclxuICAgIHNldEJ1dHRvbnNJbnRlcmFjdGFibGUoc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25MYXlvdXQuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuQnV0dG9uKTtcclxuICAgICAgICBmb3IgKGxldCBidG4gb2YgYnV0dG9ucykge1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gc3RhdGU7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgYnRuLm5vZGUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLm5vZGUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/Single/SingleGameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '455feRVQPpGsLonevqW1Ijj', 'SingleGameOver');
// scripts/Controller/Single/SingleGameOver.ts

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
var GameState_1 = require("../CommonUI/GameState");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOverUI = /** @class */ (function (_super) {
    __extends(GameOverUI, _super);
    function GameOverUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.exitButton = null;
        _this.retryButton = null;
        return _this;
    }
    GameOverUI.prototype.onLoad = function () {
        if (this.exitButton) {
            this.exitButton.node.on('click', this.onExitClick, this);
        }
        if (this.retryButton) {
            this.retryButton.node.on('click', this.onRetryClick, this);
        }
        this.submitScoreToServer();
    };
    GameOverUI.prototype.onExitClick = function () {
        console.log("나가기 버튼 클릭 → SingleGameList 씬으로 이동");
        cc.director.loadScene("SingleGameList");
    };
    GameOverUI.prototype.onRetryClick = function () {
        var sceneToLoad = GameState_1.default.lastGameScene;
        if (sceneToLoad && sceneToLoad.length > 0) {
            cc.log("\uB2E4\uC2DC\uD558\uAE30 \u2192 " + sceneToLoad);
            cc.director.loadScene(sceneToLoad);
        }
        else {
            cc.warn("이전 씬 정보가 없습니다. 메인으로 이동");
            cc.director.loadScene("MainScene");
        }
    };
    GameOverUI.prototype.submitScoreToServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, response, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = localStorage.getItem('jwtToken');
                        if (!token) {
                            console.warn("JWT 토큰이 없어 점수 저장 불가");
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch('http://localhost:3000/score/submit', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': "Bearer " + token
                                },
                                body: JSON.stringify({
                                    gameId: GameState_1.default.gameId,
                                    score: GameState_1.default.score,
                                    mode: "single"
                                })
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        result = _a.sent();
                        if (response.ok) {
                            console.log("점수 저장 성공:", result);
                        }
                        else {
                            console.warn("점수 저장 실패:", result.message);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error("점수 저장 중 오류 발생:", error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Button)
    ], GameOverUI.prototype, "exitButton", void 0);
    __decorate([
        property(cc.Button)
    ], GameOverUI.prototype, "retryButton", void 0);
    GameOverUI = __decorate([
        ccclass
    ], GameOverUI);
    return GameOverUI;
}(cc.Component));
exports.default = GameOverUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcU2luZ2xlXFxTaW5nbGVHYW1lT3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFpRUM7UUEvREcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7O0lBNERsQyxDQUFDO0lBMURHLDJCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDSSxJQUFNLFdBQVcsR0FBRyxtQkFBUyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxFQUFFLENBQUMsR0FBRyxDQUFDLHFDQUFVLFdBQWEsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDbEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUssd0NBQW1CLEdBQXpCOzs7Ozs7d0JBQ1UsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUU7NEJBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzRCQUNwQyxzQkFBTzt5QkFDVjs7Ozt3QkFHb0IscUJBQU0sS0FBSyxDQUFDLG9DQUFvQyxFQUFFO2dDQUMvRCxNQUFNLEVBQUUsTUFBTTtnQ0FDZCxPQUFPLEVBQUU7b0NBQ0wsY0FBYyxFQUFFLGtCQUFrQjtvQ0FDbEMsZUFBZSxFQUFFLFlBQVUsS0FBTztpQ0FDckM7Z0NBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7b0NBQ2pCLE1BQU0sRUFBRSxtQkFBUyxDQUFDLE1BQU07b0NBQ3hCLEtBQUssRUFBRSxtQkFBUyxDQUFDLEtBQUs7b0NBQ3RCLElBQUksRUFBRSxRQUFRO2lDQUNqQixDQUFDOzZCQUNMLENBQUMsRUFBQTs7d0JBWEksUUFBUSxHQUFHLFNBV2Y7d0JBRWEscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBOUIsTUFBTSxHQUFHLFNBQXFCO3dCQUNwQyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7NEJBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7eUJBQ3BDOzZCQUFNOzRCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDN0M7Ozs7d0JBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFLLENBQUMsQ0FBQzs7Ozs7O0tBRTlDO0lBOUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDVTtJQUxiLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpRTlCO0lBQUQsaUJBQUM7Q0FqRUQsQUFpRUMsQ0FqRXVDLEVBQUUsQ0FBQyxTQUFTLEdBaUVuRDtrQkFqRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi9Db21tb25VSS9HYW1lU3RhdGVcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlclVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGV4aXRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHJldHJ5QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5leGl0QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmV4aXRCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uRXhpdENsaWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXRyeUJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5yZXRyeUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25SZXRyeUNsaWNrLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3VibWl0U2NvcmVUb1NlcnZlcigpO1xuICAgIH1cblxuICAgIG9uRXhpdENsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuuCmOqwgOq4sCDrsoTtirwg7YG066atIOKGkiBTaW5nbGVHYW1lTGlzdCDslKzsnLzroZwg7J2064+ZXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTaW5nbGVHYW1lTGlzdFwiKTtcbiAgICB9XG5cbiAgICBvblJldHJ5Q2xpY2soKSB7XG4gICAgICAgIGNvbnN0IHNjZW5lVG9Mb2FkID0gR2FtZVN0YXRlLmxhc3RHYW1lU2NlbmU7XG4gICAgICAgIGlmIChzY2VuZVRvTG9hZCAmJiBzY2VuZVRvTG9hZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjYy5sb2coYOuLpOyLnO2VmOq4sCDihpIgJHtzY2VuZVRvTG9hZH1gKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZVRvTG9hZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKFwi7J207KCEIOyUrCDsoJXrs7TqsIAg7JeG7Iq164uI64ukLiDrqZTsnbjsnLzroZwg7J2064+ZXCIpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc3VibWl0U2NvcmVUb1NlcnZlcigpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0VG9rZW4nKTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiSldUIO2GoO2BsOydtCDsl4bslrQg7KCQ7IiYIOyggOyepSDrtojqsIBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Njb3JlL3N1Ym1pdCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiBHYW1lU3RhdGUuZ2FtZUlkLFxuICAgICAgICAgICAgICAgICAgICBzY29yZTogR2FtZVN0YXRlLnNjb3JlLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuygkOyImCDsoIDsnqUg7ISx6rO1OlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLsoJDsiJgg7KCA7J6lIOyLpO2MqDpcIiwgcmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuygkOyImCDsoIDsnqUg7KSRIOyYpOulmCDrsJzsg506XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
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
var Rottenacorn_game_init_1 = require("./Rottenacorn_game_init");
var RottenacornGameLogic = /** @class */ (function (_super) {
    __extends(RottenacornGameLogic, _super);
    function RottenacornGameLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.acornManager = null;
        _this.frontbutton = null;
        _this.backbutton = null;
        _this.choicebutton = null;
        _this.timerLabel = null;
        _this.scoreLabel = null;
        _this.timeLimit = 60;
        _this.sign = null;
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
        (_c = this.choicebutton) === null || _c === void 0 ? void 0 : _c.on(cc.Node.EventType.TOUCH_END, this.onConfirm, this);
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
        this.timerLabel.string = Math.ceil(this.remainingTime) + "\uCD08";
    };
    RottenacornGameLogic.prototype.updateScoreLabel = function () {
        this.scoreLabel.string = "" + this.score;
    };
    RottenacornGameLogic.prototype.startRound = function () {
        var _this = this;
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
                // selected_pic을 먼저 무조건 숨겨서 깜빡임 방지
                var selected_pic = acorn.getChildByName("selected_pic");
                if (selected_pic) {
                    selected_pic.active = false;
                }
                this.currentAcorns.push(acorn);
            }
        }
        this.selectedIndex = 0;
        this.frontbutton.pauseSystemEvents(true);
        this.backbutton.pauseSystemEvents(true);
        this.choicebutton.pauseSystemEvents(true);
        // 1초 후 선택된 도토리만 selected_pic을 표시
        this.scheduleOnce(function () {
            _this.updateSelectionVisual();
            _this.frontbutton.resumeSystemEvents(false);
            _this.backbutton.resumeSystemEvents(false);
            _this.choicebutton.resumeSystemEvents(false);
        }, 1);
    };
    RottenacornGameLogic.prototype.updateSelectionVisual = function () {
        for (var i = 0; i < this.currentAcorns.length; i++) {
            var acorn = this.currentAcorns[i];
            var selected_pic = acorn.getChildByName("selected_pic");
            if (selected_pic) {
                // 현재 선택된 인덱스면 보이고, 아니면 숨기기
                selected_pic.active = (i === this.selectedIndex);
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
        else { // 틀렸을 경우 
            this.frontbutton.pauseSystemEvents(true);
            this.backbutton.pauseSystemEvents(true);
            this.choicebutton.pauseSystemEvents(true);
            this.sign.wrong_sign.active = true;
            this.scheduleOnce(function () {
                _this.sign.wrong_sign.active = false;
                _this.frontbutton.resumeSystemEvents(true);
                _this.backbutton.resumeSystemEvents(true);
                _this.choicebutton.resumeSystemEvents(true);
                _this.startRound();
            }, 1);
            return;
        }
        if (this.selectedIndices.size === this.rottenIndices.length) { //맞았을 경우
            this.sign.correct_sign.active = true;
            this.frontbutton.pauseSystemEvents(true);
            this.backbutton.pauseSystemEvents(true);
            this.choicebutton.pauseSystemEvents(true);
            this.scheduleOnce(function () {
                _this.sign.correct_sign.active = false;
                _this.frontbutton.resumeSystemEvents(true);
                _this.backbutton.resumeSystemEvents(true);
                _this.choicebutton.resumeSystemEvents(true);
                _this.handleCorrectAnswer(); // 다음 문제로 진행
            }, 1); // 1초 후 실행
            return;
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
        this.choicebutton.active = false;
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
    ], RottenacornGameLogic.prototype, "choicebutton", void 0);
    __decorate([
        property(cc.Label)
    ], RottenacornGameLogic.prototype, "timerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], RottenacornGameLogic.prototype, "scoreLabel", void 0);
    __decorate([
        property
    ], RottenacornGameLogic.prototype, "timeLimit", void 0);
    __decorate([
        property(Rottenacorn_game_init_1.default)
    ], RottenacornGameLogic.prototype, "sign", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUm90dGVuYWNvcm5fc2NyaXB0c1xcUm90dGVuYWNvcm5fZ2FtZV9sb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qyx5RUFBdUQ7QUFDdkQseURBQXVDO0FBQ3ZDLGlFQUErQztBQUcvQztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQW1QQztRQWhQRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR2QsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUM5QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixxQkFBZSxHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDOztJQTRNckQsQ0FBQztJQTFNRyxxQ0FBTSxHQUFOOztRQUNJLE1BQUEsSUFBSSxDQUFDLFdBQVcsMENBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMs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Q0FBQyxDQUFDLFFBQUEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQUEsQ0FBNkI7U0FDdkQ7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUEvT0Q7UUFEQyxRQUFRLENBQUMsbUNBQVksQ0FBQzs4REFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4REFDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NERBQ1M7SUFHNUI7UUFEQyxRQUFROzJEQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLCtCQUFRLENBQUM7c0RBQ0c7SUF4Qkwsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0FtUHhDO0lBQUQsMkJBQUM7Q0FuUEQsQUFtUEMsQ0FuUGlELEVBQUUsQ0FBQyxTQUFTLEdBbVA3RDtrQkFuUG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5pbXBvcnQgQWNvcm5NYW5hZ2VyIGZyb20gXCIuL1JvdHRlbmFjb3JuX2Fjb3JuX21hbmFnZXJcIjtcclxuaW1wb3J0IEFjb3JuIGZyb20gXCIuL1JvdHRlbmFjb3JuX2Fjb3JuXCJcclxuaW1wb3J0IEdhbWVJbml0IGZyb20gXCIuL1JvdHRlbmFjb3JuX2dhbWVfaW5pdFwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90dGVuYWNvcm5HYW1lTG9naWMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShBY29ybk1hbmFnZXIpXHJcbiAgICBhY29ybk1hbmFnZXI6IEFjb3JuTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmcm9udGJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNob2ljZWJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRpbWVMaW1pdDogbnVtYmVyID0gNjA7XHJcblxyXG4gICAgQHByb3BlcnR5KEdhbWVJbml0KVxyXG4gICAgc2lnbjogR2FtZUluaXQgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlbWFpbmluZ1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGlzR2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBub3JtYWxDb3VudDogbnVtYmVyID0gMjtcclxuICAgIHByaXZhdGUgcm90dGVuQ291bnQ6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGNvcnJlY3RTdHJlYWs6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50QWNvcm5zOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJvdHRlbkluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkSW5kaWNlczogU2V0PG51bWJlcj4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZnJvbnRidXR0b24/Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbk5leHQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFja2J1dHRvbj8ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uUHJldiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5jaG9pY2VidXR0b24/Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNvbmZpcm0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nVGltZSA9IHRoaXMudGltZUxpbWl0O1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVMYWJlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0Um91bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdUaW1lIC09IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLnJlbWFpbmluZ1RpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBgJHtNYXRoLmNlaWwodGhpcy5yZW1haW5pbmdUaW1lKX3stIhgO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlTGFiZWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFJvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY29ybk1hbmFnZXIucmVzZXRBbGwoKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbCA9IHRoaXMubm9ybWFsQ291bnQgKyB0aGlzLnJvdHRlbkNvdW50O1xyXG4gICAgdGhpcy5yb3R0ZW5JbmRpY2VzID0gdGhpcy5waWNrUmFuZG9tSW5kaWNlcyh0b3RhbCwgdGhpcy5yb3R0ZW5Db3VudCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kaWNlcy5jbGVhcigpO1xyXG4gICAgdGhpcy5jdXJyZW50QWNvcm5zID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXNSb3R0ZW4gPSB0aGlzLnJvdHRlbkluZGljZXMuaW5jbHVkZXMoaSk7XHJcbiAgICAgICAgY29uc3QgYWNvcm4gPSB0aGlzLmFjb3JuTWFuYWdlci5nZXRBY29ybihpc1JvdHRlbik7XHJcblxyXG4gICAgICAgIGlmIChhY29ybikge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gLSgodG90YWwgLSAxKSAqIDYwKSArIGkgKiAxMjA7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSAxMDA7XHJcbiAgICAgICAgICAgIGFjb3JuLnNldFBvc2l0aW9uKHgsIHkpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VsZWN0ZWRfcGlj7J2EIOuovOyggCDrrLTsobDqsbQg7Iio6rKo7IScIOq5nOu5oeyehCDrsKnsp4BcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRfcGljID0gYWNvcm4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RlZF9waWNcIik7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZF9waWMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkX3BpYy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY29ybnMucHVzaChhY29ybik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIHRoaXMuZnJvbnRidXR0b24ucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB0aGlzLmJhY2tidXR0b24ucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB0aGlzLmNob2ljZWJ1dHRvbi5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgIC8vIDHstIgg7ZuEIOyEoO2DneuQnCDrj4TthqDrpqzrp4wgc2VsZWN0ZWRfcGlj7J2EIO2RnOyLnFxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uVmlzdWFsKCk7XHJcbiAgICAgICAgdGhpcy5mcm9udGJ1dHRvbi5yZXN1bWVTeXN0ZW1FdmVudHMoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYmFja2J1dHRvbi5yZXN1bWVTeXN0ZW1FdmVudHMoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY2hvaWNlYnV0dG9uLnJlc3VtZVN5c3RlbUV2ZW50cyhmYWxzZSk7XHJcbiAgICB9LCAxKTtcclxufVxyXG5cclxuXHJcbiAgICB1cGRhdGVTZWxlY3Rpb25WaXN1YWwoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRBY29ybnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYWNvcm4gPSB0aGlzLmN1cnJlbnRBY29ybnNbaV07XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZF9waWMgPSBhY29ybi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkX3BpY1wiKVxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9waWMpIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIOyEoO2DneuQnCDsnbjrjbHsiqTrqbQg67O07J206rOgLCDslYTri4jrqbQg7Iio6riw6riwXHJcbiAgICAgICAgICAgIHNlbGVjdGVkX3BpYy5hY3RpdmUgPSAoaSA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25OZXh0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY29ybnMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmN1cnJlbnRBY29ybnMubGVuZ3RoO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IChuZXh0SW5kZXggKyAxKSAlIHRvdGFsO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuc2VsZWN0ZWRJbmRpY2VzLmhhcyhuZXh0SW5kZXgpICYmIG5leHRJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uVmlzdWFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmV2KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY29ybnMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBwcmV2SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmN1cnJlbnRBY29ybnMubGVuZ3RoO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHByZXZJbmRleCA9IChwcmV2SW5kZXggLSAxICsgdG90YWwpICUgdG90YWw7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5zZWxlY3RlZEluZGljZXMuaGFzKHByZXZJbmRleCkgJiYgcHJldkluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBwcmV2SW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb25WaXN1YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm0oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjb3Jucy5sZW5ndGggPT09IDAgfHwgdGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kaWNlcy5oYXMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRpY2VzLmFkZChpbmRleCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQ29ycmVjdCA9IHRoaXMucm90dGVuSW5kaWNlcy5pbmNsdWRlcyhpbmRleCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmN1cnJlbnRBY29ybnNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGFjb3JuU2NyaXB0ID0gc2VsZWN0ZWQuZ2V0Q29tcG9uZW50KEFjb3JuKTtcclxuXHJcbiAgICAgICAgaWYgKGlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgICAvLyDsoJDsiJgg7LaU6rCAXHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZUxhYmVsKCk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8g67KM66CIIOuztOydtOq4sCDsnKDsp4BcclxuICAgICAgICAgICAgaWYgKGFjb3JuU2NyaXB0Py5idWdOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBhY29yblNjcmlwdC51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICBhY29yblNjcmlwdC5idWdOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGVsc2UgeyAvLyDti4DroLjsnYQg6rK97JqwIFxyXG4gICAgICAgICAgICB0aGlzLmZyb250YnV0dG9uLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tidXR0b24ucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlYnV0dG9uLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ24ud3Jvbmdfc2lnbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ24ud3Jvbmdfc2lnbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbnRidXR0b24ucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrYnV0dG9uLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvaWNlYnV0dG9uLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSb3VuZCgpO1xyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRpY2VzLnNpemUgPT09IHRoaXMucm90dGVuSW5kaWNlcy5sZW5ndGgpIHsgLy/rp57slZjsnYQg6rK97JqwXHJcbiAgICAgICAgICAgIHRoaXMuc2lnbi5jb3JyZWN0X3NpZ24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mcm9udGJ1dHRvbi5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrYnV0dG9uLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNob2ljZWJ1dHRvbi5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWduLmNvcnJlY3Rfc2lnbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbnRidXR0b24ucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrYnV0dG9uLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvaWNlYnV0dG9uLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29ycmVjdEFuc3dlcigpOyAvLyDri6TsnYwg66y47KCc66GcIOynhO2WiVxyXG4gICAgICAgICAgICB9LCAxKTsgLy8gMey0iCDtm4Qg7Iuk7ZaJXHJcbiAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNvcnJlY3RBbnN3ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0U3RyZWFrKys7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3RTdHJlYWsgPj0gMiAmJiB0aGlzLm5vcm1hbENvdW50IDwgNCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbENvdW50Kys7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0cmVhayA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm90dGVuQ291bnQgPCB0aGlzLm5vcm1hbENvdW50ICYmIHRoaXMucm90dGVuQ291bnQgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdHRlbkNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRSb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZEdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mcm9udGJ1dHRvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJhY2tidXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9pY2VidXR0b24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEFjb3JucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHBpY2tSYW5kb21JbmRpY2VzKHRvdGFsOiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgY29uc3QgaW5kaWNlcyA9IEFycmF5LmZyb20oQXJyYXkodG90YWwpLmtleXMoKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGljZXMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFtpbmRpY2VzW2ldLCBpbmRpY2VzW2pdXSA9IFtpbmRpY2VzW2pdLCBpbmRpY2VzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluZGljZXMuc2xpY2UoMCwgY291bnQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        _this.exitButton = null;
        _this.correct_sign = null;
        _this.wrong_sign = null;
        _this.currentTime = 120;
        _this.score = 0;
        return _this;
    }
    Game_init_1 = Game_init;
    Game_init.prototype.onLoad = function () {
        Game_init_1.instance = this;
        this.schedule(this.updateTimer, 1);
        this.wrong_sign.active = false;
        this.correct_sign.active = false;
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
    __decorate([
        property(cc.Node)
    ], Game_init.prototype, "correct_sign", void 0);
    __decorate([
        property(cc.Node)
    ], Game_init.prototype, "wrong_sign", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUmV2ZXJzZWNvcnJlY3Rfc2NyaXB0c1xcUmV2ZXJzZWNvcnJlY3RfR2FtZV9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRDtBQUMxQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWdEQztRQTlDRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBRXJCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQ25CLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBa0M5QixDQUFDO2tCQWhEb0IsU0FBUztJQWtCMUIsMEJBQU0sR0FBTjtRQUNJLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO0lBRW5DLENBQUM7SUFDRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCwrQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEMsaUNBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxXQUFhLENBQUM7SUFDcEQsQ0FBQztJQUVNLDRCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxLQUFPLENBQUM7SUFDOUMsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQyxDQUFDOztJQWhDSSxrQkFBUSxHQUFjLElBQUksQ0FBQztJQWJsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsaUNBQVEsQ0FBQzswQ0FDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQVpWLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FnRDdCO0lBQUQsZ0JBQUM7Q0FoREQsQUFnREMsQ0FoRHNDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RsRDtrQkFoRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvd19RbkEgZnJvbSBcIi4vUmV2ZXJzZWNvcnJlY3RfU2hvd19RbkFcIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZV9pbml0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVyX2xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZV9sYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNob3dfUW5BKVxyXG4gICAgcW5hOiBzaG93X1FuQSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgZXhpdEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29ycmVjdF9zaWduOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd3Jvbmdfc2lnbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAxMjA7XHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGluc3RhbmNlOiBHYW1lX2luaXQgPSBudWxsO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBHYW1lX2luaXQuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwxKTtcclxuICAgICAgICB0aGlzLndyb25nX3NpZ24uYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdF9zaWduLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVUaW1lcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lLS07XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICBzaG93X1FuQS5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5xbmEuc2V0QnV0dG9uc0ludGVyYWN0YWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXJfbGFiZWwuc3RyaW5nID0gYCR7dGhpcy5jdXJyZW50VGltZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTY29yZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNjb3JlX2xhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbG9hZExpc3QoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyLseq4gCDqsozsnoQg66as7Iqk7Yq466GcIOuPjOyVhOqwgOq4sFwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1NpbmdsZUdhbWVMaXN0Jyk7XHJcbiAgICAgIH1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUm90dGVuYWNvcm5fc2NyaXB0c1xcUm90dGVuYWNvcm5fYWNvcm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUEyQ0M7UUF4Q0csYUFBTyxHQUFZLElBQUksQ0FBQztRQUNoQixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGNBQVEsR0FBVyxHQUFHLENBQUM7O0lBc0NuQyxDQUFDO0lBcENVLHdCQUFRLEdBQWYsVUFBZ0IsUUFBaUI7UUFBakMsaUJBcUJDO1FBcEJHLFFBQVE7UUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDL0IsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNUO1NBQ0o7UUFFRCxXQUFXO1FBQ1gsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzFDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFeEMsS0FBSyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFFbkIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUN0QyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFcEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0MsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ007SUFIUCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMkN6QjtJQUFELFlBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ2tDLEVBQUUsQ0FBQyxTQUFTLEdBMkM5QztrQkEzQ29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNvcm4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnVnTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAzMDA7XHJcbiAgICBwcml2YXRlIG1pblNwZWVkOiBudW1iZXIgPSAxNTA7XHJcblxyXG4gICAgcHVibGljIGFjdGl2YXRlKGlzUm90dGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgLy8g67KM66CIIOuFuOy2nFxyXG4gICAgICAgIGlmICh0aGlzLmJ1Z05vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5idWdOb2RlLmFjdGl2ZSA9IGlzUm90dGVuO1xyXG4gICAgICAgICAgICBpZiAoaXNSb3R0ZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1Z05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g66y866asIOyGjeuPhCDsoIHsmqlcclxuICAgICAgICBjb25zdCByaWdpZCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAocmlnaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZ4ID0gTWF0aC5jb3MoYW5nbGUpICogdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgY29uc3QgdnkgPSBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLnNwZWVkO1xyXG5cclxuICAgICAgICAgICAgcmlnaWQubGluZWFyVmVsb2NpdHkgPSBjYy52Mih2eCwgdnkpO1xyXG4gICAgICAgICAgICByaWdpZC5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmlnaWQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFyaWdpZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IHJpZ2lkLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTcGVlZCA9IHZlbG9jaXR5Lm1hZygpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFNwZWVkIDwgdGhpcy5taW5TcGVlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB2ZWxvY2l0eS5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3RlZCA9IGRpcmVjdGlvbi5tdWwodGhpcy5taW5TcGVlZCk7XHJcbiAgICAgICAgICAgIHJpZ2lkLmxpbmVhclZlbG9jaXR5ID0gY29ycmVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
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
        _this.correct_sign = null;
        _this.wrong_sign = null;
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
        property(cc.Node)
    ], GameInit.prototype, "correct_sign", void 0);
    __decorate([
        property(cc.Node)
    ], GameInit.prototype, "wrong_sign", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU29uZ1xcUm90dGVuYWNvcm5fc2NyaXB0c1xcUm90dGVuYWNvcm5fZ2FtZV9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUJDO1FBbkJHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQWMsSUFBSSxDQUFDOztJQWFqQyxDQUFDO0lBWEcseUJBQU0sR0FBTjtRQUNJLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLGtFQUFrRTtJQUN0RSxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUztJQVJaLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxQjVCO0lBQUQsZUFBQztDQXJCRCxBQXFCQyxDQXJCcUMsRUFBRSxDQUFDLFNBQVMsR0FxQmpEO2tCQXJCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5pdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYWNvcm5QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvcnJlY3Rfc2lnbjogY2MuTm9kZT0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd3Jvbmdfc2lnbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgZXhpdEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBtYW5hZ2VyLmdyYXZpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAvLyBtYW5hZ2VyLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGlzdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7Iux6riAIOqyjOyehCDrpqzsiqTtirjroZwg64+M7JWE6rCA6riwXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU2luZ2xlR2FtZUxpc3QnKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
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
var GameState_1 = require("../../Controller/CommonUI/GameState");
var ThreeMatchManager = /** @class */ (function (_super) {
    __extends(ThreeMatchManager, _super);
    function ThreeMatchManager() {
        // @property(cc.Label)
        // timerLabel: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Label)
        // scoreLabel: cc.Label = null;
        _this.timerDisplayPrefab = null;
        _this.scoreDisplayPrefab = null;
        _this.boardNode = null;
        _this.comboGauge = null;
        _this.feverSprite = null;
        _this.exitButton = null;
        _this.totalTime = 60;
        _this.currentTime = 60;
        _this.score = 0;
        _this.timerNode = null;
        _this.scoreNode = null;
        _this.timerLabel = null;
        _this.scoreLabel = null;
        _this.comboValue = 0;
        _this.comboMax = 300;
        _this.isFeverTime = false;
        return _this;
    }
    ThreeMatchManager.prototype.start = function () {
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        // 타이머 프리팹 인스턴스화
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimer();
        // 점수 프리팹 인스턴스화
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);
        // 나머지 초기화
        this.comboValue = 0;
        this.comboMax = 200;
        this.comboGauge.progress = 0;
        this.isFeverTime = false;
        this.feverSprite.active = false;
        this.schedule(this.updateTimer, 1);
    };
    ThreeMatchManager.prototype.updateTimer = function () {
        this.currentTime--;
        if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.unschedule(this.updateTimer);
            this.onGameOver();
        }
        this.timerLabel.string = "" + this.currentTime;
    };
    ThreeMatchManager.prototype.updateScore = function (amount) {
        this.score += amount;
        this.scoreLabel.string = "" + this.score;
        this.increaseComboGauge(amount);
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
        this.feverSprite.active = true; // 피버 UI 보여주기
        // 10초 후 종료
        this.scheduleOnce(function () {
            _this.endFeverTime();
        }, 10);
    };
    ThreeMatchManager.prototype.addMatchScore = function (matchCount) {
        var scoreToAdd = matchCount * 10;
        var finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
        this.updateScore(finalScore); // 콤보 게이지까지 처리됨
    };
    ThreeMatchManager.prototype.endFeverTime = function () {
        this.isFeverTime = false; // 피버타임 상태 false로
        this.comboValue = 0; // 현재 콤보 밸류, ui 초기화
        this.comboGauge.progress = 0;
        this.feverSprite.active = false; // 피버 UI 숨기기
    };
    ThreeMatchManager.prototype.onGameOver = function () {
        cc.log("게임 종료!");
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        GameState_1.default.score = this.score;
        GameState_1.default.gameId = "FruitPuzzle";
        cc.director.loadScene('GameOver');
    };
    ThreeMatchManager.prototype.loadList = function () {
        console.log("싱글 게임 리스트로 돌아가기");
        cc.director.loadScene("SingleGameList");
    };
    __decorate([
        property(cc.Prefab)
    ], ThreeMatchManager.prototype, "timerDisplayPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], ThreeMatchManager.prototype, "scoreDisplayPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeMatchManager.prototype, "boardNode", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ThreeMatchManager.prototype, "comboGauge", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeMatchManager.prototype, "feverSprite", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxpRUFBNEQ7QUFHNUQ7SUFBK0MscUNBQVk7SUFBM0Q7UUFDSSxzQkFBc0I7UUFDdEIsK0JBQStCO1FBRm5DLHFFQXdJQztRQXBJRyxzQkFBc0I7UUFDdEIsK0JBQStCO1FBRy9CLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFJckMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHckIsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVksS0FBSyxDQUFDOztJQWdHekMsQ0FBQztJQTdGRyxpQ0FBSyxHQUFMO1FBQ0ksbUJBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDdEQsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMs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LE1BQU0sQ0FBQztpRUFDaUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpRUFDaUI7SUFJckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lEQUNTO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDUztJQXhCWixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXdJckM7SUFBRCx3QkFBQztDQXhJRCxBQXdJQyxDQXhJOEMsRUFBRSxDQUFDLFNBQVMsR0F3STFEO2tCQXhJb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFRocmVlTWF0Y2hCb2FyZCBmcm9tIFwiLi8zTWF0Y2hCb2FyZFwiO1xyXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi8uLi9Db250cm9sbGVyL0NvbW1vblVJL0dhbWVTdGF0ZVwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVNYXRjaE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgLy8gdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIC8vIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdGltZXJEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzY29yZURpc3BsYXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm9hcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBjb21ib0dhdWdlOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmZXZlclNwcml0ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGV4aXRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgdG90YWxUaW1lOiBudW1iZXIgPSA2MDtcclxuICAgIHByaXZhdGUgY3VycmVudFRpbWU6IG51bWJlciA9IDYwO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb21ib1ZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb21ib01heDogbnVtYmVyID0gMzAwO1xyXG4gICAgcHJpdmF0ZSBpc0ZldmVyVGltZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBHYW1lU3RhdGUubGFzdEdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuICAgICAgICAvLyDtg4DsnbTrqLgg7ZSE66as7Yy5IOyduOyKpO2EtOyKpO2ZlFxyXG4gICAgICAgIHRoaXMudGltZXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aW1lckRpc3BsYXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnRpbWVyTm9kZSk7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsID0gdGhpcy50aW1lck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lckxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lcigpO1xyXG5cclxuICAgICAgICAvLyDsoJDsiJgg7ZSE66as7Yy5IOyduOyKpO2EtOyKpO2ZlFxyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZURpc3BsYXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnNjb3JlTm9kZSk7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsID0gdGhpcy5zY29yZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTY29yZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgwKTtcclxuXHJcbiAgICAgICAgLy8g64KY66i47KeAIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21ib01heCA9IDIwMDtcclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZldmVyU3ByaXRlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdXBkYXRlVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZS0tO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5jdXJyZW50VGltZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBhbW91bnQ7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgICAgICB0aGlzLmluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmV2ZXJUaW1lKSByZXR1cm47IC8vIO2UvOuyhO2DgOyehOykkeyXlCDqsozsnbTsp4Ag7JWI7Jis65286rCQ6rCQXHJcbiAgICBcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgKz0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbWJvVmFsdWUgPj0gdGhpcy5jb21ib01heCkgeyBcclxuICAgICAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gdGhpcy5jb21ib01heDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEZldmVyVGltZSgpOyAvLyDtmITsnqwg6rKM7J207KeAIOqwkuydtCDrp6XsiqTqsJLrs7Tri6Qg7YGs6rGw64KYIOqwmeyVhOyngOuptCDtlLzrsoTtg4DsnoQg66mU7ISc65OcIOyLpO2WiVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSB0aGlzLmNvbWJvVmFsdWUgLyB0aGlzLmNvbWJvTWF4OyAvLyB1aeyLpO2WiVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0RmV2ZXJUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmV2ZXJTcHJpdGUuYWN0aXZlID0gdHJ1ZTsgLy8g7ZS867KEIFVJIOuztOyXrOyjvOq4sFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyAxMOy0iCDtm4Qg7KKF66OMXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEZldmVyVGltZSgpO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWF0Y2hTY29yZShtYXRjaENvdW50OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHNjb3JlVG9BZGQgPSBtYXRjaENvdW50ICogMTA7XHJcbiAgICBjb25zdCBmaW5hbFNjb3JlID0gdGhpcy5pc0ZldmVyVGltZSA/IHNjb3JlVG9BZGQgKiAyIDogc2NvcmVUb0FkZDtcclxuICAgIHRoaXMudXBkYXRlU2NvcmUoZmluYWxTY29yZSk7IC8vIOy9pOuztCDqsozsnbTsp4DquYzsp4Ag7LKY66as65CoXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBlbmRGZXZlclRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IGZhbHNlOyAvLyDtlLzrsoTtg4DsnoQg7IOB7YOcIGZhbHNl66GcXHJcbiAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gMDsgLy8g7ZiE7J6sIOy9pOuztCDrsLjrpZgsIHVpIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSBmYWxzZTsgLy8g7ZS867KEIFVJIOyIqOq4sOq4sFxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25HYW1lT3ZlcigpIHtcclxuICAgICAgICBjYy5sb2coXCLqsozsnoQg7KKF66OMIVwiKTtcclxuICAgICAgICBHYW1lU3RhdGUubGFzdEdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuICAgICAgICBHYW1lU3RhdGUuc2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdGF0ZS5nYW1lSWQgPSBcIkZydWl0UHV6emxlXCI7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lT3ZlcicpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkTGlzdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7Iux6riAIOqyjOyehCDrpqzsiqTtirjroZwg64+M7JWE6rCA6riwXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNpbmdsZUdhbWVMaXN0XCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
