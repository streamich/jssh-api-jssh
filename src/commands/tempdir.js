function tempdir(jssh) {
    return function tempdir() {
        var res = jssh.wrap(require('shelljs/src/tempdir'), arguments);
        return jssh.returnString(res);
    };
}
module.exports = tempdir;
