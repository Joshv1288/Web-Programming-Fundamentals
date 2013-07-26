//Joshua Velez
//Web Programming Fundamentals
//Conditional Personal


var waveHeight = prompt("What is the wave height at the beach?") //Collects WaveHeight
var windSpeed = prompt("What is the wind speed?") // Collects wind speed
var minimumHeight = 3 // Minimum wave height required for surfing
var maximumWind = 20 //MaximumWind Speed to not surf

/*if (waveHeight != '' || waveHeight != null) {
	alert("Please enter the wave height. Please refresh the page")
	console.log("please enter the wave height. Please refresh the page")
}

if (windSpeed != '' || windSpeed != null) {
	alert("Please enter the wind speed. Please refresh the page")
	console.log("please enter the wind speed. Please refresh the page")
}*/

//If the waves are big enough and its not to windy I will go surfing if not we will stay home.
if (waveHeight > minimumHeight){ //Compares wave height to minimum height
	if (windSpeed < maximumWind) { // Compares wind speed to minium speed
		console.log("Lets go surfing") //Displays in console if both conditions are met
	}else{
		console.log("Water is a little choppy") //Displays if wind is too high
	}

}else{
	console.log("Looks really flat!") //Displays if wave height is to low
}