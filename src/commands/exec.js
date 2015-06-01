var _exec = require('shelljs/src/exec');
function exec(jssh) {
    return function exec(cmd, opts, sync) {
        // `exec` has different API than all other `shelljs` commands (no options).
        var res = _exec(cmd, opts, sync);
        return jssh.return(res);
    };
}
module.exports = exec;
