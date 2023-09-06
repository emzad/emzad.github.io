
/////////////////////// Script for Allowing Menu Audio. ///////////////////////

var allowAudio = false;

// Function to toggle audio for the site on and off.
function toggleAudio() {
    if(allowAudio == false) 
        allowAudio = true; 
    else 
        allowAudio = false;
}

// Function to play
function playWave1() {
    if(allowAudio == true) {
        var audio = document.getElementById("openingSound");
        audio.play();
    }
    
};
function playWave2() {
    if(allowAudio == true) {
        var audio = document.getElementById("clickSound");
        audio.play();
    }
    
};

document.getElementById("dropDown").addEventListener("mouseenter", playWave1);
document.getElementById("dropDown").addEventListener("mouseleave", playWave1);

//////////////////////////////////////////////////////////////////////////////////

function backToTop() {
    document.body.scrollTop = 0;
  }


