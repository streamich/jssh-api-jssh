# `ln`

Links `source` to `dest`. Use `-f` to force the link, should `dest` already exist.

## Definition

    ln(options, source, dest)
    ln(source, dest)

## Options

 - `-s` -- symlink
 - `-f` -- force

## Examples

```javascript
ln('file', 'newlink');
ln('-sf', 'file', 'existing');
```