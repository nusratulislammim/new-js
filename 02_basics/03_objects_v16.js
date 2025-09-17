
const sym = Symbol('key');


//object literals
const JsUser = {
    name: "Meem",//considered as "name"(string)
    age : 20,//key: values
    location: "Trishal",
    email: "meem@gmail.com",
    isLoggedIn: false,
    LastLoggedIn: ["saturday","Sunday"],
    1: 1, //1 key as int
    [sym] : "key1"
}

console.log(JsUser);

console.log(JsUser.email)
console.log(JsUser["email"]);//JsUser[email] will show error cs key is string
console.log(JsUser[1]);// 1(key) is  int
//accessing symbol
console.log(JsUser[sym]);




//symbol
// Creating symbols
const sym1 = Symbol('id'); 
const sym2 = Symbol('id');

console.log(sym1 === sym2); // false (unique even if description is same)

// Using symbol as object key
const user = {
  name: "Mim",
  [sym1]: 101
};

console.log(user.name);   // Mim
console.log(user[sym1]);  // 101


//update obj values
JsUser.email = "meem@google.com";
console.log(JsUser);

/*
Object.freeze(JsUser);
JsUser.email = "haha"//remain unchaged for using freeze
*/
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);//to print variable use (``), ("") will print as a string
    
}
console.log(JsUser.greeting2());




