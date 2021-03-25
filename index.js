var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];

var level=0;
var started=false;
$(".buttonClass1").click(function()
{
    if(!started){
      $("h1").text("Level "+level);
      nextSequence();
      started=true;
    }
});
$(".buttonClass").click(function()
{
    if(!started){
      $("h1").text("Level "+level);
      nextSequence();
      started=true;
    }
});
$(document).keypress(function()
{
  if(!started){
    $("h1").text("Level "+level);
    nextSequence();
    started=true;
  }

});


$(".btn").click(function()
{
   var userChoosenColour= $(this).attr("id");
   userClickedPattern.push(userChoosenColour);
   playSound(userChoosenColour);
   animateClass(userChoosenColour);
   checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
{
  if(userClickedPattern.length===gamePattern.length){
    setTimeout(function(){
      nextSequence();
    },1000);
  }
}else{
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  $("h1").text("Game-Over,Press Any Key to Restart");
  gameOver();
}
}


function gameOver(){
  gamePattern=[];
  started=false;
  level=0;
}

function nextSequence(){
  userClickedPattern=[];
  level++;
  $("h1").text("Level "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChoosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChoosenColour);

  $("#"+randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColour);

}
function playSound(color){
  var s = new Audio("sounds/" + color+".mp3");
  s.play();
}
function animateClass(a)
{
  $("#"+a).addClass("pressed");
  setTimeout(function(){
    $("#"+a).removeClass("pressed");
  },100);
}
