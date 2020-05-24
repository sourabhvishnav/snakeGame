var snake;
var rez = 20;
var food;
var w;
var h;

var score = 0;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(6);
  snake = new Snake();
  foodLocation();
  
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(0);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.display();
  

  if (snake.endGame()) {
    background(85,22,153);
  }

  noStroke();
  fill(85, 22, 153);
  rect(food.x, food.y, 1, 1);
  
  fill("red")
  text("score",200,20)
}