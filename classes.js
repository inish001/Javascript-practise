// class employee{
//     constructor(name,experience,division){
//         this.name=name;
//         this.experience=experience;
//         this.division=division;
//     }
//     intro(){
//         console.log(`Hello my name is ${this.name} and my experience is ${this.experience}`);
//     }
//     joiningyear(){
//         return (2022-this.experience);
//     }
//     static add(a,b){
//         return a+b;
//     }
// }
// nishant =new employee("Nishant",1,"A");
// // console.log(employee.add(34,56));
// //console.log(nishant.joiningyear());

// creating a new class programmer with all the properties of the employees class

// class programmer extends employee{
//     constructor(name,experience,division,language){
//         super(name,experience,division);  // this means whenever the object of class programmer is created then call super means to call the constructor of the previous class from where it was coming
//         this.language=language
//     }
// }
// rohan = new programmer("Rohan",3,"A","javascript")
// console.log(rohan)
