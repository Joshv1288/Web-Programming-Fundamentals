// Joshua Velez
// July 17, 2013
// Industry Expressions


//Calculating APFT Score

alert("Please have Raw Score already calculated to Simple Score")

var pushUps = prompt("Please Enter Push Up Score");
var sitUps = prompt("Please Enter Sit Up Score");
var runTime = prompt("Please Enter Run Score");


//var scores = [var pushUps, var sitUps, var runTime];

//var scores = new Array();
//scores[0]= var pushUps;
//scores[1]= var sitUps;
//scores[2]= var runTime;

//totalScore = scores[0] + scores[1] + scores[2]

var totalScore = parseInt(pushUps) + parseInt(sitUps) + parseInt(runTime);
console.log(totalScore);
alert("Your Total APFT Score is " + totalScore)