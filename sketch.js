let zBereich;

function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0, 0);
  zBereich.style('z-index', '-1');
}

function draw() {
  noStroke();
  fill(0,50,70,75);
  circle(mouseX, mouseY, 50);
}
// function mousePressed() {
//   background(0);
// }