import base = require('../base');


function PUT(jssh: base.Probe) {
    var request = jssh.dependency('v');

    /**
     * Execute a HTTP PUT request.
     * @param url
     * @param body
     * @param headers
     * @param opts
     * @returns {string}
     * @constructor
     */
    function PUT(url, body: string|Buffer = '', headers: any = {}, opts: any = {}): string {
        opts.body = body;
        opts.headers = headers;
        var response = request('PUT', url, opts);
        return response.body.toString();
    }
    return PUT;
}

export = PUT;