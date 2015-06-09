// Prefixing your comments with FIXME or TODO helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are FIXME -- need to figure this out or TODO -- need to implement.

// Use // FIXME: to annotate problems.

function Calculator() {

  // FIXME: shouldn't use a global here
  total = 0;

  return this;
}

// Use // TODO: to annotate solutions to problems.

function Calculator() {

  // TODO: total should be configurable by an options param
  this.total = 0;

  return this;
}