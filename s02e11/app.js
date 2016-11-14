b();

// at this point 'a' is undefined. the interpreter has "seen" the assignment
// and, as such, set up the variable (by reserving the memory space and 
// assinging it's value to undefined).
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

var c;

if (c === undefined) {
    console.log("never assign 'undefined' yourself");
    console.log("otherwise it will be tricky to identify which vars haven't been assigned");
}

// 'd' isn't defined at all. we'll get an error!
console.log(d);