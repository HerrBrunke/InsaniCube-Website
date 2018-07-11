var cubeModel;
var cubeTexture;
var formerMouseX;
var formerMouseY;
var transX = 0;
var transY = 0;
var vectorX = new p5.Vector(1, 0);
var vectorY = new p5.Vector(0, 1); 
var deadZoneMouse = 80;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}
function preload() {
	//cubeTexture = load
	cubeModel = loadModel('assets/cube.obj');
}

function draw() {
	
	
	background(250);
	scale(30);
	rotate(transX, vectorX);
	rotate(transY, vectorY);
	//texture(cubeTexture);
	model(cubeModel);

	//while mouseispressed look if mousePresseSetPoint is higher or lower, so rotate the cube.
	if(mouseIsPressed){
		console.log(mouseX, mouseY);
		if(formerMouseX > mouseX + deadZoneMouse)
		{
			console.log("fMX < MX");
			transY = transY - 0.05;
		}
		else if(formerMouseX < mouseX - deadZoneMouse)
		{
			console.log("fMX > MX");
			transY = transY + 0.05;
		}
		if(formerMouseY > mouseY + deadZoneMouse)
		{
			console.log("fMY < MY");
			transX = transX + 0.05;
		}
		else if(formerMouseY < mouseY - deadZoneMouse)
		{
			console.log("fMY > MY");
			transX = transX - 0.05;
		}
		
	}
	
}
//if mousePressed set new startlocation
function mousePressed(){
	//reset translation
	//transX = 0;
	//transY = 0;
	//console.log("mousepressedOnce!", formerMouseX, formerMouseY);
	formerMouseX = mouseX;
	formerMouseY = mouseY;
}


