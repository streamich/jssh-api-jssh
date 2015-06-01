function popd(jssh) {
    return function popd() {
        var res = jssh.wrap(require('shelljs/src/dirs').popd, arguments);
        return jssh.returnArray(res);
    };
}
module.exports = popd;
