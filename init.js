let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let gravity = 2.5;


let ball = {
    x: canvas.width / 2,
    y: canvas.height / 1.2,
    radius: 35,
}

let basket = {
    x: canvas.width / 3.3,
    y: canvas.height / 5,
    width: canvas.width / 2.5,
    height: canvas.height / 5,
}
let cell = {
    x: canvas.width / 2,
    y: canvas.height / 2.8,
    radiusX: 46,
    radiusY: 6,
    rotation: Math.PI * 0,
    startAngle: 0,
    endAngle: Math.PI * 2,
}

let rect = {
    x: cell.x - 40,
    y: cell.y - 65,
    width: 80,
    height: 60,
}

let score = 0;
let drawing = (function() {
    return {

        drawBall: function() {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#FF4500';
            ctx.fill();
            ctx.closePath();
        },

        drawBasket: function() {

            ctx.beginPath();
            ctx.rect(basket.x, basket.y, basket.width, basket.height);
            ctx.fillStyle = '#4682B4';
            ctx.strokeStyle = '#FF4500';
            ctx.lineWidth = 10;
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        },
        drawCell: function() {
            ctx.beginPath();
            ctx.ellipse(cell.x, cell.y, cell.radiusX, cell.radiusY, cell.rotation, cell.startAngle, cell.endAngle);
            ctx.strokeStyle = '#FFAf00';
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.closePath();
        },
        drawRect: function() {
            ctx.beginPath();
            ctx.rect(rect.x, rect.y, rect.width, rect.height);
            ctx.strokeStyle = '#FF8C00';
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.closePath();
        },
        drawScore: function() {

            ctx.font = "20px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Score: " + score, 10, 30);
        },
        draw2X: function() {
            ctx.font = "40px Arial";
            ctx.fillStyle = "#FFAf00";
            ctx.fillText("2X", rect.x + rect.width / 5, rect.y + rect.height / 1.4);

        }

    }

})()


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawing.drawBasket();
    drawing.drawRect();
    drawing.drawCell();
    if (score >= 3) {
        drawing.draw2X();
    }
    drawing.drawScore();
    drawing.drawBall();
    move();

    isGoalCheck();


}

let interval = setInterval(draw, 10);
// checkCollision();