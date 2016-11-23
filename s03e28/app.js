// remember that, when a function is executed/invoked, a new execution
// context is created and put on top of the stack. arguments/parameters
// of the function work just like variables in this context.
function greet(name) {
    console.log('hello ' + name);
}

greet();


// this is a neat trick to provide default values for arguments. given
// that the || operator returns the value that it was able to coarse to
// true we can use it in such a way
greet = function(name) {
    name = name || 'dude';
    console.log('hello ' + name);
}

greet();

// in es6 default values for parameters are supported!
greet = function(name = 'man') {
    console.log('hello ' + name);
}

greet();