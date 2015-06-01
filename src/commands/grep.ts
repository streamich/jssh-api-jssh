import base = require("../base");


function grep(jssh: base.Probe) {

    return function grep() {
        var res = jssh.wrap(require('shelljs/src/grep'), arguments);
        return jssh.returnString(res);
    }
}

export = grep;