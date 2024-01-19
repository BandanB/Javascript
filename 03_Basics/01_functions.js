//functions are simply Reusuablity of code 

// function myFuncton(){
//     console.log("HEllo my beautiful friends");
// }
// myFuncton();


//Adding two numbers

//with argument with retuen value
// function mySum(number1,number2){
//     return number1+number2;
// }
// let result =mySum(3,2);
// console.log(result);

//without argument without return value
// function add(){
//     let first =2
//     let second =3
//     console.log(first+second);
// }
// add();

//With argument without return value
// function add(number1,number2){
//     console.log(number1+number2);
// }
// add(3,2);

//without argument with return vallue
// function add(){
//     let first =2
//     let second =3
//     return first+second;
// }
// let result =add();
// console.log(result);


function userLogin(username){
    if(username===undefined){
        console.log("Enter the username")
    }
    else{
        console.log(`${username} logged in` )
    }
}
userLogin()