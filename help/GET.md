# `GET`

Executes a HTTP `GET` request. If no protocol in `url` is provided, `'http://'` is prepended automatically.

Returns a string containing body of the response. For more detailed response info see `REQUEST`.

See also: `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD` and `request`. 

```typescript
GET(url: string, headers: any = {}): string
```

## Example

In *CoffeeScript*:

```coffeescript
GET 'example.com'
```