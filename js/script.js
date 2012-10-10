$(document).ready(function() {
  $("#guess").keypress(function(event) {
    var key = event.which;

    if (key === 13) {
      console.log("enter");
    }
  });
});