// let fname= "Bandan"
// let phoneNum = 9988007867
// console.log("my name is "+fname+ " and my phone number is " +phoneNum)//Not recommenteduse 
// console.log(`My name is ${fname} and my phone number is ${phoneNum}`)//recommented to use because of better readiability

//String methods
//we can see different prototyping methods in browser console 

// const vally = "kathmandu"s
// console.log(typeof vally)
// console.log(vally.length)

// const vally =new String("kathmandu") //using new keyword(js boject)
// console.log(vally);//if you do same in browser console you`ll be able to see all prototypes
// console.log(vally.toUpperCase())
// console.log(vally.charAt(3))
// console.log(vally.indexOf('m'))
// console.log(vally.substring(0,4))//includes starting and ending index both
// console.log(vally.slice(0,2))//include starting index but not ending index


// let newValley = "    Pokhara     "
// console.log(newValley)
// console.log(newValley.trim());//used to remove spaces
// console.log(newValley.trimStart())//remove spaces before starting characters
// console.log(newValley.trimEnd())//remove spaces after character
// console.log(newValley.replace("Pokh",'arko'));//to replace any string or characters
// console.log(newValley.includes('ra'))//To ask whether some words belongs to the senence

//split method
// const secVally = "ilam-jhapa-kotshwor"
// const newChar = secVally.split('');
// console.log(newChar[3])
// console.log(secVally.split());
// console.log(secVally.split('-'));
// console.log(secVally.split('a'));
// console.log(secVally.split('a',1));
// console.log(secVally.split('a',2));

//small method(which converts strings into small font with html tag,but it is)
// let fruit = "mango"
// console.log(fruit.small());
// console.log(fruit.valueOf(fruit));//it gives the value stored in a string variable

//isWellFormed method(Checks whether a string contains any long surrogate or not and returns in beolean form)
// let animal = "ElePHAntab\uD800"
// console.log(animal.isWellFormed());
// console.log(animal.toWellFormed());//The toWellFormed() method of String values returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.
//console.log(animal.anchor(animal));//embeds strings with <a> tag not recommended to use

//at() vs chatAt()
// let names ="kathmandu"
// console.log(names.at([3]));
// console.log(names.charAt([2]));
// console.log(names.at([-3]));
// console.log(names.charAt([-2])); //chatAt doesnot support negative indexing
// console.log(names.charAt(names.length -2));//but not recomended to use for better readiablity

// let fruitt ="Apple"
// console.log(fruitt.big());//embeds with <big> tag
// console.log(fruitt.bold());//embeds with <b> tag whch makes bold
// console.log(fruitt.blink());//Embeds with <blink> tag

// console.log(fruitt.concat(" and mango"));




