//call pass the execution context of current function to another  function
function setUsername(username){
    this.username =username
}
function user(username,password){
    setUsername.call(this,username)
    this.password=password
    // console.log(username,password);
}
let details =new user("ram","3423453");
console.log(details);