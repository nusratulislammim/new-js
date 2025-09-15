//premitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scroeV = 100.3
const isLoggedIn = false
const outsideTemp = null
let email;

console.log(typeof email);
console.log(typeof outsideTemp);//null-> object
console.log(typeof scroeV)


//symbol declaration
const id = Symbol("124")
const anotherId = Symbol("123")

console.log(id===anotherId); //though values are same returned values r diff

const bigNum = 111111222222233333
console.log(typeof bigNum);//number

const bigNum2 = 11111111111111111n
console.log((typeof bigNum2));//bigInt








// Reference (Non premitive)
//array, Objects, Functions

//array
const cartoon = ["Doremon","Shinchen","Tom&Jerry"]

console.log(cartoon);
console.log(cartoon[1])

//object

let myObj = {
    name : "Meem",
    age : 21
}
console.log(myObj)

//functions
//function(){}

const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof myFunction);

