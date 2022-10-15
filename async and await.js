// async function test(){
//     return "hello";
// }
// console.log(test)


// await

// async function test(){
//     console.log("2: Message");
//     let response = await fetch("readme.txt");
//     console.log("3");
//     let result = await response.text();
//     console.log("4");
//     return result;
// }
// console.log("1: message");
// test();
// console.log("5");

async function test(){
    console.log("A");
   await console.log("B");
    console.log("C");
}
test();
console.log("D");
console.log("E");