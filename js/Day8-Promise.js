//PROIMISE is an OBJECT

const { timeLog } = require("console")
const { TIMEOUT } = require("dns")

let prom1 =  new Promise((resolve,reject)=>{
    let PaymentStatus = false
    if (PaymentStatus){
        resolve()
    }
    else{
        reject()
    }
})

//HOSTING
prom1.then(sucess).catch(fail)
function sucess(){
    console.log("Payment got went sucessfully")
}
function fail(){
    console.log("Sorry payment not done")
    }
//Approach-2
let prom2 = new Promise((resolve,reject)=> {
    let paymentstatus = true
  if (paymentstatus){
        resolve(1500)
    }
    Else
    {       
       reject((err))
    }
  })
prom2.then((amount)=>console.log(`yes we received your payment ${amount}`))
.catch((err)=>console.log("sorry we are not received", err)) 

//ASYNC AND AWAIT
//Synchronous
console.log("START")
console.log("MIDDLE")
console.log("END")

//Asynchronous
console.log("Morning")
console.log("Afternoon") 
setTimeout(()=>console.log('Afternoon'),2000)
console.log("Evening")

//Error Handling
try{
let input = '23'
if (input=='') {
    throw("Dont skip")
}
else if (input==""){
    throw("Give me proper input")
}
else if (isNaN (input)){
    throw("Invalid Input")
}
else {
    console.log("Thank you")
    }
}
catch(e){
    console.log(Error(e))
}

//ASYN AWAIT
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Thank you');
            // Or to test rejection:
            // reject('Sorry');
        }, 3000);
    });
}

async function display() {
    console.log("Hi buddy");
    try {
        let data = await fetchData();
        console.log(data);
    } catch (e) {
        console.log("Error:", e);
    }
    console.log("Gud night");
}

display()
