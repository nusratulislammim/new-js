const m_heros = ["thor","Ironma","spiderman"];
const dc_heros = ["superman", "flash", "batman"];

/*
m_heros.push(dc_heros);//add to dc_heros

console.log(m_heros);
console.log(m_heros[0][0]);

m_heros.concat(dc_heros);//add to m_heros
console.log(m_heros);

*/
//concat to a new array
const allHeros = m_heros.concat(dc_heros);
console.log(allHeros);

const allHeros2 = [...m_heros, ...dc_heros];
console.log(allHeros2);


const anoterArr = [1,2,3,[4,5,6],7,8,[9,[10]]]

const real_anotherArr = anoterArr.flat(1);//1-depth
console.log(real_anotherArr);


console.log(Array.isArray("Meem"));//false
console.log(Array.isArray(['M','e','e','m']));//true

console.log(Array.isArray(1,2,3));//false
console.log(Array.isArray([1,2,3]));//true

console.log(Array.from("Meem"));//[ 'M', 'e', 'e', 'm' ]


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));










