import base = require("../base");


function chmod(jssh: base.Probe) {

    return function chmod() { jssh.wrap(require('shelljs/src/chmod'), arguments); }
}

export = chmod;