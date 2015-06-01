import base = require('../base');


function DELETE(jssh: base.Probe) {
    var request = jssh.dependency('request');

    /**
     * Execute a HTTP DELETE request.
     * @param url
     * @param headers
     * @param opts
     * @returns {string}
     */
    function DELETE(url, headers: any = {}, opts: any = {}): string {
        opts.headers = headers;
        var response = request('DELETE', url, opts);
        return jssh.returnString(response.body.toString());
    }
    return DELETE;
}

export = DELETE;