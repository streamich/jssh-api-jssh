# `String.prototype.to`

Analogous to the redirection operator `>` in Unix, but works with JavaScript 
strings (such as those returned by `cat`, `grep`, etc).
*Like Unix redirections, `to()` will overwrite any existing file!*

## Definition

    String.prototype.to(file: string)

## Examples

```javascript
cat('input.txt').to('output.txt');
```