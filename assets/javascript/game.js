// GLOBAL VARIABLES------------------------------------

var randomNum = Math.floor((Math.random() * 120) + 19);
var randomCrystal1 = Math.floor((Math.random() * 12) + 1);
var randomCrystal2 = Math.floor((Math.random() * 12) + 1);
var randomCrystal3 = Math.floor((Math.random() * 12) + 1);
var randomCrystal4 = Math.floor((Math.random() * 12) + 1);
var playerScore = 0;
var winsCounter = 0;
var lossCounter = 0;

//console.log tests to make sure random functions are working appropriately
// console.log(randomNum);
console.log(randomCrystal1);
console.log(randomCrystal2);
// console.log(playerScore);

//display the random score in the appropriate html span
$("#random-score").html(randomNum);

//display total number of wins and losses and playerScore
$("#wins").html(" " + winsCounter);
$("#losses").html(" " + lossCounter);
$("#user-score").html(" " + playerScore);

//when any crystal is clicked add it to the aggregate player score
$("#crystal1").on('click', function() {
  $("#user-score").html(playerScore += randomCrystal1);
});

$("#crystal2").on('click', function() {
  $("#user-score").html(playerScore += randomCrystal2);
});

$("#crystal3").on('click', function() {
  $("#user-score").html(playerScore += randomCrystal3);
});

$("#crystal4").on('click', function() {
  $("#user-score").html(playerScore += randomCrystal4);
});

//when playerScore equals the randomly generated computer number, add one to wins.
