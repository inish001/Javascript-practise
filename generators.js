function *test(){
    console.log("first");
    yield "yield no1";
    console.log("second");
    yield "yield no2";
}
let g = test();
console.log(g.next());
console.log(g.return("end")); // it will show undefined even if there are more elements present inside the array
console.log(g.next());
console.log(g.next());
