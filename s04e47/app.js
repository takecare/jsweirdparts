var functions = [];

var buildFunctions = function() {
	for (var i=0; i<3; i++) {
		functions.push(function() {
			// 'i' is "captured" in this anonymous function
			console.log(i);
		});
	}
};

buildFunctions();

functions[0]();
functions[1]();
functions[2]();

// when one of the functions in the 'functions' array is run,
// it will access 'i', as it's not defined in its own scope,
// it looks up the scope chain, finding it in the for loop.
// as 'i' is referenced inside the anonymous function it does
// not get garbage collected, hence it's still in memory when
// any of the functions of the 'functions' array is executed.

// if you don't want this to happen you need to make sure that
// a new execution context is created where the value of 'i'
// is the one of the current iteration of the for loop.

var buildMoreFunctions = function() {
	var moreFunctions = [];
	for (var i=0; i<3; i++) {
		moreFunctions.push(
			(function(v) {
				return function() { console.log(v) };
			}(i))
		);
	}
	return moreFunctions;
};

var moreFunctions = buildMoreFunctions();
moreFunctions[0]();
moreFunctions[1]();
moreFunctions[2]();