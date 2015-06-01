function DELETE(jssh) {
    var request = jssh.dependency('request');
    /**
     * Execute a HTTP DELETE request.
     * @param url
     * @param headers
     * @param opts
     * @returns {string}
     */
    function DELETE(url, headers, opts) {
        if (headers === void 0) { headers = {}; }
        if (opts === void 0) { opts = {}; }
        opts.headers = headers;
        var response = request('DELETE', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return DELETE;
}
module.exports = DELETE;
