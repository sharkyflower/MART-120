// x and y for player character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for enemy 1 
var enemyShape1X = 30;
var enemyShape1Y = 50;
var enemyShape1XSpeed;
var enemyShape1YSpeed;

// x and y for enemy 2
var enemyShape2X = 30;
var enemyShape2Y = 50;
var enemyShape2XSpeed = ((Math.floor(Math.random() * 10)) + 1);
var enemyShape2YSpeed = ((Math.floor(Math.random() * 10)) + 5);
var enemyShape2XVelocity = 0.25;
//var enemyShape2YVelocity = 0.25;

// bg color change [attempt to make it gradual] [from black to red to black]
var bgR = 0;
var bgRVelocity = 0; 
var bgVelocityChange = 0.01; 

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(bgR,0,0);
    bgR += bgRVelocity;
    bgRVelocity += bgVelocityChange;
    if(bgR < 0 || bgR >= 127){
        bgRVelocity *= -1;
    }

    stroke(0);
    fill(255);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //character
    fill(23,100,175);
    circle(characterX,characterY,25);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    // enemy 1 shape
    fill(13,145,14);
    circle(enemyShape1X, enemyShape1Y, 10);

     // get a random speed when the it first starts
     enemyShape1XSpeed = ((Math.floor(Math.random() * 10)) + 1);
     enemyShape1YSpeed = ((Math.floor(Math.random() * 10)) + 1);

    // move shape 1
    enemyShape1X += enemyShape1XSpeed;
    enemyShape1Y += enemyShape1YSpeed;
    // check to see if the shape 1 has gone out of bounds
    if(enemyShape1X > width)
    {
        enemyShape1X = 0;
    }
    else if(enemyShape1X < 0)
    {
        enemyShape1X = width;
    }
    else if(enemyShape1X >= 250 && enemyShape1Y <= 350){
        enemyShape1X += (enemyShape1XSpeed *= -5);
    }

    if(enemyShape1Y > height)
    {
        enemyShape1Y = 0;
    }
    else if(enemyShape1Y < 0)
    {
        enemyShape1Y = height;
    }
    else if(enemyShape1Y >= 250 && enemyShape1Y <= 350){
        enemyShape1Y += 30;
    }

    // enemy 2 shape 
    fill(13,232,185);
    circle(enemyShape2X, enemyShape2Y, 10);

    // move shape 2
    enemyShape2X += enemyShape2XSpeed;
    enemyShape2Y += enemyShape2YSpeed;

    // change speed of shape 2
    enemyShape2XSpeed -= enemyShape2XVelocity;
    //enemyShape2YSpeed -= enemyShape2YVelocity;

    // make shape 2 bounce 
    if(enemyShape2X >= width || enemyShape2X <= 0){
        enemyShape2XSpeed *= -1;
        enemyShape2XVelocity *= -1;
    }
    if(enemyShape2Y >= height || enemyShape2Y <= 0){
        enemyShape2YSpeed *= -1;
        enemyShape2XVelocity *= -1;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(255);
        stroke(5);
        textSize(26);
        text("yay you commit the win.", width/2-125, height/2-50);
    }

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */