import base = require("../base");


// Command that does nothing, useful as a template for creating new commands.
function nothing(jssh: base.Probe) {


    function nothing() {

    }
    return nothing;
}

export = nothing;