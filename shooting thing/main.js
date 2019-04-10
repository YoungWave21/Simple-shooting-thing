initGraphics(800, 533);

document.addEventListener("keydown", (event) => {
    // console.log(event.code);
    if (KeyIsPressed["ShiftRight"] && oneshoot) {
        bulletone.push(playerone.x);
        oneshoot = false;
        setTimeout(() => {
            oneshoot = true;
        }, 100);
        playeroneY.push(playerone.y + 10);
    }
    if (KeyIsPressed["Space"] && twoshoot) {
        bullettwo.push(playertwo.x);
        twoshoot = false;
        setTimeout(() => {
            twoshoot = true;
        }, 100);
        playertwoY.push(-(playertwo.y + 10));
    }
    if (event.code == "KeyA") {
        direction = "left";
    }
    if (event.code == "KeyD") {
        direction = "right";
    }
});
requestAnimationFrame(main);

function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "black";
    for (let i = 0; i < bulletone.length; i++) {
        ONEmove(i);
        if (bulletone[i] + 20 > cnv.width) {
            bulletone.shift();
            playeroneY.shift();
        }
        ctx.fillRect(bulletone[i], playeroneY[i], 20, 3);
    }
    for (let i = 0; i < bullettwo.length; i++) {
        TWOmove(i);
        if (bullettwo[i] < -20) {
            bullettwo.shift();
            playertwoY.shift();
            // playerKey.twoleft = false;
        }
        ctx.fillStyle = "red";
        ctx.fillRect(bullettwo[i], playertwoY[i], 20, 3);
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
    bulletone[i] += 11;
};
function TWOmove(i) {
    // console.log(bullettwo[i]);
    if (direction = "left") {
        bullettwo[i] -= 11;
    } else if (direction = "right") {
        bullettwo[i] += 11;
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