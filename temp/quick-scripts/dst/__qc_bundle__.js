
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
require('./assets/scripts/Controller/CommonUI/GameStartOverlay');
require('./assets/scripts/Controller/CommonUI/GameState');
require('./assets/scripts/Controller/CommonUI/LoginManager');
require('./assets/scripts/Controller/CommonUI/MainMenuScene');
require('./assets/scripts/Controller/Multi/MultiGameWait');
require('./assets/scripts/Controller/Multi/MultiPlayConnect');
require('./assets/scripts/Controller/MyPage/MyInfoController');
require('./assets/scripts/Controller/MyPage/MyRecordController');
require('./assets/scripts/Controller/Single/SingleGameList');
require('./assets/scripts/Controller/Single/SingleGameOver');
require('./assets/scripts/Jang/MazeGameData');
require('./assets/scripts/Jang/MazeGameOverManager');
require('./assets/scripts/Jang/MazeGenerator');
require('./assets/scripts/Jang/MazeLogic');
require('./assets/scripts/Jang/MazePlayerController');
require('./assets/scripts/Jang/MazeRenderer');
require('./assets/scripts/Jang/MazeSingleGameManager');
require('./assets/scripts/Jang/MazeUIManager');
require('./assets/scripts/Jang/Maze_explainSceneManager');
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
require('./assets/scripts/Yu/3Match/3MExplain');
require('./assets/scripts/Yu/3Match/3MatchBoard');
require('./assets/scripts/Yu/3Match/3MatchManager');
require('./assets/scripts/Yu/3Match/Tile');
require('./assets/scripts/Yu/MoleGame/MoleExplain');
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
var GameState_1 = require("../CommonUI/GameState");
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.singleButton = null;
        _this.multiButton = null;
        _this.myPageButton = null;
        return _this;
    }
    MainMenu.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlParams, incomingRoomId, jwtToken, browserId, res, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlParams = new URLSearchParams(window.location.search);
                        incomingRoomId = urlParams.get("roomId");
                        jwtToken = localStorage.getItem('jwtToken');
                        browserId = localStorage.getItem('browserId');
                        //  초대 링크 감지 + 로그인 상태 확인
                        if (incomingRoomId) {
                            cc.log("초대 링크 감지 roomId:", incomingRoomId);
                            if (!jwtToken || !browserId) {
                                cc.warn("로그인 안됨 → 로그인 후 복귀를 위해 roomId 저장");
                                localStorage.setItem("pendingRoomId", incomingRoomId);
                                cc.director.loadScene("LoginScene");
                                return [2 /*return*/];
                            }
                            GameState_1.default.incomingRoomId = incomingRoomId;
                            GameState_1.default.isHost = false; // ✅ guest 입장
                            cc.director.loadScene("PlayerConnect");
                            return [2 /*return*/];
                        }
                        // ✅ 로그인 상태 확인
                        if (!jwtToken || !browserId) {
                            cc.warn('토큰 또는 브라우저 ID 없음 → 로그인으로 이동');
                            cc.director.loadScene('LoginScene');
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch('http://localhost:3000/auth/verify-token', {
                                method: 'POST',
                                headers: { 'Authorization': "Bearer " + jwtToken }
                            })];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        result = _a.sent();
                        if (!res.ok || !result.success) {
                            cc.warn("유효하지 않은 토큰. 로그인으로 리다이렉트");
                            localStorage.removeItem("jwtToken");
                            cc.director.loadScene("LoginScene");
                            return [2 /*return*/];
                        }
                        cc.log("토큰 검증 완료");
                        this.registerButtonEvents(this.singleButton.node, this.onClickSingle.bind(this));
                        this.registerButtonEvents(this.multiButton.node, this.onClickMulti.bind(this));
                        this.registerButtonEvents(this.myPageButton.node, this.onClickMyPage.bind(this));
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        cc.error("서버 통신 오류 → 로그인으로 이동", err_1);
                        cc.director.loadScene("LoginScene");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MainMenu.prototype.registerButtonEvents = function (node, callback) {
        cc.log("버튼 이벤트 등록:", node.name);
        node.on(cc.Node.EventType.TOUCH_END, callback);
        node.on(cc.Node.EventType.MOUSE_DOWN, callback);
    };
    MainMenu.prototype.onClickSingle = function () {
        cc.log("싱글 게임 버튼 클릭됨. SingleGameList 씬으로 이동.");
        cc.director.loadScene("SingleGameList");
    };
    MainMenu.prototype.onClickMulti = function () {
        cc.log("onClickMulti 호출됨");
        GameState_1.default.isHost = true;
        cc.log("isHost 설정됨:", GameState_1.default.isHost);
        cc.director.loadScene("MultiWatingPage");
    };
    MainMenu.prototype.onClickMyPage = function () {
        cc.log("마이페이지 버튼 클릭됨. MyInfo 씬으로 이동.");
        cc.director.loadScene("MyInfo");
    };
    MainMenu.prototype.onClickLogin = function () {
        cc.log("뒤로가기 버튼 클릭됨. Login 씬으로 이동.");
        cc.director.loadScene("LoginScene");
    };
    __decorate([
        property(cc.Button)
    ], MainMenu.prototype, "singleButton", void 0);
    __decorate([
        property(cc.Button)
    ], MainMenu.prototype, "multiButton", void 0);
    __decorate([
        property(cc.Button)
    ], MainMenu.prototype, "myPageButton", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcQ29tbW9uVUlcXE1haW5NZW51U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsbURBQThDO0FBRzlDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0ZDO1FBN0ZDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGtCQUFZLEdBQWMsSUFBSSxDQUFDOztJQXVGakMsQ0FBQztJQXJGTyx5QkFBTSxHQUFaOzs7Ozs7d0JBQ1EsU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3hELGNBQWMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUV6QyxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDNUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBRXBELHdCQUF3Qjt3QkFDeEIsSUFBSSxjQUFjLEVBQUU7NEJBQ2xCLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLENBQUM7NEJBRTNDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0NBQzNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQ0FDM0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0NBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlB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Q0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUE1RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1c7SUFSWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK0Y1QjtJQUFELGVBQUM7Q0EvRkQsQUErRkMsQ0EvRnFDLEVBQUUsQ0FBQyxTQUFTLEdBK0ZqRDtrQkEvRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi9Db21tb25VSS9HYW1lU3RhdGVcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gIHNpbmdsZUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICBtdWx0aUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICBteVBhZ2VCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBjb25zdCBpbmNvbWluZ1Jvb21JZCA9IHVybFBhcmFtcy5nZXQoXCJyb29tSWRcIik7XHJcblxyXG4gICAgY29uc3Qgand0VG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0VG9rZW4nKTtcclxuICAgIGNvbnN0IGJyb3dzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdicm93c2VySWQnKTtcclxuXHJcbiAgICAvLyAg7LSI64yAIOunge2BrCDqsJDsp4AgKyDroZzqt7jsnbgg7IOB7YOcIO2ZleyduFxyXG4gICAgaWYgKGluY29taW5nUm9vbUlkKSB7XHJcbiAgICAgIGNjLmxvZyhcIuy0iOuMgCDrp4Htgawg6rCQ7KeAIHJvb21JZDpcIiwgaW5jb21pbmdSb29tSWQpO1xyXG5cclxuICAgICAgaWYgKCFqd3RUb2tlbiB8fCAhYnJvd3NlcklkKSB7XHJcbiAgICAgICAgY2Mud2FybihcIuuhnOq3uOyduCDslYjrkKgg4oaSIOuhnOq3uOyduCDtm4Qg67O16reA66W8IOychO2VtCByb29tSWQg7KCA7J6lXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGVuZGluZ1Jvb21JZFwiLCBpbmNvbWluZ1Jvb21JZCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9naW5TY2VuZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEdhbWVTdGF0ZS5pbmNvbWluZ1Jvb21JZCA9IGluY29taW5nUm9vbUlkO1xyXG4gICAgICBHYW1lU3RhdGUuaXNIb3N0ID0gZmFsc2U7IC8vIOKchSBndWVzdCDsnoXsnqVcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiUGxheWVyQ29ubmVjdFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKchSDroZzqt7jsnbgg7IOB7YOcIO2ZleyduFxyXG4gICAgaWYgKCFqd3RUb2tlbiB8fCAhYnJvd3NlcklkKSB7XHJcbiAgICAgIGNjLndhcm4oJ+2GoO2BsCDrmJDripQg67iM65287Jqw7KCAIElEIOyXhuydjCDihpIg66Gc6re47J247Jy866GcIOydtOuPmScpO1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0xvZ2luU2NlbmUnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC92ZXJpZnktdG9rZW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtqd3RUb2tlbn1gIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBpZiAoIXJlcy5vayB8fCAhcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICBjYy53YXJuKFwi7Jyg7Zqo7ZWY7KeAIOyViuydgCDthqDtgbAuIOuhnOq3uOyduOycvOuhnCDrpqzri6TsnbTroIntirhcIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJqd3RUb2tlblwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2dpblNjZW5lXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2MubG9nKFwi7Yag7YGwIOqygOymnSDsmYTro4xcIik7XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQnV0dG9uRXZlbnRzKHRoaXMuc2luZ2xlQnV0dG9uLm5vZGUsIHRoaXMub25DbGlja1NpbmdsZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5yZWdpc3RlckJ1dHRvbkV2ZW50cyh0aGlzLm11bHRpQnV0dG9uLm5vZGUsIHRoaXMub25DbGlja011bHRpLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyQnV0dG9uRXZlbnRzKHRoaXMubXlQYWdlQnV0dG9uLm5vZGUsIHRoaXMub25DbGlja015UGFnZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY2MuZXJyb3IoXCLshJzrsoQg7Ya17IugIOyYpOulmCDihpIg66Gc6re47J247Jy866GcIOydtOuPmVwiLCBlcnIpO1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2dpblNjZW5lXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJlZ2lzdGVyQnV0dG9uRXZlbnRzKG5vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICBjYy5sb2coXCLrsoTtirwg7J2067Kk7Yq4IOuTseuhnTpcIiwgbm9kZS5uYW1lKTtcclxuICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBjYWxsYmFjayk7XHJcbiAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tTaW5nbGUoKSB7XHJcbiAgICBjYy5sb2coXCLsi7HquIAg6rKM7J6EIOuyhO2KvCDtgbTrpq3rkKguIFNpbmdsZUdhbWVMaXN0IOyUrOycvOuhnCDsnbTrj5kuXCIpO1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2luZ2xlR2FtZUxpc3RcIik7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTXVsdGkoKSB7XHJcbiAgICBjYy5sb2coXCJvbkNsaWNrTXVsdGkg7Zi47Lac65CoXCIpO1xyXG4gICAgR2FtZVN0YXRlLmlzSG9zdCA9IHRydWU7XHJcbiAgICBjYy5sb2coXCJpc0hvc3Qg7ISk7KCV65CoOlwiLCBHYW1lU3RhdGUuaXNIb3N0KTtcclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk11bHRpV2F0aW5nUGFnZVwiKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tNeVBhZ2UoKSB7XHJcbiAgICBjYy5sb2coXCLrp4jsnbTtjpjsnbTsp4Ag67KE7Yq8IO2BtOumreuQqC4gTXlJbmZvIOyUrOycvOuhnCDsnbTrj5kuXCIpO1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTXlJbmZvXCIpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0xvZ2luKCkge1xyXG4gICAgY2MubG9nKFwi65Kk66Gc6rCA6riwIOuyhO2KvCDtgbTrpq3rkKguIExvZ2luIOyUrOycvOuhnCDsnbTrj5kuXCIpO1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9naW5TY2VuZVwiKTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeUIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cec73N5ZjNJQYlYwuo3Uml1', 'MazeUIManager');
// scripts/Jang/MazeUIManager.ts

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
var MazeUIManager = /** @class */ (function (_super) {
    __extends(MazeUIManager, _super);
    function MazeUIManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 시간 표시 갱신
    MazeUIManager.prototype.setTimer = function (time) {
        if (this.timerNode) {
            var timerLabel = this.timerNode.getComponent(cc.Label);
            if (timerLabel)
                timerLabel.string = "" + Math.ceil(time);
            // "Time: " 부분 제거!
        }
    };
    // 점수 표시 갱신
    MazeUIManager.prototype.setScore = function (score) {
        if (this.scoreNode) {
            var scoreLabel = this.scoreNode.getComponent(cc.Label);
            if (scoreLabel)
                scoreLabel.string = "" + score;
            // "Score: " 부분 제거!
        }
    };
    MazeUIManager.prototype.onLoad = function () {
        if (this.backBtn) {
            this.backBtn.on("click", function () {
                cc.director.loadScene("SingleGameList");
            });
        }
    };
    __decorate([
        property(cc.Node)
    ], MazeUIManager.prototype, "timerNode", void 0);
    __decorate([
        property(cc.Node)
    ], MazeUIManager.prototype, "scoreNode", void 0);
    __decorate([
        property(cc.Node)
    ], MazeUIManager.prototype, "backBtn", void 0);
    MazeUIManager = __decorate([
        ccclass
    ], MazeUIManager);
    return MazeUIManager;
}(cc.Component));
exports.default = MazeUIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZVVJTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDs7SUE0QkEsQ0FBQztJQXhCQyxXQUFXO0lBQ0osZ0NBQVEsR0FBZixVQUFnQixJQUFZO1FBQzFCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsSUFBSSxVQUFVO2dCQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFDO1lBQ3pELGtCQUFrQjtTQUNuQjtJQUNILENBQUM7SUFFRCxXQUFXO0lBQ0osZ0NBQVEsR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsSUFBSSxVQUFVO2dCQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBRyxLQUFPLENBQUM7WUFDL0MsbUJBQW1CO1NBQ3BCO0lBQ0gsQ0FBQztJQUNELDhCQUFNLEdBQU47UUFDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUN2QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBMUJvQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFBcUI7SUFDcEI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQXFCO0lBQ3BCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUFtQjtJQUhsQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBNEJqQztJQUFELG9CQUFDO0NBNUJELEFBNEJDLENBNUIwQyxFQUFFLENBQUMsU0FBUyxHQTRCdEQ7a0JBNUJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hemVVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTm9kZSkgdGltZXJOb2RlITogY2MuTm9kZTsgICAgLy8g7ZSE66as7Yy5KExhYmVsKSDrhbjrk5zroZwg7ZWg64u5XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBzY29yZU5vZGUhOiBjYy5Ob2RlOyAgICAvLyDtlITrpqztjLkoTGFiZWwpIOuFuOuTnOuhnCDtlaDri7lcbiAgQHByb3BlcnR5KGNjLk5vZGUpIGJhY2tCdG4hOiBjYy5Ob2RlO1xuICAvLyDsi5zqsIQg7ZGc7IucIOqwseyLoFxuICBwdWJsaWMgc2V0VGltZXIodGltZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMudGltZXJOb2RlKSB7XG4gICAgICBjb25zdCB0aW1lckxhYmVsID0gdGhpcy50aW1lck5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgIGlmICh0aW1lckxhYmVsKSB0aW1lckxhYmVsLnN0cmluZyA9IGAke01hdGguY2VpbCh0aW1lKX1gO1xuICAgICAgLy8gXCJUaW1lOiBcIiDrtoDrtoQg7KCc6rGwIVxuICAgIH1cbiAgfVxuXG4gIC8vIOygkOyImCDtkZzsi5wg6rCx7IugXG4gIHB1YmxpYyBzZXRTY29yZShzY29yZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuc2NvcmVOb2RlKSB7XG4gICAgICBjb25zdCBzY29yZUxhYmVsID0gdGhpcy5zY29yZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgIGlmIChzY29yZUxhYmVsKSBzY29yZUxhYmVsLnN0cmluZyA9IGAke3Njb3JlfWA7XG4gICAgICAvLyBcIlNjb3JlOiBcIiDrtoDrtoQg7KCc6rGwIVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIGlmICh0aGlzLmJhY2tCdG4pIHtcbiAgICB0aGlzLmJhY2tCdG4ub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTaW5nbGVHYW1lTGlzdFwiKTtcbiAgICB9KTtcbiAgfVxufVxufVxuIl19
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
        _this.exitButton = null;
        _this.frogSprite = null;
        _this.gameStartOverlayPrefab = null;
        _this.gameOverUIPrefab = null;
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
        if (this.gameStartOverlayPrefab) {
            var overlay = cc.instantiate(this.gameStartOverlayPrefab);
            this.node.addChild(overlay);
            overlay.setPosition(0, 0);
            // 오버레이 애니메이션 완료 후 게임 시작
            this.scheduleOnce(function () {
                _this.beginGame(); // ← 기존 게임 시작 함수
            }, 2); // 오버레이 애니메이션 길이에 맞게 조정
        }
        else {
            this.beginGame(); // 프리팹이 없으면 바로 시작
        }
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
        this.startButton.node.active = false;
        this.timerLabel.node.active = false;
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
    GameController.prototype.beginGame = function () {
        if (this.isGameActive)
            return; // 중복 방지
        this.colorSequence = [];
        this.userInput = [];
        this.score = 0;
        this.level = 1;
        this.updateScore();
        this.setStatusMessage("게임 시작!");
        this.hintLabel.string = "";
        this.isGameActive = true;
        this.setFrogState("neutral");
        this.startTimer();
        this.generateColorSequence();
        this.showColorSequence();
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
        this.remainingTime = 10;
        this.timerLabel.string = "" + this.remainingTime;
        this.timerLabel.node.active = true;
        this.schedule(this.tickCallback, 1);
    };
    GameController.prototype.onTimeUp = function () {
        this.isGameActive = false;
        this.disableButtons(true);
        this.startButton.interactable = false;
        // 게임 상태 저장
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        GameState_1.default.score = this.score;
        GameState_1.default.gameId = "remember-game"; // 기억력 게임 고유 식별자
        // 게임종료 Prefab 생성
        var gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI); // 또는 Canvas에 직접 붙여도 됨
        // 정중앙 배치
        gameOverUI.setPosition(0, 0);
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
        property(cc.Button)
    ], GameController.prototype, "exitButton", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameController.prototype, "frogSprite", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "gameStartOverlayPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "gameOverUIPrefab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxSZW1lbWJlckdhbWVcXFJlbWVtYmVyR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUN0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWtVQztRQWpVd0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFDOUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUM3QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQzdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQzdCLDRCQUFzQixHQUFjLElBQUksQ0FBQztRQUN6QyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHaEQsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsZUFBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFMUIsZUFBUyxHQUFpQyxFQUFFLENBQUM7UUFDN0MsWUFBTSxHQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7O0lBMFNsRSxDQUFDO0lBeFNHLCtCQUFN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O0lBQUQscUJBQUM7Q0FsVUQsQUFrVUMsQ0FsVTJDLEVBQUUsQ0FBQyxTQUFTLEdBa1V2RDtrQkFsVW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi8uLi9Db250cm9sbGVyL0NvbW1vblVJL0dhbWVTdGF0ZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSByZWRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSB5ZWxsb3dCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBncmVlbkJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIGJsdWVCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgc3RhdHVzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgaGludExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIGV4aXRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKSBmcm9nU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgZ2FtZVN0YXJ0T3ZlcmxheVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIGdhbWVPdmVyVUlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29sb3JTZXF1ZW5jZTogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgdXNlcklucHV0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGlzR2FtZUFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByZW1haW5pbmdUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0aWNrQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIGJ1dHRvbk1hcDogeyBba2V5OiBzdHJpbmddOiBjYy5CdXR0b24gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBjb2xvcnM6IHN0cmluZ1tdID0gW1wicmVkXCIsIFwieWVsbG93XCIsIFwiZ3JlZW5cIiwgXCJibHVlXCJdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBHYW1lU3RhdGUubGFzdEdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhcnRPdmVybGF5UHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVTdGFydE92ZXJsYXlQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQob3ZlcmxheSk7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAvLyDsmKTrsoTroIjsnbQg7JWg64uI66mU7J207IWYIOyZhOujjCDtm4Qg6rKM7J6EIOyLnOyekVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luR2FtZSgpOyAvLyDihpAg6riw7KG0IOqyjOyehCDsi5zsnpEg7ZWo7IiYXHJcbiAgICAgICAgICAgIH0sIDIpOyAvLyDsmKTrsoTroIjsnbQg7JWg64uI66mU7J207IWYIOq4uOydtOyXkCDrp57qsowg7KGw7KCVXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iZWdpbkdhbWUoKTsgLy8g7ZSE66as7Yy57J20IOyXhuycvOuptCDrsJTroZwg7Iuc7J6RXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbk1hcCA9IHtcclxuICAgICAgICAgICAgcmVkOiB0aGlzLnJlZEJ1dHRvbixcclxuICAgICAgICAgICAgeWVsbG93OiB0aGlzLnllbGxvd0J1dHRvbixcclxuICAgICAgICAgICAgZ3JlZW46IHRoaXMuZ3JlZW5CdXR0b24sXHJcbiAgICAgICAgICAgIGJsdWU6IHRoaXMuYmx1ZUJ1dHRvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uU3RhcnRHYW1lLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Db2xvckJ1dHRvbkNsaWNrKCdyZWQnKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy55ZWxsb3dCdXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29sb3JCdXR0b25DbGljaygneWVsbG93JyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ3JlZW5CdXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29sb3JCdXR0b25DbGljaygnZ3JlZW4nKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ibHVlQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbG9yQnV0dG9uQ2xpY2soJ2JsdWUnKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbEJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnRpY2tDYWxsYmFjayA9IHRoaXMudXBkYXRlVGltZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEZyb2dTdGF0ZShcIm5ldXRyYWxcIik7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy95ZWxsb3dCdXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZWxsb3dCdXR0b24g64iM66a8Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ncmVlbkJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dyZWVuQnV0dG9uIOuIjOumvCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmx1ZUJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JsdWVCdXR0b24g64iM66a8Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9yZWRCdXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWRCdXR0b24g64iM66a8Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgYmVnaW5HYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZUFjdGl2ZSkgcmV0dXJuOyAvLyDspJHrs7Ug67Cp7KeAXHJcbiAgICAgICAgdGhpcy5jb2xvclNlcXVlbmNlID0gW107XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmxldmVsID0gMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi6rKM7J6EIOyLnOyekSFcIik7XHJcbiAgICAgICAgdGhpcy5oaW50TGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRGcm9nU3RhdGUoXCJuZXV0cmFsXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDb2xvclNlcXVlbmNlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93Q29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0RnJvZ1N0YXRlKHN0YXRlOiBcIm5ldXRyYWxcIiB8IFwic21pbGVcIiB8IFwiY3J5XCIpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVNYXAgPSB7XHJcbiAgICAgICAgICAgIG5ldXRyYWw6IFwi66y07ZGc7KCV6rCc6rW0XCIsXHJcbiAgICAgICAgICAgIHNtaWxlOiBcIuybg+uKlOqwnOq1tFwiLFxyXG4gICAgICAgICAgICBjcnk6IFwi7Jqw64qU6rCc6rW0XCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDsnbTrr7jsp4Drp4jri6Qg6rCc67OEIOyCrOydtOymiCDsp4DsoJVcclxuICAgICAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAgICAgICBuZXV0cmFsOiB7IHdpZHRoOiA0NTAsIGhlaWdodDogNTEwIH0sXHJcbiAgICAgICAgICAgIHNtaWxlOiB7IHdpZHRoOiA0NTAsIGhlaWdodDogNjAwIH0sXHJcbiAgICAgICAgICAgIGNyeTogeyB3aWR0aDogNjAwLCBoZWlnaHQ6IDUwMCB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ByaXRlTmFtZSA9IHNwcml0ZU1hcFtzdGF0ZV07XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHNpemVNYXBbc3RhdGVdO1xyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgSW1hZ2VzL1NpbS8ke3Nwcml0ZU5hbWV9YCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOqwnOq1rOumrCDsnbTrr7jsp4Ag66Gc65OcIOyLpO2MqDogJHtzcHJpdGVOYW1lfWAsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mcm9nU3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvZ1Nwcml0ZS50eXBlID0gY2MuU3ByaXRlLlR5cGUuU0lNUExFO1xyXG4gICAgICAgICAgICB0aGlzLmZyb2dTcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgICAgICB0aGlzLmZyb2dTcHJpdGUubm9kZS5zZXRDb250ZW50U2l6ZShzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25TdGFydEdhbWUoKSB7XHJcbiAgICAgICAgY29uc3QgYnRuTGFiZWwgPSB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgIGlmIChidG5MYWJlbCA9PT0gXCLri6Tsi5wg64+E7KCEXCIpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNNZXNzYWdlKFwi7ZiE7J6sIOuLqOqzhCDri6Tsi5wg7Iuc7J6RIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5oaW50TGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RnJvZ1N0YXRlKFwibmV1dHJhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbG9yU2VxdWVuY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29sb3JCdXR0b25DbGljayhjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzR2FtZUFjdGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5idXR0b25NYXBbY29sb3JdLmludGVyYWN0YWJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbk1hcFtjb2xvcl07XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2FsZSA9IGJ0bi5ub2RlLnNjYWxlO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUG9zID0gYnRuLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8g7Jew7J6OIO2BtOumrSDtmqjqs7wgKOqwleyhsCDrsoTsoIQpXHJcbiAgICAgICAgY2MudHdlZW4oYnRuLm5vZGUpXHJcbiAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4xLCB7IHNjYWxlOiBvcmlnaW5hbFNjYWxlICogMC44NSB9LCB7IGVhc2luZzogJ3F1YWRJbicgfSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMSwgeyBvcGFjaXR5OiAxODAgfSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMSwgeyBwb3NpdGlvbjogY2MudjMob3JpZ2luYWxQb3MueCwgb3JpZ2luYWxQb3MueSAtIDUpIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjEsIHsgc2NhbGU6IG9yaWdpbmFsU2NhbGUgfSwgeyBlYXNpbmc6ICdxdWFkT3V0JyB9KSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4xLCB7IHBvc2l0aW9uOiBvcmlnaW5hbFBvcyB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJJbnB1dC5wdXNoKGNvbG9yKTtcclxuICAgICAgICB0aGlzLmNoZWNrVXNlcklucHV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaW1lcigpIHtcclxuICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUtLTtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5yZW1haW5pbmdUaW1lfWA7XHJcbiAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nVGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpY2tDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHRoaXMub25UaW1lVXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpY2tDYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdUaW1lID0gMTA7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGAke3RoaXMucmVtYWluaW5nVGltZX1gO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnRpY2tDYWxsYmFjaywgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRpbWVVcCgpIHtcclxuICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbnModHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g6rKM7J6EIOyDge2DnCDsoIDsnqVcclxuICAgICAgICBHYW1lU3RhdGUubGFzdEdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuICAgICAgICBHYW1lU3RhdGUuc2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdGF0ZS5nYW1lSWQgPSBcInJlbWVtYmVyLWdhbWVcIjsgLy8g6riw7Ja166ClIOqyjOyehCDqs6DsnKAg7Iud67OE7J6QXHJcbiAgICAgICAgLy8g6rKM7J6E7KKF66OMIFByZWZhYiDsg53shLFcclxuICAgICAgICBjb25zdCBnYW1lT3ZlclVJID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lT3ZlclVJUHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZU92ZXJVSSk7ICAvLyDrmJDripQgQ2FudmFz7JeQIOyngeygkSDrtpnsl6zrj4Qg65CoXHJcblxyXG4gICAgICAgIC8vIOygleykkeyVmSDrsLDsuZhcclxuICAgICAgICBnYW1lT3ZlclVJLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tVc2VySW5wdXQoKSB7XHJcbiAgICAgICAgbGV0IGNvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0YXJnZXRTZXF1ZW5jZSA9IHRoaXMubGV2ZWwgPT09IDMgPyBbLi4udGhpcy5jb2xvclNlcXVlbmNlXS5yZXZlcnNlKCkgOiB0aGlzLmNvbG9yU2VxdWVuY2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VySW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlcklucHV0W2ldICE9PSB0YXJnZXRTZXF1ZW5jZVtpXSkge1xyXG4gICAgICAgICAgICAgICAgY29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3JyZWN0ICYmIHRoaXMudXNlcklucHV0Lmxlbmd0aCA9PT0gdGFyZ2V0U2VxdWVuY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RnJvZ1N0YXRlKFwic21pbGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzTWVzc2FnZShcIuygleuLtSEg64uk7J2MIOuLqOqzhOuhnCFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sb3JTZXF1ZW5jZSgpO1xyXG4gICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFjb3JyZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RnJvZ1N0YXRlKFwiY3J5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c01lc3NhZ2UoXCLti4DroLjsirXri4jri6QhIOuLpOyLnCDsi5zrj4TtlZjshLjsmpQuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gXCLri6Tsi5wg64+E7KCEXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25zKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlQ29sb3JTZXF1ZW5jZSgpIHtcclxuICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UgPSBbXTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxldmVsID49IDUgPyA3IDogdGhpcy5sZXZlbCArIDI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbG9ycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yU2VxdWVuY2UucHVzaCh0aGlzLmNvbG9yc1tpZHhdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaW50TGFiZWwuc3RyaW5nID0gdGhpcy5sZXZlbCA9PT0gMyA/IFwi67aI7J20IOq5nOu5oeydtOuKlCDsiJzshJzrpbwg67CY64yA66GcIOyeheugpe2VmOudvC5cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsg53shLHrkJwg7IOJ7IOBIOyInOyEnDpcIiwgdGhpcy5jb2xvclNlcXVlbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEluaXRpYWxCdXR0b25TdGF0ZSgpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuYnV0dG9uTWFwKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5ub2RlLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dDb2xvclNlcXVlbmNlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RnJvZ1N0YXRlKFwibmV1dHJhbFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsQnV0dG9uU3RhdGUoKTtcclxuICAgICAgICBsZXQgZGVsYXkgPSAwO1xyXG4gICAgICAgIHRoaXMuY29sb3JTZXF1ZW5jZS5mb3JFYWNoKGNvbG9yID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25NYXBbY29sb3JdO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLmFjdGl2YXRlQnV0dG9uRm9yQmxpbmsoYnRuKSwgZGVsYXkpO1xyXG4gICAgICAgICAgICBkZWxheSArPSAxLjA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZUFuc3dlcklucHV0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzTWVzc2FnZShcIuuyhO2KvCDsiJzshJzrpbwg66ee7Law7KO87IS47JqUIVwiKTtcclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZhdGVCdXR0b25Gb3JCbGluayhidXR0b246IGNjLkJ1dHRvbikge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2NhbGUgPSBidXR0b24ubm9kZS5zY2FsZTtcclxuICAgICAgICBidXR0b24ubm9kZS5vcGFjaXR5ID0gMTAwO1xyXG4gICAgICAgIGJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBjYy50d2VlbihidXR0b24ubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMTUsIHsgb3BhY2l0eTogMjU1LCBzY2FsZTogb3JpZ2luYWxTY2FsZSAqIDEuMDUgfSwgeyBlYXNpbmc6ICdxdWFkT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oMC4xNSwgeyBvcGFjaXR5OiAxMDAsIHNjYWxlOiBvcmlnaW5hbFNjYWxlIH0sIHsgZWFzaW5nOiAncXVhZEluJyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuYWJsZUFuc3dlcklucHV0KCkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5idXR0b25NYXApLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmcgPSBidG4ubm9kZS5nZXRDaGlsZEJ5TmFtZSgnQmFja2dyb3VuZCcpO1xyXG4gICAgICAgICAgICBpZiAoYmcpIHtcclxuICAgICAgICAgICAgICAgIC8vIPCfkqEgQmFja2dyb3VuZOydmCDtgazquLDrpbwg65Sw65286rCA6rKMIOunnuy2pFxyXG4gICAgICAgICAgICAgICAgYnRuLm5vZGUuc2V0Q29udGVudFNpemUoYmcuZ2V0Q29udGVudFNpemUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ0bi5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7YnRuLm5vZGUubmFtZX0gc2l6ZTpgLCBidG4ubm9kZS53aWR0aCwgYnRuLm5vZGUuaGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTY29yZSgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5zY29yZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U3RhdHVzTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0xhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNhYmxlQnV0dG9ucyhkaXNhYmxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmJ1dHRvbk1hcCkuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gIWRpc2FibGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZExpc3QoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTaW5nbGVHYW1lTGlzdCcpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timerDisplayPrefab = null;
        _this.scoreDisplayPrefab = null;
        _this.boardNode = null;
        _this.comboGauge = null;
        _this.feverSprite = null;
        _this.exitButton = null;
        _this.gameOverUIPrefab = null;
        _this.gameStartOverlayPrefab = null;
        _this.totalTime = 10;
        _this.currentTime = 10;
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
        var _this = this;
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        if (this.feverSprite && this.feverSprite.isValid) {
            this.feverSprite.active = false;
        }
        if (this.gameStartOverlayPrefab) {
            var startOverlay = cc.instantiate(this.gameStartOverlayPrefab);
            this.node.addChild(startOverlay);
            startOverlay.setPosition(0, 0);
            // 애니메이션 시간 후에 시작 (2초 권장)
            this.scheduleOnce(function () {
                _this.startGameLogic();
            }, 2);
        }
        else {
            this.startGameLogic();
        }
    };
    ThreeMatchManager.prototype.startGameLogic = function () {
        // 타이머 UI
        this.timerNode = cc.instantiate(this.timerDisplayPrefab);
        this.node.addChild(this.timerNode);
        this.timerLabel = this.timerNode.getChildByName("TimerLabel").getComponent(cc.Label);
        this.updateTimer();
        // 점수 UI
        this.scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(this.scoreNode);
        this.scoreLabel = this.scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScore(0);
        // 피버 관련 초기화
        this.comboValue = 0;
        this.comboMax = 300;
        this.comboGauge.progress = 0;
        this.isFeverTime = false;
        if (this.feverSprite)
            this.feverSprite.active = false;
        // 타이머 시작
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
            return;
        this.comboValue += amount;
        if (this.comboValue >= this.comboMax) {
            this.comboValue = this.comboMax;
            this.startFeverTime();
        }
        this.comboGauge.progress = this.comboValue / this.comboMax;
    };
    ThreeMatchManager.prototype.startFeverTime = function () {
        var _this = this;
        this.isFeverTime = true;
        this.feverSprite.active = true;
        this.scheduleOnce(function () {
            _this.endFeverTime();
        }, 10);
    };
    ThreeMatchManager.prototype.endFeverTime = function () {
        this.isFeverTime = false;
        this.comboValue = 0;
        this.comboGauge.progress = 0;
        this.feverSprite.active = false;
    };
    ThreeMatchManager.prototype.addMatchScore = function (matchCount) {
        var scoreToAdd = matchCount * 10;
        var finalScore = this.isFeverTime ? scoreToAdd * 2 : scoreToAdd;
        this.updateScore(finalScore);
    };
    ThreeMatchManager.prototype.onGameOver = function () {
        cc.log("게임 종료!");
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        GameState_1.default.score = this.score;
        GameState_1.default.gameId = "FruitPuzzle";
        var gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI);
        gameOverUI.setPosition(0, 0);
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
    __decorate([
        property(cc.Prefab)
    ], ThreeMatchManager.prototype, "gameOverUIPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], ThreeMatchManager.prototype, "gameStartOverlayPrefab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01hdGNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxpRUFBNEQ7QUFHNUQ7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFtSkM7UUFqSkcsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBR3JDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUdsQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsNEJBQXNCLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUE4R3pDLENBQUM7SUE1R0csaUNBQUssR0FBTDtRQUFBLGlCQW1CQztRQWxCRyxtQkFBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxP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RUFDcUI7SUF2QnhCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBbUpyQztJQUFELHdCQUFDO0NBbkpELEFBbUpDLENBbko4QyxFQUFFLENBQUMsU0FBUyxHQW1KMUQ7a0JBbkpvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgVGhyZWVNYXRjaEJvYXJkIGZyb20gXCIuLzNNYXRjaEJvYXJkXCI7XHJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4uLy4uL0NvbnRyb2xsZXIvQ29tbW9uVUkvR2FtZVN0YXRlXCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZU1hdGNoTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdGltZXJEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzY29yZURpc3BsYXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGNvbWJvR2F1Z2U6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZldmVyU3ByaXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgZXhpdEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ2FtZU92ZXJVSVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ2FtZVN0YXJ0T3ZlcmxheVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gMTA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAxMDtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb21ib1ZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb21ib01heDogbnVtYmVyID0gMzAwO1xyXG4gICAgcHJpdmF0ZSBpc0ZldmVyVGltZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmZldmVyU3ByaXRlICYmIHRoaXMuZmV2ZXJTcHJpdGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZldmVyU3ByaXRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGFydE92ZXJsYXlQcmVmYWIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRPdmVybGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lU3RhcnRPdmVybGF5UHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHN0YXJ0T3ZlcmxheSk7XHJcbiAgICAgICAgICAgIHN0YXJ0T3ZlcmxheS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOyVoOuLiOuplOydtOyFmCDsi5zqsIQg7ZuE7JeQIOyLnOyekSAoMuy0iCDqtozsnqUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lTG9naWMoKTtcclxuICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVMb2dpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWVMb2dpYygpIHtcclxuICAgICAgICAvLyDtg4DsnbTrqLggVUlcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGltZXJEaXNwbGF5UHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy50aW1lck5vZGUpO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbCA9IHRoaXMudGltZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiVGltZXJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIoKTtcclxuXHJcbiAgICAgICAgLy8g7KCQ7IiYIFVJXHJcbiAgICAgICAgdGhpcy5zY29yZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNjb3JlRGlzcGxheVByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuc2NvcmVOb2RlKTtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwgPSB0aGlzLnNjb3JlTm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNjb3JlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDApO1xyXG5cclxuICAgICAgICAvLyDtlLzrsoQg6rSA66CoIOy0iOq4sO2ZlFxyXG4gICAgICAgIHRoaXMuY29tYm9WYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21ib01heCA9IDMwMDtcclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNGZXZlclRpbWUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5mZXZlclNwcml0ZSkgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g7YOA7J2066i4IOyLnOyekVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZS0tO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLmN1cnJlbnRUaW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2NvcmUoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IGFtb3VudDtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5zY29yZX1gO1xyXG4gICAgICAgIHRoaXMuaW5jcmVhc2VDb21ib0dhdWdlKGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVhc2VDb21ib0dhdWdlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGZXZlclRpbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNvbWJvVmFsdWUgKz0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbWJvVmFsdWUgPj0gdGhpcy5jb21ib01heCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvVmFsdWUgPSB0aGlzLmNvbWJvTWF4O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RmV2ZXJUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tYm9HYXVnZS5wcm9ncmVzcyA9IHRoaXMuY29tYm9WYWx1ZSAvIHRoaXMuY29tYm9NYXg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRGZXZlclRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldmVyVGltZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZXZlclNwcml0ZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kRmV2ZXJUaW1lKCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZEZldmVyVGltZSgpIHtcclxuICAgICAgICB0aGlzLmlzRmV2ZXJUaW1lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb21ib1ZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLmNvbWJvR2F1Z2UucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuZmV2ZXJTcHJpdGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1hdGNoU2NvcmUobWF0Y2hDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmVUb0FkZCA9IG1hdGNoQ291bnQgKiAxMDtcclxuICAgICAgICBjb25zdCBmaW5hbFNjb3JlID0gdGhpcy5pc0ZldmVyVGltZSA/IHNjb3JlVG9BZGQgKiAyIDogc2NvcmVUb0FkZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKGZpbmFsU2NvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgY2MubG9nKFwi6rKM7J6EIOyiheujjCFcIik7XHJcbiAgICAgICAgR2FtZVN0YXRlLmxhc3RHYW1lU2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XHJcbiAgICAgICAgR2FtZVN0YXRlLnNjb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICBHYW1lU3RhdGUuZ2FtZUlkID0gXCJGcnVpdFB1enpsZVwiO1xyXG5cclxuICAgICAgICBjb25zdCBnYW1lT3ZlclVJID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lT3ZlclVJUHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZU92ZXJVSSk7XHJcbiAgICAgICAgZ2FtZU92ZXJVSS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGlzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyLseq4gCDqsozsnoQg66as7Iqk7Yq466GcIOuPjOyVhOqwgOq4sFwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTaW5nbGVHYW1lTGlzdFwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
        // 7) 남은 시간 표시용 레이블
        _this.timeLabel = null;
        _this.gameStartOverlayPrefab = null;
        // 게임 오버 오버레이 프리팹
        _this.gameOverUIPrefab = null;
        // 리스트로 돌아가기 버튼 
        _this.exitButton = null;
        _this.correctCount = 0;
        _this.score = 0;
        _this.answered = false;
        // 전체 게임 시간 (초)
        _this.timeLeft = 60;
        // y축(높이)마다 사용할 색상
        _this.blockTextures = [
            "Images/Sim/navyBlock",
            "Images/Sim/darkBlueBlock",
            "Images/Sim/blueBlock",
            "Images/Sim/whiteblueBlock" // y=3
        ];
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        var _this = this;
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        cc.debug.setDisplayStats(false);
        if (this.nextButton) {
            this.nextButton.node.on('click', this.nextQuestion, this);
        }
        this.score = 0;
        if (this.scoreLabel) {
            this.scoreLabel.string = "" + this.score;
        }
        this.timeLeft = 100;
        if (this.timeLabel) {
            this.timeLabel.string = "" + this.timeLeft;
        }
        // Game Start 오버레이 적용
        if (this.gameStartOverlayPrefab) {
            var overlay = cc.instantiate(this.gameStartOverlayPrefab);
            this.node.addChild(overlay);
            overlay.setPosition(0, 0);
            // 오버레이 애니메이션 시간 (예: 2초) 후 시작
            this.scheduleOnce(function () {
                _this.startGame();
            }, 2);
        }
        else {
            this.startGame();
        }
    };
    GameManager.prototype.startGame = function () {
        this.startTimer(); // 타이머 시작
        this.generateQuestion(); // 첫 문제 생성
    };
    /** 100초 타이머 시작 */
    GameManager.prototype.startTimer = function () {
        this.unschedule(this.updateTimer);
        this.timeLeft = 10;
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
        // 모든 버튼 비활성화
        this.optionButtons.forEach(function (btn) { return btn.interactable = false; });
        if (this.nextButton) {
            this.nextButton.interactable = false;
        }
        // 게임 상태 저장
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        GameState_1.default.score = this.score;
        GameState_1.default.gameId = "block-count-game"; // 원하는 식별자
        // 게임종료 Prefab 생성
        var gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI); // 또는 Canvas에 직접 붙여도 됨
        // 정중앙 배치
        gameOverUI.setPosition(0, 0);
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
        var layers = [];
        var maxY = 0;
        placedCoords.forEach(function (p) {
            maxY = Math.max(maxY, p.y);
            if (!layers[p.y])
                layers[p.y] = [];
            layers[p.y].push(p);
        });
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
                var isoX = (p.x - p.z) * (blockW / 2);
                var floorY = -300;
                var baseY = floorY + blockH / 2;
                var targetY = -(p.x + p.z) * (blockH / 2) + baseY + p.y * blockD;
                block.setPosition(isoX, targetY + dropH, 0);
                var spr = block.getComponent(cc.Sprite);
                var texPath = (_a = _this.blockTextures[p.y]) !== null && _a !== void 0 ? _a : _this.blockTextures[0];
                cc.resources.load(texPath, cc.SpriteFrame, function (err, spriteFrame) {
                    if (!err && spriteFrame) {
                        spr.spriteFrame = spriteFrame;
                    }
                    else {
                        console.warn("\uBE14\uB85D \uD14D\uC2A4\uCC98 \uB85C\uB4DC \uC2E4\uD328: " + texPath, err);
                    }
                });
                var totalDelay = y * layerGap + i * itemGap;
                cc.tween(block)
                    .delay(totalDelay)
                    .to(dropDur, { position: cc.v3(isoX, targetY, 0) }, { easing: 'bounceOut' })
                    .start();
            });
        };
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
    ], GameManager.prototype, "timeLabel", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "gameStartOverlayPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "gameOverUIPrefab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2ltXFxCbG9ja0NvdW50R2FtZVxcQmxvY2tDb3VudEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWdUQztRQS9TQyxZQUFZO1FBRVosbUJBQWEsR0FBZ0IsRUFBRSxDQUFDO1FBRWhDLFlBQVk7UUFFWixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixjQUFjO1FBRWQsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBWTtRQUVaLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGtCQUFrQjtRQUVsQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixlQUFlO1FBRWYsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsbUJBQW1CO1FBRW5CLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsNEJBQXNCLEdBQWMsSUFBSSxDQUFDO1FBR3pDLGlCQUFpQjtRQUVqQixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFFbkMsZ0JBQWdCO1FBQ0ssZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHeEMsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRWxDLGVBQWU7UUFDUCxjQUFRLEdBQVcsRUFBRSxDQUFDO1FBRTlCLGtCQUFrQjtRQUNWLG1CQUFhLEdBQWE7WUFDaEMsc0JBQXNCO1lBQ3RCLDBCQUEwQjtZQUMxQixzQkFBc0I7WUFDdEIsMkJBQTJCLENBQUcsTUFBTTtTQUNyQyxDQUFDOztJQXlQSixDQUFDO0lBdFBDLDRCQUFNLEdBQU47UUFBQSxpQkErQkM7UUE5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REMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3NEQUNVO0lBSWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1U7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDVTtJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNVO0lBSTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1M7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUztJQUs1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ3FCO0lBS3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2U7SUFHZDtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFBNEI7SUF2QzdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FnVC9CO0lBQUQsa0JBQUM7Q0FoVEQsQUFnVEMsQ0FoVHdDLEVBQUUsQ0FBQyxTQUFTLEdBZ1RwRDtrQkFoVG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi8uLi9Db250cm9sbGVyL0NvbW1vblVJL0dhbWVTdGF0ZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLyAxKSDsmLXshZgg67KE7Yq865OkXHJcbiAgQHByb3BlcnR5KFtjYy5CdXR0b25dKVxyXG4gIG9wdGlvbkJ1dHRvbnM6IGNjLkJ1dHRvbltdID0gW107XHJcblxyXG4gIC8vIDIpIOqysOqzvCDroIjsnbTruJRcclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgcmVzdWx0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgLy8gMykg67iU66GdIOu2gOuqqCDrhbjrk5xcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBibG9ja1BhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIDQpIOu4lOuhnSDtlITrpqztjLlcclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGJsb2NrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAvLyA1KSBOZXh0L1NraXAg67KE7Yq8XHJcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICBuZXh0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAvLyA2KSBTY29yZSDroIjsnbTruJRcclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gNykg64Ko7J2AIOyLnOqwhCDtkZzsi5zsmqkg66CI7J2067iUXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHRpbWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGdhbWVTdGFydE92ZXJsYXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAvLyDqsozsnoQg7Jik67KEIOyYpOuyhOugiOydtCDtlITrpqztjLlcclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGdhbWVPdmVyVUlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gIC8vIOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLAg67KE7Yq8IFxyXG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pIGV4aXRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBjb3JyZWN0Q291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGFuc3dlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIOyghOyytCDqsozsnoQg7Iuc6rCEICjstIgpXHJcbiAgcHJpdmF0ZSB0aW1lTGVmdDogbnVtYmVyID0gNjA7XHJcblxyXG4gIC8vIHnstpUo64aS7J20KeuniOuLpCDsgqzsmqntlaAg7IOJ7IOBXHJcbiAgcHJpdmF0ZSBibG9ja1RleHR1cmVzOiBzdHJpbmdbXSA9IFtcclxuICAgIFwiSW1hZ2VzL1NpbS9uYXZ5QmxvY2tcIiwgICAgICAgLy8geT0wXHJcbiAgICBcIkltYWdlcy9TaW0vZGFya0JsdWVCbG9ja1wiLCAgIC8vIHk9MVxyXG4gICAgXCJJbWFnZXMvU2ltL2JsdWVCbG9ja1wiLCAgICAgICAvLyB5PTJcclxuICAgIFwiSW1hZ2VzL1NpbS93aGl0ZWJsdWVCbG9ja1wiICAgLy8geT0zXHJcbiAgXTtcclxuXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuXHJcbiAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMubmV4dFF1ZXN0aW9uLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIGlmICh0aGlzLnNjb3JlTGFiZWwpIHtcclxuICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRpbWVMZWZ0ID0gMTAwO1xyXG4gICAgaWYgKHRoaXMudGltZUxhYmVsKSB7XHJcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IGAke3RoaXMudGltZUxlZnR9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHYW1lIFN0YXJ0IOyYpOuyhOugiOydtCDsoIHsmqlcclxuICAgIGlmICh0aGlzLmdhbWVTdGFydE92ZXJsYXlQcmVmYWIpIHtcclxuICAgICAgY29uc3Qgb3ZlcmxheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZVN0YXJ0T3ZlcmxheVByZWZhYik7XHJcbiAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChvdmVybGF5KTtcclxuICAgICAgb3ZlcmxheS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgIC8vIOyYpOuyhOugiOydtCDslaDri4jrqZTsnbTshZgg7Iuc6rCEICjsmIg6IDLstIgpIO2bhCDsi5zsnpFcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICAgIH0sIDIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRHYW1lKCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWVyKCk7ICAgICAgICAgLy8g7YOA7J2066i4IOyLnOyekVxyXG4gICAgdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7ICAgLy8g7LKrIOusuOygnCDsg53shLFcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC8qKiAxMDDstIgg7YOA7J2066i4IOyLnOyekSAqL1xyXG4gIHByaXZhdGUgc3RhcnRUaW1lcigpIHtcclxuICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcclxuICAgIHRoaXMudGltZUxlZnQgPSAxMDtcclxuICAgIGlmICh0aGlzLnRpbWVMYWJlbCkge1xyXG4gICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnRpbWVMZWZ0fWA7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIDHstIjrp4jri6Qg7Zi47Lac65CY7Ja0IOuCqOydgCDsi5zqsITsnYQg6rCx7IugICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVUaW1lcigpIHtcclxuICAgIHRoaXMudGltZUxlZnQtLTtcclxuICAgIGlmICh0aGlzLnRpbWVMYWJlbCkge1xyXG4gICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnRpbWVMZWZ0fWA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aW1lTGVmdCA8PSAwKSB7XHJcbiAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcclxuICAgICAgdGhpcy5vblRpbWVvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDsoITssrQg7Iuc6rCE7J20IOuLpCDrkJDsnYQg65WMIO2YuOy2nCAqL1xyXG4gIHByaXZhdGUgb25UaW1lb3V0KCkge1xyXG4gICAgLy8g66qo65OgIOuyhO2KvCDruYTtmZzshLHtmZRcclxuICAgIHRoaXMub3B0aW9uQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uaW50ZXJhY3RhYmxlID0gZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMubmV4dEJ1dHRvbikge1xyXG4gICAgICB0aGlzLm5leHRCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6rKM7J6EIOyDge2DnCDsoIDsnqVcclxuICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgR2FtZVN0YXRlLnNjb3JlID0gdGhpcy5zY29yZTtcclxuICAgIEdhbWVTdGF0ZS5nYW1lSWQgPSBcImJsb2NrLWNvdW50LWdhbWVcIjsgLy8g7JuQ7ZWY64qUIOyLneuzhOyekFxyXG4gICAgLy8g6rKM7J6E7KKF66OMIFByZWZhYiDsg53shLFcclxuICAgIGNvbnN0IGdhbWVPdmVyVUkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVPdmVyVUlQcmVmYWIpO1xyXG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVPdmVyVUkpOyAgLy8g65iQ64qUIENhbnZhc+yXkCDsp4HsoJEg67aZ7Jes64+EIOuQqFxyXG5cclxuICAgIC8vIOygleykkeyVmSDrsLDsuZhcclxuICAgIGdhbWVPdmVyVUkuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKiDsg4gg66y47KCcIOyDneyEsSAo7Iuc6rCE7J2AIOqzhOyGjSDtnZDrpoXri4jri6QpICovXHJcbiAgZ2VuZXJhdGVRdWVzdGlvbigpIHtcclxuICAgIHRoaXMuYW5zd2VyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBOZXh0IOuyhO2KvCDroIjsnbTruJQg7LSI6riw7ZmUXHJcbiAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgIGNvbnN0IGxibCA9IHRoaXMubmV4dEJ1dHRvbi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpITtcclxuICAgICAgbGJsLnN0cmluZyA9ICfqsbTrhIjrm7DquLAnO1xyXG4gICAgICB0aGlzLm5leHRCdXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDqsrDqs7wg66CI7J2067iUIOy0iOq4sO2ZlFxyXG4gICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgPSAnJztcclxuXHJcbiAgICAvLyDsoJXri7Ug6rCc7IiYIOqysOyglSDrsI8g67iU66GdIOuwsOy5mFxyXG4gICAgdGhpcy5jb3JyZWN0Q291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxO1xyXG4gICAgdGhpcy5zcGF3bkJsb2Nrcyh0aGlzLmNvcnJlY3RDb3VudCk7XHJcblxyXG4gICAgLy8g67O06riwIOyEuO2MhVxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQ8bnVtYmVyPihbdGhpcy5jb3JyZWN0Q291bnRdKTtcclxuICAgIHdoaWxlIChvcHRpb25zLnNpemUgPCB0aGlzLm9wdGlvbkJ1dHRvbnMubGVuZ3RoKSB7XHJcbiAgICAgIG9wdGlvbnMuYWRkKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSArIDEpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20ob3B0aW9ucyk7XHJcbiAgICB0aGlzLnNodWZmbGVBcnJheShsaXN0KTtcclxuICAgIHRoaXMub3B0aW9uQnV0dG9ucy5mb3JFYWNoKChidG4sIGkpID0+IHtcclxuICAgICAgYnRuLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgIGNvbnN0IGxibCA9IGJ0bi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpITtcclxuICAgICAgbGJsLnN0cmluZyA9IGxpc3RbaV0udG9TdHJpbmcoKTtcclxuICAgICAgYnRuLm5vZGUub2ZmKCdjbGljaycpO1xyXG4gICAgICBidG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmNoZWNrQW5zd2VyKGxpc3RbaV0pKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIOuLteyViCDtmZXsnbggKi9cclxuICBjaGVja0Fuc3dlcihzZWxlY3RlZDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5hbnN3ZXJlZCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIOygleuLteyduCDqsr3smrBcclxuICAgIGlmIChzZWxlY3RlZCA9PT0gdGhpcy5jb3JyZWN0Q291bnQpIHtcclxuICAgICAgdGhpcy5hbnN3ZXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJ/Cfjokg7KCV64u17J6F64uI64ukISc7XHJcbiAgICAgIHRoaXMuc2NvcmUgKz0gMjA7ICAvLyDrp57slZjsnYQg65WMICsxMFxyXG4gICAgICBpZiAodGhpcy5zY29yZUxhYmVsKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XHJcbiAgICAgICAgY29uc3QgbGJsID0gdGhpcy5uZXh0QnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkhO1xyXG4gICAgICAgIGxibC5zdHJpbmcgPSAn64uk7J2M7Jy866GcJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g7Jik64u17J24IOqyveyasFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJ+KdjCDti4DroLjsirXri4jri6QhJztcclxuICAgICAgdGhpcy5zY29yZSAtPSAxMDsgIC8vIO2LgOuguOydhCDrlYwgLTEwXHJcbiAgICAgIGlmICh0aGlzLnNjb3JlTGFiZWwpIHtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5zY29yZX1gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm5leHRCdXR0b24pIHtcclxuICAgICAgICBjb25zdCBsYmwgPSB0aGlzLm5leHRCdXR0b24ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSE7XHJcbiAgICAgICAgbGJsLnN0cmluZyA9ICfqsbTrhIjrm7DquLAnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog64uk7J2MIOusuOygnOuhnCDrhJjslrTqsIDquLAgKi9cclxuICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy50aW1lTGVmdCA+IDApIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog67iU66GdIOyDneyEsSAmIOyVoOuLiOuplOydtOyFmCAoY29sdW1uLWZpcnN0LCB57LaVIOq4sOykgCkgKi9cclxuICBzcGF3bkJsb2Nrcyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuYmxvY2tQYXJlbnQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignW0dhbWVNYW5hZ2VyXSBibG9ja1BhcmVudOqwgCDsl7DqsrDrkJjsp4Ag7JWK7JWY7Iq164uI64ukIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmJsb2NrUGFyZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcblxyXG4gICAgY29uc3QgYmxvY2tXID0gMTAwLCBibG9ja0ggPSA1MCwgYmxvY2tEID0gNTA7XHJcbiAgICBjb25zdCBtYXhTaXplID0gNCwgbWF4SGVpZ2h0ID0gNDtcclxuXHJcbiAgICBjb25zdCB4ekxpc3Q6IHsgeDogbnVtYmVyOyB6OiBudW1iZXIgfVtdID0gW107XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1heFNpemU7IHgrKykge1xyXG4gICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG1heFNpemU7IHorKykge1xyXG4gICAgICAgIHh6TGlzdC5wdXNoKHsgeCwgeiB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaHVmZmxlQXJyYXkoeHpMaXN0KTtcclxuXHJcbiAgICB0eXBlIFBvcyA9IHsgeDogbnVtYmVyOyB6OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgY29uc3QgcGxhY2VkQ29vcmRzOiBQb3NbXSA9IFtdO1xyXG4gICAgbGV0IHBsYWNlZCA9IDA7XHJcbiAgICBvdXRlcjogZm9yIChjb25zdCB7IHgsIHogfSBvZiB4ekxpc3QpIHtcclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXhIZWlnaHQgJiYgcGxhY2VkIDwgY291bnQ7IHkrKykge1xyXG4gICAgICAgIHBsYWNlZENvb3Jkcy5wdXNoKHsgeCwgeiwgeSB9KTtcclxuICAgICAgICBwbGFjZWQrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAocGxhY2VkID49IGNvdW50KSBicmVhayBvdXRlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYXllcnM6IFBvc1tdW10gPSBbXTtcclxuICAgIGxldCBtYXhZID0gMDtcclxuICAgIHBsYWNlZENvb3Jkcy5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICBtYXhZID0gTWF0aC5tYXgobWF4WSwgcC55KTtcclxuICAgICAgaWYgKCFsYXllcnNbcC55XSkgbGF5ZXJzW3AueV0gPSBbXTtcclxuICAgICAgbGF5ZXJzW3AueV0ucHVzaChwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRyb3BIID0gNTAwO1xyXG4gICAgY29uc3QgZHJvcER1ciA9IDAuMTU7XHJcbiAgICBjb25zdCBsYXllckdhcCA9IGRyb3BEdXIgKyAwLjA4O1xyXG4gICAgY29uc3QgaXRlbUdhcCA9IDAuMDU7XHJcblxyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW3ldIHx8IFtdO1xyXG4gICAgICBsYXllci5mb3JFYWNoKChwLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrUHJlZmFiKTtcclxuICAgICAgICBibG9jay5wYXJlbnQgPSB0aGlzLmJsb2NrUGFyZW50O1xyXG4gICAgICAgIGJsb2NrLnpJbmRleCA9IHAueCArIHAueiArIHAueSAqIDEwO1xyXG5cclxuICAgICAgICBjb25zdCBpc29YID0gKHAueCAtIHAueikgKiAoYmxvY2tXIC8gMik7XHJcbiAgICAgICAgY29uc3QgZmxvb3JZID0gLTMwMDtcclxuICAgICAgICBjb25zdCBiYXNlWSA9IGZsb29yWSArIGJsb2NrSCAvIDI7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0WSA9IC0ocC54ICsgcC56KSAqIChibG9ja0ggLyAyKSArIGJhc2VZICsgcC55ICogYmxvY2tEO1xyXG5cclxuICAgICAgICBibG9jay5zZXRQb3NpdGlvbihpc29YLCB0YXJnZXRZICsgZHJvcEgsIDApO1xyXG5cclxuICAgICAgICBjb25zdCBzcHIgPSBibG9jay5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSE7XHJcbiAgICAgICAgY29uc3QgdGV4UGF0aCA9IHRoaXMuYmxvY2tUZXh0dXJlc1twLnldID8/IHRoaXMuYmxvY2tUZXh0dXJlc1swXTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh0ZXhQYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgIGlmICghZXJyICYmIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIHNwci5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGDruJTroZ0g7YWN7Iqk7LKYIOuhnOuTnCDsi6TtjKg6ICR7dGV4UGF0aH1gLCBlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB0b3RhbERlbGF5ID0geSAqIGxheWVyR2FwICsgaSAqIGl0ZW1HYXA7XHJcbiAgICAgICAgY2MudHdlZW4oYmxvY2spXHJcbiAgICAgICAgICAuZGVsYXkodG90YWxEZWxheSlcclxuICAgICAgICAgIC50byhkcm9wRHVyLCB7IHBvc2l0aW9uOiBjYy52Myhpc29YLCB0YXJnZXRZLCAwKSB9LCB7IGVhc2luZzogJ2JvdW5jZU91dCcgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDrsLDsl7Qg7IWU7ZSMIOycoO2LuCAqL1xyXG4gIHNodWZmbGVBcnJheTxUPihhcnI6IFRbXSkge1xyXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgW2FycltpXSwgYXJyW2pdXSA9IFthcnJbal0sIGFycltpXV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkTGlzdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi7Iux6riAIOqyjOyehCDrpqzsiqTtirjroZwg64+M7JWE6rCA6riwXCIpO1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTaW5nbGVHYW1lTGlzdCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
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
                    var __filename = 'preview-scripts/assets/scripts/Controller/Multi/MultiPlayConnect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ba0c7WdwpEhIrHWvibQHBb', 'MultiPlayConnect');
