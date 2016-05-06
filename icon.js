window.onload = function(){
var mydiv= document.createElement("div");
	mydiv.setAttribute("id","myid");
	mydiv.setAttribute("width","70");
	mydiv.setAttribute("height","30")
	document.body.appendChild(mydiv);
	console.log(document.getElementsByTagName("div"));
var myIMG = document.createElement("IMG");
    myIMG.setAttribute("src", "http://placehold.it/96x15");
    myIMG.setAttribute("width", "60");
    myIMG.setAttribute("height", "20");
    document.body.appendChild(myIMG);
    document.getElementsByTagName('IMG').style.zIndex='1000';

}