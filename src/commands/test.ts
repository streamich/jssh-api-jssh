import base = require("../base");


function test(jssh: base.Probe) {

    return function test() {
        var b = jssh.wrap(require('shelljs/src/test'), arguments);
        return this.returnBoolean(b);
    }
}

export = test;