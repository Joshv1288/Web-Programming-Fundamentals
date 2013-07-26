//Joshua Velez
//Web Programming Fundamentals
//Conditional Personal


var waveHeight = prompt("What is the wave height at the beach?") //Collects WaveHeight
var minimumHeight = 3 // Minimum wave height required for surfing

if (waveHeight != '' || waveHeight != null) {
	alert("Please enter the wave height. Please refresh the page")
	console.log("please enter the wave height. Please refresh the page")
}


waveHeight > minimumHeight ? console.log("Lets go surfing!!") :  console.log("Looking kind of flat brah!")