// let obj ={
//     name:"Nishant",
//         age:21,
//         city:"Delhi"
// }
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     body: JSON.stringify(obj),
//     headers:{
//         "Content-Type":"application/json"
//     }
// }).then((response)=>{
//     return response.json();
// }).then((result)=>{
//     console.log(result)
// })

// method put will update the data on the server just have to change method to put and in the url adding position with a slash
// and delete will delete the data on the server just change method to delete

// submiting data using form

// let button = document.querySelector(".submit")
// button.addEventListener("click", function (e){
//     e.preventDefault();
//   let obj = {
//     name: document.getElementById("name").value,
//     age: document.getElementById("age").value,
//     city: document.getElementById("city").value,
//   };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(obj),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//   });
// })
