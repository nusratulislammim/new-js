class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    createId(){
        return `123`
    }
}

const meem = new User("Meem")
console.log(meem.createId());
//console.log(meem.logMe());


class teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const Meem = new teacher("Meem","nusratul@gmail.com")

console.log(Meem.createId());
