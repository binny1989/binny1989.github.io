
window.onload = function(){
var mydiv= document.createElement("div");
	mydiv.setAttribute("id","myid");
	mydiv.setAttribute("width","70");
	mydiv.setAttribute("height","30");
	document.body.appendChild(mydiv);
var myIMG = document.createElement("IMG");
    myIMG.setAttribute("src", "http://placehold.it/96x15");
    myIMG.setAttribute("width", "60");
    myIMG.setAttribute("height", "20");
    myIMG.setAttribute("onClick","window.location='https://www.facebook.com'");
    mydiv.appendChild(myIMG);
    document.getElementsByTagName('IMG').style.zIndex='1000';
    
}