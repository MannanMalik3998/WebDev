//package installed
//" npm install readline-sync " 

var package = require("readline-sync");
var name = package.question("What is your name: ");

console.log("Hi "+name);
