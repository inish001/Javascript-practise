let name = {
  firstname: "nishant",
  lastname: "fulara",
};
let printname = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
};
let printname1 = printname.bind(name, "uttrakhand", "Delhi");
printname1(); // this was by using bind function

// now i am creating my own bind function

// Function.prototype.mybind= function(...args){
//     let obj = this;
//     return function(){
//         obj.call(args[0]);
//     }
// }
// let printname2 = printname.mybind(name,"uttrakhand","delhi");
// printname2()

// what if we have arguments also in the function our above my bind() is printing undefined for hometown and state

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);   // will remove first element from list and return all remaining elements
  return function (...args2) {    // printname2(arguments) these returned arguments would be store in an array ...args2
    obj.apply(args[0], [...params, ...args2]); // apply is used because we cant pass the array as a argument in call method and we are concating both arrays
  };
};
let printname2 = printname.mybind(name, "uttrakhand", "up");
printname2();
