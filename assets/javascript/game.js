$(document).ready(function() {
  var wins = 0;
  var losses = 0;

  var total;
  var target;
  function reset() {
    total = 0;
    target = Math.ceil(Math.random() * 102) + 18;
    var c0 = Math.ceil(Math.random() * 12);
    $("#c0").attr("data-points", c0);
    var c1 = Math.ceil(Math.random() * 12);
    $("#c1").attr("data-points", c1);
    var c2 = Math.ceil(Math.random() * 12);
    $("#c2").attr("data-points", c2);
    var c3 = Math.ceil(Math.random() * 12);
    $("#c3").attr("data-points", c3);
    $("#target").text(target);
    $("#score").text(total);
    $("#wins").text(wins);
    $("#losses").text(losses);
  }

  reset();

  $(".crystalPic").on("click", function() {
    morePoints = parseInt($(this).attr("data-points"));
    total += morePoints;
    $("#score").text(total);
    console.log("you clicked crystal", this.id, ";", total);
    if (total == target) {
      //   alert("you win");
      $("#feedback").text("You Win!");
      wins++;
      reset();
    } else if (total >= target) {
      // alert("you lose");
      $("#feedback").text("You Lose!");
      losses++;
      reset();
    }
  });
});
