function test(jssh) {
    return function test() {
        var b = jssh.wrap(require('shelljs/src/test'), arguments);
        return jssh.returnBoolean(b);
    };
}
module.exports = test;
