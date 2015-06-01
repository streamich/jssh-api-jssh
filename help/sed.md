# `sed`

Reads an input string from file and performs a JavaScript `replace()` on the input using 
the given search regex and replacement string or function. Returns the new string after replacement.

## Definition

    sed([options ,] search_regex, replacement, file)

## Options

 - `-i` -- Replace contents of 'file' in-place. **Note that no backups will be created!**

## Examples

```javascript
sed('-i', 'PROGRAM_VERSION', 'v0.1.3', 'source.js');
sed(/.*DELETE_THIS_LINE.*\n/, '', 'source.js');
```