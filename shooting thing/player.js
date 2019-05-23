function moveplayeronehr() {
    if (KeyIsPressed["KeyD"] && freeze == false) {
        playertwo.x += playertwo.xs;
    } else if (KeyIsPressed["KeyA"] && freeze == false) {
        playertwo.x -= playertwo.xs;
    }
    if (KeyIsPressed["ArrowRight"] && freeze == false) {
        framecount++;
        playerone.x += playerone.xs;
        // updateframe();
        if (framecount % 5 == 0) {
            currentframe = ++currentframe % cols;
            srcx = currentframe * playerimagewidth;
            srcy = 0;
        }
    } else if (KeyIsPressed["ArrowLeft"] && freeze == false) {
        framecount++;
        playerone.x -= playerone.xs;
        if (framecount % 5 == 0) {
            currentframe = ++currentframe % cols;
            srcx = currentframe * playerimagewidth;
            srcy = sheetheight / 2;
        }
    }
}
function moveplayeronevrt() {
    playerone.y += playerone.ys;
    playerone.ys += playerone.a;
    if (KeyIsPressed["ArrowUp"] && playerone.canJump && freeze == false) {
        playerone.ys = JUMP;
        playerone.canJump = false;
        playerone.a = ACCELERATION;
    }
    if (playerone.y + playerone.h > cnv.height && freeze == false) {
        playerdeathconfirmation1();
    }
    playertwo.y += playertwo.ys;
    playertwo.ys += playertwo.a;
    if (KeyIsPressed["KeyW"] && playertwo.canJump && freeze == false) {
        playertwo.ys = JUMP;
        playertwo.canJump = false;
        playertwo.a = ACCELERATION;
    }
    if (playertwo.y + playertwo.h > cnv.height && freeze == false) {
        playerdeathconfirmation2();
    }
}

function drawplayer(color, thisx, thisy) {
    ctx.fillStyle = color;
    ctx.fillRect(thisx, thisy, 20, 20);
}