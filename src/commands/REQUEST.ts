import base = require('../base');
import urllib = require("url");
var request = require('sync-request');


interface IOpts {
    headers?: any;
    body: string|Buffer;
}

interface IResponse {
    statusCode: number;
    headers: any;
    body: Buffer;
}

// Execute synchronously a HTTP request.
function REQUEST(jssh: base.Probe) {

    function REQUEST(method, url, opts: IOpts): IResponse {
        if(!opts) {
            opts = {
                headers: null,
                body: null,
            };
        }

        // For convenience prepend 'http://' automatically.
        var parts = urllib.parse(url);
        if(!parts.protocol) url = 'http://' + url;

        return request(method, url, opts);
    }
    return REQUEST;
}

export = REQUEST;