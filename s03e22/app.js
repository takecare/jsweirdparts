// operator precedence: which operator is called first when you
// have several operators on the same expression
console.log(2 + 3 * 4);

// operator associativity: in which order the operators get called,
// from left to right or from right to left
var a = 2, b = 3, c = 4;
console.log(-2 + --a);

a = b = c;

console.log(a);
console.log(b);
console.log(c);

// the = is an operator with right to left associativity and it also
// returns the value of the assignment
