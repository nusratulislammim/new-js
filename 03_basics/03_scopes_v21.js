var c = 100
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ",a);
    
}
console.log(a);
//console.log(b);//ReferenceError: b is not defined
console.log(c);

function one(){
    const username = "Meem"

    function two(){
        const website = "reddit"
        console.log(username);
        console.log(website);
        
    }
    //console.log(website);
    
    two()
    
}
one()

if(true){
    const username = "Meem"
    if(username === "Meem"){
        const website = "raddit"
        console.log(username+ website);
    }
    //console.log(website);//error
    console.log(username);
    
    
}


console.log(addone(5));

function addone(num){
    return num +1
}

addTwo(5)
const addTwo = function(num){
    return num+2
}




