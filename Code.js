// JavaScript source code
//data type
var age = 10;
var name = "pune";
var per = 88.56;
const max = 100;
console.log(age);
console.log(name);
console.log(max);

//looping
var age = 20;
if (age >= 18) {
    console.log("valid");
}
else {
    console.log("invalid");
}


var i;
for (i = 1; i <= 10; i++) {
    console.log(i);
}

var a = 1;
do {
    if (a % 2 == 0) {
        console.log(a);
    }
    a++;
} while (a <= 20);

var z = 1;
while (z <= 20) {
    if (z % 2 != 0)
        console.log(z);
    z++;
}


// function in JS (method in C#)

// function without paramter & return type
function addition() {
    var a = 10, b = 20;
    var c = a + b;
    console.log(c);
}
addition();  // call to function

// function with parameter & no return type
function subtraction(a, b) {
    var c = a - b;
    console.log(c);
}
subtraction(56, 45);

// function with parameter & return type
function multiply(a, b) {
    var c = a * b;
    return c;
}
var result = multiply(78, 23);
console.log(result);



