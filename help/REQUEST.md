# `REQUEST`

This command is a proxy used by `PATCH`, `POST`, `GET`, `DELETE`, `HEAD` and `PUT` to execute HTTP requests.

If no protocol in `url` is provided, `'http://'` is prepended automatically.

## Definition

```typescript
REQUEST(method: string, url: string, opts: any = {body?: string, headers?: any}): Response
```

`method` is one of `PATCH`, `POST`, `GET`, `DELETE`, `HEAD` and `PUT`.

## Returns

A `Response` object.

Note that even for status codes that represent an error, the request function will still return a response. 
You can call getBody if you want to error on invalid status codes. The response has the following properties:

 - `statusCode` -- a number representing the HTTP status code
 - `headers` -- http response headers
 - `body` -- a string if in the browser or a buffer if on the server

It also has a method `response.getBody(encoding?: string)`.

## Example

```javascript
var response = REQUEST('GET', 'http://example.com', {headers: {'X-Auth-Key': "XXXXXXXXXXX"}});
if(response.statusCode == 200) {
    console.log("Response was successful!");
    console.log(response.body.toString());
} else {
    console.log("Request error: " + response.statusCode);
}
```