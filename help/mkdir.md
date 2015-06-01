# `mkdir`

Creates directories.

## Definition

    mkdir([options ,] dir [, dir ...])
    mkdir([options ,] dir_array)

## Options

 - `-p` -- Full path (will create intermediate dirs if necessary)

## Examples

```javascript
mkdir('-p', '/tmp/a/b/c/d', '/tmp/e/f/g');
mkdir('-p', ['/tmp/a/b/c/d', '/tmp/e/f/g']); // Same as above.
```