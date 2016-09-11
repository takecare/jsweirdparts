// even though function 'b' is not defined at this point, it's still
// available as part of the global execution context, given our script
// was interpreted as a whole before being executed and the function
// is put in memory (its name and its content)
b();

// the same doesn't happen with variables, as assignments only occur
// when the code is actually run...
console.log(a);

var a = 'Hello World!';

function b() {
  console.log('Called b');
}