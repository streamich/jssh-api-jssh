var marked = require('marked');
var marked_terminal = require('marked-terminal');
var chalk = require('chalk');
// Add spacing around heading.
var _heading = marked_terminal.prototype.heading;
marked_terminal.prototype.heading = function () {
    var res = _heading.apply(this, arguments);
    return "\n" + res + "\n";
};
marked.setOptions({
    renderer: new marked_terminal({
        codespan: chalk.cyan,
        width: 65,
        reflowText: true
    })
});
function help(jssh) {
    //jssh.helpFile = __dirname + '/../../help/print.md';
    // TODO: Should this be some function from `jssh` -> `jssh.logPlain`.
    var logger = console.log.bind(console);
    function no_help() {
        logger('Help is not available for this function.');
    }
    function help(func) {
        if (!func)
            return help(jssh.shell());
        if (typeof func.help == 'function') {
            var md = func.help();
            if (md) {
                var result = marked(md);
                // Add left margin.
                var margin = '  ';
                result = margin + result.replace(/\n/g, "\n" + margin);
                logger(result);
            }
            else {
                no_help();
            }
        }
        else {
            no_help();
        }
    }
    return help;
}
module.exports = help;
