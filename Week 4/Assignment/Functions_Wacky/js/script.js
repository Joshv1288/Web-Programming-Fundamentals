//Joshua Velez
//Web Programming Fundamentals
//Wacky Functionsß


//Finding the circumference of the circle

var area = prompt("Please enter the area of your circle.")
var pi = 3.14

var radius = function(){
	var radius = Math.sqrt(area) / pi
	return radius;
}


alert(Math.round(radius()* 100) / 100)

var diameter = function(){
	var diameter = 2*radius()
	return diameter
}

alert(Math.round(diameter() * 100) / 100)

var circumference = function(){
	var circumference = pi*diameter()
	return circumference
}

alert(Math.round(circumference() * 100) / 100)