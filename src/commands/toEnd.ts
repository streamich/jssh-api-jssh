import base = require("../base");
import path = require('path');
import fs = require('fs');


function toEnd(jssh: base.Probe) {


    function toEnd(file: string) {
        if(!file) jssh.error(file)('Wrong arguments.');
        if(!fs.existsSync(path.dirname(file))) jssh.error(file)('No such file or directory.');

        try {
            fs.appendFileSync(file, this.toString(), 'utf8');
        } catch(e) {
            jssh.error(file)('Could not write to file (code ' + e.code + ').');
        }
    }
    return toEnd;
}

export = toEnd;