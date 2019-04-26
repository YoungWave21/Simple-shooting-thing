function moveplayeronehr() {
    if (KeyIsPressed["KeyD"]) {
        playertwo.x += playertwo.xs;
    } else if (KeyIsPressed["KeyA"]) {
        playertwo.x -= playertwo.xs;
    }
    if (KeyIsPressed["ArrowRight"]) {
        playerone.x += playerone.xs;
    } else if (KeyIsPressed["ArrowLeft"]) {
        playerone.x -= playerone.xs;
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
        playerdeathconfirmation1();
    }
    playertwo.y += playertwo.ys;
    playertwo.ys += playertwo.a;
    if (KeyIsPressed["KeyW"] && playertwo.canJump) {
        playertwo.ys = JUMP;
        playertwo.canJump = false;
        playertwo.a = ACCELERATION;
    }
    if (playertwo.y + playertwo.h > cnv.height) {
        playerdeathconfirmation2();
    }
}

function drawplayer(color, thisx, thisy) {
    ctx.fillStyle = color;
    ctx.fillRect(thisx, thisy, 20, 20);
}