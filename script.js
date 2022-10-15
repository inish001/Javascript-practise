// var d=6;
// function a(){
//   var b=10;
//   c();
//   function c(){
//     console.log(b);
//   }
// }
// a();
// console.log(this.d)

// let counter = createcounter();
// let counter1 = createcounter();
// let counter2 = createcounter();
// let counter3 = createcounter();
// let counter4 = createcounter();
// let counter5 = createcounter();
// let counter6 = createcounter();
//   function createcounter(){
//     return{
//   count: 0,
//   increment: function(){
//     this.count++;
//     }
//   }
// }
// counter2.increment();
// counter1.increment();
// counter3.increment();
// counter4.increment();
// counter5.increment();
// counter3.increment();
// counter4.increment();
// console.log(counter1);
// console.log(counter2);
// console.log(counter3);
// console.log(counter4);
// console.log(counter5);
// console.log(counter6);

// // this as constructor
// function car(name){
//   this.name = name;
//   this.start = function(){
//     console.log(this.name + "started");
//     console.log(this);
//   }
// }
// let swift = new car("swift");
// console.log(swift);
// swift.start();
// console.log(this);


// let number = 108;
// let number2 = number;
// number=15;
// number = 27;
// console.log(number);
// console.log(number2);

// let obj ={
//     number:15
// }
// let obj2=obj;
// console.log(obj);
// console.log(obj2);

// const course = {
//     title:"javascript",
//     name:"react course",
//     enroll(){
//         console.log("enrolled");
//     }
// }
// // const course1 = {... course };
// // console.log(course);
// // course1.title="c++";
// // // console.log(course1);
// // const course1 = Object.assign({},course);
// // console.log(course1);
// const course1 = Object.create(course);
// console.log(course1);







// // Post request

function postdata() {
  url = "https://dummy.restapiexample./api/v1/create";
  data = {
    name: "nishant",
    salary: 55000,
    age: 21,
  };
  parameter = {
    method: "post",
    body: data
  };

  fetch(url, parameter)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// fetch('https://www.reddit.com/r/javascript/top/.json?limit=5')
// .then((res)=>{
//     return res.json();
// }).then((json)=>{
//     console.log(json);
// })
// .then(res=>res.json())
// .then(json=>console.log(json));
