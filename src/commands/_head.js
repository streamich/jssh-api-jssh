var fs = require('fs');
function head(jssh) {
    var glob = jssh.dependency('glob');
    function head(len, file) {
        if (typeof file == "undefined") {
            file = len;
            len = 250;
        }
        var error = jssh.error(len, file);
        if (typeof file != 'string')
            error('File name must be a string.');
        if (!file)
            error('File not specified.');
        if (!fs.existsSync(file))
            error('File does not exist.');
        var stats = fs.statSync(file);
        if (!stats.isFile())
            error('Not a file.');
        var fd = fs.openSync(file, 'r');
        len = Math.min(stats.size, len);
        var buf = new Buffer(len);
        var n = fs.readSync(fd, buf, 0, len, 0);
        fs.closeSync(fd);
        return buf.toString();
    }
    return head;
}
module.exports = head;
