import base = require("../base");
var _proxy = require('shelljs/src/ls');


function ls(jssh: base.Probe) {

    function ls(opts: string, paths: string|string[]) {
        var list = jssh.wrap(_proxy, arguments);
        return jssh.returnArray(list);
    }
    return ls;
}

export = ls;