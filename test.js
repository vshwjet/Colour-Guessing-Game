var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay");
var displayStatus = document.getElementById("displayStatus")
var resetButton = document.getElementById("reset")
var modeBtn = document.querySelectorAll(".mode")
var header = document.querySelector(".header");

init();

function init(){
    // mode buttons
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected")
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }

    for(var i=0; i < squares.length; i++){

        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                displayStatus.textContent = "Correct";
                changeColors(clickedColor);
                colorDisplay.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again";
                header.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                displayStatus.textContent = "Try Again";
            }
        });
    }

    reset();

}



function reset(){
    colors = generateRandomColor(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    colorDisplay.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colors";
    header.style.backgroundColor = "#232323";
    displayStatus.textContent = "";
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}


resetButton.addEventListener("click", function(){
    reset();
});


function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColor(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor())

    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}