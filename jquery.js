
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
    for(let i = 0; i < trialsLeft; i++) {
        $("#trialsLeft").append(" ❤️ ");
    }
}

// start sending fruits
function startAction() {
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    //choose a random position
    $("#fruit1").css({'left': Math.round(Math.random()*550), 'top': -50});
}

// generate a random fruit

function chooseFruit() {
    $("#fruit1").attr("src", "images/" + fruits[Math.floor(Math.random()*13)] + ".png"); 
}

