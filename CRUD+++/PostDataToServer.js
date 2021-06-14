var users=[];
function postdatatoserver(user) {
    var info=new XMLHttpRequest();
    info.onreadystatechange=function () {
       if(info.readyState==4 &&  info.status==201) {
           readusers(); 
           clearuser();
       }
    }
    info.open("POST","http://localhost:3000/Users")
    info.setRequestHeader("content-type","application/json")
    info.send(JSON.stringify(user));
}

    
    
