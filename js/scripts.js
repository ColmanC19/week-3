$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = functionNumbers(number);

    $(".array").text(result);
    $("#result").show();

  });
});


var functionNumbers = function(number) {
  var numbers = [];
  for (i = 0; i <= number; i += 1) {
    if
    } if (i.toString().includes("1")) {
      numbers.push(" Beep!");
    } else if (i.toString().includes("2")) {
    numbers.push(" Boop!");
    } else if (i.toString().includes("3")) {
      numbers.push(" I'm sorry Dave. I'm afraid I can't do that!");

    } else {
      numbers.push(" " + i);
    }
  }
  return numbers;
