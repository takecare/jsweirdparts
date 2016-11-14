// first a global execution context is created (see s02e09)...

function a() {
    b();
    var c;
}

function b() {
    var d;
}

// ... and then a new execution context is created due to
// the invocation of 'a'. this execution context is placed on
// top of the execution context stack. given 'b' is invoked
// inside 'a' yet a new execution context will be created.
a();
var d;

// so, throghout the execution of this script, we'll have on 
// the stack:
// global
// a, global
// b, a, global
// a, global
// global