// scripts/Controller/Multi/MultiPlayConnect.ts

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
var MultiPlayConnect = /** @class */ (function (_super) {
    __extends(MultiPlayConnect, _super);
    function MultiPlayConnect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.StartButton = null;
        _this.backButton = null;
        _this.ConnectLinkLabel = null;
        _this.player1Label = null;
        _this.player1CharacterNode = null;
        _this.player2Label = null;
        _this.player2CharacterNode = null;
        _this.roomId = '';
        _this.pollingTimer = null;
        return _this;
    }
    MultiPlayConnect.prototype.onLoad = function () {
        cc.debug.setDisplayStats(false);
    };
    MultiPlayConnect.prototype.start = function () {
        cc.log("MultiPlayConnect start() 진입");
        cc.log("GameState.isHost:", GameState_1.default.isHost);
        // StartButton은 Host에게만 보이도록 처리
        if (this.StartButton) {
            this.StartButton.active = GameState_1.default.isHost;
            if (GameState_1.default.isHost) {
                cc.log("StartButton 활성화 (Host)");
                this.registerButtonEvents(this.StartButton, this.createRoomAndShowInviteLink.bind(this));
            }
            else {
                cc.log("Guest는 StartButton 비활성화");
            }
        }
        var nickname = GameState_1.default.nickname || '플레이어';
        var character = GameState_1.default.character || 'dog';
        if (GameState_1.default.isHost) {
            cc.log("Host UI 세팅");
            if (this.player1Label)
                this.player1Label.string = "\uB2C9\uB124\uC784 : " + nickname;
            this.setCharacterSprite(this.player1CharacterNode, character);
        }
        else {
            cc.log("Guest UI 세팅");
            if (this.player2Label)
                this.player2Label.string = "\uB2C9\uB124\uC784 : " + nickname;
            this.setCharacterSprite(this.player2CharacterNode, character);
        }
        var incomingRoomId = GameState_1.default.incomingRoomId;
        if (incomingRoomId) {
            this.roomId = incomingRoomId;
            cc.log("Guest 방 입장 요청:", this.roomId);
            this.joinRoomAsGuest();
        }
    };
    MultiPlayConnect.prototype.registerButtonEvents = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_END, callback);
        node.on(cc.Node.EventType.MOUSE_DOWN, callback);
    };
    MultiPlayConnect.prototype.createRoomAndShowInviteLink = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, response, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!GameState_1.default.isHost) {
                            cc.warn("Guest는 방을 생성할 수 없습니다.");
                            return [2 /*return*/];
                        }
                        cc.log("📡 createRoomAndShowInviteLink 실행됨");
                        token = localStorage.getItem('jwtToken');
                        if (!token) {
                            cc.warn("JWT 토큰 없음");
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch('http://localhost:3000/api/create-room', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': "Bearer " + token
                                }
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        result = _a.sent();
                        cc.log("서버 응답:", result);
                        if (result.success) {
                            this.roomId = result.roomId;
                            if (this.ConnectLinkLabel)
                                this.ConnectLinkLabel.string = result.inviteUrl;
                            cc.log("\uC0DD\uC131\uB41C \uBC29 \uCF54\uB4DC: " + this.roomId);
                            cc.log("\uCD08\uB300 \uB9C1\uD06C: " + result.inviteUrl);
                            this.listenForGuestUpdate();
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        cc.log('서버 요청 실패:', err_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MultiPlayConnect.prototype.listenForGuestUpdate = function () {
        var _this = this;
        this.checkGuestUpdate();
        this.pollingTimer = setInterval(function () { return _this.checkGuestUpdate(); }, 5000);
    };
    MultiPlayConnect.prototype.checkGuestUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.roomId)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/room-status/" + this.roomId)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        result = _a.sent();
                        if (result.success && result.data) {
                            data = result.data;
                            if (GameState_1.default.isHost) {
                                // Host 입장일 때: Guest 정보 표시 (Player2)
                                if (data.guestNickname && data.guestCharacter) {
                                    if (this.player2Label)
                                        this.player2Label.string = "\uB2C9\uB124\uC784 : " + data.guestNickname;
                                    this.setCharacterSprite(this.player2CharacterNode, data.guestCharacter);
                                }
                            }
                            else {
                                // Guest 입장일 때: Host 정보 표시 (Player1)
                                if (data.hostNickname && data.hostCharacter) {
                                    if (this.player1Label)
                                        this.player1Label.string = "\uB2C9\uB124\uC784 : " + data.hostNickname;
                                    this.setCharacterSprite(this.player1CharacterNode, data.hostCharacter);
                                }
                            }
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        cc.log('방 상태 확인 실패:', err_2.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MultiPlayConnect.prototype.setCharacterSprite = function (node, characterKey) {
        var sprite = node.getComponent(cc.Sprite);
        if (!sprite)
            return;
        if (!['dog', 'rabbit', 'tiger'].includes(characterKey)) {
            characterKey = 'dog';
        }
        var path = "Images/Common/characters/" + characterKey;
        cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
            if (!err && spriteFrame) {
                sprite.spriteFrame = spriteFrame;
            }
        });
    };
    MultiPlayConnect.prototype.joinRoomAsGuest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, response, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = localStorage.getItem('jwtToken');
                        if (!token)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/join-room/" + this.roomId, {
                                method: 'POST',
                                headers: { 'Authorization': "Bearer " + token }
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        result = _a.sent();
                        if (result.success) {
                            this.listenForGuestUpdate();
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_3 = _a.sent();
                        cc.error("게스트 입장 실패:", err_3.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MultiPlayConnect.prototype.onDestroy = function () {
        if (this.pollingTimer) {
            clearInterval(this.pollingTimer);
            this.pollingTimer = null;
        }
    };
    __decorate([
        property(cc.Node)
    ], MultiPlayConnect.prototype, "StartButton", void 0);
    __decorate([
        property(cc.Node)
    ], MultiPlayConnect.prototype, "backButton", void 0);
    __decorate([
        property(cc.Label)
    ], MultiPlayConnect.prototype, "ConnectLinkLabel", void 0);
    __decorate([
        property(cc.Label)
    ], MultiPlayConnect.prototype, "player1Label", void 0);
    __decorate([
        property(cc.Node)
    ], MultiPlayConnect.prototype, "player1CharacterNode", void 0);
    __decorate([
        property(cc.Label)
    ], MultiPlayConnect.prototype, "player2Label", void 0);
    __decorate([
        property(cc.Node)
    ], MultiPlayConnect.prototype, "player2CharacterNode", void 0);
    MultiPlayConnect = __decorate([
        ccclass
    ], MultiPlayConnect);
    return MultiPlayConnect;
}(cc.Component));
exports.default = MultiPlayConnect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcTXVsdGlcXE11bHRpUGxheUNvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQ3hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBMkxDO1FBeExHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QiwwQkFBb0IsR0FBWSxJQUFJLENBQUM7UUFHckMsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsMEJBQW9CLEdBQVksSUFBSSxDQUFDO1FBRXJDLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQVksR0FBVyxJQUFJLENBQUM7O0lBbUtoQyxDQUFDO0lBaktHLGlDQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLG1CQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUMsK0JBQStCO1FBQy9CLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNsQixFQUFFLENB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LENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrRUFDbUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tFQUNtQjtJQXJCcEIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0EyTHBDO0lBQUQsdUJBQUM7Q0EzTEQsQUEyTEMsQ0EzTDZDLEVBQUUsQ0FBQyxTQUFTLEdBMkx6RDtrQkEzTG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4uL0NvbW1vblVJL0dhbWVTdGF0ZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlQbGF5Q29ubmVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTdGFydEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBDb25uZWN0TGlua0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcGxheWVyMUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXIxQ2hhcmFjdGVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcGxheWVyMkxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXIyQ2hhcmFjdGVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcm9vbUlkOiBzdHJpbmcgPSAnJztcclxuICAgIHBvbGxpbmdUaW1lcjogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjYy5sb2coXCJNdWx0aVBsYXlDb25uZWN0IHN0YXJ0KCkg7KeE7J6FXCIpO1xyXG4gICAgICAgIGNjLmxvZyhcIkdhbWVTdGF0ZS5pc0hvc3Q6XCIsIEdhbWVTdGF0ZS5pc0hvc3QpO1xyXG5cclxuICAgICAgICAvLyBTdGFydEJ1dHRvbuydgCBIb3N07JeQ6rKM66eMIOuztOydtOuPhOuhnSDsspjrpqxcclxuICAgICAgICBpZiAodGhpcy5TdGFydEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0QnV0dG9uLmFjdGl2ZSA9IEdhbWVTdGF0ZS5pc0hvc3Q7XHJcbiAgICAgICAgICAgIGlmIChHYW1lU3RhdGUuaXNIb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJTdGFydEJ1dHRvbiDtmZzshLHtmZQgKEhvc3QpXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckJ1dHRvbkV2ZW50cyh0aGlzLlN0YXJ0QnV0dG9uLCB0aGlzLmNyZWF0ZVJvb21BbmRTaG93SW52aXRlTGluay5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIkd1ZXN064qUIFN0YXJ0QnV0dG9uIOu5hO2ZnOyEse2ZlFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSBHYW1lU3RhdGUubmlja25hbWUgfHwgJ+2UjOugiOydtOyWtCc7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gR2FtZVN0YXRlLmNoYXJhY3RlciB8fCAnZG9nJztcclxuXHJcbiAgICAgICAgaWYgKEdhbWVTdGF0ZS5pc0hvc3QpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiSG9zdCBVSSDshLjtjIVcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjFMYWJlbCkgdGhpcy5wbGF5ZXIxTGFiZWwuc3RyaW5nID0gYOuLieuEpOyehCA6ICR7bmlja25hbWV9YDtcclxuICAgICAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJTcHJpdGUodGhpcy5wbGF5ZXIxQ2hhcmFjdGVyTm9kZSwgY2hhcmFjdGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJHdWVzdCBVSSDshLjtjIVcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjJMYWJlbCkgdGhpcy5wbGF5ZXIyTGFiZWwuc3RyaW5nID0gYOuLieuEpOyehCA6ICR7bmlja25hbWV9YDtcclxuICAgICAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJTcHJpdGUodGhpcy5wbGF5ZXIyQ2hhcmFjdGVyTm9kZSwgY2hhcmFjdGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluY29taW5nUm9vbUlkID0gR2FtZVN0YXRlLmluY29taW5nUm9vbUlkO1xyXG4gICAgICAgIGlmIChpbmNvbWluZ1Jvb21JZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb21JZCA9IGluY29taW5nUm9vbUlkO1xyXG4gICAgICAgICAgICBjYy5sb2coXCJHdWVzdCDrsKkg7J6F7J6lIOyalOyyrTpcIiwgdGhpcy5yb29tSWQpO1xyXG4gICAgICAgICAgICB0aGlzLmpvaW5Sb29tQXNHdWVzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckJ1dHRvbkV2ZW50cyhub2RlOiBjYy5Ob2RlLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBjYWxsYmFjayk7XHJcbiAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlUm9vbUFuZFNob3dJbnZpdGVMaW5rKCkge1xyXG4gICAgICAgIGlmICghR2FtZVN0YXRlLmlzSG9zdCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiR3Vlc3TripQg67Cp7J2EIOyDneyEse2VoCDsiJgg7JeG7Iq164uI64ukLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5sb2coXCLwn5OhIGNyZWF0ZVJvb21BbmRTaG93SW52aXRlTGluayDsi6TtlonrkKhcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dFRva2VuJyk7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiSldUIO2GoO2BsCDsl4bsnYxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY3JlYXRlLXJvb20nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuyEnOuyhCDsnZHri7U6XCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vbUlkID0gcmVzdWx0LnJvb21JZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkNvbm5lY3RMaW5rTGFiZWwpIHRoaXMuQ29ubmVjdExpbmtMYWJlbC5zdHJpbmcgPSByZXN1bHQuaW52aXRlVXJsO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmxvZyhg7IOd7ISx65CcIOuwqSDsvZTrk5w6ICR7dGhpcy5yb29tSWR9YCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYOy0iOuMgCDrp4Htgaw6ICR7cmVzdWx0Lmludml0ZVVybH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbkZvckd1ZXN0VXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY2MubG9nKCfshJzrsoQg7JqU7LKtIOyLpO2MqDonLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsaXN0ZW5Gb3JHdWVzdFVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrR3Vlc3RVcGRhdGUoKTtcclxuICAgICAgICB0aGlzLnBvbGxpbmdUaW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuY2hlY2tHdWVzdFVwZGF0ZSgpLCA1MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjaGVja0d1ZXN0VXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yb29tSWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9yb29tLXN0YXR1cy8ke3RoaXMucm9vbUlkfWApO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoR2FtZVN0YXRlLmlzSG9zdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhvc3Qg7J6F7J6l7J28IOuVjDogR3Vlc3Qg7KCV67O0IO2RnOyLnCAoUGxheWVyMilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ndWVzdE5pY2tuYW1lICYmIGRhdGEuZ3Vlc3RDaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMkxhYmVsKSB0aGlzLnBsYXllcjJMYWJlbC5zdHJpbmcgPSBg64uJ64Sk7J6EIDogJHtkYXRhLmd1ZXN0Tmlja25hbWV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJTcHJpdGUodGhpcy5wbGF5ZXIyQ2hhcmFjdGVyTm9kZSwgZGF0YS5ndWVzdENoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBHdWVzdCDsnoXsnqXsnbwg65WMOiBIb3N0IOygleuztCDtkZzsi5wgKFBsYXllcjEpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaG9zdE5pY2tuYW1lICYmIGRhdGEuaG9zdENoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxTGFiZWwpIHRoaXMucGxheWVyMUxhYmVsLnN0cmluZyA9IGDri4nrhKTsnoQgOiAke2RhdGEuaG9zdE5pY2tuYW1lfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyU3ByaXRlKHRoaXMucGxheWVyMUNoYXJhY3Rlck5vZGUsIGRhdGEuaG9zdENoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZygn67CpIOyDge2DnCDtmZXsnbgg7Iuk7YyoOicsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hhcmFjdGVyU3ByaXRlKG5vZGU6IGNjLk5vZGUsIGNoYXJhY3RlcktleTogc3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBpZiAoIXNwcml0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIVsnZG9nJywgJ3JhYmJpdCcsICd0aWdlciddLmluY2x1ZGVzKGNoYXJhY3RlcktleSkpIHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyS2V5ID0gJ2RvZyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXRoID0gYEltYWdlcy9Db21tb24vY2hhcmFjdGVycy8ke2NoYXJhY3RlcktleX1gO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVyciAmJiBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBqb2luUm9vbUFzR3Vlc3QoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0VG9rZW4nKTtcclxuICAgICAgICBpZiAoIXRva2VuKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvam9pbi1yb29tLyR7dGhpcy5yb29tSWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbkZvckd1ZXN0VXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLqsozsiqTtirgg7J6F7J6lIOyLpO2MqDpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9sbGluZ1RpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb2xsaW5nVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnBvbGxpbmdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/MyPage/MyInfoController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37e16iSJRBC96F1QPTsQ9o9', 'MyInfoController');
// scripts/Controller/MyPage/MyInfoController.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myRecordButton = null;
        _this.backButton = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.debug.setDisplayStats(false);
    };
    NewClass.prototype.start = function () {
        if (this.myRecordButton) {
            this.myRecordButton.on(cc.Node.EventType.TOUCH_END, function () {
                cc.director.loadScene("MyRecord");
            }, this);
        }
        if (this.backButton) {
            this.backButton.on(cc.Node.EventType.TOUCH_END, function () {
                cc.director.loadScene('홈화면');
            }, this);
        }
    };
    NewClass.prototype.onClickMain = function () {
        cc.log("뒤로가기 버튼 클릭됨. MainMenu 씬으로 이동.");
        cc.director.loadScene("MainScene");
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "myRecordButton", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "backButton", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcTXlQYWdlXFxNeUluZm9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOEJDO1FBM0JHLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQXdCL0IsQ0FBQztJQXRCRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNoRCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7Z0JBQzVDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFOVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOEI1QjtJQUFELGVBQUM7Q0E5QkQsQUE4QkMsQ0E5QnFDLEVBQUUsQ0FBQyxTQUFTLEdBOEJqRDtrQkE5Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbXlSZWNvcmRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja0J1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXlSZWNvcmRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5teVJlY29yZEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk15UmVjb3JkXCIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJhY2tCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5iYWNrQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCftmYjtmZTrqbQnKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tNYWluKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIuuSpOuhnOqwgOq4sCDrsoTtirwg7YG066at65CoLiBNYWluTWVudSDslKzsnLzroZwg7J2064+ZLlwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2NlbmVcIik7XHJcbiAgICB9XHJcbn1cclxuIl19
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
var SingleGameListController = /** @class */ (function (_super) {
    __extends(SingleGameListController, _super);
    function SingleGameListController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameCardContainer = null;
        _this.gameCardPrefab = null;
        _this.selectButton = null;
        _this.leftArrow = null;
        _this.rightArrow = null;
        _this.BackButton = null;
        _this.currentIndex = 0;
        _this.cards = [];
        _this.selectedScene = null;
        _this.gameList = [
            { title: '두더지 게임', thumbnail: 'mole_thumb', scene: 'Mole_ExplainScene' },
            { title: '과일 퍼즐', thumbnail: 'three_thumb', scene: '3m_ExplainScene' },
            { title: '블록 개수 세기', thumbnail: 'block_thumb', scene: 'BlockCountGameScene' },
            { title: '기억력 게임', thumbnail: 'remember_thumb', scene: 'RememberGameScene' },
        ];
        return _this;
    }
    SingleGameListController.prototype.selectScene = function (sceneName, selectedCard) {
        this.selectedScene = sceneName;
        this.gameCardContainer.children.forEach(function (card) {
            card.scale = card === selectedCard ? 1.1 : 1;
            card.opacity = card === selectedCard ? 255 : 180;
        });
        this.selectButton.interactable = true;
    };
    SingleGameListController.prototype.onLoad = function () {
        this.selectButton.interactable = false;
        this.loadGameCards();
        this.registerArrowEvents(this.leftArrow, this.showPrevCard.bind(this));
        this.registerArrowEvents(this.rightArrow, this.showNextCard.bind(this));
        this.registerButtonEvents(this.selectButton.node, this.onSelectButtonClick.bind(this));
        this.registerButtonEvents(this.BackButton.node, this.onClickMain.bind(this));
    };
    SingleGameListController.prototype.registerButtonEvents = function (node, callback) {
        node.off(cc.Node.EventType.TOUCH_END); // 중복 방지
        node.on(cc.Node.EventType.TOUCH_END, callback);
    };
    SingleGameListController.prototype.registerArrowEvents = function (node, callback) {
        node.off(cc.Node.EventType.TOUCH_END); // 중복 방지
        node.on(cc.Node.EventType.TOUCH_END, callback);
    };
    SingleGameListController.prototype.loadGameCards = function () {
        var _this = this;
        this.gameList.forEach(function (game, index) {
            var _a;
            var card = cc.instantiate(_this.gameCardPrefab);
            var titleNode = (_a = card.getChildByName("GameTitleBox")) === null || _a === void 0 ? void 0 : _a.getChildByName("GameTitle");
            if (titleNode && titleNode.getComponent(cc.Label)) {
                titleNode.getComponent(cc.Label).string = game.title;
            }
            var thumbnailNode = card.getChildByName("GameThumbnail");
            if (thumbnailNode && thumbnailNode.getComponent(cc.Sprite)) {
                cc.resources.load("Images/Common/thumbnails/" + game.thumbnail, cc.SpriteFrame, function (err, spriteFrame) {
                    if (!err && spriteFrame) {
                        thumbnailNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }
            card.active = false;
            _this.cards.push(card);
            _this.gameCardContainer.addChild(card);
        });
        this.showCardAtIndex(0);
    };
    SingleGameListController.prototype.showCardAtIndex = function (index) {
        this.cards.forEach(function (card, i) {
            card.active = i === index;
        });
        this.currentIndex = index;
        this.selectScene(this.gameList[index].scene, this.cards[index]);
    };
    SingleGameListController.prototype.showNextCard = function () {
        var nextIndex = (this.currentIndex + 1) % this.cards.length;
        this.showCardAtIndex(nextIndex);
    };
    SingleGameListController.prototype.showPrevCard = function () {
        var prevIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.showCardAtIndex(prevIndex);
    };
    SingleGameListController.prototype.onSelectButtonClick = function () {
        if (this.selectedScene) {
            cc.director.loadScene(this.selectedScene);
        }
    };
    SingleGameListController.prototype.onClickMain = function () {
        cc.log("뒤로가기 버튼 클릭됨. Main 씬으로 이동.");
        cc.director.loadScene("MainScene");
    };
    __decorate([
        property(cc.Node)
    ], SingleGameListController.prototype, "gameCardContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], SingleGameListController.prototype, "gameCardPrefab", void 0);
    __decorate([
        property(cc.Button)
    ], SingleGameListController.prototype, "selectButton", void 0);
    __decorate([
        property(cc.Node)
    ], SingleGameListController.prototype, "leftArrow", void 0);
    __decorate([
        property(cc.Node)
    ], SingleGameListController.prototype, "rightArrow", void 0);
    __decorate([
        property(cc.Button)
    ], SingleGameListController.prototype, "BackButton", void 0);
    SingleGameListController = __decorate([
        ccclass
    ], SingleGameListController);
    return SingleGameListController;
}(cc.Component));
exports.default = SingleGameListController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcU2luZ2xlXFxTaW5nbGVHYW1lTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzRCw0Q0FBWTtJQUFsRTtRQUFBLHFFQW9IQztRQWpIRyx1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFHbEMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUVyQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBQ3RCLG1CQUFhLEdBQVcsSUFBSSxDQUFDO1FBVzdCLGNBQVEsR0FBRztZQUNmLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtZQUN4RSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7WUFDdEUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFO1lBQzdFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO1NBQy9FLENBQUM7O0lBOEVOLENBQUM7SUE1RlcsOENBQVcsR0FBbkIsVUFBb0IsU0FBaUIsRUFBRSxZQUFxQjtRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMv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TSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLHNEQUFtQixHQUExQjtRQUNJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBaEhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUVBQ2dCO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0VBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrRUFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0VBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnRUFDUztJQWxCWix3QkFBd0I7UUFENUMsT0FBTztPQUNhLHdCQUF3QixDQW9INUM7SUFBRCwrQkFBQztDQXBIRCxBQW9IQyxDQXBIcUQsRUFBRSxDQUFDLFNBQVMsR0FvSGpFO2tCQXBIb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZUdhbWVMaXN0Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lQ2FyZENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGdhbWVDYXJkUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzZWxlY3RCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsZWZ0QXJyb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmlnaHRBcnJvdzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIEJhY2tCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNhcmRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRTY2VuZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdFNjZW5lKHNjZW5lTmFtZTogc3RyaW5nLCBzZWxlY3RlZENhcmQ6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU2NlbmUgPSBzY2VuZU5hbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FyZENvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLnNjYWxlID0gY2FyZCA9PT0gc2VsZWN0ZWRDYXJkID8gMS4xIDogMTtcclxuICAgICAgICAgICAgY2FyZC5vcGFjaXR5ID0gY2FyZCA9PT0gc2VsZWN0ZWRDYXJkID8gMjU1IDogMTgwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lTGlzdCA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn65GQ642U7KeAIOqyjOyehCcsIHRodW1ibmFpbDogJ21vbGVfdGh1bWInLCBzY2VuZTogJ01vbGVfRXhwbGFpblNjZW5lJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfqs7zsnbwg7Y287KaQJywgdGh1bWJuYWlsOiAndGhyZWVfdGh1bWInLCBzY2VuZTogJzNtX0V4cGxhaW5TY2VuZScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn67iU66GdIOqwnOyImCDshLjquLAnLCB0aHVtYm5haWw6ICdibG9ja190aHVtYicsIHNjZW5lOiAnQmxvY2tDb3VudEdhbWVTY2VuZScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn6riw7Ja166ClIOqyjOyehCcsIHRodW1ibmFpbDogJ3JlbWVtYmVyX3RodW1iJywgc2NlbmU6ICdSZW1lbWJlckdhbWVTY2VuZScgfSxcclxuICAgIF07XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9hZEdhbWVDYXJkcygpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQXJyb3dFdmVudHModGhpcy5sZWZ0QXJyb3csIHRoaXMuc2hvd1ByZXZDYXJkLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJBcnJvd0V2ZW50cyh0aGlzLnJpZ2h0QXJyb3csIHRoaXMuc2hvd05leHRDYXJkLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQnV0dG9uRXZlbnRzKHRoaXMuc2VsZWN0QnV0dG9uLm5vZGUsIHRoaXMub25TZWxlY3RCdXR0b25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQnV0dG9uRXZlbnRzKHRoaXMuQmFja0J1dHRvbi5ub2RlLCB0aGlzLm9uQ2xpY2tNYWluLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQnV0dG9uRXZlbnRzKG5vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpOyAvLyDspJHrs7Ug67Cp7KeAXHJcbiAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQXJyb3dFdmVudHMobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7IC8vIOykkeuztSDrsKnsp4BcclxuICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvYWRHYW1lQ2FyZHMoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTGlzdC5mb3JFYWNoKChnYW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lQ2FyZFByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSBjYXJkLmdldENoaWxkQnlOYW1lKFwiR2FtZVRpdGxlQm94XCIpPy5nZXRDaGlsZEJ5TmFtZShcIkdhbWVUaXRsZVwiKTtcclxuICAgICAgICAgICAgaWYgKHRpdGxlTm9kZSAmJiB0aXRsZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2FtZS50aXRsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsTm9kZSA9IGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lVGh1bWJuYWlsXCIpO1xyXG4gICAgICAgICAgICBpZiAodGh1bWJuYWlsTm9kZSAmJiB0aHVtYm5haWxOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgSW1hZ2VzL0NvbW1vbi90aHVtYm5haWxzLyR7Z2FtZS50aHVtYm5haWx9YCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXJkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNhcmRDb250YWluZXIuYWRkQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0NhcmRBdEluZGV4KDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDYXJkQXRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuYWN0aXZlID0gaSA9PT0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLnNlbGVjdFNjZW5lKHRoaXMuZ2FtZUxpc3RbaW5kZXhdLnNjZW5lLCB0aGlzLmNhcmRzW2luZGV4XSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd05leHRDYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9ICh0aGlzLmN1cnJlbnRJbmRleCArIDEpICUgdGhpcy5jYXJkcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zaG93Q2FyZEF0SW5kZXgobmV4dEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJldkNhcmQoKSB7XHJcbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gKHRoaXMuY3VycmVudEluZGV4IC0gMSArIHRoaXMuY2FyZHMubGVuZ3RoKSAlIHRoaXMuY2FyZHMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuc2hvd0NhcmRBdEluZGV4KHByZXZJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2VsZWN0QnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTY2VuZSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5zZWxlY3RlZFNjZW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja01haW4oKSB7XHJcbiAgICAgICAgY2MubG9nKFwi65Kk66Gc6rCA6riwIOuyhO2KvCDtgbTrpq3rkKguIE1haW4g7JSs7Jy866GcIOydtOuPmS5cIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        // 게임 종료 오버레이 
        _this.gameOverUIPrefab = null;
        // 게임 시작 오버레이
        _this.gameStartOverlayPrefab = null;
        _this.hammerNode = null;
        _this.moleHoles = [];
        _this.holeStates = [];
        _this.score = 0;
        _this.timer = 30;
        _this.timerNode = null;
        _this.timerLabel = null;
        _this.scoreNode = null;
        _this.scoreLabel = null;
        _this.isGameOver = false;
        _this.moleSpawnCallback = null;
        return _this;
    }
    GameScene.prototype.start = function () {
        var _this = this;
        GameState_1.default.lastGameScene = cc.director.getScene().name;
        //  Game Start 오버레이 띄우기
        if (this.gameStartOverlayPrefab) {
            var startOverlay = cc.instantiate(this.gameStartOverlayPrefab);
            this.node.addChild(startOverlay);
            startOverlay.setPosition(0, 0);
            // 오버레이가 자동 제거되도록 설정돼 있으므로 약간 대기 후 게임 로직 실행
            this.scheduleOnce(function () {
                _this.startGameLogic();
            }, 1); // 총 애니메이션 길이에 따라 조정 
        }
        else {
            this.startGameLogic(); // 프리팹이 없을 경우 바로 시작
        }
    };
    GameScene.prototype.startGameLogic = function () {
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
        GameState_1.default.score = this.score;
        GameState_1.default.gameId = "Molegame";
        // 게임종료 Prefab 생성
        var gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        this.node.addChild(gameOverUI); // 또는 Canvas에 직접 붙여도 됨
        // 정중앙 배치
        gameOverUI.setPosition(0, 0);
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
    __decorate([
        property(cc.Prefab)
    ], GameScene.prototype, "gameOverUIPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameScene.prototype, "gameStartOverlayPrefab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXE1vbGVHYW1lXFxNb2xlR2FtZVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUN0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQStQQztRQTlQd0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0Isb0JBQWMsR0FBYyxJQUFJLENBQUMsQ0FBQyxTQUFTO1FBQ3RDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUM5RCw2REFBNkQ7UUFDeEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBQ3JDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFDckMsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUVuRSxjQUFjO1FBRWQsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRW5DLGFBQWE7UUFFYiw0QkFBc0IsR0FBYyxJQUFJLENBQUM7UUFLakMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBUyxHQUFjLEVBQUUsQ0FBQztRQUMxQixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUMzQixXQUFLLEdB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QyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUE4QjtJQUM3QjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFBa0M7SUFDNUI7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQXFDO0lBRXpDO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUFzQztJQUNyQztRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFBc0M7SUFFaEM7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0RBQXNDO0lBQ3JDO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUEwQztJQUluRTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNlO0lBSW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkRBQ3FCO0lBN0J4QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK1A3QjtJQUFELGdCQUFDO0NBL1BELEFBK1BDLENBL1BzQyxFQUFFLENBQUMsU0FBUyxHQStQbEQ7a0JBL1BvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlci9Db21tb25VSS9HYW1lU3RhdGVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBleGl0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGUyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlNjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgSG9sZTc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEhvbGU4OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBIb2xlOTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgbW9sZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIG1vbGVQcmVmYWJHb29kOiBjYy5QcmVmYWIgPSBudWxsOyAvLyDsiJztlZwg65GQ642U7KeAXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIGhhbW1lclNwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYikgaGl0UGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7IFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgdGltZXJEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgc2NvcmVEaXNwbGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgbW9sZUhpdFNwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBnb29kTW9sZUhpdFNwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIC8vIOqyjOyehCDsooXro4wg7Jik67KE66CI7J20IFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGdhbWVPdmVyVUlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8g6rKM7J6EIOyLnOyekSDsmKTrsoTroIjsnbRcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBnYW1lU3RhcnRPdmVybGF5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFtbWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1vbGVIb2xlczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGhvbGVTdGF0ZXM6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDMwO1xyXG4gICAgcHJpdmF0ZSB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBtb2xlU3Bhd25DYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG5cclxuICAgICAgICAvLyAgR2FtZSBTdGFydCDsmKTrsoTroIjsnbQg652E7Jqw6riwXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXJ0T3ZlcmxheVByZWZhYikge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydE92ZXJsYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVTdGFydE92ZXJsYXlQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc3RhcnRPdmVybGF5KTtcclxuICAgICAgICAgICAgc3RhcnRPdmVybGF5LnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgLy8g7Jik67KE66CI7J206rCAIOyekOuPmSDsoJzqsbDrkJjrj4TroZ0g7ISk7KCV64+8IOyeiOycvOuvgOuhnCDslb3qsIQg64yA6riwIO2bhCDqsozsnoQg66Gc7KeBIOyLpO2WiVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZUxvZ2ljKCk7XHJcbiAgICAgICAgICAgIH0sIDEpOyAvLyDstJ0g7JWg64uI66mU7J207IWYIOq4uOydtOyXkCDrlLDrnbwg7KGw7KCVIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lTG9naWMoKTsgLy8g7ZSE66as7Yy57J20IOyXhuydhCDqsr3smrAg67CU66GcIOyLnOyekVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnRHYW1lTG9naWMoKSB7XHJcbiAgICAgICAgdGhpcy5tb2xlSG9sZXMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuSG9sZTEsIHRoaXMuSG9sZTIsIHRoaXMuSG9sZTMsXHJcbiAgICAgICAgICAgIHRoaXMuSG9sZTQsIHRoaXMuSG9sZTUsIHRoaXMuSG9sZTYsXHJcbiAgICAgICAgICAgIHRoaXMuSG9sZTcsIHRoaXMuSG9sZTgsIHRoaXMuSG9sZTlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuaG9sZVN0YXRlcyA9IG5ldyBBcnJheSh0aGlzLm1vbGVIb2xlcy5sZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSGFtbWVyKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aW1lckRpc3BsYXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnRpbWVyTm9kZSk7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsID0gdGhpcy50aW1lck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lckxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lckxhYmVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZURpc3BsYXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnNjb3JlTm9kZSk7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsID0gdGhpcy5zY29yZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTY29yZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZUxhYmVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5kZWNyZWFzZVRpbWVyLCAxKTtcclxuICAgICAgICB0aGlzLnNwYXduTW9sZXMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY3JlYXRlSGFtbWVyKCkge1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZSA9IG5ldyBjYy5Ob2RlKFwiSGFtbWVyXCIpO1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuaGFtbWVyTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmhhbW1lclNwcml0ZTtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS56SW5kZXggPSA5OTk7XHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLnNldENvbnRlbnRTaXplKDIwMCwgMjAwKTtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuYW5jaG9yWCA9IDAuMjtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuYW5jaG9yWSA9IDAuMjtcclxuICAgICAgICB0aGlzLmhhbW1lck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVhc2VUaW1lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50aW1lci0tO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDw9IDApIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY29yZUxhYmVsKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGltZXJMYWJlbCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy50aW1lcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduTW9sZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9sZVNwYXduQ2FsbGJhY2spIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1vbGVTcGF3bkNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2xlU3Bhd25DYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gdGhpcy5ob2xlU3RhdGVzXHJcbiAgICAgICAgICAgICAgICAubWFwKCh2LCBpKSA9PiAoIXYgPyBpIDogLTEpKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpID0+IGkgIT09IC0xKTtcclxuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGF2YWlsYWJsZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGUubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhvbGUgPSB0aGlzLm1vbGVIb2xlc1tpZHhdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNHb29kTW9sZSA9IE1hdGgucmFuZG9tKCkgPCAwLjM7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbGUgPSBjYy5pbnN0YW50aWF0ZShpc0dvb2RNb2xlID8gdGhpcy5tb2xlUHJlZmFiR29vZCA6IHRoaXMubW9sZVByZWZhYik7XHJcbiAgICAgICAgICAgIG1vbGUubmFtZSA9IFwiTW9sZVwiO1xyXG4gICAgICAgICAgICBob2xlLmFkZENoaWxkKG1vbGUpO1xyXG4gICAgICAgICAgICBtb2xlLnNldFBvc2l0aW9uKDAsIC0xMzApO1xyXG4gICAgICAgICAgICBtb2xlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaG9sZVN0YXRlc1tpZHhdID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9uSGl0ID0gKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1vbGUuYWN0aXZlIHx8IHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gbW9sZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SGFtbWVyRWZmZWN0KGxvY2FsUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBtb2xlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGlzR29vZE1vbGUgPyB0aGlzLmdvb2RNb2xlSGl0U3ByaXRlIDogdGhpcy5tb2xlSGl0U3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gaXNHb29kTW9sZSA/IC0xMCA6IDEwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZUxhYmVsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9sZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBvbkhpdCwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g7Z2U65Ok66as64qUIOyVoOuLiOuplOydtOyFmFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obW9sZSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwZWF0KDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgwLjA1LCB7IGFuZ2xlOiAxNSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDUsIHsgYW5nbGU6IC0zMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDUsIHsgYW5nbGU6IDE1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjgpIC8vIOyVoOuLiOuplOydtOyFmCDtm4Qg7ZGc7KCVIOycoOyngCDsi5zqsIRcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2xlICYmIG1vbGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9sZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGVTdGF0ZXNbaWR4XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDtjIzti7DtgbQg7Zqo6rO8IOyjvOyEnSDsspjrpqxcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGhpdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGl0UGFydGljbGVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgLy8gaGl0LnNldFBvc2l0aW9uKG1vbGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBob2xlLmFkZENoaWxkKGhpdCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBtb2xlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgb25IaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4obW9sZSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgcG9zaXRpb246IGNjLnYzKDAsIC0yMCkgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDEuMClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9sZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgb25IaXQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2xlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob2xlU3RhdGVzW2lkeF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLm1vbGVTcGF3bkNhbGxiYWNrLCAwLjUsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SGFtbWVyRWZmZWN0KHBvczogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIHRoaXMuaGFtbWVyTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmhhbW1lck5vZGUpXHJcbiAgICAgICAgICAgIC5zZXQoeyBzY2FsZTogMS4wIH0pXHJcbiAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4wNSwgeyBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjA1LCB7IHBvc2l0aW9uOiBjYy52MygwLCAtMzApIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjEsIHsgc2NhbGU6IDEuMCB9LCB7IGVhc2luZzogJ2JvdW5jZU91dCcgfSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMzApIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW1tZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9sZVNwYXduQ2FsbGJhY2spIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1vbGVTcGF3bkNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyTGFiZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2xlSG9sZXMuZm9yRWFjaChob2xlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW9sZSA9IGhvbGUuZ2V0Q2hpbGRCeU5hbWUoXCJNb2xlXCIpO1xyXG4gICAgICAgICAgICBpZiAobW9sZSkgbW9sZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW1tZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuqyjOyehCDsooXro4whXCIpO1xyXG4gICAgICAgIEdhbWVTdGF0ZS5sYXN0R2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgICAgIEdhbWVTdGF0ZS5zY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN0YXRlLmdhbWVJZCA9IFwiTW9sZWdhbWVcIjtcclxuXHJcbiAgICAgICAgLy8g6rKM7J6E7KKF66OMIFByZWZhYiDsg53shLFcclxuICAgICAgICBjb25zdCBnYW1lT3ZlclVJID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lT3ZlclVJUHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZU92ZXJVSSk7ICAvLyDrmJDripQgQ2FudmFz7JeQIOyngeygkSDrtpnsl6zrj4Qg65CoXHJcblxyXG4gICAgICAgIC8vIOygleykkeyVmSDrsLDsuZhcclxuICAgICAgICBnYW1lT3ZlclVJLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgbG9hZExpc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsi7HquIAg6rKM7J6EIOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLBcIik7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dhbWVDYW52YXMnKTtcclxuICAgICAgICBpZiAoY2FudmFzKSBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU2luZ2xlR2FtZUxpc3QnKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
var GameState_1 = require("./GameState");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoginManager = /** @class */ (function (_super) {
    __extends(LoginManager, _super);
    function LoginManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nicknameInput = null;
        _this.startButton = null;
        _this.dogPrefab = null;
        _this.rabbitPrefab = null;
        _this.tigerPrefab = null;
        _this.dogCharacter = null;
        _this.rabbitCharacter = null;
        _this.tigerCharacter = null;
        _this.dogSlot = null;
        _this.rabbitSlot = null;
        _this.tigerSlot = null;
        _this.currentSelectedContainer = null;
        _this.selectedCharacter = '';
        return _this;
    }
    LoginManager.prototype.onLoad = function () {
        this.startButton.interactable = false;
        this.tryAutoLogin();
        this.clearSlots();
        this.instantiateCharacter('dog');
        this.instantiateCharacter('rabbit');
        this.instantiateCharacter('tiger');
        // 모바일 & 데스크탑 모두 버튼 작동하도록 이벤트 등록
        this.registerButtonEvents(this.startButton.node, this.onClickStart.bind(this));
        // 마우스 커서 변경은 데스크탑에서만
        if (!cc.sys.isMobile) {
            this.startButton.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
                cc.game.canvas.style.cursor = "pointer";
            });
            this.startButton.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
                cc.game.canvas.style.cursor = "default";
            });
        }
    };
    LoginManager.prototype.registerButtonEvents = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_END, callback);
        node.on(cc.Node.EventType.MOUSE_DOWN, callback);
    };
    LoginManager.prototype.clearSlots = function () {
        this.dogSlot.removeAllChildren();
        this.rabbitSlot.removeAllChildren();
        this.tigerSlot.removeAllChildren();
    };
    LoginManager.prototype.instantiateCharacter = function (type) {
        var _this = this;
        var prefab;
        var slot;
        var container;
        switch (type) {
            case 'dog':
                prefab = this.dogPrefab;
                slot = this.dogSlot;
                container = this.dogCharacter;
                break;
            case 'rabbit':
                prefab = this.rabbitPrefab;
                slot = this.rabbitSlot;
                container = this.rabbitCharacter;
                break;
            case 'tiger':
                prefab = this.tigerPrefab;
                slot = this.tigerSlot;
                container = this.tigerCharacter;
                break;
        }
        if (prefab && slot && container) {
            var instance = cc.instantiate(prefab);
            slot.removeAllChildren();
            slot.addChild(instance);
            // 모바일 터치와 데스크탑 마우스 모두 대응
            container.on(cc.Node.EventType.MOUSE_DOWN, function () {
                _this.selectCharacter(type, container);
            });
            container.on(cc.Node.EventType.TOUCH_START, function () {
                _this.selectCharacter(type, container);
            });
            if (!cc.sys.isMobile) {
                container.on(cc.Node.EventType.MOUSE_ENTER, function () {
                    cc.game.canvas.style.cursor = "pointer";
                });
                container.on(cc.Node.EventType.MOUSE_LEAVE, function () {
                    cc.game.canvas.style.cursor = "default";
                });
            }
        }
    };
    LoginManager.prototype.selectCharacter = function (type, container) {
        this.selectedCharacter = type;
        if (this.currentSelectedContainer && this.currentSelectedContainer !== container) {
            this.setCharacterEffect(this.currentSelectedContainer, false);
        }
        this.setCharacterEffect(container, true);
        this.currentSelectedContainer = container;
        this.checkFormValid();
    };
    LoginManager.prototype.setCharacterEffect = function (node, selected) {
        node.setScale(selected ? 1.2 : 1);
        node.opacity = selected ? 255 : 200;
    };
    LoginManager.prototype.onSelectCharacter = function (_, character) {
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
        cc.log("폼 유효성:", isFilled);
    };
    LoginManager.prototype.onClickStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nickname, character, browserId, loginRes, loginData, jwtToken, profileRes, pendingRoomId, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nickname = this.nicknameInput.string.trim();
                        character = this.selectedCharacter;
                        cc.log("Start 버튼 클릭됨 - 닉네임:", nickname, "캐릭터:", character);
                        if (!nickname || !character)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        browserId = localStorage.getItem('browserId');
                        if (!browserId) {
                            browserId = this.generateBrowserId();
                            localStorage.setItem('browserId', browserId);
                            cc.log("새 브라우저 ID 생성됨:", browserId);
                        }
                        return [4 /*yield*/, fetch('http://localhost:3000/auth/login', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ browserId: browserId })
                            })];
                    case 2:
                        loginRes = _a.sent();
                        if (!loginRes.ok)
                            return [2 /*return*/];
                        return [4 /*yield*/, loginRes.json()];
                    case 3:
                        loginData = _a.sent();
                        jwtToken = loginData.token;
                        localStorage.setItem('jwtToken', jwtToken);
                        return [4 /*yield*/, fetch('http://localhost:3000/auth/set-profile', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': "Bearer " + jwtToken
                                },
                                body: JSON.stringify({ nickname: nickname, character: character })
                            })];
                    case 4:
                        profileRes = _a.sent();
                        if (!profileRes.ok)
                            return [2 /*return*/];
                        GameState_1.default.nickname = nickname;
                        GameState_1.default.character = character;
                        cc.log("GameState 저장됨:", GameState_1.default.nickname, GameState_1.default.character);
                        pendingRoomId = localStorage.getItem("pendingRoomId");
                        if (pendingRoomId) {
                            cc.log("🔁 로그인 후 초대 방으로 이동:", pendingRoomId);
                            GameState_1.default.incomingRoomId = pendingRoomId;
                            GameState_1.default.isHost = false;
                            localStorage.removeItem("pendingRoomId");
                            cc.director.loadScene("PlayerConnect");
                        }
                        else {
                            cc.director.loadScene("MainScene");
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        cc.error("에러 발생:", error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginManager.prototype.generateBrowserId = function () {
        var array = new Uint8Array(16);
        window.crypto.getRandomValues(array);
        return Array.from(array).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    };
    LoginManager.prototype.tryAutoLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jwtToken, browserId, verify, verifyResult, res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jwtToken = localStorage.getItem('jwtToken');
                        browserId = localStorage.getItem('browserId');
                        if (!jwtToken || !browserId)
                            return [2 /*return*/];
                        return [4 /*yield*/, fetch('http://localhost:3000/auth/verify-token', {
                                method: 'POST',
                                headers: { 'Authorization': "Bearer " + jwtToken }
                            })];
                    case 1:
                        verify = _a.sent();
                        return [4 /*yield*/, verify.json()];
                    case 2:
                        verifyResult = _a.sent();
                        if (!verify.ok || !verifyResult.success)
                            return [2 /*return*/];
                        return [4 /*yield*/, fetch('http://localhost:3000/auth/user-info', {
                                method: 'GET',
                                headers: { 'Authorization': "Bearer " + jwtToken }
                            })];
                    case 3:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 4:
                        result = _a.sent();
                        if (result.success) {
                            GameState_1.default.nickname = result.nickname;
                            GameState_1.default.character = result.character;
                            GameState_1.default.recentSingleScores = result.recentSingleScores;
                            cc.log("자동 로그인 GameState 채움:", GameState_1.default);
                            cc.director.loadScene("MainScene");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.EditBox)
    ], LoginManager.prototype, "nicknameInput", void 0);
    __decorate([
        property(cc.Button)
    ], LoginManager.prototype, "startButton", void 0);
    __decorate([
        property(cc.Prefab)
    ], LoginManager.prototype, "dogPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], LoginManager.prototype, "rabbitPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], LoginManager.prototype, "tigerPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], LoginManager.prototype, "dogCharacter", void 0);
    __decorate([
        property(cc.Node)
    ], LoginManager.prototype, "rabbitCharacter", void 0);
    __decorate([
        property(cc.Node)
    ], LoginManager.prototype, "tigerCharacter", void 0);
    __decorate([
        property(cc.Node)
    ], LoginManager.prototype, "dogSlot", void 0);
    __decorate([
        property(cc.Node)
    ], LoginManager.prototype, "rabbitSlot", void 0);
    __decorate([
        property(cc.Node)
    ], LoginManager.prototype, "tigerSlot", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcQ29tbW9uVUlcXExvZ2luTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFxT0M7UUFuT0MsbUJBQWEsR0FBZSxJQUFJLENBQUM7UUFHakMsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUVYLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBR2xELGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUVsQiw4QkFBd0IsR0FBWSxJQUFJLENBQUM7UUFDekMsdUJBQWlCLEdBQVcsRUFBRSxDQUFDOztJQTJNekMsQ0FBQztJQXpNQyw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXRDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxD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OiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgbmlja25hbWVJbnB1dDogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgZG9nUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgcmFiYml0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgdGlnZXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBkb2dDaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSByYWJiaXRDaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSB0aWdlckNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGRvZ1Nsb3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHJhYmJpdFNsb3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRpZ2VyU2xvdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudFNlbGVjdGVkQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBwcml2YXRlIHNlbGVjdGVkQ2hhcmFjdGVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5zdGFydEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnRyeUF1dG9Mb2dpbigpO1xyXG5cclxuICAgIHRoaXMuY2xlYXJTbG90cygpO1xyXG4gICAgdGhpcy5pbnN0YW50aWF0ZUNoYXJhY3RlcignZG9nJyk7XHJcbiAgICB0aGlzLmluc3RhbnRpYXRlQ2hhcmFjdGVyKCdyYWJiaXQnKTtcclxuICAgIHRoaXMuaW5zdGFudGlhdGVDaGFyYWN0ZXIoJ3RpZ2VyJyk7XHJcblxyXG4gICAgLy8g66qo67CU7J28ICYg642w7Iqk7YGs7YORIOuqqOuRkCDrsoTtirwg7J6R64+Z7ZWY64+E66GdIOydtOuypO2KuCDrk7HroZ1cclxuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25FdmVudHModGhpcy5zdGFydEJ1dHRvbi5ub2RlLCB0aGlzLm9uQ2xpY2tTdGFydC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyDrp4jsmrDsiqQg7Luk7IScIOuzgOqyveydgCDrjbDsiqTtgaztg5Hsl5DshJzrp4xcclxuICAgIGlmICghY2Muc3lzLmlzTW9iaWxlKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgKCkgPT4ge1xyXG4gICAgICAgIGNjLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCAoKSA9PiB7XHJcbiAgICAgICAgY2MuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJCdXR0b25FdmVudHMobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBjYWxsYmFjayk7XHJcbiAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGNsZWFyU2xvdHMoKSB7XHJcbiAgICB0aGlzLmRvZ1Nsb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMucmFiYml0U2xvdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgdGhpcy50aWdlclNsb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICB9XHJcblxyXG4gIGluc3RhbnRpYXRlQ2hhcmFjdGVyKHR5cGU6ICdkb2cnIHwgJ3JhYmJpdCcgfCAndGlnZXInKSB7XHJcbiAgICBsZXQgcHJlZmFiOiBjYy5QcmVmYWI7XHJcbiAgICBsZXQgc2xvdDogY2MuTm9kZTtcclxuICAgIGxldCBjb250YWluZXI6IGNjLk5vZGU7XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2RvZyc6IHByZWZhYiA9IHRoaXMuZG9nUHJlZmFiOyBzbG90ID0gdGhpcy5kb2dTbG90OyBjb250YWluZXIgPSB0aGlzLmRvZ0NoYXJhY3RlcjsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3JhYmJpdCc6IHByZWZhYiA9IHRoaXMucmFiYml0UHJlZmFiOyBzbG90ID0gdGhpcy5yYWJiaXRTbG90OyBjb250YWluZXIgPSB0aGlzLnJhYmJpdENoYXJhY3RlcjsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RpZ2VyJzogcHJlZmFiID0gdGhpcy50aWdlclByZWZhYjsgc2xvdCA9IHRoaXMudGlnZXJTbG90OyBjb250YWluZXIgPSB0aGlzLnRpZ2VyQ2hhcmFjdGVyOyBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJlZmFiICYmIHNsb3QgJiYgY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgc2xvdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICBzbG90LmFkZENoaWxkKGluc3RhbmNlKTtcclxuXHJcbiAgICAgIC8vIOuqqOuwlOydvCDthLDsuZjsmYAg642w7Iqk7YGs7YORIOuniOyasOyKpCDrqqjrkZAg64yA7J2RXHJcbiAgICAgIGNvbnRhaW5lci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDaGFyYWN0ZXIodHlwZSwgY29udGFpbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRhaW5lci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q2hhcmFjdGVyKHR5cGUsIGNvbnRhaW5lcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFjYy5zeXMuaXNNb2JpbGUpIHtcclxuICAgICAgICBjb250YWluZXIub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsICgpID0+IHtcclxuICAgICAgICAgIGNjLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnRhaW5lci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgKCkgPT4ge1xyXG4gICAgICAgICAgY2MuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdENoYXJhY3Rlcih0eXBlOiBzdHJpbmcsIGNvbnRhaW5lcjogY2MuTm9kZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlciA9IHR5cGU7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGVkQ29udGFpbmVyICYmIHRoaXMuY3VycmVudFNlbGVjdGVkQ29udGFpbmVyICE9PSBjb250YWluZXIpIHtcclxuICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJFZmZlY3QodGhpcy5jdXJyZW50U2VsZWN0ZWRDb250YWluZXIsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldENoYXJhY3RlckVmZmVjdChjb250YWluZXIsIHRydWUpO1xyXG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRDb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgdGhpcy5jaGVja0Zvcm1WYWxpZCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2hhcmFjdGVyRWZmZWN0KG5vZGU6IGNjLk5vZGUsIHNlbGVjdGVkOiBib29sZWFuKSB7XHJcbiAgICBub2RlLnNldFNjYWxlKHNlbGVjdGVkID8gMS4yIDogMSk7XHJcbiAgICBub2RlLm9wYWNpdHkgPSBzZWxlY3RlZCA/IDI1NSA6IDIwMDtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0Q2hhcmFjdGVyKF86IGNjLkV2ZW50LCBjaGFyYWN0ZXI6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XHJcbiAgICAgIGNjLmxvZyhcIuy6kOumre2EsCDshKDtg53rkKg6XCIsIGNoYXJhY3Rlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYy53YXJuKFwi7J6Y66q765CcIOy6kOumre2EsCDshKDtg53qsJI6XCIsIGNoYXJhY3Rlcik7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXIgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tGb3JtVmFsaWQoKTtcclxuICB9XHJcblxyXG4gIG9uTmlja25hbWVDaGFuZ2VkKCkge1xyXG4gICAgY2MubG9nKFwi64uJ64Sk7J6EIOyeheugpSDspJE6XCIsIHRoaXMubmlja25hbWVJbnB1dC5zdHJpbmcpO1xyXG4gICAgdGhpcy5jaGVja0Zvcm1WYWxpZCgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tGb3JtVmFsaWQoKSB7XHJcbiAgICBjb25zdCBpc0ZpbGxlZCA9IHRoaXMubmlja25hbWVJbnB1dC5zdHJpbmcudHJpbSgpICE9PSAnJyAmJiB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVyICE9PSAnJztcclxuICAgIHRoaXMuc3RhcnRCdXR0b24uaW50ZXJhY3RhYmxlID0gaXNGaWxsZWQ7XHJcbiAgICBjYy5sb2coXCLtj7wg7Jyg7Zqo7ISxOlwiLCBpc0ZpbGxlZCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkNsaWNrU3RhcnQoKSB7XHJcbiAgICBjb25zdCBuaWNrbmFtZSA9IHRoaXMubmlja25hbWVJbnB1dC5zdHJpbmcudHJpbSgpO1xyXG4gICAgY29uc3QgY2hhcmFjdGVyID0gdGhpcy5zZWxlY3RlZENoYXJhY3RlcjtcclxuXHJcbiAgICBjYy5sb2coXCJTdGFydCDrsoTtirwg7YG066at65CoIC0g64uJ64Sk7J6EOlwiLCBuaWNrbmFtZSwgXCLsupDrpq3thLA6XCIsIGNoYXJhY3Rlcik7XHJcblxyXG4gICAgaWYgKCFuaWNrbmFtZSB8fCAhY2hhcmFjdGVyKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGJyb3dzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdicm93c2VySWQnKTtcclxuICAgICAgaWYgKCFicm93c2VySWQpIHtcclxuICAgICAgICBicm93c2VySWQgPSB0aGlzLmdlbmVyYXRlQnJvd3NlcklkKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jyb3dzZXJJZCcsIGJyb3dzZXJJZCk7XHJcbiAgICAgICAgY2MubG9nKFwi7IOIIOu4jOudvOyasOyggCBJRCDsg53shLHrkKg6XCIsIGJyb3dzZXJJZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxvZ2luUmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoL2xvZ2luJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYnJvd3NlcklkIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFsb2dpblJlcy5vaykgcmV0dXJuO1xyXG4gICAgICBjb25zdCBsb2dpbkRhdGEgPSBhd2FpdCBsb2dpblJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnN0IGp3dFRva2VuID0gbG9naW5EYXRhLnRva2VuO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0VG9rZW4nLCBqd3RUb2tlbik7XHJcblxyXG4gICAgICBjb25zdCBwcm9maWxlUmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoL3NldC1wcm9maWxlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtqd3RUb2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5pY2tuYW1lLCBjaGFyYWN0ZXIgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXByb2ZpbGVSZXMub2spIHJldHVybjtcclxuXHJcbiAgICAgIEdhbWVTdGF0ZS5uaWNrbmFtZSA9IG5pY2tuYW1lO1xyXG4gICAgICBHYW1lU3RhdGUuY2hhcmFjdGVyID0gY2hhcmFjdGVyO1xyXG5cclxuICAgICAgY2MubG9nKFwiR2FtZVN0YXRlIOyggOyepeuQqDpcIiwgR2FtZVN0YXRlLm5pY2tuYW1lLCBHYW1lU3RhdGUuY2hhcmFjdGVyKTtcclxuICAgICAgY29uc3QgcGVuZGluZ1Jvb21JZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGVuZGluZ1Jvb21JZFwiKTtcclxuICAgICAgaWYgKHBlbmRpbmdSb29tSWQpIHtcclxuICAgICAgICBjYy5sb2coXCLwn5SBIOuhnOq3uOyduCDtm4Qg7LSI64yAIOuwqeycvOuhnCDsnbTrj5k6XCIsIHBlbmRpbmdSb29tSWQpO1xyXG4gICAgICAgIEdhbWVTdGF0ZS5pbmNvbWluZ1Jvb21JZCA9IHBlbmRpbmdSb29tSWQ7XHJcbiAgICAgICAgR2FtZVN0YXRlLmlzSG9zdCA9IGZhbHNlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicGVuZGluZ1Jvb21JZFwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJQbGF5ZXJDb25uZWN0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNjLmVycm9yKFwi7JeQ65+sIOuwnOyDnTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVCcm93c2VySWQoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xyXG4gICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyYXkpLm1hcChiID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdHJ5QXV0b0xvZ2luKCkge1xyXG4gICAgY29uc3Qgand0VG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0VG9rZW4nKTtcclxuICAgIGNvbnN0IGJyb3dzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdicm93c2VySWQnKTtcclxuICAgIGlmICghand0VG9rZW4gfHwgIWJyb3dzZXJJZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHZlcmlmeSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC92ZXJpZnktdG9rZW4nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2p3dFRva2VufWAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB2ZXJpZnlSZXN1bHQgPSBhd2FpdCB2ZXJpZnkuanNvbigpO1xyXG4gICAgaWYgKCF2ZXJpZnkub2sgfHwgIXZlcmlmeVJlc3VsdC5zdWNjZXNzKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoL3VzZXItaW5mbycsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtqd3RUb2tlbn1gIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgR2FtZVN0YXRlLm5pY2tuYW1lID0gcmVzdWx0Lm5pY2tuYW1lO1xyXG4gICAgICBHYW1lU3RhdGUuY2hhcmFjdGVyID0gcmVzdWx0LmNoYXJhY3RlcjtcclxuICAgICAgR2FtZVN0YXRlLnJlY2VudFNpbmdsZVNjb3JlcyA9IHJlc3VsdC5yZWNlbnRTaW5nbGVTY29yZXM7XHJcbiAgICAgIGNjLmxvZyhcIuyekOuPmSDroZzqt7jsnbggR2FtZVN0YXRlIOyxhOybgDpcIiwgR2FtZVN0YXRlKTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeSingleGameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f092SlID9Pt5Qa8xNU9wGe', 'MazeSingleGameManager');
// scripts/Jang/MazeSingleGameManager.ts

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
// /assets/Scripts/main/GameManager.ts
var MazeGameData_1 = require("./MazeGameData");
var MazeLogic_1 = require("./MazeLogic");
var MazePlayerController_1 = require("./MazePlayerController");
var MazeUIManager_1 = require("./MazeUIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeRem = 60;
        _this.gameOver = false;
        return _this;
    }
    // 디버그전용
    GameManager.prototype.debugSetLevel = function (lv) {
        this._startLevel(lv);
    };
    // 남은 시간을 수동으로 조정
    GameManager.prototype.debugSetTime = function (t) {
        this.timeRem = t;
        if (this.uiMgr)
            this.uiMgr.setTimer(this.timeRem);
    };
    //여기부터
    GameManager.prototype.onLoad = function () {
        var _this = this;
        this.node.on("nextLevel", function () { return _this._startLevel(MazeGameData_1.default.currentLevel + 1); });
    };
    GameManager.prototype.start = function () {
        this.uiMgr.setScore(0);
        this.logic = new MazeLogic_1.default(this.mazeContainer, this.tilePrefab, this.pathFrame, this.grassFrame, 50 // cellSize 45px (21*45=945 < 1080)
        );
        this.playerCtrl.mazeLogic = this.logic;
        this._startLevel(MazeGameData_1.default.currentLevel);
        //여기까지는 디버깅아님 
        // 디버그 전용
        this.uiMgr.setScore(0);
        this.logic = new MazeLogic_1.default(this.mazeContainer, this.tilePrefab, this.pathFrame, this.grassFrame, 50);
        this.playerCtrl.mazeLogic = this.logic;
        this._startLevel(MazeGameData_1.default.currentLevel);
        window.GM = this; // 여기까지 디버깅깅
    };
    GameManager.prototype._startLevel = function (lv) {
        MazeGameData_1.default.currentLevel = lv;
        this.timeRem = 60;
        this.gameOver = false;
        // 21x21 고정
        this.logic = new MazeLogic_1.default(this.mazeContainer, this.tilePrefab, this.pathFrame, this.grassFrame, 50);
        this.playerCtrl.mazeLogic = this.logic;
        this.logic.build(lv);
        // 중앙정렬 (가로 1080, 세로 1920 기준)
        var cs = this.logic.cellSize;
        var cols = this.logic.maze[0].length;
        var rows = this.logic.maze.length;
        var baseX = (1080 - cols * cs) / 2;
        var baseY = (1920 - rows * cs) / 2;
        this.mazeContainer.setPosition(baseX, baseY);
        // 플레이어 배치
        var st = this.logic.getStartPosition();
        this.playerCtrl.currentGridPos = cc.v2(st.x, st.y);
        this.playerCtrl.node.setPosition(cc.v2(baseX + st.x * cs + cs / 2, baseY + st.y * cs + cs / 2));
        var goalSprite;
        switch (MazeGameData_1.default.playerType) {
            case "tiger":
                goalSprite = this.goalSongpyeon;
                break;
            case "dog":
                goalSprite = this.goalBone;
                break;
            case "rabbit":
                goalSprite = this.goalCarrot;
                break;
            default:
                goalSprite = this.goalSongpyeon; // 기본값(예: 호랑이용)
        }
        var sp = this.goalNode.getComponent(cc.Sprite);
        if (!sp)
            sp = this.goalNode.addComponent(cc.Sprite);
        sp.type = cc.Sprite.Type.SIMPLE;
        sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.goalNode.setContentSize(cs, cs);
        this.goalNode.zIndex = 500;
        sp.spriteFrame = goalSprite;
        var go = this.logic.getGoalPosition();
        this.goalNode.setPosition(cc.v2(baseX + go.x * cs + cs / 2, baseY + go.y * cs + cs / 2));
        this.uiMgr.setTimer(this.timeRem);
    };
    GameManager.prototype.update = function (dt) {
        var _this = this;
        if (this.gameOver)
            return;
        this.timeRem -= dt;
        if (this.timeRem <= 0) {
            this.gameOver = true;
            cc.director.loadScene("GameOver");
            return;
        }
        this.uiMgr.setTimer(this.timeRem);
        var cs = this.logic.cellSize;
        var cols = this.logic.maze[0].length;
        var rows = this.logic.maze.length;
        var baseX = (1080 - cols * cs) / 2;
        var baseY = (1920 - rows * cs) / 2;
        var go = this.logic.getGoalPosition();
        var goalWorld = cc.v2(baseX + go.x * cs + cs / 2, baseY + go.y * cs + cs / 2);
        if (this.playerCtrl.node.getPosition().sub(goalWorld).mag() < cs * 0.4) {
            this.gameOver = true;
            MazeGameData_1.default.addScore(MazeGameData_1.default.currentLevel);
            this.uiMgr.setScore(MazeGameData_1.default.score);
            this.scheduleOnce(function () {
                _this._startLevel(MazeGameData_1.default.currentLevel + 1);
            }, 0);
        }
    };
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "mazeContainer", void 0);
    __decorate([
        property(MazePlayerController_1.default)
    ], GameManager.prototype, "playerCtrl", void 0);
    __decorate([
        property(MazeUIManager_1.default)
    ], GameManager.prototype, "uiMgr", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "goalNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "tilePrefab", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "pathFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "grassFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "goalSongpyeon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "goalBone", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "goalCarrot", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZVNpbmdsZUdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0QywrQ0FBc0M7QUFDdEMseUNBQW9DO0FBQ3BDLCtEQUFzRDtBQUN0RCxpREFBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE4SkM7UUFqSlMsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVEsR0FBRyxLQUFLLENBQUM7O0lBZ0ozQixDQUFDO0lBOUlELFFBQVE7SUFDQyxtQ0FBYSxHQUFwQixVQUFxQixFQUFVO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELGlCQUFpQjtJQUNWLGtDQUFZLEdBQW5CLFVBQW9CLENBQVM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBSUQsTUFBTTtJQUNKLDRCQUFNLEdBQU47UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJ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QUFFLENBQUMsV0FBVyxDQUFDO2lEQUEyQjtJQUMxQjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFBNkI7SUFWbkMsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQThKL0I7SUFBRCxrQkFBQztDQTlKRCxBQThKQyxDQTlKd0MsRUFBRSxDQUFDLFNBQVMsR0E4SnBEO2tCQTlKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC9hc3NldHMvU2NyaXB0cy9tYWluL0dhbWVNYW5hZ2VyLnRzXG5pbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4vTWF6ZUdhbWVEYXRhXCI7XG5pbXBvcnQgTWF6ZUxvZ2ljIGZyb20gXCIuL01hemVMb2dpY1wiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4vTWF6ZVBsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vTWF6ZVVJTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTm9kZSkgICAgICAgICAgbWF6ZUNvbnRhaW5lciE6IGNjLk5vZGU7XG4gIEBwcm9wZXJ0eShQbGF5ZXJDb250cm9sbGVyKSBwbGF5ZXJDdHJsITogUGxheWVyQ29udHJvbGxlcjtcbiAgQHByb3BlcnR5KFVJTWFuYWdlcikgICAgICAgIHVpTWdyITogVUlNYW5hZ2VyO1xuICBAcHJvcGVydHkoY2MuTm9kZSkgICAgICAgICAgZ29hbE5vZGUhOiBjYy5Ob2RlO1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKSAgICAgICAgdGlsZVByZWZhYiE6IGNjLlByZWZhYjtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSAgIHBhdGhGcmFtZSE6IGNjLlNwcml0ZUZyYW1lO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpICAgZ3Jhc3NGcmFtZSE6IGNjLlNwcml0ZUZyYW1lO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIGdvYWxTb25ncHllb24hOiBjYy5TcHJpdGVGcmFtZTsgLy8g7Zi4656R7J207J2YIOuqqe2RnCjshqHtjrgpXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgZ29hbEJvbmUhOiBjYy5TcHJpdGVGcmFtZTsgICAgICAvLyDqsJXslYTsp4DsnZgg66qp7ZGcKOu8iClcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBnb2FsQ2Fycm90ITogY2MuU3ByaXRlRnJhbWU7ICAgIC8vIO2GoOuBvOydmCDrqqntkZwo64u56re8KVxuXG4gIHByaXZhdGUgbG9naWMhOiBNYXplTG9naWM7XG4gIHByaXZhdGUgdGltZVJlbSA9IDYwO1xuICBwcml2YXRlIGdhbWVPdmVyID0gZmFsc2U7XG5cbi8vIOuUlOuyhOq3uOyghOyaqVxuICBwdWJsaWMgZGVidWdTZXRMZXZlbChsdjogbnVtYmVyKSB7XG4gIHRoaXMuX3N0YXJ0TGV2ZWwobHYpO1xufVxuXG4vLyDrgqjsnYAg7Iuc6rCE7J2EIOyImOuPmeycvOuhnCDsobDsoJVcbnB1YmxpYyBkZWJ1Z1NldFRpbWUodDogbnVtYmVyKSB7XG4gIHRoaXMudGltZVJlbSA9IHQ7XG4gIGlmICh0aGlzLnVpTWdyKSB0aGlzLnVpTWdyLnNldFRpbWVyKHRoaXMudGltZVJlbSk7XG59XG5cblxuXG4vL+yXrOq4sOu2gO2EsFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKFwibmV4dExldmVsXCIsICgpID0+IHRoaXMuX3N0YXJ0TGV2ZWwoR2FtZURhdGEuY3VycmVudExldmVsICsgMSkpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy51aU1nci5zZXRTY29yZSgwKTtcbiAgICB0aGlzLmxvZ2ljID0gbmV3IE1hemVMb2dpYyhcbiAgICAgIHRoaXMubWF6ZUNvbnRhaW5lcixcbiAgICAgIHRoaXMudGlsZVByZWZhYiwgdGhpcy5wYXRoRnJhbWUsIHRoaXMuZ3Jhc3NGcmFtZSxcbiAgICAgIDUwIC8vIGNlbGxTaXplIDQ1cHggKDIxKjQ1PTk0NSA8IDEwODApXG4gICAgKTtcbiAgICB0aGlzLnBsYXllckN0cmwubWF6ZUxvZ2ljID0gdGhpcy5sb2dpYztcbiAgICB0aGlzLl9zdGFydExldmVsKEdhbWVEYXRhLmN1cnJlbnRMZXZlbCk7XG4vL+yXrOq4sOq5jOyngOuKlCDrlJTrsoTquYXslYTri5ggXG5cblxuICAgIC8vIOuUlOuyhOq3uCDsoITsmqlcbiAgdGhpcy51aU1nci5zZXRTY29yZSgwKTtcbiAgdGhpcy5sb2dpYyA9IG5ldyBNYXplTG9naWMoXG4gICAgdGhpcy5tYXplQ29udGFpbmVyLFxuICAgIHRoaXMudGlsZVByZWZhYiwgdGhpcy5wYXRoRnJhbWUsIHRoaXMuZ3Jhc3NGcmFtZSxcbiAgICA1MFxuICApO1xuICB0aGlzLnBsYXllckN0cmwubWF6ZUxvZ2ljID0gdGhpcy5sb2dpYztcbiAgdGhpcy5fc3RhcnRMZXZlbChHYW1lRGF0YS5jdXJyZW50TGV2ZWwpO1xuICAod2luZG93IGFzIGFueSkuR00gPSB0aGlzOy8vIOyXrOq4sOq5jOyngCDrlJTrsoTquYXquYVcbn1cblxuICBwcml2YXRlIF9zdGFydExldmVsKGx2OiBudW1iZXIpIHtcbiAgICBHYW1lRGF0YS5jdXJyZW50TGV2ZWwgPSBsdjtcbiAgICB0aGlzLnRpbWVSZW0gPSA2MDtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG5cbiAgICAvLyAyMXgyMSDqs6DsoJVcbiAgICB0aGlzLmxvZ2ljID0gbmV3IE1hemVMb2dpYyhcbiAgICAgIHRoaXMubWF6ZUNvbnRhaW5lcixcbiAgICAgIHRoaXMudGlsZVByZWZhYiwgdGhpcy5wYXRoRnJhbWUsIHRoaXMuZ3Jhc3NGcmFtZSxcbiAgICAgIDUwXG4gICAgKTtcbiAgICB0aGlzLnBsYXllckN0cmwubWF6ZUxvZ2ljID0gdGhpcy5sb2dpYztcblxuICAgIHRoaXMubG9naWMuYnVpbGQobHYpO1xuXG4gICAgLy8g7KSR7JWZ7KCV66CsICjqsIDroZwgMTA4MCwg7IS466GcIDE5MjAg6riw7KSAKVxuICAgIGNvbnN0IGNzICAgPSB0aGlzLmxvZ2ljLmNlbGxTaXplO1xuICAgIGNvbnN0IGNvbHMgPSB0aGlzLmxvZ2ljLm1hemVbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLmxvZ2ljLm1hemUubGVuZ3RoO1xuICAgIGNvbnN0IGJhc2VYID0gKDEwODAgLSBjb2xzICogY3MpIC8gMjtcbiAgICBjb25zdCBiYXNlWSA9ICgxOTIwIC0gcm93cyAqIGNzKSAvIDI7XG4gICAgdGhpcy5tYXplQ29udGFpbmVyLnNldFBvc2l0aW9uKGJhc2VYLCBiYXNlWSk7XG5cbiAgICAvLyDtlIzroIjsnbTslrQg67Cw7LmYXG4gICAgY29uc3Qgc3QgPSB0aGlzLmxvZ2ljLmdldFN0YXJ0UG9zaXRpb24oKTtcbiAgICB0aGlzLnBsYXllckN0cmwuY3VycmVudEdyaWRQb3MgPSBjYy52MihzdC54LCBzdC55KTtcbiAgICB0aGlzLnBsYXllckN0cmwubm9kZS5zZXRQb3NpdGlvbihcbiAgICAgIGNjLnYyKFxuICAgICAgICBiYXNlWCArIHN0LnggKiBjcyArIGNzIC8gMixcbiAgICAgICAgYmFzZVkgKyBzdC55ICogY3MgKyBjcyAvIDJcbiAgICAgIClcbiAgICApO1xuXG4gICAgbGV0IGdvYWxTcHJpdGU6IGNjLlNwcml0ZUZyYW1lO1xuc3dpdGNoIChHYW1lRGF0YS5wbGF5ZXJUeXBlKSB7XG4gIGNhc2UgXCJ0aWdlclwiOlxuICAgIGdvYWxTcHJpdGUgPSB0aGlzLmdvYWxTb25ncHllb247XG4gICAgYnJlYWs7XG4gIGNhc2UgXCJkb2dcIjpcbiAgICBnb2FsU3ByaXRlID0gdGhpcy5nb2FsQm9uZTtcbiAgICBicmVhaztcbiAgY2FzZSBcInJhYmJpdFwiOlxuICAgIGdvYWxTcHJpdGUgPSB0aGlzLmdvYWxDYXJyb3Q7XG4gICAgYnJlYWs7XG4gIGRlZmF1bHQ6XG4gICAgZ29hbFNwcml0ZSA9IHRoaXMuZ29hbFNvbmdweWVvbjsgLy8g6riw67O46rCSKOyYiDog7Zi4656R7J207JqpKVxufVxuXG5cbiAgICBsZXQgc3AgPSB0aGlzLmdvYWxOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIGlmICghc3ApIHNwID0gdGhpcy5nb2FsTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICBzcC50eXBlICAgICAgICA9IGNjLlNwcml0ZS5UeXBlLlNJTVBMRTtcbiAgICBzcC5zaXplTW9kZSAgICA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgdGhpcy5nb2FsTm9kZS5zZXRDb250ZW50U2l6ZShjcywgY3MpO1xuICAgIHRoaXMuZ29hbE5vZGUuekluZGV4ID0gNTAwO1xuXG4gICAgc3Auc3ByaXRlRnJhbWUgPSBnb2FsU3ByaXRlO1xuICAgIFxuICAgIGNvbnN0IGdvID0gdGhpcy5sb2dpYy5nZXRHb2FsUG9zaXRpb24oKTtcbiAgICB0aGlzLmdvYWxOb2RlLnNldFBvc2l0aW9uKFxuICAgICAgY2MudjIoXG4gICAgICAgIGJhc2VYICsgZ28ueCAqIGNzICsgY3MgLyAyLFxuICAgICAgICBiYXNlWSArIGdvLnkgKiBjcyArIGNzIC8gMlxuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLnVpTWdyLnNldFRpbWVyKHRoaXMudGltZVJlbSk7XG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICB0aGlzLnRpbWVSZW0gLT0gZHQ7XG4gICAgaWYgKHRoaXMudGltZVJlbSA8PSAwKSB7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVPdmVyXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVpTWdyLnNldFRpbWVyKHRoaXMudGltZVJlbSk7XG5cbiAgICBjb25zdCBjcyAgID0gdGhpcy5sb2dpYy5jZWxsU2l6ZTtcbiAgICBjb25zdCBjb2xzID0gdGhpcy5sb2dpYy5tYXplWzBdLmxlbmd0aDtcbiAgICBjb25zdCByb3dzID0gdGhpcy5sb2dpYy5tYXplLmxlbmd0aDtcbiAgICBjb25zdCBiYXNlWCA9ICgxMDgwIC0gY29scyAqIGNzKSAvIDI7XG4gICAgY29uc3QgYmFzZVkgPSAoMTkyMCAtIHJvd3MgKiBjcykgLyAyO1xuXG4gICAgY29uc3QgZ28gPSB0aGlzLmxvZ2ljLmdldEdvYWxQb3NpdGlvbigpO1xuICAgIGNvbnN0IGdvYWxXb3JsZCA9IGNjLnYyKFxuICAgICAgYmFzZVggKyBnby54ICogY3MgKyBjcyAvIDIsXG4gICAgICBiYXNlWSArIGdvLnkgKiBjcyArIGNzIC8gMlxuICAgICk7XG5pZiAodGhpcy5wbGF5ZXJDdHJsLm5vZGUuZ2V0UG9zaXRpb24oKS5zdWIoZ29hbFdvcmxkKS5tYWcoKSA8IGNzICogMC40KSB7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICBHYW1lRGF0YS5hZGRTY29yZShHYW1lRGF0YS5jdXJyZW50TGV2ZWwpO1xuICB0aGlzLnVpTWdyLnNldFNjb3JlKEdhbWVEYXRhLnNjb3JlKTtcbiAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIHRoaXMuX3N0YXJ0TGV2ZWwoR2FtZURhdGEuY3VycmVudExldmVsICsgMSk7XG4gIH0sIDApO1xufVxuICB9XG59XG4iXX0=
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
Object.defineProperty(exports, "__esModule", { value: true });
var MazeGenerator_1 = require("./MazeGenerator");
var MazeRenderer_1 = require("./MazeRenderer");
var MazeLogic = /** @class */ (function () {
    function MazeLogic(container, tilePrefab, pathFrame, grassFrame, cellSize) {
        this.cellSize = cellSize;
        this.maze = [];
        this.goalPos = { x: 19, y: 19 };
        this.generator = new MazeGenerator_1.default(21, 21);
        this.renderer = new MazeRenderer_1.default(container, tilePrefab, pathFrame, grassFrame, cellSize);
    }
    MazeLogic.prototype.build = function (level) {
        if (level === void 0) { level = 1; }
        this.maze = this.generator.generateMaze(level);
        this.renderer.render(this.maze);
        this.goalPos = { x: 19, y: 19 };
    };
    MazeLogic.prototype.isWalkable = function (x, y) {
        return (x >= 0 && x < 21 &&
            y >= 0 && y < 21 &&
            this.maze[y][x] === 0);
    };
    MazeLogic.prototype.getStartPosition = function () { return { x: 1, y: 1 }; };
    MazeLogic.prototype.getGoalPosition = function () { return this.goalPos; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZUxvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLCtDQUEwQztBQUkxQztJQU1FLG1CQUNFLFNBQWtCLEVBQ2xCLFVBQXFCLEVBQ3JCLFNBQXlCLEVBQ3pCLFVBQTBCLEVBQ25CLFFBQWdCO1FBQWhCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFSbEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUNyQixZQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQVMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksdUJBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHNCQUFZLENBQzlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQ3ZELENBQUM7SUFDSixDQUFDO0lBRU0seUJBQUssR0FBWixVQUFhLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsU0FBaUI7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSw4QkFBVSxHQUFqQixVQUFrQixDQUFTLEVBQUUsQ0FBUztRQUNwQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNoQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVNLG9DQUFnQixHQUF2QixjQUFxQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RELG1DQUFlLEdBQXRCLGNBQXFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0QsZ0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hemVHZW5lcmF0b3IgZnJvbSBcIi4vTWF6ZUdlbmVyYXRvclwiO1xuaW1wb3J0IE1hemVSZW5kZXJlciBmcm9tIFwiLi9NYXplUmVuZGVyZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHcmlkUG9zIHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF6ZUxvZ2ljIHtcbiAgcHJpdmF0ZSBnZW5lcmF0b3I6IE1hemVHZW5lcmF0b3I7XG4gIHByaXZhdGUgcmVuZGVyZXI6IE1hemVSZW5kZXJlcjtcbiAgcHVibGljIG1hemU6IG51bWJlcltdW10gPSBbXTtcbiAgcHJpdmF0ZSBnb2FsUG9zOiBHcmlkUG9zID0geyB4OiAxOSwgeTogMTkgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb250YWluZXI6IGNjLk5vZGUsXG4gICAgdGlsZVByZWZhYjogY2MuUHJlZmFiLFxuICAgIHBhdGhGcmFtZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgZ3Jhc3NGcmFtZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgcHVibGljIGNlbGxTaXplOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5nZW5lcmF0b3IgPSBuZXcgTWF6ZUdlbmVyYXRvcigyMSwgMjEpO1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgTWF6ZVJlbmRlcmVyKFxuICAgICAgY29udGFpbmVyLCB0aWxlUHJlZmFiLCBwYXRoRnJhbWUsIGdyYXNzRnJhbWUsIGNlbGxTaXplXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZChsZXZlbDogbnVtYmVyID0gMSkge1xuICAgIHRoaXMubWF6ZSA9IHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlTWF6ZShsZXZlbCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5tYXplKTtcbiAgICB0aGlzLmdvYWxQb3MgPSB7IHg6IDE5LCB5OiAxOSB9O1xuICB9XG5cbiAgcHVibGljIGlzV2Fsa2FibGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgeCA+PSAwICYmIHggPCAyMSAmJlxuICAgICAgeSA+PSAwICYmIHkgPCAyMSAmJlxuICAgICAgdGhpcy5tYXplW3ldW3hdID09PSAwXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdGFydFBvc2l0aW9uKCk6IEdyaWRQb3MgeyByZXR1cm4geyB4OiAxLCB5OiAxIH07IH1cbiAgcHVibGljIGdldEdvYWxQb3NpdGlvbigpOiBHcmlkUG9zICB7IHJldHVybiB0aGlzLmdvYWxQb3M7IH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazePlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4945dCYaAtPU49aTpTuPF+Z', 'MazePlayerController');
// scripts/Jang/MazePlayerController.ts

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
// /assets/Scripts/player/PlayerController.ts
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MazeGameData_1 = require("./MazeGameData");
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentGridPos = cc.v2(1, 1);
        _this.isMoving = false;
        _this.lastMoveTime = 0;
        _this.moveInterval = 120;
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        this.sprite = this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
        // 캐릭터 타입에 따라 스프라이트 이미지 선택
        switch (MazeGameData_1.default.playerType) {
            case "tiger":
                this.sprite.spriteFrame = this.tigerFrame;
                break;
            case "dog":
                this.sprite.spriteFrame = this.dogFrame;
                break;
            case "rabbit":
                this.sprite.spriteFrame = this.rabbitFrame;
                break;
            default:
                this.sprite.spriteFrame = this.tigerFrame; // 혹시 모를 기본값
        }
        cc.systemEvent.on('devicemotion', this._onDeviceMotion, this);
        this.sprite = this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
        this.sprite.type = cc.Sprite.Type.SIMPLE;
        this.sprite.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.node.setScale(2.5); // cellSize 동기화
        this.node.setContentSize(50, 50); // ← 항상 50x50 px
        this.node.setScale(1); // 필요 시 (보통 1)
        this.node.setAnchorPoint(0.5, 0.5);
        this.node.zIndex = 500;
        // 4) 키 입력 리스너
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
    };
    PlayerController.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this._onDeviceMotion, this);
    };
    // 
    PlayerController.prototype._onDeviceMotion = function (event) {
        if (this.isMoving)
            return;
        var acc = event.acc;
        var now = Date.now();
        if (now - this.lastMoveTime < this.moveInterval)
            return; // 연속이동방지
        if (acc.x > 0.23)
            this.move(1, 0);
        else if (acc.x < -0.23)
            this.move(-1, 0);
        else if (acc.y > 0.18)
            this.move(0, 1);
        else if (acc.y < -0.18)
            this.move(0, -1);
        this.lastMoveTime = now;
    };
    PlayerController.prototype._onKeyDown = function (e) {
        if (this.isMoving)
            return;
        var dx = 0, dy = 0;
        switch (e.keyCode) {
            case cc.macro.KEY.left:
                dx = -1;
                break;
            case cc.macro.KEY.right:
                dx = 1;
                break;
            case cc.macro.KEY.up:
                dy = 1;
                break;
            case cc.macro.KEY.down:
                dy = -1;
                break;
            default:
                return;
        }
        this.move(dx, dy);
    };
    PlayerController.prototype.move = function (dx, dy) {
        var nx = this.currentGridPos.x + dx;
        var ny = this.currentGridPos.y + dy;
        if (!this.mazeLogic.isWalkable(nx, ny))
            return;
        this.currentGridPos = cc.v2(nx, ny);
        var cs = this.mazeLogic.cellSize;
        var cols = this.mazeLogic.maze[0].length;
        var rows = this.mazeLogic.maze.length;
        var baseX = (1080 - cols * cs) / 2;
        var baseY = (1920 - rows * cs) / 2;
        var target = cc.v2(baseX + nx * cs + cs / 2, baseY + ny * cs + cs / 2);
        // 여기 추가
        this.node.setPosition(target); // 실제 화면 이동!
    };
    __decorate([
        property(cc.SpriteFrame)
    ], PlayerController.prototype, "tigerFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PlayerController.prototype, "dogFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PlayerController.prototype, "rabbitFrame", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZVBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTZDO0FBQ3ZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLCtDQUFzQztBQUl0QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTRHQztRQXJHUSxvQkFBYyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBR3JDLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFzQ2pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQVcsR0FBRyxDQUFDOztJQTJEckMsQ0FBQztJQS9GQSxpQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JGLDBCQUEwQjtRQUMxQixRQUFRLHNCQUFRLENBQUMsVUFBVSxFQUFFO1lBQzNCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMxQyxNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3hDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDM0MsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FB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U0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUNsQixLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN4QixLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUN6QixDQUFDO1FBRUYsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWTtJQUMzQyxDQUFDO0lBekd5QjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3REFBNkI7SUFDNUI7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQTJCO0lBQzFCO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lEQUE4QjtJQUhwQyxnQkFBZ0I7UUFGcEMsT0FBTztPQUVhLGdCQUFnQixDQTRHcEM7SUFBRCx1QkFBQztDQTVHRCxBQTRHQyxDQTVHNkMsRUFBRSxDQUFDLFNBQVMsR0E0R3pEO2tCQTVHb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gL2Fzc2V0cy9TY3JpcHRzL3BsYXllci9QbGF5ZXJDb250cm9sbGVyLnRzXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IE1hemVMb2dpYyBmcm9tIFwiLi9NYXplTG9naWNcIjtcbmltcG9ydCBHYW1lRGF0YSBmcm9tIFwiLi9NYXplR2FtZURhdGFcIjtcblxuQGNjY2xhc3NcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgdGlnZXJGcmFtZSE6IGNjLlNwcml0ZUZyYW1lO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIGRvZ0ZyYW1lITogY2MuU3ByaXRlRnJhbWU7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgcmFiYml0RnJhbWUhOiBjYy5TcHJpdGVGcmFtZTtcblxuXG4gXG4gIHB1YmxpYyBjdXJyZW50R3JpZFBvczogY2MuVmVjMiA9IGNjLnYyKDEsIDEpO1xuICBwdWJsaWMgbWF6ZUxvZ2ljITogTWF6ZUxvZ2ljO1xuXG4gIHByaXZhdGUgaXNNb3ZpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzcHJpdGUhOiBjYy5TcHJpdGU7XG5cbiBvbkxvYWQoKSB7XG4gIHRoaXMuc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpIHx8IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgLy8g7LqQ66at7YSwIO2DgOyeheyXkCDrlLDrnbwg7Iqk7ZSE65287J207Yq4IOydtOuvuOyngCDshKDtg51cbiAgc3dpdGNoIChHYW1lRGF0YS5wbGF5ZXJUeXBlKSB7XG4gICAgY2FzZSBcInRpZ2VyXCI6XG4gICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMudGlnZXJGcmFtZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkb2dcIjpcbiAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5kb2dGcmFtZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyYWJiaXRcIjpcbiAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5yYWJiaXRGcmFtZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMudGlnZXJGcmFtZTsgLy8g7Zi57IucIOuqqOulvCDquLDrs7jqsJJcbiAgfVxuICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLl9vbkRldmljZU1vdGlvbiwgdGhpcyk7XG4gICAgdGhpcy5zcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgfHwgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHRoaXMuc3ByaXRlLnR5cGUgICAgICAgID0gY2MuU3ByaXRlLlR5cGUuU0lNUExFO1xuICAgIHRoaXMuc3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlRSSU1NRUQ7XG4gICAgdGhpcy5ub2RlLnNldFNjYWxlKDIuNSk7IC8vIGNlbGxTaXplIOuPmeq4sO2ZlFxuICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSg1MCwgNTApOyAvLyDihpAg7ZWt7IOBIDUweDUwIHB4XG4gICAgdGhpcy5ub2RlLnNldFNjYWxlKDEpOyAgICAgICAgICAgIC8vIO2VhOyalCDsi5wgKOuztO2GtSAxKVxuICAgIHRoaXMubm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5ub2RlLnpJbmRleCA9IDUwMDtcbiAgICBcblxuICAgIC8vIDQpIO2CpCDsnoXroKUg66as7Iqk64SIXG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLl9vbktleURvd24sIHRoaXMpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMuX29uS2V5RG93biwgdGhpcyk7XG4gICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5ERVZJQ0VNT1RJT04sIHRoaXMuX29uRGV2aWNlTW90aW9uLCB0aGlzKTtcbiAgfVxuICBwcml2YXRlIGxhc3RNb3ZlVGltZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBtb3ZlSW50ZXJ2YWw6IG51bWJlciA9IDEyMDtcbiAgLy8gXG4gIHByaXZhdGUgX29uRGV2aWNlTW90aW9uKGV2ZW50OiBhbnkpIHtcbiAgaWYgKHRoaXMuaXNNb3ZpbmcpIHJldHVybjtcbiAgY29uc3QgYWNjID0gZXZlbnQuYWNjO1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBpZiAobm93IC0gdGhpcy5sYXN0TW92ZVRpbWUgPCB0aGlzLm1vdmVJbnRlcnZhbCkgcmV0dXJuOyAgLy8g7Jew7IaN7J2064+Z67Cp7KeAXG5cbiAgIGlmIChhY2MueCA+IDAuMjMpICAgICAgdGhpcy5tb3ZlKDEsIDApO1xuICBlbHNlIGlmIChhY2MueCA8IC0wLjIzKSB0aGlzLm1vdmUoLTEsIDApO1xuICBlbHNlIGlmIChhY2MueSA+IDAuMTgpICB0aGlzLm1vdmUoMCwgMSk7XG4gIGVsc2UgaWYgKGFjYy55IDwgLTAuMTgpIHRoaXMubW92ZSgwLCAtMSk7XG5cbiAgdGhpcy5sYXN0TW92ZVRpbWUgPSBub3c7XG59XG5cbiAgcHJpdmF0ZSBfb25LZXlEb3duKGU6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xuICAgIGxldCBkeCA9IDAsIGR5ID0gMDtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcbiAgICAgICAgZHggPSAtMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgZHggPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICBkeSA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcbiAgICAgICAgZHkgPSAtMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubW92ZShkeCwgZHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpIHtcbiAgY29uc3QgbnggPSB0aGlzLmN1cnJlbnRHcmlkUG9zLnggKyBkeDtcbiAgY29uc3QgbnkgPSB0aGlzLmN1cnJlbnRHcmlkUG9zLnkgKyBkeTtcbiAgaWYgKCF0aGlzLm1hemVMb2dpYy5pc1dhbGthYmxlKG54LCBueSkpIHJldHVybjtcblxuICB0aGlzLmN1cnJlbnRHcmlkUG9zID0gY2MudjIobngsIG55KTtcblxuICBjb25zdCBjcyA9IHRoaXMubWF6ZUxvZ2ljLmNlbGxTaXplO1xuICBjb25zdCBjb2xzID0gdGhpcy5tYXplTG9naWMubWF6ZVswXS5sZW5ndGg7XG4gIGNvbnN0IHJvd3MgPSB0aGlzLm1hemVMb2dpYy5tYXplLmxlbmd0aDtcbiAgY29uc3QgYmFzZVggPSAoMTA4MCAtIGNvbHMgKiBjcykgLyAyO1xuICBjb25zdCBiYXNlWSA9ICgxOTIwIC0gcm93cyAqIGNzKSAvIDI7XG4gIGNvbnN0IHRhcmdldCA9IGNjLnYyKFxuICAgIGJhc2VYICsgbnggKiBjcyArIGNzIC8gMixcbiAgICBiYXNlWSArIG55ICogY3MgKyBjcyAvIDJcbiAgKTtcblxuICAvLyDsl6zquLAg7LaU6rCAXG4gIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0YXJnZXQpOyAvLyDsi6TsoJwg7ZmU66m0IOydtOuPmSFcbiAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/Maze_explainSceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ce4bjAkZFBSr8F4aGIbGs9', 'Maze_explainSceneManager');
// scripts/Jang/Maze_explainSceneManager.ts

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
// /assets/Scripts/main/MainMenuManager.ts
var MazeGameData_1 = require("./MazeGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainMenuManager = /** @class */ (function (_super) {
    __extends(MainMenuManager, _super);
    function MainMenuManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainMenuManager.prototype.start = function () {
        MazeGameData_1.default.currentLevel = 1;
        this.startBtn.on("click", function () { return cc.director.loadScene("MazeSingleScene"); });
    };
    __decorate([
        property(cc.Node)
    ], MainMenuManager.prototype, "startBtn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZV9leHBsYWluU2NlbmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUEwQztBQUMxQywrQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7O0lBTUEsQ0FBQztJQUpDLCtCQUFLLEdBQUw7UUFDRSxzQkFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQUssT0FBQSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUprQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFBb0I7SUFEbkIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQU1uQztJQUFELHNCQUFDO0NBTkQsQUFNQyxDQU40QyxFQUFFLENBQUMsU0FBUyxHQU14RDtrQkFOb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC9hc3NldHMvU2NyaXB0cy9tYWluL01haW5NZW51TWFuYWdlci50c1xuaW1wb3J0IEdhbWVEYXRhIGZyb20gXCIuL01hemVHYW1lRGF0YVwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBzdGFydEJ0biE6IGNjLk5vZGU7XG4gIHN0YXJ0KCkge1xuICAgIEdhbWVEYXRhLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgdGhpcy5zdGFydEJ0bi5vbihcImNsaWNrXCIsICgpPT4gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWF6ZVNpbmdsZVNjZW5lXCIpKTtcbiAgfVxufVxuIl19
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
        this.recentSingleScores = [];
        this.incomingRoomId = '';
        // this.isHost = false;
    };
    GameState.lastGameScene = '';
    GameState.nickname = '';
    GameState.character = '';
    GameState.score = 0;
    GameState.gameId = '';
    GameState.incomingRoomId = '';
    GameState.isHost = false; // 역할 구분 추가
    GameState.recentSingleScores = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcQ29tbW9uVUlcXEdhbWVTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUEyQkEsQ0FBQztJQVpRLG1CQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVNLG1CQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6Qix1QkFBdUI7SUFDekIsQ0FBQztJQXpCTSx1QkFBYSxHQUFXLEVBQUUsQ0FBQztJQUMzQixrQkFBUSxHQUFXLEVBQUUsQ0FBQztJQUN0QixtQkFBUyxHQUFXLEVBQUUsQ0FBQztJQUN2QixlQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ2xCLGdCQUFNLEdBQVcsRUFBRSxDQUFDO0lBQ3BCLHdCQUFjLEdBQVcsRUFBRSxDQUFDO0lBQzVCLGdCQUFNLEdBQVksS0FBSyxDQUFDLENBQUMsV0FBVztJQUVwQyw0QkFBa0IsR0FJbkIsRUFBRSxDQUFDO0lBY1gsZ0JBQUM7Q0EzQkQsQUEyQkMsSUFBQTtrQkEzQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhdGUge1xyXG4gIHN0YXRpYyBsYXN0R2FtZVNjZW5lOiBzdHJpbmcgPSAnJztcclxuICBzdGF0aWMgbmlja25hbWU6IHN0cmluZyA9ICcnO1xyXG4gIHN0YXRpYyBjaGFyYWN0ZXI6IHN0cmluZyA9ICcnO1xyXG4gIHN0YXRpYyBzY29yZTogbnVtYmVyID0gMDtcclxuICBzdGF0aWMgZ2FtZUlkOiBzdHJpbmcgPSAnJztcclxuICBzdGF0aWMgaW5jb21pbmdSb29tSWQ6IHN0cmluZyA9ICcnO1xyXG4gIHN0YXRpYyBpc0hvc3Q6IGJvb2xlYW4gPSBmYWxzZTsgLy8g7Jet7ZWgIOq1rOu2hCDstpTqsIBcclxuXHJcbiAgc3RhdGljIHJlY2VudFNpbmdsZVNjb3Jlczoge1xyXG4gICAgZ2FtZUlkOiBzdHJpbmc7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG4gICAgcGxheWVkQXQ6IHN0cmluZztcclxuICB9W10gPSBbXTtcclxuXHJcbiAgc3RhdGljIHJlc2V0R2FtZSgpIHtcclxuICAgIHRoaXMubGFzdEdhbWVTY2VuZSA9ICcnO1xyXG4gICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVzZXRVc2VyKCkge1xyXG4gICAgdGhpcy5uaWNrbmFtZSA9ICcnO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXIgPSAnJztcclxuICAgIHRoaXMucmVjZW50U2luZ2xlU2NvcmVzID0gW107XHJcbiAgICB0aGlzLmluY29taW5nUm9vbUlkID0gJyc7XHJcbiAgICAvLyB0aGlzLmlzSG9zdCA9IGZhbHNlO1xyXG4gIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeRenderer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8d69E0+upFJJC6bMelP2BM', 'MazeRenderer');
// scripts/Jang/MazeRenderer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MazeRenderer = /** @class */ (function () {
    function MazeRenderer(container, tilePrefab, pathFrame, grassFrame, cellSize) {
        this.container = container;
        this.tilePrefab = tilePrefab;
        this.pathFrame = pathFrame;
        this.grassFrame = grassFrame;
        this.cellSize = cellSize;
    }
    MazeRenderer.prototype.render = function (maze) {
        this.container.removeAllChildren();
        var rows = maze.length, cols = maze[0].length;
        for (var y = 0; y < rows; y++) {
            for (var x = 0; x < cols; x++) {
                var node = cc.instantiate(this.tilePrefab);
                node.setPosition(cc.v2(x * this.cellSize + this.cellSize / 2, y * this.cellSize + this.cellSize / 2));
                node.setContentSize(this.cellSize, this.cellSize);
                var sp = node.getComponent(cc.Sprite);
                sp.type = cc.Sprite.Type.SIMPLE;
                sp.spriteFrame = maze[y][x] === 0 ? this.pathFrame : this.grassFrame;
                this.container.addChild(node);
            }
        }
    };
    return MazeRenderer;
}());
exports.default = MazeRenderer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZVJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDRSxzQkFDVSxTQUFrQixFQUNsQixVQUFxQixFQUNyQixTQUF5QixFQUN6QixVQUEwQixFQUMxQixRQUFnQjtRQUpoQixjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUN2QixDQUFDO0lBRUcsNkJBQU0sR0FBYixVQUFjLElBQWdCO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDN0IsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDNUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQ3JDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUN0QyxDQUFDLENBQUM7Z0JBQ0ssSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEQsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFFLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF6ZVJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IGNjLk5vZGUsXG4gICAgcHJpdmF0ZSB0aWxlUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgcHJpdmF0ZSBwYXRoRnJhbWU6IGNjLlNwcml0ZUZyYW1lLFxuICAgIHByaXZhdGUgZ3Jhc3NGcmFtZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgcHJpdmF0ZSBjZWxsU2l6ZTogbnVtYmVyXG4gICkge31cblxuICBwdWJsaWMgcmVuZGVyKG1hemU6IG51bWJlcltdW10pIHtcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIGNvbnN0IHJvd3MgPSBtYXplLmxlbmd0aCwgY29scyA9IG1hemVbMF0ubGVuZ3RoO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcm93czsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHM7IHgrKykge1xuICAgICAgICBjb25zdCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUHJlZmFiKTtcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjYy52MihcbiAgeCAqIHRoaXMuY2VsbFNpemUgKyB0aGlzLmNlbGxTaXplIC8gMixcbiAgeSAqIHRoaXMuY2VsbFNpemUgKyB0aGlzLmNlbGxTaXplIC8gMlxuKSk7XG4gICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUodGhpcy5jZWxsU2l6ZSwgdGhpcy5jZWxsU2l6ZSk7XG4gICAgICAgIGNvbnN0IHNwID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSE7XG4gICAgICAgIHNwLnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5TSU1QTEU7XG4gICAgICAgIHNwLnNwcml0ZUZyYW1lID0gbWF6ZVt5XVt4XSA9PT0gMCA/IHRoaXMucGF0aEZyYW1lIDogdGhpcy5ncmFzc0ZyYW1lO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40194f0OxFJo7xjtjiZh/ac', 'MazeGameData');
// scripts/Jang/MazeGameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameState_1 = require("../Controller/CommonUI/GameState");
var GameData = /** @class */ (function () {
    function GameData() {
    }
    Object.defineProperty(GameData, "playerType", {
        // GameState.character와 항상 연동!
        get: function () {
            // "tiger", "dog", "rabbit" 이외 값이 오면 "tiger"로 fallback
            if (GameState_1.default && (GameState_1.default.character === "tiger" || GameState_1.default.character === "dog" || GameState_1.default.character === "rabbit")) {
                return GameState_1.default.character;
            }
            return "tiger";
        },
        set: function (value) {
            if (GameState_1.default)
                GameState_1.default.character = value;
        },
        enumerable: false,
        configurable: true
    });
    GameData.addScore = function (level) {
        this.score += 10;
    };
    GameData.resetScore = function () {
        this.score = 0;
    };
    GameData.currentLevel = 1;
    GameData.score = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZUdhbWVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBRXpEO0lBQUE7SUF3QkEsQ0FBQztJQW5CQyxzQkFBVyxzQkFBVTtRQURyQiw4QkFBOEI7YUFDOUI7WUFDRSxzREFBc0Q7WUFDdEQsSUFBSSxtQkFBUyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEtBQUssT0FBTyxJQUFJLG1CQUFTLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxtQkFBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsRUFBRTtnQkFDdkgsT0FBTyxtQkFBUyxDQUFDLFNBQXVDLENBQUM7YUFDMUQ7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO2FBRUQsVUFBc0IsS0FBaUM7WUFDckQsSUFBSSxtQkFBUztnQkFBRSxtQkFBUyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDN0MsQ0FBQzs7O09BSkE7SUFNYSxpQkFBUSxHQUF0QixVQUF1QixLQUFhO1FBQ2xDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFYSxtQkFBVSxHQUF4QjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUF0QmEscUJBQVksR0FBVyxDQUFDLENBQUM7SUFDekIsY0FBSyxHQUFXLENBQUMsQ0FBQztJQXNCbEMsZUFBQztDQXhCRCxBQXdCQyxJQUFBO2tCQXhCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4uL0NvbnRyb2xsZXIvQ29tbW9uVUkvR2FtZVN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBzdGF0aWMgc2NvcmU6IG51bWJlciA9IDA7XG5cbiAgLy8gR2FtZVN0YXRlLmNoYXJhY3RlcuyZgCDtla3sg4Eg7Jew64+ZIVxuICBzdGF0aWMgZ2V0IHBsYXllclR5cGUoKTogXCJ0aWdlclwiIHwgXCJkb2dcIiB8IFwicmFiYml0XCIge1xuICAgIC8vIFwidGlnZXJcIiwgXCJkb2dcIiwgXCJyYWJiaXRcIiDsnbTsmbgg6rCS7J20IOyYpOuptCBcInRpZ2VyXCLroZwgZmFsbGJhY2tcbiAgICBpZiAoR2FtZVN0YXRlICYmIChHYW1lU3RhdGUuY2hhcmFjdGVyID09PSBcInRpZ2VyXCIgfHwgR2FtZVN0YXRlLmNoYXJhY3RlciA9PT0gXCJkb2dcIiB8fCBHYW1lU3RhdGUuY2hhcmFjdGVyID09PSBcInJhYmJpdFwiKSkge1xuICAgICAgcmV0dXJuIEdhbWVTdGF0ZS5jaGFyYWN0ZXIgYXMgXCJ0aWdlclwiIHwgXCJkb2dcIiB8IFwicmFiYml0XCI7XG4gICAgfVxuICAgIHJldHVybiBcInRpZ2VyXCI7XG4gIH1cblxuICBzdGF0aWMgc2V0IHBsYXllclR5cGUodmFsdWU6IFwidGlnZXJcIiB8IFwiZG9nXCIgfCBcInJhYmJpdFwiKSB7XG4gICAgaWYgKEdhbWVTdGF0ZSkgR2FtZVN0YXRlLmNoYXJhY3RlciA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhZGRTY29yZShsZXZlbDogbnVtYmVyKSB7XG4gICAgdGhpcy5zY29yZSArPSAxMDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVzZXRTY29yZSgpIHtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeGameOverManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba55241+4FM1oLcOvRC1meQ', 'MazeGameOverManager');
// scripts/Jang/MazeGameOverManager.ts

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
// /assets/Scripts/ui/GameOverManager.ts
var MazeGameData_1 = require("./MazeGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOverManager = /** @class */ (function (_super) {
    __extends(GameOverManager, _super);
    function GameOverManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameOverManager.prototype.start = function () {
        this.retryBtn.on("click", function () { return cc.director.loadScene("MazeSingleScene"); });
        this.mainBtn.on("click", function () {
            MazeGameData_1.default.currentLevel = 1;
            cc.director.loadScene("Maze_InformScene");
        });
    };
    __decorate([
        property(cc.Node)
    ], GameOverManager.prototype, "retryBtn", void 0);
    __decorate([
        property(cc.Node)
    ], GameOverManager.prototype, "mainBtn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZUdhbWVPdmVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBd0M7QUFDeEMsK0NBQXNDO0FBQ2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEOztJQVdBLENBQUM7SUFQQywrQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQUssT0FBQSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3hCLHNCQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUMxQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVRrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFBb0I7SUFDbkI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQW1CO0lBRmxCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FXbkM7SUFBRCxzQkFBQztDQVhELEFBV0MsQ0FYNEMsRUFBRSxDQUFDLFNBQVMsR0FXeEQ7a0JBWG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYXNzZXRzL1NjcmlwdHMvdWkvR2FtZU92ZXJNYW5hZ2VyLnRzXG5pbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4vTWF6ZUdhbWVEYXRhXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLk5vZGUpIHJldHJ5QnRuITogY2MuTm9kZTtcbiAgQHByb3BlcnR5KGNjLk5vZGUpIG1haW5CdG4hOiBjYy5Ob2RlO1xuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMucmV0cnlCdG4ub24oXCJjbGlja1wiLCAoKT0+IGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1hemVTaW5nbGVTY2VuZVwiKSk7XG4gICAgdGhpcy5tYWluQnRuIC5vbihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgR2FtZURhdGEuY3VycmVudExldmVsID0gMTtcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1hemVfSW5mb3JtU2NlbmVcIik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jang/MazeGenerator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b4b9YKGjZKlYxCj4Psn5/9', 'MazeGenerator');
// scripts/Jang/MazeGenerator.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MazeGenerator = /** @class */ (function () {
    function MazeGenerator(rows, cols) {
        this.rows = 21;
        this.cols = 21;
        // rows, cols 무시: 항상 21x21
    }
    MazeGenerator.prototype.generateMaze = function (level) {
        var maze;
        if (level <= 4) {
            maze = this._dfs();
        }
        else if (level <= 10) {
            maze = this._huntAndKill();
        }
        else {
            maze = this._wilson();
        }
        maze = this._addLoops(maze, level);
        maze = this._ensureMinPath(maze, level);
        return maze;
    };
    MazeGenerator.prototype._dfs = function () {
        var _this = this;
        var maze = Array(this.rows).fill(0).map(function () { return Array(_this.cols).fill(1); });
        var stack = [{ x: 1, y: 1 }];
        maze[1][1] = 0;
        while (stack.length) {
            var cur = stack[stack.length - 1];
            var neighs = this._cellNeighbors(cur.x, cur.y, maze);
            if (!neighs.length) {
                stack.pop();
                continue;
            }
            var next = neighs[Math.floor(Math.random() * neighs.length)];
            var mx = (cur.x + next.x) >> 1, my = (cur.y + next.y) >> 1;
            maze[my][mx] = maze[next.y][next.x] = 0;
            stack.push(next);
        }
        return maze;
    };
    MazeGenerator.prototype._huntAndKill = function () {
        var _this = this;
        var maze = Array(this.rows).fill(0).map(function () { return Array(_this.cols).fill(1); });
        var visited = Array(this.rows).fill(0).map(function () { return Array(_this.cols).fill(false); });
        var current = { x: 1, y: 1 };
        visited[1][1] = true;
        maze[1][1] = 0;
        var dirs = [
            { dx: 0, dy: 2 },
            { dx: 2, dy: 0 },
            { dx: 0, dy: -2 },
            { dx: -2, dy: 0 },
        ];
        while (true) {
            var unvis = dirs
                .map(function (d) { return ({ x: current.x + d.dx, y: current.y + d.dy, d: d }); })
                .filter(function (p) {
                return p.x > 0 && p.x < _this.cols - 1 &&
                    p.y > 0 && p.y < _this.rows - 1 &&
                    !visited[p.y][p.x];
            });
            if (unvis.length > 0) {
                var pick = unvis[Math.floor(Math.random() * unvis.length)];
                var mx = current.x + pick.d.dx / 2;
                var my = current.y + pick.d.dy / 2;
                maze[my][mx] = 0;
                maze[pick.y][pick.x] = 0;
                visited[pick.y][pick.x] = true;
                current = { x: pick.x, y: pick.y };
                continue;
            }
            var found = false;
            var _loop_1 = function (y) {
                var _loop_2 = function (x) {
                    if (!visited[y][x]) {
                        var adj = dirs
                            .map(function (d) { return ({ x: x + d.dx, y: y + d.dy, d: d }); })
                            .filter(function (p) {
                            return p.x > 0 && p.x < _this.cols - 1 &&
                                p.y > 0 && p.y < _this.rows - 1 &&
                                visited[p.y][p.x];
                        });
                        if (adj.length > 0) {
                            var pick = adj[Math.floor(Math.random() * adj.length)];
                            var mx = x + pick.d.dx / 2;
                            var my = y + pick.d.dy / 2;
                            maze[my][mx] = 0;
                            maze[y][x] = 0;
                            visited[y][x] = true;
                            current = { x: x, y: y };
                            found = true;
                            return "break";
                        }
                    }
                };
                for (var x = 1; x < this_1.cols; x += 2) {
                    var state_2 = _loop_2(x);
                    if (state_2 === "break")
                        break;
                }
                if (found)
                    return "break";
            };
            var this_1 = this;
            for (var y = 1; y < this.rows; y += 2) {
                var state_1 = _loop_1(y);
                if (state_1 === "break")
                    break;
            }
            if (!found)
                break;
        }
        return maze;
    };
    MazeGenerator.prototype._wilson = function () {
        var _this = this;
        var maze = Array(this.rows).fill(0).map(function () { return Array(_this.cols).fill(1); });
        // 항상 홀수 좌표(통로 후보)만 사용한다고 가정
        // 1. 시작점 하나 랜덤 선택 → 방문 처리
        var visited = Array(this.rows).fill(0).map(function () { return Array(_this.cols).fill(false); });
        var unvisited = [];
        for (var y = 1; y < this.rows; y += 2) {
            for (var x = 1; x < this.cols; x += 2) {
                unvisited.push([x, y]);
            }
        }
        // 임의 시작점 방문
        var _a = unvisited.splice(Math.floor(Math.random() * unvisited.length), 1)[0], startX = _a[0], startY = _a[1];
        maze[startY][startX] = 0;
        visited[startY][startX] = true;
        while (unvisited.length > 0) {
            // 2. 랜덤 미방문 셀에서 출발, loop-erased random walk!
            var _b = unvisited[Math.floor(Math.random() * unvisited.length)], cx = _b[0], cy = _b[1];
            var path = [[cx, cy]];
            var pathSet = new Set([cx + "," + cy]);
            // 방향: 상하좌우 2칸씩
            var dirs = [
                [0, 2], [2, 0], [0, -2], [-2, 0]
            ];
            var _loop_3 = function () {
                var moves = [];
                for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
                    var _a = dirs_1[_i], dx = _a[0], dy = _a[1];
                    var nx_1 = cx + dx, ny_1 = cy + dy;
                    if (nx_1 > 0 && nx_1 < this_2.cols - 1 && ny_1 > 0 && ny_1 < this_2.rows - 1)
                        moves.push([nx_1, ny_1]);
                }
                var _b = moves[Math.floor(Math.random() * moves.length)], nx = _b[0], ny = _b[1];
                // loop-erased: 이미 경로에 있으면 그 이후 다 삭제
                var existIdx = path.findIndex(function (_a) {
                    var px = _a[0], py = _a[1];
                    return px === nx && py === ny;
                });
                if (existIdx !== -1) {
                    path = path.slice(0, existIdx + 1);
                }
                else {
                    path.push([nx, ny]);
                }
                cx = nx;
                cy = ny;
            };
            var this_2 = this;
            // 방문 지점까지 랜덤 워크
            while (!visited[cy][cx]) {
                _loop_3();
            }
            // 3. 경로 통로화
            for (var i = 0; i < path.length; i++) {
                var _c = path[i], px = _c[0], py = _c[1];
                maze[py][px] = 0;
                visited[py][px] = true;
                // 중간 벽도 뚫기
                if (i > 0) {
                    var _d = path[i - 1], px0 = _d[0], py0 = _d[1];
                    maze[(py + py0) >> 1][(px + px0) >> 1] = 0;
                    visited[(py + py0) >> 1][(px + px0) >> 1] = true;
                }
            }
            // 방문 리스트에서 다 제거
            unvisited = unvisited.filter(function (_a) {
                var ux = _a[0], uy = _a[1];
                return !visited[uy][ux];
            });
        }
        return maze;
    };
    MazeGenerator.prototype._cellNeighbors = function (x, y, maze) {
        var dirs = [[0, 2], [2, 0], [0, -2], [-2, 0]];
        var out = [];
        for (var _i = 0, dirs_2 = dirs; _i < dirs_2.length; _i++) {
            var _a = dirs_2[_i], dx = _a[0], dy = _a[1];
            var nx = x + dx, ny = y + dy;
            if (nx > 0 && nx < this.cols - 1 &&
                ny > 0 && ny < this.rows - 1 &&
                maze[ny][nx] === 1) {
                out.push({ x: nx, y: ny });
            }
        }
        return out;
    };
    // 루프(사이클) 추가
    MazeGenerator.prototype._addLoops = function (maze, level) {
        var prob = Math.min(0.03 + level * 0.005, 0.20); //20%
        for (var y = 1; y < this.rows - 1; y++) {
            for (var x = 1; x < this.cols - 1; x++) {
                if (maze[y][x] === 1 &&
                    Math.random() < prob &&
                    this._cellNeighbors(x, y, maze).length === 1) {
                    maze[y][x] = 0;
                }
            }
        }
        return maze;
    };
    // 최단경로 보장
    MazeGenerator.prototype._ensureMinPath = function (maze, level) {
        var maxAttempts = 5;
        var minLen = Math.floor((this.rows + this.cols) * (1 + 0.08 * level));
        var attempts = 0;
        while (++attempts < maxAttempts) {
            if (this._calcShortestPath(maze) >= minLen)
                break;
            // 재생성
            if (level <= 4)
                maze.splice.apply(maze, __spreadArrays([0, maze.length], this._dfs()));
            else if (level <= 10)
                maze.splice.apply(maze, __spreadArrays([0, maze.length], this._huntAndKill()));
            else
                maze.splice.apply(maze, __spreadArrays([0, maze.length], this._wilson()));
            this._addLoops(maze, level);
        }
        return maze;
    };
    // (1,1)~(19,19) 최단거리 BFS
    MazeGenerator.prototype._calcShortestPath = function (maze) {
        var _this = this;
        var visited = Array(this.rows).fill(0).map(function () { return Array(_this.cols).fill(false); });
        var q = [{ x: 1, y: 1, d: 0 }];
        visited[1][1] = true;
        while (q.length) {
            var _a = q.shift(), x = _a.x, y = _a.y, d = _a.d;
            if (x === this.cols - 2 && y === this.rows - 2)
                return d;
            for (var _i = 0, _b = this._cellNeighbors(x, y, maze); _i < _b.length; _i++) {
                var o = _b[_i];
                if (!visited[o.y][o.x] && maze[o.y][o.x] === 0) {
                    visited[o.y][o.x] = true;
                    q.push({ x: o.x, y: o.y, d: d + 1 });
                }
            }
        }
        return 0;
    };
    return MazeGenerator;
}());
exports.default = MazeGenerator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSmFuZ1xcTWF6ZUdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUlFLHVCQUFZLElBQWEsRUFBRSxJQUFhO1FBSGhDLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUd4QiwwQkFBMEI7SUFDNUIsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDL0IsSUFBSSxJQUFnQixDQUFDO1FBQ3JCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7YUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sNEJBQUksR0FBWjtRQUFBLGlCQWlCQztRQWhCQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDMUUsSUFBTSxLQUFLLEdBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNaLFNBQVM7YUFDVjtZQUNELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFBQSxpQkE2REM7UUE1REMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzFFLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUNqRixJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQU0sSUFBSSxHQUFHO1lBQ1gsRUFBRSxFQUFFLEVBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRyxDQUFDLEVBQUU7WUFDbEIsRUFBRSxFQUFFLEVBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRyxDQUFDLEVBQUU7WUFDbEIsRUFBRSxFQUFFLEVBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNsQixFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUcsQ0FBQyxFQUFFO1NBQ25CLENBQUM7UUFFRixPQUFPLElBQUksRUFBRTtZQUNYLElBQU0sS0FBSyxHQUFHLElBQUk7aUJBQ2YsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLEVBQWpELENBQWlELENBQUM7aUJBQzNELE1BQU0sQ0FBQyxVQUFBLENBQUM7Z0JBQ1AsT0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7b0JBQzVCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRmxCLENBRWtCLENBQ25CLENBQUM7WUFDSixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLFNBQVM7YUFDVjtZQUVELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztvQ0FDVCxDQUFDO3dDQUNDLENBQUM7b0JBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDbEIsSUFBTSxHQUFHLEdBQUcsSUFBSTs2QkFDYixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLEVBQWpDLENBQWlDLENBQUM7NkJBQzNDLE1BQU0sQ0FBQyxVQUFBLENBQUM7NEJBQ1AsT0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQztnQ0FDNUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7Z0NBQzVCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFGakIsQ0FFaUIsQ0FDbEIsQ0FBQzt3QkFDSixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNsQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3pELElBQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzdCLElBQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDckIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFBLEVBQUUsQ0FBQyxHQUFBLEVBQUUsQ0FBQzs0QkFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQzs7eUJBRWQ7cUJBQ0Y7O2dCQXBCSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBSyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQTVCLENBQUM7OztpQkFxQlQ7Z0JBQ0QsSUFBSSxLQUFLO21DQUFROzs7WUF2Qm5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO3NDQUE1QixDQUFDOzs7YUF3QlQ7WUFDRCxJQUFJLENBQUMsS0FBSztnQkFBRSxNQUFNO1NBQ25CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sK0JBQU8sR0FBZjtRQUFBLGlCQTJERDtRQTFEQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDMUUsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFDakYsSUFBSSxTQUFTLEdBQXVCLEVBQUUsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QjtTQUNGO1FBQ0QsWUFBWTtRQUNOLElBQUEsS0FBbUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXRGLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBd0UsQ0FBQztRQUM5RixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFL0IsT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzQiw2Q0FBNkM7WUFDekMsSUFBQSxLQUFXLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBakUsRUFBRSxRQUFBLEVBQUUsRUFBRSxRQUEyRCxDQUFDO1lBQ3ZFLElBQUksSUFBSSxHQUF1QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBSSxFQUFFLFNBQUksRUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QyxlQUFlO1lBQ2YsSUFBTSxJQUFJLEdBQUc7Z0JBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNqQyxDQUFDOztnQkFHQSxJQUFJLEtBQUssR0FBdUIsRUFBRSxDQUFDO2dCQUNuQyxLQUF1QixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFFO29CQUFsQixJQUFBLGVBQVEsRUFBUCxFQUFFLFFBQUEsRUFBRSxFQUFFLFFBQUE7b0JBQ2hCLElBQU0sSUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsSUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ2pDLElBQUksSUFBRSxHQUFHLENBQUMsSUFBSSxJQUFFLEdBQUcsT0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUUsR0FBRyxDQUFDLElBQUksSUFBRSxHQUFHLE9BQUssSUFBSSxHQUFHLENBQUM7d0JBQzlELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLEVBQUUsSUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDeEI7Z0JBQ0ssSUFBQSxLQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBekQsRUFBRSxRQUFBLEVBQUUsRUFBRSxRQUFtRCxDQUFDO2dCQUNqRSxvQ0FBb0M7Z0JBQ3BDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO3dCQUFQLEVBQUUsUUFBQSxFQUFFLEVBQUUsUUFBQTtvQkFBTSxPQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBQXRCLENBQXNCLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ25CLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3BDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDckI7Z0JBQ0QsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFBQyxFQUFFLEdBQUcsRUFBRSxDQUFDOzs7WUFoQm5CLGdCQUFnQjtZQUNoQixPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7YUFnQnRCO1lBQ0QsWUFBWTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM5QixJQUFBLEtBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFqQixFQUFFLFFBQUEsRUFBRSxFQUFFLFFBQVcsQ0FBQztnQkFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDdkIsV0FBVztnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ0gsSUFBQSxLQUFhLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXZCLEdBQUcsUUFBQSxFQUFFLEdBQUcsUUFBZSxDQUFDO29CQUMvQixJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNsRDthQUNGO1lBQ0QsZ0JBQWdCO1lBQ2hCLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsRUFBUTtvQkFBUCxFQUFFLFFBQUEsRUFBRSxFQUFFLFFBQUE7Z0JBQU0sT0FBQSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBR1Msc0NBQWMsR0FBdEIsVUFBdUIsQ0FBUyxFQUFFLENBQVMsRUFBRSxJQUFnQjtRQUMzRCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQU0sR0FBRyxHQUFjLEVBQUUsQ0FBQztRQUMxQixLQUF1QixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFFO1lBQWxCLElBQUEsZUFBUSxFQUFQLEVBQUUsUUFBQSxFQUFFLEVBQUUsUUFBQTtZQUNoQixJQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQy9CLElBQ0UsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDO2dCQUMxQixFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQ2xCO2dCQUNBLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzVCO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxhQUFhO0lBQ0wsaUNBQVMsR0FBakIsVUFBa0IsSUFBZ0IsRUFBRSxLQUFhO1FBQy9DLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQSxLQUFLO1FBQ3ZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BDLElBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJO29CQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDNUM7b0JBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsVUFBVTtJQUNGLHNDQUFjLEdBQXRCLFVBQXVCLElBQWdCLEVBQUUsS0FBYTtRQUNwRCxJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLEVBQUUsUUFBUSxHQUFHLFdBQVcsRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNO2dCQUFFLE1BQU07WUFDbEQsTUFBTTtZQUNOLElBQUksS0FBSyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sT0FBWCxJQUFJLGtCQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRTtpQkFDdkQsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxPQUFYLElBQUksa0JBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUssSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFFOztnQkFDckUsSUFBSSxDQUFDLE1BQU0sT0FBWCxJQUFJLGtCQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRTtZQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHlCQUF5QjtJQUNqQix5Q0FBaUIsR0FBekIsVUFBMEIsSUFBZ0I7UUFBMUMsaUJBZ0JDO1FBZkMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBRWpGLElBQU0sQ0FBQyxHQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyQixPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDVCxJQUFBLEtBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRyxFQUF0QixDQUFDLE9BQUEsRUFBRSxDQUFDLE9BQUEsRUFBRSxDQUFDLE9BQWUsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELEtBQWdCLFVBQStCLEVBQS9CLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUEvQixjQUErQixFQUEvQixJQUErQixFQUFFO2dCQUE1QyxJQUFNLENBQUMsU0FBQTtnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM5QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0Y7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0F6T0EsQUF5T0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgR3JpZFBvcyB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hemVHZW5lcmF0b3Ige1xuICBwcml2YXRlIHJvd3M6IG51bWJlciA9IDIxO1xuICBwcml2YXRlIGNvbHM6IG51bWJlciA9IDIxO1xuXG4gIGNvbnN0cnVjdG9yKHJvd3M/OiBudW1iZXIsIGNvbHM/OiBudW1iZXIpIHtcbiAgICAvLyByb3dzLCBjb2xzIOustOyLnDog7ZWt7IOBIDIxeDIxXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVNYXplKGxldmVsOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICBsZXQgbWF6ZTogbnVtYmVyW11bXTtcbiAgICBpZiAobGV2ZWwgPD0gNCkge1xuICAgICAgbWF6ZSA9IHRoaXMuX2RmcygpO1xuICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gMTApIHtcbiAgICAgIG1hemUgPSB0aGlzLl9odW50QW5kS2lsbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXplID0gdGhpcy5fd2lsc29uKCk7XG4gICAgfVxuICAgIG1hemUgPSB0aGlzLl9hZGRMb29wcyhtYXplLCBsZXZlbCk7XG4gICAgbWF6ZSA9IHRoaXMuX2Vuc3VyZU1pblBhdGgobWF6ZSwgbGV2ZWwpO1xuICAgIHJldHVybiBtYXplO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGZzKCk6IG51bWJlcltdW10ge1xuICAgIGNvbnN0IG1hemUgPSBBcnJheSh0aGlzLnJvd3MpLmZpbGwoMCkubWFwKCgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbCgxKSk7XG4gICAgY29uc3Qgc3RhY2s6IEdyaWRQb3NbXSA9IFt7IHg6IDEsIHk6IDEgfV07XG4gICAgbWF6ZVsxXVsxXSA9IDA7XG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgY29uc3QgY3VyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBuZWlnaHMgPSB0aGlzLl9jZWxsTmVpZ2hib3JzKGN1ci54LCBjdXIueSwgbWF6ZSk7XG4gICAgICBpZiAoIW5laWdocy5sZW5ndGgpIHtcbiAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dCA9IG5laWdoc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZWlnaHMubGVuZ3RoKV07XG4gICAgICBjb25zdCBteCA9IChjdXIueCArIG5leHQueCkgPj4gMSwgbXkgPSAoY3VyLnkgKyBuZXh0LnkpID4+IDE7XG4gICAgICBtYXplW215XVtteF0gPSBtYXplW25leHQueV1bbmV4dC54XSA9IDA7XG4gICAgICBzdGFjay5wdXNoKG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4gbWF6ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2h1bnRBbmRLaWxsKCk6IG51bWJlcltdW10ge1xuICAgIGNvbnN0IG1hemUgPSBBcnJheSh0aGlzLnJvd3MpLmZpbGwoMCkubWFwKCgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbCgxKSk7XG4gICAgY29uc3QgdmlzaXRlZCA9IEFycmF5KHRoaXMucm93cykuZmlsbCgwKS5tYXAoKCkgPT4gQXJyYXkodGhpcy5jb2xzKS5maWxsKGZhbHNlKSk7XG4gICAgbGV0IGN1cnJlbnQ6IEdyaWRQb3MgPSB7IHg6IDEsIHk6IDEgfTtcbiAgICB2aXNpdGVkWzFdWzFdID0gdHJ1ZTtcbiAgICBtYXplWzFdWzFdID0gMDtcbiAgICBjb25zdCBkaXJzID0gW1xuICAgICAgeyBkeDogIDAsIGR5OiAgMiB9LFxuICAgICAgeyBkeDogIDIsIGR5OiAgMCB9LFxuICAgICAgeyBkeDogIDAsIGR5OiAtMiB9LFxuICAgICAgeyBkeDogLTIsIGR5OiAgMCB9LFxuICAgIF07XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgdW52aXMgPSBkaXJzXG4gICAgICAgIC5tYXAoZCA9PiAoeyB4OiBjdXJyZW50LnggKyBkLmR4LCB5OiBjdXJyZW50LnkgKyBkLmR5LCBkIH0pKVxuICAgICAgICAuZmlsdGVyKHAgPT5cbiAgICAgICAgICBwLnggPiAwICYmIHAueCA8IHRoaXMuY29scy0xICYmXG4gICAgICAgICAgcC55ID4gMCAmJiBwLnkgPCB0aGlzLnJvd3MtMSAmJlxuICAgICAgICAgICF2aXNpdGVkW3AueV1bcC54XVxuICAgICAgICApO1xuICAgICAgaWYgKHVudmlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcGljayA9IHVudmlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHVudmlzLmxlbmd0aCldO1xuICAgICAgICBjb25zdCBteCA9IGN1cnJlbnQueCArIHBpY2suZC5keCAvIDI7XG4gICAgICAgIGNvbnN0IG15ID0gY3VycmVudC55ICsgcGljay5kLmR5IC8gMjtcbiAgICAgICAgbWF6ZVtteV1bbXhdID0gMDtcbiAgICAgICAgbWF6ZVtwaWNrLnldW3BpY2sueF0gPSAwO1xuICAgICAgICB2aXNpdGVkW3BpY2sueV1bcGljay54XSA9IHRydWU7XG4gICAgICAgIGN1cnJlbnQgPSB7IHg6IHBpY2sueCwgeTogcGljay55IH07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDwgdGhpcy5yb3dzOyB5ICs9IDIpIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPCB0aGlzLmNvbHM7IHggKz0gMikge1xuICAgICAgICAgIGlmICghdmlzaXRlZFt5XVt4XSkge1xuICAgICAgICAgICAgY29uc3QgYWRqID0gZGlyc1xuICAgICAgICAgICAgICAubWFwKGQgPT4gKHsgeDogeCArIGQuZHgsIHk6IHkgKyBkLmR5LCBkIH0pKVxuICAgICAgICAgICAgICAuZmlsdGVyKHAgPT5cbiAgICAgICAgICAgICAgICBwLnggPiAwICYmIHAueCA8IHRoaXMuY29scy0xICYmXG4gICAgICAgICAgICAgICAgcC55ID4gMCAmJiBwLnkgPCB0aGlzLnJvd3MtMSAmJlxuICAgICAgICAgICAgICAgIHZpc2l0ZWRbcC55XVtwLnhdXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYWRqLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgY29uc3QgcGljayA9IGFkaltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhZGoubGVuZ3RoKV07XG4gICAgICAgICAgICAgIGNvbnN0IG14ID0geCArIHBpY2suZC5keCAvIDI7XG4gICAgICAgICAgICAgIGNvbnN0IG15ID0geSArIHBpY2suZC5keSAvIDI7XG4gICAgICAgICAgICAgIG1hemVbbXldW214XSA9IDA7XG4gICAgICAgICAgICAgIG1hemVbeV1beF0gPSAwO1xuICAgICAgICAgICAgICB2aXNpdGVkW3ldW3hdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY3VycmVudCA9IHsgeCwgeSB9O1xuICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmQpIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCFmb3VuZCkgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBtYXplO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2lsc29uKCk6IG51bWJlcltdW10ge1xuICBjb25zdCBtYXplID0gQXJyYXkodGhpcy5yb3dzKS5maWxsKDApLm1hcCgoKSA9PiBBcnJheSh0aGlzLmNvbHMpLmZpbGwoMSkpO1xuICAvLyDtla3sg4Eg7ZmA7IiYIOyijO2RnCjthrXroZwg7ZuE67O0KeunjCDsgqzsmqntlZzri6Tqs6Ag6rCA7KCVXG4gIC8vIDEuIOyLnOyekeygkCDtlZjrgpgg656c642kIOyEoO2DnSDihpIg67Cp66y4IOyymOumrFxuICBjb25zdCB2aXNpdGVkID0gQXJyYXkodGhpcy5yb3dzKS5maWxsKDApLm1hcCgoKSA9PiBBcnJheSh0aGlzLmNvbHMpLmZpbGwoZmFsc2UpKTtcbiAgbGV0IHVudmlzaXRlZDogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gIGZvciAobGV0IHkgPSAxOyB5IDwgdGhpcy5yb3dzOyB5ICs9IDIpIHtcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8IHRoaXMuY29sczsgeCArPSAyKSB7XG4gICAgICB1bnZpc2l0ZWQucHVzaChbeCwgeV0pO1xuICAgIH1cbiAgfVxuICAvLyDsnoTsnZgg7Iuc7J6R7KCQIOuwqeusuFxuICBjb25zdCBbc3RhcnRYLCBzdGFydFldID0gdW52aXNpdGVkLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1bnZpc2l0ZWQubGVuZ3RoKSwgMSlbMF07XG4gIG1hemVbc3RhcnRZXVtzdGFydFhdID0gMDtcbiAgdmlzaXRlZFtzdGFydFldW3N0YXJ0WF0gPSB0cnVlO1xuXG4gIHdoaWxlICh1bnZpc2l0ZWQubGVuZ3RoID4gMCkge1xuICAgIC8vIDIuIOuenOuNpCDrr7jrsKnrrLgg7IWA7JeQ7IScIOy2nOuwnCwgbG9vcC1lcmFzZWQgcmFuZG9tIHdhbGshXG4gICAgbGV0IFtjeCwgY3ldID0gdW52aXNpdGVkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHVudmlzaXRlZC5sZW5ndGgpXTtcbiAgICBsZXQgcGF0aDogW251bWJlciwgbnVtYmVyXVtdID0gW1tjeCwgY3ldXTtcbiAgICBjb25zdCBwYXRoU2V0ID0gbmV3IFNldChbYCR7Y3h9LCR7Y3l9YF0pO1xuICAgIC8vIOuwqe2WpTog7IOB7ZWY7KKM7JqwIDLsubjslKlcbiAgICBjb25zdCBkaXJzID0gW1xuICAgICAgWzAsIDJdLCBbMiwgMF0sIFswLCAtMl0sIFstMiwgMF1cbiAgICBdO1xuICAgIC8vIOuwqeusuCDsp4DsoJDquYzsp4Ag656c642kIOybjO2BrFxuICAgIHdoaWxlICghdmlzaXRlZFtjeV1bY3hdKSB7XG4gICAgICBsZXQgbW92ZXM6IFtudW1iZXIsIG51bWJlcl1bXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBbZHgsIGR5XSBvZiBkaXJzKSB7XG4gICAgICAgIGNvbnN0IG54ID0gY3ggKyBkeCwgbnkgPSBjeSArIGR5O1xuICAgICAgICBpZiAobnggPiAwICYmIG54IDwgdGhpcy5jb2xzIC0gMSAmJiBueSA+IDAgJiYgbnkgPCB0aGlzLnJvd3MgLSAxKVxuICAgICAgICAgIG1vdmVzLnB1c2goW254LCBueV0pO1xuICAgICAgfVxuICAgICAgY29uc3QgW254LCBueV0gPSBtb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3Zlcy5sZW5ndGgpXTtcbiAgICAgIC8vIGxvb3AtZXJhc2VkOiDsnbTrr7gg6rK966Gc7JeQIOyeiOycvOuptCDqt7gg7J207ZuEIOuLpCDsgq3soJxcbiAgICAgIGNvbnN0IGV4aXN0SWR4ID0gcGF0aC5maW5kSW5kZXgoKFtweCwgcHldKSA9PiBweCA9PT0gbnggJiYgcHkgPT09IG55KTtcbiAgICAgIGlmIChleGlzdElkeCAhPT0gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgZXhpc3RJZHggKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChbbngsIG55XSk7XG4gICAgICB9XG4gICAgICBjeCA9IG54OyBjeSA9IG55O1xuICAgIH1cbiAgICAvLyAzLiDqsr3roZwg7Ya166Gc7ZmUXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbcHgsIHB5XSA9IHBhdGhbaV07XG4gICAgICBtYXplW3B5XVtweF0gPSAwO1xuICAgICAgdmlzaXRlZFtweV1bcHhdID0gdHJ1ZTtcbiAgICAgIC8vIOykkeqwhCDrsr3rj4Qg65qr6riwXG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgY29uc3QgW3B4MCwgcHkwXSA9IHBhdGhbaSAtIDFdO1xuICAgICAgICBtYXplWyhweSArIHB5MCkgPj4gMV1bKHB4ICsgcHgwKSA+PiAxXSA9IDA7XG4gICAgICAgIHZpc2l0ZWRbKHB5ICsgcHkwKSA+PiAxXVsocHggKyBweDApID4+IDFdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g67Cp66y4IOumrOyKpO2KuOyXkOyEnCDri6Qg7KCc6rGwXG4gICAgdW52aXNpdGVkID0gdW52aXNpdGVkLmZpbHRlcigoW3V4LCB1eV0pID0+ICF2aXNpdGVkW3V5XVt1eF0pO1xuICB9XG4gIHJldHVybiBtYXplO1xufVxuXG5cbiAgcHJpdmF0ZSBfY2VsbE5laWdoYm9ycyh4OiBudW1iZXIsIHk6IG51bWJlciwgbWF6ZTogbnVtYmVyW11bXSk6IEdyaWRQb3NbXSB7XG4gICAgY29uc3QgZGlycyA9IFtbMCwyXSxbMiwwXSxbMCwtMl0sWy0yLDBdXTtcbiAgICBjb25zdCBvdXQ6IEdyaWRQb3NbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW2R4LCBkeV0gb2YgZGlycykge1xuICAgICAgY29uc3QgbnggPSB4ICsgZHgsIG55ID0geSArIGR5O1xuICAgICAgaWYgKFxuICAgICAgICBueCA+IDAgJiYgbnggPCB0aGlzLmNvbHMtMSAmJlxuICAgICAgICBueSA+IDAgJiYgbnkgPCB0aGlzLnJvd3MtMSAmJlxuICAgICAgICBtYXplW255XVtueF0gPT09IDFcbiAgICAgICkge1xuICAgICAgICBvdXQucHVzaCh7IHg6IG54LCB5OiBueSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8vIOujqO2UhCjsgqzsnbTtgbQpIOy2lOqwgFxuICBwcml2YXRlIF9hZGRMb29wcyhtYXplOiBudW1iZXJbXVtdLCBsZXZlbDogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gICAgY29uc3QgcHJvYiA9IE1hdGgubWluKDAuMDMgKyBsZXZlbCAqIDAuMDA1LCAwLjIwKTsvLzIwJVxuICAgIGZvciAobGV0IHkgPSAxOyB5IDwgdGhpcy5yb3dzLTE7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDE7IHggPCB0aGlzLmNvbHMtMTsgeCsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBtYXplW3ldW3hdID09PSAxICYmXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSA8IHByb2IgJiZcbiAgICAgICAgICB0aGlzLl9jZWxsTmVpZ2hib3JzKHgsIHksIG1hemUpLmxlbmd0aCA9PT0gMVxuICAgICAgICApIHtcbiAgICAgICAgICBtYXplW3ldW3hdID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF6ZTtcbiAgfVxuXG4gIC8vIOy1nOuLqOqyveuhnCDrs7TsnqVcbiAgcHJpdmF0ZSBfZW5zdXJlTWluUGF0aChtYXplOiBudW1iZXJbXVtdLCBsZXZlbDogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gICAgY29uc3QgbWF4QXR0ZW1wdHMgPSA1O1xuICAgIGNvbnN0IG1pbkxlbiA9IE1hdGguZmxvb3IoKHRoaXMucm93cyArIHRoaXMuY29scykgKiAoMSArIDAuMDggKiBsZXZlbCkpO1xuICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgd2hpbGUgKCsrYXR0ZW1wdHMgPCBtYXhBdHRlbXB0cykge1xuICAgICAgaWYgKHRoaXMuX2NhbGNTaG9ydGVzdFBhdGgobWF6ZSkgPj0gbWluTGVuKSBicmVhaztcbiAgICAgIC8vIOyerOyDneyEsVxuICAgICAgaWYgKGxldmVsIDw9IDQpIG1hemUuc3BsaWNlKDAsIG1hemUubGVuZ3RoLCAuLi50aGlzLl9kZnMoKSk7XG4gICAgICBlbHNlIGlmIChsZXZlbCA8PSAxMCkgbWF6ZS5zcGxpY2UoMCwgbWF6ZS5sZW5ndGgsIC4uLnRoaXMuX2h1bnRBbmRLaWxsKCkpO1xuICAgICAgZWxzZSBtYXplLnNwbGljZSgwLCBtYXplLmxlbmd0aCwgLi4udGhpcy5fd2lsc29uKCkpO1xuICAgICAgdGhpcy5fYWRkTG9vcHMobWF6ZSwgbGV2ZWwpO1xuICAgIH1cbiAgICByZXR1cm4gbWF6ZTtcbiAgfVxuXG4gIC8vICgxLDEpfigxOSwxOSkg7LWc64uo6rGw66asIEJGU1xuICBwcml2YXRlIF9jYWxjU2hvcnRlc3RQYXRoKG1hemU6IG51bWJlcltdW10pOiBudW1iZXIge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSBBcnJheSh0aGlzLnJvd3MpLmZpbGwoMCkubWFwKCgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbChmYWxzZSkpO1xuICAgIHR5cGUgQkZTID0gR3JpZFBvcyAmIHsgZDogbnVtYmVyIH07XG4gICAgY29uc3QgcTogQkZTW10gPSBbeyB4OiAxLCB5OiAxLCBkOiAwIH1dO1xuICAgIHZpc2l0ZWRbMV1bMV0gPSB0cnVlO1xuICAgIHdoaWxlIChxLmxlbmd0aCkge1xuICAgICAgY29uc3QgeyB4LCB5LCBkIH0gPSBxLnNoaWZ0KCkhO1xuICAgICAgaWYgKHggPT09IHRoaXMuY29scy0yICYmIHkgPT09IHRoaXMucm93cy0yKSByZXR1cm4gZDtcbiAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLl9jZWxsTmVpZ2hib3JzKHgsIHksIG1hemUpKSB7XG4gICAgICAgIGlmICghdmlzaXRlZFtvLnldW28ueF0gJiYgbWF6ZVtvLnldW28ueF0gPT09IDApIHtcbiAgICAgICAgICB2aXNpdGVkW28ueV1bby54XSA9IHRydWU7XG4gICAgICAgICAgcS5wdXNoKHsgeDogby54LCB5OiBvLnksIGQ6IGQgKyAxIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=
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
                    var __filename = 'preview-scripts/assets/scripts/Controller/Multi/MultiGameWait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3baacbyTvtI44NjbuLlpKqP', 'MultiGameWait');
// scripts/Controller/Multi/MultiGameWait.ts

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
var MultiGameWait = /** @class */ (function (_super) {
    __extends(MultiGameWait, _super);
    function MultiGameWait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.multiStartButton = null;
        _this.backButton = null;
        return _this;
    }
    MultiGameWait.prototype.onLoad = function () {
        cc.debug.setDisplayStats(false);
    };
    MultiGameWait.prototype.start = function () {
        if (this.multiStartButton) {
            this.registerButtonEvents(this.multiStartButton, function () {
                cc.director.loadScene('PlayerConnect');
            });
        }
        if (this.backButton) {
            this.registerButtonEvents(this.backButton, this.onClickMain.bind(this));
        }
    };
    MultiGameWait.prototype.registerButtonEvents = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_END, callback);
        node.on(cc.Node.EventType.MOUSE_DOWN, callback);
    };
    MultiGameWait.prototype.onClickMain = function () {
        cc.log("뒤로가기 버튼 클릭됨. MainMenu 씬으로 이동.");
        cc.director.loadScene("MainScene");
    };
    __decorate([
        property(cc.Node)
    ], MultiGameWait.prototype, "multiStartButton", void 0);
    __decorate([
        property(cc.Node)
    ], MultiGameWait.prototype, "backButton", void 0);
    MultiGameWait = __decorate([
        ccclass
    ], MultiGameWait);
    return MultiGameWait;
}(cc.Component));
exports.default = MultiGameWait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcTXVsdGlcXE11bHRpR2FtZVdhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFrQ0M7UUEvQkcsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBR2pDLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQTRCL0IsQ0FBQztJQTFCRyw4QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUM3QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDM0U7SUFFTCxDQUFDO0lBRUQsNENBQW9CLEdBQXBCLFVBQXFCLElBQWEsRUFBRSxRQUFvQjtRQUNwRCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBOUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ2U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUztJQU5WLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FrQ2pDO0lBQUQsb0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQzBDLEVBQUUsQ0FBQyxTQUFTLEdBa0N0RDtrQkFsQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlHYW1lV2FpdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtdWx0aVN0YXJ0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpU3RhcnRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckJ1dHRvbkV2ZW50cyh0aGlzLm11bHRpU3RhcnRCdXR0b24sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUGxheWVyQ29ubmVjdCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJhY2tCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckJ1dHRvbkV2ZW50cyh0aGlzLmJhY2tCdXR0b24sIHRoaXMub25DbGlja01haW4uYmluZCh0aGlzKSk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJCdXR0b25FdmVudHMobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgY2FsbGJhY2spO1xyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tNYWluKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIuuSpOuhnOqwgOq4sCDrsoTtirwg7YG066at65CoLiBNYWluTWVudSDslKzsnLzroZwg7J2064+ZLlwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2NlbmVcIik7XHJcbiAgICB9XHJcbn1cclxuIl19
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
                    var __filename = 'preview-scripts/assets/scripts/Yu/3Match/3MExplain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4555fuqKwZLtIPc8Kc5j3Nw', '3MExplain');
