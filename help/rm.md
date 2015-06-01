# `rm`

Removes files. The wildcard `*` is accepted.

    rm(options: string = '', ...files: string[])
    rm(options: string = '', files: string[])
    rm([options ,] file [, file ...])
    rm([options ,] file_array)

## Options

 - `-f` -- Force
 - `-r`, `-R` -- Recursive

## Examples

```javascript
rm('-rf', '/tmp/*');
rm('some_file.txt', 'another_file.txt');
rm(['some_file.txt', 'another_file.txt']); // Same as above.
```