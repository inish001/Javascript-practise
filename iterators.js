// function fruitsiterator(values) {
//   let next_index = 0;
//   return {
//     next: function () {
//       if (next_index < values) {
//         return {
//           value: values[next_index++],
//           done: true,
//         };
//       } else {
//         return {
//           done: false,
//         };
//       }
//     },
//   };
// }
// const fruits = fruitsiterator();
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// let arr =["apple","banana","grapes","oranges"];
// let values = arr.length;
// console.log(arr);

// easy way

let x = [100,200,300,400,5000,600,7070];
let y = x[Symbol.iterator]();
// y.next(); // if we dont want to print the first value so i removed the console from it .. but it will iterate from the array as next function is present
// console.log(y.next().value); // .value if want to see the value
// console.log(y.next().done);  // .done if want to see whether it is done or not
// console.log(y.next());

// using loop if there are more values which we have to iterate

let result = y.next();
while(!result.done){
    console.log(result.value);
    y.next();
}