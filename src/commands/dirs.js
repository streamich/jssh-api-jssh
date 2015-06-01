function dirs(jssh) {
    return function dirs() {
        var res = jssh.wrap(require('shelljs/src/dirs'), arguments);
        return jssh.returnArray(res);
    };
}
module.exports = dirs;
