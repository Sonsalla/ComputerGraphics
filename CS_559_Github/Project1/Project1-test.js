function setup() { "use strict";
  var canvas = document.getElementById('myCanvas');
  var red_slider1 = document.getElementById('red-slider1');
  red_slider1.value = 25;
  var red_slider2 = document.getElementById('red-slider2');
  red_slider2.value = 25;
  
  var green_slider1 = document.getElementById('green-slider1');
  green_slider1.value = 200;
  var green_slider2 = document.getElementById('green-slider2');
  green_slider2.value = 25;
  
  var blue_slider1 = document.getElementById('blue-slider1');
  blue_slider1.value = 25;
  var blue_slider2 = document.getElementById('blue-slider2');
  blue_slider2.value = 200;

  var black_slider1 = document.getElementById('black-slider1');
  black_slider1.value = 550;
  var black_slider2 = document.getElementById('black-slider2');
  black_slider2.value = 25; 
  
  var purple_slider1 = document.getElementById('purple-slider1');
  purple_slider1.value = 400;
  var purple_slider2 = document.getElementById('purple-slider2');
  purple_slider2.value = 30;
  
  var orange_slider1 = document.getElementById('orange-slider1');
  orange_slider1.value = 25;
  var orange_slider2 = document.getElementById('orange-slider2');
  orange_slider2.value = 400;
  
  var red_slider1_start = 25;
  var red_slider2_start = 25;
  var green_slider1_start = 200;
  var green_slider2_start = 25;
  var blue_slider1_start = 25;
  var blue_slider2_start = 200;
  var black_slider1_start = 550;
  var black_slider2_start = 25;
  var purple_slider1_start = 400;
  var purple_slider2_start = 30;
  var orange_slider1_start = 25;
  var orange_slider2_start = 400;
  
  function draw() {
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
	
    // use the sliders to get various parameters
    var red_dx = red_slider1.value-red_slider1_start;
    var red_dy = red_slider2.value-red_slider2_start;
    var green_dx = green_slider1.value-green_slider1_start;
    var green_dy = green_slider2.value-green_slider2_start;
	var blue_dx = blue_slider1.value-blue_slider1_start;
	var blue_dy = blue_slider2.value-blue_slider2_start;
	var black_dx = black_slider1.value-black_slider1_start;
	var black_dy = black_slider2.value-black_slider2_start;
	var purple_dx = purple_slider1.value-purple_slider1_start;
	var purple_dy = purple_slider2.value-purple_slider2_start;
	var orange_dx = orange_slider1.value-orange_slider1_start;
	var orange_dy = orange_slider2.value-orange_slider2_start;
	
	function puzzle_square(){
	//draw the puzzle square
	context.beginPath();
	context.rect(200,200,300,300);
	context.lineWidth = 4;
	context.stroke();
	}
	
	
    function red_piece() {
     //red piece
	context.beginPath();
	context.fillStyle = "Red";
	var x = 25;
	var y = 25;
	context.moveTo(x,y);
	context.lineTo(x+150, y);
	context.lineTo(x+150,y+150);
	context.lineTo(x+100,y+150);
	context.lineTo(x+100,y+100);
	context.lineTo(x,y+100);
	context.closePath();
	context.fill();     
    }
	
	function green_piece(){
		//green piece
		var x = 200;
		var y = 25;
		context.beginPath();
		context.fillStyle = "Green";
		context.moveTo(x,y);
		context.lineTo(x,y+150);
		context.lineTo(x+75,y+100);
		context.closePath();
		context.fill();
	}
	
	function blue_piece(){
		var x = 25;
		var y = 200;
		
		context.beginPath();
		context.fillStyle = "Blue";
		context.moveTo(x, y);
		context.lineTo(x+150,y);
		context.lineTo(x+150, y+100);
		context.lineTo(x+75, y+100);
		context.closePath();
		context.fill();
	}
	
	function black_piece(){
		var x = 550;
		var y = 25;
		
		context.beginPath();
		context.fillStyle="Black";
		context.moveTo(x, y);
		context.lineTo(x+100, y);
		context.lineTo(x+100, y+50);
		context.lineTo(x, y+200);
		context.closePath();
		context.fill();
		
	}
	
	function purple_piece(){
		var x = 400;
		var y = 30;
		
		context.beginPath();
		context.fillStyle = "Purple";
		context.moveTo(x, y);
		context.lineTo(x+50, y);
		context.lineTo(x+87.5, y-25);
		context.lineTo(x+87.5, y+150);
		context.lineTo(x-100, y+150);
		context.closePath();
		context.fill();
	}
	
	function orange_piece(){
		var x = 25;
		var y = 400;
		
		context.beginPath();
		context.fillStyle = "Orange";
		context.moveTo(x,y);
		context.lineTo(x+37.5, y-25);
		context.lineTo(x+112.5, y-25);
		context.lineTo(x+112.5, y+175);
		context.lineTo(x, y+175);
		context.closePath();
		context.fill();
		
	}
	
    
    /*function DrawAxes(color) {
      context.strokeStyle=color;
      context.beginPath();
      // Axes
      context.moveTo(120,0);context.lineTo(0,0);context.lineTo(0,120);
      // Arrowheads
      context.moveTo(110,5);context.lineTo(120,0);context.lineTo(110,-5);
      context.moveTo(5,110);context.lineTo(0,120);context.lineTo(-5,110);
      // X-label
      context.moveTo(130,0);context.lineTo(140,10);
      context.moveTo(130,10);context.lineTo(140,0);
      // Y-label
      context.moveTo(0,130);context.lineTo(5,135);context.lineTo(10,130);
      context.moveTo(5,135);context.lineTo(5,142);
      
      context.stroke();
     }*/
    
    // make sure you understand these
	puzzle_square();
    context.save();
    context.translate(red_dx,red_dy);
    red_piece();
	context.restore();
	context.save();
	context.translate(green_dx, green_dy);
	green_piece();
	context.restore();
	context.save();
	context.translate(blue_dx, blue_dy);
	blue_piece();
	context.restore();
	context.save();
	context.translate(black_dx, black_dy);
	black_piece();
	context.restore();
	context.save();
	context.translate(purple_dx, purple_dy);
	purple_piece();
	context.restore();
	context.save();
	context.translate(orange_dx, orange_dy);
	orange_piece();
    context.restore();
   
  }
  red_slider1.addEventListener("input",draw);
  red_slider2.addEventListener("input",draw);
  green_slider1.addEventListener("input",draw);
  green_slider2.addEventListener("input",draw);
  blue_slider1.addEventListener("input",draw);
  blue_slider2.addEventListener("input",draw);
  black_slider1.addEventListener("input",draw);
  black_slider2.addEventListener("input",draw);
  purple_slider1.addEventListener("input",draw);
  purple_slider2.addEventListener("input",draw);
  orange_slider1.addEventListener("input",draw);
  orange_slider2.addEventListener("input",draw);
  
  draw();
}
window.onload = setup;

