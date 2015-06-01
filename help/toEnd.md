# `String.prototype.toEnd`

Append string to a file. Analogous to the redirect-and-append operator `>>` in Unix, but works with JavaScript strings 
(such as those returned by `cat`, `grep`, etc).

## Definition

    String.prototype.toEnd(file: string)

## Examples

```javascript
cat('input.txt').toEnd('output.txt');
```