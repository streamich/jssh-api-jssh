var util = require('util');
function print(jssh) {
    jssh.helpFile = __dirname + '/../../help/print.md';
    function print(msg, depth) {
        if (depth === void 0) { depth = 3; }
        var opts = {
            colors: true,
            depth: 3
        };
        if (typeof depth == "number") {
            opts.depth = depth;
        }
        else {
            for (var prop in depth)
                opts[prop] = depth[prop];
        }
        console.log(util.inspect(msg, opts));
    }
    return print;
}
module.exports = print;
