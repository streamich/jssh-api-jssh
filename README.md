# BASH-like Synchronous Commands for JavaScript Shell (`jssh`)

Future goal of this project is to implement in JavaScript shell commands for usage in `jssh` shell.

Currently, this package borrows almost all of its functionality from [`shelljs`](http://npmjs.com/package/shelljs).

This package does not load all the commands from disk on startup but only once the command is actually executed for the fist time.

## Usage

This package was created to be used with [`jssh`](http://npmjs.com/package/jssh) *JavaScript* shell, rather than standalone.

If you want to use a stable, tested version of synchronous shell-like commands in *JavaScript* use
[`shelljs`](http://npmjs.com/package/shelljs), which is tested in practice and unit-tests. Most of the commands in this
package are proxied to `shelljs`, anyways.

However, is you still want to use this package, just like with `shelljs`, you can export the commands to global namespace
and write your synchronous scripts in *JavaScript*:

```javascript
require('jssh-api-jssh/global')

html = GET('example.com')
html.to('example.html')
echo('Saved page to "example.html"')

ip = IP()
echo('Your IP is: ' + ip)
```

Or *CoffeeScript*:

```coffeescript
require 'jssh-api-jssh/global'

html = GET 'example.com'
html.to 'example.html'
echo 'Saved page to "example.html"'

ip = IP()
echo 'Your IP is: ' + ip
```

## Commands

- [`&`](./help/$.md)
- [`cat`](./help/cat.md)
- [`cd`](./help/cd.md)
- [`chmod`](./help/chmod.md)
- [`chown`](./help/chown.md)
- [`cp`](./help/cp.md)
- [`DELETE`](./help/DELETE.md)
- [`dirs`](./help/dirs.md)
- [`echo`](./help/echo.md)
- [`error`](./help/error.md)
- [`exec`](./help/exec.md)
- [`find`](./help/find.md)
- [`GET`](./help/GET.md)
- [`glob`](./help/glob.md)
- [`grep`](./help/grep.md)
- [`HEAD`](./help/HEAD.md)
- [`help`](./help/help.md)
- [`id`](./help/id.md)
- [`IP`](./help/IP.md)
- [`ln`](./help/ln.md)
- [`ls`](./help/ls.md)
- [`mkdir`](./help/mkdir.md)
- [`mv`](./help/mv.md)
- [`nothing`](./help/nothing.md)
- [`PATCH`](./help/PATCH.md)
- [`popd`](./help/popd.md)
- [`POST`](./help/POST.md)
- [`print`](./help/print.md)
- [`pushd`](./help/pushd.md)
- [`POST`](./help/POST.md)
- [`print`](./help/print.md)
- [`pushd`](./help/pushd.md)
- [`PUT`](./help/PUT.md)
- [`pwd`](./help/pwd.md)
- [`request`](./help/request.md)
- [`rm`](./help/rm.md)
- [`sed`](./help/sed.md)
- [`tempdir`](./help/tempdir.md)
- [`test`](./help/test.md)
- [`to`](./help/to.md)
- [`toEnd`](./help/toEnd.md)
- [`which`](./help/which.md)
