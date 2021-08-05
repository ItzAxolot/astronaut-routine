function preload() {
bg = loadImage("images\images/iss.png");
sleep = loadAnimation("images\images/sleep.png");
brush = loadAnimation("images\images/brush.png");
gym = loadAnimation("images\images/gym21.png","images/gym22.png");
eat = loadAnimation("images\images/eat1.png","images/eat2.png");
drink = loadAnimation("images\images/drink1.png","images/drink2.png");
move = loadAnimation("images\images/move1.png","images/move2.png");
}

function setup() {
  createCanvas(800,400);
  var backgroundImg = createSprite(400, 200, 50, 50);
  backgroundImg.addImage(bg);

  var astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

text("Instructions",50,50,20,20);

function draw() {
  background(255,255,255);  
  drawSprites();
}