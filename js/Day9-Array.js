//Index start from 0 Array base is an index
var arr =[10,20,30, 'javascript' , false]
console.log(arr[1])
console.log(arr[3])

//push
var arr = [10,20,30,40,50]

arr.push(60, 'Senthil')
console.log(arr)

//pop
var arr = [10,20,30,40,50]

arr.pop()
console.log(arr)

//To String
var arr = [10,20, 'Javascript', true]

var str = arr.toString()
console.log(str)

//CONCAT
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]

console.log(arr1+arr2+arr3)
console.log(arr1,arr2,arr3)
console.log(arr1.concat(arr2, arr3))

//SHIFT
var arr = [10,20,30,40,50]

arr.shift()
console.log(arr)

//UNSHIFT
arr.unshift(10, 200)
console.log(arr)

//SLICE - Based on starting index between ending index +1
var arr = [10,20,30,40,50,60,70,80]
var str = arr.slice(2,6)
console.log(str)

//SPLICE Based on starting index deleted counts values
var arr = [10,20,30,40,50,60,70,80]

//1.REMOVE
arr.splice(2,4)
console.log(arr)

//2.UPDATE
arr.splice(2,2,700,800)
console.log(arr)

//.ADD
arr.splice(2,0,3,4,5,6)
console.log(arr)

//MAP
var arr = [4,9,16,25,36]
var str = arr.map(Math.sqrt) 
console.log(str)

//FILTER
var arr = [1,2,3,4,5,6,7,8,9]
var str = arr.filter(function(isEven){
return isEven %2 ===0
})
console.log(str)

//REDUCE
var arr = [10,20,30,40,50]
var str = arr.reduce(function(num1, num2) {
    return num1+num2
})
console.log(str)

//REVERSE
var arr = [10,20,30,40]
console.log(arr.reverse())

//VALUES
var arr = [10,20, "Java", 'Selenium', false]
var str = arr.values()
for (const element of str) {
    console.log(element)
}

//FOR EACH

var arr = [100,200, "javascript", 'Playwright', true]
arr.forEach((num) => {
    console.log(num)
})

//SORT
var arr = [11,2,45,76,21,1]

//ASCENDING
var str = arr.sort((a,b)=>{
    return a-b
})
console.log(str)

//DESENDING
var str = arr.sort((a,b)=>b-a)
console.log(str)

//JOIN
var arr = [10,20,30,40]
console.log(arr.join("<-->"))

var arr = ['Cherry','banana','cat','apple','Airplane','Bangalore']
console.log(arr.sort())
console.log(arr.sort().reverse())
