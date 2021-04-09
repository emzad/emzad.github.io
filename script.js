window.addEventListener("scroll", function(event) {
  
    var top = this.scrollY;
    
    if(top > 100) {
        $("div").filter(".salutation").css("position", "absolute").css("margin-left", "5vw");
        $("div").filter(".welcome-body").css("position", "absolute").css("margin-left", "10vw");
    }
    else if(top <100 )
    {
        $("div").filter(".salutation").css("position", "absolute").css("margin-left", (100-(top/1.25)) + "vw");
        $("div").filter(".welcome-body").css("position", "absolute").css("margin-left", (105-(top/1.25)) + "vw");
    }



}, false);
