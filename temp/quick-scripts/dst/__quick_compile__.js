
(function () {
var scripts = [{"deps":{"./assets/scripts/Controller/CommonUI/GameStartOverlay":2,"./assets/scripts/Jang/MazeGenerator":3,"./assets/scripts/Sim/RememberGame/RememberGameExplain":4,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic":5,"./assets/scripts/Yu/3Match/3MatchManager":6,"./assets/scripts/Controller/Multi/MultiGameList":7,"./assets/scripts/Controller/MyPage/MyRecordController":8,"./assets/scripts/Controller/Single/SingleGameOver":9,"./assets/scripts/Sim/BlockCountGame/BlockCountExplain":10,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn":11,"./assets/scripts/Jang/MazeLogic":12,"./assets/scripts/Yu/MoleGame/MoleGameScene":13,"./assets/scripts/Jang/MazeRenderer":14,"./assets/scripts/Jang/MazeSingleGameManager":15,"./assets/scripts/Jang/MazePlayerController":16,"./assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController":17,"./assets/scripts/Controller/CommonUI/MainMenuScene":18,"./assets/scripts/Jang/MazeGameData":19,"./assets/scripts/Jang/MazeUIManager":20,"./assets/scripts/Jang/Maze_explainSceneManager":21,"./assets/scripts/Controller/Multi/MultiGameWait":22,"./assets/scripts/Controller/CommonUI/LoginManager":23,"./assets/scripts/Controller/Multi/MultiPlayConnect":24,"./assets/scripts/Controller/Multi/MultiGameResult":25,"./assets/scripts/Jang/MazeGameOverManager":26,"./assets/scripts/Controller/Multi/MultiFlowController":27,"./assets/scripts/Controller/CommonUI/GameState":28,"./assets/scripts/Controller/Single/SingleGameList":29,"./assets/scripts/Controller/MyPage/MyInfoController":30,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene":31,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button":32,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA":33,"./assets/scripts/Sim/BlockCountGame/BlockCountGameManager":34,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager":35,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init":36,"./assets/scripts/Sim/RememberGame/RememberGameController":37,"./assets/scripts/Yu/3Match/3MExplain":38,"./assets/scripts/Yu/3Match/Tile":39,"./assets/scripts/Yu/MoleGame/MoleExplain":40,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init":41,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic":42,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene":43,"./assets/scripts/Yu/MultiMoleGame/MultiGuestViewer":44,"./assets/scripts/Yu/3Match/3MatchBoard":45,"./assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene":46,"./assets/sockets/socket":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{"socket.io-client":47},"path":"preview-scripts/assets/sockets/socket.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameStartOverlay.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeGenerator.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameExplain.js"},{"deps":{"./Reversecorrect_Show_QnA":33,"./Reversecorrect_Game_init":41},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic.js"},{"deps":{"../../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchManager.js"},{"deps":{"../CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyRecordController.js"},{"deps":{"../CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameOver.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountExplain.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn.js"},{"deps":{"./MazeGenerator":3,"./MazeRenderer":14},"path":"preview-scripts/assets/scripts/Jang/MazeLogic.js"},{"deps":{"../../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeRenderer.js"},{"deps":{"./MazeGameData":19,"./MazeLogic":12,"./MazePlayerController":16,"./MazeUIManager":20,"../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Jang/MazeSingleGameManager.js"},{"deps":{"./MazeGameData":19},"path":"preview-scripts/assets/scripts/Jang/MazePlayerController.js"},{"deps":{"./MultiplayerGameScene":46,"./MultiGuestViewer":44,"../../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerMoleGameController.js"},{"deps":{"../CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Controller/CommonUI/MainMenuScene.js"},{"deps":{"../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Jang/MazeGameData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeUIManager.js"},{"deps":{"./MazeGameData":19},"path":"preview-scripts/assets/scripts/Jang/Maze_explainSceneManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameWait.js"},{"deps":{"./GameState":28},"path":"preview-scripts/assets/scripts/Controller/CommonUI/LoginManager.js"},{"deps":{"../CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiPlayConnect.js"},{"deps":{"../CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameResult.js"},{"deps":{"./MazeGameData":19},"path":"preview-scripts/assets/scripts/Jang/MazeGameOverManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiFlowController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameState.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyInfoController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Load_Scene.js"},{"deps":{"./Reversecorrect_Game_logic":5},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA.js"},{"deps":{"../../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountGameManager.js"},{"deps":{"./Rottenacorn_acorn":11},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager.js"},{"deps":{"../../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init.js"},{"deps":{"../../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/3Match/3MExplain.js"},{"deps":{"./3MatchBoard":45},"path":"preview-scripts/assets/scripts/Yu/3Match/Tile.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleExplain.js"},{"deps":{"./Reversecorrect_Show_QnA":33,"../../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init.js"},{"deps":{"./Rottenacorn_acorn_manager":35,"./Rottenacorn_acorn":11,"./Rottenacorn_game_init":36},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_Load_Scene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiGuestViewer.js"},{"deps":{"./3MatchManager":6,"./Tile":39},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchBoard.js"},{"deps":{"../../Controller/CommonUI/GameState":28},"path":"preview-scripts/assets/scripts/Yu/MultiMoleGame/MultiplayerGameScene.js"},{"deps":{"./url":48,"socket.io-parser":51,"debug":52,"./socket":50,"./manager":49},"path":"preview-scripts/__node_modules/socket.io-client/lib/index.js"},{"deps":{"debug":52,"parseuri":54},"path":"preview-scripts/__node_modules/socket.io-client/lib/url.js"},{"deps":{"./socket":50,"socket.io-parser":51,"debug":52,"component-emitter":55,"component-bind":53,"backo2":56,"indexof":57,"./on":59,"engine.io-client":63},"path":"preview-scripts/__node_modules/socket.io-client/lib/manager.js"},{"deps":{"socket.io-parser":51,"./on":59,"debug":52,"component-bind":53,"component-emitter":55,"to-array":58,"parseqs":60,"has-binary2":61},"path":"preview-scripts/__node_modules/socket.io-client/lib/socket.js"},{"deps":{"debug":52,"component-emitter":55,"./binary":62,"isarray":64,"./is-buffer":65},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/index.js"},{"deps":{"../../../../process/browser.js":67,"./debug":66},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-bind/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseuri/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/backo2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/indexof/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/to-array/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/lib/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseqs/index.js"},{"deps":{"isarray":70,"buffer":68},"path":"preview-scripts/__node_modules/has-binary2/index.js"},{"deps":{"isarray":64,"./is-buffer":65},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/binary.js"},{"deps":{"engine.io-parser":72,"./socket":69},"path":"preview-scripts/__node_modules/engine.io-client/lib/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/isarray/index.js"},{"deps":{"buffer":68},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js"},{"deps":{"ms":71},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"base64-js":73,"ieee754":74,"isarray":77},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{"component-emitter":55,"indexof":57,"engine.io-parser":72,"parseuri":54,"parseqs":60,"./transport":76,"./transports/index":75,"debug":83},"path":"preview-scripts/__node_modules/engine.io-client/lib/socket.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-binary2/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/ms/index.js"},{"deps":{"has-binary2":61,"arraybuffer.slice":78,"after":79,"blob":80,"./keys":81,"./utf8":82,"base64-arraybuffer":84},"path":"preview-scripts/__node_modules/engine.io-parser/lib/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./polling-xhr":88,"xmlhttprequest-ssl":85,"./polling-jsonp":86,"./websocket":87},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/index.js"},{"deps":{"engine.io-parser":72,"component-emitter":55},"path":"preview-scripts/__node_modules/engine.io-client/lib/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/arraybuffer.slice/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/after/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/blob/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/keys.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/utf8.js"},{"deps":{"../../../../process/browser.js":67,"./debug":89},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"},{"deps":{"has-cors":90,"./globalThis":91},"path":"preview-scripts/__node_modules/engine.io-client/lib/xmlhttprequest.js"},{"deps":{"../globalThis":91,"component-inherit":94,"./polling":93},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-jsonp.js"},{"deps":{"../transport":76,"engine.io-parser":72,"parseqs":60,"debug":83,"buffer":68,"ws":92,"component-inherit":94,"yeast":95},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/websocket.js"},{"deps":{"xmlhttprequest-ssl":85,"./polling":93,"component-emitter":55,"component-inherit":94,"debug":83,"../globalThis":91},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-xhr.js"},{"deps":{"ms":96},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-cors/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/lib/globalThis.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{"../transport":76,"parseqs":60,"engine.io-parser":72,"component-inherit":94,"yeast":95,"debug":83,"xmlhttprequest-ssl":85},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-inherit/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/yeast/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/ms/index.js"}];
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
    