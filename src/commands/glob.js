var globlib = require("glob");
function glob() {
    /**
     * Given a glob string or a list of glob strings returns all matching files.
     * @param patterns {string|string[]} Glob strings.
     * @param opts {{}} Options as defined in `glob` package.
     * @returns {Array} A list of matching files.
     */
    return function glob(patterns, opts) {
        if (typeof patterns == "string")
            patterns = [patterns];
        var files = [];
        patterns.forEach(function (pattern) {
            files = files.concat(globlib.sync(pattern, opts));
        });
        return files;
    };
}
module.exports = glob;
