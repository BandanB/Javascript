//Number 
// let myID = 4455
// console.log(myID);

// let myId2 = new Number(3344)//returns number with type
// console.log(myId2);
// console.log(myId2.toString());
// console.log(myId2.toString().length);

//Another prototyping methods
//toFixed,toPrecision
// let number = 100.345
// let number1 = 100.55
// let number2 = 106.645
// console.log(number.toFixed(2));//It gives 2 fixed numbers after decimal
// console.log(number.toPrecision(4));//It precise(round up) the numbers as per position taken
// console.log(number1.toPrecision(4));
// console.log(number2.toPrecision(4));
// console.log(number2.toPrecision(3));

//toExponential method(convert number in exponential form)
// let value = 12345
// console.log(value.toExponential());


//toLocaleString ( returns a string with a language-sensitive representation of this number)
// let capital = 1000000
// console.log(capital.toLocaleString());//by default
// console.log(capital.toLocaleString('en-in'));//representation of number in indian english

//constructor prototyping method is yet to be done

//In browser console if you go and write number and press enter, there we can see different other methods of number like min value max valuee etc
//EX:number.MAX_VALUE

//_______________________________________________________________________________________
// let a = Math.PI
// console.log(a);
// console.log(Math);
// console.log(Math.abs(-6));//neglates negative sign
// console.log(Math.round(6.4));//if decimal value is grater than or equals to  5 it will take upper value other wise takes lower value
// console.log(Math.ceil(6.3));//takes upper value 
// console.log(Math.floor(6.9));//takes lower value
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));


//Random Values
// console.log(Math.random());//by default it returns random number between 01 and 1
// console.log(Math.random()*10);//gives random number in between 0 and 9
// console.log((Math.random()*10) +1);//gives random number in between 1 and 10
// console.log(Math.floor(Math.random()*10) +1);//gives random number in between 1 and 10 without decimal

//But if we want to set our limit, lets make the range in between 10 to 20
console.log(Math.floor(Math.random()*(15-10+1) +10));



