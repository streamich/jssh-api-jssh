# `grep`

Reads input string from given files and returns a string containing all lines of the file 
that match the given regex_filter. Wildcard * accepted.

## Definition

    grep(options?: string = '', regex_filter: string, ...files: string[]): string
    grep(options?: string = '', regex_filter: string, files: string[]): string

## Options

 - `-v` -- Inverse the sense of the regex and print the lines not matching the criteria.

## Examples

```javascript
grep('-v', 'GLOBAL_VARIABLE', '*.js');
grep('GLOBAL_VARIABLE', '*.js');
```

