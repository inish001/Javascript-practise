let array = [
  {
    firstname: "nishant",
    lastname: "fulara",
    gender: "m",
  },

  {
    firstname: "harsh",
    lastname: "mehta",
    gender: "m",
  },

  {
    firstname: "shewta",
    lastname: "mishra",
    gender: "f",
  },
  {
    firstname: "harsh",
    lastname: "mehta",
    gender: "m",
  },
];

// printing full name for all
// let result = array.map((x) => {
//   return (x.firstname + x.lastname);
// });
// console.log(result);

// for finding gender m

// let result = array.filter((x) => {
//   if (x.gender === "m") {
//     return x;
//   }
// });
// console.log(result);

// for printing number of gender

// let result = array.reduce((acc, curr) => {
//   if(acc[curr.gender]){
//     acc[curr.gender] = ++ acc[curr.gender]
//   }else{
//     acc[curr.gender] =1
//   }
//   return acc;
// }, {});
// console.log(result);

// printing their first name using reduce

// let result = array.reduce((acc, curr) => acc + curr.firstname, {});
// console.log(result);


let result = array.reduce((acc,curr)=>{
  acc += curr.firstname + curr.lastname;
  console.log(acc);
  return acc;
},"abc")
console.log(result)