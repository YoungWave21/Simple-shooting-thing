initGraphics(800, 533);

document.addEventListener("keydown", () => {
    // console.log(event.code);
    if (KeyIsPressed["KeyX"] && oneshoot) {
        bulletone.push(playerone.x);
        oneshoot = false;
        setTimeout(() => {
            oneshoot = true;
        }, 100);
        playeroneY.push(playerone.y + 10);
    }
});
requestAnimationFrame(main);

function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "black";
    for (let i = 0; i < bulletone.length; i++) {
        move(i);
        if (bulletone[i] + 20 > cnv.width) {
            bulletone.shift();
            playeroneY.shift();
        }
        ctx.fillRect(bulletone[i], playeroneY[i], 20, 3);
    };

    drawplayer("black", playerone.x, playerone.y);
    drawplayer("red", playertwo.x, playertwo.y);
    moveplayeronehr();
    moveplayeronevrt();
    moveplayertwohr();
    moveplayertwovrt();
    requestAnimationFrame(main);
};

function move(i) {
    bulletone[i] += 11;
};

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