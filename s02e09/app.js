// execution context: when the js engine is running your code it first wraps it
// up in what's called an execution context

// at the base/global execution context (created for you by the js engine) you get
//  - the 'global' object
//  - the 'this' variable (which at the base level points to 'global')
//  - and a link to the outer environment (this is a 'global' when inside a function
//      on that level)
// and 'this' - on a browser, 'this' (on the global level) points to the window
// object (same as 'window' object), which is the global object.

// global is anything that's not inside a function

// both 'a' and 'b' are created at the global level here
var a = 'Hello World!';

function b() {
    
}