var rawPushup = prompt("How Many Pushups did you do?");
var rawSitup = prompt("How many situps did you do?");
var rawRunTime = prompt("How fast did you run your 2 mile?"); 
var minimumScore = 60;

//If Pushups, Situps and Runtime are greater than or equal to 60 then you passed the PT test

if(rawPushup >= minimumScore && rawSitup >= minimumScore && rawRunTime >= minimumScore){
alert("You passed the PT test!") ;
}else{
alert("You failed the PT test!");
}

