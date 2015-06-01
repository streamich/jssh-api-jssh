var path = require('path');
var fs = require('fs');
function toEnd(jssh) {
    function toEnd(file) {
        if (!file)
            jssh.error(file)('Wrong arguments.');
        if (!fs.existsSync(path.dirname(file)))
            jssh.error(file)('No such file or directory.');
        try {
            fs.appendFileSync(file, this.toString(), 'utf8');
        }
        catch (e) {
            jssh.error(file)('Could not write to file (code ' + e.code + ').');
        }
    }
    return toEnd;
}
module.exports = toEnd;
