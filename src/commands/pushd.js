function pushd(jssh) {
    return function pushd() {
        var res = jssh.wrap(require('shelljs/src/dirs').pushd, arguments);
        return jssh.returnArray(res);
    };
}
module.exports = pushd;
