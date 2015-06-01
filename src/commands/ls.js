var _proxy = require('shelljs/src/ls');
function ls(jssh) {
    function ls(opts, paths) {
        var list = jssh.wrap(_proxy, arguments);
        return jssh.returnArray(list);
    }
    return ls;
}
module.exports = ls;
