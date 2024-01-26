// let myPromise  = new Promise(function(resoleve,reject){
// //Used to do an async task
//     setTimeout(function(){
//         console.log("Async task 1.Promise is created");
//         resoleve();
//     },1000)
// });
// myPromise.then(function(){
//     console.log("Promise is consumed.Async two resolved")
// })

// //Another way
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two .Promise is cretated");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('Promise is consumed.Async 2 resolved');
// })

//third promise

// let thirdPromise = new Promise(function(resoleve,reject){
//      setTimeout(function(){
//         resoleve({subject:"java Script",library:"react"})
//      },1000)
// })
// thirdPromise.then(function(objOne){
//     console.log(objOne)
// })

//promise four
// let promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =true
//         if(!error){
//             resolve({subject:"JavaScript",library:"react"})
//         }else{
//             reject('Error occured::')
//         }
//     },1000)
// })
// promiseFour
// .then(function(objTWo){
// console.log(objTWo);
// return objTWo.subject;
// })
// .then(function(subj){
//     console.log(subj);
// })
// .catch(function(errorReturnVAlue){
//     console.log(errorReturnVAlue);
// })
// .finally(function(){
//     console.log("Promise is epither resolved or rejected");
// })

//USing async await
// let promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =true
//         if(!error){
//             resolve({subject:"JavaScript",library:"react"})
//         }else{
//             reject('Error occured::')
//         }
//     },1000)
// })
// async function getPromiseFive(){
//     try {
//         let response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getPromiseFive();

//try catch in JSon file

// async function getJson(){
//     try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getJson();

// then cathch in json fille

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })
// .catch("Error detected")