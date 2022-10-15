//console.log("promiseall")

// promise all()

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     consoler.log("first promise");
//     resolve(1);
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("second promise");
//     resolve(2);
//   }, 2000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("third promise");
//     reject("failed");
//   }, 3000);
// });
// let p4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("fourth promise");
//         resolve(4);
//     },4000);
// })
// promise.all([p1,p2,p3,p4]);

// shorter way by creating a function()

let promisecall = function (data, message) {
  return function (resolve, reject) {
    setTimeout(() => {
      console.log(`the ${message} promise is resolved`);
      resolve(data);
    }, data * 1000);
  };
};
let p1 = new Promise(promisecall(3, "first"));
let p2 = new Promise(function (resolve, reject) {
  reject("rejected");
});
let p3 = new Promise(promisecall(4, "third"));
let p4 = new Promise(promisecall(5, "fourth"));

let total = 0;

//Promise.all([p1,p2,p3,p4])
// when the second promise get rejected then then() function is not called even when the other two promises are resolved , we will not be able to see the result and the total in the array if any promise get rejected in the promise.all() method

//Promise.allSettled([p1, p2, p3, p4])
// all settled shows all the promises with status 'fulfilled' or 'rejected' even if one of the promise gets rejected

// Promise.any([p1,p2,p3,p4])
// any() shows the promise that resolves firsts it neglects the rejected promises and shows the one resolved first and only shows rejection if all promises are rejected

Promise.race([p1, p2, p3, p4])
  // promise.race() shows the promise which resolves faster and if there is any rejection in the promises it will resolve the other promises but did not show the result value
  .then((result) => {
    // for (let i in result) {
    //   total += result[i];
    // }
    console.log("result ", result);
    // console.log("total ", total);
  })
  .catch((Error) => {
    console.log(Error);
  });
