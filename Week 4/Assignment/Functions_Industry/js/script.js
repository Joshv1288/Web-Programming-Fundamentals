/* 
Joshua Velez
Web Programming Fundamentals
Functions Industry
*/

//Determine PT Test Score

var p = prompt("How many pushups did you do?"); // Gets users pushup score
var s = prompt("How many situps did you do?"); // Gets users sit up score
var t = prompt("How fast did you run?"); // Gets users runtime score

testScore(p, s, t); // Calls function

function testScore(p, s, t){
	var score = parseInt(p) + parseInt(s) + parseInt(t); // Adds scores
	alert("Your final score is " + score.); // Alerts user of final score
}


if (p >= 90 && s >= 90 && t >=90){
	alert("You passed your PT Test and earned the PT Badge."); // Alerts user if they passed PT Test and got PT Badge.
}else if (p >= 60 && s >= 60 && t >=60){
	alert("You passed the PT Test."); // Alerts user if they passed PT Test.
}else{
	alert("You failed the PT Test."); // ALerts user if they failed PT Test.
}