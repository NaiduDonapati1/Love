source=document.getElementById("frame");
function validate(){
    var uname=document.getElementById("uname").value;
    var pwd=document.getElementById("pwd").value;
    if(uname=="keerthireddy" && pwd=="0627"){
        return true;
    }
    else{
        alert("Invalid credentials");
        return false;
    }
}
