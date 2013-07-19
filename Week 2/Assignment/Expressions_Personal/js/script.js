// Joshua Velez
// July 17, 2013
// Personal Expressions


// Calculating Interest earned

var amountSaving = prompt("Please enter the amount you will be saving each month")
var months = prompt("Enter number of months you will be saving")
var interest = prompt("Enter your interest rate in decimal form")
var totalEarned
var interestEarned


totalEarned = amountSaving * months * interest
interestEarned = totalEarned / 10

alert(interestEarned)