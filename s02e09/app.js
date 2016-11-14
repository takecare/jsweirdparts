// execution context: when the js engine is running your code it first wraps it
// up in what's called an execution context

// base/global execution context: two objects are created - 'global' 
// and 'this' - on a browser, 'this' (on the global level) points to the window
// object (same as 'window' object), which is the global object.

// global is anything that's not inside a function

// both 'a' and 'b' are created at the global level here
var a = 'Hello World!';

function b() {
    
}