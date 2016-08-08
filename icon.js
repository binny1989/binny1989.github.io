
window.onload = function(){
var mydiv= document.createElement("div");
	mydiv.setAttribute("id","myid");
	mydiv.setAttribute("width","410");
	mydiv.setAttribute("height","200");
	document.body.appendChild(mydiv);
var myIMG = document.createElement("IMG");
    myIMG.setAttribute("src", "http://s0.2mdn.net/1379578/PID_1244559_1281625520000_google.jpg");
    myIMG.setAttribute("width", "400");
    myIMG.setAttribute("height", "200");
    myIMG.setAttribute("onClick","window.location='https://www.facebook.com'");
    mydiv.appendChild(myIMG);
    document.getElementsByTagName('IMG').style.zIndex='1000';
    
}