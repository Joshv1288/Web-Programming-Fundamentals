//
//
//

var yearBorn = prompt("Please enter the year you were born.")
var currentYear = prompt("Please enter the current year.")

var drinkAge = currentYear - yearBorn

drinkAge >= 21 ? alert("You are " + drinkAge + " years old. So you can drink alchol.") : alert("You are " + drinkAge + " years old. So you can NOT drink alchol.")