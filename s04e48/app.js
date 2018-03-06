function makeIncrementer(val) {	
	if (val % 2 === 0) {
		return function(v) {
			return v + 2;
		}
	} else {
		return function(v) {
			return v + 3;
		}
	}
}

var oddIncrementer = makeIncrementer(19);
var evenIncrementer = makeIncrementer(42);

console.log(oddIncrementer(2));
console.log(evenIncrementer(3));