
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
var GameData_1 = require("./GameData"); // 글로벌 데이터를 관리하는 스크립트
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainMenuManager = /** @class */ (function (_super) {
    __extends(MainMenuManager, _super);
    function MainMenuManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startGameButton = null; // 에디터에서 게임 시작 버튼 노드를 연결
        return _this;
    }
    MainMenuManager.prototype.start = function () {
        // 게임 시작 시 글로벌 레벨 데이터를 1로 초기화 (MainScene 갔다오면 항상 1레벨부터 시작)
        GameData_1.default.currentLevel = 1;
        // 게임 시작 버튼 클릭 이벤트 연결
        this.startGameButton.on('click', this.onStartGame, this);
    };
    MainMenuManager.prototype.onStartGame = function () {
        // MazeScene으로 씬 전환
        cc.director.loadScene("MazeScene");
    };
    __decorate([
        property(cc.Node)
    ], MainMenuManager.prototype, "startGameButton", void 0);
    MainMenuManager = __decorate([
        ccclass
    ], MainMenuManager);
    return MainMenuManager;
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWFpbk1lbnVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHVDQUFrQyxDQUFDLHFCQUFxQjtBQUNsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQWdCQztRQWRHLHFCQUFlLEdBQVksSUFBSSxDQUFDLENBQUUsd0JBQXdCOztJQWM5RCxDQUFDO0lBWkcsK0JBQUssR0FBTDtRQUNJLDBEQUEwRDtRQUMxRCxrQkFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFMUIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksbUJBQW1CO1FBQ25CLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzREQUNjO0lBRmYsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWdCbkM7SUFBRCxzQkFBQztDQWhCRCxBQWdCQyxDQWhCNEMsRUFBRSxDQUFDLFNBQVMsR0FnQnhEO2tCQWhCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lRGF0YSBmcm9tIFwiLi9HYW1lRGF0YVwiOyAvLyDquIDroZzrsowg642w7J207YSw66W8IOq0gOumrO2VmOuKlCDsiqTtgazrpr3tirhcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHN0YXJ0R2FtZUJ1dHRvbjogY2MuTm9kZSA9IG51bGw7ICAvLyDsl5DrlJTthLDsl5DshJwg6rKM7J6EIOyLnOyekSDrsoTtirwg64W465Oc66W8IOyXsOqysFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOqyjOyehCDsi5zsnpEg7IucIOq4gOuhnOuyjCDroIjrsqgg642w7J207YSw66W8IDHroZwg7LSI6riw7ZmUIChNYWluU2NlbmUg6rCU64uk7Jik66m0IO2VreyDgSAx66CI67Ko67aA7YSwIOyLnOyekSlcclxuICAgICAgICBHYW1lRGF0YS5jdXJyZW50TGV2ZWwgPSAxO1xyXG5cclxuICAgICAgICAvLyDqsozsnoQg7Iuc7J6RIOuyhO2KvCDtgbTrpq0g7J2067Kk7Yq4IOyXsOqysFxyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLm9uKCdjbGljaycsIHRoaXMub25TdGFydEdhbWUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnRHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE1hemVTY2VuZeycvOuhnCDslKwg7KCE7ZmYXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWF6ZVNjZW5lXCIpO1xyXG4gICAgfVxyXG59Il19
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
        this.hammerNode.anchorY = 0.8;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXE1vbGVHYW1lXFxNb2xlR2FtZVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUN0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXVOQztRQXROd0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0Isb0JBQWMsR0FBYyxJQUFJLENBQUMsQ0FBQyxTQUFTO1FBQ3RDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUM5RCw2REFBNkQ7UUFDeEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBQ3JDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFDckMsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUUzRCxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBQzFCLGdCQUFVLEdBQWMsRUFBRSxDQUFDO1FBQzNCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGdCQUFV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QUFFLENBQUMsSUFBSSxDQUFDOzRDQUF1QjtJQUN0QjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FBdUI7SUFDdEI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQXVCO0lBQ3RCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUF1QjtJQUVwQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFBOEI7SUFDN0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQWtDO0lBQzVCO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUFxQztJQUV6QztRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFBc0M7SUFDckM7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQXNDO0lBRWhDO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUFzQztJQUNyQztRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3REFBMEM7SUFyQmxELFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1TjdCO0lBQUQsZ0JBQUM7Q0F2TkQsQUF1TkMsQ0F2TnNDLEVBQUUsQ0FBQyxTQUFTLEdBdU5sRDtrQkF2Tm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi8uLi9Db250cm9sbGVyL0NvbW1vblVJL0dhbWVTdGF0ZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIGV4aXRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGUzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlNDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU2OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlNzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTg6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBtb2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgbW9sZVByZWZhYkdvb2Q6IGNjLlByZWZhYiA9IG51bGw7IC8vIOyInO2VnCDrkZDrjZTsp4BcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgaGFtbWVyU3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKSBoaXRQYXJ0aWNsZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDsgXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSB0aW1lckRpc3BsYXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBzY29yZURpc3BsYXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBtb2xlSGl0U3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIGdvb2RNb2xlSGl0U3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBoYW1tZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgbW9sZUhvbGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgaG9sZVN0YXRlczogYm9vbGVhbltdID0gW107XHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gNjA7XHJcbiAgICBwcml2YXRlIHRpbWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2NvcmVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpc0dhbWVPdmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG1vbGVTcGF3bkNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2xlSG9sZXMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuSG9sZTEsIHRoaXMuSG9sZTIsIHRoaXMuSG9sZTMsXHJcbiAgICAgICAgICAgIHRoaXMuSG9sZTQsIHRoaXMuSG9sZTUsIHRoaXMuSG9sZTYsXHJcbiAgICAgICAgICAgIHRoaXMuSG9sZTcsIHRoaXMuSG9sZTgsIHRoaXMuSG9sZTlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuaG9sZVN0YXRlcyA9IG5ldyBBcnJheSh0aGlzLm1vbGVIb2xlcy5sZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSGFtbWVyKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aW1lckRpc3BsYXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnRpbWVyTm9kZSk7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsID0gdGhpcy50aW1lck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lckxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lckxhYmVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZURpc3BsYXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnNjb3JlTm9kZSk7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsID0gdGhpcy5zY29yZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTY29yZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZUxhYmVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5kZWNyZWFzZVRpbWVyLCAxKTtcclxuICAgICAgICB0aGlzLnNwYXduTW9sZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVIYW1tZXIoKSB7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlID0gbmV3IGNjLk5vZGUoXCJIYW1tZXJcIik7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5oYW1tZXJOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuaGFtbWVyU3ByaXRlO1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLnpJbmRleCA9IDk5OTtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuc2V0Q29udGVudFNpemUoMjAwLCAyMDApO1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5hbmNob3JYID0gMC4yO1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5hbmNob3JZID0gMC44O1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNyZWFzZVRpbWVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLnRpbWVyLS07XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lckxhYmVsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPD0gMCkgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlTGFiZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lckxhYmVsKCkge1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnRpbWVyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25Nb2xlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5tb2xlU3Bhd25DYWxsYmFjaykgdGhpcy51bnNjaGVkdWxlKHRoaXMubW9sZVNwYXduQ2FsbGJhY2spO1xyXG5cclxuICAgICAgICB0aGlzLm1vbGVTcGF3bkNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGUgPSB0aGlzLmhvbGVTdGF0ZXNcclxuICAgICAgICAgICAgICAgIC5tYXAoKHYsIGkpID0+ICghdiA/IGkgOiAtMSkpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGkgPT4gaSAhPT0gLTEpO1xyXG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gYXZhaWxhYmxlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZS5sZW5ndGgpXTtcclxuICAgICAgICAgICAgY29uc3QgaG9sZSA9IHRoaXMubW9sZUhvbGVzW2lkeF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc0dvb2RNb2xlID0gTWF0aC5yYW5kb20oKSA8IDAuMztcclxuICAgICAgICAgICAgY29uc3QgbW9sZSA9IGNjLmluc3RhbnRpYXRlKGlzR29vZE1vbGUgPyB0aGlzLm1vbGVQcmVmYWJHb29kIDogdGhpcy5tb2xlUHJlZmFiKTtcclxuICAgICAgICAgICAgbW9sZS5uYW1lID0gXCJNb2xlXCI7XHJcbiAgICAgICAgICAgIGhvbGUuYWRkQ2hpbGQobW9sZSk7XHJcbiAgICAgICAgICAgIG1vbGUuc2V0UG9zaXRpb24oMCwgLTEzMCk7XHJcbiAgICAgICAgICAgIG1vbGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ob2xlU3RhdGVzW2lkeF0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb25IaXQgPSAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghbW9sZS5hY3RpdmUgfHwgdGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBtb2xlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dIYW1tZXJFZmZlY3QobG9jYWxQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IG1vbGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gaXNHb29kTW9sZSA/IHRoaXMuZ29vZE1vbGVIaXRTcHJpdGUgOiB0aGlzLm1vbGVIaXRTcHJpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSBpc0dvb2RNb2xlID8gLTEwIDogMTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlTGFiZWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtb2xlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIG9uSGl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDtnZTrk6TrpqzripQg7JWg64uI66mU7J207IWYXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihtb2xlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBlYXQoMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDUsIHsgYW5nbGU6IDE1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC4wNSwgeyBhbmdsZTogLTMwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC4wNSwgeyBhbmdsZTogMTUgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuOCkgLy8g7JWg64uI66mU7J207IWYIO2bhCDtkZzsoJUg7Jyg7KeAIOyLnOqwhFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbGUgJiYgbW9sZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2xlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9sZVN0YXRlc1tpZHhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIO2MjO2LsO2BtCDtmqjqs7wg7KO87ISdIOyymOumrFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgaGl0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5oaXRQYXJ0aWNsZVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvLyBoaXQuc2V0UG9zaXRpb24obW9sZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIC8vIGhvbGUuYWRkQ2hpbGQoaGl0KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG1vbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBvbkhpdCwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbihtb2xlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBwb3NpdGlvbjogY2MudjMoMCwgLTIwKSB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMS4wKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2xlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9sZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBvbkhpdCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGVTdGF0ZXNbaWR4XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW9sZVNwYXduQ2FsbGJhY2ssIDAuNSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dIYW1tZXJFZmZlY3QocG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaGFtbWVyTm9kZSlcclxuICAgICAgICAgICAgLnNldCh7IHNjYWxlOiAxLjAgfSlcclxuICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjA1LCB7IHNjYWxlOiAxLjIgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuMDUsIHsgcG9zaXRpb246IGNjLnYzKDAsIC0zMCkgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMSwgeyBzY2FsZTogMS4wIH0sIHsgZWFzaW5nOiAnYm91bmNlT3V0JyB9KSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4xLCB7IHBvc2l0aW9uOiBjYy52MygwLCAzMCkgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbW1lck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLm1vbGVTcGF3bkNhbGxiYWNrKSB0aGlzLnVuc2NoZWR1bGUodGhpcy5tb2xlU3Bhd25DYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lckxhYmVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMubW9sZUhvbGVzLmZvckVhY2goaG9sZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbGUgPSBob2xlLmdldENoaWxkQnlOYW1lKFwiTW9sZVwiKTtcclxuICAgICAgICAgICAgaWYgKG1vbGUpIG1vbGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLqsozsnoQg7KKF66OMIVwiKTtcclxuICAgICAgICBHYW1lU3RhdGUubGFzdEdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuICAgICAgICBHYW1lU3RhdGUuc2NvcmUgPSB0aGlzLnNjb3JlOyAvLyDrkZDrjZTsp4Ag6rKM7J6EIOygkOyImFxyXG4gICAgICAgIEdhbWVTdGF0ZS5nYW1lSWQgPSBcIk1vbGVnYW1lXCI7IC8vIOuwseyXlOuTnOyXkCDsoIDsnqXrkKAgSURcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lT3ZlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGlzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyLseq4gCDqsozsnoQg66as7Iqk7Yq466GcIOuPjOyVhOqwgOq4sFwiKTtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnR2FtZUNhbnZhcycpO1xyXG4gICAgICAgIGlmIChjYW52YXMpIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTaW5nbGVHYW1lTGlzdCcpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxCbG9ja0NvdW50R2FtZVxcQmxvY2tDb3VudEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMlJDO1FBMVJDLFlBQVk7UUFFWixtQkFBYSxHQUFnQixFQUFFLENBQUM7UUFFaEMsWUFBWTtRQUVaLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGNBQWM7UUFFZCxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFZO1FBRVosaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsa0JBQWtCO1FBRWxCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGVBQWU7UUFFZixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixxQkFBcUI7UUFFckIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsbUJBQW1CO1FBRW5CLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZ0JBQWdCO1FBQ0ssZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRWxDLGVBQWU7UUFDUCxjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRS9CLGtCQUFrQjtRQUNWLGlCQUFXLEdBQWU7WUFDaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxH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Y2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIDEpIOyYteyFmCDrsoTtirzrk6RcclxuICBAcHJvcGVydHkoW2NjLkJ1dHRvbl0pXHJcbiAgb3B0aW9uQnV0dG9uczogY2MuQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgLy8gMikg6rKw6rO8IOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICByZXN1bHRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAvLyAzKSDruJTroZ0g67aA66qoIOuFuOuTnFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJsb2NrUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gNCkg67iU66GdIO2UhOumrO2MuVxyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgYmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gIC8vIDUpIE5leHQvU2tpcCDrsoTtirxcclxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gIG5leHRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gIC8vIDYpIFNjb3JlIOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIC8vIDcpIFRJTUVPVVQg7ZGc7Iuc7JqpIOugiOydtOu4lFxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICB0aW1lb3V0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgLy8gOCkg64Ko7J2AIOyLnOqwhCDtkZzsi5zsmqkg66CI7J2067iUXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHRpbWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAvLyDrpqzsiqTtirjroZwg64+M7JWE6rCA6riwIOuyhO2KvCBcclxuICBAcHJvcGVydHkoY2MuQnV0dG9uKSBleGl0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBjb3JyZWN0Q291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGFuc3dlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIOyghOyytCDqsozsnoQg7Iuc6rCEICjstIgpXHJcbiAgcHJpdmF0ZSB0aW1lTGVmdDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAvLyB57LaVKOuGkuydtCnrp4jri6Qg7IKs7Jqp7ZWgIOyDieyDgVxyXG4gIHByaXZhdGUgbGF5ZXJDb2xvcnM6IGNjLkNvbG9yW10gPSBbXHJcbiAgICBjYy5jb2xvcigxMDAsIDE3MCwgMjU1KSwgIC8vIHk9MFxyXG4gICAgY2MuY29sb3IoMjU1LCAxMDAsIDEwMCksICAvLyB5PTFcclxuICAgIGNjLmNvbG9yKDEwMCwgMjU1LCAxMDApLCAgLy8geT0yXHJcbiAgICBjYy5jb2xvcigyNTUsIDI1NSwgMTAwKSwgIC8vIHk9M1xyXG4gIF07XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAvLyBOZXh0L1NraXAg67KE7Yq8IO2BtOumrVxyXG4gICAgaWYgKHRoaXMubmV4dEJ1dHRvbikge1xyXG4gICAgICB0aGlzLm5leHRCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm5leHRRdWVzdGlvbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2NvcmUg7LSI6riw7ZmUXHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIGlmICh0aGlzLnNjb3JlTGFiZWwpIHtcclxuICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUSU1FT1VUIOugiOydtOu4lCDsiKjquLDquLBcclxuICAgIGlmICh0aGlzLnRpbWVvdXRMYWJlbCkge1xyXG4gICAgICB0aGlzLnRpbWVvdXRMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOuCqOydgCDsi5zqsIQg66CI7J2067iUIOy0iOq4sO2ZlFxyXG4gICAgdGhpcy50aW1lTGVmdCA9IDEwMDtcclxuICAgIGlmICh0aGlzLnRpbWVMYWJlbCkge1xyXG4gICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnRpbWVMZWZ0fWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7KCE7LK0IOqyjOyehCAxMDDstIgg7Lm07Jq07Yq464uk7Jq0IOyLnOyekVxyXG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcblxyXG4gICAgLy8g7LKrIOusuOygnCDsg53shLFcclxuICAgIHRoaXMuZ2VuZXJhdGVRdWVzdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIDEwMOy0iCDtg4DsnbTrqLgg7Iuc7J6RICovXHJcbiAgcHJpdmF0ZSBzdGFydFRpbWVyKCkge1xyXG4gICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIpO1xyXG4gICAgdGhpcy50aW1lTGVmdCA9IDEwMDtcclxuICAgIGlmICh0aGlzLnRpbWVMYWJlbCkge1xyXG4gICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnRpbWVMZWZ0fWA7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIDHstIjrp4jri6Qg7Zi47Lac65CY7Ja0IOuCqOydgCDsi5zqsITsnYQg6rCx7IugICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVUaW1lcigpIHtcclxuICAgIHRoaXMudGltZUxlZnQtLTtcclxuICAgIGlmICh0aGlzLnRpbWVMYWJlbCkge1xyXG4gICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnRpbWVMZWZ0fWA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aW1lTGVmdCA8PSAwKSB7XHJcbiAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcclxuICAgICAgdGhpcy5vblRpbWVvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDsoITssrQg7Iuc6rCE7J20IOuLpCDrkJDsnYQg65WMIO2YuOy2nCAqL1xyXG4gIHByaXZhdGUgb25UaW1lb3V0KCkge1xyXG4gICAgLy8g4oCcVElNRU9VVOKAnSDtkZzsi5xcclxuICAgIGlmICh0aGlzLnRpbWVvdXRMYWJlbCkge1xyXG4gICAgICB0aGlzLnRpbWVvdXRMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMudGltZW91dExhYmVsLnN0cmluZyA9ICdUSU1FT1VUJztcclxuICAgIH1cclxuICAgIC8vIOuqqOuToCDrsoTtirwg67mE7Zmc7ISx7ZmUXHJcbiAgICB0aGlzLm9wdGlvbkJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmludGVyYWN0YWJsZSA9IGZhbHNlKTtcclxuICAgIGlmICh0aGlzLm5leHRCdXR0b24pIHtcclxuICAgICAgdGhpcy5uZXh0QnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOyDiCDrrLjsoJwg7IOd7ISxICjsi5zqsITsnYAg6rOE7IaNIO2dkOumheuLiOuLpCkgKi9cclxuICBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xyXG4gICAgdGhpcy5hbnN3ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIE5leHQg67KE7Yq8IOugiOydtOu4lCDstIjquLDtmZRcclxuICAgIGlmICh0aGlzLm5leHRCdXR0b24pIHtcclxuICAgICAgY29uc3QgbGJsID0gdGhpcy5uZXh0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkhO1xyXG4gICAgICBsYmwuc3RyaW5nID0gJ+qxtOuEiOubsOq4sCc7XHJcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOqysOqzvCDroIjsnbTruJQg7LSI6riw7ZmUXHJcbiAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8vIOygleuLtSDqsJzsiJgg6rKw7KCVIOuwjyDruJTroZ0g67Cw7LmYXHJcbiAgICB0aGlzLmNvcnJlY3RDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSArIDE7XHJcbiAgICB0aGlzLnNwYXduQmxvY2tzKHRoaXMuY29ycmVjdENvdW50KTtcclxuXHJcbiAgICAvLyDrs7TquLAg7IS47YyFXHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldDxudW1iZXI+KFt0aGlzLmNvcnJlY3RDb3VudF0pO1xyXG4gICAgd2hpbGUgKG9wdGlvbnMuc2l6ZSA8IHRoaXMub3B0aW9uQnV0dG9ucy5sZW5ndGgpIHtcclxuICAgICAgb3B0aW9ucy5hZGQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICsgMSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0ID0gQXJyYXkuZnJvbShvcHRpb25zKTtcclxuICAgIHRoaXMuc2h1ZmZsZUFycmF5KGxpc3QpO1xyXG4gICAgdGhpcy5vcHRpb25CdXR0b25zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICBidG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgY29uc3QgbGJsID0gYnRuLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkhO1xyXG4gICAgICBsYmwuc3RyaW5nID0gbGlzdFtpXS50b1N0cmluZygpO1xyXG4gICAgICBidG4ubm9kZS5vZmYoJ2NsaWNrJyk7XHJcbiAgICAgIGJ0bi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMuY2hlY2tBbnN3ZXIobGlzdFtpXSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiog64u17JWIIO2ZleyduCAqL1xyXG4gIGNoZWNrQW5zd2VyKHNlbGVjdGVkOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmFuc3dlcmVkKSByZXR1cm47XHJcblxyXG4gICAgLy8g7KCV64u17J24IOqyveyasFxyXG4gICAgaWYgKHNlbGVjdGVkID09PSB0aGlzLmNvcnJlY3RDb3VudCkge1xyXG4gICAgICAgIHRoaXMuYW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJ/Cfjokg7KCV64u17J6F64uI64ukISc7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAyMDsgIC8vIOunnuyVmOydhCDrlYwgKzEwXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkge1xyXG4gICAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dEJ1dHRvbikge1xyXG4gICAgICAgICAgY29uc3QgbGJsID0gdGhpcy5uZXh0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkhO1xyXG4gICAgICAgICAgbGJsLnN0cmluZyA9ICfri6TsnYzsnLzroZwnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLy8g7Jik64u17J24IOqyveyasFxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgPSAn4p2MIO2LgOuguOyKteuLiOuLpCEnO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgLT0gMTA7ICAvLyDti4DroLjsnYQg65WMIC0xMFxyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlTGFiZWwpIHtcclxuICAgICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5leHRCdXR0b24pIHtcclxuICAgICAgICAgIGNvbnN0IGxibCA9IHRoaXMubmV4dEJ1dHRvbi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpITtcclxuICAgICAgICAgIGxibC5zdHJpbmcgPSAn6rG064SI65uw6riwJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDri6TsnYwg66y47KCc66GcIOuEmOyWtOqwgOq4sCAqL1xyXG4gIG5leHRRdWVzdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlUXVlc3Rpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDruJTroZ0g7IOd7ISxICYg7JWg64uI66mU7J207IWYIChjb2x1bW4tZmlyc3QsIHnstpUg6riw7KSAKSAqL1xyXG4gIHNwYXduQmxvY2tzKGNvdW50OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5ibG9ja1BhcmVudCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbR2FtZU1hbmFnZXJdIGJsb2NrUGFyZW506rCAIOyXsOqysOuQmOyngCDslYrslZjsirXri4jri6QhJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYmxvY2tQYXJlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICBjb25zdCBibG9ja1cgPSAxMDAsIGJsb2NrSCA9IDUwLCBibG9ja0QgPSA1MDtcclxuICAgIGNvbnN0IG1heFNpemUgPSA0LCBtYXhIZWlnaHQgPSA0O1xyXG5cclxuICAgIC8vIOqwgOuKpe2VnCAoeCx6KSDsooztkZwg7IWU7ZSMXHJcbiAgICBjb25zdCB4ekxpc3Q6IHsgeDogbnVtYmVyOyB6OiBudW1iZXIgfVtdID0gW107XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1heFNpemU7IHgrKykge1xyXG4gICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG1heFNpemU7IHorKykge1xyXG4gICAgICAgIHh6TGlzdC5wdXNoKHsgeCwgeiB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaHVmZmxlQXJyYXkoeHpMaXN0KTtcclxuXHJcbiAgICAvLyDsu6zrn7wg64uo7JyE66GcIHk9MOKGkjHihpLigKYg7LGE7Jqw6riwXHJcbiAgICB0eXBlIFBvcyA9IHsgeDogbnVtYmVyOyB6OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgY29uc3QgcGxhY2VkQ29vcmRzOiBQb3NbXSA9IFtdO1xyXG4gICAgbGV0IHBsYWNlZCA9IDA7XHJcbiAgICBvdXRlcjogZm9yIChjb25zdCB7IHgsIHogfSBvZiB4ekxpc3QpIHtcclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXhIZWlnaHQgJiYgcGxhY2VkIDwgY291bnQ7IHkrKykge1xyXG4gICAgICAgIHBsYWNlZENvb3Jkcy5wdXNoKHsgeCwgeiwgeSB9KTtcclxuICAgICAgICBwbGFjZWQrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAocGxhY2VkID49IGNvdW50KSBicmVhayBvdXRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB57Li167OEIOq3uOujue2VkVxyXG4gICAgY29uc3QgbGF5ZXJzOiBQb3NbXVtdID0gW107XHJcbiAgICBsZXQgbWF4WSA9IDA7XHJcbiAgICBwbGFjZWRDb29yZHMuZm9yRWFjaChwID0+IHtcclxuICAgICAgbWF4WSA9IE1hdGgubWF4KG1heFksIHAueSk7XHJcbiAgICAgIGlmICghbGF5ZXJzW3AueV0pIGxheWVyc1twLnldID0gW107XHJcbiAgICAgIGxheWVyc1twLnldLnB1c2gocCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDslaDri4jrqZTsnbTshZgg7YyM652866+47YSwXHJcbiAgICBjb25zdCBkcm9wSCAgICA9IDUwMDtcclxuICAgIGNvbnN0IGRyb3BEdXIgID0gMC4xNTtcclxuICAgIGNvbnN0IGxheWVyR2FwID0gZHJvcER1ciArIDAuMDg7XHJcbiAgICBjb25zdCBpdGVtR2FwICA9IDAuMDU7XHJcblxyXG4gICAgLy8geT0w4oaSMeKGkuKApiDsiJzshJzrjIDroZwg65ao7Ja065yo66as6riwXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSBtYXhZOyB5KyspIHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBsYXllcnNbeV0gfHwgW107XHJcbiAgICAgIGxheWVyLmZvckVhY2goKHAsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tQcmVmYWIpO1xyXG4gICAgICAgIGJsb2NrLnBhcmVudCA9IHRoaXMuYmxvY2tQYXJlbnQ7XHJcbiAgICAgICAgYmxvY2suekluZGV4ID0gcC54ICsgcC56ICsgcC55ICogMTA7XHJcblxyXG4gICAgICAgIC8vIOyVhOydtOyGjOuplO2KuOumrSDrqqntkZwg7JyE7LmYXHJcbiAgICAgICAgY29uc3QgaXNvWCAgID0gKHAueCAtIHAueikgKiAoYmxvY2tXIC8gMik7XHJcbiAgICAgICAgY29uc3QgZmxvb3JZID0gLTMwMDtcclxuICAgICAgICBjb25zdCBiYXNlWSAgPSBmbG9vclkgKyBibG9ja0ggLyAyO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFkgPSAtKHAueCArIHAueikgKiAoYmxvY2tIIC8gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBiYXNlWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIHAueSAqIGJsb2NrRDtcclxuXHJcbiAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oaXNvWCwgdGFyZ2V0WSArIGRyb3BILCAwKTtcclxuXHJcbiAgICAgICAgLy8g7Li166eI64ukIOyDieyDgSDsoIHsmqlcclxuICAgICAgICBjb25zdCBzcHIgPSBibG9jay5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSE7XHJcbiAgICAgICAgc3ByLm5vZGUuY29sb3IgPSB0aGlzLmxheWVyQ29sb3JzW3AueV0gPz8gY2MuY29sb3IoMjAwLCAyMDAsIDIwMCk7XHJcblxyXG4gICAgICAgIC8vIHR3ZWVuIOyVoOuLiOuplOydtOyFmFxyXG4gICAgICAgIGNvbnN0IHRvdGFsRGVsYXkgPSB5ICogbGF5ZXJHYXAgKyBpICogaXRlbUdhcDtcclxuICAgICAgICBjYy50d2VlbihibG9jaylcclxuICAgICAgICAgIC5kZWxheSh0b3RhbERlbGF5KVxyXG4gICAgICAgICAgLnRvKGRyb3BEdXIsIHsgcG9zaXRpb246IGNjLnYzKGlzb1gsIHRhcmdldFksIDApIH0sIHsgZWFzaW5nOiAnYm91bmNlT3V0JyB9KVxyXG4gICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOuwsOyXtCDshZTtlIwg7Jyg7Yu4ICovXHJcbiAgc2h1ZmZsZUFycmF5PFQ+KGFycjogVFtdKSB7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICBbYXJyW2ldLCBhcnJbal1dID0gW2FycltqXSwgYXJyW2ldXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRMaXN0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIuyLseq4gCDqsozsnoQg66as7Iqk7Yq466GcIOuPjOyVhOqwgOq4sOq4sFwiKTtcclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU2luZ2xlR2FtZUxpc3QnKTtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcbiJdfQ==
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
        cc.director.loadScene("GameOver");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxpRUFBNEQ7QUFHNUQ7SUFBK0MscUNBQVk7SUFBM0Q7UUFDSSxzQkFBc0I7UUFDdEIsK0JBQStCO1FBRm5DLHFFQXVJQztRQW5JRyxzQkFBc0I7UUFDdEIsK0JBQStCO1FBRy9CLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFJckMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHckIsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVksS0FBSyxDQUFDOztJQStGekMsQ0FBQztJQTVGRyxpQ0FBSyxHQUFMO1FBQ0ksZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFD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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5REFDUztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1M7SUF4QlosaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0F1SXJDO0lBQUQsd0JBQUM7Q0F2SUQsQUF1SUMsQ0F2SThDLEVBQUUsQ0FBQyxTQUFTLEdBdUkxRDtrQkF2SW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBUaHJlZU1hdGNoQm9hcmQgZnJvbSBcIi4vM01hdGNoQm9hcmRcIjtcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlci9Db21tb25VSS9HYW1lU3RhdGVcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTWF0Y2hNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIC8vIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICAvLyBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRpbWVyRGlzcGxheVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2NvcmVEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJvYXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgY29tYm9HYXVnZTogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmV2ZXJTcHJpdGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBleGl0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gNjA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSA2MDtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29tYm9WYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY29tYm9NYXg6IG51bWJlciA9IDMwMDtcclxuICAgIHByaXZhdGUgaXNGZXZlclRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g7YOA7J2066i4IO2UhOumrO2MuSDsnbjsiqTthLTsiqTtmZRcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGltZXJEaXNwbGF5UHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy50aW1lck5vZGUpO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbCA9IHRoaXMudGltZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiVGltZXJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIoKTtcclxuXHJcbiAgICAgICAgLy8g7KCQ7IiYIO2UhOumrO2MuSDsnbjsiqTthLTsiqTtmZRcclxuICAgICAgICB0aGlzLnNjb3JlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2NvcmVEaXNwbGF5UHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zY29yZU5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbCA9IHRoaXMuc2NvcmVOb2RlLmdldENoaWxkQnlOYW1lKFwiU2NvcmVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUoMCk7XHJcblxyXG4gICAgICAgIC8vIOuCmOuouOyngCDstIjquLDtmZRcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY29tYm9NYXggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5jb21ib0dhdWdlLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxudXBkYXRlVGltZXIoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRUaW1lLS07XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIpO1xyXG4gICAgICAgIHRoaXMub25HYW1lT3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLmN1cnJlbnRUaW1lfWA7XHJcbn1cclxuXHJcbnVwZGF0ZVNjb3JlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNjb3JlICs9IGFtb3VudDtcclxuICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbiAgICB0aGlzLmluY3JlYXNlQ29tYm9HYXVnZShhbW91bnQpO1xyXG59XHJcblxyXG4gICAgaW5jcmVhc2VDb21ib0dhdWdlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGZXZlclRpbWUpIHJldHVybjsgLy8g7ZS867KE7YOA7J6E7KSR7JeUIOqyjOydtOyngCDslYjsmKzrnbzqsJDqsJBcclxuICAgIFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tYm9WYWx1ZSA+PSB0aGlzLmNvbWJvTWF4KSB7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSB0aGlzLmNvbWJvTWF4O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RmV2ZXJUaW1lKCk7IC8vIO2YhOyerCDqsozsnbTsp4Ag6rCS7J20IOunpeyKpOqwkuuztOuLpCDtgazqsbDrgpgg6rCZ7JWE7KeA66m0IO2UvOuyhO2DgOyehCDrqZTshJzrk5wg7Iuk7ZaJXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IHRoaXMuY29tYm9WYWx1ZSAvIHRoaXMuY29tYm9NYXg7IC8vIHVp7Iuk7ZaJXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRGZXZlclRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSB0cnVlOyAvLyDtlLzrsoQgVUkg67O07Jes7KO86riwXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8vIDEw7LSIIO2bhCDsooXro4xcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kRmV2ZXJUaW1lKCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYXRjaFNjb3JlKG1hdGNoQ291bnQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc2NvcmVUb0FkZCA9IG1hdGNoQ291bnQgKiAxMDtcclxuICAgIGNvbnN0IGZpbmFsU2NvcmUgPSB0aGlzLmlzRmV2ZXJUaW1lID8gc2NvcmVUb0FkZCAqIDIgOiBzY29yZVRvQWRkO1xyXG4gICAgdGhpcy51cGRhdGVTY29yZShmaW5hbFNjb3JlKTsgLy8g7L2k67O0IOqyjOydtOyngOq5jOyngCDsspjrpqzrkKhcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGVuZEZldmVyVGltZSgpIHtcclxuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gZmFsc2U7IC8vIO2UvOuyhO2DgOyehCDsg4Htg5wgZmFsc2XroZxcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSAwOyAvLyDtmITsnqwg7L2k67O0IOuwuOulmCwgdWkg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5jb21ib0dhdWdlLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLmZldmVyU3ByaXRlLmFjdGl2ZSA9IGZhbHNlOyAvLyDtlLzrsoQgVUkg7Iio6riw6riwXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkdhbWVPdmVyKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIuqyjOyehCDsooXro4whXCIpO1xyXG4gICAgICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgICAgIEdhbWVTdGF0ZS5zY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN0YXRlLmdhbWVJZCA9IFwiRnJ1aXRQdXp6bGVcIjtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWVPdmVyJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvYWRMaXN0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsi7HquIAg6rKM7J6EIOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLBcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZU92ZXJcIik7XHJcbiAgICB9XHJcbn1cclxuIl19
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
var GameData = /** @class */ (function () {
    function GameData() {
    }
    GameData.currentLevel = 1;
    return GameData;
}());
exports.default = GameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUV0RjtJQUFBO0lBRUUsQ0FBQztJQURlLHFCQUFZLEdBQVcsQ0FBQyxDQUFDO0lBQ3pDLGVBQUM7Q0FGSCxBQUVHLElBQUE7a0JBRmtCLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRGF0YSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gMTtcclxuICB9Il19
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
        _this.remainingTime = 0;
        _this.buttonMap = {};
        _this.colors = ["red", "yellow", "green", "blue"];
        return _this;
    }
    GameController.prototype.onLoad = function () {
        var _this = this;
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
    GameController.prototype.updateTimer = function () {
        this.remainingTime--;
        this.timerLabel.string = "\uB0A8\uC740 \uC2DC\uAC04: " + this.remainingTime + "s";
        if (this.remainingTime <= 0) {
            this.unschedule(this.tickCallback);
            this.onTimeUp();
        }
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxSZW1lbWJlckdhbWVcXFJlbWVtYmVyR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBa2dCQztRQTlmRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsY0FBYztRQUVkLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFnQjtRQUVoQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixjQUFjO1FBRWQsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFpQnJCLG1CQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBSTlCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBUTFCLGVBQVMsR0FBaUMsRUFBRSxDQUFDO1FBQzdDLFlBQU0sR0FBYSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztJQTJibEUsQ0FBQztJQXpiRywrQkFBTSxHQUFOO1FBQUEsaUJBbUNDO1FBbENHLEVBQUUsQ0FBQyxL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QUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDUTtJQUkzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNTO0lBSTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ1c7SUFJOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDUztJQXJDWixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBa2dCbEM7SUFBRCxxQkFBQztDQWxnQkQsQUFrZ0JDLENBbGdCMkMsRUFBRSxDQUFDLFNBQVMsR0FrZ0J2RDtrQkFsZ0JvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuPDw8PDw8PCBIRUFEXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHN0YXJ0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICByZWRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHllbGxvd0J1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgZ3JlZW5CdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJsdWVCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHN0YXR1c0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaGludExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8g7YOA7J2066i4IO2RnOyLnOyaqSDroIjsnbTruJRcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyDtg4DsnoTslYTsm4Mg66mU7Iuc7KeA7JqpIOugiOydtOu4lFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZW91dExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8g66as7Iqk7Yq4IOuPjOyVhOqwgOq4sCDrsoTtirxcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBleGl0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuPT09PT09PVxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSByZWRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSB5ZWxsb3dCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBncmVlbkJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIGJsdWVCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgc3RhdHVzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgaGludExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgdGltZW91dExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBleGl0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgZnJvZ1Nwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xvclNlcXVlbmNlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB1c2VySW5wdXQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgaXNHYW1lQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbjw8PDw8PDwgSEVBRFxyXG5cclxuICAgIC8vIOuCqOydgCDsi5zqsIQo7LSIKVxyXG4gICAgcHJpdmF0ZSByZW1haW5pbmdUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gMey0iOuniOuLpCDtmLjstpztlaAg7L2c67CxIOywuOyhsFxyXG4gICAgcHJpdmF0ZSB0aWNrQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcblxyXG49PT09PT09XHJcbiAgICBwcml2YXRlIHJlbWFpbmluZ1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpY2tDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcbiAgICBwcml2YXRlIGJ1dHRvbk1hcDogeyBba2V5OiBzdHJpbmddOiBjYy5CdXR0b24gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBjb2xvcnM6IHN0cmluZ1tdID0gW1wicmVkXCIsIFwieWVsbG93XCIsIFwiZ3JlZW5cIiwgXCJibHVlXCJdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xyXG5cclxuPDw8PDw8PCBIRUFEXHJcbiAgICAgICAgLy8g67KE7Yq8IOunte2VkVxyXG49PT09PT09XHJcbj4+Pj4+Pj4gM2M5NzgyODM3NmZhZTYxMWQwNWM1MjEzYzdmNzEyM2FkY2ZkMzM1N1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTWFwID0ge1xyXG4gICAgICAgICAgICByZWQ6IHRoaXMucmVkQnV0dG9uLFxyXG4gICAgICAgICAgICB5ZWxsb3c6IHRoaXMueWVsbG93QnV0dG9uLFxyXG4gICAgICAgICAgICBncmVlbjogdGhpcy5ncmVlbkJ1dHRvbixcclxuICAgICAgICAgICAgYmx1ZTogdGhpcy5ibHVlQnV0dG9uXHJcbiAgICAgICAgfTtcclxuXHJcbjw8PDw8PDwgSEVBRFxyXG4gICAgICAgIC8vIO2BtOumrSDsnbTrsqTtirgg67CU7J2465SpXHJcbj09PT09PT1cclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25TdGFydEdhbWUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVkQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbG9yQnV0dG9uQ2xpY2soJ3JlZCcpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnllbGxvd0J1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Db2xvckJ1dHRvbkNsaWNrKCd5ZWxsb3cnKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ncmVlbkJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Db2xvckJ1dHRvbkNsaWNrKCdncmVlbicpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJsdWVCdXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29sb3JCdXR0b25DbGljaygnYmx1ZScpLCB0aGlzKTtcclxuXHJcbjw8PDw8PDwgSEVBRFxyXG4gICAgICAgIC8vIOy0iOq4sCDsg4Htg5wg7ISk7KCVXHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsQnV0dG9uU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8g7YOA7J2066i4L+2DgOyehOyVhOybgyDroIjsnbTruJQg7Iio6riw6riwXHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdGlja0NhbGxiYWNrIOuwlOyduOuUqVxyXG4gICAgICAgIHRoaXMudGlja0NhbGxiYWNrID0gdGhpcy51cGRhdGVUaW1lci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TdGFydEdhbWUoKSB7XHJcbiAgICAgICAgY29uc3QgYnRuTGFiZWwgPSB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgIGlmIChidG5MYWJlbCA9PT0gXCLri6Tsi5wg64+E7KCEXCIpIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIOugiOuyqCDsnqzrj4TsoIRcclxuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi7ZiE7J6sIOuLqOqzhCDri6Tsi5wg7Iuc7J6RIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5oaW50TGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBcIuqyjOyehCDsi5zsnpFcIjtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIOKYhSDsl6zquLDrp4wg67OA6rK9OiBmYWxzZSDihpIgdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25zKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOyDiCDqsozsnoQg7Iuc7J6RXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JTZXF1ZW5jZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IDE7XHJcbj09PT09PT1cclxuICAgICAgICB0aGlzLnNldEluaXRpYWxCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMudGlja0NhbGxiYWNrID0gdGhpcy51cGRhdGVUaW1lci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RnJvZ1N0YXRlKFwibmV1dHJhbFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy95ZWxsb3dCdXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZWxsb3dCdXR0b24g64iM66a8Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2dyZWVuQnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ3JlZW5CdXR0b24g64iM66a8Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JsdWVCdXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdibHVlQnV0dG9uIOuIjOumvCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9yZWRCdXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWRCdXR0b24g64iM66a8Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RnJvZ1N0YXRlKHN0YXRlOiBcIm5ldXRyYWxcIiB8IFwic21pbGVcIiB8IFwiY3J5XCIpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVNYXAgPSB7XHJcbiAgICAgICAgICAgIG5ldXRyYWw6IFwi66y07ZGc7KCV6rCc6rW0XCIsXHJcbiAgICAgICAgICAgIHNtaWxlOiBcIuybg+uKlOqwnOq1tFwiLFxyXG4gICAgICAgICAgICBjcnk6IFwi7Jqw64qU6rCc6rW0XCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDsnbTrr7jsp4Drp4jri6Qg6rCc67OEIOyCrOydtOymiCDsp4DsoJVcclxuICAgICAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAgICAgICBuZXV0cmFsOiB7IHdpZHRoOiA0NTAsIGhlaWdodDogNTEwIH0sXHJcbiAgICAgICAgICAgIHNtaWxlOiB7IHdpZHRoOiA0NTAsIGhlaWdodDogNjAwIH0sXHJcbiAgICAgICAgICAgIGNyeTogeyB3aWR0aDogNjAwLCBoZWlnaHQ6IDUwMCB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ByaXRlTmFtZSA9IHNwcml0ZU1hcFtzdGF0ZV07XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHNpemVNYXBbc3RhdGVdO1xyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgSW1hZ2VzL1NpbS8ke3Nwcml0ZU5hbWV9YCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOqwnOq1rOumrCDsnbTrr7jsp4Ag66Gc65OcIOyLpO2MqDogJHtzcHJpdGVOYW1lfWAsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mcm9nU3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvZ1Nwcml0ZS50eXBlID0gY2MuU3ByaXRlLlR5cGUuU0lNUExFO1xyXG4gICAgICAgICAgICB0aGlzLmZyb2dTcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgICAgICB0aGlzLmZyb2dTcHJpdGUubm9kZS5zZXRDb250ZW50U2l6ZShzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25TdGFydEdhbWUoKSB7XHJcbiAgICAgICAgY29uc3QgYnRuTGFiZWwgPSB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAoYnRuTGFiZWwgPT09IFwi64uk7IucIOuPhOyghFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzTWVzc2FnZShcIu2YhOyerCDri6jqs4Qg64uk7IucIOyLnOyekSFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGludExhYmVsLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZyb2dTdGF0ZShcIm5ldXRyYWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSAxOyBcclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi6rKM7J6EIOyLnOyekSFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGludExhYmVsLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lQWN0aXZlID0gdHJ1ZTtcclxuPDw8PDw8PCBIRUFEXHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbnModHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIO2DgOydtOuouOuPhCDri6Tsi5wg7Iuc7J6RXHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBwcml2YXRlIG9uQ29sb3JCdXR0b25DbGljayhjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzR2FtZUFjdGl2ZSkgcmV0dXJuO1xyXG49PT09PT09XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcm9nU3RhdGUoXCJuZXV0cmFsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29sb3JCdXR0b25DbGljayhjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzR2FtZUFjdGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5idXR0b25NYXBbY29sb3JdLmludGVyYWN0YWJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbk1hcFtjb2xvcl07XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2FsZSA9IGJ0bi5ub2RlLnNjYWxlO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUG9zID0gYnRuLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8g7Jew7J6OIO2BtOumrSDtmqjqs7wgKOqwleyhsCDrsoTsoIQpXHJcbiAgICAgICAgY2MudHdlZW4oYnRuLm5vZGUpXHJcbiAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4xLCB7IHNjYWxlOiBvcmlnaW5hbFNjYWxlICogMC44NSB9LCB7IGVhc2luZzogJ3F1YWRJbicgfSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMSwgeyBvcGFjaXR5OiAxODAgfSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMSwgeyBwb3NpdGlvbjogY2MudjMob3JpZ2luYWxQb3MueCwgb3JpZ2luYWxQb3MueSAtIDUpIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjEsIHsgc2NhbGU6IG9yaWdpbmFsU2NhbGUgfSwgeyBlYXNpbmc6ICdxdWFkT3V0JyB9KSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4xLCB7IHBvc2l0aW9uOiBvcmlnaW5hbFBvcyB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQucHVzaChjb2xvcik7XHJcbiAgICAgICAgdGhpcy5jaGVja1VzZXJJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuPDw8PDw8PCBIRUFEXHJcbiAgICAvLyAx7LSI66eI64ukIO2YuOy2nDog64Ko7J2AIOyLnOqwhCDqsJDshowg67CPIOyytO2BrFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaW1lcigpIHtcclxuICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUtLTtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYOuCqOydgCDsi5zqsIQ6ICR7dGhpcy5yZW1haW5pbmdUaW1lfXNgO1xyXG5cclxuPT09PT09PVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nVGltZS0tO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnJlbWFpbmluZ1RpbWV9YDtcclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcbiAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nVGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpY2tDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHRoaXMub25UaW1lVXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48PDw8PDw8IEhFQURcclxuICAgIC8vIO2DgOydtOuouCDstIjquLDtmZQgJiDsi5zsnpFcclxuICAgIHByaXZhdGUgc3RhcnRUaW1lcigpIHtcclxuICAgICAgICAvLyDquLDsobQg7Iqk7LyA7KSEIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpY2tDYWxsYmFjayk7XHJcblxyXG4gICAgICAgIC8vIDEwMOy0iOuhnCDshLjtjIVcclxuICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUgPSAxMDA7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGDrgqjsnYAg7Iuc6rCEOiAke3RoaXMucmVtYWluaW5nVGltZX1zYDtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIO2DgOyehOyVhOybgyDrqZTsi5zsp4Ag7Iio6riw6riwXHJcbiAgICAgICAgdGhpcy50aW1lb3V0TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyAx7LSI66eI64ukIHVwZGF0ZVRpbWVyIO2YuOy2nFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aWNrQ2FsbGJhY2ssIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOyLnOqwhCDstIjqs7wg7IucIOyymOumrFxyXG4gICAgcHJpdmF0ZSBvblRpbWVVcCgpIHtcclxuICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOuqqOuToCDrsoTtirwg67mE7Zmc7ISx7ZmUXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9ucyh0cnVlKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyDtg4DsnoTslYTsm4Mg66CI7J2067iU7JeQIOuplOyLnOyngCDtkZzsi5xcclxuPT09PT09PVxyXG4gICAgcHJpdmF0ZSBzdGFydFRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpY2tDYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdUaW1lID0gMTAwO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnJlbWFpbmluZ1RpbWV9YDtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnRpY2tDYWxsYmFjaywgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRpbWVVcCgpIHtcclxuICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbnModHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcbiAgICAgICAgdGhpcy50aW1lb3V0TGFiZWwuc3RyaW5nID0gXCJUaW1lT3V0IVwiO1xyXG4gICAgICAgIHRoaXMudGltZW91dExhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrVXNlcklucHV0KCkge1xyXG4gICAgICAgIGxldCBjb3JyZWN0ID0gdHJ1ZTtcclxuPDw8PDw8PCBIRUFEXHJcbiAgICAgICAgbGV0IHRhcmdldFNlcXVlbmNlID0gdGhpcy5jb2xvclNlcXVlbmNlO1xyXG5cclxuICAgICAgICAvLyAz64uo6rOE7JeUIOyXreyInCDssrTtgaxcclxuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMykge1xyXG4gICAgICAgICAgICB0YXJnZXRTZXF1ZW5jZSA9IFsuLi50aGlzLmNvbG9yU2VxdWVuY2VdLnJldmVyc2UoKTtcclxuICAgICAgICB9XHJcbj09PT09PT1cclxuICAgICAgICBsZXQgdGFyZ2V0U2VxdWVuY2UgPSB0aGlzLmxldmVsID09PSAzID8gWy4uLnRoaXMuY29sb3JTZXF1ZW5jZV0ucmV2ZXJzZSgpIDogdGhpcy5jb2xvclNlcXVlbmNlO1xyXG4+Pj4+Pj4+IDNjOTc4MjgzNzZmYWU2MTFkMDVjNTIxM2M3ZjcxMjNhZGNmZDMzNTdcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJJbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VySW5wdXRbaV0gIT09IHRhcmdldFNlcXVlbmNlW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbjw8PDw8PDwgSEVBRFxyXG4gICAgICAgIGlmIChjb3JyZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbnB1dC5sZW5ndGggPT09IHRhcmdldFNlcXVlbmNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi7KCV64u1ISDri6TsnYwg64uo6rOE66GcIVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG49PT09PT09XHJcbiAgICAgICAgaWYgKGNvcnJlY3QgJiYgdGhpcy51c2VySW5wdXQubGVuZ3RoID09PSB0YXJnZXRTZXF1ZW5jZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcm9nU3RhdGUoXCJzbWlsZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi7KCV64u1ISDri6TsnYwg64uo6rOE66GcIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsKys7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWNvcnJlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcm9nU3RhdGUoXCJjcnlcIik7XHJcbj4+Pj4+Pj4gM2M5NzgyODM3NmZhZTYxMWQwNWM1MjEzYzdmNzEyM2FkY2ZkMzM1N1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c01lc3NhZ2UoXCLti4DroLjsirXri4jri6QhIOuLpOyLnCDsi5zrj4TtlZjshLjsmpQuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gXCLri6Tsi5wg64+E7KCEXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25zKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlQ29sb3JTZXF1ZW5jZSgpIHtcclxuICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UgPSBbXTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxldmVsID49IDUgPyA3IDogdGhpcy5sZXZlbCArIDI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbG9ycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UucHVzaCh0aGlzLmNvbG9yc1tpZHhdKTtcclxuICAgICAgICB9XHJcbjw8PDw8PDwgSEVBRFxyXG4gICAgICAgIHRoaXMuaGludExhYmVsLnN0cmluZyA9ICh0aGlzLmxldmVsID09PSAzKSA/IFwi67aI7J20IOq5nOu5oeydtOuKlCDsiJzshJzrpbwg67CY64yA66GcIOyeheugpe2VmOudvC5cIiA6IFwiXCI7XHJcbj09PT09PT1cclxuICAgICAgICB0aGlzLmhpbnRMYWJlbC5zdHJpbmcgPSB0aGlzLmxldmVsID09PSAzID8gXCLrtojsnbQg6rmc67mh7J2064qUIOyInOyEnOulvCDrsJjrjIDroZwg7J6F66Cl7ZWY6528LlwiIDogXCJcIjtcclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsg53shLHrkJwg7IOJ7IOBIOyInOyEnDpcIiwgdGhpcy5jb2xvclNlcXVlbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEluaXRpYWxCdXR0b25TdGF0ZSgpIHtcclxuPDw8PDw8PCBIRUFEXHJcbiAgICAgICAgW3RoaXMucmVkQnV0dG9uLCB0aGlzLnllbGxvd0J1dHRvbiwgdGhpcy5ncmVlbkJ1dHRvbiwgdGhpcy5ibHVlQnV0dG9uXS5mb3JFYWNoKGJ0biA9PiB7XHJcbj09PT09PT1cclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuYnV0dG9uTWFwKS5mb3JFYWNoKGJ0biA9PiB7XHJcbj4+Pj4+Pj4gM2M5NzgyODM3NmZhZTYxMWQwNWM1MjEzYzdmNzEyM2FkY2ZkMzM1N1xyXG4gICAgICAgICAgICBidG4ubm9kZS5vcGFjaXR5ID0gMTAwO1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93Q29sb3JTZXF1ZW5jZSgpIHtcclxuPDw8PDw8PCBIRUFEXHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcclxuICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25zKHRydWUpO1xyXG5cclxuPT09PT09PVxyXG4gICAgICAgIHRoaXMuc2V0RnJvZ1N0YXRlKFwibmV1dHJhbFwiKTsgXHJcblxyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbEJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcbiAgICAgICAgdGhpcy5jb2xvclNlcXVlbmNlLmZvckVhY2goY29sb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbk1hcFtjb2xvcl07XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuYWN0aXZhdGVCdXR0b25Gb3JCbGluayhidG4pLCBkZWxheSk7XHJcbiAgICAgICAgICAgIGRlbGF5ICs9IDEuMDtcclxuICAgICAgICB9KTtcclxuPDw8PDw8PCBIRUFEXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvblN0YXRlKCk7XHJcbj09PT09PT1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQW5zd2VySW5wdXQoKTtcclxuPj4+Pj4+PiAzYzk3ODI4Mzc2ZmFlNjExZDA1YzUyMTNjN2Y3MTIzYWRjZmQzMzU3XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzTWVzc2FnZShcIuuyhO2KvCDsiJzshJzrpbwg66ee7Law7KO87IS47JqUIVwiKTtcclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICB9XHJcblxyXG48PDw8PDw8IEhFQURcclxuICAgIHByaXZhdGUgYWN0aXZhdGVCdXR0b25Gb3JCbGluayhidXR0b246IGNjLkJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKGJ1dHRvbi5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7IG9wYWNpdHk6IDEwMCB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IGJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTsgfSwgMC42KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0QnV0dG9uU3RhdGUoKSB7XHJcbiAgICAgICAgW3RoaXMucmVkQnV0dG9uLCB0aGlzLnllbGxvd0J1dHRvbiwgdGhpcy5ncmVlbkJ1dHRvbiwgdGhpcy5ibHVlQnV0dG9uXS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGDsoJDsiJg6ICR7dGhpcy5zY29yZX1gO1xyXG49PT09PT09XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZUJ1dHRvbkZvckJsaW5rKGJ1dHRvbjogY2MuQnV0dG9uKSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2FsZSA9IGJ1dHRvbi5ub2RlLnNjYWxlO1xyXG4gICAgICAgIGJ1dHRvbi5ub2RlLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgYnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKGJ1dHRvbi5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4xNSwgeyBvcGFjaXR5OiAyNTUsIHNjYWxlOiBvcmlnaW5hbFNjYWxlICogMS4wNSB9LCB7IGVhc2luZzogJ3F1YWRPdXQnIH0pXHJcbiAgICAgICAgICAgIC50bygwLjE1LCB7IG9wYWNpdHk6IDEwMCwgc2NhbGU6IG9yaWdpbmFsU2NhbGUgfSwgeyBlYXNpbmc6ICdxdWFkSW4nIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlQW5zd2VySW5wdXQoKSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmJ1dHRvbk1hcCkuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBiZyA9IGJ0bi5ub2RlLmdldENoaWxkQnlOYW1lKCdCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgIGlmIChiZykge1xyXG4gICAgICAgICAgICAgICAgLy8g8J+SoSBCYWNrZ3JvdW5k7J2YIO2BrOq4sOulvCDrlLDrnbzqsIDqsowg66ee7LakXHJcbiAgICAgICAgICAgICAgICBidG4ubm9kZS5zZXRDb250ZW50U2l6ZShiZy5nZXRDb250ZW50U2l6ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnRuLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgYnRuLmludGVyYWN0YWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtidG4ubm9kZS5uYW1lfSBzaXplOmAsIGJ0bi5ub2RlLndpZHRoLCBidG4ubm9kZS5oZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbj4+Pj4+Pj4gM2M5NzgyODM3NmZhZTYxMWQwNWM1MjEzYzdmNzEyM2FkY2ZkMzM1N1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U3RhdHVzTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0xhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNhYmxlQnV0dG9ucyhkaXNhYmxlOiBib29sZWFuKSB7XHJcbjw8PDw8PDwgSEVBRFxyXG4gICAgICAgIHRoaXMucmVkQnV0dG9uLmludGVyYWN0YWJsZSAgICA9ICFkaXNhYmxlO1xyXG4gICAgICAgIHRoaXMueWVsbG93QnV0dG9uLmludGVyYWN0YWJsZSA9ICFkaXNhYmxlO1xyXG4gICAgICAgIHRoaXMuZ3JlZW5CdXR0b24uaW50ZXJhY3RhYmxlICA9ICFkaXNhYmxlO1xyXG4gICAgICAgIHRoaXMuYmx1ZUJ1dHRvbi5pbnRlcmFjdGFibGUgICA9ICFkaXNhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMaXN0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsi7HquIAg6rKM7J6EIOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLBcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTaW5nbGVHYW1lTGlzdCcpO1xyXG4gICAgICB9XHJcbj09PT09PT1cclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuYnV0dG9uTWFwKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSAhZGlzYWJsZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGlzdCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1NpbmdsZUdhbWVMaXN0Jyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbj4+Pj4+Pj4gM2M5NzgyODM3NmZhZTYxMWQwNWM1MjEzYzdmNzEyM2FkY2ZkMzM1N1xyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcQ29tbW9uVUlcXExvZ2luTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQW1IQztRQWpIQyxtQkFBYSxHQUFlLElBQUksQ0FBQztRQUdqQyxlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRXRCLHVCQUFpQixHQUFXLEVBQUUsQ0FBQzs7SUFxR3pDLENBQUM7SUFuR0MsNkJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN0QyxpQ0FBaUM7SUFDbkMsQ0FBQztJQUVELHdDQUFpQixHQUFqQixVQUFrQixLQUFlLEVBQUUsU0FBaUI7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztRQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdELHdDQUFpQixHQUFqQjtRQUNFLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0UsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxN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RCxtQkFBQztDQW5IRCxBQW1IQyxDQW5IeUMsRUFBRSxDQUFDLFNBQVMsR0FtSHJEO2tCQW5Ib0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgbmlja25hbWVJbnB1dDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgZG9nU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICB0aWdlclNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgcmFiYml0U3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHN0YXJ0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIHByaXZhdGUgc2VsZWN0ZWRDaGFyYWN0ZXI6IHN0cmluZyA9ICcnO1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnN0YXJ0QnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIC8vIGNjLmxvZyhcIkxvZ2luTWFuYWdlciBsb2FkZWRcIik7XG4gIH1cblxuICBvblNlbGVjdENoYXJhY3RlcihldmVudDogY2MuRXZlbnQsIGNoYXJhY3Rlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICBjYy5sb2coXCLsupDrpq3thLAg7ISg7YOd65CoOlwiLCBjaGFyYWN0ZXIpOyBcbiAgICB0aGlzLmNoZWNrRm9ybVZhbGlkKCk7XG4gIH1cbiAgXG5cbiAgb25OaWNrbmFtZUNoYW5nZWQoKSB7XG4gICAgY2MubG9nKFwi64uJ64Sk7J6EIOyeheugpSDspJE6XCIsIHRoaXMubmlja25hbWVJbnB1dC5zdHJpbmcpO1xuICAgIHRoaXMuY2hlY2tGb3JtVmFsaWQoKTtcbiAgfVxuXG4gIGNoZWNrRm9ybVZhbGlkKCkge1xuICAgIGNvbnN0IGlzRmlsbGVkID0gdGhpcy5uaWNrbmFtZUlucHV0LnN0cmluZy50cmltKCkgIT09ICcnICYmIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXIgIT09ICcnO1xuICAgIHRoaXMuc3RhcnRCdXR0b24uaW50ZXJhY3RhYmxlID0gaXNGaWxsZWQ7XG4gICAgLy8gY2MubG9nKFwi7Y+8IOycoO2aqOyEsSDqsoDsgqw6XCIsIGlzRmlsbGVkKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2xpY2tTdGFydCgpIHtcbiAgICBjb25zdCBuaWNrbmFtZSA9IHRoaXMubmlja25hbWVJbnB1dC5zdHJpbmcudHJpbSgpO1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXI7XG5cbiAgICBjYy5sb2coXCJTdGFydCDrsoTtirwg7YG066at65CoIC0g64uJ64Sk7J6EOlwiLCBuaWNrbmFtZSwgXCLsupDrpq3thLA6XCIsIGNoYXJhY3Rlcik7XG5cbiAgICBpZiAoIW5pY2tuYW1lKSB7XG4gICAgICBjYy5sb2coXCLri4nrhKTsnoTsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWNoYXJhY3Rlcikge1xuICAgICAgY2MubG9nKFwi7LqQ66at7YSw66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIDEuIOu4jOudvOyasOyggCDqs6DsnKAgSUQg7IOd7ISxIG9yIOqwgOyguOyYpOq4sFxuICAgICAgbGV0IGJyb3dzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdicm93c2VySWQnKTtcbiAgICAgIGlmICghYnJvd3NlcklkKSB7XG4gICAgICAgIGJyb3dzZXJJZCA9IHRoaXMuZ2VuZXJhdGVCcm93c2VySWQoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jyb3dzZXJJZCcsIGJyb3dzZXJJZCk7XG4gICAgICAgIGNjLmxvZyhcIuyDiCDruIzrnbzsmrDsoIAgSUQg7IOd7ISx65CoOlwiLCBicm93c2VySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2MubG9nKFwi6riw7KG0IOu4jOudvOyasOyggCBJRDpcIiwgYnJvd3NlcklkKTtcbiAgICAgIH1cblxuICAgICAgLy8gMi4g66Gc6re47J24IOyalOyyrVxuICAgICAgY29uc3QgbG9naW5SZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvbG9naW4nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBicm93c2VySWQgfSlcbiAgICAgIH0pO1xuXG4gICAgICBjYy5sb2coXCLroZzqt7jsnbgg7J2R64u1IOyDge2DnDpcIiwgbG9naW5SZXMuc3RhdHVzKTtcbiAgICAgIGlmICghbG9naW5SZXMub2spIHtcbiAgICAgICAgY2MuZXJyb3IoXCLroZzqt7jsnbgg7Iuk7YyoOlwiLCBhd2FpdCBsb2dpblJlcy50ZXh0KCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxvZ2luRGF0YSA9IGF3YWl0IGxvZ2luUmVzLmpzb24oKTtcbiAgICAgIGNvbnN0IGp3dFRva2VuID0gbG9naW5EYXRhLnRva2VuO1xuICAgICAgY2MubG9nKFwiSldUIO2GoO2BsCDrsJzquInrkKg6XCIsIGp3dFRva2VuKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3RUb2tlbicsIGp3dFRva2VuKTtcblxuICAgICAgLy8gMy4g7ZSE66Gc7ZWEIOyggOyepSDsmpTssq1cbiAgICAgIGNvbnN0IHByb2ZpbGVSZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvc2V0LXByb2ZpbGUnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtqd3RUb2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmlja25hbWUsIGNoYXJhY3RlciB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNjLmxvZyhcIu2UhOuhnO2VhCDsoIDsnqUg7J2R64u1IOyDge2DnDpcIiwgcHJvZmlsZVJlcy5zdGF0dXMpO1xuICAgICAgaWYgKCFwcm9maWxlUmVzLm9rKSB7XG4gICAgICAgIGNjLmVycm9yKFwi7ZSE66Gc7ZWEIOyggOyepSDsi6TtjKg6XCIsIGF3YWl0IHByb2ZpbGVSZXMudGV4dCgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYy5sb2coXCLroZzqt7jsnbgg67CPIO2UhOuhnO2VhCDsoIDsnqUg7JmE66OMXCIpO1xuXG4gICAgICAvLyA0LiDqsozsnoQg7Iuc7J6RICjslKwg7J2064+ZIOuTsSlcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjYy5lcnJvcihcIuyXkOufrCDrsJzsg506XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUJyb3dzZXJJZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycmF5KTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnJheSkubWFwKGIgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG4gIH1cbn1cbiJdfQ==
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
var MazeGameManager_1 = require("./MazeGameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MazePlayer = /** @class */ (function (_super) {
    __extends(MazePlayer, _super);
    function MazePlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 걷기 애니메이션용 프레임 배열 (Inspector 에서 4개 연결) */
        _this.walkFrames = [];
        /** 현재 그리드 좌표 */
        _this.currentGridPos = cc.v2(1, 1);
        _this.isMoving = false;
        _this.moveDuration = 0.1;
        return _this;
    }
    MazePlayer.prototype.onLoad = function () {
        // 1) Canvas/Game Manager 노드에서 MazeGameManager 컴포넌트 찾아서 할당
        var gmNode = cc.find("Canvas/Game Manager");
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
            var clip = cc.AnimationClip.createWithSpriteFrames(this.walkFrames, 12 // 초당 12프레임
            );
            clip.name = "walk";
            clip.wrapMode = cc.WrapMode.Loop;
            this.anim.addClip(clip);
            // cellSize * 0.8 크기에 맞춰 자동 스케일링
            var origW = this.walkFrames[0].getRect().width;
            var target = this.gameManager.cellSize * 0.8;
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
    };
    MazePlayer.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    /** 키 누를 때 호출 */
    MazePlayer.prototype.onKeyDown = function (e) {
        if (this.isMoving || this.gameManager.gameOver)
            return;
        var delta = cc.v2(0, 0);
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
        if (this.anim.getClips().some(function (c) { return c.name === "walk"; })) {
            this.anim.play("walk");
        }
        this.move(delta);
    };
    /** 키 뗄 때 호출 */
    MazePlayer.prototype.onKeyUp = function (e) {
        // 애니메이션 정지
        if (this.anim.getClips().some(function (c) { return c.name === "walk"; })) {
            this.anim.stop("walk");
        }
    };
    /** 실제 그리드 이동 & 노드 액션 처리 */
    MazePlayer.prototype.move = function (delta) {
        var _this = this;
        var next = this.currentGridPos.add(delta);
        if (!this.gameManager.getMazeLogic().isWalkable({ x: next.x, y: next.y }))
            return;
        this.currentGridPos = next.clone();
        // 목표 월드 좌표 계산
        var cs = this.gameManager.cellSize;
        var w = this.gameManager.cols * cs;
        var h = this.gameManager.rows * cs;
        var ox = (1080 - w) / 2;
        var oy = (1920 - h) / 2;
        var dest = cc.v2(ox + next.x * cs + cs / 2, oy + next.y * cs + cs / 2);
        // 이동 처리
        this.isMoving = true;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.moveTo(this.moveDuration, dest), cc.callFunc(function () { _this.isMoving = false; })));
    };
    __decorate([
        property([cc.SpriteFrame])
    ], MazePlayer.prototype, "walkFrames", void 0);
    MazePlayer = __decorate([
        ccclass
    ], MazePlayer);
    return MazePlayer;
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZVBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIscURBQWdEO0FBQzFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBZ0lDO1FBL0hDLDRDQUE0QztRQUVyQyxnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFLekMsZ0JBQWdCO1FBQ1Qsb0JBQWMsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQyxjQUFRLEdBQWlCLEtBQUssQ0FBQztRQUMvQixrQkFBWSxHQUFhLEdBQUcsQ0FBQzs7SUFvSHZDLENBQUM7SUFoSEMsMkJBQU0sR0FBTjtRQUNFLDBEQUEwRDtRQUMxRCxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztZQUM3RCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUNwRCxPQUFPO1NBQ1I7UUFFRCxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0s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LElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQ1QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQVEsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDOUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQTVIRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztrREFDYztJQUh0QixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBZ0k5QjtJQUFELGlCQUFDO0NBaElELEFBZ0lDLENBaEl1QyxFQUFFLENBQUMsU0FBUyxHQWdJbkQ7a0JBaElvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2NyaXB0cy9NYXplUGxheWVyLnRzXHJcblxyXG5pbXBvcnQgTWF6ZUdhbWVNYW5hZ2VyIGZyb20gXCIuL01hemVHYW1lTWFuYWdlclwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF6ZVBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLyoqIOqxt+q4sCDslaDri4jrqZTsnbTshZjsmqkg7ZSE66CI7J6EIOuwsOyXtCAoSW5zcGVjdG9yIOyXkOyEnCA06rCcIOyXsOqysCkgKi9cclxuICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICBwdWJsaWMgd2Fsa0ZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAvKiog64K067aA7JeQ7IScIOyekOuPmeycvOuhnCDtlaDri7nrkKAgR2FtZU1hbmFnZXIg7LC47KGwICovXHJcbiAgcHJpdmF0ZSBnYW1lTWFuYWdlciE6IE1hemVHYW1lTWFuYWdlcjtcclxuXHJcbiAgLyoqIO2YhOyerCDqt7jrpqzrk5wg7KKM7ZGcICovXHJcbiAgcHVibGljIGN1cnJlbnRHcmlkUG9zOiBjYy5WZWMyID0gY2MudjIoMSwgMSk7XHJcblxyXG4gIHByaXZhdGUgaXNNb3Zpbmc6IGJvb2xlYW4gICAgICA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbW92ZUR1cmF0aW9uOiBudW1iZXIgICA9IDAuMTtcclxuICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XHJcbiAgcHJpdmF0ZSBzcHJpdGUhOiBjYy5TcHJpdGU7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIDEpIENhbnZhcy9HYW1lIE1hbmFnZXIg64W465Oc7JeQ7IScIE1hemVHYW1lTWFuYWdlciDsu7Ttj6zrhIztirgg7LC+7JWE7IScIO2VoOuLuVxyXG4gICAgY29uc3QgZ21Ob2RlID0gY2MuZmluZChcIkNhbnZhcy9HYW1lIE1hbmFnZXJcIik7XHJcbiAgICBpZiAoIWdtTm9kZSkge1xyXG4gICAgICBjYy5lcnJvcihcIk1hemVQbGF5ZXI6ICdDYW52YXMvR2FtZSBNYW5hZ2VyJyDrhbjrk5zrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6QhXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ21Ob2RlLmdldENvbXBvbmVudChNYXplR2FtZU1hbmFnZXIpITtcclxuICAgIGlmICghdGhpcy5nYW1lTWFuYWdlcikge1xyXG4gICAgICBjYy5lcnJvcihcIk1hemVQbGF5ZXI6IE1hemVHYW1lTWFuYWdlciDsu7Ttj6zrhIztirjqsIAg7JeG7Iq164uI64ukIVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIpIFNwcml0ZSAmIEFuaW1hdGlvbiDsu7Ttj6zrhIztirgg7ZmV67O0XHJcbiAgICB0aGlzLnNwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSB8fCB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICB0aGlzLmFuaW0gICA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSB8fCB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblxyXG4gICAgLy8gMykg6rG36riwIO2UhOugiOyehOydtCDshKTsoJXrkJjslrQg7J6I7Jy866m0IOyyqyDtlITroIjsnoQg7KCB7JqpICYg7JWg64uI66mU7J207IWYIO2BtOumvSDsg53shLFcclxuICAgIGlmICh0aGlzLndhbGtGcmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyDssqsg7ZSE66CI7J6EIOyEuO2MhVxyXG4gICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMud2Fsa0ZyYW1lc1swXTtcclxuICAgICAgdGhpcy5zcHJpdGUudHlwZSAgICAgPSBjYy5TcHJpdGUuVHlwZS5TSU1QTEU7XHJcbiAgICAgIHRoaXMuc3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuXHJcbiAgICAgIC8vIDEyZnBzIOyVoOuLiOuplOydtOyFmCDtgbTrpr0g7IOd7ISxXHJcbiAgICAgIGNvbnN0IGNsaXAgPSBjYy5BbmltYXRpb25DbGlwLmNyZWF0ZVdpdGhTcHJpdGVGcmFtZXMoXHJcbiAgICAgICAgdGhpcy53YWxrRnJhbWVzLFxyXG4gICAgICAgIDEyICAvLyDstIjri7kgMTLtlITroIjsnoRcclxuICAgICAgKTtcclxuICAgICAgY2xpcC5uYW1lICAgICA9IFwid2Fsa1wiO1xyXG4gICAgICBjbGlwLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTG9vcDtcclxuICAgICAgdGhpcy5hbmltLmFkZENsaXAoY2xpcCk7XHJcblxyXG4gICAgICAvLyBjZWxsU2l6ZSAqIDAuOCDtgazquLDsl5Ag66ee7LawIOyekOuPmSDsiqTsvIDsnbzrp4FcclxuICAgICAgY29uc3Qgb3JpZ1cgICAgPSB0aGlzLndhbGtGcmFtZXNbMF0uZ2V0UmVjdCgpLndpZHRoO1xyXG4gICAgICBjb25zdCB0YXJnZXQgICA9IHRoaXMuZ2FtZU1hbmFnZXIuY2VsbFNpemUgKiAwLjg7XHJcbiAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSh0YXJnZXQgLyBvcmlnVywgdGFyZ2V0IC8gb3JpZ1cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2Mud2FybihcIk1hemVQbGF5ZXI6IHdhbGtGcmFtZXPqsIAg7ISk7KCV65CY7KeAIOyViuyVmOyKteuLiOuLpCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNCkg7JW17Lukwrd6SW5kZXgg7ISk7KCVXHJcbiAgICB0aGlzLm5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5ub2RlLnpJbmRleCA9IDk5OTtcclxuXHJcbiAgICAvLyA1KSDtgqQg7J6F66ClIOumrOyKpOuEiCDrk7HroZ0gKEtFWV9ET1dOICsgS0VZX1VQKVxyXG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCAgIHRoaXMub25LZXlVcCwgICB0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCAgIHRoaXMub25LZXlVcCwgICB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKiDtgqQg64iE66W8IOuVjCDtmLjstpwgKi9cclxuICBwcml2YXRlIG9uS2V5RG93bihlOiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICBpZiAodGhpcy5pc01vdmluZyB8fCB0aGlzLmdhbWVNYW5hZ2VyLmdhbWVPdmVyKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGRlbHRhID0gY2MudjIoMCwgMCk7XHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OiAgZGVsdGEgPSBjYy52MigtMSwgIDApOyBicmVhaztcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6IGRlbHRhID0gY2MudjIoIDEsICAwKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOiAgICBkZWx0YSA9IGNjLnYyKCAwLCAgMSk7IGJyZWFrO1xyXG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOiAgZGVsdGEgPSBjYy52MiggMCwgLTEpOyBicmVhaztcclxuICAgICAgZGVmYXVsdDogcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOqxt+q4sCDslaDri4jrqZTsnbTshZgg7J6s7IOdXHJcbiAgICBpZiAodGhpcy5hbmltLmdldENsaXBzKCkuc29tZShjID0+IGMubmFtZSA9PT0gXCJ3YWxrXCIpKSB7XHJcbiAgICAgIHRoaXMuYW5pbS5wbGF5KFwid2Fsa1wiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1vdmUoZGVsdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIO2CpCDrl4Qg65WMIO2YuOy2nCAqL1xyXG4gIHByaXZhdGUgb25LZXlVcChlOiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAvLyDslaDri4jrqZTsnbTshZgg7KCV7KeAXHJcbiAgICBpZiAodGhpcy5hbmltLmdldENsaXBzKCkuc29tZShjID0+IGMubmFtZSA9PT0gXCJ3YWxrXCIpKSB7XHJcbiAgICAgIHRoaXMuYW5pbS5zdG9wKFwid2Fsa1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDsi6TsoJwg6re466as65OcIOydtOuPmSAmIOuFuOuTnCDslaHshZgg7LKY66asICovXHJcbiAgcHJpdmF0ZSBtb3ZlKGRlbHRhOiBjYy5WZWMyKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5jdXJyZW50R3JpZFBvcy5hZGQoZGVsdGEpO1xyXG4gICAgaWYgKCF0aGlzLmdhbWVNYW5hZ2VyLmdldE1hemVMb2dpYygpLmlzV2Fsa2FibGUoeyB4OiBuZXh0LngsIHk6IG5leHQueSB9KSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuY3VycmVudEdyaWRQb3MgPSBuZXh0LmNsb25lKCk7XHJcblxyXG4gICAgLy8g66qp7ZGcIOyblOuTnCDsooztkZwg6rOE7IKwXHJcbiAgICBjb25zdCBjcyAgID0gdGhpcy5nYW1lTWFuYWdlci5jZWxsU2l6ZTtcclxuICAgIGNvbnN0IHcgICAgPSB0aGlzLmdhbWVNYW5hZ2VyLmNvbHMgKiBjcztcclxuICAgIGNvbnN0IGggICAgPSB0aGlzLmdhbWVNYW5hZ2VyLnJvd3MgKiBjcztcclxuICAgIGNvbnN0IG94ICAgPSAoMTA4MCAtIHcpIC8gMjtcclxuICAgIGNvbnN0IG95ICAgPSAoMTkyMCAtIGgpIC8gMjtcclxuICAgIGNvbnN0IGRlc3QgPSBjYy52MihcclxuICAgICAgb3ggKyBuZXh0LnggKiBjcyArIGNzIC8gMixcclxuICAgICAgb3kgKyBuZXh0LnkgKiBjcyArIGNzIC8gMlxyXG4gICAgKTtcclxuXHJcbiAgICAvLyDsnbTrj5kg7LKY66asXHJcbiAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgY2MubW92ZVRvKHRoaXMubW92ZUR1cmF0aW9uLCBkZXN0KSxcclxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7IHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTsgfSlcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MazeLogic = /** @class */ (function () {
    function MazeLogic(rows, cols, container) {
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
    MazeLogic.prototype.generateMaze = function (level) {
        var _this = this;
        // (기존 DFS + addLoops 그대로)
        this.maze = Array.from({ length: this.rows }, function () { return Array(_this.cols).fill(1); });
        var stack = [];
        this.maze[1][1] = 0;
        stack.push({ x: 1, y: 1 });
        while (stack.length) {
            var cur = stack.pop();
            var neighbors = this.getUnvisitedNeighbors(cur.x, cur.y);
            if (neighbors.length) {
                stack.push(cur);
                var next = neighbors[Math.floor(Math.random() * neighbors.length)];
                this.maze[next.y][next.x] = 0;
                this.maze[(cur.y + next.y) / 2][(cur.x + next.x) / 2] = 0;
                stack.push(next);
            }
        }
        var loopProb = level >= 6 ? 0.05 : 0.03;
        this.addLoops(loopProb);
    };
    MazeLogic.prototype.addLoops = function (prob) {
        for (var y = 1; y < this.rows - 1; y++) {
            for (var x = 1; x < this.cols - 1; x++) {
                if (this.maze[y][x] === 1 && Math.random() < prob) {
                    var cnt = 0;
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
    };
    /** 타일(prefab) 인스턴스화해서 오솔길/풀숲 이미지로 렌더링 */
    MazeLogic.prototype.renderMaze = function () {
        this.container.removeAllChildren();
        for (var y = 0; y < this.rows; y++) {
            for (var x = 0; x < this.cols; x++) {
                var tile = cc.instantiate(this.tilePrefab);
                tile.parent = this.container;
                // → 꼭 이 두 줄을 추가하세요 ←
                tile.setContentSize(this.cellSize, this.cellSize);
                tile.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE;
                // 스프라이트 프레임
                var sp = tile.getComponent(cc.Sprite);
                sp.spriteFrame = this.maze[y][x] === 0
                    ? this.pathFrame
                    : this.grassFrame;
                // 위치
                tile.setPosition(x * this.cellSize + this.cellSize / 2, y * this.cellSize + this.cellSize / 2);
            }
        }
    };
    MazeLogic.prototype.getStartPosition = function () { return { x: 1, y: 1 }; };
    MazeLogic.prototype.getGoalPosition = function () { return { x: this.cols - 2, y: this.rows - 2 }; };
    MazeLogic.prototype.isWalkable = function (cell) {
        if (cell.x < 0 || cell.x >= this.cols || cell.y < 0 || cell.y >= this.rows)
            return false;
        return this.maze[cell.y][cell.x] === 0;
    };
    MazeLogic.prototype.getUnvisitedNeighbors = function (x, y) {
        var list = [];
        if (x - 2 >= 0 && this.maze[y][x - 2] === 1)
            list.push({ x: x - 2, y: y });
        if (x + 2 < this.cols && this.maze[y][x + 2] === 1)
            list.push({ x: x + 2, y: y });
        if (y - 2 >= 0 && this.maze[y - 2][x] === 1)
            list.push({ x: x, y: y - 2 });
        if (y + 2 < this.rows && this.maze[y + 2][x] === 1)
            list.push({ x: x, y: y + 2 });
        return list;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZUxvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFjRSxtQkFBWSxJQUFZLEVBQUUsSUFBWSxFQUFFLFNBQWtCO1FBYjFELHdCQUF3QjtRQUNRLGVBQVUsR0FBbUIsSUFBSSxDQUFDO1FBQ2xDLGNBQVMsR0FBb0IsSUFBSSxDQUFDO1FBQ2xDLGVBQVUsR0FBbUIsSUFBSSxDQUFDO1FBSTFELFNBQUksR0FBZSxFQUFFLENBQUM7UUFHOUIsWUFBWTtRQUNMLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFHM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFBakMsaUJBbUJDO1FBbEJDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzlFLElBQU0sS0FBSyxHQUErQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25CLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztZQUN6QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQjtTQUNGO1FBQ0QsSUFBTSxRQUFRLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU8sNEJBQVEsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEVBQUU7b0JBQ2pELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDWixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUFFLEdBQUcsRUFBRSxDQUFDO29CQUNyQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ3JDLElBQUksR0FBRyxLQUFLLENBQUM7d0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BDO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCx5Q0FBeUM7SUFDbEMsOEJBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBRTdCLHFCQUFxQjtnQkFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFFM0QsWUFBWTtnQkFDWixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUUsQ0FBQztnQkFDekMsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztvQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBRXBCLEtBQUs7Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FDZCxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFDckMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQ3RDLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUdNLG9DQUFnQixHQUF2QixjQUE0QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdDLG1DQUFlLEdBQXRCLGNBQTRCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXJFLDhCQUFVLEdBQWpCLFVBQWtCLElBQThCO1FBQzlDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN6RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLHlDQUFxQixHQUE3QixVQUE4QixDQUFTLEVBQUUsQ0FBUztRQUNoRCxJQUFNLElBQUksR0FBK0IsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFsRytCO1FBQS9CLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUE4QztJQUNsQztRQUEvQixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFBeUM7SUFDbEM7UUFBL0IsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQXlDO0lBSi9DLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FxRzdCO0lBQUQsZ0JBQUM7Q0FyR0QsQUFxR0MsSUFBQTtrQkFyR29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF6ZUxvZ2ljIHtcclxuICAvLyDsl5DrlJTthLDsl5DshJwg7Jew6rKw7ZWgIO2UhOumrO2MuSAmIOyKpO2UhOudvOydtO2KuFxyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpICAgICAgICAgICAgdGlsZVByZWZhYjogY2MuUHJlZmFiICAgICAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgICAgICAgcGF0aEZyYW1lOiBjYy5TcHJpdGVGcmFtZSAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgICAgICAgZ3Jhc3NGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHJvd3M6IG51bWJlcjtcclxuICBwcml2YXRlIGNvbHM6IG51bWJlcjtcclxuICBwcml2YXRlIG1hemU6IG51bWJlcltdW10gPSBbXTtcclxuICBwcml2YXRlIGNvbnRhaW5lcjogY2MuTm9kZTtcclxuXHJcbiAgLy8g7IWAIO2BrOq4sCAo7ZS97IWAKVxyXG4gIHB1YmxpYyBjZWxsU2l6ZTogbnVtYmVyID0gNTA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJvd3M6IG51bWJlciwgY29sczogbnVtYmVyLCBjb250YWluZXI6IGNjLk5vZGUpIHtcclxuICAgIHRoaXMucm93cyA9IHJvd3M7XHJcbiAgICB0aGlzLmNvbHMgPSBjb2xzO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVNYXplKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vICjquLDsobQgREZTICsgYWRkTG9vcHMg6re464yA66GcKVxyXG4gICAgdGhpcy5tYXplID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5yb3dzIH0sICgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbCgxKSk7XHJcbiAgICBjb25zdCBzdGFjazogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10gPSBbXTtcclxuICAgIHRoaXMubWF6ZVsxXVsxXSA9IDA7XHJcbiAgICBzdGFjay5wdXNoKHsgeDogMSwgeTogMSB9KTtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgY3VyID0gc3RhY2sucG9wKCkhO1xyXG4gICAgICBjb25zdCBuZWlnaGJvcnMgPSB0aGlzLmdldFVudmlzaXRlZE5laWdoYm9ycyhjdXIueCwgY3VyLnkpO1xyXG4gICAgICBpZiAobmVpZ2hib3JzLmxlbmd0aCkge1xyXG4gICAgICAgIHN0YWNrLnB1c2goY3VyKTtcclxuICAgICAgICBjb25zdCBuZXh0ID0gbmVpZ2hib3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5laWdoYm9ycy5sZW5ndGgpXTtcclxuICAgICAgICB0aGlzLm1hemVbbmV4dC55XVtuZXh0LnhdID0gMDtcclxuICAgICAgICB0aGlzLm1hemVbKGN1ci55ICsgbmV4dC55KSAvIDJdWyhjdXIueCArIG5leHQueCkgLyAyXSA9IDA7XHJcbiAgICAgICAgc3RhY2sucHVzaChuZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9vcFByb2IgPSBsZXZlbCA+PSA2ID8gMC4wNSA6IDAuMDM7XHJcbiAgICB0aGlzLmFkZExvb3BzKGxvb3BQcm9iKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkTG9vcHMocHJvYjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCB5ID0gMTsgeSA8IHRoaXMucm93cyAtIDE7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0gMTsgeCA8IHRoaXMuY29scyAtIDE7IHgrKykge1xyXG4gICAgICAgIGlmICh0aGlzLm1hemVbeV1beF0gPT09IDEgJiYgTWF0aC5yYW5kb20oKSA8IHByb2IpIHtcclxuICAgICAgICAgIGxldCBjbnQgPSAwO1xyXG4gICAgICAgICAgaWYgKHRoaXMubWF6ZVt5IC0gMV1beF0gPT09IDApIGNudCsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMubWF6ZVt5ICsgMV1beF0gPT09IDApIGNudCsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMubWF6ZVt5XVt4IC0gMV0gPT09IDApIGNudCsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMubWF6ZVt5XVt4ICsgMV0gPT09IDApIGNudCsrO1xyXG4gICAgICAgICAgaWYgKGNudCA9PT0gMSkgdGhpcy5tYXplW3ldW3hdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDtg4DsnbwocHJlZmFiKSDsnbjsiqTthLTsiqTtmZTtlbTshJwg7Jik7IaU6ri4L+2SgOyIsiDsnbTrr7jsp4DroZwg66CM642U66eBICovXHJcbiAgcHVibGljIHJlbmRlck1hemUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gIFxyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XHJcbiAgICAgICAgY29uc3QgdGlsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlsZVByZWZhYik7XHJcbiAgICAgICAgdGlsZS5wYXJlbnQgPSB0aGlzLmNvbnRhaW5lcjtcclxuICBcclxuICAgICAgICAvLyDihpIg6rytIOydtCDrkZAg7KSE7J2EIOy2lOqwgO2VmOyEuOyalCDihpBcclxuICAgICAgICB0aWxlLnNldENvbnRlbnRTaXplKHRoaXMuY2VsbFNpemUsIHRoaXMuY2VsbFNpemUpO1xyXG4gICAgICAgIHRpbGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkhLnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5TSU1QTEU7XHJcbiAgXHJcbiAgICAgICAgLy8g7Iqk7ZSE65287J207Yq4IO2UhOugiOyehFxyXG4gICAgICAgIGNvbnN0IHNwID0gdGlsZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSE7XHJcbiAgICAgICAgc3Auc3ByaXRlRnJhbWUgPSB0aGlzLm1hemVbeV1beF0gPT09IDBcclxuICAgICAgICAgID8gdGhpcy5wYXRoRnJhbWVcclxuICAgICAgICAgIDogdGhpcy5ncmFzc0ZyYW1lO1xyXG4gIFxyXG4gICAgICAgIC8vIOychOy5mFxyXG4gICAgICAgIHRpbGUuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICB4ICogdGhpcy5jZWxsU2l6ZSArIHRoaXMuY2VsbFNpemUgLyAyLFxyXG4gICAgICAgICAgeSAqIHRoaXMuY2VsbFNpemUgKyB0aGlzLmNlbGxTaXplIC8gMlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIHB1YmxpYyBnZXRTdGFydFBvc2l0aW9uKCkgeyByZXR1cm4geyB4OiAxLCB5OiAxIH07IH1cclxuICBwdWJsaWMgZ2V0R29hbFBvc2l0aW9uKCkgIHsgcmV0dXJuIHsgeDogdGhpcy5jb2xzIC0gMiwgeTogdGhpcy5yb3dzIC0gMiB9OyB9XHJcblxyXG4gIHB1YmxpYyBpc1dhbGthYmxlKGNlbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNlbGwueCA8IDAgfHwgY2VsbC54ID49IHRoaXMuY29scyB8fCBjZWxsLnkgPCAwIHx8IGNlbGwueSA+PSB0aGlzLnJvd3MpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLm1hemVbY2VsbC55XVtjZWxsLnhdID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVbnZpc2l0ZWROZWlnaGJvcnMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSB7XHJcbiAgICBjb25zdCBsaXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgaWYgKHggLSAyID49IDAgJiYgdGhpcy5tYXplW3ldW3ggLSAyXSA9PT0gMSkgbGlzdC5wdXNoKHsgeDogeCAtIDIsIHkgfSk7XHJcbiAgICBpZiAoeCArIDIgPCB0aGlzLmNvbHMgJiYgdGhpcy5tYXplW3ldW3ggKyAyXSA9PT0gMSkgbGlzdC5wdXNoKHsgeDogeCArIDIsIHkgfSk7XHJcbiAgICBpZiAoeSAtIDIgPj0gMCAmJiB0aGlzLm1hemVbeSAtIDJdW3hdID09PSAxKSBsaXN0LnB1c2goeyB4LCB5OiB5IC0gMiB9KTtcclxuICAgIGlmICh5ICsgMiA8IHRoaXMucm93cyAmJiB0aGlzLm1hemVbeSArIDJdW3hdID09PSAxKSBsaXN0LnB1c2goeyB4LCB5OiB5ICsgMiB9KTtcclxuICAgIHJldHVybiBsaXN0O1xyXG4gIH1cclxufVxyXG4iXX0=
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
var GameData_1 = require("./GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOverManager = /** @class */ (function (_super) {
    __extends(GameOverManager, _super);
    function GameOverManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.retryButton = null;
        _this.mainMenuButton = null;
        return _this;
    }
    GameOverManager.prototype.start = function () {
        this.retryButton.on('click', this.onRetryButtonClick, this);
        this.mainMenuButton.on('click', this.onMainMenuButtonClick, this);
    };
    GameOverManager.prototype.onRetryButtonClick = function () {
        // Retry → global currentLevel 값 그대로 MazeScene으로 로드 (실패했던 레벨부터 재시작)
        cc.director.loadScene("MazeScene");
    };
    GameOverManager.prototype.onMainMenuButtonClick = function () {
        // Main Menu → global currentLevel 재설정 후 MainScene으로 전환
        GameData_1.default.currentLevel = 1;
        cc.director.loadScene("MainScene");
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
    return GameOverManager;
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcR2FtZU92ZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXNCQztRQXBCRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixvQkFBYyxHQUFZLElBQUksQ0FBQzs7SUFpQm5DLENBQUM7SUFmRywrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEI7UUFDSSxtRUFBbUU7UUFDbkUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELCtDQUFxQixHQUFyQjtRQUNJLHVEQUF1RDtRQUN2RCxrQkFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQW5CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ2E7SUFMZCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBc0JuQztJQUFELHNCQUFDO0NBdEJELEFBc0JDLENBdEI0QyxFQUFFLENBQUMsU0FBUyxHQXNCeEQ7a0JBdEJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVEYXRhIGZyb20gXCIuL0dhbWVEYXRhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmV0cnlCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFpbk1lbnVCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmV0cnlCdXR0b24ub24oJ2NsaWNrJywgdGhpcy5vblJldHJ5QnV0dG9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWFpbk1lbnVCdXR0b24ub24oJ2NsaWNrJywgdGhpcy5vbk1haW5NZW51QnV0dG9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmV0cnlCdXR0b25DbGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyBSZXRyeSDihpIgZ2xvYmFsIGN1cnJlbnRMZXZlbCDqsJIg6re464yA66GcIE1hemVTY2VuZeycvOuhnCDroZzrk5wgKOyLpO2MqO2WiOuNmCDroIjrsqjrtoDthLAg7J6s7Iuc7J6RKVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1hemVTY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1haW5NZW51QnV0dG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTWFpbiBNZW51IOKGkiBnbG9iYWwgY3VycmVudExldmVsIOyerOyEpOyglSDtm4QgTWFpblNjZW5l7Jy866GcIOyghO2ZmFxyXG4gICAgICAgIEdhbWVEYXRhLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xyXG4gICAgfVxyXG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw4Q0FBNEM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1TUM7UUFyTUcsWUFBTSxHQUFjLElBQUksQ0FBQyxDQUFFLGtCQUFrQjtRQUc3QyxzQkFBZ0IsR0FBZ0IsRUFBRSxDQUFDO1FBSW5DLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUU3QixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFZixtQkFBYSxHQUFZLElBQUksQ0FBQztRQW1COUIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZOztJQXNLaEQsQ0FBQzthQXZNb0IsSUFBSTtJQWlCckIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxxQkFBTSxHQUFOO1FBQ0kscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7UUFFRCx1RUFBdUU7UUFDdkUsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhFLENBQUM7SUFJRCw2QkFBYyxHQUFkO1FBQ0ksSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFHRCxzQ0FBdUIsR0FBdkIsVUFBd0IsY0FBd0I7UUFDNUMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWTthQUNuQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQzthQUN4QixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUV0RCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFJRCx5QkFBVSxHQUFWO1FBQ0ksMEJBQTBCO1FBQzFCLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksZ0JBQWdCLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvQztRQUVELG1CQUFtQjtRQUNuQixJQUFJLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFL0IsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ2pDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTO1FBRWhELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBRTFDLFVBQVU7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFZLEdBQVosVUFBYSxLQUEwQjtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QywrRUFBK0U7UUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx5QkFBVSxHQUFWLFVBQVcsS0FBMEI7UUFDakMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlCLHVDQUF1QztRQUN2QyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdCLG9DQUFvQztRQUNwQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0IsT0FBTztTQUNWO1FBRUQsSUFBSSxTQUFTLEdBQVcsRUFBRSxDQUFDO1FBRTNCLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUNiLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDOUM7YUFBTTtZQUNILFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDM0M7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVsQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsc0JBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3pDLE9BQU87U0FDVjtRQUVELElBQUksVUFBVSxHQUFTLElBQUksQ0FBQztRQUM1QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFckIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLElBQUk7Z0JBQ0wsSUFBSSxHQUFHLEdBQUcsQ0FBQztvQkFBRSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkQsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztvQkFBRSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUUsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLEdBQUcsR0FBRyxDQUFDO29CQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO29CQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxNQUFNO1NBQ2I7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQVcsR0FBRyxVQUFLLEdBQUcsZUFBVSxVQUFVLENBQUMsR0FBRyxVQUFLLFVBQVUsQ0FBQyxHQUFHLE1BQUcsQ0FBQyxDQUFDO1lBQ2xGLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFBQSxpQkF5Q0M7UUF4Q0csT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBa0IsSUFBSSxDQUFDLEdBQUcsVUFBSyxJQUFJLENBQUMsR0FBRyxNQUFHLENBQUMsQ0FBQztRQUV4RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELElBQUksTUFBTSxFQUFFO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBeUIsSUFBSSxDQUFDLFVBQVUsWUFBTyxJQUFJLENBQUMsR0FBRyxVQUFLLElBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQyxDQUFDO1lBQ3JGLElBQU0sUUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsUUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNqQyxRQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUU1QyxRQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLFFBQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUVuQyxJQUFNLEVBQUUsR0FBRyxRQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRCxJQUFJLEVBQUUsRUFBRTtnQkFDSixFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFPLGVBQWU7Z0JBQ3pDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUssWUFBWTtnQkFDdEMsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2YsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsUUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNUO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsS0FBSyxDQUNKLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUNwRCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUNuQixFQUNELEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixJQUFJLE1BQUksQ0FBQyxZQUFZLEtBQUssS0FBSSxFQUFFO2dCQUM1QixNQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUM1QjtZQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQ0wsQ0FDSixDQUFDO0lBQ04sQ0FBQzs7SUFqTGMsaUJBQVksR0FBUyxJQUFJLENBQUM7SUFiekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQjt3Q0FDWjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztrREFDYTtJQUluQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs4Q0FDUztJQVRuQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBdU14QjtJQUFELFdBQUM7Q0F2TUQsQUF1TUMsQ0F2TWlDLEVBQUUsQ0FBQyxTQUFTLEdBdU03QztrQkF2TW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgVGhyZWVNYXRjaEJvYXJkIGZyb20gXCIuLzNNYXRjaEJvYXJkXCI7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgLy8g7Iqk7ZSE65287J207Yq4IOy7tO2PrOuEjO2KuCDsl7DqsrBcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDsgIC8vIOq4sOyhtCBzcHJpdGUg7IaN7ISxIOuzteq1rFxyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGV4cGxvc2lvblByZWZhYnM6IGNjLlByZWZhYltdID0gW107XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgZnJ1aXRTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgcHVibGljIHJvdzogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjb2w6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIHNlbGVjdGVkVGlsZTogVGlsZSA9IG51bGw7XHJcblxyXG4gICAgLy8g64W465Oc6rCAIOyUrOyXkCDsg53shLHrkJjrqbTshJwg7LSI6riw7ZmUIOuLqOqzhC5cclxuICAgIC8vIOydtCDsi5zsoJDsl5Ag7Lu07Y+s64SM7Yq4LCDsiqTtlITrnbzsnbTtirgsIOydtOuypO2KuCDrpqzsiqTrhIgg65Ox7J2EIOuTseuhnVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOyKpO2UhOudvOydtO2KuCDsu7Ttj6zrhIztirjqsIAg7JeG7Jy866m0IOy2lOqwgFxyXG4gICAgICAgIGlmICghdGhpcy5zcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVGlsZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgIC8vIOuTnOuemOq3uCDqsJDsp4Dsmqkg7J2067Kk7Yq4IOuTseuhnVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmcnVpdEluZGV4OiBudW1iZXIgPSAwOyAvLyDtmITsnqwg6rO87J28IOyduOuNseyKpFxyXG5cclxuICAgIHNldFJhbmRvbUZydWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5mcnVpdFNwcml0ZXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLmZydWl0SW5kZXggPSByYW5kb21JbmRleDtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJ1aXRTcHJpdGVzW3JhbmRvbUluZGV4XTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHNldFJhbmRvbUZydWl0RXhjbHVkaW5nKGV4Y2x1ZGVJbmRpY2VzOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCBhdmFpbGFibGVJbmRpY2VzID0gdGhpcy5mcnVpdFNwcml0ZXNcclxuICAgICAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+IGluZGV4KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGluZGV4ID0+ICFleGNsdWRlSW5kaWNlcy5pbmNsdWRlcyhpbmRleCkpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZUluZGljZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUluZGljZXMgPSB0aGlzLmZydWl0U3ByaXRlcy5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBhdmFpbGFibGVJbmRpY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUluZGljZXMubGVuZ3RoKV07XHJcbiAgICAgICAgdGhpcy5mcnVpdEluZGV4ID0gcmFuZG9tSW5kZXg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmZydWl0U3ByaXRlc1tyYW5kb21JbmRleF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGFkZE91dGxpbmUoKSB7XHJcbiAgICAgICAgLy8g6riw7KG07JeQIOyeiOuNmCBHcmFwaGljc+qwgCDsnojsnLzrqbQg7KCc6rGwXHJcbiAgICAgICAgbGV0IGV4aXN0aW5nR3JhcGhpY3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdHcmFwaGljcykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ29tcG9uZW50KGV4aXN0aW5nR3JhcGhpY3MpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIOyDiCBHcmFwaGljcyDrhbjrk5wg7IOd7ISxXHJcbiAgICAgICAgbGV0IGdyYXBoaWNzTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgZ3JhcGhpY3NOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBncmFwaGljc05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICBcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBncmFwaGljc05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSA1OyAvLyDthYzrkZDrpqwg65GQ6ruYXHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5CTEFDSzsgLy8g7YWM65GQ66asIOyDieyDgVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbGUgU2l6ZTpcIiwgc2l6ZSk7IC8vIOuUlOuyhOq5hSDroZzqt7hcclxuICAgIFxyXG4gICAgICAgIC8vIO2FjOuRkOumrCDqt7jrpqzquLBcclxuICAgICAgICBncmFwaGljcy5yZWN0KC1zaXplLndpZHRoIC8gMiwgLXNpemUuaGVpZ2h0IC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgLy8g65iQ64qUIHRoaXMudG91Y2hTdGFydFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuTnOuemOq3uCDsi5zsnpEg7JyE7LmYOlwiLCB0aGlzLnRvdWNoU3RhcnRQb3MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgZW5kUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IGVuZFBvcy5zdWIodGhpcy50b3VjaFN0YXJ0UG9zKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrk5zrnpjqt7gg64GdIOychOy5mDpcIiwgZW5kUG9zKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuTnOuemOq3uCDqsbDrpqw6XCIsIGRlbHRhKTtcclxuXHJcbiAgICAgICAgLy8g7LWc7IaMIOqxsOumrCDssrTtgawgKOyhsOq4iCDrjZQg7Jyg7Jew7ZWY6rKMLCDsmIg6IDPtlL3shYAg7J207IOB7J2066m0IOyymOumrClcclxuICAgICAgICBpZiAoZGVsdGEubGVuKCkgPCAzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi65Oc656Y6re4IOuEiOustCDsp6fslYTshJwg66y07Iuc65CoXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWJzWCA9IE1hdGguYWJzKGRlbHRhLngpO1xyXG4gICAgICAgIGxldCBhYnNZID0gTWF0aC5hYnMoZGVsdGEueSk7XHJcblxyXG4gICAgICAgIC8vIOyVhOyjvCDsnpHsnYAgZGVsdGEueOuCmCBkZWx0YS557J28IOqyveyasCwg67Cp7ZalIOuztOyglVxyXG4gICAgICAgIGlmIChhYnNYIDwgMSAmJiBhYnNZIDwgMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuybgOyngeyehOydtCDrhIjrrLQg7J6R7JWE7IScIOustOyLnOuQqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGFic1ggPiBhYnNZKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRlbHRhLnggPiAwID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZGVsdGEueSA+IDAgPyBcInVwXCIgOiBcImRvd25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi65Oc656Y6re4IOuwqe2WpTpcIiwgZGlyZWN0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFRocmVlTWF0Y2hCb2FyZCk7XHJcbiAgICAgICAgaWYgKCFib2FyZCB8fCAhYm9hcmRbXCJib2FyZFwiXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaHJlZU1hdGNoQm9hcmTrpbwg7LC+7J2EIOyImCDsl4bsnYxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRUaWxlOiBUaWxlID0gbnVsbDtcclxuICAgICAgICBjb25zdCByb3cgPSB0aGlzLnJvdztcclxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAocm93ID4gMCkgdGFyZ2V0VGlsZSA9IGJvYXJkW1wiYm9hcmRcIl1bcm93IC0gMV1bY29sXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IGJvYXJkW1wiYm9hcmRTaXplXCJdIC0gMSkgdGFyZ2V0VGlsZSA9IGJvYXJkW1wiYm9hcmRcIl1bcm93ICsgMV1bY29sXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+IDApIHRhcmdldFRpbGUgPSBib2FyZFtcImJvYXJkXCJdW3Jvd11bY29sIC0gMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sIDwgYm9hcmRbXCJib2FyZFNpemVcIl0gLSAxKSB0YXJnZXRUaWxlID0gYm9hcmRbXCJib2FyZFwiXVtyb3ddW2NvbCArIDFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0VGlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg7YOA7J28IOq1kO2ZmDogKCR7cm93fSwgJHtjb2x9KSA8LT4gKCR7dGFyZ2V0VGlsZS5yb3d9LCAke3RhcmdldFRpbGUuY29sfSlgKTtcclxuICAgICAgICAgICAgYm9hcmQuc3dhcFRpbGVzKHRoaXMsIHRhcmdldFRpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBsb2RlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBleHBsb2RlKCkg7Iuk7ZaJOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG5cclxuICAgICAgICBjb25zdCBwcmVmYWIgPSB0aGlzLmV4cGxvc2lvblByZWZhYnNbdGhpcy5mcnVpdEluZGV4XTtcclxuICAgICAgICBpZiAocHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDtj63rsJwg7J207Y6Z7Yq4IOyDneyEsSAoZnJ1aXRJbmRleCAke3RoaXMuZnJ1aXRJbmRleH0pOiAoJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9KWApO1xyXG4gICAgICAgICAgICBjb25zdCBlZmZlY3QgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBlZmZlY3QucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgZWZmZWN0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgICAgIGVmZmVjdC5zZXRTY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICBlZmZlY3QuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHMgPSBlZmZlY3QuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICAgICAgaWYgKHBzKSB7XHJcbiAgICAgICAgICAgICAgICBwcy5zdGFydFNpemUgPSAxNjA7ICAgICAgIC8vIO2MjO2LsO2BtCDsnpDssrQg7YGs6riwIO2CpOybgFxyXG4gICAgICAgICAgICAgICAgcHMuc3RhcnRTaXplVmFyID0gODA7ICAgICAvLyDri6TslpHtlZwg7YGs6riwIOyhsO2VqVxyXG4gICAgICAgICAgICAgICAgcHMubGlmZSA9IDAuMjU7XHJcbiAgICAgICAgICAgICAgICBwcy5saWZlVmFyID0gMC4wNTtcclxuICAgICAgICAgICAgICAgIHBzLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMS44KS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4xNSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRpbGUuc2VsZWN0ZWRUaWxlID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRpbGUuc2VsZWN0ZWRUaWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcbn1cclxuIl19
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
