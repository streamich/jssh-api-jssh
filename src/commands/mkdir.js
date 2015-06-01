function mkdir(jssh) {
    return function mkdir() {
        jssh.wrap(require('shelljs/src/mkdir'), arguments);
    };
}
module.exports = mkdir;
