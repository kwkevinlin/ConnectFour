/*
 *	Check PhoneGap to port onto iOS/Android
 */

var width = 500;
var height = 500;
var boxsize = 50; //Circle diameter
var indist = 3;	  // distance between circles
var circleRadius;
var canvasBuffer = 10;
var context;
var drawBoardBool;

window.onload = function() {
	canvas = document.getElementById("myCanvas");
	canvas.setAttribute("width", "" + width);
	canvas.setAttribute("height", "" + height);

	context = canvas.getContext("2d"); //Draw anything in 2D

	//Main drawBoard() (Connect Four) function
	drawBoardBool = false;
	drawBoard();

}

function drawBoard() {

	//Clear canvas before starting
	context.clearRect(0, 0, width, height);

	circleRadius = ((height - 2*canvasBuffer) - 6*indist) / 12.0;

	//Drawing the circles on the canvas
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < 6; j++) {

			context.beginPath(); //Set up canvas
		    context.arc(i*(boxsize + indist) + canvasBuffer + circleRadius, j*(boxsize+indist) + canvasBuffer + circleRadius, circleRadius, 0, 2*Math.PI);		// draw an arc at (x,y) of radius r, from 0 to 2 pi angles
		    if (drawBoardBool) {					// if true then set fillStyle to given color and apply fill
		        context.fillStyle = "#000000"; //Quotes
		        		        context.fill();						
		    }
		    context.strokeStyle = "#000000";			// color of the circle
		    context.stroke();	

		}
	}

}

function addDots() {

}

//False?
document.getElementById("myCanvas").addEventListener("click", addDots(), false);
document.getElementById("resetButton").addEventListener("click", function() {
	console.log("Reset Pressed!");
})
document.getElementById("resetWinButton").addEventListener("click", function() {
	console.log("Reset Win pressed!");
})