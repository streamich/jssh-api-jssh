var lib = require("../src/api.js");
//var lib = require("/code/src/api.js");
var id = lib.id;
var chown = lib.chown;
var glob = lib.glob;
var $ = lib.$;


//console.log(posix.getpwnam(posix.getuid()));
//console.log(id("", "redis"));
//console.log(id());
//console.log(id("u", "redis"));
//console.log(id("u", "root"));
//console.log(id("u"));
//console.log(id("g", "redis"));
//console.log(id("g"));
//
//chown("redis", "redis", "/tmp/test");
//chown("root", "root", "/tmp/test");

//console.log(glob("/code/**/*.js"));
//console.log(glob("*.js"));
//console.log(glob(["*.js", "/code/ts*.json"]));

//console.log(lib.cat('package.json'));
//console.log(lib.print.help());
//lib.help(lib.$);
//console.log(lib.cat.help());
lib.help(lib.to);
//lib.help();

//$("ls");
//console.log(lib.cd('..'));
//console.log(lib.ls(''));
//$('ls');
//console.log(lib.which('which'));
//console.log(lib.which('redis-server'));
//console.log(lib.which('git'));
//$("ls -l");


//console.log(lib.ls());
//console.log(lib.ls('-A', '/'));
//console.log(lib.find(['test', 'typings']));
//lib.cp('tsd.json', 'tsd2.json');
//lib.rm('tsd2.json');
//console.log(lib.test('-f', 'tsd2.json'));

//"test".toEnd('ttt.js');

//console.log(lib.cat('', '/code/tsd.json'));
//console.log(lib.false());
//console.log(lib.pwd());
//console.log(lib.which('git'));

//console.log(lib.GET('http://google.com'));


//var request = require('sync-request');
//var res = request('GET', 'http://example.com');
//console.log(res.body.toString());
