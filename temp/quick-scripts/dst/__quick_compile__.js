
(function () {
var scripts = [{"deps":{"./assets/scripts/Jang/MazeGenerator":7,"./assets/scripts/Jang/MazeLogic":18,"./assets/scripts/Jang/MazePlayerController":19,"./assets/scripts/Jang/MazeRenderer":24,"./assets/scripts/Jang/MazeSingleGameManager":23,"./assets/scripts/Jang/MazeUIManager":22,"./assets/scripts/Jang/Maze_explainSceneManager":20,"./assets/scripts/Jang/MazeGameData":26,"./assets/scripts/Controller/CommonUI/LoginManager":2,"./assets/scripts/Controller/CommonUI/MainMenuScene":27,"./assets/scripts/Controller/CommonUI/SplashMain":21,"./assets/scripts/Controller/CommonUI/StoryScene_Controller":30,"./assets/scripts/Controller/CommonUI/GameStartOverlay":28,"./assets/scripts/Controller/Multi/MultiGameList":8,"./assets/scripts/Controller/Multi/MultiGameResult":29,"./assets/scripts/Controller/Multi/MultiGameWait":25,"./assets/scripts/Controller/Multi/MultiPlayConnect":31,"./assets/scripts/Controller/Multi/MultiFlowController":36,"./assets/scripts/Controller/MyPage/MyRecordController":9,"./assets/scripts/Controller/MyPage/MyInfoController":33,"./assets/scripts/Controller/Single/SingleGameOver":10,"./assets/scripts/Controller/Single/SingleGameList":35,"./assets/scripts/Controller/CommonUI/GameState":34,"./assets/scripts/Jang/MazeGameOverManager":32,"./assets/scripts/Sim/BlockCountGame/BlockCountExplain":4,"./assets/scripts/Sim/RememberGame/RememberGameExplain":38,"./assets/scripts/Sim/RememberGame/RememberGameController":11,"./assets/scripts/Sim/BlockCountGame/BlockCountGameManager":37,"./assets/scripts/Song/MultiReversecorrect/Multiplayer":39,"./assets/scripts/Song/MultiReversecorrect/MultiOpponent":5,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init":40,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic":12,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene":42,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA":44,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button":41,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn":13,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager":45,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init":43,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic":47,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene":51,"./assets/scripts/Song/MultiReversecorrect/MultiReversecorrectGameController":46,"./assets/scripts/Yu/3Match/3MatchManager":49,"./assets/scripts/Yu/3Match/Tile":6,"./assets/scripts/Yu/3Match/3MExplain":48,"./assets/scripts/Yu/MoleGame/MoleGameScene":50,"./assets/scripts/Yu/MoleGame/MoleExplain":14,"./assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene":15,"./assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController":53,"./assets/scripts/Yu/MultiMoleGame/MultiGuestViewer":54,"./assets/scripts/Yu/3Match/3MatchBoard":52,"./assets/sockets/socket":1,"./assets/scenes/Yu/3Match/Tile":3,"./assets/scenes/Yu/3Match/3MExplain":57,"./assets/scenes/Yu/MoleGame/MoleGameScene":55,"./assets/scenes/Yu/MoleGame/MoleExplain":16,"./assets/scenes/Yu/MultiMoleGame/MultiplayerGameScene":56,"./assets/scenes/Yu/MultiMoleGame/MultiplayerMoleGameController":58,"./assets/scenes/Yu/MultiMoleGame/MultiGuestViewer":17,"./assets/scenes/Yu/3Match/3MatchBoard":59,"./assets/scenes/Yu/3Match/3MatchManager":60},"path":"preview-scripts/__qc_index__.js"},{"deps":{"socket.io-client":61},"path":"preview-scripts/assets/sockets/socket.js"},{"deps":{"./GameState":34},"path":"preview-scripts/assets/scripts/Controller/CommonUI/LoginManager.js"},{"deps":{"./3MatchBoard":59},"path":"preview-scripts/assets/scenes/Yu/3Match/Tile.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountExplain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/MultiReversecorrect/MultiOpponent.js"},{"deps":{"./3MatchBoard":52},"path":"preview-scripts/assets/scripts/Yu/3Match/Tile.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeGenerator.js"},{"deps":{"../CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyRecordController.js"},{"deps":{"../CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameOver.js"},{"deps":{"../../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameController.js"},{"deps":{"./Reversecorrect_Show_QnA":44,"./Reversecorrect_Game_init":40},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleExplain.js"},{"deps":{"../../Controller/CommonUI/GameState":34,"../../Controller/Multi/MultiFlowController":36},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/MoleGame/MoleExplain.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/MultiMoleGame/MultiGuestViewer.js"},{"deps":{"./MazeGenerator":7,"./MazeRenderer":24},"path":"preview-scripts/assets/scripts/Jang/MazeLogic.js"},{"deps":{"./MazeGameData":26},"path":"preview-scripts/assets/scripts/Jang/MazePlayerController.js"},{"deps":{"./MazeGameData":26},"path":"preview-scripts/assets/scripts/Jang/Maze_explainSceneManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/SplashMain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeUIManager.js"},{"deps":{"./MazeGameData":26,"./MazeLogic":18,"./MazePlayerController":19,"./MazeUIManager":22,"../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Jang/MazeSingleGameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeRenderer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameWait.js"},{"deps":{"../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Jang/MazeGameData.js"},{"deps":{"../CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Controller/CommonUI/MainMenuScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameStartOverlay.js"},{"deps":{"../CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameResult.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/StoryScene_Controller.js"},{"deps":{"../CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiPlayConnect.js"},{"deps":{"./MazeGameData":26},"path":"preview-scripts/assets/scripts/Jang/MazeGameOverManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyInfoController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameState.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameList.js"},{"deps":{"../CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiFlowController.js"},{"deps":{"../../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountGameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameExplain.js"},{"deps":{"../../Controller/Multi/MultiFlowController":36,"../../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Song/MultiReversecorrect/Multiplayer.js"},{"deps":{"./Reversecorrect_Show_QnA":44,"../../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init.js"},{"deps":{"./Reversecorrect_Game_logic":12},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene.js"},{"deps":{"../../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA.js"},{"deps":{"./Rottenacorn_acorn":13},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager.js"},{"deps":{"./Multiplayer":39,"./MultiOpponent":5,"../../Controller/Multi/MultiFlowController":36,"../../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Song/MultiReversecorrect/MultiReversecorrectGameController.js"},{"deps":{"./Rottenacorn_acorn_manager":45,"./Rottenacorn_acorn":13,"./Rottenacorn_game_init":43},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/3Match/3MExplain.js"},{"deps":{"../../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchManager.js"},{"deps":{"../../Controller/CommonUI/GameState":34},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene.js"},{"deps":{"./3MatchManager":49,"./Tile":6},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchBoard.js"},{"deps":{"./MultiplayerGameScene":15,"./MultiGuestViewer":54,"../../Controller/CommonUI/GameState":34,"../../Controller/Multi/MultiFlowController":36},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiGuestViewer.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/MoleGame/MoleGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/MultiMoleGame/MultiplayerGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/3Match/3MExplain.js"},{"deps":{"./MultiplayerGameScene":56,"./MultiGuestViewer":17},"path":"preview-scripts/assets/scenes/Yu/MultiMoleGame/MultiplayerMoleGameController.js"},{"deps":{"./3MatchManager":60,"./Tile":3},"path":"preview-scripts/assets/scenes/Yu/3Match/3MatchBoard.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/3Match/3MatchManager.js"},{"deps":{"./url":62,"socket.io-parser":66,"debug":65,"./socket":64,"./manager":63},"path":"preview-scripts/__node_modules/socket.io-client/lib/index.js"},{"deps":{"debug":65,"parseuri":67},"path":"preview-scripts/__node_modules/socket.io-client/lib/url.js"},{"deps":{"./socket":64,"socket.io-parser":66,"debug":65,"component-emitter":68,"component-bind":70,"indexof":69,"backo2":71,"./on":72,"engine.io-client":78},"path":"preview-scripts/__node_modules/socket.io-client/lib/manager.js"},{"deps":{"socket.io-parser":66,"./on":72,"debug":65,"component-emitter":68,"component-bind":70,"parseqs":73,"to-array":74,"has-binary2":75},"path":"preview-scripts/__node_modules/socket.io-client/lib/socket.js"},{"deps":{"../../../../process/browser.js":77,"./debug":76},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/browser.js"},{"deps":{"debug":65,"component-emitter":68,"./is-buffer":79,"isarray":80,"./binary":81},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseuri/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/indexof/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-bind/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/backo2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/lib/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseqs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/to-array/index.js"},{"deps":{"isarray":84,"buffer":82},"path":"preview-scripts/__node_modules/has-binary2/index.js"},{"deps":{"ms":83},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"engine.io-parser":86,"./socket":85},"path":"preview-scripts/__node_modules/engine.io-client/lib/index.js"},{"deps":{"buffer":82},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/isarray/index.js"},{"deps":{"isarray":80,"./is-buffer":79},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/binary.js"},{"deps":{"base64-js":87,"ieee754":88,"isarray":90},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/ms/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-binary2/node_modules/isarray/index.js"},{"deps":{"component-emitter":68,"indexof":69,"engine.io-parser":86,"parseuri":67,"parseqs":73,"./transport":91,"./transports/index":89,"debug":98},"path":"preview-scripts/__node_modules/engine.io-client/lib/socket.js"},{"deps":{"has-binary2":75,"arraybuffer.slice":92,"blob":93,"after":94,"./keys":95,"./utf8":96,"base64-arraybuffer":97},"path":"preview-scripts/__node_modules/engine.io-parser/lib/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./polling-xhr":99,"./polling-jsonp":101,"xmlhttprequest-ssl":100,"./websocket":102},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"engine.io-parser":86,"component-emitter":68},"path":"preview-scripts/__node_modules/engine.io-client/lib/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/arraybuffer.slice/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/blob/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/after/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/keys.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/utf8.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"},{"deps":{"../../../../process/browser.js":77,"./debug":103},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/browser.js"},{"deps":{"xmlhttprequest-ssl":100,"component-emitter":68,"debug":98,"component-inherit":107,"../globalThis":105,"./polling":106},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-xhr.js"},{"deps":{"./globalThis":105,"has-cors":108},"path":"preview-scripts/__node_modules/engine.io-client/lib/xmlhttprequest.js"},{"deps":{"./polling":106,"../globalThis":105,"component-inherit":107},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-jsonp.js"},{"deps":{"../transport":91,"engine.io-parser":86,"parseqs":73,"debug":98,"buffer":82,"component-inherit":107,"ws":104,"yeast":109},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/websocket.js"},{"deps":{"ms":110},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/lib/globalThis.browser.js"},{"deps":{"../transport":91,"parseqs":73,"engine.io-parser":86,"component-inherit":107,"yeast":109,"debug":98,"xmlhttprequest-ssl":100},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-inherit/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-cors/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/yeast/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/ms/index.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    