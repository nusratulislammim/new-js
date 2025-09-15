const score = 400
console.log(score)
console.log(score.toFixed(2))//2 digits after decimal point
console.log(score.toPrecision(5))//total 5 digits



const anotherScore = new Number(100)

console.log(anotherScore.toString())
console.log(anotherScore.toFixed(4))//100.0000
console.log(anotherScore.toPrecision(4))//100.0

const hundreds = 10000000
console.log(hundreds.toLocaleString())//10,000,000
console.log(hundreds.toLocaleString('en-IN'))//1,00,00,000



//++++++++++math+++++++

console.log(Math);
console.log(Math.abs(-4));//4

console.log(Math.round(3.4));//3
console.log(Math.round(3.6));//4

console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.2));//4

console.log(Math.min(1,2,3,4,3,2));//1
console.log(Math.max(12,32,1,32,123));//123


console.log(Math.random());
console.log(Math.random()*10);//0-10
console.log((Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.random() * (max-min+1));
console.log(Math.floor(Math.random() * (max-min+1)));
