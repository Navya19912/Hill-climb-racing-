var playerimg, player;
var logo, logoimg;
var restart, restartimg;
var start, startimg;
var gameover, gameoverimg;
var bg1, bg1img;
var bat, batimg;
var bomb, bombimg;
var hurdles, hurdlesimg;
var landMonster, landMonsterimg;
var redspikes, redspikesimg;
var skeleton, skeletonimg;
var snail, snailimg;
var snake, snakeimg;
var spikeRoller,spikeRollerimg;

function preload (){
    playerimg=loadAnimation("player1A.png","player1B.png");
    logoimg=loadImage("logo1.png");
    restartimg=loadImage("restart.png");
    startimg=loadImage("start.png");
    gameoverimg=loadImage("gameover.png")
    bg1img=loadImage("bg1.jpg");
    bombimg=loadImage("bomb.gif");
    hurdlesimg=loadImage("hurdles.png");
    landMonster=loadImage("landMonster.gif");
    redspikes=loadImage("redspikes.png");
    skeletonimg=loadImage("skeleton.gif");
    snailimg=loadImage("snail.gif");
    snakeimg=loadImage("snake.png");
    spikeRoller=loadImage("spikeRoller.gif");
    bat=loadImage("bat.gif");
}

 function setup(){
     createCanvas(windowWidth,windowHeight)
    bg1=createSprite(0,0,windowWidth,windowHeight);
     bg1.addImage(bg1img);
     bg1.scale=2;

 }
function  draw(){
    drawSprites();
}