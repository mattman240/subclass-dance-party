var pigDancer = function() {
  makeDancer.call(this);
  this.$node = $('<img class="pigDancer" src="images/twerkyboi.gif"></img>');
};

pigDancer.prototype = Object.create(makeDancer.prototype);

pigDancer.prototype.constructor = pigDancer;
