// DATATYPES IN JS

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans:
let x = true;
let y = false;

// Objects:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// for the mount id:
let z = 16 + "Volvo";
document.getElementById("mount").innerHTML = z;

// for the id food:
let ad = 16 + 4 + "Volvo";
document.getElementById("food").innerHTML = ad;

// for the id cover:
let as = "Volvo" + 16 + 4;
document.getElementById("cover").innerHTML = as;

// strings ex 1
let carName1 = "Volvo XC70";
let carName2 = "Volvo XC60";

document.getElementById("cars").innerHTML = carName1 + "<br>" + carName2;

// string ex 2
let answer1 = "It's alright";
let answer2 = "He is called 'Josh'";
let answer3 = 'He is called "funny"';

document.getElementById("name").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;

// numbers 
let x1 = 34.00;
let x2 = 34;
let x3 = 3.14;

document.getElementById("meat").innerHTML = x1 + "<br>" + x2 + "<br>" + x3;

// expo
let q = 123e5;
let r = 123-5;

document.getElementById("fish").innerHTML = q + "<br>" + r;

// big int 
let i = BigInt("123456789012345678901234567890");
document.getElementById("int").innerHTML = i;

// boolean 
let a = 5;
let b = 5;
let c = 6;

document.getElementById("bool").innerHTML = (a==b) + "<br>" + (a == c);