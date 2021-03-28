        // JavaScript код будем писать здесь
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        let isOnGround = true;
        let ballRadius = 25;
        let blocks = [];
        let dx = 4,
            dy = 2,
            gravity = 1.1;

        let bouncePos = {
            x: 50,
            y: 150
        }

        let keyPressed = {
            up: false,
            right: false,
            left: false,

        }

        function drawBall() {
            ctx.beginPath();
            ctx.arc(bouncePos.x, bouncePos.y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#FF4100";
            ctx.fill();
            ctx.closePath();
        }

        // function drawBlock();

        // function drawBlocks(blocks, ) {

        // }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();
            if (isOnGround === false) {
                bouncePos.y += gravity;
            }
            move();
        }
        let interval = setInterval(draw, 10);
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        function keyDownHandler(e) {

            if (e.keyCode == 37) {
                keyPressed.left = true;
            } else if (e.keyCode == 38) {
                keyPressed.up = true;
            } else if (e.keyCode == 39) {
                keyPressed.right = true;
            }
        }


        function keyUpHandler(e) {

            if (e.keyCode == 37) {
                keyPressed.left = false;
            } else if (e.keyCode == 38) {
                keyPressed.up = false;
            } else if (e.keyCode == 39) {
                keyPressed.right = false;
            }
        }



        function move() {
            if (keyPressed.left) {
                bouncePos.x -= dx;
            } else if (keyPressed.right) {
                bouncePos.x += dx;
            }
            if (keyPressed.up) {
                if (isOnGround === true) {
                    for (dy = 0; dy < 10; dy++)
                        bouncePos.y -= dy;
                    isOnGround = false;
                }
            } else if (bouncePos.y + dy > canvas.height - ballRadius) {
                alert("GAME OVER");
                document.location.reload();
                clearInterval(interval); // Needed for Chrome to end game
            }


        }