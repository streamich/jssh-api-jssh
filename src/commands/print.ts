import base = require("../base");
import util = require('util');


function print(jssh: base.Probe) {
    jssh.helpFile = __dirname + '/../../help/print.md';

    function print(msg: any, depth: number|any = 3) {
        var opts = {
            colors: true,
            depth: 3,
        };

        if(typeof depth == "number") {
            opts.depth = depth;
        } else {
            for(var prop in depth) opts[prop] = depth[prop];
        }

        console.log(util.inspect(msg, opts));
    }
    return print;
}

export = print;