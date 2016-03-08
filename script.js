/*
 *	Check PhoneGap to port onto iOS/Android
 */

var boxsize = 50; //Circle diameter
var indist = 3;	  // distance between circles
var buff = 10; //canvasBuffer
var width = (boxsize + indist) * 7 + 2 * buff; //7 circles horizontal
var height = (boxsize + indist) * 6 + 2 * buff; //6 circles vertical
var columnState = [0, 0, 0, 0, 0, 0, 0]; //Tracking circles per column
var gameOver, plays;
var context;
var drawBoardBool;
var boardState = new Array();

/*
	Note: Probably set var = doc.getById as var up front to reduce calls
*/

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

function updateWinCount(winner) {

	if (winner == "1") {
		var score = document.getElementById("scoreP1").innerHTML;
		document.getElementById("scoreP1").innerHTML = parseInt(score) + 1;
	}
	else {
		var score = document.getElementById("scoreP2").innerHTML;
		document.getElementById("scoreP2").innerHTML = parseInt(score) + 1;
	}
}

function resetWinCount() {
	console.log("Reset Win pressed!");

	//Reset span labels
	document.getElementById("scoreP1").innerHTML = 0;
	document.getElementById("scoreP2").innerHTML = 0;
}

function resetGame() {
	console.log("Reset Pressed!");

	//Reset player turn display
	document.getElementById("playerTurn").innerHTML = "1";
	
	// Reset columnState
	columnState = [0,0,0,0,0,0,0];	
    plays = 0;						
    gameOver = false;

    drawBoard();	

}


// Event Listeners
document.getElementById("myCanvas").addEventListener("click", addDots, false);
document.getElementById("resetButton").addEventListener("click", resetGame);
document.getElementById("resetWinButton").addEventListener("click", resetWinCount);