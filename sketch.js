var canvas;
var music;
var Gsurface, Rsurface, Bsurface, Ysurface;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,1000);

    //create 4 different surfaces
    Gsurface = createSprite(2,590,200,20);
    Gsurface.shapeColor="Green";
    Rsurface = createSprite(200,590,200,20);
    Bsurface = createSprite(400,590,200,20);
    Ysurface = createSprite(600,590,200,20);
    
    //create box sprite and give velocity
    box = createSprite(775,300,30,30);
    box.velocityX=-5
    box.shapeColor="Black";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounce(edges);
    



    //add condition to check if box touching surface and make it box
    if(keyDown===LEFT_ARROW){
        box.velocityX=-5
    }
    if(keyDown===RIGHT_ARROW){
        box.velocityX=+5
    }
    if(keyDown===DOWN_ARROW){
        box.velocityY=+5
    }
    if(keyDown===UP_ARROW){
        box.velocityX=-5
    }
    if(box.isTouching(Gsurface)){
        box.shapeColor="Green";
    }
    else{
        box.shapeColor="Black";
    }
    if(box.isTouching(Rsurface)){
        box.shapeColor="Red";
    }
    else{
        box.shapeColor="Black";
    }
    if(box.isTouching(Bsurface)){
        box.shapeColor="Blue";
    }
    else{
        box.shapeColor="Black";
    }
    if(box.isTouching(Ysurface)){
        box.shapeColor="Yellow";
    }
    else{
        box.shapeColor="Black";
    }
   
}
