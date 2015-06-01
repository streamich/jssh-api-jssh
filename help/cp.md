# `cp`

Copies files. The wildcard `*` is accepted.

    cp([options ,] source [,source ...], dest)
    cp([options ,] source_array, dest)

Available options:

 - `-f`: force
 - `-r`, `-R`: recursive

Examples:

```javascript
cp('file1', 'dir1');
cp('-Rf', '/tmp/*', '/usr/local/*', '/home/tmp');
cp('-Rf', ['/tmp/*', '/usr/local/*'], '/home/tmp'); // Same as above.
```