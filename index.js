var numOfSquares = 9;
var colors =[]; //generateRandomColors(numOfSquares);
var pickedColor; //= pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#title");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#reset");
// var easy = document.querySelector("#easy");
// var hard = document.querySelector("#hard");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButton();
  setUpSquares();
}


function setUpModeButton() {
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function() {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      modeButton[2].classList.remove("selected");
      this.classList.add("selected");

      // this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
      if(this.textContent === "Easy"){
        numOfSquares = 3;
      } else if(this.textContent === "Medium") {
        numOfSquares  = 6;
      }else{
        numOfSquares  = 9;
      }
      reset();
    })
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    // squares[i].style.backgroundColor = colors[i];

    //add click listener to squuares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        message.textContent = "Correct!";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor
        newGame.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
  reset();
}


function reset() {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  newGame.textContent = "New Colors";
  message.textContent = "";
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

// easy.addEventListener("click",function(){
//   easy.classList.add("selected");
//   hard.classList.remove("selected");
//   numOfSquares = 3;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//      if(colors[i]){
//        squares[i].style.backgroundColor = colors[i];
//      }else{
//        squares[i].style.display = "none";
//      }
//   }
// })
//
// hard.addEventListener("click",function(){
//   easy.classList.remove("selected");
//   hard.classList.add("selected");
//   numOfSquares = 6;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//        squares[i].style.backgroundColor = colors[i];
//        squares[i].style.display = "block";
//   }
// })

newGame.addEventListener("click", reset
  // function(){
  //     colors = generateRandomColors(numOfSquares);
  //     pickedColor = pickColor();
  //     colorDisplay.textContent = pickedColor;
  //     message.textContent = "";
  //     newGame.textContent = "New Colors";
  //     h1.style.backgroundColor = "steelblue";
  //     for(var i = 0; i < squares.length; i++){
  //       squares[i].style.backgroundColor = colors[i];
  //     }
  // }
);

// colorDisplay.textContent = pickedColor;


function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}


function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //generate random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}


function randomColor() {
  //red color from 0-255
  var r = Math.floor(Math.random() * 256);
  //green color from 0-255
  var g = Math.floor(Math.random() * 256);
  //blue color from 0-255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}


function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
