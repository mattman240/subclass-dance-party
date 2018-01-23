// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="cow"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top, 
    left: left,
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.rotate = function() {
  var angle = 'rotate(' + getRandomInt(0, 360) + 'deg)';
  var styleSettings = {
    transform: angle
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.hue = function() {
  var color = 'hue-rotate(' + getRandomInt(0, 359) + 'deg)'; 
  var styleSettings = {
    filter: color
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  var styleSettings = {
    position: 'absolute',
    left: '0px',
  };
  this.$node.css(styleSettings);
};

var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
