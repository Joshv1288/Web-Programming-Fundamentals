//Joshua Velez
//Web Programming Fundamentals
//Personal Functions

// Determine how long it will take you to save for certain amount

var amountNeeded = 10000
var amountSaving = 500
var pay = 2

function totalSaving(){
	var totalSaving = amountSaving*pay
	var months = amountNeeded / totalSaving
	console.log(months)
}

totalSaving();

totalSaving() > 6  ? console.log("You will be saving for a long time.") : console.log("Not too long before you will have this.")