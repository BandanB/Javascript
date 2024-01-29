class student{
    constructor(sname,password){
        this.sname = sname
        this.password =password
    }
    get sname(){
        return `${this._sname.toUpperCase()}`;
    }
    set sname(value){
        this._sname =value
    }
}
let details = new student("ram","abcabc");
console.log(details);
console.log(details.sname);