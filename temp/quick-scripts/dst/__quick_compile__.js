
(function () {
var scripts = [{"deps":{"./assets/scripts/Jang/MazeLogic":14,"./assets/scripts/Jang/MazePlayerController":15,"./assets/scripts/Jang/MazeRenderer":18,"./assets/scripts/Jang/MazeSingleGameManager":13,"./assets/scripts/Jang/MazeUIManager":2,"./assets/scripts/Jang/Maze_explainSceneManager":16,"./assets/scripts/Jang/MazeGameData":19,"./assets/scripts/Controller/CommonUI/LoginManager":12,"./assets/scripts/Controller/CommonUI/MainMenuScene":1,"./assets/scripts/Controller/CommonUI/GameStartOverlay":27,"./assets/scripts/Controller/Multi/MultiPlayConnect":8,"./assets/scripts/Controller/Multi/MultiGameWait":23,"./assets/scripts/Controller/MyPage/MyRecordController":32,"./assets/scripts/Controller/MyPage/MyInfoController":9,"./assets/scripts/Controller/Single/SingleGameOver":31,"./assets/scripts/Controller/Single/SingleGameList":10,"./assets/scripts/Controller/CommonUI/GameState":17,"./assets/scripts/Jang/MazeGameOverManager":20,"./assets/scripts/Sim/RememberGame/RememberGameController":3,"./assets/scripts/Sim/BlockCountGame/BlockCountGameManager":6,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic":30,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA":4,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button":22,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager":24,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init":7,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic":29,"./assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn":34,"./assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init":26,"./assets/scripts/Yu/3Match/3MatchManager":5,"./assets/scripts/Yu/3Match/Tile":33,"./assets/scripts/Yu/3Match/3MExplain":25,"./assets/scripts/Yu/MoleGame/MoleGameScene":11,"./assets/scripts/Yu/MoleGame/MoleExplain":28,"./assets/scripts/Yu/3Match/3MatchBoard":35,"./assets/scripts/Jang/MazeGenerator":21},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Controller/CommonUI/MainMenuScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeUIManager.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Sim/RememberGame/RememberGameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Show_QnA.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchManager.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Sim/BlockCountGame/BlockCountGameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_init.js"},{"deps":{"../CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiPlayConnect.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyInfoController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameList.js"},{"deps":{"../../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleGameScene.js"},{"deps":{"./GameState":17},"path":"preview-scripts/assets/scripts/Controller/CommonUI/LoginManager.js"},{"deps":{"./MazeGameData":19,"./MazeLogic":14,"./MazePlayerController":15,"./MazeUIManager":2},"path":"preview-scripts/assets/scripts/Jang/MazeSingleGameManager.js"},{"deps":{"./MazeGenerator":21,"./MazeRenderer":18},"path":"preview-scripts/assets/scripts/Jang/MazeLogic.js"},{"deps":{"./MazeGameData":19},"path":"preview-scripts/assets/scripts/Jang/MazePlayerController.js"},{"deps":{"./MazeGameData":19},"path":"preview-scripts/assets/scripts/Jang/Maze_explainSceneManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameState.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeRenderer.js"},{"deps":{"../Controller/CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Jang/MazeGameData.js"},{"deps":{"./MazeGameData":19},"path":"preview-scripts/assets/scripts/Jang/MazeGameOverManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Jang/MazeGenerator.js"},{"deps":{"./Reversecorrect_Game_logic":30},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Button.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/Multi/MultiGameWait.js"},{"deps":{"./Rottenacorn_acorn":34},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn_manager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/3Match/3MExplain.js"},{"deps":{"./Reversecorrect_Show_QnA":4},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_init.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/CommonUI/GameStartOverlay.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Yu/MoleGame/MoleExplain.js"},{"deps":{"./Rottenacorn_acorn_manager":24,"./Rottenacorn_acorn":34,"./Rottenacorn_game_init":7},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_game_logic.js"},{"deps":{"./Reversecorrect_Show_QnA":4,"./Reversecorrect_Game_init":26},"path":"preview-scripts/assets/scripts/Song/Reversecorrect_scripts/Reversecorrect_Game_logic.js"},{"deps":{"../CommonUI/GameState":17},"path":"preview-scripts/assets/scripts/Controller/Single/SingleGameOver.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Controller/MyPage/MyRecordController.js"},{"deps":{"./3MatchBoard":35},"path":"preview-scripts/assets/scripts/Yu/3Match/Tile.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Song/Rottenacorn_scripts/Rottenacorn_acorn.js"},{"deps":{"./3MatchManager":5,"./Tile":33},"path":"preview-scripts/assets/scripts/Yu/3Match/3MatchBoard.js"}];
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
    