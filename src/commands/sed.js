function sed(jssh) {
    return function sed() {
        var res = jssh.wrap(require('shelljs/src/sed'), arguments);
        return jssh.returnString(res);
    };
}
module.exports = sed;
