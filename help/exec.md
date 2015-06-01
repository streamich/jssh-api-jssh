# `exec`

Executes the given command synchronously, unless otherwise specified. When in synchronous mode 
returns the object `{ code:..., output:... }`, containing the program's output (`stdout` + `stderr`) and its 
exit code. Otherwise returns the child process object, and the callback gets the arguments (`code`, `output`).

*Note:* For long-lived processes, it's best to run `exec()` asynchronously as the current synchronous 
implementation uses a lot of CPU. This should be getting fixed soon.

```typescript
exec(command: string, options: any = {}, callback?: () => void)
```

## Options

All false by default.

 - `async` -- Asynchronous execution. Defaults to true if a callback is provided.
 - `silent` -- Do not echo program output to console.

## Examples

```javascript
var version = exec('node --version', {silent:true}).output;

var child = exec('some_long_running_process', {async:true});
child.stdout.on('data', function(data) {
    /* ... do something with data ... */
});

exec('some_long_running_process', function(code, output) {
    console.log('Exit code:', code);
    console.log('Program output:', output);
});
```