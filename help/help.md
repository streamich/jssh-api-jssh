# `help`

Get help for a command.

## Usage

```javascript
help(ls);
help(cd);
help(mkdir);
```

## Details

This function checks if the command has a `.help()` method attached to it, if yes, it treats the returned string as 
*Markdown* and pretty-prints it in console. You can get the raw *Markdown* hourself, for example:

```javascript
ls.help();
```