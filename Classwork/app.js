var hello = require("./hello.js.js");
var zip = require("./zip.js.js").zip;
var math = require("./math.js.js");

console.log(zip([1,3,5], [2,4,6]));
hello.saySomething(0);

console.log(math.add(4, 5));
console.log(math.subtract(4, 5));
console.log(math.multiply(4, 5));
