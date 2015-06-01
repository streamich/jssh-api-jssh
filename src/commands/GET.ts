import base = require('../base');


// Execute a vanilla HTTP GET request.
function GET(jssh: base.Probe) {
    var REQUEST = jssh.dependency('REQUEST');

    /**
     * Execute a plain HTTP GET request.
     * @param url
     * @param headers
     * @param opts
     * @returns {string}
     * @constructor
     */
    function GET(url, headers: any = {}, opts: any = {}): string {
        opts.headers = headers;
        var response = REQUEST('GET', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return GET;
}

export = GET;