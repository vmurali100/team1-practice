function deleteuser(i){
    var info=new XMLHttpRequest();
    info.onreadystatechange=function () {
     if(info.status==200 && info.readyState==4){
         readusers();
     }   
    }
    info.open("DELETE","http://localhost:3000/users/"+users[i].id);
    info.send();
}