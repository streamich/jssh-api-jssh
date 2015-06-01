import base = require("../base");
var globlib = require("glob");


function glob() {

    /**
     * Given a glob string or a list of glob strings returns all matching files.
     * @param patterns {string|string[]} Glob strings.
     * @param opts {{}} Options as defined in `glob` package.
     * @returns {Array} A list of matching files.
     */
    return function glob(patterns: string|string[], opts?: any) {
        if(typeof patterns == "string") patterns = <string[]> [patterns];
        var files = [];
        (<string[]> patterns).forEach((pattern) => {
            files = files.concat(globlib.sync(pattern, opts));
        });
        return files;
    };
}

export = glob;