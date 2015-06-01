var exec = require("shelljs/src/exec");
function $(jssh) {
    jssh.helpFile = __dirname + '/../../help/$.md';
    /**
     * Same as `exec` command from `shelljs` package, but instead returns just the command output.
     * @param cmd {string}
     * @param opts
     * @param cb
     * @returns {string}
     */
    function $(cmd, opts, cb) {
        var out = exec(cmd, opts, cb);
        return jssh.returnString(out.output);
    }
    return $;
}
module.exports = $;
