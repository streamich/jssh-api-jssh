import base = require("../base");


function mv(jssh: base.Probe) {

    return function mv() { jssh.wrap(require('shelljs/src/mv'), arguments); }
}

export = mv;