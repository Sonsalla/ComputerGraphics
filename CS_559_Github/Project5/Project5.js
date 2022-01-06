function setup() {
    var cameraCanvas = document.getElementById('cameraCanvas');
    var cameraContext = cameraCanvas.getContext('2d');
    var slider1 = document.getElementById('slider1');
    slider1.value = 0;
    var slider2 = document.getElementById('slider2');
    slider2.value = 0;

	var x = 0;

    var context = cameraContext; // default to drawing in the camera window

    function draw() {
     
	cameraCanvas.width = cameraCanvas.width;

	// use the sliders to get the angles
	var tParam = slider1.value*0.01;
    var viewAngle = slider2.value*0.02*Math.PI;
	var dumprotation = slider1.value*.3;
     
	function moveToTx(loc,Tx)
	{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.moveTo(res[0],res[1]);}

	function lineToTx(loc,Tx)
	{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.lineTo(res[0],res[1]);}

	
	function dumpTruckBody(TxU, scale){
		var Tx = mat4.clone(TxU);
	    mat4.scale(Tx,Tx,[scale,scale,scale]);

		//black bed of truck
		context.beginPath();
		context.strokeStyle="Black";
		context.fillStyle = "Black";
		moveToTx([0,0,0], Tx);
			lineToTx([0,0,1],Tx);
			lineToTx([0,.3,1],Tx); 
			lineToTx([0,.3,0],Tx);
			lineToTx([0,0,0],Tx);
		context.fill();
		context.closePath();
		context.beginPath();
		moveToTx([0,0,0], Tx);
		lineToTx([2.7, 0,0], Tx);
			lineToTx([2.7,0,1],Tx);
			lineToTx([0,0,1],Tx);
			moveToTx([2.7,0,0],Tx);
		context.closePath();
		context.fill();
		context.beginPath();
		moveToTx([2.7,0,0],Tx);
		lineToTx([2.7, -.5,0], Tx);
			lineToTx([2.7,-.5,1],Tx);
			lineToTx([2.7,0,1],Tx);
			moveToTx([2.7,-.5,0],Tx);
		context.closePath();
		context.fill();
		context.beginPath();
		moveToTx([2.7,-.5,0],Tx);
		lineToTx([2.8, -.5, 0],Tx);
			lineToTx([2.8,-.5,1],Tx);
			lineToTx([2.7,-.5,1],Tx);
			moveToTx([2.8,-.5,0],Tx);
		context.closePath();
		context.fill();
		context.beginPath();
		moveToTx([2.8,-.5,0],Tx);
		lineToTx([2.8, .3, 0],Tx);
			lineToTx([2.8, .3, 1],Tx);
			lineToTx([2.8, -.5, 1],Tx);
			moveToTx([2.8,.3,0],Tx);
		context.closePath();
		context.fill();
		context.beginPath();
		moveToTx([2.8,.3,0],Tx);
		lineToTx([0, .3, 0], Tx);
			lineToTx([0, 0, 0], Tx);
			lineToTx([2.7, 0, 0], Tx);
			lineToTx([2.7, -.5, 0], Tx);
			lineToTx([2.8, -.5, 0], Tx);
		context.closePath();
		context.fill();
		moveToTx([2.8,.3,1],Tx);
		lineToTx([0, .3, 1], Tx);
			lineToTx([0, 0, 1], Tx);
			lineToTx([2.7, 0, 1], Tx);
			lineToTx([2.7, -.5, 1], Tx);
			lineToTx([2.8, -.5, 1], Tx);
		context.closePath();
		context.fill();
		
		//cabin of truck
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx([2.85,-.70,0],Tx);
		lineToTx([3.55, -.70,0], Tx);
		lineToTx([3.75, -.30,0], Tx);
		lineToTx([3.75, .30, 0],Tx);
		lineToTx([2.80, .30,0], Tx);
		lineToTx([2.80, -.50,0], Tx);
		context.closePath();
		context.fill();
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx([2.85,-.70,1],Tx);
		lineToTx([3.55, -.70,1], Tx);
		lineToTx([3.75, -.30,1], Tx);
		lineToTx([3.75, .30, 1],Tx);
		lineToTx([2.80, .30,1], Tx);
		lineToTx([2.80, -.50,1], Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx([2.85,-.70,0],Tx);
		lineToTx([2.85, -.70,1], Tx);
		lineToTx([3.55, -.70,1], Tx);
		lineToTx([3.55, -.70,0],Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx([3.55,-.70,0],Tx);
		lineToTx([3.55, -.70,1], Tx);
		lineToTx([3.75, -.30,1], Tx);
		lineToTx([3.75, -.30,0],Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx([3.75,-.30,0],Tx);
		lineToTx([3.75, -.30,1], Tx);
		lineToTx([3.75, .30,1], Tx);
		lineToTx([3.75, .30,0],Tx);
		context.closePath();
		context.fill();
		
		
		
	};	
	function dumpPart(TxU,scale){
		var Tx = mat4.clone(TxU);
        mat4.scale(Tx,Tx,[scale,scale,scale]);
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx([0, 0, 0],Tx);
		lineToTx([-.35, -.18, 0],Tx); 
		lineToTx([-.25, -.50, 0],Tx); 
		lineToTx([-.25, -.60, 0],Tx); 
		lineToTx([2.40, -.75, 0],Tx); 
		lineToTx([2.45, -.90, 0],Tx); 
		lineToTx([2.95, -.90, 0],Tx); 
		lineToTx([2.95, -.85, 0],Tx); 
		lineToTx([2.95, -.81,0],Tx); 
		lineToTx([2.45, 0,0], Tx); 
		context.closePath();
		context.fill()
		
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx([0, 0, 1],Tx);
		lineToTx([-.35, -.18, 1],Tx); 
		lineToTx([-.25, -.50, 1],Tx); 
		lineToTx([-.25, -.60, 1],Tx); 
		lineToTx([2.40, -.75, 1],Tx); 
		lineToTx([2.45, -.90, 1],Tx); 
		lineToTx([2.95, -.90, 1],Tx); 
		lineToTx([2.95, -.85, 1],Tx); 
		lineToTx([2.95, -.81,1],Tx); 
		lineToTx([2.45, 0,1], Tx); 
		context.closePath();
		context.fill()
		
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx([0, 0, 0],Tx);
		lineToTx([0, 0, 1],Tx); 
		lineToTx([2.45, 0, 1],Tx); 
		lineToTx([2.45, 0, 0],Tx);  
		context.closePath();
		context.fill()
		
		context.beginPath();
		context.fillStyle = 'rgb(254,166,33)';
		moveToTx([2.45, 0, 0],Tx);
		lineToTx([2.45, 0, 1],Tx); 
		lineToTx([2.95, -.85, 1],Tx); 
		lineToTx([2.95, -.85, 0],Tx);  
		context.closePath();
		context.fill()
		

	}
    function drawUpVector(color,vecUp,Tx) {
	    context.strokeStyle=color;
	    context.beginPath();
	    // A single line segment in the "up" direction
	    moveToTx([0,0,0],Tx);
        lineToTx(vecUp,Tx);
	    context.stroke();
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

	function Cubic(basis,P,t){
	    var b = basis(t);
	    var result=vec3.create();
	    vec3.scale(result,P[0],b[0]);
	    vec3.scaleAndAdd(result,result,P[1],b[1]);
	    vec3.scaleAndAdd(result,result,P[2],b[2]);
	    vec3.scaleAndAdd(result,result,P[3],b[3]);
	    return result;
	}
	
	var p0=[0,0,0];
	var d0=[100,300,0];
	var p1=[100,100,0];
	var d1=[-100,300,0];
	var p2=[200,200,0];
	var d2=[0,300,0];

	var P0 = [p0,d0,p1,d1]; // First two points and tangents
	var P1 = [p1,d1,p2,d2]; // Last two points and tangents

	var C0 = function(t_) {return Cubic(Hermite,P0,t_);};
	var C1 = function(t_) {return Cubic(Hermite,P1,t_);};

	var C0prime = function(t_) {return Cubic(HermiteDerivative,P0,t_);};
	var C1prime = function(t_) {return Cubic(HermiteDerivative,P1,t_);};
      
    var Ccomp = function(t) {
        if (t<1){
            var u = t;
            return C0(u);
        } else {
            var u = t-1.0;
            return C1(u);
        }          
	}

    var Ccomp_tangent = function(t) {
        if (t<1){
            var u = t;
            return C0prime(u);
        } else {
            var u = t-1.0;
            return C1prime(u);
        }          
	}

    var CameraCurve = function(angle) {
        var distance = 120.0;
        var eye = vec3.create();
        eye[0] = distance*Math.sin(viewAngle);
        eye[1] = 100;
        eye[2] = distance*Math.cos(viewAngle);  
        return [eye[0],eye[1],eye[2]];
    }

    // create two lookAt transforms; one for the camera
    // and one for the "external observer"

    // Create Camera (lookAt) transform
     var eyeCamera = CameraCurve(viewAngle);
    var targetCamera = vec3.fromValues(0,0,0); // Aim at the origin of the world coords
    var upCamera = vec3.fromValues(0,100,0); // Y-axis of world coords to be vertical
	var TlookAtCamera = mat4.create();
    mat4.lookAt(TlookAtCamera, eyeCamera, targetCamera, upCamera);
      
    // Create Camera (lookAt) transform
    var eyeObserver = vec3.fromValues(500,300,500);
    var targetObserver = vec3.fromValues(0,50,0); // Observer still looks at origin
    var upObserver = vec3.fromValues(0,1,0); // Y-axis of world coords to be vertical
	var TlookAtObserver = mat4.create();
    mat4.lookAt(TlookAtObserver, eyeObserver, targetObserver, upObserver);
      
    // Create ViewPort transform (assumed the same for both canvas instances)
    var Tviewport = mat4.create();
	mat4.fromTranslation(Tviewport,[200,300,0]);  // Move the center of the
                                                  // "lookAt" transform (where
                                                  // the camera points) to the
                                                  // canvas coordinates (200,300)
	mat4.scale(Tviewport,Tviewport,[100,100,1]); // Flip the Y-axis,
                                                  // scale everything by 100x
    // make sure you understand these    

    context = cameraContext;

    // Create Camera projection transform
    // (orthographic for now)
    var TprojectionCamera = mat4.create();
    mat4.ortho(TprojectionCamera,-100,100,-100,100,-1,1);
    //mat4.perspective(TprojectionCamera,Math.PI/4,1,-1,1); // Use for perspective teaser!

    // Create Observer projection transform
    // (orthographic for now)
    var TprojectionObserver = mat4.create();
    mat4.ortho(TprojectionObserver,-120,120,-120,120,-1,1);
     
    // Create transform t_VP_PROJ_CAM that incorporates
    // Viewport, projection and camera transforms
    var tVP_PROJ_VIEW_Camera = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_Camera,Tviewport,TprojectionCamera);
    mat4.multiply(tVP_PROJ_VIEW_Camera,tVP_PROJ_VIEW_Camera,TlookAtCamera);
    var tVP_PROJ_VIEW_Observer = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_Observer,Tviewport,TprojectionObserver);
    mat4.multiply(tVP_PROJ_VIEW_Observer,tVP_PROJ_VIEW_Observer,TlookAtObserver);
      
	// Create model(ing) transform
    // (from moving object to world)
    var Tmodel = mat4.create();
	mat4.fromTranslation(Tmodel,Ccomp(tParam));
    var tangent = Ccomp_tangent(tParam);
    var angle = Math.atan2(tangent[1],tangent[0]);
	mat4.rotateZ(Tmodel,Tmodel,angle);

    // Create transform t_VP_PROJ_VIEW_MOD that incorporates
    // Viewport, projection, camera, and modeling transform
    var tVP_PROJ_VIEW_MOD_Camera = mat4.create();
	mat4.multiply(tVP_PROJ_VIEW_MOD_Camera, tVP_PROJ_VIEW_Camera, Tmodel);
    var tVP_PROJ_VIEW_MOD1_Observer = mat4.create();
	mat4.multiply(tVP_PROJ_VIEW_MOD1_Observer, tVP_PROJ_VIEW_Observer, Tmodel);
    var tVP_PROJ_VIEW_MOD2_Observer = mat4.create();
    mat4.translate(tVP_PROJ_VIEW_MOD2_Observer, tVP_PROJ_VIEW_Observer, eyeCamera);
	var TlookFromCamera = mat4.create();
    mat4.invert(TlookFromCamera,TlookAtCamera);
    mat4.multiply(tVP_PROJ_VIEW_MOD2_Observer, tVP_PROJ_VIEW_MOD2_Observer, TlookFromCamera);

    // Draw the following in the Camera window
	
    context = cameraContext;
	var Truck_body = mat4.create();
	
	mat4.multiply(Truck_body, Truck_body, tVP_PROJ_VIEW_Camera);
	mat4.translate(Truck_body, Truck_body,[x,0,0]);
	dumpTruckBody(Truck_body, 50);
	
	
	var Dump = mat4.create();
	mat4.multiply(Dump, Dump, tVP_PROJ_VIEW_Camera);
	var dump_rotation = mat4.create();
	mat4.fromZRotation(dump_rotation, -dumprotation * Math.PI / 180);
	mat4.multiply(Dump, Dump, dump_rotation);
	dumpPart(Dump, 50);
	}
    
  
    slider1.addEventListener("input",draw);
    slider2.addEventListener("input",draw);
    draw();
}
window.onload = setup;
