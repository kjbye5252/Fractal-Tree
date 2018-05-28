var angle = 0;
var slider;
var slider2;
var slider3;

function setup() {
  createCanvas(windowWidth,windowHeight);
  slider = createSlider(0, PI, PI/5, 0.01);
  slider.position((width/2)-65,0);
  slider2 = createSlider(1, 100, 5, 1);
  slider2.position((width/2)-65,25);
  slider3 = createSlider(1, 500, 250, 1);
  slider3.position((width/2)-65,50);
}

function draw() {
  background(51);
  angle = slider.value();
  var weight = 3;
  stroke(255);
  strokeWeight(weight);
  translate(width/2, height);
  branch(slider3.value(),weight);
}

function branch(len,weight) {
  line(0,0,0,-len);
  translate(0,-len);
  weight = weight * 0.85;
  strokeWeight(weight);
  if (len > slider2.value()) {
    push();
    rotate(angle);
    branch(len * 0.6,weight);
    pop();
    push();
    rotate(angle - angle);
    branch(len * 0.6,weight);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.6,weight);
    pop();
  }
}
