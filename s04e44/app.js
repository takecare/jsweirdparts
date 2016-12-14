// iife: immediately invoked funcion expression

// this is a function statement. this function get put in memory during
// the 'creation phase'
function greet(name) {
	console.log('hi there ' + name);
}
greet('Fernando');

// this is a function expression. this function doesn't get put in
// memory during the 'creation phase', only during the 'execution phase'
var anotherGreet = function(name) {
	console.log('hi there ' + name);
}
anotherGreet('Fernando');

// this is an iife! a function expression that gets invoked immediately
var yetAnotherGreet = function(name) {
	return 'hi there ' + name;
}('Fernando');
console.log(yetAnotherGreet);
// if you pay close attention you see that yetAnotherGreet holds the result
// of calling the function

// wrapping this function statement in parentheses makes it a function
// expression. it's an iife.
(function(name) {
	console.log('hi there ' + name);
}('Maria'));