// scripts/Yu/3Match/3MExplain.ts

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
var GameTitleManager = /** @class */ (function (_super) {
    __extends(GameTitleManager, _super);
    function GameTitleManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameStartButton = null;
        _this.BackToSingleGameListButton = null;
        return _this;
    }
    GameTitleManager.prototype.onLoad = function () {
        var _this = this;
        // 클릭 이벤트
        this.gameStartButton.node.on('click', this.onClickStartGame, this);
        // 마우스 진입 시 커서 및 hover 효과
        this.gameStartButton.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
            cc.game.canvas.style.cursor = "pointer";
            _this.gameStartButton.node.runAction(cc.scaleTo(0.1, 1.1) // 약간 확대
            );
        });
        // 마우스 나감 시 커서 및 효과 복귀
        this.gameStartButton.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
            cc.game.canvas.style.cursor = "default";
            _this.gameStartButton.node.runAction(cc.scaleTo(0.1, 1.0) // 원래 크기로
            );
        });
    };
    GameTitleManager.prototype.onClickStartGame = function () {
        cc.log("게임 시작 버튼 클릭됨");
        cc.director.loadScene("3M_GameScene");
    };
    GameTitleManager.prototype.onClickBackSingleGameList = function () {
        cc.log("싱글게임리스트로 돌아가기");
        cc.director.loadScene("SingleGameList");
    };
    __decorate([
        property(cc.Button)
    ], GameTitleManager.prototype, "gameStartButton", void 0);
    __decorate([
        property(cc.Button)
    ], GameTitleManager.prototype, "BackToSingleGameListButton", void 0);
    GameTitleManager = __decorate([
        ccclass
    ], GameTitleManager);
    return GameTitleManager;
}(cc.Component));
exports.default = GameTitleManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXDNNYXRjaFxcM01FeHBsYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBcUNDO1FBbkNHLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLGdDQUEwQixHQUFjLElBQUksQ0FBQzs7SUFnQ2pELENBQUM7SUE5QkcsaUNBQU0sR0FBTjtRQUFBLGlCQW1CQztRQWxCRyxTQUFTO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbkUseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDeEQsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUMvQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRO2FBQ2hDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILHNCQUFzQjtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3hELEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDL0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUzthQUNqQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsb0RBQXlCLEdBQXpCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFsQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dFQUN5QjtJQUw1QixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXFDcEM7SUFBRCx1QkFBQztDQXJDRCxBQXFDQyxDQXJDNkMsRUFBRSxDQUFDLFNBQVMsR0FxQ3pEO2tCQXJDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVUaXRsZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGdhbWVTdGFydEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgQmFja1RvU2luZ2xlR2FtZUxpc3RCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIO2BtOumrSDsnbTrsqTtirhcclxuICAgICAgICB0aGlzLmdhbWVTdGFydEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25DbGlja1N0YXJ0R2FtZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOuniOyasOyKpCDsp4TsnoUg7IucIOy7pOyEnCDrsI8gaG92ZXIg7Zqo6rO8XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhcnRCdXR0b24ubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMS4xKSAvLyDslb3qsIQg7ZmV64yAXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOuniOyasOyKpCDrgpjqsJAg7IucIOy7pOyEnCDrsI8g7Zqo6rO8IOuzteq3gFxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsICgpID0+IHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEuMCkgLy8g7JuQ656YIO2BrOq4sOuhnFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tTdGFydEdhbWUoKSB7XHJcbiAgICAgICAgY2MubG9nKFwi6rKM7J6EIOyLnOyekSDrsoTtirwg7YG066at65CoXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjNNX0dhbWVTY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrQmFja1NpbmdsZUdhbWVMaXN0KCkge1xyXG4gICAgICAgIGNjLmxvZyhcIuyLseq4gOqyjOyehOumrOyKpO2KuOuhnCDrj4zslYTqsIDquLBcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2luZ2xlR2FtZUxpc3RcIik7XHJcbiAgICB9XHJcbn1cclxuIl19
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
                    var __filename = 'preview-scripts/assets/scripts/Controller/CommonUI/GameStartOverlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '025448DsYxK85zTq4f1RCsk', 'GameStartOverlay');
