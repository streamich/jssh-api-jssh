import base = require("./base");


String.prototype.to = new base.Probe('to').shell();
String.prototype.toEnd = new base.Probe('toEnd').shell();

// BASH-ish commands
export = api;

var api: any = {
    exit: process.exit,
    env: process.env,
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

    'REQUEST',
    'GET',
    'DELETE',
    'HEAD',
    'POST',
    'PUT',
    'PATCH',
    'IP',

    // Proxied to `shelljs` package.
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

    // These functions are attached to `String.prototype`, but we also export them
    // there to make help on them available.
    'to',
    'toEnd',
].forEach((cmd) => {
    var probe = new base.Probe(cmd);
    probe.helpFile = __dirname + '/../help/' + cmd + '.md';
    api[cmd] = probe.shell();
});
