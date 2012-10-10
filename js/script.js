_.mixin(_.string.exports());

var App = App || {};

App.guessWords = {
  "cocktail": {
    bannedWords: [
      "drink",
      "alcohol",
      "glass"
    ],
    image: "http://rowingjournal.com/site/wp-content/uploads/2012/06/Cocktail.jpg"
  },
  "texas": {
    bannedWords: [
      "map",
      "USA",
      "bbq"
    ],
    image: "http://www.sircon.com/state-information-center/images/sic-texas.jpg"
  }
};

App.gameState = {
  currentWord: ""
}

App.init = function() {
  App.nextGame();
};

App.nextGame = function() {
  var words = _.keys(App.guessWords),
      rndNum = Math.floor(Math.random() * words.length),
      word = words[rndNum],
      image = App.guessWords[word].image;

  $("#image").html("<img src='" + image + "'/>");
  App.gameState.currentWord = word;
  $("#image").hide().slideDown(500);
};

$(document).ready(function() {
  $("#guess").keypress(function(event) {
    var key = event.which;

    if (key === 13) {
      var guessedWord = _.capitalize(_.trim($("#guess").val()));

      $("#status").removeAttr("class");
      $("#image").removeAttr("class");
      if (_.capitalize(App.gameState.currentWord) === guessedWord) {
        $("#status").addClass("icon-ok");
        $("#image").addClass("correct");
        $("#image").slideUp(500, function() {
          App.nextGame();
          $("#image").removeAttr("class");
        });
      } else {
        $("#status").addClass("icon-ban-circle");
        $("#image").addClass("wrong");
      }
      $("#status").hide().fadeIn(100);
    }
  });

  App.init();
});