import base = require("../base");


function sed(jssh: base.Probe) {

    return function sed() {
        var res = jssh.wrap(require('shelljs/src/sed'), arguments);
        return jssh.returnString(res);
    }
}

export = sed;