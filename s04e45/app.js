// when executing this, first the global execution context is created
// but as soon as this line is run, a new executin context (this function's)
// is created and put on top of the stack
(function(name) {
	var greeting = 'hi there';
	console.log(greeting + ' ' + name);
})('Maria');

// take a look at 'greet.js' and you'll see a greeting global there, which
// doesn't collide with the one in our iife, because it has its own execution
// context, in which a different 'greeting' var exists

(function(global, name) {
	global.greeting = 'ayo';
	console.log(greeting + ' ' + name);
})(window, 'Maria');
