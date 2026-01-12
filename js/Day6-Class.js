//object

let obj1 = {
    name : 'kumar',
    age : 35,
    job : true,
    abc : function(a){
        return ++a
    },
    xyz : {company :"wipro", emp : 786, location : false}
}

console.log(obj1)
console.log(obj1.name)
console.log(obj1.abc(5))
//chaining
console.log(obj1.xyz)
console.log(obj1.xyz.company)

//APPROACH 2
let obj2 = new Object()
obj2.name = 'rockey'
obj2.age = 32
obj2.job = true

console.log(obj2)
console.log(obj2.name)

//CLASS - PARENT, SUPER
//THIS is a keyword. Use to acess current class properties

class Animals{

  Constructor(pet){
    this.pet = pet
  }
  dog(name){ // method level param
    console.log("it is a pet for all home in ", name)
  }
  cat(){
    console.log(`The ${this.pet} sound comes like MEOW`)
  }
}

let one = new Animals("cat")
one.dog("city")
one.cat()

//class