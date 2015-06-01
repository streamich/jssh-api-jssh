function grep(jssh) {
    return function grep() {
        var res = jssh.wrap(require('shelljs/src/grep'), arguments);
        return jssh.returnString(res);
    };
}
module.exports = grep;
