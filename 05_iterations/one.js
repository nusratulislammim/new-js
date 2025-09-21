//for

for(let i=0; i<=10; i++){
    const element = i;
    if(element==5){
        console.log("5 is the best number");
        
    }
    console.log(element);
    
}

for(let i =1;i<=10;i++){
    console.log(`Outer lopp value: ${i}`);
    for(let j=1;j<=10;j++){
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i+'*'+j+'='+i*j);
        
    }
}

let myarr = ["flash","batman","superman"]

console.log(myarr.length);

for(let i=0;i<myarr.length;i++){
    const element = myarr[i];
    console.log(element)
}


//break and continue

for(let i=0; i<=10; i++){
    const element = i;
    if(element==5){
        console.log("5 is Detected");
        break;
    }
    console.log(element);
    
}
for(let i=0; i<=10; i++){
    const element = i;
    if(element==5){
        console.log("5 is Detected");
        continue;
    }
    console.log(element);
    
}
