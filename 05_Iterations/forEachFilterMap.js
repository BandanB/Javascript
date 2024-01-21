
// let myArr = [1,2,3,4,5]
// myArr.forEach( (values)=> console.log(values))

//Can we return values and store to an another variable.No we can't like below. but there is another 
// let myArr=[1,2,3,4,5]
// let storeHere = myArr.forEach( (values) => {return values})
// console.log(storeHere)

//we cannot return directly but this can be a way to return the value
// let arrNums =[1,2,3,4,5,6,7]
// let arrReturnedNums =[]
// arrNums.forEach( (values)=> {
//     if(values>2){
//         return arrReturnedNums.push(values)
//     }
// })
//console.log(arrReturnedNums);
//or if we want to return values of an arays,we can use method called filter
//filter method creates an array of the value whose condition is satisfied
//let myArr=[1,2,3,4,5]
//if we use any scope we dont need to write return keyboard
//let storeHere = myArr.filter( (values) =>values)
//if we use scope {} then we need to write return keyword
//let storeHere = myArr.filter( (values) => {return values})
// console.log(storeHere)

//accessing values of an objects stored in an array using filter
// let arrMovies =[{
//     mName:"first movie",
//     genre:"romance",
//     publish:"2001"
// },{
//     mName:"second movie",
//     genre:"thriller",
//     publish:"2001"
// },{
//     mName:"third movie",
//     genre:"action",
//     publish:"2001"
// },{
//     mName:"fourth movie",
//     genre:"romance",
//     publish:"1990"
// }
// ];
//let moviesFilter =arrMovies.filter( (movies) => movies.mName=="fourth movie" )
// let moviesFilter =arrMovies.filter( (movies) => movies.genre=="romance" && movies .publish>=2000 )
// console.log(moviesFilter);

// //Map method (It creates a new array by performing action on each elemrnt of the array)
// //let existingArr = [1,2,3,4,5,6,7,8]
// //let arrayMap = existingArr.map( (values)=> values )
// //let arrayMap = existingArr.map( (values)=> values+10 )
// //console.log(arrayMap);

// //chaining concept in which we can use multile methods to manupulate an array

// let myArray = [1,2,3,4,5,6,7]
// let chainingArray = myArray
//                     .map( (numbers)=> numbers)
//                     .map( (numbers) => numbers*10)
//                     .map( (numbers)=> numbers+1)
//                     //simply it returns values whose condition are satisfied
//                     .filter( (numbers)=> numbers>40)
//                     //If we try to use map to return values with condition ,it simply returns in boolean form.
//                     .map( (numbers)=> numbers>40)
// console.log(chainingArray);

//Reduce method(As name suggests reduce method reduced the values of and array into single value)
//using function
// let arrValues =[1,2,3,4,5,6]
// let reducedValue = arrValues.reduce( function(accumulator,currentValue){
//     console.log(`accumulator ${accumulator} : current value ${currentValue}`);
//     return accumulator+currentValue;
// },0)
// console.log(reducedValue);

//Using arrow function
// let arrValues =[1,2,3,4,5,6]
// //here 4 is sent as an initial value
// let reducedValue =arrValues.reduce( (accumulator,currentValue)=>accumulator+currentValue ,4)
// console.log(reducedValue);

//Calculating prices of the shoping cart
// let arrShopingCart =[
//     {
//         itemName:"Silk",
//         itemPrice:400
//     },
//     {
//         itemName:"noodles",
//         itemPrice:200
//     },
//     {
//         itemName:"others",
//         itemPrice:400
//     },
// ]
// //Using reduce only
// let totalBill = arrShopingCart.reduce
//                     ((accumulator,objects)=> accumulator+objects.itemPrice,0);
// console.log(`totalBill is:${totalBill}`);
// //Using filter and reduce both
// let afterDiscount = arrShopingCart.filter
//                       ((objects) => objects.itemPrice>200)
//                       .reduce((accumulator,objects)=> accumulator+objects.itemPrice,0)
// console.log('Excluded below rs 200 as discount:');
// console.log(`afterDiscount: ${afterDiscount}`);