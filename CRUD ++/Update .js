var gindex;
function edituser(i){
    gindex=i;
document.getElementById("fname").value=users[i].fname;
document.getElementById("lname").value=users[i].lname;
};

function updateuser() {
    var updateduser=captureuser();
    var info=new XMLHttpRequest;
    info.onreadystatechange=function () {
        if(info.status==4 && info.readyState==200){
            readusers();
            clearuser()
        }
        
    }
    info.open("PUT" ,"http://localhost:3000/users/"+users[gindex].id)
    info.setRequestHeader("content-type","application/json")
    info.send(JSON.stringify(updateduser))
}