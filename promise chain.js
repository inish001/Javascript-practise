let promise = new Promise((resolve, reject) => {
  resolve();
});
// promise.then(()=>{
//     console.log("first");
// }).then(()=>{
//     setTimeout(()=>{
//         console.log("second");
//     },2000)
// }).then(()=>{
//     setTimeout(()=>{
//         console.log("third");
//     },1000);
// })

// this will resolve third first and then resolves second to over come this problem return a new promise from the second then() and only call resolve,reject once we are done

promise
  .then(() => {
    console.log("first");
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("second");
        resolve();
      }, 8000);
    });
  })
  .then(() => {
    setTimeout(() => {
      console.log("third");
    }, 1000);
  });
