import base = require("../base");
var _proxy = require('shelljs/src/cp');


function cp(jssh: base.Probe) {

    function cp() {
        jssh.wrap(_proxy, arguments);
    }
    return cp;
}

export = cp;