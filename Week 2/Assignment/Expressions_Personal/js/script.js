// Joshua Velez
// July 17, 2013
// Personal Expressions


// Calculating Interest earned

var amountSaving = prompt("Please enter the amount you will be saving each month"); //Collects amount user will be saving
var months = prompt("Enter number of months you will be saving"); //Collects number of months the user will save
var interest = prompt("Enter your interest rate in decimal form");//Collects interest rate of user
var totalEarned;
var interestEarned;


totalEarned = amountSaving * months * interest; //Expression to calculate earned
interestEarned = totalEarned / 10;//Expression to move decimal one point to the left

alert("You will earn $" + interestEarned + " over " + months + " months of saving.");//Alert telling user there total interest earned