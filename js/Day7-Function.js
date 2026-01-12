//FUNCTION TYPES

//1 BASIC FUNCTION
//without parameter
function greet(){
    console.log("hello world")
}
greet ()

//with single param
function isPostive(num){
console.log(num == 20)
}
isPostive(10)

//multi param
function isEven(num1, num2){
    return num1 * num2
}
console.log(isEven(10, 5))

//default param
function defalt(name = "user"){
console.log("Hi,", name)
}
defalt()
defalt('senthil')

//2.FUNCTION EXPRESSION
//without param
let a= function (){
    console.log('welcome')
}
a()
//with single param
let b = function(num1){
    console.log(num1 % 2 == 0)
}
b(19)
b(20)
//multi param
let c = function (num1,num2,num3){
    return num1+num2-num3
}
console.log(c(10,25,5))

//default
let d=function(name='AI'){
console.log("hi," , name)
}
d()
d('senthil')

//3.IIFE - Immediate Invoked function Expression
//(Function (){
//Secretkey = "test@123"
//Console.log('Secret Key is hidden')
//})()

//4.ARROW FUNCTION

//without param
let e = () => {
    console.log('welcome to tech')
}
e()

//with single param
let f = (num1) => {
    console.log(num1 * 2)
}
f(100)

//multi Param
let g =(l,h,b) => l*h*b
console.log(g(10, 12, 21))

//default
let h=(name = 'userAi') => console.log("Hi", name)
h()
h('Senthil')

//5. Anonymous
console.log("Start")
setTimeout(() => console.log('Middle'),2500)
console.log('End')
 
//6 CALL BACK

function redmi(){
    console.log("Brand No.1")
}
function vivo(num1,call){
    console.log("Best Camera in", num1)
}
function oppo(num1,num2,back){
return num1+num2
}
console.log(oppo(10,2, vivo(2025, redmi)))

//RECURSION
//5!=>5*4!=>5*4*3!=>5*4*3*!=>5*4*3*2!=>5*4*3*2*1!
function fact(num) {
    if (num == 1){
        return 1
    }
    return num * fact(num-1)
}
console.log(fact(7))