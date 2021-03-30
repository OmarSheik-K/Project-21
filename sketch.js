var canvas;
var block1, block2, block3, block4;
var edges, ball;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(102,198,24);

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(255,178,102);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(204,153,255);

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(227,168,67);

    ball = createSprite(Math.random(20, 750),100, 40, 40);
    ball.shapeColor = rgb(255, 255, 255);
    ball.velocityX = random(7, 14);
    ball.velocityY = 12;

}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    //you need to click before for the sound to play

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = block1.shapeColor;
        music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = block2.shapeColor;
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = block3.shapeColor;
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
