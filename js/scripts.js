$(document).ready(function() {
    $("form#BeepBoop").submit(function(event) {
        event.preventDefault();

        var number = $("#number").val();
        var result = getResult(number);

        $("#output").text(result);
        $("#result").show();

    });
});


var getResult = function(number) {
    var result = [];
    for (i = 0; i <= number; i++) {
        var iAsString = i.toString();
        if (iAsString.includes("3")) {
            result.push("I'm sorry Dave. I'm afraid I can't do that!");
        } else if (iAsString.includes("2")) {
            result.push("Boop!");
        } else if (iAsString.includes("1")) {
            result.push("Beep");
        } else {
            result.push(" " + i);
        }
    }
    return result;
}
