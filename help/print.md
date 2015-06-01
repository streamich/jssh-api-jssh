# `print`

Prints object using `util.inspect`. As second parameter specify recursion depth or the options object to pass to 
`util.inspect`.

## Definition

    print(msg: any, depth: number = 3)
    print(msg: any, opts: any = {depth: 3, color: true)

## Examples

Usage in *JavaScript*:

```javascript
print(my_object);
print(my_object, 2);
print(my_object, {color: false, depth: 1});
```
    
In *CoffeeScript*:

```coffeescript
print my_object
print my_object, 2
print my_object, 
    color: false
    depth: 1
```