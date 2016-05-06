window.onload = function(){
var myIMG = document.createElement("IMG");
    myIMG.setAttribute("src", "http://placehold.it/96x15");
    myIMG.setAttribute("width", "60");
    myIMG.setAttribute("height", "20");
    document.body.appendChild(myIMG);
    document.getElementsByTagName('IMG').style.zIndex='1000';

}