var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipe');
var garbageSystem = require('./systems/garbage');

var bird = require('./entities/bird');
var pipe = require('./entities/pipe');
var leftEdge = require('./entities/leftEdge');
var topEdge = require('./entities/topEdge');
var bottomEdge = require('./entities/bottomEdge');

var FlappyBird = function() {
    this.entities = [new bird.Bird(this), new leftEdge.LeftEdge(), new topEdge.TopEdge(), new bottomEdge.BottomEdge()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities, this);
    this.pipe = new pipeSystem.PipeSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities, this);
    this.input = new inputSystem.InputSystem(this.entities, this);
    this.garbage = new garbageSystem.GarbageSystem(this.entities);
    this.paused = false;
    this.gameEnded = false;
    document.getElementById('lastGameScore').innerText = localStorage.getItem('lastGameScore');
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.garbage.run();
};

FlappyBird.prototype.pause = function() {
    if (!this.paused) {
        this.physics.pause();
        this.garbage.pause();
        document.getElementById('scoreboard').removeAttribute('style');
        document.getElementById('startBtn').setAttribute("style", "display:none;");
        document.getElementById('pauseBtn').removeAttribute("style");
        document.getElementById('startEndHeading').setAttribute("style", "display:none;");
        document.getElementById('pauseUnpauseHeading').removeAttribute("style");
    } else {
        this.physics.run();
        this.garbage.run();
        document.getElementById('scoreboard').setAttribute("style", "display:none;");
    }
    this.paused = !this.paused;
};
var gameOverMsg = 'Game Over';
var tryAgainMsg = 'Oops! Try Again';
var startMsg = 'Click to start ' + '<i class="fa fa-play"></i>';

FlappyBird.prototype.gameOver = function() {
    if (!this.gameEnded) {
        this.physics.gameOver();
        this.garbage.gameOver();
        document.getElementById('startEndHeading').innerText = gameOverMsg;
        document.getElementById("startBtn").innerText = tryAgainMsg;
        document.getElementById('scoreboard').removeAttribute('style');
        document.getElementById('startBtn').removeAttribute("style");
        document.getElementById('pauseBtn').setAttribute("style", "display:none;");
        document.getElementById('startEndHeading').removeAttribute("style");
        document.getElementById('pauseUnpauseHeading').setAttribute("style", "display:none;");
        this.gameEnded = !this.gameEnded;
    } else {
        if (document.getElementById("startBtn").innerText == startMsg || tryAgainMsg) {
            this.physics.run();
            this.garbage.run();
            document.getElementById('scoreboard').setAttribute("style", "display:none;");
            this.gameEnded = !this.gameEnded;
        }
    }  
};

exports.FlappyBird = FlappyBird;