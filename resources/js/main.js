
$(document).ready(function(){
// Sticky Menu

$(".js--services-section").waypoint(function(direction){

  if (direction == "down") {
    $("nav").addClass("sticky");
  }
  else {
    $("nav").removeClass("sticky");
  }

});



});




// Humberger Menu
function openNav(){
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.transition = ".s";
}
function closeNav(){
  document.getElementById("myNav").style.width = "0";
  document.getElementById("myNav").style.transition = ".2s";
}
