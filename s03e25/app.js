// due to operator precedende & associativity plus the way js performs
// coercion, you might find some things strange...

console.log(3 < 2 < 1); // 3 < 2 gets evaluated first (associativity)
console.log(false < 1); // false gets coerced into a number (actually 1)
console.log(0 < 1);     // this is the 'end' result...

var a;
console.log(1 + a);

a = null;
console.log(a - 2);

console.log("false == 0: " + (false == 0));
console.log("null == 0: " + (null == 0));
console.log("null < 1: " + (null < 1));
console.log("\"\" == 0: " +  ("" == 0));
console.log("\"\" == false: " +  ("" == false));

// enter strict equality and inequality!

console.log("false === 0: " + (false === 0));
console.log("null === 0: " + (null === 0));

console.log("false != 0: " + (false != 0));
console.log("false !== 0: " + (false !== 0));

// further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness