let myName = "Meem"
let mychennel = "None"

console.log(myName.trueLength);//undefined

let myFlowers = ["rose","hibiscus","tulip"]

let flowers = {
    rose: "black",
    hibiscus: "red",
    tulip :"purple",
    getTulips: function(){
        console.log(`tulips are ${this.tulip}`);
        
    }
}
flowers.getTulips()


Object.prototype.mirror = function(){
    console.log(`mirror is present in all obj`);
    
}
Array.prototype.hey = function(){
    console.log(`say hello`);
    
}

myFlowers.mirror()
flowers.mirror()

myFlowers.hey()
//flowers.hey()


//inheritance

const user = {
    name:"Meem",
    email:"nusratul@gmail.com"
}
const teacher = {
    makeVdo : true
}

const teachingSupport ={
    isAvailable: false
}

const taSupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    _proto_:teachingSupport
}

teacher._proto_ = user

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "nusratulislam   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"meem  ".trueLength()
"  H0rr0r  ".trueLength()

