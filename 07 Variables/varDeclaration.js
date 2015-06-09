// Always use var to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.

// bad
superPower = new SuperPower();

// good
var superPower = new SuperPower();