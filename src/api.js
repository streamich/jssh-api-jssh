var base = require("./base");
String.prototype.to = new base.Probe('to').shell();
String.prototype.toEnd = new base.Probe('toEnd').shell();
var api = {
    exit: process.exit,
    env: process.env
};
// Exported commands with dependency injection.
// The actual code is not loaded from the disk until the command is called for the first time.
[
    '$',
    'glob',
    'id',
    'chown',
    'nothing',
    'cd',
    'find',
    'echo',
    'print',
    'which',
    'help',
    'cat',
    'pwd',
    'request',
    'GET',
    'DELETE',
    'HEAD',
    'POST',
    'PUT',
    'PATCH',
    'IP',
    'ls',
    'cp',
    'rm',
    'mv',
    'mkdir',
    'test',
    'sed',
    'grep',
    'dirs',
    'pushd',
    'popd',
    'ln',
    'chmod',
    'tempdir',
    'error',
    'exec',
    'to',
    'toEnd',
].forEach(function (cmd) {
    var probe = new base.Probe(cmd);
    probe.helpFile = __dirname + '/../help/' + cmd + '.md';
    api[cmd] = probe.shell();
});
// Beause two files `head.js` and `HEAD.js` conflict.
var probe = new base.Probe('head');
probe.cmdFile = '_head';
probe.helpFile = __dirname + '/../help/_head.md';
api['head'] = probe.shell();
module.exports = api;
