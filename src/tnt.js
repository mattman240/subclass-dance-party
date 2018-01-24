var tnt = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="tnt"></span>');
  this.setPosition(top, left);
};

tnt.prototype = Object.create(makeDancer.prototype);

tnt.prototype.constructor = tnt;
