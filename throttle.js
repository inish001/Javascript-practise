let expensive = () => {
  console.log("expensive ");
};
// this expensive function will print expensive multiple times as the button is clicked and affects the browser performance

let throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context =this;
    args = arguments;
    if (flag) {
      func.apply(context,arguments);  // func() does not provide better stability
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

let betterexp = throttle(expensive, 3000);
