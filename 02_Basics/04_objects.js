
// let details = new Object(); //object of constructor
// //let details ={}
// details.name="suman"
// details.id =4
// console.log(details);

let student ={
    id:4,
    fullName:{
        studentName:{
            firstName:"Bandan",
            lastName:"basnet"
        }
    }
}
//we can access different layer of objets(nested objects) like below
// console.log(student);
// console.log(student.fullName);
//console.log(student.fullName?.studentName);



//concatinate two or more onjects
let first={1:'a',2:'b'}
let second={3:'c',4:'d'}
let third={5:'e',6:'f'}

// let final = {first,second,third}//returns nested object
// console.log(final);

//using assign method
// let final1 = Object.assign({},first,second,third)//Returns all values of different  object as single object
// console.log(final1);

//using three dot operator
//const final2 = {...first,...second,...third}
//console.log(final2);

//Accessing objects values inside array(objects arrays can come from databse)
// let arrayDatabase =[
//     {
//         name:"strong boy",
//         id:"6654A"
//     },{
//         address:"nepal"
//     },
//     {

//     }
// ]
// console.log(arrayDatabase[0].name);

// //Accessing keys of an object
// console.log(Object.keys(student));//returns all keys in array
// console.log(Object.values(student));//returns all values in an aray
// console.log(Object.entries(student));//returns seperate array for one key and it's value inside main array
// console.log(student.hasOwnProperty('id'));


//object destructuring is tee process of unpacking properties of object or an values of array to the distinct variable

const college = {
    name:"samriddhi",
    location:"lokhanthali",
    contactNumber:"8969678987656"
}
const {contactNumber: contact} = college
console.log(contact);
