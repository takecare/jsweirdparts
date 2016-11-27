// object literals are the preferred way to create new objects,
// they're way more readable...
var person = {};
person.firstname = 'Fernando';
person.lastname = 'Maria';

// ... and you can initialise properties immediately
person.address = {
	street: 'Rua do Liceu',
	number: '23'
};

console.log(person);

function greet(person) {
	console.log('Hi ' + person.firstname);
}

greet(person);
greet({ firstname: 'Josefa'});