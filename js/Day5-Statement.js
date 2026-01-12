//CONDITIONAL STATEMENT
//IF , ELSE IF, ELSE, NESTED IF, SWITCH, BREAK, CONTINUE

var age = 18

if(age >= 18){
    console.log("Youth is eligible")
    if(age === "18"){// NESTED
        console.log(true)       
    }
    else{
        console.log(false)
    }

}

else if(age < 65){
    console.log("Adult is not eligible")
    if (age){
        console.log("true")
    }
}

else{   
    console.log("Not Eligible")
}

//SWITCH STATEMENT
var day = 3 // 1-7

switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case "A":
        console.log("Wednesday")
        break;
    case "B":
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Happy Weekend")
}

//loops - for, while, do while

//FOR LOOP - iNITIALIZATION, CONDITION, INCREMENT/DECREMENT
console.log("---FOR ---")
for(let i=1; i<=5; i++){
    console.log(i)
}

console.log("---REVERSE FOR---")
for(let i=5; i>=1; i--){
    console.log(i)
}

//WHILE LOOP
//initialization
//condition
//increment/decrement
console.log("---WHILE---")
let j = 1 //initialization
while(j <= 5){ //condition
    console.log(j)
    j++ //increment
}
console.log("---REVERSE WHILE---")
while(j >= 1){
    console.log(j)
    j-- //decrement
}   
//DO WHILE LOOP
console.log("---DO WHILE---")
let k = 1 //initialization 
do{
    console.log(k)
    k++ //increment
}   
while(k <= 5) //condition

//UN SATISFIED CONDITION
console.log("---DO WHILE with UNSATISFIED CONDITION---")
K = 1 //initialization
do{
    console.log(K)
    K++ //increment
}
while(K > 5) //condition

//BREAK AND CONTINUE    
console.log("---CONTINUE---")

for(let a=1; a<=10; a++){
    if(a == 6){
        continue; //skips the value 5
    }
    console.log(a)
}   

console.log("---BREAK---")

for(let a=10; a<=10; a++){
    if(a == 5){
        break; //stops the loop at 5
    }   
    console.log(a)
}
