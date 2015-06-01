import base = require("../base");


function pushd(jssh: base.Probe) {

    return function pushd() {
        var res = jssh.wrap(require('shelljs/src/dirs').pushd, arguments);
        return jssh.returnArray(res);
    }
}

export = pushd;