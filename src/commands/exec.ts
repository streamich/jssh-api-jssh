import base = require("../base");
var _exec = require('shelljs/src/exec');


function exec(jssh: base.Probe) {


    return function exec(cmd, opts, sync) {
        // `exec` has different API than all other `shelljs` commands (no options).
        var res = _exec(cmd, opts, sync);
        return jssh.return(res);
    }
}

export = exec;