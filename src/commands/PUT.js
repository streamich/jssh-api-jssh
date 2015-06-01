function PUT(jssh) {
    var REQUEST = jssh.dependency('REQUEST');
    /**
     * Execute a HTTP PUT request.
     * @param url
     * @param body
     * @param headers
     * @param opts
     * @returns {string}
     * @constructor
     */
    function PUT(url, body, headers, opts) {
        if (body === void 0) { body = ''; }
        if (headers === void 0) { headers = {}; }
        if (opts === void 0) { opts = {}; }
        opts.body = body;
        opts.headers = headers;
        var response = REQUEST('PUT', url, opts);
        return response.body.toString();
    }
    return PUT;
}
module.exports = PUT;
