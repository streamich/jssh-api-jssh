function PATCH(jssh) {
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
    function PATCH(url, body, headers, opts) {
        if (body === void 0) { body = ''; }
        if (headers === void 0) { headers = {}; }
        if (opts === void 0) { opts = {}; }
        opts.body = body;
        opts.headers = headers;
        var response = request('PATCH', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return PATCH;
}
module.exports = PATCH;
