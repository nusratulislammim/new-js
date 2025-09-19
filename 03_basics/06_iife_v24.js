//immediate invoked Function Expressions

(function pasta(){
    console.log(`DB connected`);
    
})();//semi-colon is needed

( (name)=> {
    console.log(`DB connected to ${name}`);
    
})('Meem')