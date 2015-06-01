# `POST`

Executes a HTTP `POST` request. If no protocol in `url` is provided, `'http://'` is prepended automatically.

Returns a string containing body of the response. For more detailed response info see `REQUEST`.

See also: `PATCH`, `PUT`, `GET`, `DELETE`, `HEAD` and `REQUEST`. 

```typescript
POST(url: string, body: string|Buffer = '', headers: any = {}): string
```

## Example

In *CoffeeScript*:

```coffeescript
POST 'example.com', JSON.stringify
    id: 123
    name: 'New Name'
```