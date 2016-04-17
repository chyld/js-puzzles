var leftPad = require('../../lib/left-pad');

console.log(leftPad('1', 1));
console.log(leftPad('2', 2));
console.log(leftPad('3', 3));
console.log(leftPad('4', 4));
console.log(leftPad('5', 5));
console.log(leftPad('hello', 7));
console.log(leftPad("foo",  6));
console.log(leftPad("foo", 3));
console.log(leftPad("foobar", 3));
console.log(leftPad("foo", 6, "?"));
