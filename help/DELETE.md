# `DELETE`

Executes a HTTP `DELETE` request. If no protocol in `url` is provided, `'http://'` is prepended automatically.

Returns a string containing body of the response. For more detailed response info see `REQUEST`.

See also: `POST`, `PUT`, `PATCH`, `GET`, `HEAD` and `request`. 

```typescript
DELETE(url: string, headers: any = {}): string
```

## Example

In *CoffeeScript*:

```coffeescript
DELETE 'example.com'
```