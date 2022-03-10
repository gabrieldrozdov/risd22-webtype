const rows = 8;
const columns = 16;
const fadeSpeed = 2;
let cells = [];

function setup() {
  var cnv = createCanvas(windowWidth/2 - 40, windowHeight - 80);
  cnv.parent('sketch-holder');
  colorMode(RGB);

  for (let r = 0; r < rows; r++) {
    cells[r] = [];
    for (let c = 0; c < columns; c++) {
      cells[r][c] = random(100);
    }
  }

  if (windowWidth < 800) {
    resizeCanvas(windowWidth-40, 400);
  }
}

function draw() {
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  if (mouseX > 0 && mouseX < width &&
      mouseY > 0 && mouseY < height) {
    const mouseR = floor(rows * (mouseY / height));
    const mouseC = floor(columns * (mouseX / width));
    cells[mouseR][mouseC] = 255;
  }

  cells[5][1] = 205;
  cells[6][1] = 205;
  cells[5][2] = 205;
  cells[6][2] = 205;
  cells[3][3] = 205;
  cells[4][3] = 205;
  cells[1][4] = 205;
  cells[2][4] = 205;
  cells[4][4] = 205;
  cells[1][5] = 205;
  cells[2][5] = 205;
  cells[4][5] = 205;
  cells[3][6] = 205;
  cells[4][6] = 205;
  cells[5][7] = 205;
  cells[6][7] = 205;
  cells[5][8] = 205;
  cells[6][8] = 205;

  cells[5][10] = 180;
  cells[4][11] = 180;
  cells[6][11] = 180;
  cells[4][12] = 180;
  cells[6][12] = 180;
  cells[5][13] = 180;
  cells[6][14] = 180;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      cells[r][c] -= fadeSpeed;
      cells[r][c] = constrain(cells[r][c], 0, 255);

      const y = height * (r / rows);
      const x = width * (c / columns);

      fill(255-cells[r][c], 255-cells[r][c], 255-cells[r][c]);
      stroke(255, 255, 255);
      strokeWeight(10);
      rect(x, y, cellWidth, cellHeight, 20);
    }
  }

  const randR = floor(random(0,rows));
  const randC = floor(random(0,columns));
  cells[randR][randC] = 100;
}

function windowResized() {
  resizeCanvas(windowWidth/2 - 40, windowHeight - 80);

  if (windowWidth < 800) {
    resizeCanvas(windowWidth-40, 400);
  }
}