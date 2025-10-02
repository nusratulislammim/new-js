function multiplyBy4(num){
    return num*4
}
multiplyBy4.power = 2

console.log(multiplyBy4(4));
console.log(multiplyBy4.power);
console.log(multiplyBy4.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
console.log(createUser.prototype);//{ increment: [Function (anonymous)] }

createUser.prototype.printIt = function(){
    console.log(`price is ${this.score}`);
    
}
const tea = new createUser("tea",2)
const coffee = new createUser("Coffee",3)

tea.printIt()//2
tea.increment()
tea.printIt()//3




