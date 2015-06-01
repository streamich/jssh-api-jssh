# `PUT`

Executes a HTTP `PUT` request. If no protocol in `url` is provided, `'http://'` is prepended automatically.

Returns a string containing body of the response. For more detailed response info see `REQUEST`.

See also: `PATCH`, `POST`, `GET`, `DELETE`, `HEAD` and `REQUEST`. 

```typescript
PUT(url: string, body: string|Buffer = '', headers: any = {}): string
```

## Example

In *CoffeeScript*:

```coffeescript
PUT 'example.com', JSON.stringify
    id: 123
    name: 'New Name'
```