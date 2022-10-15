const users = [
  {
    firstName: "Oliver",
    lastName: "Jake",
    isActive: true,
    role: "student",
    registeredAt: 1625112000000,
  },
  {
    firstName: "Connor",
    lastName: "Liam",
    isActive: true,
    role: "student",
    registeredAt: 1609477200000,
  },
  {
    firstName: "Charlie",
    lastName: "",
    isActive: true,
    role: "admin",
    registeredAt: 1619841600000,
  },
  {
    firstName: "Thomas",
    lastName: "",
    isActive: true,
    role: "student",
    registeredAt: 1612155600000,
  },
  {
    firstName: "George",
    lastName: "Reece",
    isActive: true,
    role: "superAdmin",
    registeredAt: 1614574800000,
  },
  {
    firstName: "Oscar",
    lastName: "Rhys",
    isActive: false,
    role: "superAdmin",
    registeredAt: 1617249600000,
  },
  {
    firstName: "William",
    lastName: "Damian",
    isActive: false,
    role: "student",
    registeredAt: 1609477200000,
  },
];

// ans 1

// let result = users.filter((user)=>{
//     if(!user.isActive){
//         return user;
//     }
// })
// console.log(result);

// ans 2

// let getUserFirstAndLastNameAppended =()=>{
//     let result = users.map((user)=>{
//         if(user.lastName==""){
//             return user.firstName;
//         }
//         else{
//             return user.firstName + " " + user.lastName;
//         }
//     })
//     console.log(result)
// }
// getUserFirstAndLastNameAppended();

// ans 3

let fun =(rolee,date)=>{
let count = 0;
let result = users.reduce((user) => {
  if (user.role === rolee && user.registeredAt >= date) {
    count++;
    console.log(count)
  }
})}
fun("admin",1612155600000);
