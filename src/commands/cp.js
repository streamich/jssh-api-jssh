var _proxy = require('shelljs/src/cp');
function cp(jssh) {
    function cp() {
        jssh.wrap(_proxy, arguments);
    }
    return cp;
}
module.exports = cp;
