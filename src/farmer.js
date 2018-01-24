var count = 0;
var farmer = function(top, left, timeBetweenSteps) {
  if (count === 0) {
    count++;
    makeDancer.call(this);
    this.$node = $('<span class="farmer"></span>');
    this.setPosition(450, 800);
  }
};

farmer.prototype = Object.create(makeDancer.prototype);

farmer.prototype.constructor = farmer;

farmer.prototype.lineUp = function() {
  var styleSettings = {
    position: 'absolute',
    left: '150px',
  };
  this.$node.css(styleSettings);
};

