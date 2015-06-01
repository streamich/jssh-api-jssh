# `PATCH`

Executes a HTTP `PATCH` request. If no protocol in `url` is provided, `'http://'` is prepended automatically.

Returns a string containing body of the response. For more detailed response info see `REQUEST`.

See also: `POST`, `PUT`, `GET`, `DELETE`, `HEAD` and `request`. 

```typescript
PATCH(url: string, body: string|Buffer = '', headers: any = {}): string
```

## Example

In *CoffeeScript*:

```coffeescript
PATCH 'example.com', JSON.stringify
    id: 123
    name: 'New Name'
```