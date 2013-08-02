//Joshua Velez
//Web Programming Fundamentals
//Personal Functions

// Determine how long it will take you to save for certain amount

var amountNeeded = prompt("How much do you need to save?")
var amountSaving = prompt("How much will you be saving?")
var pay = prompt("How often will you be saving this ammount? i.e Bi = 2 Monthly = 1 Weekly = 4")

var totalSaving = function(){
	var totalSaving = amountSaving*pay
	var months = amountNeeded / totalSaving 
	return months
}

console.log("You will be saving for " + totalSaving() + " months");

totalSaving() > 6  ? console.log("You will be saving for a long time.") : console.log("Not too long before you will have this.")