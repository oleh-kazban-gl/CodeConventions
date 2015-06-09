// If for whatever reason you are doing something wild and parseInt is your bottleneck and need to use Bitshift for performance reasons, leave a comment explaining why and what you're doing.

// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
var val = inputValue >> 0;