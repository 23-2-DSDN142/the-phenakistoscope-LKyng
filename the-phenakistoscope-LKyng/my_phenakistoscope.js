const SLICE_COUNT = 7;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT); 
  pScope.load_image_sequence("manRun0" , "png", 7);
}

function setup_layers(pScope){

  new PLayer(null,0);  //lets us draw the whole circle background, ignoring the boundaries
  


  var Groundspikes = new PLayer(rocks);
  Groundspikes.mode(SWIRL(1));
  Groundspikes.set_boundary( 1175, 300 );

  var Groundfloor = new PLayer(ground);
  Groundfloor.set_boundary( 1000, 200 );  
  
  var manrunning = new PLayer(manload);
  manrunning.mode(RING);
  manrunning.set_boundary( 1000, 200 );
}

function rocks(x, y){
  push();
  fill(150, 75, 0);
  triangle(10, 0, 50, 200, 90, 0);
  pop();
}

function ground(){
  push();
  fill(150, 75, 0);
  triangle(0, 0, -145, -300, 145, -300);
  pop();
  push();
  let txt = 'RUN!';
  fill(10);
  textSize(70);
  text(txt, -85, -270, 70, 80);
  pop();
}


function manload(x,y,animation,pScope){
  push();
  scale(-1, 1);
  scale(1.5);
  pScope.draw_image_from_sequence("manRun0",30, -255, animation.frame);
  pop();
}
push();
  scale(4);
  pScope.draw_image("caveBack_0",0,170);
  pop();