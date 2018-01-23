var chickenDancer = function() {
  makeDancer.call(this);
  this.$node = $('<img class="chickenDancer" src="images/chicken.gif"></img>');

};

chickenDancer.prototype = Object.create(makeDancer.prototype);

chickenDancer.prototype.constructor = chickenDancer;
