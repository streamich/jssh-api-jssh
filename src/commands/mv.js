function mv(jssh) {
    return function mv() {
        jssh.wrap(require('shelljs/src/mv'), arguments);
    };
}
module.exports = mv;
