
(function () {
var scripts = [{"deps":{"./assets/scripts/Controller/SingleGameList":8,"./assets/scripts/Controller/CommonUI/GameState":2,"./assets/scripts/Controller/CommonUI/LoginManager":21,"./assets/scripts/Controller/CommonUI/MainMenuScene":16,"./assets/scripts/Controller/CommonUI/StoryScene_Controller":22,"./assets/scripts/Controller/CommonUI/GameStartOverlay":19,"./assets/scripts/Controller/LoginManager":17,"./assets/scripts/Controller/Multi/MultiGameList":24,"./assets/scripts/Controller/Multi/MultiGameResult":18,"./assets/scripts/Controller/Multi/MultiGameWait":6,"./assets/scripts/Controller/Multi/MultiPlayConnect":26,"./assets/scripts/Controller/Multi/MultiFlowController":20,"./assets/scripts/Controller/MyPage/MyRecordController":7,"./assets/scripts/Controller/MyPage/MyInfoController":23,"./assets/scripts/Controller/Single/SingleGameOver":25,"./assets/scripts/Controller/Single/SingleGameList":9,"./assets/scripts/Jang/MazeGameOverManager":31,"./assets/scripts/Jang/MazeGenerator":27,"./assets/scripts/Jang/MazeLogic":12,"./assets/scripts/Jang/MazePlayerController":30,"./assets/scripts/Jang/MazeRenderer":29,"./assets/scripts/Jang/MazeSingleGameManager":28,"./assets/scripts/Jang/MazeUIManager":36,"./assets/scripts/Jang/Maze_explainSceneManager":32,"./assets/scripts/Jang/MazeGameData":33,"./assets/scripts/Controller/MainMenuScene":34,"./assets/scripts/Sim/BlockCountGame/BlockCountExplain":4,"./assets/scripts/Sim/RememberGame/RememberGameExplain":11,"./assets/scripts/Sim/RememberGame/RememberGameController":35,"./assets/scripts/Sim/BlockCountGame/BlockCountGameManager":38,"./assets/scripts/Song/MultiReversecorrect/Multiplayer":37,"./assets/scripts/Song/MultiReversecorrect/MultiOpponent":3,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init":10,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic":40,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene":39,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA":41,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button":44,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn":13,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager":42,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init":45,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic":43,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene":47,"./assets/scripts/Song/MultiReversecorrect/MultiReversecorrectGameController":50,"./assets/scripts/Yu/3Match/3MatchManager":5,"./assets/scripts/Yu/3Match/Tile":51,"./assets/scripts/Yu/3Match/3MExplain":46,"./assets/scripts/Yu/MoleGame/MoleGameScene":15,"./assets/scripts/Yu/MoleGame/MoleExplain":48,"./assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene":49,"./assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController":14,"./assets/scripts/Yu/MultiMoleGame/MultiGuestViewer":52,"./assets/scripts/Yu/3Match/3MatchBoard":53,"./assets/sockets/socket":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{"socket.io-client":54},"path":"preview-scripts/assets/sockets/socket.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameState.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/MultiReversecorrect/MultiOpponent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountExplain.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameWait.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyRecordController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/SingleGameList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameList.js"},{"deps":{"./Reversecorrect_Show_QnA":41,"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameExplain.js"},{"deps":{"./MazeGenerator":27,"./MazeRenderer":29},"path":"preview-scripts/assets/scripts/Jang/MazeLogic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn.js"},{"deps":{"./MultiplayerGameScene":49,"./MultiGuestViewer":52,"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleGameScene.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/CommonUI/MainMenuScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/LoginManager.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameResult.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameStartOverlay.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiFlowController.js"},{"deps":{"./GameState":2},"path":"preview-scripts/assets/scripts/Controller/CommonUI/LoginManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/StoryScene_Controller.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyInfoController.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameList.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameOver.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiPlayConnect.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeGenerator.js"},{"deps":{"./MazeGameData":33,"./MazeLogic":12,"./MazePlayerController":30,"./MazeUIManager":36,"../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Jang/MazeSingleGameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeRenderer.js"},{"deps":{"./MazeGameData":33},"path":"preview-scripts/assets/scripts/Jang/MazePlayerController.js"},{"deps":{"./MazeGameData":33},"path":"preview-scripts/assets/scripts/Jang/MazeGameOverManager.js"},{"deps":{"./MazeGameData":33},"path":"preview-scripts/assets/scripts/Jang/Maze_explainSceneManager.js"},{"deps":{"../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Jang/MazeGameData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MainMenuScene.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeUIManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/MultiReversecorrect/Multiplayer.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountGameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene.js"},{"deps":{"./Reversecorrect_Show_QnA":41,"./Reversecorrect_Game_init":10},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA.js"},{"deps":{"./Rottenacorn_acorn":13},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager.js"},{"deps":{"./Rottenacorn_acorn_manager":42,"./Rottenacorn_acorn":13,"./Rottenacorn_game_init":45},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic.js"},{"deps":{"./Reversecorrect_Game_logic":40},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/3Match/3MExplain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleExplain.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene.js"},{"deps":{"./Multiplayer":37,"./MultiOpponent":3,"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Song/MultiReversecorrect/MultiReversecorrectGameController.js"},{"deps":{"./3MatchBoard":53},"path":"preview-scripts/assets/scripts/Yu/3Match/Tile.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiGuestViewer.js"},{"deps":{"./3MatchManager":5,"./Tile":51},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchBoard.js"},{"deps":{"./url":55,"socket.io-parser":58,"debug":59,"./socket":56,"./manager":57},"path":"preview-scripts/__node_modules/socket.io-client/lib/index.js"},{"deps":{"debug":59,"parseuri":60},"path":"preview-scripts/__node_modules/socket.io-client/lib/url.js"},{"deps":{"socket.io-parser":58,"debug":59,"component-emitter":61,"to-array":62,"component-bind":63,"parseqs":64,"./on":65,"has-binary2":66},"path":"preview-scripts/__node_modules/socket.io-client/lib/socket.js"},{"deps":{"./socket":56,"component-emitter":61,"socket.io-parser":58,"./on":65,"component-bind":63,"debug":59,"backo2":67,"indexof":68,"engine.io-client":74},"path":"preview-scripts/__node_modules/socket.io-client/lib/manager.js"},{"deps":{"debug":59,"component-emitter":61,"isarray":69,"./binary":71,"./is-buffer":73},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/index.js"},{"deps":{"../../../../process/browser.js":72,"./debug":70},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseuri/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/to-array/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-bind/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseqs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/lib/on.js"},{"deps":{"isarray":76,"buffer":75},"path":"preview-scripts/__node_modules/has-binary2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/backo2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/indexof/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/isarray/index.js"},{"deps":{"ms":77},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/debug.js"},{"deps":{"isarray":69,"./is-buffer":73},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/binary.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"buffer":75},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js"},{"deps":{"engine.io-parser":79,"./socket":78},"path":"preview-scripts/__node_modules/engine.io-client/lib/index.js"},{"deps":{"base64-js":80,"ieee754":81,"isarray":82},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-binary2/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/ms/index.js"},{"deps":{"component-emitter":61,"indexof":68,"engine.io-parser":79,"parseuri":60,"parseqs":64,"./transport":84,"./transports/index":83,"debug":90},"path":"preview-scripts/__node_modules/engine.io-client/lib/socket.js"},{"deps":{"has-binary2":66,"arraybuffer.slice":85,"after":86,"./utf8":87,"blob":88,"./keys":89,"base64-arraybuffer":91},"path":"preview-scripts/__node_modules/engine.io-parser/lib/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"xmlhttprequest-ssl":92,"./polling-xhr":93,"./polling-jsonp":94,"./websocket":95},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/index.js"},{"deps":{"engine.io-parser":79,"component-emitter":61},"path":"preview-scripts/__node_modules/engine.io-client/lib/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/arraybuffer.slice/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/after/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/utf8.js"},{"deps":{},"path":"preview-scripts/__node_modules/blob/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/keys.js"},{"deps":{"../../../../process/browser.js":72,"./debug":96},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"},{"deps":{"./globalThis":97,"has-cors":98},"path":"preview-scripts/__node_modules/engine.io-client/lib/xmlhttprequest.js"},{"deps":{"xmlhttprequest-ssl":92,"component-emitter":61,"debug":90,"../globalThis":97,"component-inherit":100,"./polling":99},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-xhr.js"},{"deps":{"./polling":99,"../globalThis":97,"component-inherit":100},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-jsonp.js"},{"deps":{"../transport":84,"engine.io-parser":79,"parseqs":64,"component-inherit":100,"debug":90,"buffer":75,"ws":101,"yeast":102},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/websocket.js"},{"deps":{"ms":103},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/lib/globalThis.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-cors/index.js"},{"deps":{"../transport":84,"parseqs":64,"engine.io-parser":79,"component-inherit":100,"yeast":102,"debug":90,"xmlhttprequest-ssl":92},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-inherit/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{},"path":"preview-scripts/__node_modules/yeast/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/ms/index.js"}];
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
    