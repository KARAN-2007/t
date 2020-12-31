var display=0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  
}
function draw(){
  background("black");
display=touches.length+'touches';
fill("white");
textSize(20);
text("display"+display,width/2,height/2);

}