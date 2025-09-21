//if
const isUserLoggedIn = true
const temperature = 34

if(temperature<50){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}

console.log("Execute");
//<,>,<=,>=,==,!=,===,!==

const score = 200
if(score>100){
    let power = "fly"
    console.log(`User power: ${power}`);
    
}

//console.log(`User power: ${power}`);//error

const balance = 1000
if(balance>500)console.log("test"),console.log("test2");
;

if(balance<500){
    console.log("less than 500");
}
else if(balance<750){
    console.log(("less than 750"));
}
else{
    console.log("Greater than or equal 750");
}

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in");
    
}