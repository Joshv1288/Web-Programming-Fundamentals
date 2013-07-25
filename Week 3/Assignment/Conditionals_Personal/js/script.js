//Joshua Velez
//Web Programming Fundamentals
//Conditional Personal


//If Pushups, Situps and Runtime are greater than or equal to 60 then you passed the PT test

var rawPushup = 80;
var rawSitup = 88;
var rawRunTme = 89;

if(rawPushup > parseInt(60) && rawSitup > parseInt(60)){
	console.log("You passed the PT test!");
else{
	console.log("You failed the PT test! :(");
}