_.mixin(_.string.exports());

var App = App || {};

App.gameCategories = {
  "city": {
    title: "WTF! Where is it?",
    additionSearchTerms: "landmark",
    alertMessage: "The place was:",
    words: [
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
      'Bogota',
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
    ]
  },
  "movie": {
    title: "WTF! What movie is it?",
    additionSearchTerms: "",
    alertMessage: "The movie was:",
    words: [
      'The Shawshank Redemption',
      'The Godfather',
      'Pulp Fiction',
      'The Good, the Bad and the Ugly',
      '12 Angry Men',
      'Schindler\'s List',
      'The Dark Knight',
      'The Lord of the Rings',
      'Fight Club',
      'The Empire Strikes Back',
      'One Flew Over the Cuckoo\'s Nest',
      'Inception',
      'Goodfellas',
      'Star Wars',
      'Seven Samurai',
      'The Matrix',
      'Forrest Gump',
      'City of God',
      'Once Upon a Time in the West',
      'Casablanca',
      'The Silence of the Lambs',
      'Raiders of the Lost Ark',
      'The Usual Suspects',
      'Rear Window',
      'The Dark Knight Rises',
      'Psycho',
      'It\'s a Wonderful Life',
      'Sunset Boulevard',
      'Memento',
      'American History X',
      'Apocalypse Now',
      'Terminator 2',
      'Dr. Strangelove',
      'Saving Private Ryan',
      'North by Northwest',
      'City Lights',
      'Spirited Away',
      'Citizen Kane',
      'The Shining',
      'Modern Times',
      'American Beauty',
      'Taxi Driver',
      'Vertigo',
      'Back to the Future',
      'The Pianist',
      'The Departed',
      'Toy Story 3',
      'Paths of Glory',
      'Double Indemnity',
      'Aliens',
      'Life Is Beautiful',
      'WALL E',
      'The Lives of Others',
      'A Clockwork Orange',
      'Amelie',
      'Lawrence of Arabia',
      'To Kill a Mockingbird',
      'Gladiator',
      'The Green Mile',
      'The Prestige',
      'The Great Dictator',
      'Reservoir Dogs',
      'Untouchable',
      'Das Boot',
      'Requiem for a Dream',
      'The Third Man',
      'The Treasure of the Sierra Madre',
      'Eternal Sunshine of the Spotless Mind',
      'Cinema Paradiso',
      'Chinatown',
      'Once Upon a Time in America',
      'L.A. Confidential',
      'Full Metal Jacket',
      'Return of the Jedi',
      'Monty Python and the Holy Grail',
      'The Lion King',
      'Braveheart',
      'Some Like It Hot',
      'Singing in the Rain',
      'Oldboy',
      'Amadeus',
      'Metropolis',
      'Rashomon',
      'Bicycle Thieves',
      'Unforgiven',
      'All About Eve',
      '2001',
      'The Apartment',
      'Raging Bull',
      'Indiana Jones and the Last Crusade',
      'The Bridge on the River Kwai',
      'The Sting',
      'A Separation',
      'Die Hard',
      'Pan\'s Labyrinth',
      'Downfall',
      'Batman Begins',
      'Witness for the Prosecution',
      'Mr Smith Goes to Washington',
      'Grave of the Fireflies',
      'Avengers Assemble',
      'The Great Escape',
      'Yojimbo',
      'For a Few Dollars More',
      'Inglourious Basterds',
      'Snatch',
      'The Elephant Man',
      'On the Waterfront',
      'The Seventh Seal',
      'The Maltese Falcon',
      'Toy Story',
      'Gran Torino',
      'The General',
      'Rebecca',
      'Blade Runner',
      'Wild Strawberries',
      'Touch of Evil',
      'The Kid',
      'The Big Lebowski',
      'Scarface',
      'The Deer Hunter',
      'Cool Hand Luke',
      'Sin City',
      'Strangers on a Train',
      'The Gold Rush',
      'No Country for Old Men',
      'It Happened One Night',
      'High Noon',
      'Hotel Rwanda',
      'The Sixth Sense',
      'Lock, Stock and Two Smoking Barrels',
      'Platoon',
      'Butch Cassidy and the Sundance Kid',
      'The Thing',
      'The Wizard of Oz',
      'Trainspotting',
      'Kill Bill: Vol. 1',
      'Casino',
      'Notorious',
      'Warrior',
      'Annie Hall',
      'The King\'s Speech',
      'The Secret in Their Eyes',
      'The Grapes of Wrath',
      'Gone with the Wind',
      'Into the Wild',
      'Good Will Hunting',
      'Life of Brian',
      'Black Swan',
      'Finding Nemo',
      'The Big Sleep',
      'How to Train Your Dragon',
      'V for Vendetta',
      'Ben Hur',
      'My Neighbour Totoro',
      'Network',
      'The Terminator',
      'Donnie Darko',
      'Dial M for Murder',
      'The Night of the Hunter',
      'Million Dollar Baby',
      'Stand by Me',
      'There Will Be Blood',
      'Groundhog Day',
      'Dog Day Afternoon',
      'Twelve Monkeys',
      'Amores Perros',
      'The Bourne Ultimatum',
      'The Artist',
      'The Graduate',
      'Mary and Max',
      'The 400 Blows',
      'Gandhi',
      'Persona',
      'The Killing',
      'Slumdog Millionaire',
      'The Princess Bride',
      'Howl\'s Moving Castle',
      'Who\'s Afraid of Virginia Woolf?',
      'The Manchurian Candidate',
      'La Strada',
      'The Hustler',
      'The Wild Bunch',
      'Stalag 17',
      'A Beautiful Mind',
      'Anatomy of a Murder',
      'The Exorcist',
      'District 9',
      'Barry Lyndon',
      'The Man Who Shot Liberty Valance',
      'Stalker',
      'Ratatouille',
      'Roman Holiday',
      'Infernal Affairs',
      'The Truman Show',
      'The Diving Bell and the Butterfly',
      'Harry Potter',
      'A Streetcar Named Desire',
      'Pirates of the Caribbean',
      'Ip Man',
      'Star Trek',
      'A Fistful of Dollars',
      'The Wrestler',
      'Rosemary\'s Baby',
      'Beauty and the Beast',
      'Monsters, Inc.',
      'Looper',
      'Harvey',
      'Moonrise Kingdom',
      'In the Name of the Father',
      'Nausica of the Valley of the Wind',
      'Bringing Up Baby',
      'All Quiet on the Western Front',
      'Nosferatu',
      'La Haine',
      'Shadow of a Doubt',
      'Manhattan',
      'Rain Man',
      'Shutter Island',
      'Mystic River',
      'Let the Right One In',
      'Big Fish',
      'In the Heat of the Night',
      'Arsenic and Old Lace',
      'The Untouchables',
      'The Nightmare Before Christmas',
      'The Searchers',
      'Papillon',
      'Rio Bravo',
      'King Kong',
      'Patton',
      'Jurassic Park',
      'The Philadelphia Story',
      'Ed Wood'
    ]
  }
}

