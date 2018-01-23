var pigDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="pigDancer" src="images/twerkyboi.gif"></img>');

};

pigDancer.prototype = Object.create(makeDancer.prototype);

pigDancer.prototype.constructor = pigDancer;
