//A data descriptor is a property with a value that may or may not be writable

// let checkProperty = Math.PI
// console.log(checkProperty);
// let descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);
//Here we can see its descriptor proprties are  not writable,eneumurable,and configurble 

let student ={
    name:"Bandn",
    character:"Awesome",
}
console.log(student);
// let descriptorCheck = Object.getOwnPropertyDescriptor(student,"name")
// console.log(descriptorCheck);
//Here we can see its descriptor proprties are writable,eneumurable,and configurble 
//So we can set decriptor properties

Object.defineProperty(student,'name',{
    writable:false,
    enumerable:false,
});
let descriptorCheck = Object.getOwnPropertyDescriptor(student,"name")
console.log(descriptorCheck);
