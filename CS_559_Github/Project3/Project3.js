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
    
	
	
	function moveToTx(x,y,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,[x,y],Tx); context.moveTo(res[0],res[1]);}

	function lineToTx(x,y,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,[x,y],Tx); context.lineTo(res[0],res[1]);}

	function arcToTx(x,y,r,s,e,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,[x,y],Tx); context.arc(res[0],res[1],r,s,e,true);}

	function rectToTx(x,y,w,h,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,[x,y],Tx); context.rect(res[0],res[1],w,h);}
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
	
	function dumpTruckBody(Tx){
		
		//black bed of truck
		context.beginPath();
		context.fillStyle = "Black";
		moveToTx(0,0, Tx);
		lineToTx(270, 0, Tx);
		lineToTx(270, -50, Tx);
		lineToTx(280, -50, Tx);
		lineToTx(280, 30, Tx);
		lineToTx(0, 30, Tx);
		context.closePath();
		context.fill();
		
		//cabin of truck
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx(285,-70, Tx);
		lineToTx(355, -70, Tx);
		lineToTx(375, -30, Tx);
		lineToTx(375, 30, Tx);
		lineToTx(280, 30, Tx);
		lineToTx(280, -50, Tx);
		context.closePath();
		context.fill();
		
		//windows
		context.beginPath();
		context.fillStyle = 'rgb(129,166,255)';
		moveToTx(295, -60, Tx);
		lineToTx(315, -60, Tx);
		lineToTx(315, -30, Tx);
		lineToTx(295, -33, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(129,166,255)';
		moveToTx(320, -60, Tx);
		lineToTx(350, -60, Tx);
		lineToTx(360, -25, Tx);
		lineToTx(320, -30, Tx);
		context.closePath();
		context.fill();
		
		//wheel guards
		context.beginPath();
		context.fillStyle = 'rgb(255,189,53)';
		moveToTx(8, 15, Tx);
		lineToTx(22, 0, Tx);
		lineToTx(125, 0, Tx);
		lineToTx(140, 15, Tx);
		lineToTx(135, 20, Tx);
		lineToTx(120, 5, Tx);
		lineToTx(25, 5, Tx);
		lineToTx(11, 21, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		moveToTx(280, 35, Tx);
		lineToTx(295, 5, Tx);
		lineToTx(335,5, Tx);
		lineToTx(350, 35, Tx);
		lineToTx(345, 35, Tx);
		lineToTx(335,10, Tx);
		lineToTx(295, 10, Tx);
		lineToTx(285, 35, Tx);
		context.closePath();
		context.fill();
		
		
		//lights
		context.beginPath();
		context.fillStyle = 'rgb(277,87,0)';
		arcToTx(5, 22, 5, 0, Math.PI * 2, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(277,87,0)';
		arcToTx(373, 25, 5, 0, Math.PI * 2, Tx);
		context.closePath();
		context.fill();
	};
	function wheel(Tx){
		context.beginPath();
		context.fillStyle = 'Black';
		arcToTx(0, 0, 30, 0, Math.PI * 2, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(206,212,212)';
		arcToTx(0, 0, 20, 0, Math.PI * 2, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(122,122,122)';
		arcToTx(0, 0, 5, 0, Math.PI * 2, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'black';
		arcToTx(10, 5, 2, 0, Math.PI * 2, Tx);
		context.closePath();
		context.fill();
		
		
	};
	
	function dumpPart(Tx){
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx(0, 0, Tx);
		lineToTx(-35, -18, Tx); 
		lineToTx(-25, -50, Tx); 
		lineToTx(-25, -60, Tx); 
		lineToTx(240, -75, Tx); 
		lineToTx(245, -90, Tx); 
		lineToTx(295, -90, Tx); 
		lineToTx(295, -85, Tx); 
		lineToTx(295, -81, Tx); 
		lineToTx(245, 0, Tx); 
		context.closePath();
		context.fill()
		
		//details
		context.beginPath();
		context.fillStyle = 'rgb(255,189,53)';
		moveToTx(15, 0, Tx);
		lineToTx(25,-50, Tx);
		lineToTx(35, -50, Tx);
		lineToTx(25, 0, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		moveToTx(60, 0, Tx);
		lineToTx(70,-52, Tx);
		lineToTx(80, -52, Tx);
		lineToTx(70, 0, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		moveToTx(105, 0, Tx);
		lineToTx(115,-54, Tx);
		lineToTx(125, -54, Tx);
		lineToTx(115, 0, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		moveToTx(150, 0, Tx);
		lineToTx(160,-56, Tx);
		lineToTx(170, -56, Tx);
		lineToTx(160, 0, Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		moveToTx(195, 0, Tx);
		lineToTx(205,-58, Tx);
		lineToTx(215, -58, Tx);
		lineToTx(205, 0, Tx);
		context.closePath();
		context.fill();
	}
	
	function cargo(Tx){
		context.beginPath();
		context.fillStyle = "Brown";
		moveToTx(0,0, Tx);
		lineToTx(0,-100, Tx);
		lineToTx(100,-100, Tx);
		lineToTx(100,0, Tx);
		context.closePath();
		context.fill();
		
		
	}
	function road(Tx){
		context.beginPath();
		context.fillStyle = 'rgb(77,114,130)';
		rectToTx(0,440,1000, 60, Tx);
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(207,225,237)';
		rectToTx(0, 445, 1000, 3, Tx);
		context.fill();
		
		context.beginPath();
		rectToTx(0, 492, 1000, 3, Tx);
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(197,241,242)';
		rectToTx(0, 0, 1000, 440, Tx);
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(102,159,104)';
		rectToTx(0, 400, 1000, 40, Tx);
		context.fill();
	}
	var Road_To_Canvas = mat3.create();
	road(Road_To_Canvas);
	var Truck_body = mat3.create();
	mat3.fromTranslation(Truck_body, [-400+x,410]);
	//context.translate(-400+x, 410);
	dumpTruckBody(Truck_body);
	//context.save();
	var Wheel_1 = mat3.create();
	mat3.fromTranslation(Wheel_1, [40,40]);
	mat3.rotate(Wheel_1, Wheel_1, wheelrotate * Math.PI / 180);
	var Wheel_1_ToCanvas = mat3.create();
	mat3.multiply(Wheel_1_ToCanvas, Truck_body, Wheel_1);
	wheel(Wheel_1_ToCanvas);
	
	var Wheel_2 = mat3.create();
	mat3.fromTranslation(Wheel_2, [105, 40]);
	mat3.rotate(Wheel_2, Wheel_2, wheelrotate * Math.PI / 180);
	var Wheel_2_ToCanvas = mat3.create();
	mat3.multiply(Wheel_2_ToCanvas, Truck_body, Wheel_2);
	wheel(Wheel_2_ToCanvas);
	
	var Wheel_3 = mat3.create();
	mat3.fromTranslation(Wheel_3, [315, 42]);
	mat3.rotate(Wheel_3, Wheel_3, wheelrotate * Math.PI / 180);
	var Wheel_3_ToCanvas = mat3.create();
	mat3.multiply(Wheel_3_ToCanvas, Truck_body, Wheel_3);
	wheel(Wheel_3_ToCanvas);
	
	/*var Dump_part = mat3.create();
	mat3.fromTranslation(Dump_part, [0,0]);
	if(!move){
		mat3.rotate(Dump_part, Dump_part, -dumprotate * Math.PI / 180)
	}
	var Dump_To_Canvas = mat3.create();
	mat3.multiply(Dump_To_Canvas, Truck_body, Dump_part*/
	//dumpPart(Dump_To_Canvas);
	
	var Cargo = mat3.create();
	mat3.fromTranslation(Cargo, [50,-50]);
	var Cargo_move = mat3.create();
	if(!move){
		mat3.rotate(Cargo, Cargo, -dumprotate * Math.PI / 180)
	}
	var Cargo_dump = mat3.create();
	
	mat3.fromTranslation(Cargo_dump, [-cargodump, 0]); 
	var Cargo_To_Canvas = mat3.create();
	mat3.multiply(Cargo_To_Canvas, Truck_body, Cargo);
	mat3.multiply(Cargo_To_Canvas, Cargo_To_Canvas, Cargo_dump);
	if(dump){
		cargo(Cargo_To_Canvas);
	}
	var Dump_part = mat3.create();
	mat3.fromTranslation(Dump_part, [0,0]);
	if(!move){
		mat3.rotate(Dump_part, Dump_part, -dumprotate * Math.PI / 180)
	}
	var Dump_To_Canvas = mat3.create();
	mat3.multiply(Dump_To_Canvas, Truck_body, Dump_part);
	dumpPart(Dump_To_Canvas);

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