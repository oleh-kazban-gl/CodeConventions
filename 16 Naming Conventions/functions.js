// Name your functions. This is helpful for stack traces.
// * Note: IE8 and below exhibit some quirks with named function expressions. See http://kangax.github.io/nfe/ for more info.

// bad
var log = function(msg) {
  console.log(msg);
};

// good
var log = function log(msg) {
  console.log(msg);
};