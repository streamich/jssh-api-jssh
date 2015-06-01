# `glob`

Given a glob string or a list of glob strings returns all matching files.

This uses [`glob`](http://npmjs.com/package/glob) package internally. The optional `opts` parameter contains
options you would provide to the `glob` package.

## Definition

```typescript
glob(patterns: string|string[], opts?: any = {}): string[]
```

## Example

In *CoffeeScript*:

```coffeescript
glob '*.js'
```