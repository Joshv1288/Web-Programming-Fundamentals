//Joshua Velez
//Web Programming Fundamentals
//Wacky Functionsß


//Finding the circumference of the circle

var area = prompt("Please enter the area of your circle.") // Prompts user for area
var unit= prompt("What unit of measure are you using? i.e. feet, inches") //Prompts user for what units they measured in
var pi = 3.14 // round pi value

var radius = function(){ //Finds the radius
	var radius = Math.sqrt(area) / pi ;//calculates the radius
	return radius;
}


//alert(Math.round(radius()* 100) / 100)

var diameter = function(){ // finds the diameter
	var diameter = 2*radius(); // calculates the diameter
	return diameter
}

//alert(Math.round(diameter() * 100) / 100)

var circumference = function(){ //Finds the circumference
	var circumference = pi*diameter(); //calculates circumference
	return circumference
}

alert("The circumference of the circle is " + Math.round(circumference() * 100) / 100 + " square " + unit ) //alerts user of the circumference of circle.