function moveplayeronehr() {
    if (KeyIsPressed["KeyD"]) {
        playertwo.x += playertwo.xs;
        if (playertwo.x + playertwo.w > cnv.width) {
            playertwo.x = cnv.width - playertwo.w;
        }
    } else if (KeyIsPressed["KeyA"]) {
        playertwo.x -= playertwo.xs;
        if (playertwo.x < 2) {
            playertwo.x = 2;
        }
    }
    if (KeyIsPressed["ArrowRight"]) {
        playerone.x += playerone.xs;
        if (playerone.x + playerone.w > cnv.width) {
            playerone.x = cnv.width - playerone.w;
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
        playerone.ys = JUMP;
        playerone.canJump = false;
        playerone.a = ACCELERATION;
    }
    if (playerone.y + playerone.h > cnv.height) {
        playerone.canJump = true;
        playerone.y = cnv.height - playerone.h;
    }
    playertwo.y += playertwo.ys;
    playertwo.ys += playertwo.a;
    if (KeyIsPressed["KeyW"] && playertwo.canJump) {
        playertwo.ys = JUMP;
        playertwo.canJump = false;
        playertwo.a = ACCELERATION;
    }
    if (playertwo.y + playertwo.h > cnv.height) {
        playertwo.canJump = true;
        playertwo.y = cnv.height - playertwo.h;
    }
}

function drawplayer(color, thisx, thisy) {
    ctx.fillStyle = color;
    ctx.fillRect(thisx, thisy, 20, 20);
}