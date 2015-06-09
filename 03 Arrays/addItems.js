// Use Array#push instead of direct assignment to add items to an array.

var someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');