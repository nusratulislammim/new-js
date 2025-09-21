const coding = ["js","Ruby","python","Java"]

coding.forEach(function(val){
    console.log(val);
    
})

coding.forEach((item)=>{
    console.log(item);
});

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe)

coding.forEach((item,indexedDB,arr)=>{
    console.log(item,indexedDB,arr);
    
})

const myCoding = [
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "javaSrcipt",
        languageFileName: "js"
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})