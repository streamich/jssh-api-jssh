import base = require("../base");


function rm(jssh: base.Probe) {

    return function rm() { jssh.wrap(require('shelljs/src/rm'), arguments); }
}

export = rm;