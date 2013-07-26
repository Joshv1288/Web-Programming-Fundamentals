var rawPushup = 60;
var rawSitup = 88;
var rawRunTime = 69;
var minimumScore = 60;

//If Pushups, Situps and Runtime are greater than or equal to 60 then you passed the PT test

if(rawPushup >= minimumScore && rawSitup >= minimumScore && rawRunTime >= minimumScore){
console.log("You passed the PT test!") ;
}else{
console.log("You failed the PT test!");
}