const user ={
    username: "Meem",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got details from db");
        console.log(`usernam: ${this.username}`);
        

        
    }
}
console.log(user.username);
console.log(user.getUserDetails());

console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log((`welcome ${this.username}`));
        
    }
    return this

}
//console.log(User("Meem","2",true));

// const user1 =  User("Meem",21,true)
//  //console.log(user1);

// const user2 =  User("busra",18,false)

//console.log(user1);

const user1 =  new User("Meem",21,true)
const user2 = new  User("busra",18,false)
//without new it overwrites

console.log(user1);
console.log(user1.constructor);//[Function: User]



