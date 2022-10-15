// Fetch API

// get request

// function getdata(){
//     //console.log("getdata started");
//     url ="https://api.github.com/users";
//     fetch(url).then((Response)=>{
//         //console.log("first then");
//         return Response.json();
//     }).then((data)=>{
//       //  console.log("second then");
//     //    console.log(data);
//     })
// }
// // console.log("before calling getdata");
// // getdata();
// // console.log("after calling get data");

fetch("https://api.github.com/users")
.then((response)=>{
    return response.json();
}).then((result)=>{
    for(let i in result){
       // document.write(`${result[i].login} <br>`);  // for printing all the login name present inside the server
       document.write(`${result[i].login} - ${result[i].node_id} <br>`) // for printing login name along with node id
    }
    console.log(result);
}).catch((error)=>{
    console.log("error occured");
})
