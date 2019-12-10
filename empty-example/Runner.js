var snake;
var food;
var firstTime = true;
var health = true;
var x = -100;
var x1 = -100;

function setup() {
    createCanvas(500,500);
    frameRate(8);
    snake = new Snake();
    food = new Food();
}

function draw() {
    background(0);
    
    // First time intro
    if(firstTime){
        strokeWeight(0);
        fill(255);
        textSize(25);
        text('S N A K E',x,230);
        if(x < 180){
            x+=20;
        }
        else{
            text('Developed by HARRY',x1,270);
            if(x1 < 110){
                x1+=20;
            }
        }
        
        if (keyIsPressed === true){
            firstTime =false;
        }
    }
    
    // If alive
    else if(health){
    
        // Creating snake
        snake.create();

        // Creting food
        food.create(food.x,food.y);

        // Functions
        death();
        foodEated();
        snakeMovement();
        
    }
    
    // If dead
    
    else{
        strokeWeight(0);
        fill(255);
        textSize(25);
        text('G A M E   O V E R',135,200);
        text('S C O R E   :   '+snake.arrX.length,140,300);
    }
}

function snakeMovement() {
    if (keyCode === UP_ARROW){
        if (snake.arrY[0] > -10){
            snake.updateLength(snake.arrX[0],snake.arrY[0]-snake.speed);
        }
    }
    else if (keyCode === DOWN_ARROW){
        if (snake.arrY[0] < height){
            snake.updateLength(snake.arrX[0],snake.arrY[0]+snake.speed);
        }
    }
    else if (keyCode === RIGHT_ARROW){
        if (snake.arrX[0] < width){
            snake.updateLength(snake.arrX[0]+snake.speed,snake.arrY[0]);
        }
    }
    else if (keyCode === LEFT_ARROW){
        if (snake.arrX[0] > -10){
            snake.updateLength(snake.arrX[0]-snake.speed,snake.arrY[0]);
        }
    }
}

function foodEated() {
    var d = int(dist(food.x, food.y, snake.arrX[0], snake.arrY[0]));
    if(d < 10){
        snake.eated(food.x,food.y);
        food.create(random()*490,random()*490);
    }
}

function death(){
    if(snake.arrX[0] >= width || snake.arrX[0] < 0 || snake.arrY[0] < 0 || snake.arrY[0] >= height){
        health = false;
    }
}