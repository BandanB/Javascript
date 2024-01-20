//Global and local scope
//var(global scope) and let or const(local scope).Local scope has two types: block and functon scope.
//var a=10
// {
//   var a = 5;
//   let b = 10;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
//console.log(b); //It won't return anything , since it is local scope


//Scope in nested situations

// function parent(){
//     let pname = "This is parent"
//     //console.log(pname);
//     function child(){
//         let cname = "This is child"
//         //console.log(pname);//Here child can access its parent because its inside the parent function
//        // console.log(cname);
//     }
//     child();
//     console.log(cname);//But parent function cannot access its child function because of it's local scope(also called block scope)
// }
// parent();


//Block vs function scope:-Both are local scope

function blockVsFunctionScope(){
    if(true){
        var first =5//function scope and can work on many block but inside function, but cannot work outside a function
        let second = 10//local scope only work inside block {}.
        let third =15//local scope only work inside block
        }
       // console.log(first);//It can access
        // console.log(second);//cannot access
        // console.log(third);//cannot access

}
//console.log(first); cannot access
blockVsFunctionScope();


//Can var has function scope anywhere??
// {
//     {
//         {
//         var num1=10//It will have function scope only if it is declered at function,otherwise it will always have global scope
//     }
//     }
//     console.log(num1);//can access
// }
// console.log(num1);//Can access


//Can let and const will always have block scope?
// {
//     {
//         let num2=40
//     }
//     console.log(num2);//But let and cons will always or anywhere have block scope
// }
