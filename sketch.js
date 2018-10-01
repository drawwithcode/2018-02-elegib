function preload(){
    // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);
  angleMode(DEGREES);
  // put setup code here
}

function draw() {
  noFill();
  translate(width / 2, height / 2);
  strokeWeight(1);

//spiralepiccola
push()
    stroke(lerpColor(color(252,201,12), color(219,201,206), frameCount/150))
    line((frameCount)*cos(frameCount), (frameCount)*sin(frameCount),(frameCount/4+frameCount)*cos(frameCount), (frameCount/4+frameCount)*sin(frameCount));
    line(-(frameCount)*cos(frameCount), -(frameCount)*sin(frameCount),-(frameCount/4+frameCount)*cos(frameCount), -(frameCount/4+frameCount)*sin(frameCount));
pop()

//spiralegrande
push();
    stroke(lerpColor(color(252, 187,12), color(148 ,113, 201), frameCount/200))
    line(1.5*(frameCount)*cos(frameCount), 1.5*(frameCount)*sin(frameCount),1.5*(frameCount/4+frameCount)*cos(frameCount), 1.5*(frameCount/4+frameCount)*sin(frameCount));
    line(-1.5*(frameCount)*cos(frameCount), -1.5*(frameCount)*sin(frameCount),-1.5*(frameCount/4+frameCount)*cos(frameCount), -1.5*(frameCount/4+frameCount)*sin(frameCount));
    pop();

if(frameCount>180) {frameCount = 500+frameCount ; }

if(frameCount>175) {
  stroke(lerpColor(color(181,112,120,255), color(252,156,75,100), frameCount/300))

//art1
 push();
    frameCount = frameCount;
    frameRate(20);
    translate(-265, -150)
    strokeWeight(0.5);
    rotate(frameCount/2);
    scale(1.5*sin(frameCount*1.5));
    rect(-50,-50,100,100);
 pop();

//art2
 push();
    translate(265, 150)
    frameCount = frameCount;
    strokeWeight(0.5);
    rotate(frameCount/2);
    scale(1.5*sin(frameCount*1.5));
    rect(-50,-50,100,100);
 pop();}


if(frameCount > 60000) {noLoop();}
  // put drawing code here
}
