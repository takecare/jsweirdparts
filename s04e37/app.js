// whenever a function is invoked, a new execution context is created
// and put on top of the "execution context stack". this is the creation phase.

// the execution context has a variable environment, a reference to the outer
// environemnt (remember the scope chain!) and it has the variable 'this'.

// 'this' will point to different objects, depending on a function is invoked.

function f() {
	console.log(this);
}

f();

var anotherF = function() {
	this.person = {
		name: "Fernando",
		age: 42
	};
}

anotherF();
console.log(person);

// when a function is part of an object, the 'this' keyword will point
// to that object
var anotherPerson = {
	name: "Maria",
	age: 23,
	printMe: function() {
		console.log(this);
	}
}
anotherPerson.printMe();

anotherPerson.sayHello = function() {
	console.log(this.name + " says hello!");
}
anotherPerson.sayHello();

// a function on an object can mutate it through the usage of 'this'
anotherPerson.growOld = function() {
	console.log(this.name + " is having a birthday!");
	this.age += 1;
}
anotherPerson.growOld();
console.log(anotherPerson);

// however, there's some tricky bits to the ways javascript handles 'this'
// in some scenarios, like when you declare a function inside a function 
// inside an object:
anotherPerson.sayName = function(name) {
	var setName = function(newName) {
		this.name = newName;
	}
	setName(name);
	console.log("in the object itself: " + this.name); // one would expect that 'this' points to anotherPerson
}
anotherPerson.sayName("Manel"); // so here we'd be changing the name to 'Manel'

// but in fact 'this' was pointing to the global object
console.log("in the global object: " + window.name);

// a common pattern to deal with this issue is declaring a variable that
// actually points to 'this' (the object) and passing it down
anotherPerson.sayName = function(name) {
	var self = this;
	var setName = function(newName) {
		self.name = newName;
	}
	setName(name);
	console.log(self.name);
}
anotherPerson.sayName("Manel");