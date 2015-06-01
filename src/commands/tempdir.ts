import base = require("../base");


function tempdir(jssh: base.Probe) {

    return function tempdir() {
        var res = jssh.wrap(require('shelljs/src/tempdir'), arguments);
        return jssh.returnString(res);
    }
}

export = tempdir;