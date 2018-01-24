$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      ((750 * Math.random()) + 10),
      1600 * Math.random(),
      Math.random() * 1000);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.different').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      ((750 * Math.random()) + 10),
      1600 * Math.random(),
      Math.random() * 1000);
    $('body').append(dancer.$node);
  });

  $('.tnt-button').on('click', function(event) {

    setTimeout(function() { 
      return $( "span" ).remove();
    }, 1000);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      75,
      250,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
      $(".farmer").finish().animate({
        left: "-=20"
      });
      break;
    case 38:    //up arrow key
      $(".farmer").finish().animate({
        top: "-=20"
      }); 
      break;
    case 39:    //right arrow key
      $(".farmer").finish().animate({
        left: "+=20"
      });
      break;
    case 40:    //bottom arrow key
      $(".farmer").finish().animate({
        top: "+=20"
      });
      break;
    }
  });
});