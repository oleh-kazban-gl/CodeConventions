// To convert an array-like object to an array, use Array#slice.

function trigger() {
  var args = Array.prototype.slice.call(arguments);
  ...
}