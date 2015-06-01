var urllib = require("url");
var requestlib = require('sync-request');
// Execute synchronously a HTTP request.
function request(jssh) {
    function request(method, url, opts) {
        if (!opts) {
            opts = {
                headers: null,
                body: null
            };
        }
        // For convenience prepend 'http://' automatically.
        var parts = urllib.parse(url);
        if (!parts.protocol)
            url = 'http://' + url;
        return requestlib(method, url, opts);
    }
    return request;
}
module.exports = request;
