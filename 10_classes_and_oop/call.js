function setUserName(username){
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password){
    setUserName.call(this,username)

    this.email = email
    this.password = password
}

const tea = new createUser("tea","tea.com","124")

console.log(tea);
