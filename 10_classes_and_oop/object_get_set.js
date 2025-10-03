const User = {
    _email: 'meem@gmail.com',
    _password: "eee",


get email(){
    return this._email.toUpperCase()
},
set email(value){
    this._email = value
}

}

const tea = Object.create(User)
console.log(tea.email);
