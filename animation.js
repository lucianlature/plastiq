var rendering = require('./rendering');

function AnimationWidget(fn) {
  this.fn = fn;
  if (rendering.currentRender) {
    this.refresh = rendering.currentRender.refresh;
  }
}

AnimationWidget.prototype.type = 'Widget';

AnimationWidget.prototype.init = function () {
  this.fn(this.refresh);
  return document.createTextNode('');
};

AnimationWidget.prototype.refresh = function () {
}

AnimationWidget.prototype.update = function () {
};

AnimationWidget.prototype.destroy = function () {
};

module.exports = function (fn) {
  return new AnimationWidget(fn);
};
