
window.onload = function(){
var mydiv= document.createElement("div");
	mydiv.setAttribute("id","myid");
	mydiv.setAttribute("width","310");
	mydiv.setAttribute("height","260");
	document.body.appendChild(mydiv);
var myIMG = document.createElement("IMG");
    myIMG.setAttribute("src", "http://s0.2mdn.net/1248596/PID_1472073_1290217213786_PID_1244559_1265644904000_parisian_love_300x250.jpg
");
    myIMG.setAttribute("width", "300");
    myIMG.setAttribute("height", "250");
    myIMG.setAttribute("onClick","window.location='https://www.facebook.com'");
    mydiv.appendChild(myIMG);
    document.getElementsByTagName('IMG').style.zIndex='1000';
    
}