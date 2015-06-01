import base = require("../base");


function dirs(jssh: base.Probe) {

    return function dirs() {
        var res = jssh.wrap(require('shelljs/src/dirs'), arguments);
        return jssh.returnArray(res);
    }
}

export = dirs;