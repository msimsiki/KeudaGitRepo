window.addEventListener("load", main); //when p7.html opened loads main function

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

function main() { //loads all content and then run start function
	canvas = document.getElementById("canvas"); //canvas pulled from html
	ctx = canvas.getContext("2d"); //canvas is 2d
	pauseButton = document.getElementById("pause-button"); //google apis play-pause button pulled from html
	scorelabel = document.getElementById("score-label"); //score label also pulled from html
	resizegame();
	sx = Math.floor(gw / 2);
	sy = Math.floor(gh / 2);
	window.addEventListener("resize", resizegame); //fitting game to the device screen
	document.addEventListener("keydown", keypress); //watch for keypress if opened on pc/laptop/wireless keyboard
	pauseButton.addEventListener("click", togglepause); //when play-pause button clicked
	start(); //starts the game
}

function start() {
	tail = 5; //tail size at the start as 5
	trail = [] //no trail
	px = sx; //how long distance snake can go at a time
	py = sy; //how long distance snake can go at a time
	for (var i = 0; i < 5; i++) { //adds x1 at a time when snake goes to forward
		trail.push({x: px, y: py + 5 - i}); //removes the trail x1 at a time when snake goes forward
	}
	vx = 0;
	vy = -1;
	ax = Math.floor(Math.random() * gw); //adds apple randomly
	ay = Math.floor(Math.random() * gh); //add apple randomly
	play(); //toggles play button to start the game until button clicked to pause the game
}

function update() {
	px += vx;
	py += vy;
	if (px < 0 || px >= gw || py < 0 || py >= gh) {
		die(); //if snake crashes the white borders it dies
	}
	for (var i = 0; i < trail.length; i++) {
		if (px == trail[i].x && py == trail[i].y) {
			die(); // if snake crashes to its own tail it dies
		}
	}
	trail.push({x: px, y: py}); //extending snake from the head
	while (trail.length > tail) { //while
		trail.shift(); //removing from the end
	}
	if (px == ax && py == ay) { //if snakes head is in the same spot with the apple
		gotapple(); //snake gets the apple
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

function keypress(e) { //moves the snake up down left right with the arrow keys
	if (timer == -1 && e.keyCode != 32) {
		return;
	}
	switch (e.keyCode) { //when pause button clicked freezes the game
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
