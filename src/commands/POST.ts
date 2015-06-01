import base = require('../base');


function POST(jssh: base.Probe) {
    var request = jssh.dependency('request');

    /**
     * Execute a HTTP POST request.
     * @param url
     * @param body
     * @param headers
     * @param opts
     * @returns {string}
     * @constructor
     */
    function POST(url, body: string|Buffer = '', headers: any = {}, opts: any = {}): string {
        opts.body = body;
        opts.headers = headers;
        var response = request('POST', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return POST;
}

export = POST;