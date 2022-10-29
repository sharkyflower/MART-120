function setup(){
    createCanvas(500,600);
}

function draw()
{
    background(255,255,255);
    textSize(22)
    text("Hi.", 20,80);

    // head
    fill(128,128,128);
    circle(250,100,175);
   
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
    rect(200,185,100,150);
    
    // decoration
    strokeWeight(5);
    ///triangle(220,320,250,220,280,320)
    circle(250,265,65);
    line(285,230,215,310);

    // right arm
    strokeWeight(10);

    fill(10, 24, 120);
    line(300,195,350,250);
    // left arm
    line(200,195,150,250);
    // left leg
    rect(205,335,5,50);
    // right leg
    rect(290,335,5,50);
    
    fill(120);
    textSize(22);
    textFont("Helvetica")
    text("Luc",450,500);


}