// given that javascript is not strongly typed, you can have arrays
// with elements of differt types
var array = [ "yo" ];

array[1] = 23;
array[2] = function() {
	console.log(this);
};
array[3] = {
	name: "Fernando",
	age: 42
};

array[2]();
console.log(array[3].name);