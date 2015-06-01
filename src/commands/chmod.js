function chmod(jssh) {
    return function chmod() {
        jssh.wrap(require('shelljs/src/chmod'), arguments);
    };
}
module.exports = chmod;
