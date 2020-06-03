
var state = 0;
function setup() {
  createCanvas(displayWidth,displayHeight);
  background(255,255,255); 
}

function draw() { 
   input = createInput("");
   input.position(displayWidth/2-50,displayHeight/2);
   colourI = createInput("white");
   colourI.position(displayWidth/2-50,displayHeight/2 + 100);
   ins= createElement("h3");
   ins.html("Enter your nickname");
   ins.position(displayWidth/2-50,displayHeight/2-50);
   ins1= createElement("h3");
   ins1.html("Enter your favourite Colour");
   ins1.position(displayWidth/2-50,displayHeight/2+50);
   head = createElement("h1");
   head.html("Anti Depression App");
   head.position(displayWidth/2-100,displayHeight/10);
   line(displayWidth/2-100,displayHeight/10+55,displayWidth/2+200,displayHeight/10+55)
   button = createButton("Enter");
   button.position(displayWidth/2,displayHeight/2+150)
   button.mousePressed(change());
   if(state===1){
     background(colourI.value());
     head.html("Hello "+input.value());
     ins.hide();
     ins1.hide();
     input.hide();
     colourI.hide();
   }
}
function change(){
  state = 1;
  clear();
}