

const user = {
    username: "Meem",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage()

user.username = "Nusratul"
user.welcomeMessage()

console.log(this);//{}

// function pasta(){
//     let name = "macaroni"
//     console.log(this.name);
    
// }
// pasta()


// const pasta = function (){
//     let name = "macaroni"
//     console.log(this.name);
    
// }
// pasta()

const pasta = () => {
    let name = "Meem"
    console.log(this);
    
}
pasta()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2
 const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(2,3));

// const myArr = [1,2,3,4,5,6]
// myArr.forEach()

