//Using normal call back function(Call back function is nothing but function which are passed as an argument to another function.)
// let arrayOne =[1,2,3,4,5]
// arrayOne.forEach( function(values) {
//     console.log(values);
// })

// let arrayOne =[1,2,3,4,5]
// arrayOne.forEach(function(element){
//     console.log(element +100);
// })

//usin arrow function
//We can pass arguments like values,index and array as below
// let  arrValues = ["Bandan","Suman","Dipesh"]
// arrValues.forEach( (values,index,array)=> {
//     console.log(values,index,array);
// })

//Created function outside and passed it's values as an argument
// let  arrValues = ["Bandan","Suman","Dipesh"]
// arrValues.forEach(myFunction)
// function myFunction(items){
//         console.log(items);
// }

//Accessed object values inside array

// let languagesArray = [
//   {
//     language: "Javascript",
//   },
//   {
//     language:"c++"
//   },
//   {
//     language:".net"
//   }
// ];

// languagesArray.forEach(function(objValues){
//     console.log(objValues.language);
// })
