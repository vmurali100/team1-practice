function postdataToserver(user) {
    var info=new XMLHttpRequest();
    info.onreadystatechange=function () {
        if(info.status==4 && info.readyState==201){
            readusers();
            clearuser()
        }
        
    }
    info.open("POST" ,"http://localhost:3000/users")
    info.setRequestHeader("content-type","application/json")
    info.send(JSON.stringify(user))
}