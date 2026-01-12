//var functional scoped
var a = 10;
//re-declaration is allowed
var a = 20;
//re-assignment is allowed
a=30
console.log(a)
//let - block scoped
let b = 100
console.log(b)
//re-declaration not alowed
//let b = 200
//re-assigmnet is allowed
b = 300
console.log(b) 
//const - block & Immutable scoped
const c = 1000
console.log(c)
//data types
//primitive - Immutable - Stack memory
var num = 123
console.log(num)
var num = 123
console.log(typeof num)
var str = "javascrpit"
console.log(str)
var str = "javascrpit"
console.log(typeof str)
var boo = true
console.log(boo)
var boo = true
console.log(typeof boo)
let n = null
console.log(n)
console.log(typeof n)
let nan = 'hello' +2
console.log(typeof nan,nan)
let und
console.log (typeof und)
//non primitive - mutable - HEAP MEMORY
const arr = [10,20, "javascript", false]
console.log(typeof arr)
const obj = {name:'TCS', JOB:true,location:5}
console.log(typeof obj)
console.log(obj)
function greet(){
console.log ("Hello world")
}
greet()
console.log(typeof greet)