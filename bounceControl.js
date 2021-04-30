let keyPressed = {
    right: false,
    left: false
}
let isFalling = false;
let startx, endx, starty, endy;
let goal = false;
let rightMove = true;
let dx = 3,
    dy = -4;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// document.addEventListener("mousemove", mouseMoveHandler, false);
// document.addEventListener("mousedown", mouseDownHandler, false);
document.addEventListener("mousedown", mouseDownHandler, false);
document.addEventListener("mouseup", mouseUpHandler, false);
// ball.zIndex = 1000;

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        keyPressed.right = true;
    } else if (e.keyCode == 37) {
        keyPressed.left = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        keyPressed.right = false;
    } else if (e.keyCode == 37) {
        keyPressed.left = false;
    }
}

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    let relativeY = e.clientY - canvas.offsetTop;
    if (relativeX > 150 && relativeX < canvas.width - 150 && relativeY > canvas.height / 1.5 && relativeY < canvas.height - 100) {
        ball.x = relativeX;
        ball.y = relativeY;
    }
}

function mouseDownHandler(e) {

    let shiftX = e.pageX - ball.x;
    let shiftY = e.pageY - ball.y;


    moveAt(e);
    // 
    function moveAt(e) {
        ball.x = e.clientX - shiftX;
        ball.y = e.clientY - shiftY;
    }


    document.onmousemove = function(e) {
        moveAt(e);
    }


}

function mouseUpHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    let relativeY = e.clientY - canvas.offsetTop;
    ball.x = relativeX;
    ball.y = relativeY;
    document.onmousemove = null;
}

function move() {
    let dir = calcDirection();
    if (ball.y - ball.radius <= canvas.height / 1.5) {
        if (!isFalling) {
            ball.y += dy;
            ball.x += dir;
            // ball.x += dx;
            isFalling == false;
            isFallCheck();

        } else {
            ball.y += gravity;
            isFallCheck();
        }
    }
}


function isFallCheck() {
    if (ball.y - ball.radius <= 50) {
        isFalling = true;
    } else if (ball.y - ball.radius > canvas.height / 1.5) {
        isFalling = false;
        ball.y = canvas.height / 1.2;
    }

}

function isGoalCheck() {

    if (isFalling) {

        if (ball.x - ball.radius > cell.x - cell.radiusX && ball.x + ball.radius < cell.x + cell.radiusX && ball.y >= cell.y - 1 && ball.y <= cell.y + 1) {
            if (score < 3) {
                score++;
            } else if (score >= 3) {
                score += 2;
            }
            goal = true;
        }
        if (goal === false && ball.y - ball.radius > cell.y + 30) {
            alert("Game Over\nYour score = " + score);
            document.location.reload();
            clearInterval(interval);
        }
    } else goal = false;
}


function calcDirection() {
    let direction;
    if (ball.y - ball.radius >= (canvas.height / 1.5) + 45 && ball.y - ball.radius <= (canvas.height / 1.5) + 50) {
        startx = ball.x;
        console.log(startx + 'ХХХХХХХХХХХХХХХХХХХХХХХХХХХХ');
    }
    if (ball.y - ball.radius >= canvas.height / 1.5 && ball.y - ball.radius <= canvas.height / 1.5 + 3) {
        endx = ball.x;
        console.log(endx + 'EEEEEEEEEEEEEEEEEEEEEEE');
    }
    direction = (endx - startx) / 20;
    // console.log(direction);
    return direction;
}

function moveBasket(dx, dy) {
    basket.x += dx;
    cell.x += dx;
    rect.x += dx;
    basket.y += dy;
    cell.y += dy;
    rect.y += dy;

}

function moveBasketDir() {
    if (rightMove == true && basket.x + basket.width <= canvas.width - 50) {
        moveBasket(0.2, 0);
    } else if (basket.x + basket.width >= canvas.width - 50) {
        rightMove = false;
    }
    if (rightMove == false && basket.x >= 50) {
        moveBasket(-0.2, 0);
    } else if (basket.x < 50) {
        rightMove = true;
    }
}