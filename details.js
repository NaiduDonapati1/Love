var count=1;
var img=document.getElementById("img");
var aud=document.getElementById("audio");
function forward(e){
    if (count<=10){
        count+=1;
    }
    else{
        count=1;
    }
    var str="love"+count;
    img.setAttribute("src",str+".jpg");
    aud.setAttribute("src",str+".mp3");
    aud.play();
}
function backward(e){
    if (count<=0){
        count=10;
    }
    else{
        count-=1;
    }
    var str="love"+count;
    img.setAttribute("src",str+".jpg");
    aud.setAttribute("src",str+".mp3");
    aud.play();
}
function validate(){
      var uname=document.getElementById("uname").value;
      var pwd=document.getElementById("pwd").value;
      if(uname=="love" && pwd=="Naidu"){
            document.getElementById("head").hidden=false;
            document.getElementById("bd").hidden=false;
            document.getElementById("foot").hidden=false;
            document.getElementById("f").hidden=true;
            return true;
      }
      alert("Invalid credentials");
      return false;
}

