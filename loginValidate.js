source=document.getElementById("frame");
function validate(){
    var uname=document.getElementById("uname").value;
    var pwd=document.getElementById("pwd").value;
    if(uname=="love" && pwd=="Naidu"){
        return true;
    }
    else{
        alert("Invalid credentials");
        return false;
    }
}