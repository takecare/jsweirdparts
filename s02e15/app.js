// each execution context has its own variable environment

function b() {
    var myVar;
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();

// execution context stack throughout the execution phase:
// *** execution starts, the global context is created
// global [myVar = 1]
// *** a new context is created when executing 'a'
// a [myVar = 2], global [myVar = 1]
// *** a new context is created when executing 'b'
// b [myVar = undefined], a [myVar = 2], global [myVar = 1]
// *** 'b' finishes, its context is popped out of the stack
// a [myVar = 2], global [myVar = 1]
// *** 'a' finishes, its context is popped out of the stack
// global [myVar = 1]