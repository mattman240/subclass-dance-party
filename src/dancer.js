// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  
  var color = 'hue-rotate(' + getRandomInt(0, 359) + 'deg)';
  var styleSettings = {
    top: top,
    left: left,
    filter: color
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

makeDancer.prototype.lineUp = function() {
  console.log('hello world');
  var styleSettings = {
    position: 'absoulte',
    left: '0px',
    top: '0px',
    'z-index': '-1',
    display: 'inline'
  };
  this.$node.css(styleSettings);
};
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
