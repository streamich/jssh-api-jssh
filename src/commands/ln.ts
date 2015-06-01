import base = require("../base");


function ln(jssh: base.Probe) {

    return function ln() { jssh.wrap(require('shelljs/src/ln'), arguments); }
}

export = ln;