// scripts/Controller/CommonUI/GameStartOverlay.ts

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
var GameStartOverlay = /** @class */ (function (_super) {
    __extends(GameStartOverlay, _super);
    function GameStartOverlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.letterContainer = null; // GameRow + StartRow 포함하는 부모
        return _this;
    }
    GameStartOverlay.prototype.onLoad = function () {
        this.playDropAnimations();
    };
    GameStartOverlay.prototype.playDropAnimations = function () {
        var _this = this;
        var gameRow = this.letterContainer.getChildByName("GameRow");
        var startRow = this.letterContainer.getChildByName("StartRow");
        if (!gameRow || !startRow) {
            console.warn("GameRow 또는 StartRow 노드를 찾을 수 없습니다.");
            return;
        }
        this.animateLetterRow(gameRow.children, 0);
        this.animateLetterRow(startRow.children, 0.5); // 0.5초 딜레이로 START 등장
        var totalDelay = gameRow.children.length * 0.1 + startRow.children.length * 0.1 + 1;
        this.scheduleOnce(function () {
            cc.tween(_this.node)
                .to(0.5, { opacity: 0 })
                .call(function () { return _this.node.destroy(); })
                .start();
        }, totalDelay);
    };
    GameStartOverlay.prototype.animateLetterRow = function (letters, delayOffset) {
        letters.forEach(function (letterNode, index) {
            letterNode.opacity = 0;
            letterNode.setPosition(letterNode.x, 100); // 위에서 시작
            cc.tween(letterNode)
                .delay(delayOffset + index * 0.1)
                .to(0.25, { position: cc.v3(letterNode.x, 0), opacity: 255 }, { easing: "backOut" })
                .start();
        });
    };
    __decorate([
        property(cc.Node)
    ], GameStartOverlay.prototype, "letterContainer", void 0);
    GameStartOverlay = __decorate([
        ccclass
    ], GameStartOverlay);
    return GameStartOverlay;
}(cc.Component));
exports.default = GameStartOverlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcQ29tbW9uVUlcXEdhbWVTdGFydE92ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF5Q0M7UUF2Q0cscUJBQWUsR0FBWSxJQUFJLENBQUMsQ0FBQyw2QkFBNkI7O0lBdUNsRSxDQUFDO0lBckNHLGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkNBQWtCLEdBQWxCO1FBQUEsaUJBb0JDO1FBbkJHLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQ25ELE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBRXBFLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRXRGLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFuQixDQUFtQixDQUFDO2lCQUMvQixLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixPQUFrQixFQUFFLFdBQW1CO1FBQ3BELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVLEVBQUUsS0FBSztZQUM5QixVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUN2QixVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBRXBELEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2lCQUNmLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztpQkFDaEMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUNuRixLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2REFDYztJQUZmLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBeUNwQztJQUFELHVCQUFDO0NBekNELEFBeUNDLENBekM2QyxFQUFFLENBQUMsU0FBUyxHQXlDekQ7a0JBekNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXJ0T3ZlcmxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxldHRlckNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7IC8vIEdhbWVSb3cgKyBTdGFydFJvdyDtj6ztlajtlZjripQg67aA66qoXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGxheURyb3BBbmltYXRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheURyb3BBbmltYXRpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IGdhbWVSb3cgPSB0aGlzLmxldHRlckNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcIkdhbWVSb3dcIik7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSB0aGlzLmxldHRlckNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcIlN0YXJ0Um93XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWdhbWVSb3cgfHwgIXN0YXJ0Um93KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkdhbWVSb3cg65iQ64qUIFN0YXJ0Um93IOuFuOuTnOulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZUxldHRlclJvdyhnYW1lUm93LmNoaWxkcmVuLCAwKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGVMZXR0ZXJSb3coc3RhcnRSb3cuY2hpbGRyZW4sIDAuNSk7IC8vIDAuNey0iCDrlJzroIjsnbTroZwgU1RBUlQg65Ox7J6lXHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsRGVsYXkgPSBnYW1lUm93LmNoaWxkcmVuLmxlbmd0aCAqIDAuMSArIHN0YXJ0Um93LmNoaWxkcmVuLmxlbmd0aCAqIDAuMSArIDE7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm5vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgdG90YWxEZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZUxldHRlclJvdyhsZXR0ZXJzOiBjYy5Ob2RlW10sIGRlbGF5T2Zmc2V0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlck5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldHRlck5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGxldHRlck5vZGUuc2V0UG9zaXRpb24obGV0dGVyTm9kZS54LCAxMDApOyAvLyDsnITsl5DshJwg7Iuc7J6RXHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihsZXR0ZXJOb2RlKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5T2Zmc2V0ICsgaW5kZXggKiAwLjEpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yNSwgeyBwb3NpdGlvbjogY2MudjMobGV0dGVyTm9kZS54LCAwKSwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Yu/MoleGame/MoleExplain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '244d7x+EMhBIb22D8s4TAE0', 'MoleExplain');
// scripts/Yu/MoleGame/MoleExplain.ts

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
var GameTitleManager = /** @class */ (function (_super) {
    __extends(GameTitleManager, _super);
    function GameTitleManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameStartButton = null;
        _this.BackToSingleGameListButton = null;
        return _this;
    }
    GameTitleManager.prototype.onLoad = function () {
        var _this = this;
        // 클릭 이벤트
        this.gameStartButton.node.on('click', this.onClickStartGame, this);
        // 마우스 진입 시 커서 및 hover 효과
        this.gameStartButton.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
            cc.game.canvas.style.cursor = "pointer";
            _this.gameStartButton.node.runAction(cc.scaleTo(0.1, 1.1) // 약간 확대
            );
        });
        // 마우스 나감 시 커서 및 효과 복귀
        this.gameStartButton.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
            cc.game.canvas.style.cursor = "default";
            _this.gameStartButton.node.runAction(cc.scaleTo(0.1, 1.0) // 원래 크기로
            );
        });
    };
    GameTitleManager.prototype.onClickStartGame = function () {
        cc.log("게임 시작 버튼 클릭됨");
        cc.director.loadScene("MoleGameScene");
    };
    GameTitleManager.prototype.onClickBackSingleGameList = function () {
        cc.log("싱글게임리스트로 돌아가기");
        cc.director.loadScene("SingleGameList");
    };
    __decorate([
        property(cc.Button)
    ], GameTitleManager.prototype, "gameStartButton", void 0);
    __decorate([
        property(cc.Button)
    ], GameTitleManager.prototype, "BackToSingleGameListButton", void 0);
    GameTitleManager = __decorate([
        ccclass
    ], GameTitleManager);
    return GameTitleManager;
}(cc.Component));
exports.default = GameTitleManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWXVcXE1vbGVHYW1lXFxNb2xlRXhwbGFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXFDQztRQW5DRyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxnQ0FBMEIsR0FBYyxJQUFJLENBQUM7O0lBZ0NqRCxDQUFDO0lBOUJHLGlDQUFNLEdBQU47UUFBQSxpQkFtQkM7UUFsQkcsU0FBUztRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRW5FLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3hELEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDL0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUTthQUNoQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUN4RCxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQy9CLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVM7YUFDakMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFnQixHQUFoQjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG9EQUF5QixHQUF6QjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBbENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkRBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3RUFDeUI7SUFMNUIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FxQ3BDO0lBQUQsdUJBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQzZDLEVBQUUsQ0FBQyxTQUFTLEdBcUN6RDtrQkFyQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVGl0bGVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBnYW1lU3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIEJhY2tUb1NpbmdsZUdhbWVMaXN0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDtgbTrpq0g7J2067Kk7Yq4XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tTdGFydEdhbWUsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDrp4jsmrDsiqQg7KeE7J6FIOyLnCDsu6TshJwg67CPIGhvdmVyIO2aqOqzvFxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsICgpID0+IHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEuMSkgLy8g7JW96rCEIO2ZleuMgFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDrp4jsmrDsiqQg64KY6rCQIOyLnCDsu6TshJwg67CPIO2aqOqzvCDrs7Xqt4BcclxuICAgICAgICB0aGlzLmdhbWVTdGFydEJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGFydEJ1dHRvbi5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLjApIC8vIOybkOuemCDtgazquLDroZxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrU3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIuqyjOyehCDsi5zsnpEg67KE7Yq8IO2BtOumreuQqFwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNb2xlR2FtZVNjZW5lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tCYWNrU2luZ2xlR2FtZUxpc3QoKSB7XHJcbiAgICAgICAgY2MubG9nKFwi7Iux6riA6rKM7J6E66as7Iqk7Yq466GcIOuPjOyVhOqwgOq4sFwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTaW5nbGVHYW1lTGlzdFwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
            this.registerButtonEvents(this.exitButton.node, this.onExitClick.bind(this));
        }
        if (this.retryButton) {
            this.registerButtonEvents(this.retryButton.node, this.onRetryClick.bind(this));
        }
        this.submitScoreToServer();
    };
    /** 버튼에 터치 & 클릭 이벤트 등록 */
    GameOverUI.prototype.registerButtonEvents = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_END, callback);
        node.on(cc.Node.EventType.MOUSE_DOWN, callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcU2luZ2xlXFxTaW5nbGVHYW1lT3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF1RUM7UUFyRUcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7O0lBa0VsQyxDQUFDO0lBaEVHLDJCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDaEY7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbEY7UUFFRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQseUJBQXlCO0lBQ3pCLHlDQUFvQixHQUFwQixVQUFxQixJQUFhLEVBQUUsUUFBb0I7UUFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsaUNBQVksR0FBWjtRQUNJLElBQU0sV0FBVyxHQUFHLG1CQUFTLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLEVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQVUsV0FBYSxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFSyx3Q0FBbUIsR0FBekI7Ozs7Ozt3QkFDVSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDL0MsSUFBSSxDQUFDLEtBQUssRUFBRTs0QkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7NEJBQ3BDLHNCQUFPO3lCQUNWOzs7O3dCQUdvQixxQkFBTSxLQUFLLENBQUMsb0NBQW9DLEVBQUU7Z0NBQy9ELE1BQU0sRUFBRSxNQUFNO2dDQUNkLE9BQU8sRUFBRTtvQ0FDTCxjQUFjLEVBQUUsa0JBQWtCO29DQUNsQyxlQUFlLEVBQUUsWUFBVSxLQUFPO2lDQUNyQztnQ0FDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQ0FDakIsTUFBTSxFQUFFLG1CQUFTLENBQUMsTUFBTTtvQ0FDeEIsS0FBSyxFQUFFLG1CQUFTLENBQUMsS0FBSztvQ0FDdEIsSUFBSSxFQUFFLFFBQVE7aUNBQ2pCLENBQUM7NkJBQ0wsQ0FBQyxFQUFBOzt3QkFYSSxRQUFRLEdBQUcsU0FXZjt3QkFFYSxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE5QixNQUFNLEdBQUcsU0FBcUI7d0JBQ3BDLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTs0QkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQzt5QkFDcEM7NkJBQU07NEJBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUM3Qzs7Ozt3QkFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE9BQUssQ0FBQyxDQUFDOzs7Ozs7S0FFOUM7SUFwRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNVO0lBTGIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXVFOUI7SUFBRCxpQkFBQztDQXZFRCxBQXVFQyxDQXZFdUMsRUFBRSxDQUFDLFNBQVMsR0F1RW5EO2tCQXZFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4uL0NvbW1vblVJL0dhbWVTdGF0ZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgZXhpdEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcmV0cnlCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV4aXRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckJ1dHRvbkV2ZW50cyh0aGlzLmV4aXRCdXR0b24ubm9kZSwgdGhpcy5vbkV4aXRDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmV0cnlCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckJ1dHRvbkV2ZW50cyh0aGlzLnJldHJ5QnV0dG9uLm5vZGUsIHRoaXMub25SZXRyeUNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdWJtaXRTY29yZVRvU2VydmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOuyhO2KvOyXkCDthLDsuZggJiDtgbTrpq0g7J2067Kk7Yq4IOuTseuhnSAqL1xyXG4gICAgcmVnaXN0ZXJCdXR0b25FdmVudHMobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgY2FsbGJhY2spO1xyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXhpdENsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi64KY6rCA6riwIOuyhO2KvCDtgbTrpq0g4oaSIFNpbmdsZUdhbWVMaXN0IOyUrOycvOuhnCDsnbTrj5lcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2luZ2xlR2FtZUxpc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXRyeUNsaWNrKCkge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lVG9Mb2FkID0gR2FtZVN0YXRlLmxhc3RHYW1lU2NlbmU7XHJcbiAgICAgICAgaWYgKHNjZW5lVG9Mb2FkICYmIHNjZW5lVG9Mb2FkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY2MubG9nKGDri6Tsi5ztlZjquLAg4oaSICR7c2NlbmVUb0xvYWR9YCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZVRvTG9hZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIuydtOyghCDslKwg7KCV67O06rCAIOyXhuyKteuLiOuLpC4g66mU7J247Jy866GcIOydtOuPmVwiKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXRTY29yZVRvU2VydmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dFRva2VuJyk7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJKV1Qg7Yag7YGw7J20IOyXhuyWtCDsoJDsiJgg7KCA7J6lIOu2iOqwgFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Njb3JlL3N1Ym1pdCcsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IEdhbWVTdGF0ZS5nYW1lSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IEdhbWVTdGF0ZS5zY29yZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuygkOyImCDsoIDsnqUg7ISx6rO1OlwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi7KCQ7IiYIOyggOyepSDsi6TtjKg6XCIsIHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLsoJDsiJgg7KCA7J6lIOykkSDsmKTrpZgg67Cc7IOdOlwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/MyPage/MyRecordController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0512j1XQ1H9KM72NeLl7NF', 'MyRecordController');
// scripts/Controller/MyPage/MyRecordController.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myInfoButton = null;
        _this.backButton = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.debug.setDisplayStats(false);
    };
    NewClass.prototype.start = function () {
        if (this.myInfoButton) {
            this.myInfoButton.on(cc.Node.EventType.TOUCH_END, function () {
                cc.director.loadScene("MyInfo");
            }, this);
        }
        if (this.backButton) {
            this.backButton.on(cc.Node.EventType.TOUCH_END, function () {
                cc.director.loadScene('홈화면');
            }, this);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "myInfoButton", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "backButton", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcTXlQYWdlXFxNeVJlY29yZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5QkM7UUF0Qkcsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBbUIvQixDQUFDO0lBakJHLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7Z0JBQzlDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtnQkFDNUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQU5WLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5QjVCO0lBQUQsZUFBQztDQXpCRCxBQXlCQyxDQXpCcUMsRUFBRSxDQUFDLFNBQVMsR0F5QmpEO2tCQXpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBteUluZm9CdXR0b246IGNjLk5vZGUgPSBudWxsOyBcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDsgICAgICAgIFxyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICB9IFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBpZiAodGhpcy5teUluZm9CdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5teUluZm9CdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNeUluZm9cIik7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ+2ZiO2ZlOuptCcpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
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
