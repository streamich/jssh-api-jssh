import base = require("../base");


function mkdir(jssh: base.Probe) {

    return function mkdir() { jssh.wrap(require('shelljs/src/mkdir'), arguments); }
}

export = mkdir;