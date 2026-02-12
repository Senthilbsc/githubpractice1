//STRING METHODS
var str = "JAVASCRIPT PROGRAMMING";
console.log(str.length)

//SLICE
var str = "JAVASCRIPT PROGRAMMING"
var a = str.slice(0,10)
console.log(a)
var a = str.slice(11,22)
console.log(a)

//SUBSTRING
var str = "JAVASCRIPT PROGRAMMING"
var a = str.substring(0,10)
console.log(a)

//replace
var str = "JAVASCRIPT PROGRAMMING, Javascript Lnaguage"
var a = str.replace("Java", "Type")
console.log(a)

//REPLACE ALL
var str = "JAVASCRIPT PROGRAMMING, Javascript Lnaguage"
var a = str.replaceAll("Java", "Type")
console.log(a) 

//TO UPPER CASE
var str = "javascript programming"
console.log(str.toUpperCase())

//TO LOWER CASE
var str = "JAVASCRIPT PROGRAMMING"
console.log(str.toLowerCase())



//INCLUDES

var str = 'JAVASCRIPT PROGRAMMING';
console.log(str.includes('SCRIPT'))

//CONCATENATE
var str1 = "JAVASCRIPT "
var str2 = "PROGRAMMING"
console.log(str1 + str2)
console.log(str1,str2)
console.log(str1.concat(str2))

//starts WITH
console.log(str.startsWith('J'))

//ENDS WITH
console.log(str.endsWith('G'))
console.log(str.endsWith('o'))  

//INDEX OF
var str = "Javascript Language" 
console.log(str.indexOf('a'))
console.log(str.indexOf('an'))

//LAST INDEX OF
console.log(str.lastIndexOf('a'))   

//CHAR AT   
var str = "Javascript Language" 
console.log(str.charAt(5))

//SPLIT
var str = "JAVASCRIPT PROGRAMMING"
console.log(str.split(" ")) // ["JAVASCRIPT", "PROGRAMMING"]
console.log(str.split( )) // ["JAVASCRIPT", "PROGRAMMING"]

//trim
var str = " Javascript with Playwright "    
console.log(str.trim()) //  "Javascript with Playwright"
console.log(str.trimEnd()) // " Javascript with Playwright"
console.log(str.trimStart())// "Javascript with Playwright "    

//REPEAT
var str = "JavaScript "
console.log(str.repeat(3)) // JavaScript JavaScript JavaScript

//PADEND
var str = "Rs.786"
console.log(str.padEnd(10,'123456789'))  


//PADSTART

console.log(str.padStart(10,'123456789'))    


//reverse
var str = "WELCOME TO WIPRO"
var a = str.split("").reverse().join("")
console.log(a) // ORPIW OT EMOCLEW




//table//tbody//tr[3]//td[text()='Firefox']//following-sibling::td[1]