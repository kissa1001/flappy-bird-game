var graphicsSystem = require('./systems/graphics');
var pipeSystem = require('./systems/pipe-graphics');
var bird = require('./entities/bird');
var pipe = require('./entities/pipe');
var FlappyBird = function() {
    this.entities = [new bird.Bird()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
   // this.pipe = new pipeSystem.pipeSystem(this.entities);
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.pipe.run();
};

exports.FlappyBird = FlappyBird;

var Pipes = function() {
    this.entities = [new pipe.Pipe()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

Pipes.prototype.run = function() {
    this.graphics.run();
};

exports.Pipes = Pipes;