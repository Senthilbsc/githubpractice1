//OPERATORS

const { compileFunction } = require("vm");

// Arithmetic Operators
var a = 10;
var b = 5;

var c= a+b; 
console.log("Addition: " + c); // 15

c = a-b; 
console.log("Subtraction: " + c); // 5      

c = a*b; 
console.log("Multiplication: " + c); // 50

c = a/b; 
console.log("Division: " + c); // 2 Quotent

c = a % b; 
console.log("Modulus: " + c); // 0 Remainder
 
var c= a**b; 
console.log("Exponentiation: " + c); // 1000000000


// Assignment Operators

var a=10
var b=20

a = a+b //a=10+20= 30
console.log(a)

a = a- b // a=30-20=10
console.log(a)        

a = a*b // a=10*20=200
console.log(a)

a /=b // a=200/20=10
console.log(a)  

a %= b // a=10%20=10
console.log(a)  

a = a**b // a=10**20=100
console.log(a)

// Comparison Operators

var a=100
var b=200

console.log(a==b) // false it will check only value
console.log(a===b) // false it will strictly check value and data type
console.log(a>b) // false // greater than
console.log(a<b) // true   // less than 
console.log(a>=b) // false  //greater than equal to  
console.log(a<=b) // true  //less than equal to
console.log(a!=b) // true // not equal to
console.log(a!==b) // true // strictly not equal to


// Logical Operators
//&& ADD, || OR, ! NOT/

let age = 18
if(age === 18 && age <= 35){
    console.log("Eligible for job")
}    
else{
    console.log("Not Eligible for job")
}   
if(age === 18 || age <= 25){
    console.log("Eligible for job")
}

let abc = 'senthil'

//unary operator
//post increment
var a=100
console.log(a++) //100
console.log(a) //101

//pre increment
var b=200
console.log(++b, b) //201

//ternary operator

let xyz = 23

if(xyz === 23){
    console.log("True")
}   
else{
    console.log("False")
}   

let x = (xyz == 23) ? "Eligile" : "Not Eligible"
console.log(x)  

x = (xyz == 23 && xyz>35 ) ? "Eligile" : "Not Eligible"
console.log(x)
x = (xyz == 23 || xyz>35 ) ? "Eligile" : "Not Eligible"
console.log(x)
