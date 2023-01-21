function yup(){
    document.getElementById("emoji").style.animation = "animate1 1s linear 1";
    document.getElementById("ask").innerHTML = "WHICH MODE DO YOU WANT TO PLAY.";
    document.getElementById("but2").style.zIndex = "1";
    document.getElementById("but3").style.zIndex = "1";
    document.getElementById("but2").style.opacity = "1";
    document.getElementById("but3").style.opacity = "1";
    document.getElementById("but").style.opacity = "0";
    document.getElementById("but1").style.opacity = "0";
    
}
function nop(){
    document.getElementById("emoj").style.animation = "animate1 1s linear 1";
    document.getElementById("ask").innerHTML = "I HOPE YOU WILL COME NEXT TIME TO PLAY.";
    document.getElementById("ask").style.top = "50vh";
    document.getElementById("but").style.opacity = "0";
    document.getElementById("but1").style.opacity = "0";
}