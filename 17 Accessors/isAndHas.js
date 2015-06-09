// If the property is a boolean, use isVal() or hasVal().

// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}