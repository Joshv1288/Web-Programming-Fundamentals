/* 
Joshua Velez
Web Programming Fundamentals
Functions Industry
*/

//Determine PT Test Score

var p =  prompt("How many pushups did you do?")
var s = 90
var t = 85

testScore(p, s, t)

function testScore(p, s, t){
	var score = parseInt(p) + parseInt(s) + parseInt(t)
	console.log(score)
}


if(p >= 60 && s >= 60 && t >=60){
	
	console.log("You passed your PT Test with a score of " + score)
	
}esle{
	
	console.log("You failed the PT Test."
}