//Getting indefinite number of arguments
// function getCartValues(prices){
//     return prices;
// }
//console.log(getCartValues(200,400,500));//here we cannot get indefinite number of arguments. that's why we can use three dot operator as below to get all of them. Ex: ...prices, which is called rest parameters.

//using rest parameter syntax
// function getCartValues(...prices){
//     return prices;
// }
// console.log(getCartValues(200,400,500));





//Accessing values of array using function

//let myarr = [200,400,600]
// function getArray(anyArray){
//     return `${myarr[1]}`
// }
// //console.log(getArray(myarr))//We get values of created array here
// console.log(getArray(myarr=[200,400,600]));//We created a array and get that value


//Accessing value of objects using function

// let myObject = {
//   name: "Bandan",
//   id: 1000,
// };

// function getObject(getAnyObject) {
//   return `name is ${myObject.name} and id is ${myObject.id}`;
// }
//console.log(getObject(myObject));//We access the value of created object
/*console.log(getObject( (myObject = {
      name: "Suman",
      id: 5000,
    })
  )
);//we created an object and accessed the values*/


//Hoisting:- How to decleare functions? where are they kept in? how is their execution context?

//Ways to declear functions
myFuncton();
function myFuncton(){
    console.log("It will run even function is called before")
}

myFuncton2();
let myFuncton2=function(){
    console.log("It won't run")//It wont run 
}
