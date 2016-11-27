// json is kinda like a subset of the js object literal notation

var person = {
    name: 'fernando maria',
    age: 42
};

// as json this would be:
// {
//	"name": "fernando maria",
//	"age": 42
// }

console.log(JSON.stringify(person));

var fromJson = JSON.parse('{ "name": "fernando maria", "age": 42 }');
console.log(fromJson);
