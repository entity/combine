
/*!
 *
 * combine
 *
 * combines two functions into one
 *
 * MIT
 *
 */

/**
 * Expose `combine`.
 */

module.exports = combine;

/**
 * Combines functions `a` and `b`.
 *
 * @param {Function} a
 * @param {Function} b
 * @return {Function}
 * @api public
 */

function combine(a, b){
  a = a || function(){};
  return function(){
    a.apply(this, arguments);
    b.apply(this, arguments);
  };
}
