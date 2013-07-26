//Joshua Velez
//Web Programming Fundamentals
//Conditional Personal


var waveHeight = prompt("What is the wave height at the beach?")
var minimumHeight = 3

if (waveHeight == null) {
	alert("Please enter the wave height. Please refresh the page")
}


waveHeight > minimumHeight ? console.log("Lets go surfing!!") :  console.log("Looking kind of flat brah!")