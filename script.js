/*
    Eventually make the size of the font, and the space between fonts, scale with the size of the view port.

    function scaleFontSize(x) {
        if (x.matches) {
            >> Identify element and change size...           
        }
        else if (x.matches)
    }

    var w = window.matchMedia("(max-width: 600px)");
    scaleFontSize(w);
    w.addListener(scaleFontSize);
    var frameHeight = window.innerHeight;
    var frameWidth = window.innerWidth;

    
    }

*/

// Added for Safari issue 
$('body .safarilock').bind("touchmove", {}, function(event){
  event.preventDefault();
});

window.addEventListener("scroll", function(event) {
  
    var top = this.scrollY;
    
    if((100-(top/1.25)) > 5 )
    {
        $("div").filter(".salutation").css("position", "absolute").css("margin-left", (105-(top/1.25)) + "vw");
        $("div").filter(".welcome-body").css("position", "absolute").css("margin-left", (110-(top/1.25)) + "vw");
    }


}, false);
