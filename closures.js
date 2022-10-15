
// Closures

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// returning a function

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// accesing its parent scope along with its parent's parent scope also

function z(){
    var a=100;
    function x(){
        var b =7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();