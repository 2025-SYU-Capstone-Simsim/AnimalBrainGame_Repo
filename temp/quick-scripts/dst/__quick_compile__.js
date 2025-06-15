
(function () {
var scripts = [{"deps":{"./assets/scripts/Jang/MazeGenerator":7,"./assets/scripts/Jang/MazeLogic":19,"./assets/scripts/Jang/MazePlayerController":20,"./assets/scripts/Jang/MazeRenderer":22,"./assets/scripts/Jang/MazeSingleGameManager":28,"./assets/scripts/Jang/MazeUIManager":21,"./assets/scripts/Jang/Maze_explainSceneManager":23,"./assets/scripts/Jang/MazeGameData":24,"./assets/scripts/Controller/CommonUI/LoginManager":2,"./assets/scripts/Controller/CommonUI/MainMenuScene":25,"./assets/scripts/Controller/CommonUI/SplashMain":30,"./assets/scripts/Controller/CommonUI/StoryScene_Controller":29,"./assets/scripts/Controller/CommonUI/GameStartOverlay":26,"./assets/scripts/Controller/Multi/MultiGameList":8,"./assets/scripts/Controller/Multi/MultiGameResult":27,"./assets/scripts/Controller/Multi/MultiGameWait":31,"./assets/scripts/Controller/Multi/MultiPlayConnect":34,"./assets/scripts/Controller/Multi/MultiFlowController":33,"./assets/scripts/Controller/MyPage/MyRecordController":9,"./assets/scripts/Controller/MyPage/MyInfoController":32,"./assets/scripts/Controller/Single/SingleGameOver":10,"./assets/scripts/Controller/Single/SingleGameList":35,"./assets/scripts/Controller/CommonUI/GameState":38,"./assets/scripts/Jang/MazeGameOverManager":36,"./assets/scripts/Sim/BlockCountGame/BlockCountExplain":11,"./assets/scripts/Sim/MultiRememberGame/MultiPlayerRememberGame":39,"./assets/scripts/Sim/MultiRememberGame/MultiplayerMemoryGameController":37,"./assets/scripts/Sim/MultiRememberGame/MultiGuestViewerRemember":5,"./assets/scripts/Sim/RememberGame/RememberGameExplain":12,"./assets/scripts/Sim/RememberGame/RememberGameController":42,"./assets/scripts/Sim/BlockCountGame/BlockCountGameManager":40,"./assets/scripts/Song/MultiReversecorrect/Multiplayer":41,"./assets/scripts/Song/MultiReversecorrect/MultiOpponent":4,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init":13,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic":46,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene":45,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA":43,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button":47,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn":14,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager":44,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init":50,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic":51,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene":53,"./assets/scripts/Song/MultiReversecorrect/MultiReversecorrectGameController":48,"./assets/scripts/Yu/3Match/3MatchManager":15,"./assets/scripts/Yu/3Match/Tile":56,"./assets/scripts/Yu/3Match/3MExplain":49,"./assets/scripts/Yu/MoleGame/MoleGameScene":6,"./assets/scripts/Yu/MoleGame/MoleExplain":52,"./assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene":54,"./assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController":57,"./assets/scripts/Yu/MultiMoleGame/MultiGuestViewer":16,"./assets/scripts/Yu/3Match/3MatchBoard":55,"./assets/sockets/socket":1,"./assets/scenes/Yu/3Match/Tile":18,"./assets/scenes/Yu/3Match/3MExplain":58,"./assets/scenes/Yu/MoleGame/MoleGameScene":3,"./assets/scenes/Yu/MoleGame/MoleExplain":62,"./assets/scenes/Yu/MultiMoleGame/MultiplayerGameScene":59,"./assets/scenes/Yu/MultiMoleGame/MultiplayerMoleGameController":60,"./assets/scenes/Yu/MultiMoleGame/MultiGuestViewer":17,"./assets/scenes/Yu/3Match/3MatchBoard":61,"./assets/scenes/Yu/3Match/3MatchManager":63},"path":"preview-scripts/__qc_index__.js"},{"deps":{"socket.io-client":64},"path":"preview-scripts/assets/sockets/socket.js"},{"deps":{"./GameState":38},"path":"preview-scripts/assets/scripts/Controller/CommonUI/LoginManager.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/MoleGame/MoleGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/MultiReversecorrect/MultiOpponent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/MultiRememberGame/MultiGuestViewerRemember.js"},{"deps":{"../../Controller/CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeGenerator.js"},{"deps":{"../CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyRecordController.js"},{"deps":{"../CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameOver.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountExplain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameExplain.js"},{"deps":{"./Reversecorrect_Show_QnA":43,"../../Controller/CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn.js"},{"deps":{"../../Controller/CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiGuestViewer.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/MultiMoleGame/MultiGuestViewer.js"},{"deps":{"./3MatchBoard":61},"path":"preview-scripts/assets/scenes/Yu/3Match/Tile.js"},{"deps":{"./MazeGenerator":7,"./MazeRenderer":22},"path":"preview-scripts/assets/scripts/Jang/MazeLogic.js"},{"deps":{"./MazeGameData":24},"path":"preview-scripts/assets/scripts/Jang/MazePlayerController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeUIManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeRenderer.js"},{"deps":{"./MazeGameData":24},"path":"preview-scripts/assets/scripts/Jang/Maze_explainSceneManager.js"},{"deps":{"../Controller/CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Jang/MazeGameData.js"},{"deps":{"../CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Controller/CommonUI/MainMenuScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameStartOverlay.js"},{"deps":{"../CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameResult.js"},{"deps":{"./MazeGameData":24,"./MazeLogic":19,"./MazePlayerController":20,"./MazeUIManager":21,"../Controller/CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Jang/MazeSingleGameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/StoryScene_Controller.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/SplashMain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameWait.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyInfoController.js"},{"deps":{"../CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiFlowController.js"},{"deps":{"../CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiPlayConnect.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameList.js"},{"deps":{"./MazeGameData":24},"path":"preview-scripts/assets/scripts/Jang/MazeGameOverManager.js"},{"deps":{"./MultiPlayerRememberGame":39,"./MultiGuestViewerRemember":5,"../../Controller/CommonUI/GameState":38,"../../Controller/Multi/MultiFlowController":33},"path":"preview-scripts/assets/scripts/Sim/MultiRememberGame/MultiplayerMemoryGameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameState.js"},{"deps":{"../../Controller/CommonUI/GameState":38,"../../Controller/Multi/MultiFlowController":33},"path":"preview-scripts/assets/scripts/Sim/MultiRememberGame/MultiPlayerRememberGame.js"},{"deps":{"../../Controller/CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountGameManager.js"},{"deps":{"../../Controller/Multi/MultiFlowController":33,"../../Controller/CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Song/MultiReversecorrect/Multiplayer.js"},{"deps":{"../../Controller/CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA.js"},{"deps":{"./Rottenacorn_acorn":14},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene.js"},{"deps":{"./Reversecorrect_Show_QnA":43,"./Reversecorrect_Game_init":13},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic.js"},{"deps":{"./Reversecorrect_Game_logic":46},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button.js"},{"deps":{"./Multiplayer":41,"./MultiOpponent":4,"../../Controller/CommonUI/GameState":38,"../../Controller/Multi/MultiFlowController":33},"path":"preview-scripts/assets/scripts/Song/MultiReversecorrect/MultiReversecorrectGameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/3Match/3MExplain.js"},{"deps":{"../../Controller/CommonUI/GameState":38},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init.js"},{"deps":{"./Rottenacorn_acorn_manager":44,"./Rottenacorn_acorn":14,"./Rottenacorn_game_init":50},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleExplain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene.js"},{"deps":{"../../Controller/CommonUI/GameState":38,"../../Controller/Multi/MultiFlowController":33},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene.js"},{"deps":{"./3MatchManager":15,"./Tile":56},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchBoard.js"},{"deps":{"./3MatchBoard":55},"path":"preview-scripts/assets/scripts/Yu/3Match/Tile.js"},{"deps":{"./MultiplayerGameScene":54,"./MultiGuestViewer":16,"../../Controller/CommonUI/GameState":38,"../../Controller/Multi/MultiFlowController":33},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/3Match/3MExplain.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/MultiMoleGame/MultiplayerGameScene.js"},{"deps":{"./MultiplayerGameScene":59,"./MultiGuestViewer":17},"path":"preview-scripts/assets/scenes/Yu/MultiMoleGame/MultiplayerMoleGameController.js"},{"deps":{"./3MatchManager":63,"./Tile":18},"path":"preview-scripts/assets/scenes/Yu/3Match/3MatchBoard.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/MoleGame/MoleExplain.js"},{"deps":{},"path":"preview-scripts/assets/scenes/Yu/3Match/3MatchManager.js"},{"deps":{"./url":65,"socket.io-parser":68,"debug":69,"./socket":66,"./manager":67},"path":"preview-scripts/__node_modules/socket.io-client/lib/index.js"},{"deps":{"debug":69,"parseuri":70},"path":"preview-scripts/__node_modules/socket.io-client/lib/url.js"},{"deps":{"socket.io-parser":68,"debug":69,"component-emitter":71,"to-array":72,"parseqs":73,"component-bind":74,"./on":75,"has-binary2":76},"path":"preview-scripts/__node_modules/socket.io-client/lib/socket.js"},{"deps":{"./socket":66,"component-emitter":71,"socket.io-parser":68,"./on":75,"component-bind":74,"debug":69,"indexof":77,"backo2":78,"engine.io-client":84},"path":"preview-scripts/__node_modules/socket.io-client/lib/manager.js"},{"deps":{"debug":69,"component-emitter":71,"isarray":79,"./binary":80,"./is-buffer":81},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/index.js"},{"deps":{"../../../../process/browser.js":82,"./debug":83},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseuri/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/to-array/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseqs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-bind/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/lib/on.js"},{"deps":{"isarray":86,"buffer":85},"path":"preview-scripts/__node_modules/has-binary2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/indexof/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/backo2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/isarray/index.js"},{"deps":{"isarray":79,"./is-buffer":81},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/binary.js"},{"deps":{"buffer":85},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"ms":87},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/debug.js"},{"deps":{"engine.io-parser":89,"./socket":88},"path":"preview-scripts/__node_modules/engine.io-client/lib/index.js"},{"deps":{"base64-js":90,"ieee754":91,"isarray":92},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-binary2/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/ms/index.js"},{"deps":{"component-emitter":71,"indexof":77,"engine.io-parser":89,"parseuri":70,"parseqs":73,"./transport":94,"./transports/index":93,"debug":100},"path":"preview-scripts/__node_modules/engine.io-client/lib/socket.js"},{"deps":{"has-binary2":76,"arraybuffer.slice":95,"after":96,"blob":97,"./utf8":98,"./keys":99,"base64-arraybuffer":101},"path":"preview-scripts/__node_modules/engine.io-parser/lib/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"xmlhttprequest-ssl":102,"./polling-xhr":103,"./polling-jsonp":104,"./websocket":105},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/index.js"},{"deps":{"engine.io-parser":89,"component-emitter":71},"path":"preview-scripts/__node_modules/engine.io-client/lib/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/arraybuffer.slice/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/after/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/blob/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/utf8.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/keys.js"},{"deps":{"../../../../process/browser.js":82,"./debug":106},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"},{"deps":{"has-cors":107,"./globalThis":108},"path":"preview-scripts/__node_modules/engine.io-client/lib/xmlhttprequest.js"},{"deps":{"xmlhttprequest-ssl":102,"component-emitter":71,"debug":100,"../globalThis":108,"component-inherit":110,"./polling":109},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-xhr.js"},{"deps":{"./polling":109,"../globalThis":108,"component-inherit":110},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-jsonp.js"},{"deps":{"../transport":94,"engine.io-parser":89,"parseqs":73,"component-inherit":110,"debug":100,"buffer":85,"ws":111,"yeast":112},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/websocket.js"},{"deps":{"ms":113},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-cors/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/lib/globalThis.browser.js"},{"deps":{"../transport":94,"parseqs":73,"engine.io-parser":89,"component-inherit":110,"yeast":112,"debug":100,"xmlhttprequest-ssl":102},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-inherit/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{},"path":"preview-scripts/__node_modules/yeast/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/ms/index.js"}];
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
    