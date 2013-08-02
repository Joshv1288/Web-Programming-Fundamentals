//Joshua Velez
//Web Programming Fundamentals
//Wacky Functionsß


//Finding the circumference of the circle

var area = 180

var radius = function(){
	var pi = 3.14
	var radius = Math.sqrt(area) / pi
	return radius;
}

//radius();

console.log(radius())

function diameter(){

	var diameter = 2*radius()
	console.log(diameter)
}

diameter();