App.flickrSearchUrl = function(searchTerm) {
  var additionalSearchTerms = App.gameCategories[App.gameState.category].additionSearchTerms;
  return "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0bff7d4c04b7da09b1c294dfcb7da49b&text="  + searchTerm + "%20" + additionalSearchTerms + "&format=json&content_type=1";
};

App.flickrImageUrl = function(imageObj) {
  return "http://farm" + imageObj.farm + ".static.flickr.com/" +
        imageObj.server + "/" + imageObj.id + "_" + imageObj.secret + ".jpg";

};

App.scoring = {
  win: 100,
  giveUp: -15,
  anotherImage: -5,
  wrongGuess: -1
}

App.gameStateDefaults = {
  currentWord: "",
  imageObjs: [],
  category: "city"
};

App.points = {
  _points: 0,
  reset: function() {
    App.points._points = 0;
    App.points.updateView();
  },
  win: function() {
    App.points.updatePoints(App.scoring.win);
    App.points.updateView();
  },
  giveUp: function() {
    App.points.updatePoints(App.scoring.giveUp);
    App.points.updateView();
  },
  anotherImage: function() {
    App.points.updatePoints(App.scoring.anotherImage);
    App.points.updateView();
  },
  wrongGuess: function() {
    App.points.updatePoints(App.scoring.wrongGuess);
    App.points.updateView();
  },

  updatePoints: function(pointDiff) {
    App.points._points += pointDiff;
    var pointDiffId = "point-diff-" + (new Date().getTime()),
        pointDiffClass = (pointDiff > 0) ? "positive" : "negative";

    $("#pointsContainer").append("<div id='" + pointDiffId + "'' class='point-diff " + pointDiffClass + "'>" + pointDiff + "</div>");

    var rndLeft = App.rndNumber($("#pointsContainer").width() / 2),
        rndTop = App.rndNumber($("#pointsContainer").height() / 2);
    $("#" + pointDiffId)
      .css("left", rndLeft)
      .css("top", rndTop)
      .hide().fadeIn(500);

    // Hide after a while
    $("#" + pointDiffId).fadeOut(500, function() {
      $("#" + pointDiffId).remove();
    });
  },

  updateView: function() {
    $("#points").html(App.points._points);
  }
};

App.gameStateWords = function() {
  return App.gameCategories[App.gameState.category].words;
}

App.initGameState = function() {
  App.gameState = App.gameStateDefaults;
  $("#image").removeAttr("class");
};

App.init = function() {
  App.initGameState();
  App.nextGame();

  $("#next-image").click(function(event) {
    App.points.anotherImage();
    App.showRandomImage();
  });


  $("#give-up").click(function(event) {
    App.points.giveUp();

    App.showAnswerAlert();
    App.nextGame();
  });

  $("#categories button").click(function(event) {

    var wordListIndex = $(event.target).prev().length;
    console.log(wordListIndex);
    switch(wordListIndex) {
    case 0: // Cities
      App.gameState.category = "city";
      break;
    case 1: // Movies
      App.gameState.category = "movie";
      break;
    }

    App.nextGame();
  });
};

App.alertTemplate = _.template($("#alert-template").html());

App.showAnswerAlert = function() {
  $(".alert").alert('close');

  var alert = App.alertTemplate({ word: App.gameState.currentWord, alertMessage: App.gameCategories[App.gameState.category].alertMessage });
  $("#categories").after(alert);
  _.delay(function() {
    $(".alert").alert('close')
  }, 2000);
};

App.rndNumber = function(max) {
  return Math.floor(Math.random() * max);
}

App.nextGame = function() {
  App.initGameState();

  var words = App.gameStateWords(),
      rndNum = App.rndNumber(words.length),
      word = words[rndNum];
  $("#guess").val("");

  App.gameState.currentWord = word;
  console.log(word);

  $.get(App.flickrSearchUrl(word));

  $("#title").html(App.gameCategories[App.gameState.category].title);
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
      var guessedWord = _.trim($("#guess").val()).toLowerCase();

      $("#image").removeAttr("class");
      if (App.gameState.currentWord.toLowerCase() === guessedWord) {
        App.points.win();

        $("#image").addClass("correct");
        $("#image").slideUp(500, function() {
          App.nextGame();
          $("#image").removeAttr("class");
        });
      } else {
        App.points.wrongGuess();

        $("#image").addClass("wrong");
      }
    }
  });

  App.init();
});