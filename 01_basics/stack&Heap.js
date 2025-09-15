// Stack(Premitive->number,string,undefined,null etc)
// Heap(non-premitive ->array,object,function)

let myName = "NusratulIslamMim"

let anotherName = myName
anotherName = "Meem"
console.log(myName)
console.log(anotherName)//value will change


//heap... ref of og values->non-premitive

let userOne = {
    email: "nusratul@gmail.com",
    id: 123
}
let userTwo = userOne

userTwo.id = 124
console.log(userOne.id)
console.log(userTwo.id)//123 (no change)



