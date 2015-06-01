// Execute a vanilla HTTP GET request.
function GET(jssh) {
    var REQUEST = jssh.dependency('REQUEST');
    /**
     * Execute a plain HTTP GET request.
     * @param url
     * @param headers
     * @param opts
     * @returns {string}
     * @constructor
     */
    function GET(url, headers, opts) {
        if (headers === void 0) { headers = {}; }
        if (opts === void 0) { opts = {}; }
        opts.headers = headers;
        var response = REQUEST('GET', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return GET;
}
module.exports = GET;
