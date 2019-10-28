$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var blanks = ["person1", "person2", "animal","exclamation", "verb",
  "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("#" + blank).val();
      $("." + blank).text(userInput);

    });



    //
    // $(".person1").append("blah blah");
    // $(".person2").append("blah blah");
    // $(".animal").append("blah blah");
    // $(".exclamation").append("blah blah");
    // $(".verb").append("blah blah");
    // $(".noun").append("blah blah");

    $("#story").show();
  });
});
