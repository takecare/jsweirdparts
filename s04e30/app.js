// objects are essentially name-value pairs, as they can contain
// primitives, objects and functions
var person = new Object();

// you can create/define properties on objects with a simple expression
person['firstname'] = "Fernando";
person['lastname'] = "Maria";
console.log(person['firstname'] + ' ' + person.lastname);

// there are 2 different ways of accessing an object's properties
person.age = 42;
var propertyName = 'age';
console.log(person[propertyName]);

// either way - [] or . - is left to right associative
person.address = new Object();
person.address.street = 'Rua do Liceu';
person.address.number = '23';