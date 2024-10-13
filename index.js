let gamePattern = [];
let userClickedPattern=[];
let level =1;

let gameStarted = false;

// ARRAY 

let buttonColours = ["red","blue","green","yellow"];

// RANDOM NUMBER GENERATE
function nextSequence(){
    gameStarted= true;
    
    userClickedPattern=[]; // clearing user array for next sequence 
    let randomNumber= (Math.random() *4);
    randomNumber = Math.floor(randomNumber);
    
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    /* let audio = new Audio(randomChosenColour+'.mp3');
    audio.play(); */
    playSound(randomChosenColour);
    level++;
    
    
}

$(".btn").on("click",function(){
    let userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

    
})

function playSound(name){
    
    
    let audio1 = new Audio(name + ".mp3");
    audio1.play();

    
        
    

}


function animatePress(currentColor){

    // Add the "pressed" class to the button with the color that was clicked
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");

    },100);


}
$(document).on("keydown",()=>{
    if(!gameStarted){
        $("h1").text("level "+ level);
        setTimeout(function(){
            nextSequence();
        },400);
    
        
    }
    

   


})
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                $("h1").text("level "+ level);
                nextSequence();
            },1000);
        }
    }
    else{
        // user got the wrong sequence
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
            
        }, 200);

        $("h1").text("Game Over, Press any key to Restart");

        startOver(); 
    }
}

// START OVER OR RESTART FUNCTION

function startOver(){
    
    gameStarted=false;
    level=1;
    
    gamePattern=[];
    
   

        
    

    
}





