// object creation

// 1. Factory Function Pattern

// function factory(name,age,state){
//     return{
//         name : name,
//         age : age,
//         state : state,
//         info : function(){
//             console.log(this.name + " "+ this.age + " " + this.state);
//         }
//     }
// }
// const person1 = factory("Nishant",21,"Delhi");
// const person2 = factory("Rahul",22,"UttarPradesh");
// person1.info();
// person2.info();

// 2. Constructor Function Pattern

// function Factory(name,age,state){
//     this.name=name;
//     this.age =age;
//     this.state = state;
//     this.info = function(){
//         console.log(this.name + " "+ this.age + " " + this.state);
//     }
// }
// const person1 = new Factory("Nishant",21,"Delhi");
// const person2 = new Factory("Rahul",26,"Uttarpradesh");
// person1.info();
// person2.info();

// 3. Prototype Pattern

// function Factory(){}
// Factory.prototype.name = NaN;
// Factory.prototype.age = NaN;
// Factory.prototype.state = NaN;
// Factory.prototype.info = function(){
//     console.log(this.name + " "+ this.age + " " + this.state);
// };
// const person1 = new Factory();
// //person1.name="Nishant";
// person1.age=21;
// person1.state="Delhi";
// person1.info();
// console.log('name' in person1); // true as it in searches for the property from the object roots and then check into its prototype
// console.log(person1.hasOwnProperty('name'));  // false as hasown restricts its search to the object
// const person2 = new Factory();
// person2.name="Raj";
// person2.age=22;
// person2.state="Indore";
// person2.info();

// 4. Dynamic Prototype Pattern

// function Factory(name,age,state){
//     this.name=name;
//     this.age=age;
//     this.state=state;
//     if(typeof this.info !== 'function'){ // this will create the function at the first time when we create the object and call the function using the object but at the second time it will not create a new function because it was created before when the object one was created
//         Factory.prototype.info = function(){
//             console.log(this.name + " "+ this.age + " " + this.state);
//         }
//     }
// }
// const person1 = new Factory("Nishant",22,"delhi");
// const person2 = new Factory("Nishant",22,"delhi");
// person1.info();
// person2.info();
