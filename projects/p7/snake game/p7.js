window.addEventListener("load", main);

//Canvas
var canvas;
var ctx;
var pauseButton;
var scorelabel;

//Game
var timer;
var fps = 10;

//Board
var ts = 20;
var gw = gh = 20;

//Snake
var vx = vy = 0;
var sx = sy = 10;
var px = py = 10;
var tail = 5;
var trail = [];

//Apple
var ax = ay = 15;
var score = 0;

//Swipe gestures
var xdown = ydown = null;

function main() {
	canvas = document.getElementById("canvas"); //canvas pulled from html
	ctx = canvas.getContext("2d"); //canvas is 2d
	pauseButton = document.getElementById("pause-button"); //google apis play-pause button pulled from html
	scorelabel = document.getElementById("score-label"); //score label also pulled from html
	resizegame();
	sx = Math.floor(gw / 2);
	sy = Math.floor(gh / 2);
	window.addEventListener("resize", resizegame); //fitting game to the device screen
	document.addEventListener("keydown", keypress); //watch for keypress if opened on pc/laptop/wireless keyboard
	canvas.addEventListener("touchstart", touchdown, false); //first touch start
	canvas.addEventListener("touchmove", touchmove, false); //touch to move the snake
	pauseButton.addEventListener("click", togglepause); //when play-pause button clicked
	start();
}

function touchdown(e) {
	const firsttouch = e.touches[0];
	xdown = firsttouch.clientX;
	ydown = firsttouch.clientY;
}

function touchmove(e) {
	if (!xdown || !ydown) {
		return;
	}
	var xup = e.touches[0].clientX;
	var yup = e.touches[0].clientY;
	var xdiff = xdown - xup;
	var ydiff = ydown - yup;
	var direction;
	if (Math.abs(xdiff) > Math.abs(ydiff)) {
		if (xdiff > 0) {
			direction = "left";
		} else {
			direction = "right";
		}
	} else {
		if (ydiff > 0) {
			direction = "up";
		} else {
			direction = "down";
		}
	}
	handleSwipe(direction);
	xdown = ydown = null;
}

function handleSwipe(direction) {
	switch (direction) {
		case "left":
			if (vx != 0) {
				break;
			}
			vx = -1;
			vy = 0;
			break;
		case "up":
			if (vy != 0) {
				break;
			}
			vx = 0;
			vy = -1;
			break;
		case "right":
			if (vx != 0) {
				break;
			}
			vx = 1;
			vy = 0;
			break;
		case "down":
			if (vy != 0) {
				break;
			}
			vx = 0;
			vy = 1;
			break;
	}
}

function start() {
	tail = 5;
	trail = []
	px = sx;
	py = sy;
	for (var i = 0; i < 5; i++) {
		trail.push({x: px, y: py + 5 - i});
	}
	vx = 0;
	vy = -1;
	ax = Math.floor(Math.random() * gw);
	ay = Math.floor(Math.random() * gh);
	play();
}

function update() {
	px += vx;
	py += vy;
	if (px < 0 || px >= gw || py < 0 || py >= gh) {
		die();
	}
	for (var i = 0; i < trail.length; i++) {
		if (px == trail[i].x && py == trail[i].y) {
			die();
		}
	}
	trail.push({x: px, y: py});
	while (trail.length > tail) {
		trail.shift();
	}
	if (px == ax && py == ay) {
		gotapple();
	}
}

function render() {
	ctx.fillStyle = "black"; //canvas color
	ctx.fillRect(0, 0, canvas.width, canvas.height); //canvas size
	ctx.fillStyle = "red"; //apple color
	ctx.fillRect(ax * ts, ay * ts, ts - 2, ts - 2); //apple size on canvas
	ctx.fillStyle = "dodgerblue"; //snake color
	for (var i = 0; i < trail.length; i++) {
		ctx.fillRect(trail[i].x * ts, trail[i].y * ts, ts - 2, ts - 2); //snake trail size will be extended if snake gets apple
	}
}

function keypress(e) { //keypress for arrow keys
	if (timer == -1 && e.keyCode != 32) {
		return;
	}
	switch (e.keyCode) {
		case 32:
			togglepause();
			break;
		case 37:
			if (vx != 0) {
				break;
			}
			vx = -1;
			vy = 0;
			break;
		case 38:
			if (vy != 0) {
				break;
			}
			vx = 0;
			vy = -1;
			break;
		case 39:
			if (vx != 0) {
				break;
			}
			vx = 1;
			vy = 0;
			break;
		case 40:
			if (vy != 0) {
				break;
			}
			vx = 0;
			vy = 1;
			break;
	}
}

function gotapple() { //when snake gets apple
	tail++; //taill gets extended as 2 size
	score++; // also player gets 1 point for each apple
	scorelabel.innerHTML = "Score: " + score; //show the score on html canvas
	ax = Math.floor(Math.random() * gw); //randomly placing apple on canvas - vertical
	ay = Math.floor(Math.random() * gh); //randomly placing apple on canvas - horizontal
}

function die() { //when snake crash
	score = 0; //score resets
	scorelabel.innerHTML = "Score: 0"; //show resetted score on html canvas
	tail = 5; //tail size resets and starts from 5 again
	trail = [] //no trail
	px = sx;
	py = sy;
	for (var i = 0; i < 5; i++) { //standard snake size set to 5, if snake gets apple its size gonna be pushed
		trail.push({x: px, y: py + 5 - i});
	}
	vx = 0;
	vy = -1;
}

function pause() { //when pause button clicked
	clearInterval(timer);
	timer = -1; //game stops
	pauseButton.innerHTML = "play_circle_outline";
}

function play() { //when play button clicked
	timer = setInterval(function() {
		update(); //update the content when play clicked
		render(); //render the content when play clicked
	}, 1000 / fps); //duration
	pauseButton.innerHTML = "pause_circle_outline";
}

function togglepause() { //freeze the timer (also game) when pause clicked
	if (timer == -1) { //condition when button clicked
		play(); //play it
	} else { //or
		pause(); //keep it paused
	}
}

function resizegame() { //arranging canvas size to fit the screen
	canvas.width = window.innerWidth - 2;
	canvas.height = window.innerHeight - 2;
	gw = Math.floor(canvas.width / ts);
	gh = Math.floor(canvas.height / ts);
	canvas.width -= canvas.width - (gw * ts);
	canvas.height -= canvas.height - (gh * ts);
	if (ax >= gw) {
		ax = Math.floor(Math.random() * gw);
	}
	if (ay >= gh) {
		ay = Math.floor(Math.random() * gh);
	}
}
