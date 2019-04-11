initGraphics(800, 533);

document.addEventListener("keydown", (event) => {
    // console.log(event.code);
    if (KeyIsPressed["KeyX"] && oneshoot) {
        bulletone.push([playerone.x, directionOne]);
        oneshoot = false;
        setTimeout(() => {
            oneshoot = true;
        }, 100);
        playeroneY.push(playerone.y + 10);
    }
    if (KeyIsPressed["Space"] && twoshoot) {
        bullettwo.push([playertwo.x, directionTwo]);
        twoshoot = false;
        setTimeout(() => {
            twoshoot = true;
        }, 100);
        playertwoY.push(playertwo.y + 10);
    }
    if (event.code == "ArrowLeft") {
        directionOne = "left"
    }
    if (event.code == "ArrowRight") {
        directionOne = "right";
    }
    if (event.code == "KeyA") {
        directionTwo = "left"
    }
    if (event.code == "KeyD") {
        directionTwo = "right";
    }
});
requestAnimationFrame(main);

function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "black";
    for (let i = 0; i < bulletone.length; i++) {
        ONEmove(i);
        if (bulletone.length > 10) {
            bulletone.shift();
            playeroneY.shift();
        }
        console.log(playeroneY);
        ctx.fillRect(bulletone[i][0], playeroneY[i], 20, 3);
    }
    ctx.fillStyle = "red";
    for (let i = 0; i < bullettwo.length; i++) {
        TWOmove(i);
        if (bullettwo.length > 10) {
            bullettwo.shift();
            playertwoY.shift();
        }
        ctx.fillRect(bullettwo[i][0], playertwoY[i], 20, 3);
    }
    drawplayer("black", playerone.x, playerone.y);
    drawplayer("red", playertwo.x, playertwo.y);
    moveplayeronehr();
    moveplayeronevrt();
    moveplayertwohr();
    moveplayertwovrt();
    requestAnimationFrame(main);
};

function ONEmove(i) {
    if (bulletone[i][1] == "right") {
        bulletone[i][0] += 11;
    } else if (bulletone[i][1] == "left") {
        bulletone[i][0] -= 11;
    }
};
function TWOmove(i) {
    if (bullettwo[i][1] == "right") {
        bullettwo[i][0] += 11;
    } else if (bullettwo[i][1] == "left") {
        bullettwo[i][0] -= 11;
    }
}

function moveplayeronehr() {
    if (KeyIsPressed["ArrowRight"]) {
        playerone.x += playerone.xs;
        if (playerone.x + playerone.w + 2 > cnv.width) {
            playerone.x = cnv.width - playerone.w - 2;
        }
    } else if (KeyIsPressed["ArrowLeft"]) {
        playerone.x -= playerone.xs;
        if (playerone.x < 2) {
            playerone.x = 2;
        }
    }
}
function moveplayeronevrt() {
    playerone.y += playerone.ys;
    playerone.ys += playerone.a;
    if (KeyIsPressed["ArrowUp"] && playerone.canJump) {
        playerone.ys = -15;
        playerone.canJump = false;
    }
    if (playerone.y + playerone.h + 2 > cnv.height) {
        playerone.canJump = true;
        playerone.y = cnv.height - playerone.h - 2;
    }
}


function moveplayertwohr() {
    if (KeyIsPressed["KeyD"]) {
        playertwo.x += playertwo.xs;
        if (playertwo.x + playertwo.w + 2 > cnv.width) {
            playertwo.x = cnv.width - playertwo.w - 2;
        }
    } else if (KeyIsPressed["KeyA"]) {
        playertwo.x -= playertwo.xs;
        if (playertwo.x < 2) {
            playertwo.x = 2;
        }
    }
}
function moveplayertwovrt() {
    playertwo.y += playertwo.ys;
    playertwo.ys += playertwo.a;
    if (KeyIsPressed["KeyW"] && playertwo.canJump) {
        playertwo.ys = -15;
        playertwo.canJump = false;
    }
    if (playertwo.y + playertwo.h + 2 > cnv.height) {
        playertwo.canJump = true;
        playertwo.y = cnv.height - playertwo.h - 2;
    }
}

function drawplayer(color, thisx, thisy) {
    ctx.fillStyle = color;
    ctx.fillRect(thisx, thisy, 20, 20);
}