function setup() {
  var canvas = document.getElementById('myCanvas');
  var x = 0;
  var wheelrotate = 0;
  var dumprotate = 0;
  var cargodump = 0;
  
  var move = true;
  var rotate = true;
  var dump = true;

  function draw() {
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
    // use the sliders to get the angles
    
    // note that this only changes the y
    // X just stays the same
    // the coordinate systems will move
    function linkage(color) {    
      context.beginPath();
      context.fillStyle = color;
      context.moveTo(0,0);
      context.lineTo(10,5);
      context.lineTo(90,5);
      context.lineTo(100,0);
      context.lineTo(90,-5);
      context.lineTo(10,-5);
      context.closePath();
      context.fill();
      
    };
	
	function dumpTruckBody(){
		
		//black bed of truck
		context.beginPath();
		context.fillStyle = "Black";
		context.moveTo(0,0);
		context.lineTo(270, 0);
		context.lineTo(270, -50);
		context.lineTo(280, -50);
		context.lineTo(280, 30);
		context.lineTo(0, 30);
		context.closePath();
		context.fill();
		
		//cabin of truck
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		context.moveTo(285,-70);
		context.lineTo(355, -70);
		context.lineTo(375, -30);
		context.lineTo(375, 30);
		context.lineTo(280, 30);
		context.lineTo(280, -50);
		context.closePath();
		context.fill();
		
		//windows
		context.beginPath();
		context.fillStyle = 'rgb(129,166,255)';
		context.moveTo(295, -60);
		context.lineTo(315, -60);
		context.lineTo(315, -30);
		context.lineTo(295, -33);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(129,166,255)';
		context.moveTo(320, -60);
		context.lineTo(350, -60);
		context.lineTo(360, -25);
		context.lineTo(320, -30);
		context.closePath();
		context.fill();
		
		//wheel guards
		context.beginPath();
		context.fillStyle = 'rgb(255,189,53)';
		context.moveTo(8, 15);
		context.lineTo(22, 0);
		context.lineTo(125, 0);
		context.lineTo(140, 15);
		context.lineTo(135, 20);
		context.lineTo(120, 5);
		context.lineTo(25, 5);
		context.lineTo(11, 21);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.moveTo(280, 35);
		context.lineTo(295, 5);
		context.lineTo(335,5);
		context.lineTo(350, 35);
		context.lineTo(345, 35);
		context.lineTo(335,10);
		context.lineTo(295, 10);
		context.lineTo(285, 35);
		context.closePath();
		context.fill();
		
		//lights
		context.beginPath();
		context.fillStyle = 'rgb(277,87,0)';
		context.arc(5, 22, 5, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(277,87,0)';
		context.arc(373, 25, 5, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	};
	function wheel(){
		context.beginPath();
		context.fillStyle = 'Black';
		context.arc(0, 0, 30, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(206,212,212)';
		context.arc(0, 0, 20, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(122,122,122)';
		context.arc(0, 0, 5, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'black';
		context.arc(10, 5, 2, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
		
		
	};
	
	function dumpPart(){
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		/*context.moveTo(35, 90); 0, 0
		context.lineTo(0, 72); -35, -18
		context.lineTo(10, 40); -25, -50
		context.lineTo(10, 30); -25, -60
		context.lineTo(275, 15); 240, -75
		context.lineTo(280, 0); 245, -90
		context.lineTo(330, 0); 295, -90
		context.lineTo(330, 5); 295, -85
		context.lineTo(330, 9); 295, -81
		context.lineTo(280, 90); 245, 0*/
		context.moveTo(0, 0); 0, 0
		context.lineTo(-35, -18); 
		context.lineTo(-25, -50); 
		context.lineTo(-25, -60); 
		context.lineTo(240, -75); 
		context.lineTo(245, -90); 
		context.lineTo(295, -90); 
		context.lineTo(295, -85); 
		context.lineTo(295, -81); 
		context.lineTo(245, 0); 
		context.closePath();
		context.fill()
		
		//details
		context.beginPath();
		context.fillStyle = 'rgb(255,189,53)';
		context.moveTo(15, 0);
		context.lineTo(25,-50);
		context.lineTo(35, -50);
		context.lineTo(25, 0);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.moveTo(60, 0);
		context.lineTo(70,-52);
		context.lineTo(80, -52);
		context.lineTo(70, 0);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.moveTo(105, 0);
		context.lineTo(115,-54);
		context.lineTo(125, -54);
		context.lineTo(115, 0);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.moveTo(150, 0);
		context.lineTo(160,-56);
		context.lineTo(170, -56);
		context.lineTo(160, 0);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.moveTo(195, 0);
		context.lineTo(205,-58);
		context.lineTo(215, -58);
		context.lineTo(205, 0);
		context.closePath();
		context.fill();
	}
	
	function cargo(){
		context.beginPath();
		context.fillStyle = "Brown";
		context.moveTo(0,0);
		context.lineTo(0,-100);
		context.lineTo(100,-100);
		context.lineTo(100,0);
		context.closePath();
		context.fill();
		
		
	}
	function road(){
		context.beginPath();
		context.fillStyle = 'rgb(77,114,130)';
		context.rect(0,440,1000, 60);
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(207,225,237)';
		context.rect(0, 445, 1000, 3);
		context.fill();
		
		context.beginPath();
		context.rect(0, 492, 1000, 3);
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(197,241,242)';
		context.rect(0, 0, 1000, 440);
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(102,159,104)';
		context.rect(0, 400, 1000, 40);
		context.fill();
	}
	
	road();
	context.translate(-400+x, 410);
	dumpTruckBody();
	context.save();
	context.translate(40, 40);
	context.rotate(wheelrotate * Math.PI / 180);
	wheel();
	context.restore();
	context.save();
	context.translate(105, 40);
	context.rotate(wheelrotate * Math.PI / 180);
	wheel();
	context.restore();
	context.save();
	context.translate(315, 42);
	context.rotate(wheelrotate * Math.PI / 180);
	wheel();
	context.restore();
	context.save();
	context.translate(50,-50);
	if(!move){
		context.rotate(-dumprotate * Math.PI / 180);
	}
	if(!rotate){
		context.translate(-cargodump, 0)
	}
	if(dump){
		cargo();
	}
	context.restore();
	context.save();
	if(!move){
		context.rotate(-dumprotate * Math.PI / 180);
	}
	dumpPart();
	
	context.restore();
	context.save();
	context.restore();
	context.restore();
	
	/*x = (x+2);
	wheelrotate = (wheelrotate+5) % 360;*/
    if (x > 900 && cargodump == 0){
		move = false;
	}
	if (dumprotate > 35){
		rotate = false;
	}
	
    if(move){
		x = (x+2);
		wheelrotate = (wheelrotate+5) % 360;
	}
	if(!move){
		if (rotate){
			dumprotate = dumprotate + .5;
		}else{
			cargodump = cargodump + 5;
		}
	}
	if(cargodump > 900){
		dump = false;
		if (dumprotate >= 0){
			
			dumprotate = dumprotate - .5;
			
		}else{
			move = true;
		}
	}
	if(x > 1500){
		location.reload();
	}
	window.requestAnimationFrame(draw)

  };
	window.requestAnimationFrame(draw)
};
window.onload = setup;