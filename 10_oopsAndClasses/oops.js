//Object literials
// let user ={
//     username:"Bandan",
//     passworld:3343454,
//     getData:function(){
//         console.log(`username:${this.username}`);
//         console.log(this);

//     }

// }
// console.log(user.username);
// console.log(user.getData());

//Object constructor(new)
//creates new instance each time
function user(username,isLoggedIn){
    this.username = username
    this.isLoggedIn =isLoggedIn
    return this;
    this.myfunction =function(){
        console.log(`hello:${this.username}`);
    }
}
const usrOne = new  user("Bandan",true);
const userTwo = new  user("Suman",true)
console.log(usrOne);
console.log(userTwo);
