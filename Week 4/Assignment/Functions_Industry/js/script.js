/* 
Joshua Velez
Web Programming Fundamentals
Functions Industry
*/

//Determine PT Test Score

var p = prompt("How many pushups did you do?")
var s = prompt("How many situps did you do?")
var t = prompt("How fast did you run?")

testScore(p, s, t)

function testScore(p, s, t){
	var score = parseInt(p) + parseInt(s) + parseInt(t)
	console.log("Your final score is " + score)
}


if (p >= 90 && s >= 90 && t >=90){
	console.log("You passed your PT Test and earned the PT Badge.")
}else if (p >= 60 && s >= 60 && t >=60){
	console.log("You passed the PT Test.")
}else{
	console.log("You failed the PT Test.")
}