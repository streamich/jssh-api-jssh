# `cat`
     
Returns a string containing the given file, or a concatenated string
containing the files if more than one file is given (a new line character is
introduced between each file).
     
## Definition
  
    /**
     * @param options {string}
     * @param glob_patterms {string|string[]}
     * @returns {string}
     */
     
## Usage

```javascript
var str = cat('file*.txt');
var str = cat('file1', 'file2');
var str = cat(['file1', 'file2']); // same as above
```