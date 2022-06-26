
// Reset the Score
function reset() {
var count = 0;
}
    
//Gets Freddy nose honk sound effect
var x = document.getElementById("myAudio"); 

// Stuff for the score    
function playAudio() { 
x.pause;
x.currentTime = 0;
x.play();
count = count + 1;
document.getElementById("score").innerHTML = count;
}

    
