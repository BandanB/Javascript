//iife(immediately invokeed functions expressions) is uded to protect from global scope pollution
//function should be wrappped inside ()
//() is used at end to make it iife
//;shoukd be used to make a function separate from other.simply ; is uded to stop iffe.And can run both iffe at the same time

(function myFuncton(){
    console.log("Normal function")
})();//named iiife

(()=>{
    console.log("Arrow function")
})()//unnamed iffe