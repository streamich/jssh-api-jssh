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

- [`&`](./help/$.md) -- should be improved to become [*$uper prompt*](https://github.com/streamich/jssh-api-superprompt) in the future
- [`cat`](./help/cat.md)
- [`cd`](./help/cd.md)
- [`chmod`](./help/chmod.md)
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
- [`head`](./help/head.md)
- [`HEAD`](./help/HEAD.md)
- [`help`](./help/help.md)
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

## TODO

- Remove commands that require native module compilation from this package and put in a separate package instead, to
make these commands portable across platforms.

- Commands still to be implemented:

    - `tar`

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>