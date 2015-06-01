# `tempdir`

Searches and returns string containing a writable, platform-dependent temporary directory. 
Follows Python's [tempfile algorithm](https://docs.python.org/2/library/tempfile.html#tempfile.tempdir).

## Definition

    tempdir()

## Examples

```javascript
var tmp = tempdir(); // "/tmp" for most *nix platforms
```