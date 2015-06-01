function POST(jssh) {
    var REQUEST = jssh.dependency('REQUEST');
    /**
     * Execute a HTTP POST request.
     * @param url
     * @param body
     * @param headers
     * @param opts
     * @returns {string}
     * @constructor
     */
    function POST(url, body, headers, opts) {
        if (body === void 0) { body = ''; }
        if (headers === void 0) { headers = {}; }
        if (opts === void 0) { opts = {}; }
        opts.body = body;
        opts.headers = headers;
        var response = REQUEST('POST', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return POST;
}
module.exports = POST;
