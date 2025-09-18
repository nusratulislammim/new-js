const user = {
    username: "Meem",
    prices: 199
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.prices} tk`);
    
}

handleObj(user)
handleObj({
    username: "Haha",
    prices: 2
})

const myNewArr = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([1,2,3,4,5,6]));









