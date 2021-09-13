var path, pathImg;
var jaxon, jaxon_running;
var iWall1, iWall2;

function preload() {
  pathImg = loadImage("path.png");
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup() {
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale = 1.2;
  jaxon = createSprite(200,350);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale = 0.08;
  iWall1 = createSprite(0,200,12.5,400);
  iWall2 = createSprite(410,200,12.5,400);
  iWall1.visible = false;
  iWall2.visible = false;
}

function draw(){
  background(0);
  jaxonM()
  pathM();
  iWall();
  drawSprites();
}

function jaxonM() {
  jaxon.x = mouseX;
  if(jaxon.x < 10){
    jaxon.x = 10;
  }
  if(jaxon.x > 390) {
    jaxon.x = 390;
  }
}

function pathM() {
  path.veloctiyY = 4;
  if(path.y > 400){
    path.y = height/2;
  }
}

function iWall() {
  jaxon.collide(iWall1);
  jaxon.collide(iWall2);
}