for (var i=25;i>0;i--){
 slider.settatribute("class", "slider", "animate");
 slider.settatribute("id", "slider"+1);
 document.getElementById("game").append(slider);
}
var slidewidth = 400;
function stopsliding(slider){
    var slidercurrent = document.getElementById("slider".concat(slider));
    var sliderabove = document.getElementById("slider"+(slider+1));
    if(slider==1){
        var slideBelow = slidercurrent;
    }else{
        var sliderBelow = document.getElementById("slider".concat(slider-1));
    }
    var sliderbelow = document.getElementById("slider"+(slider-1));
    var left = window.getComputedStyle(slidercurrent).getPropertyValue("left")
    slidercurrent.classList.remove("animation");
    slidercurrent.style.left = left;
    var width = (window.getComputedStyle(slidercurrent).getPropertyValue("width"));
    var leftbelow = parseInt(window.getComputedStyle(sliderbelow).getPropertyValue("left"));
    left = parseInt(left);
    var diffrence = left - leftbelow
    var absDiffrence = Math.abs(diffrence);
    if(diffrence>width||diffrence<-width){
        var score = "score: ".concat(slider-1);
        alert(score);
        Location.reload();
    }
    if(diffrence>0){
        left = left + absDiffrence;
    }else{ 
        
        left = left - diffrence;
        slidercurrent.style.left = left.toString().concat("px");
     }
    var offset = (width - absDiffrence).toString().concat("px");
    slidercurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = "visibile";
    slidewidth = slidewidth +absDiffrence;
    document.documentelement.style.setproperty('--width', slidewidth )
    var onclick = "stopsliding(" + (slider+1) + ")";
    document.getElementById("btn").settatribute("onclick", onclick);
}
