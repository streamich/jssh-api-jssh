# `HEAD`

Executes a HTTP `HEAD` request. If no protocol in `url` is provided, `'http://'` is prepended automatically.

Returns a string containing body of the response. For more detailed response info see `REQUEST`.

See also: `POST`, `PUT`, `PATCH`, `DELETE`, `GET` and `REQUEST`. 

```typescript
HEAD(url: string, headers: any = {}): string
```

## Example

In *CoffeeScript*:

```coffeescript
GET 'example.com'
```