const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async task is completed`);
        resolve()

    },1000)
})

promise1.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        
    },1000)
}).then(function(){
    console.log("aync 2 resolved");
    
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"nusratul",email:"nusratul@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"meem",password:"1234"})
        }
        else{
            reject('ERROR: something went wrong..')
        }
    },1000)
})
promise4.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("The promise is either resolved or rejected")
)

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JS",password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromise5() {
    try{
        const response = await promise5
        console.log(response);
        
    }
    catch(error){
        console.log(error); 
    }
}
consumePromise5()

// async function getallUsers(params) {
//     try{
//         const response = await fetch('https://api.github.com/users/nusratulislammim')
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E: ",error);
        
//     }
// }
// getallUsers()


fetch('https://api.github.com/users/nusratulislammim')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error)

)

Promise.all
