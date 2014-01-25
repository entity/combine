
/**
 * Test.
 */

var assert = require('assert');
var combine = require('..');

var s = '';

function a(x){ s += x + 'a'; }
function b(x){ s += x + 'b'; }

var c = combine(a, b);

c('foo');

assert('fooafoob' === s);
