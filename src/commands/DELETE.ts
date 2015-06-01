import base = require('../base');


function DELETE(jssh: base.Probe) {
    var REQUEST = jssh.dependency('REQUEST');

    /**
     * Execute a HTTP DELETE request.
     * @param url
     * @param headers
     * @param opts
     * @returns {string}
     */
    function DELETE(url, headers: any = {}, opts: any = {}): string {
        opts.headers = headers;
        var response = REQUEST('DELETE', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return DELETE;
}

export = DELETE;