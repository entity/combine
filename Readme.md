
# combine

combines two functions into one

## Installing

`npm install entity/combine`

`component install entity/combine`

## Example

```js
var combine = require('combine');

var s = '';

function a(x){ s += x + 'a'; }
function b(x){ s += x + 'b'; }

var c = combine(a, b);

c('foo');

console.log(s); // => fooafoob
```

## API

### combine(a, b)

Combines functions `a` and `b`.

## License

MIT
