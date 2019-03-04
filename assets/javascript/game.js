$(document).ready(function() {
  var total = 0;
  var target = 50;
  $("#target").text(target);
  $(".crystalPic").on("click", function() {
    total += 5;
    console.log("you clicked crystal", this.alt, ";", total);
  });
});
