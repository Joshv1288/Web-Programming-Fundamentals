//Joshua Velez
//Web Programming Fundamentals
//Personal Functions

// Determine how long it will take you to save for certain amount

var amountNeeded = prompt("How much do you need to save?"); //Gets amount user needs to save
var amountSaving = prompt("How much will you be saving?"); // Gets how much user will be saving
var pay = prompt("How often will you be saving this ammount? i.e Bi = 2 Monthly = 1 Weekly = 4");// Gets how often they will save

var totalSaving = function(){
	var totalSaving = amountSaving*pay; // calculates the total savings for that month.
	var months = amountNeeded / totalSaving; //Divdes total saved by the amount needed.
	return months; // returns how many months needed
}

alert("You will be saving for " + totalSaving() + " months"); // alerts user of ammount of months need to save the ammount needed

totalSaving() > 6  ? alert("You will be saving for a long time.") : alert("Not too long before you will have this."); //alerts user if they will be saving for a longtime or not