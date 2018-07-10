var cubeModel;
var rotateAngle;
var formerMouseX;
var formerMouseY;
var transX = 0;
var transY = 0;
var vectorX = createVector(1, 0, 0);
var vectorY = createVector(0, 1, 0); 
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

}
function preload() {
	
	cubeModel = loadModel('assets/cube.obj');
}

function draw() {
	background(250);
	scale(30);
	rotate(transX, vectorX);
	rotate(transY, vectorY);
	model(cubeModel);

	//while mouseispressed look if mousePresseSetPoint is higher or lower, so rotate the cube.
	if(mouseIsPressed){
		console.log(mouseX, mouseY);
		if(formerMouseX < mouseX)
		{
			transX = transX - 0.5;
		}
		else if(formerMouseX > mouseX)
		{
			transX = transX + 0.5;
		}
		
		if(formerMouseY < mouseY)
		{
			transY = transY - 0.5;
		}
		else if(formerMouseY > mouseY)
		{
			transY = transY + 0.5;
		}
	}
	
}
//if mousePressed set new startlocation
function mousePressed(){
	//reset translation
	//transX = 0;
	//transY = 0;
	console.log("mousepressedOnce!", formerMouseX, formerMouseY);
	formerMouseX = mouseX;
	formerMouseY = mouseY;
}


