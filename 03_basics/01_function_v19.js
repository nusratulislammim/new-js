console.log("M");
console.log("E");
console.log("E");
console.log("M");

function sayMyName(){
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("M");
}


sayMyName()


function addTwoNum (num1,num2){
    console.log(num1+num2);
    
}

addTwoNum(5,5)//10
addTwoNum(5,"5")//55
addTwoNum("5",5)//55

function addTwoNum2 (num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
    
}

const result = addTwoNum2(2,1)
console.log(result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());//undefined
console.log(loginUserMessage("Meem"));//Meem just logged in

function calculatePrice(val1,val2,...num1){
    return num1
}
console.log(calculatePrice(200,400,600,900,500,2000));//[ 600, 900, 500, 2000 ]

