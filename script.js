/*
 *	Check PhoneGap to port onto iOS/Android
 */

var width = 500;
var height = 500;
var context;

window.onload = function() {
	canvas = document.getElementById("myCanvas");
	canvas.setAttribute("width", "" + width);
	canvas.setAttribute("height", "" + height);

	context = canvas.getContext("2d"); //Draw anything in 2D

	context.clearRect(0, 0, width, height);

}

function drawBoard() {

}

document.getElementById("resetButton").addEventListener("click", function() {
	console.log("Reset Pressed!");
})
document.getElementById("resetWinButton").addEventListener("click", function() {
	console.log("Reset Win pressed!");
})