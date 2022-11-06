var isSpacePressed = false;

var leftEdgeX = 82;
var rightEdgeX = 418;
var topEdgeY = 82;
var bottomEdgeY = 450;

var headX = 250;
var headY = 100;
var headDisplaceX = newRandNum();
var headDisplaceY = newRandNum(); 

var bodyX = 200;
var bodyY = 185;
var bodyDisplaceX = newRandNum();
var bodyDisplaceY = newRandNum(); 

var decoCircleX = 250;
var decoCircleDisplaceX = 5;

var legY = 335;
var legDisplaceY = 5;

var textSizeNum = 22;
var sizeDisplace = 2;
var textCount = 0;
var textX = 430;
var textY = 500;
var textDisplace = -2;
var textSwitch = 1;

function setup(){
    createCanvas(500,600);
}

function draw()
{
    background(255,255,255);
    textSize(textSizeNum)
    text("Hi.", 20,80);

    // head
    fill(128,128,128);
    circle(headX,headY,175);
    if(isSpacePressed == true){
        headX+=headDisplaceX;
        headY+=headDisplaceY;
        if(headX <= leftEdgeX){
            headDisplaceX = newRandNum();
        }
        if(headX >= rightEdgeX){
            headDisplaceX = newRandNum() * -1;
        }
        if(headY <= topEdgeY){
            headDisplaceY = newRandNum();
        }
        if(headY >= bottomEdgeY){
            headDisplaceY = newRandNum() * -1;
        } 
    }
   
    // eyes
    strokeWeight(10);
    fill(0);
    line(200, 75, 210, 75);
    line(285, 75, 295, 75);
    
    // mouth
    point(245, 135);
    line(200, 135, 290, 135);
    
    //fang
    strokeWeight(2);
    fill(255);
    triangle(270,140,275,150,280,140);

    // body
    strokeWeight(10);
    fill("crimson");
    rect(bodyX,bodyY,100,150);
    if(isSpacePressed == true){
        bodyX+=bodyDisplaceX;
        bodyY+=bodyDisplaceY;
        if(bodyX <= leftEdgeX){
            bodyDisplaceX = newRandNum();
        }
        if(bodyX >= rightEdgeX){
            bodyDisplaceX = newRandNum() * -1;
        }
        if(bodyY <= topEdgeY){
            bodyDisplaceY = newRandNum();
        }
        if(bodyY >= bottomEdgeY){
            bodyDisplaceY = newRandNum() * -1;
        } 
    }
    
    // decoration
    strokeWeight(5);
    ///triangle(220,320,250,220,280,320)
    circle(decoCircleX,265,65);
    line(285,230,215,310);

    if(isSpacePressed == true){
        decoCircleX += decoCircleDisplaceX;
        if(decoCircleX >= rightEdgeX || decoCircleX <= leftEdgeX){
            decoCircleDisplaceX *= -1;
        }
    }

    // right arm
    strokeWeight(10);

    fill(10, 24, 120);
    line(300,195,350,250);
    // left arm
    line(200,195,150,250);
    // left leg
    rect(205,legY,5,50);
    // right leg
    rect(290,legY,5,50);

    if(isSpacePressed == true){
        legY += legDisplaceY;
        if(legY >= bottomEdgeY || legY <= topEdgeY){
            legDisplaceY *= -1;
        }
    }
    
    fill(120);
    textSize(textSizeNum);
    textFont("Helvetica");
    if(isSpacePressed){
        textSizeNum += sizeDisplace;
        textCount++;
        if(textCount > 5){
            sizeDisplace *= -1;
            textCount = 0;
        }
    }
    text("Luc",textX,textY);
    if(isSpacePressed){
        if(textSwitch==1){
            textY += textDisplace;
            if(textY <= 450){
                textSwitch = 2;
            }
        }
        if(textSwitch==2){
            textX += textDisplace;
            if(textX <= 370){
                textDisplace *= -1;
                textSwitch = 3;
            }
        }
        if(textSwitch==3){
            textY += textDisplace;
            if(textY >= 500){
                textSwitch = 4;
            }
        }
        if(textSwitch==4){
            textX += textDisplace;
            if(textX >= 430){
                textDisplace *= -1;
                textSwitch = 1;
            }
        }
    }

    textSize(20);
    //text("Press spacebar... ;)", 50, 500);
    text("X: " + mouseX,50,500 );
    text("Y: " + mouseY,50,520 );
} 

document.addEventListener("keyup",event => {
    if(event.code === 'Space'){
        isSpacePressed = true;
    }
})

function newRandNum(){
    return Math.floor((Math.random()*10)+3);
}