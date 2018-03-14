var germany = [14,10,7];
var china = [1,6,2];
var countryArray = [germany,china];
var nameArray=["germany","china"];

var svg = document.getElementById("svg1");

var generateCircle = function(x,y,r,color){
	circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	circle.setAttribute("cx",x.toString()+"px");
	circle.setAttribute("cy",y.toString()+"px");
	circle.setAttribute("r",r.toString()+"px");
	circle.setAttribute("fill",color);

	svg.append(circle);

}

var makeThreeCircles = function(){
	generateCircle(150,150,25,"yellow");
	generateCircle(350,350,25,"gray");
	generateCircle(550,550,25,"brown");
}

var modifyCircles = function(countryIndex) {
	var currentArray = countryArray[countryIndex];
	d3.selectAll("circle").data(currentArray).attr("r",function(data){
		return data*10; 	
	});
	document.getElementById("textStuff").innerText=nameArray[countryIndex] + " Gold:" + currentArray[0] + " Silver: " + currentArray[1] + " Bronze: " + currentArray[2];	
}


makeThreeCircles();

document.getElementById("Germany").addEventListener("click",function(){modifyCircles(0);});

document.getElementById("China").addEventListener("click",function(){modifyCircles(1);});


