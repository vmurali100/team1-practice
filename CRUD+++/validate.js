function validate() {
    var user=captureuser();
    var emailpattern=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    console.log(user)
    if(user.fname!==""  &&
     user.lname!=="" &&
     user.fname.length>5 &&
     user.lname.length>4  &&
     emailpattern.test(user.email)){
        document.getElementById("createuserbtn").removeAttribute("disabled")
    }else(
        document.getElementById("createuserbtn").setAttribute("disabled",true)
    )
}