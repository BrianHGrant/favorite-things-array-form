$(document).ready(function() {
  $("input.favoritething").one("click", function() {
    $(this).val("");
  });
  $("form input[name='submit']").click(function(event) {
    var answers = [];
    var someAnswers = [];
    var l;
    for (i = 0; i < 7; i++) {
      answers.push($("input:EQ(" + i + ")").val());
    }
    someAnswers = [answers[1], answers[0], answers[2]];
    for (i = 0; i < 7; i++) {
      someAnswers.push(answers[i]);
    }
    $("#function").html("<ul></ul>");
    l = someAnswers.length;
    for (i = 0; i < l; i++) {
      $("#function ul").append("<li>" + someAnswers[i] + "</li>")
    }
    event.preventDefault();
  });
});
