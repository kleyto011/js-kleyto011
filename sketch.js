function setup(){
  createCanvas(600, 600);
  background(0); // black
}

function draw(){
  stroke('blue');
  fill('red');
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
}
