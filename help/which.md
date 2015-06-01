# `which`

Like the unix which utility.

Finds the first instance of a specified executable in the `PATH` environment variable. 
Does not cache the results, so hash -r is not needed when the `PATH` changes.

This command uses [`which`](http://npmjs.com/package/which) package.

## Definition

    which(command: string): string

## Examples
```javacsript
var nodeExec = which('node');
```