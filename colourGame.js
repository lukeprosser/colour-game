// SET VARIABLES
var numSquares = 6;
var colors = [];
var pickedColor;

// SELECTORS
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // setup mode button event listeners
    setupModeButtons();
    // setup square event listeners
    setupSquares();
    reset();
}

// MODE BUTTON EVENT LISTENERS: CHOOSE DIFFICULTY AND DISPLAY SQUARES
function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            // remove selected class (both to be safe)
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            // add selected class
            this.classList.add("selected");
            // calculate how many squares to show (ternary operator)
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            // reset colors and update display
            reset();
        });
    }
}

// SQUARE EVENT LISTENERS
function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor       
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#2a2a2a";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

// RESET GAME
function reset(){
    // generate all new colors depending on numSquares
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // update reset button to say new colours
    resetButton.textContent = "New Colours";
    // update message display to be empty
    messageDisplay.textContent = "";
    // change colors of squares based on colors array
    for(var i = 0; i < squares.length; i++){
        // check if there is a color at the index (size of array)
        if(colors[i]){
            // show all squares given background color
            squares[i].style.display = "block";
            // update the color
            squares[i].style.backgroundColor = colors[i];
        } else {
            // hide remaining squares
            squares[i].style.display = "none";
        }      
    }
    h1.style.backgroundColor = "#008080";
}

// RESET BUTTON
resetButton.addEventListener("click", function(){
    reset();
});

// CHANGE ALL SQUARES TO PICKED COLOR
function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

// RANDOMLY SELECT PICKED COLOR FROM ARRAY OF RANDOM COLORS
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// PUSH (NUM) RANDOM COLORS INTO ARRAY
function generateRandomColors(num){
    // make an array
    var arr = []
    // repeat num times
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

// GENERATE RANDOM RGB COLOR
function randomColor(){
    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    // build string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}