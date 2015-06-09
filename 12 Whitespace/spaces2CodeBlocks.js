// Leave a blank line after blocks and before the next statement

// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;

// bad
var obj = {
  foo: function() {
  },
  bar: function() {
  }
};
return obj;

// good
var obj = {
  foo: function() {
  },

  bar: function() {
  }
};

return obj;