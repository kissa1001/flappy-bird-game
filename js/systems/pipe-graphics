var timer = require('../systems/timer');

var pipeTop = require('../entities/pipeTop');
var pipeBottom = require('../entities/pipeBottom');

var PipeSystem = function(entities) {
  this.entities = entities;
  this.timer = 1;
  this.status = 0;
};

PipeSystem.prototype.run = function() {
  // Run the update loop
  this.timer = new timer.SetTimer(this.tick.bind(this), 2000);
  this.status = 1;
};

PipeSystem.prototype.pause = function() {
  // Pause
  this.timer.pause();
  this.status = 0;
};

PipeSystem.prototype.resume = function() {
  // Resume
  this.timer.resume();
  this.status = 1;
};

PipeSystem.prototype.tick = function() {
  if (this.status == 1) {
    this.entities.push(new pipeTop.PipeTop(), new pipeBottom.PipeBottom());
    console.log("pipe has been created");
  } else {
    console.log("NO PIPES YO.");
  }
};

exports.PipeSystem = PipeSystem;