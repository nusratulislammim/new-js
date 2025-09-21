//for of

const arr = [1,2,3,4,5,6]

for(const num of arr){
    console.log(num);
}

const greetings = "Hello World!"

for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//map
const map = new Map()

map.set('IN',"india")
map.set('USA',"United States of America")
map.set('BD',"Bangladesh")

console.log(map);

for(const [key,value] of map){
    console.log(key, ':-',value);
}

const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for(const [key,value] of myObj){
//     console.log(ley,':-',value);
    
// }
