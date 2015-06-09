// Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope.

// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}