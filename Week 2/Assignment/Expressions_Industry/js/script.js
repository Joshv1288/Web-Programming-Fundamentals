// Joshua Velez
// July 17, 2013
// Industry Expressions


//Calculating APFT Score

alert("Please have Raw Score already calculated to Simple Score")

var pushUps = prompt("Please Enter Push Up Score");
var sitUps = prompt("Please Enter Sit Up Score");
var runTime = prompt("Please Enter Run Score");


//scores = [var pushUps, var sitUps, var runTime];

var scores = [pushUps, sitUps, runTime]

var totalScore = [parseInt(scores[0]) + parseInt(scores[1]) + parseInt(scores[2])];

console.log(totalScore);
alert("Your Total APFT Score is " + totalScore);