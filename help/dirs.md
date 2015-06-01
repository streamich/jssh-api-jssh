# `dirs`

Display the list of currently remembered directories. Returns an array of paths in the stack, 
or a single path if +N or -N was specified.

See also: `pushd`, `popd`.

    dirs([options | '+N' | '-N'])

## Options

 - `-c` -- Clears the directory stack by deleting all of the elements.

## Arguments

 - `+N` -- Displays the Nth directory (counting from the left of the list printed by dirs when invoked without options), starting with zero.
 - `-N` -- Displays the Nth directory (counting from the right of the list printed by dirs when invoked without options), starting with zero.
