
var buttonColors = ["red","blue","green","yellow"];

var gamePattren =[];
var userClickedPattern =[];

var level = 0;
var started = false;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    
  checkAnswer(userClickedPattern.length-1);
    
});


function checkAnswer(currentLevel) {

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      // console.log("success");
    
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function() {
        nextSequence();
      },1000);
    }

  } else {

      // console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      $("#level-title").text("game over , please any key to restart");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);



      startOver();
    }

  }

function nextSequence() {
   // resetting the user clicked pattern and setting a new one
    userClickedPattern =[];
    level++;
    $("#level-title").text("level "+level);

    var randomNum = Math.floor(Math.random()*4);
    var randomChossenColor = buttonColors[randomNum] ;
    gamePattren.push(randomChossenColor);

    $("#"+randomChossenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChossenColor);   
}

function playSound(name){
    // var audio = new Audio("sounds/"+randomChossenColor+".mp3");
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColor){
   var colorClass = $("#"+currentColor);
   colorClass.addClass("pressed");
   setTimeout(function(){
    colorClass.removeClass("pressed");
   },100);
}
function startOver(){
    
    level = 0 ;
    gamePattren=[];
    started = false;
}







 


