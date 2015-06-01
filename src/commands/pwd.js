var path = require('path');
function pwd(jssh) {
    function pwd() {
        var pwd = path.resolve(process.cwd());
        return jssh.returnString(pwd);
    }
    return pwd;
}
module.exports = pwd;
