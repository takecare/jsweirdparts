// this works
function getPerson() {
	return {
		name: 'Fernando',
		age: 42
	}
}
console.log(getPerson());

// but this doesn't!
function anotherGetPerson() {
	return 
	{
		name: 'Fernando',
		age: 42
	}
}
console.log(anotherGetPerson());

// that's because the js interpreter adds a ';' after the 'return'
// it does this automatically, trying to be clever