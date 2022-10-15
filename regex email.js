// let res1 = "nishant.fulara@gmail.com"
// let res2 = "abc1@gmail.com";
// let res3 = "ABC_@gmail.com";
// let reg = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,7}$/;
// let result1 = reg.test(res1);
// let result2 = reg.test(res2);
// let result3 = reg.test(res3);
// console.log(result1, "----------------")
// console.log(result2, "----------------")
// console.log(result3, "----------------")
function validateEmail(){

    let emailcheck = document.getElementById("email").value;
    let reg = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,7}$/;
    if(reg.test(emailcheck)){
        document.write("email verified");
    }
    else{
        document.write("email not verified");
    }
}