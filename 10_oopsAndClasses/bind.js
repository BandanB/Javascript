const person = {
    firstName:"ram",
    lastName: "bhatt",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
let res =person.fullName()
console.log(res);


  const member = {
    firstName:"shyam",
    lastName: "shut",
  }
  
  let fullName = person.fullName.bind(member);
 
 