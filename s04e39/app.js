// arguments, like in other languages, are what we pass to a function
function greet(name) {
	var sayHello = function(name) {
		console.log('hello ' + name + '!');
	}
	if (name) {
		sayHello(name);
	} else {
		sayHello('there');
	}
}
greet('Fernando');
greet();

// we've already seen how we can set default values for arguments, in case
// they're not passed in, as js doesn't require you to pass an argument it
// even if the function is declared like so
function anotherGreet(name) {
	name = name || 'there';
	console.log('hello ' + name + '!');
}
greet('Fernando');
greet();

// in recent vesrions of js however, you can define default values in a
// much more simple manner
function defaultGreet(name = 'there') {
	console.log('hello ' + name + '!');
}
greet('Fernando');
greet();


// upon the creation of the execution context, the js engine creates a special
// variable - arguments - for you, containing all the arguments that contains
// all the arguments passed to the function
function yetAnotherGreet() {
	var name = arguments[0] || 'there';
	console.log('hello ' + name + '!');
	console.log('there were: ' + arguments.length);
}
greet('Fernando');
greet();

// a new js feature is what's called the 'spread', replacing 'arguments'
function spreadGreet(...names) {
	for (var i=0; i<names.length; i++) {
		console.log('hello ' + names[i] + '!');
	}
}
spreadGreet();
spreadGreet('Fernando', 'Maria');
