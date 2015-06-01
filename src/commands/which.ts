import base = require("../base");
var whichlib = require('which');


function which(jssh: base.Probe) {

    function which(executable: string) {
        try {
            var resolved = whichlib.sync(executable);
        } catch(e) {
            //jssh.error(executable)('Not found.');

            // Silently return `""`, as the BASH `which` does.
            // Then we can use this command to test if some executable is installed.
            return jssh.returnString('');
        }
        return jssh.returnString(resolved);
    }
    return which;
}

export = which;