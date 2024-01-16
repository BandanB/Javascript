//"use strict"; //treat all js code as newer version
//Datatypes: refers to the type of the value which are stored in variables.
//premitives datatypes
//string
//number
//boolean
//symbol:to define uniqueness
//BigInt
//undefined 
//null

//non-premitive(reference type)
//array,objects,functions

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them

// let fname= "Bandan"
// let obtainmarks  = 90
//let mark =90.1111 //it also belongs to number type(Injs there is no float datatypes)
// let isClicked=true
// let food;
// let place = null

// console.table(typeof(fname) )
// console.table(typeof(90) )
// console.table(typeof(true) )
// console.log(typeof undefined)
// console.log(typeof null)

//symbol datatype
// let yourID = Symbol('1212')
// let yourID2 = Symbol('1212') //Eventhough both values are same but they are treated as differently,means they are not equal 
// console.log(yourID==yourID2)
// console.log(typeof yourID);

//BigInt
// let bigValue  =122234477774n
// console.log(typeof bigValue);

//example of non premitive datatypes  array,objects and functions

// let friends=["Suman","Dipesh","Ayushma"];
// console.log(typeof friends);
// console.log(friends);

// let student = {
//     name:"Bandan",
//     id:22
// }
// console.log(typeof student);
// console.log(student);

// let myFunction = function(){
//     console.log("Hello my friends");
// }
// console.log(typeof myFunction);
// console.log(myFunction)

/*Return type of variables in JavaScripts
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/

//Stack and heap
//All primitive datatypes stored in stack 
//and all non-primitive datatypes stord in heap
//If you change value of variable,Stack will give you a copy of that variable aad previous value will remain same 
//But if you change value of variable which is stored in heap,value will be changed in a variable