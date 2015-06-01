var urllib = require("url");
var request = require('sync-request');
// Execute synchronously a HTTP request.
function REQUEST(jssh) {
    function REQUEST(method, url, opts) {
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
        return request(method, url, opts);
    }
    return REQUEST;
}
module.exports = REQUEST;
