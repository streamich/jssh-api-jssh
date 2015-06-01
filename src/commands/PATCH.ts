import base = require('../base');


function PATCH(jssh: base.Probe) {
    var request = jssh.dependency('request');

    /**
     * Execute a HTTP PATCH request.
     * @param url
     * @param body
     * @param headers
     * @param opts
     * @returns {string}
     * @constructor
     */
    function PATCH(url, body: string|Buffer = '', headers: any = {}, opts: any = {}): string {
        opts.body = body;
        opts.headers = headers;
        var response = request('PATCH', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return PATCH;
}

export = PATCH;