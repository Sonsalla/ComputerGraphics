function() {
    var canvas = document.getElementById('myCanvas');
    //var context = canvas.getContext('2d');
    var red-slider1 = document.getElementById('red-slider1');
	slider1.value = 25;
	var red-slider2 = document.getElementById('red-slider2');
	slider2.value = 25;
	
	function draw(){
	var context = canvas.getContext('2d');
    canvas.width = canvas.width;
	var dx = red-slider1.value;
    var dy = red-slider2.value;
	
	//draw the puzzle square
	context.beginPath();
	context.rect(200,200,300,300);
	context.lineWidth = 4;
	context.stroke();
	
	//red piece
	context.beginPath();
	context.fillStyle = "Red";
	context.moveTo(25,25);
	context.lineTo(175, 25);
	context.lineTo(175,175);
	context.lineTo(125,175);
	context.lineTo(125,125);
	context.lineTo(25,125);
	context.closePath();
	context.fill();
	
	
	
	/*context.beginPath();
    context.rect(25,25,50,50);
    context.fill();

    context.beginPath();
    context.rect(125,25,50,50);
    context.fillStyle = "#800";
    context.fill();

    context.beginPath();
    context.rect(25,125,50,50);
    context.strokeStyle = "#800";
    context.lineWidth = 4;
    context.stroke();
    
    context.beginPath();
    context.moveTo(150,125);
    context.lineTo(125,175);
    context.lineTo(175,175);
    context.closePath();
    context.fillStyle="#EE0";
    context.fill();
    context.stroke();*/
	}
	red-slider1.addEventListener("input",draw);
	red-slider2.addEventListener("input",draw);
	draw();
};