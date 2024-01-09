// alert("hello");

var rNum = Math.floor(Math.random()*6)+1; // generate 1-6
var randomDiceImg = "images/dice"+rNum+".png" // select  between images
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImg);
var rNum2 = Math.floor(Math.random()*6)+1;
// alert(rNum2);
var randomDiceImg2 = "images/dice"+rNum2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImg2);

if (rNum>rNum2)
{
    document.querySelector("h1").innerHTML ="🚩players 1 wins";
}
else if( rNum<rNum2)
{
    document.querySelector("h1").innerHTML="player 2 wins🚩";
}
else
{
    document.querySelector("h1").innerHTML="its a draw 🎲";
}