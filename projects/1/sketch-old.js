function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  x = random(0,windowWidth);
  y = random(0,windowHeight);
  speed = 3;
  xdir = speed;
  ydir = speed;
  sqsize = 50;
  cnv.parent('sketch-holder');
}

function draw() {
  background(0, 0, 255);
  noStroke();
  fill(255);
  rect(x, y, sqsize);
  if (x+sqsize >= width) {
    xdir = -speed;
  };
  if (x <= 0) {
    xdir = speed;
  };
  if (y+sqsize >= height) {
    ydir = -speed;
  };
  if (y <= 0) {
    ydir = speed;
  };
  x += xdir;
  y += ydir;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  x = random(0,windowWidth);
  y = random(0,windowHeight);
}