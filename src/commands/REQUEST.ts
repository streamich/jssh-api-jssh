import base = require('../base');
import urllib = require("url");
var requestlib = require('sync-request');


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
function request(jssh: base.Probe) {

    function request(method, url, opts: IOpts): IResponse {
        if(!opts) {
            opts = {
                headers: null,
                body: null,
            };
        }

        // For convenience prepend 'http://' automatically.
        var parts = urllib.parse(url);
        if(!parts.protocol) url = 'http://' + url;

        return requestlib(method, url, opts);
    }
    return request;
}

export = request;