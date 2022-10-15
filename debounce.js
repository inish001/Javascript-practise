// debouncing

// get data function will be fetching data from the server or will call an api to fetch the data

let counter=0;
let getdata=()=>{
    console.log("fetching data..",counter++)
}
// this function will continously print fetching data in the console when we will type in the input box and affects the browser performance 
// to overcome this we will use settimeout()

const debounce = function(func,delay){
    let timer;
    return function(){
        let context = this,
        args = arguments;   // func does not provide stability 
        clearTimeout(timer);
        timer= setTimeout(()=>{
            getdata.apply(context,arguments)
        },delay)
    }
}

const betterfunction = debounce(getdata,3000);   