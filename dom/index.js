var randomNumber1 = Math.floor(Math.random()*6)+1; //to generate no 1 to 6
var randomDiceImage = "dice"+randomNumber1+".png"; // tp get image
var randomImageSource = "/dom/images/"+randomDiceImage; // to fatch 1 to 6 dice image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "/dom/images/dice"+ randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if ( randomNumber1 > randomNumber2)

{
    document.querySelector("hi").innerHTML = "play 1 wins";
}
else if ( randomNumber1< randomNumber2)
{
    document.querySelector("hi").innerHTML = "play 2 wins";
    
}
else
{
    document.querySelector("hi").innerHTML = "draw!";

}