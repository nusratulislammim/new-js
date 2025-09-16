//dates

let myDate = new Date()

console.log(myDate)//2025-09-16T17:57:50.387Z

console.log(myDate.toString());//Tue Sep 16 2025 23:57:50 GMT+0600 (Bangladesh Standard Time)

console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString()); //9/17/2025

// let myCreatedDate = new Date(2023,0,23)//month jan-0
//console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.toDateString())
console.log(newDate.getMonth());
console.log(newDate.getDate());














