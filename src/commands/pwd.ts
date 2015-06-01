import base = require("../base");
import path = require('path');


function pwd(jssh: base.Probe) {


    function pwd() {
        var pwd = path.resolve(process.cwd());
        return jssh.returnString(pwd);
    }
    return pwd;
}

export = pwd;