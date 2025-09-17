
//array

const myArr = [1,2,3,4,5,6]

const Cartoons = ["doremon","Shinchen"]

const arr = new Array(1,2,3,4,5)
console.log(arr[0]);

//array methods

arr.push(6)
arr.push(7)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(9) //push to start
console.log(arr);

arr.shift()//remove start element
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(3));

const newArr = arr.join()

console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]
console.log(newArr);//1,2,3,4,5,6

console.log(typeof newArr)//string

//slice, splice

console.log("A",arr);

const arrn1 = arr.slice(1,3);
console.log(arrn1);
console.log("B",arr);


const arrn2 = arr.splice(1,3);
console.log(arrn2);
console.log("C",arr);









