
var state = 0;
function setup() {
  createCanvas(displayWidth,displayHeight);
  background(255,255,255);    
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
  nextButton = createButton("next");
  text1= createElement("h3");
  text1.html("In this app, we're going to get rid of all your depressions.(actually you are going to do it:)");
  text2= createElement("h3");
  text2.html("If you have ever felt so sad that you might think that you can not comeback,");
  text3= createElement("h3");
  text3.html("you should think of those who are feeling far more depressed and feel how blessed you truly are.");
  text4= createElement("h2");
  text4.html("The only thing more exhausting than being depressed is pretending that you are not.")
  text5= createElement("h3");
  text5.html("So you have to give up pretending and try to overcome.")
}

function draw() { 

   button.position(displayWidth/2,displayHeight/2+150)
   button.mousePressed(change);
   if(state===1){
     background(colourI.value());
     head.html("Hello "+input.value());
     ins.hide();
     text1.position(400,400);
    text2.position(200,600);
    text3.position(200,650);
     ins1.hide();
     input.hide();
     colourI.hide();
     button.hide();nextButton.position(displayWidth-200,displayHeight-200);
    console.log(state);
   }
   
   nextButton.mousePressed(increase);
   if(state===2){
     text1.hide();
     text2.hide();
     text3.hide();
     text4.position(200,300);
     text5.position(200,400);
   }

}
function change(){
  state =1;
  clear();
}
function increase(){
 state = state+1;
}