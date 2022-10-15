// Promises

// function inside .then() is ran as resolve()
// function inside .catch() is ran as reject()

// let promise = new Promise(function (resolve, reject) {
//   const x = "hello";
//   const y = "helo";
//   if (x == y) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// // below both codes written are same
// promise.then((result)=> {
//   console.log("sucess");
// });
// promise.catch(function () {
//   console.log("failed");
// });

// using this method in  promise when changing the comparing string showing  failed also with an error in the console it is because then takes two functions as arguments and we are giving only one which is for success and not for rejection,, better way is to use catch

// promise.
// then(function(){
//     console.log("success");
// }).
// catch(function(){
//     console.log("failed");
// })

// .then() it takes 2 functions as paramenter first func is executed if promise is resolved and received
// second func is executed if promise is rejected and an error is received

// var promise = new Promise(function (resolve, reject) {
//     reject(console.log("reject"));   // using console inside will print it on the console
//    //resolve("resolved");
// });
// promise.then(
//   function (result) {
//     console.log(result);
//   },
//   function (error) {
//     console.log("error");
//   }
// );

