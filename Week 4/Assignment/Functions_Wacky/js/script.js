//Joshua Velez
//Web Programming Fundamentals
//Wacky Functionsß


//Finding the circumference of the circle

var area = 180
var pi = 3.14

var radius = function(){
	var radius = Math.sqrt(area) / pi
	return radius;
}


console.log(Math.round(radius()* 100) / 100)

var diameter = function(){
	var diameter = 2*radius()
	return diameter
}

console.log(Math.round(diameter() * 100) / 100)

var circumference = function(){
	var circumference = pi*diameter()
	return circumference
}

console.log(Math.round(circumference() * 100) / 100)