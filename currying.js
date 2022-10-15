
// curring can be done by two methods 
// 1. using bind function

// let multi = function (x, y) {
//   console.log(x * y);
// };
// let multibytwo = multi.bind(this, 2);
// multibytwo(5); // 10

// let multibytwo= multi.bind(this,2,3); // if we pass one more parameter inside it, this 3(parameter) will eventually end up being y over here
// multibytwo(5); // so it will ignore 5 which is pass into this over method here

// let multibytwo = multi.bind(this); // if we dont pass any parameters but give arguments at the calling time
// multibytwo(2, 3); // its output will be 6

// let multibythree = multi.bind(this, 3);
// multibythree(5); // its output will be 15

// 2. using closures function

let multi = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multibytwo = multi(2);
multibytwo(3);