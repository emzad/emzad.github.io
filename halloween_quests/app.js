document.getElementById("firstButton").addEventListener("click", basic);

function basic() {
    document.getElementById("landing-container").style.display ='none';
    document.getElementById("werewolf-container").style.display = 'flex';
};

document.getElementById("backButton").addEventListener("click", basic2);

function basic2() {
    document.getElementById("landing-container").style.display ='flex';
    document.getElementById("werewolf-container").style.display = 'none';
};


