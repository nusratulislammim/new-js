const descriptor =  Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


console.log(descriptor);

const car = {
    name: 'bike',
    price: 10000,
    isAvailable : true,
    color: function(){
        console.log("black");
        
    }
}
// console.log(car);

console.log(Object.getOwnPropertyDescriptor(car,"name"));

// Object.defineProperty(car,'name',{
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(car,"name"));

for (const [key,value] of Object.entries(car) ) {
    if(typeof value!== 'function'){
    console.log(`${key}:${value}`);
    }
    
}