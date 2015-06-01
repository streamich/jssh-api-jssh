# `test`

Evaluates expression using the available primaries and returns corresponding value.

## Definition

    test(options: string, path: string): boolean

## Options

Available expression primaries:

 - `-b` -- `true` if path is a block device
 - `-c` -- `true` if path is a character device
 - `-d` -- `true` if path is a directory
 - `-e` -- `true` if path exists
 - `-f` -- `true` if path is a regular file
 - `-L` -- `true` if path is a symboilc link
 - `-p` -- `true` if path is a pipe (FIFO)
 - `-S` -- `true` if path is a socket

## Examples

```javascript
if (test('-d', path)) { /* do something with dir */ };
if (!test('-f', path)) continue; // Skip if it's a regular file.
```