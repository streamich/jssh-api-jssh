import base = require("../base");


// Command that does nothing, useful as a template for creating new commands.
function error(jssh: base.Probe) {
    var shelljs_common = require("shelljs/src/common");

    function error() {

        // TODO: Make this more general, rather than `shelljs` specific.
        return jssh.return(shelljs_common.state.error);

    }
    return error;
}

export = error;