// class animal{
//     constructor(color){
//         this.color=color
//     }
//     animalColor(){
//         console.log(`Animal has ${this.color} color`);
//     }
// }
// // let obj = new animal("white");
// // obj.animalColor();
// class monkey extends animal{
//     another(){
//         console.log(`monkey has ${this.color} color`)
//     }
// }
// let monk = new monkey("white");
// monk.another();

class animal{
    constructor(leg){
        this.leg =leg
    }
    animalHas(){
        console.log(`Animal has ${this.leg} legs`);
    }
}
// let animalObj = new animal("4")
// animalObj.animalHas();

//using super keyword
//super keyword refers to the properties of parent element
//Static keyword doesn't allow any object or child to access 
class monkey extends animal{
    constructor(leg,color){
        super(leg)
        this.color = color
    }
    static monkeyHas(){
        console.log(`monkey has ${this.leg} legs and ${this.color} color`);
    }
}
let monk = new monkey("two","white")
monk.monkeyHas();