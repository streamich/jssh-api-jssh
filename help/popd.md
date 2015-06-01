# `popd`

When no arguments are given, popd removes the top directory from the stack and 
performs a `cd` to the new top directory. The elements are numbered from 0 starting at the 
first directory listed with dirs; i.e., `popd` is equivalent to `popd +0`. Returns an array 
of paths in the stack.

## Definition

    popd([options,] ['-N' | '+N'])

## Options

 - `-n` -- Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated.

## Arguments

 - `+N` -- Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
 - `-N` -- Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.

## Examples

```javascript
echo(process.cwd()); // '/usr'
pushd('/etc');       // '/etc /usr'
echo(process.cwd()); // '/etc'
popd();              // '/usr'
echo(process.cwd()); // '/usr'
```