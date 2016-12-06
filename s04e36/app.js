var a = 10;
var b = a;

a = a - 5;
b = b - 2;

// when evaluating a variable that is a primitive, javascript makes
// a new copy of the value...
console.log(a);
console.log(b);


var person = {
	name: "fernando",
	age: 42
};

var anotherPerson = person;

// ...but when the variable holds an object, javascript just uses
// a reference to the original, having the variable point to it instead
console.log(person);
console.log(anotherPerson);

// the same holds when using functions. we can say that primitives
// are passed by value and objects by reference

function increase(num) {
	num = num + 1;
}
increase(a);
console.log(a);

function increaseAge(person) {
	person.age = person.age + 1;
}
increaseAge(person);
console.log(person);