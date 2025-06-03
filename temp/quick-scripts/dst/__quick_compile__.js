
(function () {
var scripts = [{"deps":{"./assets/scripts/Controller/CommonUI/GameStartOverlay":2,"./assets/scripts/Sim/BlockCountGame/BlockCountExplain":3,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic":4,"./assets/scripts/Yu/3Match/Tile":5,"./assets/scripts/Controller/SingleGameList":6,"./assets/scripts/Controller/Multi/MultiGameWait":7,"./assets/scripts/Controller/MyPage/MyInfoController":8,"./assets/scripts/Controller/Single/SingleGameList":9,"./assets/scripts/Jang/MazeGameOverManager":10,"./assets/scripts/Sim/RememberGame/RememberGameController":11,"./assets/scripts/Yu/MultiMoleGame/MultiGuestViewer":12,"./assets/scripts/Yu/MoleGame/MoleGameScene":13,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn":14,"./assets/scripts/Controller/LoginManager":15,"./assets/scripts/Controller/CommonUI/LoginManager":16,"./assets/scripts/Controller/CommonUI/GameState":17,"./assets/scripts/Controller/CommonUI/MainMenuScene":18,"./assets/scripts/Controller/Multi/MultiGameList":19,"./assets/scripts/Controller/CommonUI/StoryScene_Controller":20,"./assets/scripts/Controller/Multi/MultiGameResult":21,"./assets/scripts/Controller/MyPage/MyRecordController":22,"./assets/scripts/Controller/Multi/MultiPlayConnect":23,"./assets/scripts/Controller/Single/SingleGameOver":24,"./assets/scripts/Controller/Multi/MultiFlowController":25,"./assets/scripts/Jang/MazeLogic":26,"./assets/scripts/Jang/MazeGenerator":27,"./assets/scripts/Jang/Maze_explainSceneManager":28,"./assets/scripts/Jang/MazePlayerController":29,"./assets/scripts/Controller/MainMenuScene":30,"./assets/scripts/Jang/MazeRenderer":31,"./assets/scripts/Jang/MazeSingleGameManager":32,"./assets/scripts/Jang/MazeGameData":33,"./assets/scripts/Jang/MazeUIManager":34,"./assets/scripts/Sim/BlockCountGame/BlockCountGameManager":35,"./assets/scripts/Sim/RememberGame/RememberGameExplain":36,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA":37,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager":38,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene":39,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button":40,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene":41,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic":42,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init":43,"./assets/scripts/Yu/3Match/3MatchManager":44,"./assets/scripts/Yu/MoleGame/MoleExplain":45,"./assets/scripts/Yu/3Match/3MExplain":46,"./assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController":47,"./assets/scripts/Yu/3Match/3MatchBoard":48,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init":49,"./assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene":50,"./assets/sockets/socket":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{"socket.io-client":51},"path":"preview-scripts/assets/sockets/socket.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameStartOverlay.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountExplain.js"},{"deps":{"./Reversecorrect_Show_QnA":37,"./Reversecorrect_Game_init":49},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic.js"},{"deps":{"./3MatchBoard":48},"path":"preview-scripts/assets/scripts/Yu/3Match/Tile.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/SingleGameList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameWait.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyInfoController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameList.js"},{"deps":{"./MazeGameData":33},"path":"preview-scripts/assets/scripts/Jang/MazeGameOverManager.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiGuestViewer.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/LoginManager.js"},{"deps":{"./GameState":17},"path":"preview-scripts/assets/scripts/Controller/CommonUI/LoginManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameState.js"},{"deps":{"../CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Controller/CommonUI/MainMenuScene.js"},{"deps":{"../CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/StoryScene_Controller.js"},{"deps":{"../CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameResult.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyRecordController.js"},{"deps":{"../CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiPlayConnect.js"},{"deps":{"../CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameOver.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiFlowController.js"},{"deps":{"./MazeGenerator":27,"./MazeRenderer":31},"path":"preview-scripts/assets/scripts/Jang/MazeLogic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeGenerator.js"},{"deps":{"./MazeGameData":33},"path":"preview-scripts/assets/scripts/Jang/Maze_explainSceneManager.js"},{"deps":{"./MazeGameData":33},"path":"preview-scripts/assets/scripts/Jang/MazePlayerController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MainMenuScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeRenderer.js"},{"deps":{"./MazeGameData":33,"./MazeLogic":26,"./MazePlayerController":29,"./MazeUIManager":34,"../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Jang/MazeSingleGameManager.js"},{"deps":{"../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Jang/MazeGameData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeUIManager.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountGameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameExplain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA.js"},{"deps":{"./Rottenacorn_acorn":14},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene.js"},{"deps":{"./Reversecorrect_Game_logic":4},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene.js"},{"deps":{"./Rottenacorn_acorn_manager":38,"./Rottenacorn_acorn":14,"./Rottenacorn_game_init":43},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleExplain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/3Match/3MExplain.js"},{"deps":{"./MultiplayerGameScene":50,"./MultiGuestViewer":12,"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController.js"},{"deps":{"./3MatchManager":44,"./Tile":5},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchBoard.js"},{"deps":{"./Reversecorrect_Show_QnA":37,"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene.js"},{"deps":{"./url":52,"socket.io-parser":55,"debug":56,"./socket":54,"./manager":53},"path":"preview-scripts/__node_modules/socket.io-client/lib/index.js"},{"deps":{"debug":56,"parseuri":57},"path":"preview-scripts/__node_modules/socket.io-client/lib/url.js"},{"deps":{"./socket":54,"socket.io-parser":55,"debug":56,"component-emitter":59,"component-bind":58,"indexof":60,"backo2":61,"./on":62,"engine.io-client":71},"path":"preview-scripts/__node_modules/socket.io-client/lib/manager.js"},{"deps":{"socket.io-parser":55,"./on":62,"debug":56,"component-bind":58,"component-emitter":59,"to-array":63,"parseqs":65,"has-binary2":64},"path":"preview-scripts/__node_modules/socket.io-client/lib/socket.js"},{"deps":{"debug":56,"component-emitter":59,"isarray":66,"./is-buffer":67,"./binary":68},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/index.js"},{"deps":{"../../../../process/browser.js":70,"./debug":69},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseuri/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-bind/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/indexof/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/backo2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/lib/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/to-array/index.js"},{"deps":{"isarray":74,"buffer":72},"path":"preview-scripts/__node_modules/has-binary2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseqs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/isarray/index.js"},{"deps":{"buffer":72},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js"},{"deps":{"isarray":66,"./is-buffer":67},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/binary.js"},{"deps":{"ms":73},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"engine.io-parser":76,"./socket":75},"path":"preview-scripts/__node_modules/engine.io-client/lib/index.js"},{"deps":{"base64-js":77,"ieee754":78,"isarray":80},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/ms/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-binary2/node_modules/isarray/index.js"},{"deps":{"component-emitter":59,"indexof":60,"engine.io-parser":76,"parseuri":57,"parseqs":65,"./transport":81,"./transports/index":79,"debug":87},"path":"preview-scripts/__node_modules/engine.io-client/lib/socket.js"},{"deps":{"has-binary2":64,"arraybuffer.slice":82,"after":83,"./keys":84,"blob":85,"./utf8":86,"base64-arraybuffer":88},"path":"preview-scripts/__node_modules/engine.io-parser/lib/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"xmlhttprequest-ssl":89,"./polling-jsonp":91,"./polling-xhr":90,"./websocket":92},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"engine.io-parser":76,"component-emitter":59},"path":"preview-scripts/__node_modules/engine.io-client/lib/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/arraybuffer.slice/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/after/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/keys.js"},{"deps":{},"path":"preview-scripts/__node_modules/blob/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/utf8.js"},{"deps":{"../../../../process/browser.js":70,"./debug":93},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"},{"deps":{"./globalThis":94,"has-cors":95},"path":"preview-scripts/__node_modules/engine.io-client/lib/xmlhttprequest.js"},{"deps":{"xmlhttprequest-ssl":89,"component-emitter":59,"debug":87,"../globalThis":94,"component-inherit":96,"./polling":97},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-xhr.js"},{"deps":{"./polling":97,"../globalThis":94,"component-inherit":96},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-jsonp.js"},{"deps":{"../transport":81,"engine.io-parser":76,"parseqs":65,"component-inherit":96,"debug":87,"buffer":72,"ws":98,"yeast":99},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/websocket.js"},{"deps":{"ms":100},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/lib/globalThis.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-cors/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-inherit/index.js"},{"deps":{"../transport":81,"parseqs":65,"engine.io-parser":76,"component-inherit":96,"yeast":99,"debug":87,"xmlhttprequest-ssl":89},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{},"path":"preview-scripts/__node_modules/yeast/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/ms/index.js"}];
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
    