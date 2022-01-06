function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var cb = document.getElementById('checkbox1');
	var x = 1;
    function draw() {
	canvas.width = canvas.width;
	// use the sliders to get the angles
	var tParam = x*.01;
	var colors = ["black"]
	if(cb.checked){
		var colors = ["black","blue", "purple", "yellow"]
	}else{
		var colors = ["black", "black", "black", "black"];
	}
	
	function moveToTx(loc,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,loc,Tx); context.moveTo(res[0],res[1]);}

	function lineToTx(loc,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,loc,Tx); context.lineTo(res[0],res[1]);}
	
	function drawObject(color,Tx) {
	    context.beginPath();
	    context.fillStyle = color;
	    moveToTx([-.05,-.05],Tx);
	    lineToTx([-.05,.05],Tx);
	    lineToTx([.05,.05],Tx);
	    lineToTx([.05,-.05],Tx);
	    context.closePath();
	    context.fill();
	}
	
	function background(Tx){
		context.beginPath();
	    context.fillStyle = "green";
	    moveToTx([0,0],Tx);
	    lineToTx([600,0],Tx);
	    lineToTx([600,700],Tx);
	    lineToTx([0,700],Tx);
	    context.closePath();
	    context.fill();
	}
	


  var Hermite = function(t) {
      return [
        2*t*t*t-3*t*t+1,
        t*t*t-2*t*t+t,
        -2*t*t*t+3*t*t,
        t*t*t-t*t
      ];
  }

  var HermiteDerivative = function(t) {
      return [
        6*t*t-6*t,
        3*t*t-4*t+1,
        -6*t*t+6*t,
        3*t*t-2*t
      ];
  }

  // This can generate both the function C(t) and the derivative C'(t),
  // depending on the basis passed in
	function Cubic(basis,P,t){
	    var b = basis(t);
	    var result=vec2.create();
	    vec2.scale(result,P[0],b[0]);
	    vec2.scaleAndAdd(result,result,P[1],b[1]);
	    vec2.scaleAndAdd(result,result,P[2],b[2]);
	    vec2.scaleAndAdd(result,result,P[3],b[3]);
	    return result;
	}
  	var p0=[0,0];
	var d0=[1,3];
	var p1=[1.5,1.25];
	var d1=[-1,3];
	var p2=[2,3];
	var d2=[0,3];
	var p3=[3,1];
	var d3=[-.5,-1];

	var P0 = [p0,d0,p1,d1]; // First two points and tangents
	var P1 = [p1,d1,p2,d2];
	var P2 = [p2,d2,p3,d3];
	var P3 = [p3,d3,p0,d0]
      
	var C0 = function(t_) {return Cubic(Hermite,P0,t_);};
	var C1 = function(t_) {return Cubic(Hermite,P1,t_);};
	var C2 = function(t_) {return Cubic(Hermite,P2,t_);};
	var C3 = function(t_) {return Cubic(Hermite,P3,t_);};


	

	var Ccomp = function(t) {
        if (t<1){
            var u = t;
            return C0(u);
        } else if (t>=1 && t<2) {
            var u = t-1.0;
            return C1(u);
        } else if (t>=2 && t<3){
			var u = t-2.0;
			return C2(u);
		} else {
			var u = t-3.0;
			return C3(u);
		}        
	}

    function drawTrajectory(t_begin,t_end,intervals,C,Tx,color) {
	    context.strokeStyle=color;
	    context.beginPath();
		context.lineWidth = 15;
        moveToTx(C(t_begin),Tx);
        for(var i=1;i<=intervals;i++){
            var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
            lineToTx(C(t),Tx);
        }
        context.stroke();
	}

	// make sure you understand these    

		var Background_To_Canvas = mat3.create();
	background(Background_To_Canvas);
	var Tblue_to_canvas = mat3.create();
	mat3.fromTranslation(Tblue_to_canvas,[50,600]);
	mat3.scale(Tblue_to_canvas,Tblue_to_canvas,[175,-175]); // Flip the Y-axis

	

	drawTrajectory(0.0,1.0,100,C0,Tblue_to_canvas,colors[0]);
	drawTrajectory(0.0,1.0,100,C1,Tblue_to_canvas,colors[1]);
	drawTrajectory(0.0,1.0,100,C2,Tblue_to_canvas,colors[2]);
	drawTrajectory(0.0,1.0,100,C3,Tblue_to_canvas,colors[3]);
	
	var Tgreen_to_blue = mat3.create();
	mat3.fromTranslation(Tgreen_to_blue,Ccomp(tParam));
	var Tgreen_to_canvas = mat3.create();
	mat3.multiply(Tgreen_to_canvas, Tblue_to_canvas, Tgreen_to_blue);
	drawObject("red",Tgreen_to_canvas);
    x = x+1;
	//console.log(x);
	window.requestAnimationFrame(draw);
	if(x == 400){
		x = 0;
	}
	}

    
    window.requestAnimationFrame(draw);
}
window.onload = setup;