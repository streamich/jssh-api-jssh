# `chmod`

Alters the permissions of a file or directory by either specifying the
absolute permissions in octal form or expressing the changes in symbols.
This command tries to mimic the POSIX behavior as much as possible.
Notable exceptions:

 + In symbolic modes, 'a-r' and '-r' are identical.  No consideration is given to the umask.
 + There is no "quiet" option since default behavior is to run silent.

## Usage

    chmod(octal_mode || octal_string, file)
    chmod(symbolic_mode, file)

## Available options
 + `-v`: output a diagnostic for every file processed
 + `-c`: like verbose but report only when a change is made
 + `-R`: change files and directories recursively

## Examples:

```javascript
chmod(755, '/Users/brandon');
chmod('755', '/Users/brandon'); // Same as above.
chmod('u+x', '/Users/brandon');
```