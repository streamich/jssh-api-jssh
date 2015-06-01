import base = require('../base');
import fs = require('fs');


function cd(jssh: base.Probe) {

    /**
     * Change current working directory.
     * @param dir {string}
     */
    function cd(dir: string = '') {
        var error = jssh.error(dir);

        if(!dir) error('Directory not specified');
        if(!fs.existsSync(dir)) error('No such file or directory.');
        if(!fs.statSync(dir).isDirectory()) error('Not a directory.');

        process.chdir(dir);
    }
    return cd;
}

export = cd;