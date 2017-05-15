var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode buttons event listeners
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
		for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		// If this textcontent is equal to easy, then numSquares is 3 otherwise numSquares is 6
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		// This if statement does the same thing
		// if (this.textContent === "Easy") {
		// 	numSquares = 3;
		// } else{
		// 	numSquares = 6;
		// }
		reset();
		// figure out how many squares to show
		// pick new colors
		// pick a new pickedColor
		// update page to reflect changes
		});
	}
}

function setUpSquares(){
		for(var i = 0; i < squares.length; i++){
		//Add click listeners to squares
		squares[i].addEventListener("click", function(){
			//Grab color of picked square
			var clickedColor = this.style.background;
			//Compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = ""; 
	resetButton.textContent = "New Colors";
	//change the colors of squares on page
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		}
	h1.style.background = "steelblue";	
}

resetButton.addEventListener("click", function(){
	reset();	
});

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	//Pick a random number
	var random = Math.floor(Math.random()* colors.length);
	//Use number to access that number
	return colors[random];
}

function generateRandomColors(num){
	//make an array 
	var arr =[];
	//Repear num times
	for (var i = 0; i < num; i++) {
		//get random color and push into array	
		arr.push(randomColor());	
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random()* 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random()* 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random()* 256);

	return "rgb("+ r +", " + g +", " + b + ")";
}