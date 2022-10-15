// let res1 = "9855612789";
// let res2 = "685562789";
// let res3 = "785abcd89";
// let res4 = "785._89";
// let res5 = "78$%89";
// let reg = /^[0-9]{10,10}$/;
// let result1 = reg.test(res1);
// let result2 = reg.test(res2);
// let result3 = reg.test(res3);
// let result4 = reg.test(res4);
// let result5 = reg.test(res5);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

function validatePhone(){
    let phonecheck = document.getElementById("phone").value;
    let reg = /^[0-9]{10,10}/;
    if(reg.test(phonecheck)){
        document.write("phone number verified");
    }
    else{
        document.write("phone number not verified");
    }
}