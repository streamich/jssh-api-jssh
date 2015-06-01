import base = require("../base");


function popd(jssh: base.Probe) {

    return function popd() {
        var res = jssh.wrap(require('shelljs/src/dirs').popd, arguments);
        return jssh.returnArray(res);
    }
}

export = popd;