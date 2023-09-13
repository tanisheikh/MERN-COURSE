// Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.
// TypeScript guesses the type by itself.
// Type annotations.
var num;
num = 0;
// Type inference.
var arr = [0, 1, null, 'Hi', new Date()];
console.log(typeof arr);
console.log(typeof arr[0]);
console.log(typeof arr[2]);
console.log(typeof arr[3]);
console.log(typeof arr[4]);
