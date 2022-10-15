
let person = {
  firstname: "Nishant",
  lastname: "Fulara",
  age: 21,
};
console.log(person);
console.log("------------------------------");

let goodperson = new Proxy(person, {
  // get function
  get: function (target, prop, receiver) {
    console.log(prop + `is accessed`);
    // we can add a custom property in the proxy object inside the get function
    // this property will be present dynamically
    // we can add more properties inside the proxy lets add another one lets say full name which display full name 
    if(prop==="fullname"){
        return (target.firstname + target.lastname);
    }
    if (prop === "allowedtovote") {
      if (target.age >= 18) {
        return true;
      } else {
        return false;
      }
    }
    return Reflect.get(target,prop,receiver);
    //return target[prop];
  },

  // set function
  set: function (target, prop, value) {
    if (prop === "age" && value > 200) {
      throw new Error("not a valid age");
    }
    return Reflect.set(target,prop,value);
    return true;
  },
});
console.log(goodperson);
goodperson.age = 29;
// age is updated to 29 only if it is lower than 200 as mentioned in the if condition
console.log(goodperson);
console.log(goodperson.allowedtovote);
console.log(goodperson.fullname);
