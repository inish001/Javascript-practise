try{
    console.log("start of try");
    bdssb
    console.log("end of try");
// }catch{
//     console.log("error has occured")
// }

// this above method is not able to find that in which line error has occured so we can do so by adding a parameter inside the catch as shown below

}catch(error){
    console.log("error has occured");
    console.log(error); // this will show a refrence error with the line number in the console that which line has the erorr
}