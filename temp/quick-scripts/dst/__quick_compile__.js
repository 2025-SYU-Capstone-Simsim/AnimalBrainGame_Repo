
(function () {
var scripts = [{"deps":{"./assets/scripts/Controller/CommonUI/GameState":2,"./assets/scripts/Sim/BlockCountGame/BlockCountExplain":3,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic":4,"./assets/scripts/Yu/3Match/Tile":5,"./assets/scripts/Controller/Multi/MultiGameList":6,"./assets/scripts/Controller/MyPage/MyInfoController":7,"./assets/scripts/Controller/Single/SingleGameOver":8,"./assets/scripts/Jang/MazeLogic":9,"./assets/scripts/Sim/RememberGame/RememberGameExplain":10,"./assets/scripts/Yu/MoleGame/MoleExplain":11,"./assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController":12,"./assets/scripts/Controller/CommonUI/StoryScene_Controller":13,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn":14,"./assets/scripts/Controller/SingleGameList":15,"./assets/scripts/Controller/CommonUI/LoginManager":16,"./assets/scripts/Controller/LoginManager":17,"./assets/scripts/Controller/Multi/MultiPlayConnect":18,"./assets/scripts/Controller/CommonUI/GameStartOverlay":19,"./assets/scripts/Controller/Multi/MultiGameResult":20,"./assets/scripts/Controller/MyPage/MyRecordController":21,"./assets/scripts/Controller/Multi/MultiFlowController":22,"./assets/scripts/Controller/Multi/MultiGameWait":23,"./assets/scripts/Jang/MazeGameOverManager":24,"./assets/scripts/Jang/MazeGenerator":25,"./assets/scripts/Controller/CommonUI/MainMenuScene":26,"./assets/scripts/Jang/MazePlayerController":27,"./assets/scripts/Jang/MazeRenderer":28,"./assets/scripts/Jang/MazeUIManager":29,"./assets/scripts/Jang/MazeSingleGameManager":30,"./assets/scripts/Controller/Single/SingleGameList":31,"./assets/scripts/Jang/MazeGameData":32,"./assets/scripts/Sim/BlockCountGame/BlockCountGameManager":33,"./assets/scripts/Sim/RememberGame/RememberGameController":34,"./assets/scripts/Jang/Maze_explainSceneManager":35,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA":36,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init":37,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button":38,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager":39,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene":40,"./assets/scripts/Yu/3Match/3MExplain":41,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init":42,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene":43,"./assets/scripts/Yu/3Match/3MatchManager":44,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic":45,"./assets/scripts/Yu/MoleGame/MoleGameScene":46,"./assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene":47,"./assets/scripts/Yu/MultiMoleGame/MultiGuestViewer":48,"./assets/scripts/Controller/MainMenuScene":49,"./assets/scripts/Yu/3Match/3MatchBoard":50,"./assets/sockets/socket":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{"socket.io-client":51},"path":"preview-scripts/assets/sockets/socket.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameState.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountExplain.js"},{"deps":{"./Reversecorrect_Show_QnA":36,"./Reversecorrect_Game_init":42},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic.js"},{"deps":{"./3MatchBoard":50},"path":"preview-scripts/assets/scripts/Yu/3Match/Tile.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyInfoController.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameOver.js"},{"deps":{"./MazeGenerator":25,"./MazeRenderer":28},"path":"preview-scripts/assets/scripts/Jang/MazeLogic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameExplain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleExplain.js"},{"deps":{"./MultiplayerGameScene":47,"./MultiGuestViewer":48,"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/StoryScene_Controller.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/SingleGameList.js"},{"deps":{"./GameState":2},"path":"preview-scripts/assets/scripts/Controller/CommonUI/LoginManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/LoginManager.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiPlayConnect.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameStartOverlay.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameResult.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyRecordController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiFlowController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameWait.js"},{"deps":{"./MazeGameData":32},"path":"preview-scripts/assets/scripts/Jang/MazeGameOverManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeGenerator.js"},{"deps":{"../CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Controller/CommonUI/MainMenuScene.js"},{"deps":{"./MazeGameData":32},"path":"preview-scripts/assets/scripts/Jang/MazePlayerController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeRenderer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeUIManager.js"},{"deps":{"./MazeGameData":32,"./MazeLogic":9,"./MazePlayerController":27,"./MazeUIManager":29,"../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Jang/MazeSingleGameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameList.js"},{"deps":{"../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Jang/MazeGameData.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountGameManager.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameController.js"},{"deps":{"./MazeGameData":32},"path":"preview-scripts/assets/scripts/Jang/Maze_explainSceneManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init.js"},{"deps":{"./Reversecorrect_Game_logic":4},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button.js"},{"deps":{"./Rottenacorn_acorn":14},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/3Match/3MExplain.js"},{"deps":{"./Reversecorrect_Show_QnA":36,"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchManager.js"},{"deps":{"./Rottenacorn_acorn_manager":39,"./Rottenacorn_acorn":14,"./Rottenacorn_game_init":37},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleGameScene.js"},{"deps":{"../../Controller/CommonUI/GameState":2},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiGuestViewer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MainMenuScene.js"},{"deps":{"./3MatchManager":44,"./Tile":5},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchBoard.js"},{"deps":{"./url":52,"socket.io-parser":56,"debug":55,"./socket":54,"./manager":53},"path":"preview-scripts/__node_modules/socket.io-client/lib/index.js"},{"deps":{"debug":55,"parseuri":57},"path":"preview-scripts/__node_modules/socket.io-client/lib/url.js"},{"deps":{"./socket":54,"socket.io-parser":56,"debug":55,"component-emitter":58,"component-bind":59,"backo2":60,"indexof":61,"./on":62,"engine.io-client":68},"path":"preview-scripts/__node_modules/socket.io-client/lib/manager.js"},{"deps":{"socket.io-parser":56,"./on":62,"debug":55,"component-emitter":58,"component-bind":59,"parseqs":63,"to-array":64,"has-binary2":65},"path":"preview-scripts/__node_modules/socket.io-client/lib/socket.js"},{"deps":{"../../../../process/browser.js":67,"./debug":69},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/browser.js"},{"deps":{"debug":55,"component-emitter":58,"./binary":66,"./is-buffer":70,"isarray":71},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseuri/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-bind/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/backo2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/indexof/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/lib/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseqs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/to-array/index.js"},{"deps":{"isarray":75,"buffer":72},"path":"preview-scripts/__node_modules/has-binary2/index.js"},{"deps":{"isarray":71,"./is-buffer":70},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/binary.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"engine.io-parser":76,"./socket":73},"path":"preview-scripts/__node_modules/engine.io-client/lib/index.js"},{"deps":{"ms":74},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/debug.js"},{"deps":{"buffer":72},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/isarray/index.js"},{"deps":{"base64-js":77,"ieee754":78,"isarray":81},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{"component-emitter":58,"indexof":61,"engine.io-parser":76,"parseuri":57,"parseqs":63,"./transport":80,"./transports/index":79,"debug":88},"path":"preview-scripts/__node_modules/engine.io-client/lib/socket.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/ms/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-binary2/node_modules/isarray/index.js"},{"deps":{"has-binary2":65,"after":82,"arraybuffer.slice":83,"blob":84,"./keys":85,"./utf8":86,"base64-arraybuffer":87},"path":"preview-scripts/__node_modules/engine.io-parser/lib/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./polling-jsonp":89,"./polling-xhr":91,"xmlhttprequest-ssl":90,"./websocket":92},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/index.js"},{"deps":{"engine.io-parser":76,"component-emitter":58},"path":"preview-scripts/__node_modules/engine.io-client/lib/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/after/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/arraybuffer.slice/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/blob/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/keys.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/utf8.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"},{"deps":{"../../../../process/browser.js":67,"./debug":94},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/browser.js"},{"deps":{"component-inherit":97,"../globalThis":95,"./polling":96},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-jsonp.js"},{"deps":{"./globalThis":95,"has-cors":98},"path":"preview-scripts/__node_modules/engine.io-client/lib/xmlhttprequest.js"},{"deps":{"xmlhttprequest-ssl":90,"./polling":96,"component-emitter":58,"debug":88,"../globalThis":95,"component-inherit":97},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-xhr.js"},{"deps":{"../transport":80,"engine.io-parser":76,"parseqs":63,"debug":88,"buffer":72,"component-inherit":97,"ws":93,"yeast":99},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/websocket.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{"ms":100},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/lib/globalThis.browser.js"},{"deps":{"../transport":80,"parseqs":63,"engine.io-parser":76,"component-inherit":97,"yeast":99,"debug":88,"xmlhttprequest-ssl":90},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-inherit/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-cors/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/yeast/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/ms/index.js"}];
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
    