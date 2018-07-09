var cubeModel;

function preload() {
	
	cubeModel = loadModel(assets/cube.obj, normalize)
}

function setup() {
	createCanvas(windowWidth / 2, windowHeight / 2);
	canvas.parent('cube');

}

function draw() {
	background(225);
	cubeModel.draw();
}

