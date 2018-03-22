// GLOBAL VARIABLES------------------------------------

var randomNum = Math.floor((Math.random() * 120) + 19);
var randomCrystal1 = Math.floor(Math.random() * 12);
var randomCrystal2 = Math.floor(Math.random() * 12);
var randomCrystal3 = Math.floor(Math.random() * 12);
var randomCrystal4 = Math.floor(Math.random() * 12);
var playerScore = 0;
var winsCounter = 0;
var lossCounter = 0;

//console.log tests to make sure random functions are working appropriately
console.log(randomNum);
console.log(randomCrystal1);
console.log(randomCrystal4);
console.log(playerScore);

//display the random score in the appropriate html span
$("#random-score").html(randomNum);