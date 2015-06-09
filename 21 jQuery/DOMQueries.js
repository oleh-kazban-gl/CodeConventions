// For DOM queries use Cascading $('.sidebar ul') or parent > child $('.sidebar > ul'). jsPerf
// Use find with scoped jQuery object queries.

// bad
$('ul', '.sidebar').hide();

// bad
$('.sidebar').find('ul').hide();

// good
$('.sidebar ul').hide();

// good
$('.sidebar > ul').hide();

// good
$sidebar.find('ul').hide();