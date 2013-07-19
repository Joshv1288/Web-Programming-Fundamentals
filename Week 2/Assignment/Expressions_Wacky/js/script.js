// Joshua Velez
// July 17, 2013
// Wacky Expressions


//Reading Rate

var wordsPassage = prompt("Enter the number of words read") // Number of words you are reading
var time = prompt("Enter the time it took you to read in seconds") // How long it took you to read in seconds
var wpm = (wordsPassage / time) * 60 // Expression

alert("You read " + wpm + " words per minute.")