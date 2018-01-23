var pigDancer = function(top, left) {
  makeDancer.call(this);
  this.$node = $('<span class="pigDancer"></span>');
  this.setPosition(top, left);
};

pigDancer.prototype = Object.create(makeDancer.prototype);

pigDancer.prototype.constructor = pigDancer;

pigDancer.prototype.lineUp = function() {
  var styleSettings = {
    position: 'absolute',
    left: '275px',
  };
  this.$node.css(styleSettings);
};


//this sets the element to follow your mouse 
// $(document).mousemove(function(e) {
//   $('.pigDancer').offset({'top': e.pageY + 25, 'left': e.pageX + 25});
// });
