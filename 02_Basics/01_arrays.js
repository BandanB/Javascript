//Simple array decleraion
// const myArray =["Suman","Dipesh","Bandan"]
// console.log(myArray);
// console.log(myArray[1]);
// const myArray2 = [10,20,30]
// console.log(myArray2[2]);

// const anotherWay = new Array('cat','dog','both') 
// console.log(anotherWay);

//Array methods
let myArray3 = [2,3,5,6,7]
// myArray3.push(10);//push the element to an array of last index
// myArray3.pop();//pop the last element of an array
// myArray3.unshift(12)//push the element at th first index
// myArray3.shift(); //pops the first element of an array

// console.log(myArray3);

//We can bind one array with another 
// let bindArray = myArray3.join();//join method adds all the elements of array into a string
// console.log(bindArray); 
// console.log(typeof (bindArray));

// console.log(myArray3.includes(8));//includes takes as a question,returns in boolean form
// console.log(myArray3.indexOf(6));


//Slice and splice methods
// let array4 = new Array(1,2,3,4,5,6,7)
// console.log("Origional",array4);
// console.log("Slice one",array4.slice(0,4));//It grabs some elements of array and doesn't affect origionl array. and its first element will be inclusive and last one willl be exclusive
// console.log("After slice",array4);//there will no change in origional array


//console.log("Splice one",array4.splice(2,3));//Delete or replace elements in an array it affects origional array means doesn't get a copy
// console.log("After splice origional arra becomes", array4);
// array4.splice(2,3,2,2,2);
// console.log("After value replace origional array will be",array4);


