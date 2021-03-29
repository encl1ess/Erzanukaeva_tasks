let keyPressed = {
    right: false,
    left: false
}
let isFalling = false;

let goal = false;
let dx = 3,
    dy = -4;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);


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

function move() {


    if (ball.y - ball.radius <= canvas.height / 1.5) {
        if (!isFalling) {
            ball.y += dy;
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
            alert("Game Over");
            document.location.reload();
            clearInterval(interval);
        }
    } else goal = false;
}