//Joshua Velez
//Web Programming Fundamentals
//Conditional Personal


var waveHeight = prompt("What is the wave height at the beach?") //Collects WaveHeight
var windSpeed = prompt("What is the wind speed?") // Collects wind speed
var minimumHeight = 3 // Minimum wave height required for surfing
var maximumWind = 20 //MaximumWind Speed to not surf

if (waveHeight != '' || waveHeight != null) {
	alert("Please enter the wave height. Please refresh the page")
	console.log("please enter the wave height. Please refresh the page")
}

if (windSpeed != '' || windSpeed != null) {
	alert("Please enter the wind speed. Please refresh the page")
	console.log("please enter the wind speed. Please refresh the page")
}

if (waveHeight > minimumHeight){
	if (windspeed < maximumWind) {
		console.log("Lets go surfing")
	}
}else{
	console.log("Looks really flat!")
}