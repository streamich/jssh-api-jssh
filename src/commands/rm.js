function rm(jssh) {
    return function rm() {
        jssh.wrap(require('shelljs/src/rm'), arguments);
    };
}
module.exports = rm;
