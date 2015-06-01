function DELETE(jssh) {
    var REQUEST = jssh.dependency('REQUEST');
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
        var response = REQUEST('DELETE', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return DELETE;
}
module.exports = DELETE;
