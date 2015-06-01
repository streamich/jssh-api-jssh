function HEAD(jssh) {
    var REQUEST = jssh.dependency('REQUEST');
    /**
     * Execute a plain HTTP HEAD request.
     * @param url
     * @param headers
     * @param opts
     * @returns {string}
     * @constructor
     */
    function HEAD(url, headers, opts) {
        if (headers === void 0) { headers = {}; }
        if (opts === void 0) { opts = {}; }
        opts.headers = headers;
        var response = REQUEST('HEAD', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return HEAD;
}
module.exports = HEAD;
