const rows = 10;
const columns = 20;
const fadeSpeed = .5;
let cells = [];

function setup() {
  var cnv = createCanvas(windowWidth/2 - 40, windowHeight - 80);
  cnv.parent('sketch-holder');
  colorMode(HSB);

  for (let r = 0; r < rows; r++) {
    cells[r] = [];
    for (let c = 0; c < columns; c++) {
      cells[r][c] = random(100);
    }
  }
}

function draw() {
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  if (mouseX > 0 && mouseX < width &&
      mouseY > 0 && mouseY < height) {
    const mouseR = floor(rows * (mouseY / height));
    const mouseC = floor(columns * (mouseX / width));
    cells[mouseR][mouseC] = 100;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      cells[r][c] -= fadeSpeed;
      cells[r][c] = constrain(cells[r][c], 0, 100);

      const y = height * (r / rows);
      const x = width * (c / columns);

      fill(240, 100-cells[r][c], 100);
      stroke(240, 100, 100);
      strokeWeight(2);
      rect(x, y, cellWidth, cellHeight, 5);
    }
  }

  const randR = floor(random(0,rows));
  const randC = floor(random(0,columns));
  cells[randR][randC] = 100;
}

function windowResized() {
  resizeCanvas(windowWidth/2 - 40, windowHeight - 80);
}