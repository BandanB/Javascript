//Songleton -The Singleton Pattern ensures that a class can only have a single instance throughout the lifetime of an application
//object of constructor(singleton object)


//object of literials(not singleton object)
let symbolNew = Symbol("symbol1")
// console.log(typeof symbolNew );
//object literials
let student = {
    [symbolNew]:"symbol1",
    fname:"Bandan",
    "last name":"Basnet",
    roll:2,
    email:"coll@gmail.com",
    isLoggedIn:true,
    contactNums :[111,22,333]
}
// console.log(student.fname);
// console.log(student.lname);//if we use . it doesnot support key which has space, so use []
// console.log(student["last name"]);
// console.log(student["contactNums"]);
// console.log(student[symbolNew]);

// student.fname ="someone"//change the value of fname key
// Object.freeze(student);//now we cannot make any changes further
// student.fname="nowWeCannot"
// console.log(student)

// student.addFunction = function(){
//     console.log("hello");
// }
// console.log(student.addFunction());


// student.addFunction = function(){
//     console.log(`hello,${this.fname}`);
// }
// console.log(student.addFunction());
// console.log(student);
