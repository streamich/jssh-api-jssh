var path = require('path');
var fs = require('fs');
var clean_path = path.sep == '\\' ? function (file) {
    return file.replace(/\\/g, '/');
} : function (file) {
    return file;
};
function find(jssh) {
    var ls = jssh.dependency('ls');
    /**
     * Returns array of all files (however deep) in the given paths.
     *
     * The main difference from `ls('-R', path)` is that the resulting file names
     * include the base directories, e.g. `lib/resources/file1` instead of just `file1`.
     *
     *      find(path [,path ...])
     *      find(path_array)
     *
     * Examples:
     *
     * ```javascript
     * find('src', 'lib');
     * find(['src', 'lib']); // same as above
     * find('.').filter(function(file) { return file.match(/\.js$/); });
     * ```
     *
     * @param options
     * @param paths
     * @returns {*}
     */
    function _find(options) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        if (!paths.length)
            jssh.error(options, paths)('No path specified.');
        if (paths[0] instanceof Array)
            paths = (paths[0]);
        var list = [];
        paths.forEach(function (file) {
            file = clean_path(file);
            list.push(file);
            if (fs.statSync(file).isDirectory()) {
                // Comment from `shelljs`:
                // why not simply do ls('-R', paths)? because the output wouldn't give the base dirs
                // to get the base dir in the output, we need instead ls('-R', 'dir/*') for every directory
                ls('-RA', file + '/*').forEach(function (subfile) {
                    file = clean_path(subfile);
                    list.push(subfile);
                });
            }
        });
        return list;
    }
    function find() {
        var list = jssh.wrap(_find, arguments);
        return jssh.returnArray(list);
    }
    return find;
}
module.exports = find;
