const name = "Meem"
const repoCount = 50

console.log(name+repoCount+"value");

console.log(`Hello this is ${name} and my repo count is ${repoCount}`);
console.log(`my repo: ${repoCount}`)
console.log(`my name: ${name}`);

const gameName = new String('meem.com');

console.log(gameName[2]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('e'));
console.log(gameName.indexOf('M'));

console.log(gameName.charAt(2));//2 s
console.log(gameName.charAt(5));

const newS = gameName.substring(1,4);
console.log((newS));
console.log(gameName.substring(-8,3));

const anotherSt = gameName.slice(-8,4);
console.log(anotherSt);

const newS2 = "    Meem   ";
console.log(newS);//print nothing for space
console.log(newS2.trim());//remove spaces

const url = "https://www.youtube.com/watch?v=X7hDBhd_L5U&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=6";

console.log(url.replace('&list','-'));

console.log(url.includes('haha'));//false
console.log(url.includes('index'));//true

console.log(gameName.split('-'));
















