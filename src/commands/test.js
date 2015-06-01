function test(jssh) {
    return function test() {
        var b = jssh.wrap(require('shelljs/src/test'), arguments);
        return this.returnBoolean(b);
    };
}
module.exports = test;
