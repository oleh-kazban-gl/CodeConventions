// Function declarations hoist their name and the function body.

function example() {
  superPower(); // => Flying

  function superPower() {
    console.log('Flying');
  }
}