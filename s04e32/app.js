// a namespace can be seen as a container, that 'holds' variables
// and functions in it, allowing for a clear degree of separation
// with the use of different containers
var greet = 'Hello!';
var greet = 'Olá!';

console.log(greet);

// as javascript doesn't provide a namespace system by default,
// objects are used to provide the same functionality
var english = {};
var portuguese = {};

english.greet = 'Hello!';
portuguese.greet = 'Olá!';

console.log(english.greet);