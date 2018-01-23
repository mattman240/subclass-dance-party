var chickenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.$node = $('<span class="chickenDancer"></span>');
  this.rotate();
  this.setPosition(top, left);
};

chickenDancer.prototype = Object.create(makeDancer.prototype);

chickenDancer.prototype.constructor = chickenDancer;

chickenDancer.prototype.lineUp = function() {
  console.log('hello world');
  var styleSettings = {
    position: 'absolute',
    left: '150px',
  };
  this.$node.css(styleSettings);
};