class user{
    constructor(username,password){
        this.username = username
        this.password=password;
    }
    encryptPassword(){
            return `${this.password}xyxy`
    }
    changeCase(){
       return `${this.username.toUpperCase()}`
    
}
}
const details= new user("Shyam","1212121")
// console.log(details);
console.log(details.encryptPassword());
console.log(details.changeCase());