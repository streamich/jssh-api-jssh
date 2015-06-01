# `ls`

Returns array of files in the given path, or in current directory if no path provided.

## Definition

    ls([options ,] path [,path ...])
    ls([options ,] path_array)

## Options

 - `-R` -- Recursive
 - `-A` -- All files (include files beginning with `.`, except for `.` and `..`)

## Examples

```javascript
ls('projs/*.js');
ls('-R', '/users/me', '/tmp');
ls('-R', ['/users/me', '/tmp']); // Same as above.
```