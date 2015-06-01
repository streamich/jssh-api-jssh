import base = require('../base');


function HEAD(jssh: base.Probe) {
    var request = jssh.dependency('request');

    /**
     * Execute a plain HTTP HEAD request.
     * @param url
     * @param headers
     * @param opts
     * @returns {string}
     * @constructor
     */
    function HEAD(url, headers: any = {}, opts: any = {}): string {
        opts.headers = headers;
        var response = request('HEAD', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return HEAD;
}

export = HEAD;