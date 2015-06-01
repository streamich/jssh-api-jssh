import base = require('../base');


var list = [
    "http://checkip.amazonaws.com",
    "http://icanhazip.com"
];


// Get a publis IP adress of the server.
function IP(jssh: base.Probe) {
    var GET = jssh.dependency('GET');

    function IP(): string {
        for(var i = 0; i < list.length; i++) {
            var ip = GET(list[i]);
            if(ip) return jssh.returnString(ip.trim());
        }

        jssh.error()('Could not resolve IP address.');
    }
    return IP;
}

export = IP;