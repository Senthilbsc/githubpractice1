//object

var obj2 = {
    name : 'kumar',
    age : 35,
    job : true,
    abc : function(a){
        return ++a
    },
    xyz : {company :"wipro", emp : 786, location : false}
}

console.log(obj2)
console.log(obj2.name)
console.log(obj2.abc(3))
//chaining
console.log(obj2.xyz)
console.log(obj2.xyz.company)
