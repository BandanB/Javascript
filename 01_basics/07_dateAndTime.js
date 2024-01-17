// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toString());
// console.log(currentDate.toTimeString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleString());
// console.log(currentDate.toISOString());
// console.log(currentDate.toUTCString());
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toLocaleTimeString());
// console.log(currentDate.getTimezoneOffset());
// console.log(currentDate.toJSON());
// console.log(currentDate.getDate());//returns day of the month
// console.log(currentDate.getDay());//returns day of the week
// console.log(currentDate.getMonth());//returns month 
// console.log(currentDate.getFullYear());//returns year
// console.log(currentDate.getHours());//returns year

//Declearing time 

// let myTime = new Date(2024,1,17,5,34,30);//Month starts from 0 in array
// let myTime1 = new Date("2024-1-17");//Month starts from 1 in string
// let myTime2 = new Date("01-17-2024");//nepali format
// console.log(myTime.toString());
// console.log(myTime1.toString());
// console.log(myTime1.toLocaleString());

//Timestamp
// let myTimeStamp = Date.now();
// console.log(myTimeStamp); //Gives time in milisecond since 1970 till now
// //console.log(Date.now());
// console.log(myTimeStamp/1000);//in second
// console.log(Math.floor(myTimeStamp/1000));//removes decimal values

//console.log(`year ${new Date().getFullYear()} and month ${new Date().getMonth()+1} and day ${new Date().getDate()}`);

// `` (string interpolation)In JavaScript, interpolation is the process of inserting strings or values into an existing string for various purposes.

//Defining properties within a single object
// let newDate =new Date()
// let myobj = newDate.toLocaleString('default',{
//     year:"numeric",
//     weekday:"long",//press control+space to see other properties
//     day:"2-digit",
//     month:"long",
//     hour:"2-digit",
// });
// console.log(myobj);