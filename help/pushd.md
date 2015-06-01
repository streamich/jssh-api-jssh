# `pushd`

Save the current directory on the top of the directory stack and then cd to dir. 
With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.

## Definition

    pushd([options,] [dir | '-N' | '+N'])

## Options

 - `-n` -- Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated.

## Arguments

 - `dir` -- Makes the current working directory be the top of the stack, and then executes the equivalent of cd dir.
 - `+N` -- Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 - `-N` -- Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.

## Examples

```javascript
// process.cwd() === '/usr'
pushd('/etc'); // Returns /etc /usr
pushd('+1');   // Returns /usr /etc
```