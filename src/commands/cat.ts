import base = require('../base');
import fs = require('fs');


function cat(jssh: base.Probe) {
    var glob = jssh.dependency('glob');
    var error = jssh.error();

    /**
     * Experiment of wrapping a `shelljs` command into our dependency injection framework.
     * Adopted from `shelljs`:
     *
     * Returns a string containing the given file, or a concatenated string
     * containing the files if more than one file is given (a new line character is
     * introduced between each file).
     *
     * ```javascript
     * var str = cat('file*.txt');
     * var str = cat('file1', 'file2');
     * var str = cat(['file1', 'file2']); // same as above
     * ```
     * @param options {string}
     * @param glob_patterms {string|string[]}
     * @returns {string}
     */
    return function cat(glob_patterns?: string|string[]) {
        var cat = '';

        if(typeof glob_patterns == 'undefined') error('No paths given.');

        var files = glob(glob_patterns);
        files.forEach((file) => {
            if(!fs.existsSync(file)) error('No such file or directory: ' + file);
            cat += fs.readFileSync(file, 'utf8') + '\n';
        });

        var len = cat.length;
        if(cat[len - 1] === '\n') cat = cat.substring(0, len - 1);

        return jssh.returnString(cat);
    };
}

export = cat;
