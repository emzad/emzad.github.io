
window.addEventListener("scroll", function(event) {
  
    var top = this.scrollY;
    
    if((100-(top/1.25)) > 5 )
    {
        $("div").filter(".salutation").css("position", "absolute").css("margin-left", (105-(top/1.25)) + "vw");
        $("div").filter(".welcome-body").css("position", "absolute").css("margin-left", (110-(top/1.25)) + "vw");
    }



}, false);
