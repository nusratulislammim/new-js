const myObj ={
    js:'JavaScript',
    cpp: "C++",
    rb: "ruby"
}

for(const key in myObj){
    console.log(`${key} shortcut id for ${myObj[key]}`);
}

const programming = ["js","rb","cpp"]

for(const key in programming){
    console.log(programming[key]);
}
const map = new Map()
map.set('IN',"india")
map.set('USA',"United States of America")
map.set('BD',"Bangladesh")

//console.log(map);

for(const key in map){
    console.log(key);
}