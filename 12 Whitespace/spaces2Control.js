// Place 1 space before the opening parenthesis in control statements (if, while etc.). Place no space before the argument list in function calls and declarations.

// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}