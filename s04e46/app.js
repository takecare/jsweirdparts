function greet(text) {
	return function(name) {
		console.log(text + ' ' + name);
	};
}

greet('hi there')('Fernando');

var hiThere = greet('hi there');
hiThere('Maria');

// as soon as the js engine starts executing a global execution context is created
// here, as we execute the greet() function, a new execution context is created
// and put on top of the stack. in this new context, we create the variable 'text'
// and it gets put into the execution context's memory space. the function than
// terminates and it's execution context is popped out of the stack.
var hello = greet('hello');

// as inside greet() we create another function which references the 'text' var,
// even when the greet() execution context is popped, the var won't be cleared
// (garbage collected).

// when we call hello(), a new execution context is created and as the function
// is executed, the js engine will try to look up the scope chain to find the
// value of 'text'
hello('Manel');