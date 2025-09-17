/*
const tinderUser = new Object()
console.log(tinderUser);//{}
*/

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sana"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser= {
    email: "nusratul@gmail.com",
    fullname: {
        username:{
            firstname: "Nusratul",
            lastname: "Meem"
        }
    }

}

console.log(regularUser.fullname.username.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",3:"d"};

//const obj3 = {obj1,obj2};//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'd' } }

const obj3 = Object.assign({},obj1,obj2)
//Object.assign(terget,source)
console.log(obj3);

const Users = [
    {id: 1,
        name: "Meem"
    },
    {id: 2,
        name: "Poushie"
    },
    {id: 3,
        name:"Prapty"

    }
]

console.log(Users[1].name);
console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('id'));//true
console.log(tinderUser.hasOwnProperty('ss'));





