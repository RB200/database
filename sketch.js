var ball;
var database, position
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    var reference = database.ref("ball/positions")
    reference.on("value",readOp,err)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
database.ref("ball/positions").set({
    x: ball.x +x,
    y: ball.y +y
})
}
function readOp(data){
    position=data.val()
    ball.x = position.x
    ball.y = position.y
}
function err(){
    console.log("error")
}

