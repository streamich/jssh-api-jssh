# `find`

Returns array of all files (however deep) in the given paths.

The main difference from `ls('-R', path)` is that the resulting file names
include the base directories, e.g. `lib/resources/file1` instead of just `file1`.

```typescript
find(path: string, ...paths: string[])
find(paths: string[])
```

## Examples

```javascript
find('src', 'lib');
find(['src', 'lib']); // same as above
find('.').filter(function(file) { return file.match(/\.js$/); });
```