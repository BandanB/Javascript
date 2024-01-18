//Adding up arrays

const groupOne = ["cat", "dog"];
const groupTwo = ["tiger", "lion"];
console.log("Group one are", groupOne);
console.log("Group two are", groupTwo);

// groupOne.push(groupTwo);//Push second array to first array.Inside array second array will be a single element
// console.log(groupOne);
// console.log(groupOne[2][1]);//returns lion(second index of arrayone and first  index of sub array(array two) )

// let bothGroup = groupOne.concat(groupTwo);
// console.log(bothGroup);//now all elements of both array occopies their index position differently

//can concatinate using three dot  operator
// let bothGroupInAnotherway =[...groupOne,...groupTwo]
// console.log(bothGroupInAnotherway);

//Converting main array and sub array's into single array

// let one_inside_anotherArray = [1,2,3,4,[5,6,7],[7,8,9,[10,11,12]]]//there are different layers of array within single array
// console.log(one_inside_anotherArray);
// let computed_array = one_inside_anotherArray.flat(Infinity) //infinity simpy means go as dept as it exist.We can also specify partucular number as dept, example:flat(2)
// console.log(computed_array);

// console.log(Array.isArray("ktm")); //as a question an returns in boolean form
// console.log(Array.from('ktm'));//converts into array
// console.log(Array.from({name:"dohh"}))//returns empty arrray

// let num1 =11
// let num2 =15
// let num3 =16
// console.log(Array.of(num1,num2,num3));
// console.log(Array.of("ktm"));