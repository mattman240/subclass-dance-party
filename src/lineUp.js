var count = 0;

var lineUp = function() {
  if (count % 2 === 0) {
    count++;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  } else {
    count++;
    for (var j = 0; j < window.dancers.length; j++) {
      var height = $("body").height() * Math.random();
      var width = $("body").width() * Math.random();
      window.dancers[j].setPosition(height, width);
    }
  }
};

