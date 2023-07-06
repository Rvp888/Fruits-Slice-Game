
// click on start/reset button
    //are we playing?
        // yes
            //reload page
        //no
            //show trials left
            //change button text to "reset game"
            //1. create a random fruit
            //define a rendom step
            //2. move fruit down one step every 30sec
                //is fruit too low?
                    //no--> repeat no.2
                    //yes--> any trials left?
                        // yes: repeat no.1
                        //no: show game over, button text= start game


//Slice a fruit
    //play sound
    //explode fruit


let playing = false;
let score;
let trialsLeft;
let step;
let action; //used for setInterval
let fruits = ["apple", "banana", "orange", "cherries", "jackfruit", "lemon", "mango", "peach", "pear", "pineApple", "pomegranate", "strawberry", "watermelon"];

$(function() {
    // click on start/reset button
    $("#start-reset").click(function() {
        //are we playing?
        if (playing === true) {//yes
            //reload page
            location.reload();
        }
        else {//no
            playing = true;//game initialized
            //set score to 0
            score = 0;
            $("#scoreValue").html(score);

            //show trials left
            $("#trialsLeft").show();
            trialsLeft = 3;
            addHearts(trialsLeft);

            //change button text to reset game
            $("#start-reset").html("Reset Game");

            //start sending fruits
            startAction();
        }
    });

});



// Functions:

function addHearts(trialsLeft) {
    $("#trialsLeft").empty();
    for(let i = 0; i < trialsLeft; i++) {
        $("#trialsLeft").append(" ❤️ ");
    }
}

// start sending fruits
function startAction() {
    //generate a fruit
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit

    //choose a random position
    $("#fruit1").css({'left': Math.round(Math.random()*550), 'top': -50});

    //generate a random step
    step = Math.round(Math.random()*5) + 1;
    // Move fruit down by one step every 10ms
    action = setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top + step);
    

        //check if the fruit position is too low
        if ($("#fruit1").position().top > $("#fruitsContainer").height()) {
            //check if we have trials left
            if (trialsLeft > 1) {
                //generate a fruit
                $("#fruit1").show();
                chooseFruit(); //choose a random fruit

                //choose a random position
                $("#fruit1").css({'left': Math.round(Math.random()*550), 'top': -50});

                //generate a random step
                step = Math.round(Math.random()*5) + 1;

                //reduce trials by 1
                trialsLeft--;

                //populate trialsLeft box
                addHearts(trialsLeft);
            }
            else {
                // game over
                playing = false; // we are not playing
                //change button to Start Game
                $("#start-reset").html("Start Game");
                //show Game Over box
                $("#gameOver").show();
                $("#gameOver").html("<P>Game Over!</P><P>Your score is "+ score + "</P>");

                stopAction();
            }
        }

    }, 10);
}

// generate a random fruit

function chooseFruit() {
    $("#fruit1").attr("src", "images/" + fruits[Math.floor(Math.random()*13)] + ".png"); 
}

function stopAction() {
    clearInterval(action);
}