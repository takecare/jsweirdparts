// remember from s02e09 that the execution context holds a reference to
// the global object, the 'this' object and a reference to the outer environment

// remember also that there is a lexical environment, in which your code
// is declared. this is important to determine the reference to the outer
// environment

// 'b' sits, at a lexical level, on the global context so when creating an
// execution context for 'b', the reference to the outer env. will be the
// global context
function b() {
    console.log(myVar);
}

// 'a' sits, at a lexical level, on the global context as well, its reference
// to the outer env. will also be the global context
function a() {
    var myVar = 2;
    b();
}

// the js engine looks at the lexical scoping to lookup variables, this means
// that function b's reference to the outer environment is actually referencing
// the global context
var myVar = 1;
a();

// when the js engine tries to find a variable, if it can't find it on the current
// execution context, it will look into the reference of the outer environment.
// this is what's called "scope chaining"


function c() {
    // d's reference to the outer env. will now reference c's execution context
    function d() {
        console.log(myVar);
    }
    var myVar = 2;
    d();
}

c();