// functions, in javascript, are objects, but "special" objects
// as objects, functions have a couple of special properties:
//  - the code that can be invoked
//  - and a name (which if not defined, marks them as anonymous)

function greet() {
	console.log('hi!');
}

greet.language = 'english';