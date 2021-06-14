var users = [];
function readusers() {

    var info = new XMLHttpRequest();
    info.onreadystatechange = function () {
        if (info.status == 200 && info.readyState == 4) {
            users = JSON.parse(info.response)
            displayusers();
        }
    }
    info.open("GET", "http://localhost:3000/users")
    info.send();
}
readusers();

function displayusers() {
    document.querySelector("ul").innerHTML="";
    users.forEach(function (user,i) {
        var myli = document.createElement("li")
        myli.innerHTML = user.fname + " " + user.lname  +  
        "<button onclick='edituser("+i+")'> EDIT </button><button onclick='deleteuser("+i+")'> DELETE </button> ";
        document.querySelector("ul").appendChild(myli);
    });
}