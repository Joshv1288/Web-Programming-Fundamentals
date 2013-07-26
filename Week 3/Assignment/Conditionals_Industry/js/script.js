var rawPushup = prompt("How Many Pushups did you do?"); //Collects number of pushups performed
var rawSitup = prompt("How many situps did you do?"); //Collects number of situps performed
var rawRunTime = prompt("How fast did you run your 2 mile?"); //Collects how fast you ran on PT test
var minimumScore = 60; //Minimum score need to pass sections PT test

//If Pushups, Situps and Runtime are greater than or equal to 60 then you passed the PT test

if(rawPushup >= minimumScore && rawSitup >= minimumScore && rawRunTime >= minimumScore){ //Conditional that compares all 3 variables
alert("You passed the PT test!") ; // Alerts user that they have meet all three criteria and passed
}else{
alert("You failed the PT test!"); //Alerts use that they have failed the PT test
}

