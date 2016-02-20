var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
	var app = new flappyBird.FlappyBird();
	app.run();
	app.gameOver();

	$("#startBtn").mouseenter(function(){
		$(this).velocity( { translateY: "-10px", backgroundColor: "#FF7376" }, 400 );
	});

	$("#startBtn").mouseleave(function(){
		$(this).velocity( { translateY: "0", backgroundColor: "#FF2C2E" }, 200 );
	});

	$("#pauseBtn").mouseenter(function(){
		$(this).velocity( { translateY: "5px", backgroundColor: "#FF7376" }, 400 );
	});

	$("#pauseBtn").mouseleave(function(){
		$(this).velocity( { translateY: "0", backgroundColor: "#FF2C2E" }, 200 );
	});

	$("#keycodes").velocity({ translateY: 25 }, {
		duration: 1150,
		easing: [ 300, 8 ]
	});

	$("#scoreboard").velocity(
	{ 
		scale: 0.7
	},
	{ 
		duration: 800,
		display: "none"
	});

	$("#scoreboard").velocity(
	{ 
		scale: 1
	},
	{ 
		duration: 800,
		display: "block"
	});
});


