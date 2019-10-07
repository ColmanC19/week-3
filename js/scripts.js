$(document).ready(function() {
  $("form#BeepBoop").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#word").val());
    var result = functionNumbers(number);

    $("#input").text(number);
    $("#result").show();

  });
});


var functionNumbers = function(number) {
  var string = [];
  for (i = 0; i <= number; i++) {
    var iAsString = i.toString();
     if (iAsString.includes("3")) {
      string.push("I'm sorry Dave. I'm afraid I can't do that!");
    } else if (iAsString.includes("2")) {
    string.push("Boop!");
  } else if (iAsString.includes("1")) {
      string.push("Beep");
    } else {
      string.push(" " + i);
    }
  }
   console.log(string);

}
