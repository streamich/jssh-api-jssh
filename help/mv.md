# `mv`

Moves files. The wildcard `*` is accepted.

## Definition

    mv(source [, source ...], dest')
    mv(source_array, dest')

## Options

 - `-f` -- Force

## Examples

```javascript
mv('-f', 'file', 'dir/');
mv('file1', 'file2', 'dir/');
mv(['file1', 'file2'], 'dir/'); // Same as above.
```