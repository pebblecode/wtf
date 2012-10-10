_.mixin(_.string.exports());

var App = App || {};

App.guessWords = [
    'Shanghai',
    'Istanbul',
    'Karachi',
    'Mumbai',
    'Moscow',
    'Beijing',
    'Sao Paulo',
    'Tianjin',
    'Guangzhou',
    'Delhi',
    'Seoul',
    'Shenzhen',
    'Jakarta',
    'Tokyo',
    'Mexico City',
    'Kinshasa',
    'Tehran',
    'Bangalore',
    'New York City',
    'Dongguan',
    'London',
    'Lagos',
    'Lima',
    'Bogotá',
    'Ho Chi Minh City',
    'Hong Kong',
    'Bangkok',
    'Dhaka',
    'Hyderabad',
    'Cairo',
    'Hanoi',
    'Wuhan',
    'Rio de Janeiro',
    'Lahore',
    'Ahmedabad',
    'Baghdad',
    'Riyadh',
    'Singapore',
    'Santiago',
    'Saint Petersburg',
    'Chennai',
    'Chongqing',
    'Kolkata',
    'Surat',
    'Yangon',
    'Ankara',
    'Alexandria',
    'Shenyang',
    'Suzhou',
    'New Taipei',
    'Johannesburg',
    'Los Angeles',
    'Yokohama',
    'Abidjan',
    'Busan',
    'Berlin',
    'Cape Town',
    'Durban',
    'Jeddah',
    'Pyongyang',
    'Madrid',
    'Nairobi',
    'Pune',
    'Jaipur'
  ];

App.flickrSearchUrl = function(searchTerm) {
  return "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0bff7d4c04b7da09b1c294dfcb7da49b&tags="  + searchTerm + "&format=json&content_type=1";

};

App.flickrImageUrl = function(imageObj) {
  return "http://farm" + imageObj.farm + ".static.flickr.com/" +
        imageObj.server + "/" + imageObj.id + "_" + imageObj.secret + ".jpg";

};

App.gameState = {
  currentWord: "",
  imageObjs: []
};

App.init = function() {
  App.nextGame();

  $("#next-image").click(function(event) {
    App.showRandomImage();
  });
};

App.nextGame = function() {
  App.gameState = {};

  var words = App.guessWords,
      rndNum = Math.floor(Math.random() * words.length),
      word = words[rndNum];
  $("#guess").val("");

  App.gameState.currentWord = word;
  console.log(word);

  $.get(App.flickrSearchUrl(word));
};

App.showNextImage = function() {
  App.showRandomImage();
};

function jsonFlickrApi(data) {
  console.log("jsonFlickrApi", data);

  App.gameState.imageObjs = data.photos.photo;
  App.showRandomImage();
}

App.showRandomImage = function() {
  var imageUrl = App.randomImageUrl();

  $("#image").html("<img src='" + imageUrl + "'/>");
  $("#image").hide().slideDown(500);
}

App.randomImageUrl = function() {
  var image = App.randomImage(),
      imageUrl = App.flickrImageUrl(image);

  return imageUrl;
}

App.randomImage = function() {
  var numImages = App.gameState.imageObjs.length,
      rndNum = Math.floor(Math.random() * numImages);

  return App.gameState.imageObjs[rndNum];
}

$(document).ready(function() {
  $("#guess").keypress(function(event) {
    var key = event.which;

    if (key === 13) {
      var guessedWord = _.capitalize(_.trim($("#guess").val()));

      $("#image").removeAttr("class");
      if (_.capitalize(App.gameState.currentWord) === guessedWord) {
        $("#image").addClass("correct");
        $("#image").slideUp(500, function() {
          App.nextGame();
          $("#image").removeAttr("class");
        });
      } else {
        $("#image").addClass("wrong");
      }
    }
  });

  App.init();
});