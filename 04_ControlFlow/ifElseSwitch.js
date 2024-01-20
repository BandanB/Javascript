// const userLoggedIn= false
// if(userLoggedIn){
//     console.log("Now you can use this page")
// }
// else{
//     console.log("Enter your username and password first");
// }

//Allow if user is valid
// const userIsLoggedIn = true
// const userHasCard = true
const userhasGoogleID = false
const userHasGmail = true
// if(userIsLoggedIn && userHasCard){
//     console.log("youre allowed")
// } 
// if(userhasGoogleID || userHasGmail){
//     console.log("You can log in");
// }

//In case of Temperature
//  const temp = 17
// if(temp<=50 && temp>=40){
//     console.log(`Extreamly hot`)
// }
// else if(temp<=40 && temp>=30){
//     console.log("very Hot");
// }
// else if(temp<=30 && temp>=20){
//     console.log("Warm");
// }
// else{
//     console.log("cold");
// }


//Swich case
// const weekDay = "no day";

// switch (weekDay) {
//   case "sunday":
//     console.log(1);
//     break;
//   case "monday":
//     console.log(2);
//     break;
//   case "tuesday":
//     console.log(3);
//     break;
//   case "wednesday":
//     console.log(4);
//     break;
//   case "thursday":
//     console.log(5);
//     break;
//   case "friday":
//     console.log(6);
//     break;
// case "saturday":
//     console.log(7);
//     break;
//   default:
//         console.log("there is no any days called", `${weekDay}`);
//     break;
// }


//truthy and falsy values- It specifies,if there is empty value in a variable,which empty values are treated as true and which are trated as false
// const fname = "" //treated as false value
// if(fname){
//     console.log("executed");
// }
// const lname = []//treated as true value
// if(lname){
//     console.log("executed");
// }

//falsy values:- 0,-0,bigInt 0n,null,undefined,"" ,Nan etc
//truety:-"0"," ","false",[],{},function() etc.Everything inside "" is treated as truthy values

//check whether the array is empty or not
// let checkArry = []
// if(checkArry.length==0){
//     console.log("it is empty");
// }
//check whether the object is empty or not
// const checkObject = {}
// if(Object.keys(checkObject).length==0){
//     console.log("Object is empty");
// }

//nullish coalescing operator ?? (assign value in case it comes as null and undefined)
let number = 5??10 //whichever comes first
let number2 = null??10//if values comes as null default value can be assigned
let fullname = undefined??"okay"//if values comes as undefined default value can be assigned
// console.log(number);
// console.log(number2);
// console.log(fullname);


//ternery operator
// let num = 6
// num % 2==0 ?console.log("Even number") :console.log("Odd number");