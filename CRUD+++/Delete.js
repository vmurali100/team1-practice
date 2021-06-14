function deleteuser(i) {
    var info=new XMLHttpRequest();
    info.onreadystatechange=function () {
     if(info.readyState==4 && info.status==200){
        //  console.log(info.response);
        readusers();
     }   
    }
    info.open("DELETE","http://localhost:3000/Users/"+users[i].id)
    info.send();
}