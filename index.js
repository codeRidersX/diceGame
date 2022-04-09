
function shuffleButtons(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random 1 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // random dice.png 1-6
var randomImageSource = "images/" + randomDiceImage; // source for folder // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);





if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "שחקן 1 ניצח";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "שחקן 2 ניצח";
} else {
  document.querySelector("h1").innerHTML = "תיקו";
}
}

