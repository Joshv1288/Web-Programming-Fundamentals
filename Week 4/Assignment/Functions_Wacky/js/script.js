//Joshua Velez
//Web Programming Fundamentals
//Wacky Conditional

var yearBorn = prompt("Please enter the year you were born.") // Collects Year user was born
var currentYear = prompt("Please enter the current year.") // Collects current year

var drinkAge = currentYear - yearBorn // Calculates the users ages

drinkAge >= 21 ? alert("You are " + drinkAge + " years old. So you can drink alchol.") : alert("You are " + drinkAge + " years old. So you can NOT drink alchol.") // Displays whether or not the user can drink because age is greater than or equal to 21.