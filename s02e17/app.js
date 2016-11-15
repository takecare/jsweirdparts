// scope is essentially where a certain variable is available in your code,
// it is defined by execution context and lexical environments

// es6 (or es2015) introduces 'let', a new way to declare a variable

var a = 10;
var b = 20;

if (a < b) {
    console.log(c);     // this won't fail
    var c = "hello!";
}

a += b;

if (a > b) {
    console.log(c);     // this fails! you can only use 'c' after the 'let' is executed
    let c = "hello!";
}