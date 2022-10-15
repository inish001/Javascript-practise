// event propagation can be done using two dom methods

// 1. Event Bubbling

// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("grand parent clicked");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("parent clicked");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("child clicked");
// });

// in the console whenever i am clicking on the child div the sequence it showing is child->parent->grandparent and when clicked
// on the parent div sequence it showing is parent->grand parent and when again clicked on child same sequence comes

// if third argument is not passed in the event listener it will be event bubbling by default or it is like passing the third arfument as false

// document.querySelector("#grandparent").addEventListener("click", () => {
//     console.log("grand parent clicked");
//   },true);

//   document.querySelector("#parent").addEventListener("click", () => {
//     console.log("parent clicked");
//   },true);

//   document.querySelector("#child").addEventListener("click", () => {
//     console.log("child clicked");
//   },true);

// now i had passed the third argument as true then it will work as a event capturing method and the sequence would be trickling down
// sequence = grandparent->parent->child and when clicked on the parent div it will show grandparent->parent

// if we changed any of the parameter to true or false

// document.querySelector("#grandparent").addEventListener("click", () => {
//     console.log("grand parent clicked");
//   },true);   // use capturing over here

//   document.querySelector("#parent").addEventListener("click", () => {
//     console.log("parent clicked");
//   },false);  // use bubbling over here

//   document.querySelector("#child").addEventListener("click", () => {
//     console.log("child clicked");
//   },true);  // use capturing over here

// because of the true flag at grandparent this click handler will perfrom capturing and when it comes to the below event handler and
// saw there a false flag and will do bubbling over there so sequence would begrandparent->child->parent


// To stop the propagation we can add a stop propagation method
// this was in event bubbling

// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("grand parent clicked");
// });

// document.querySelector("#parent").addEventListener("click", (e) => {
//   console.log("parent clicked");
//   e.stopPropagation();  // stop propagation is added after clicking on the div child, this will not print the grand parent clicked as will stop after printing parent clicked
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("child clicked");
// });


// in event capturing method

document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("grand parent clicked");
},true);

document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("parent clicked");
  e.stopPropagation();   // stop propagation is added after clicking on the child it will not print the child clicked as will stop after printing grandparent and parent clicked
},true);

document.querySelector("#child").addEventListener("click", () => {
  console.log("child clicked");
},true);
