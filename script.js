/*
 *	Check PhoneGap to port onto iOS/Android
 */

var boxsize = 50; //Circle diameter
var indist = 3;	  // distance between circles
var buff = 10; //canvasBuffer
var width = (boxsize + indist) * 7 + 2 * buff; //7 circles horizontal
var height = (boxsize + indist) * 6 + 2 * buff; //6 circles vertical
var context;
var drawBoardBool;
var boardState = new Array();

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

	size = canvas.height - 2*buff; 		// actual size without the surrounding buffer
    radius =  (size - 6*indist)/12.0; 	// radius of each colored disk

	//Drawing the circles on the canvas
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < 6; j++) {

			context.beginPath(); //Set up canvas

			context.arc(i*(boxsize+indist)+buff+radius, j*(boxsize+indist)+buff+radius, radius, 0, 2*Math.PI);		// draw an arc at (x,y) of radius r, from 0 to 2 pi angles

		    context.strokeStyle = "#000000"; //Set circle color
		    context.stroke();	

		}
	}

	//Initialize boardState -> become 2D and set to 0
	for (i = 0; i < 6; i++) {
    	boardState[i] = new Array();
    for (j = 0; j < 7; j++) {
        boardState[i][j] = 0;		
    }
}

}

function addDots() {
	console.log("Adding dots!");

}

function nextPlayer() {
	var player = document.getElementById("playerTurn");
	if (player.innerHTML == "1")
		player.innerHTML = "2";
	else
		player.innerHTML = "1";
}


// Event Listeners
document.getElementById("myCanvas").addEventListener("click", addDots, false);
document.getElementById("resetButton").addEventListener("click", function() {
	console.log("Reset Pressed!");

	//Reset player turn display
	document.getElementById("playerTurn").innerHTML = "1";
})
document.getElementById("resetWinButton").addEventListener("click", function() {
	console.log("Reset Win pressed!");
})