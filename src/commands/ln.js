function ln(jssh) {
    return function ln() {
        jssh.wrap(require('shelljs/src/ln'), arguments);
    };
}
module.exports = ln;
