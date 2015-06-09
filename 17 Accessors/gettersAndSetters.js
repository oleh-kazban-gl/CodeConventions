// Accessor functions for properties are not required.
// If you do make accessor functions use getVal() and setVal('hello').

// bad
dragon.age();

// good
dragon.getAge();

// bad
dragon.age(25);

// good
dragon.setAge(25);