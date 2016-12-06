// there's a difference between function statements and function expressions

// this is a function statement, as it just defines a function, when this
// code is interpreted (this function is put into memory). during the
// execution phase nothing really happens.
function greet() {
	console.log('hi there!');
}

// here you can actually see an expression that gets executed during the
// execution phase.
var anonymousGreet = function canHaveNameHereButItIsUseless() {
	console.log('hello there!');
}

// there's an easy way to prove this... the following bit of code is not
// actually valid but it proves the point.

hoisted();
function hoisted() {
	console.log('i support hoisting because i\'m declared, in a function statement');
}

//anonymous(); // uncomment me to see that i'll cause an error!
var anonymous = function() {
	console.log('as i\'m only declared during the exec phase, this won\'t work');
}


function caller(f) {
	f();
}

caller(
	function() { // this is another function expression!
		console.log('i\'m being called!');
	}
);

function callerWithArgument(f) {
	f('wat');
}

callerWithArgument(function(arg) {
	console.log('the argument is \'' + arg + '\'');
})
