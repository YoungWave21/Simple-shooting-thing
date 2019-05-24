function moveplayeronehr() {
    if (KeyIsPressed["KeyD"] && freeze == false) {
        rightDude = document.getElementById("Right");
        framecount2++;
        playertwo.x += playertwo.xs;
        if (framecount2 % 7 == 0) {
            currentframe2 = ++currentframe2 % cols2;
            srcx2 = currentframe2 * playerimagewidth2;
            srcy2 = 0;
        }
    } else if (KeyIsPressed["KeyA"] && freeze == false) {
        framecount2++;
        rightDude = document.getElementById("runningleft");
        playertwo.x -= playertwo.xs;
        if (framecount2 % 7 == 0) {
            currentframe2 = ++currentframe2 % cols2;
            srcx2 = currentframe2 * playerimagewidth2;
            srcy2 = 0;
        }
    }
    if (KeyIsPressed["ArrowRight"] && freeze == false) {
        framecount1++;
        playerone.x += playerone.xs;
        // updateframe();
        if (framecount1 % 5 == 0) {
            currentframe1 = ++currentframe1 % cols1;
            srcx1 = currentframe1 * playerimagewidth1;
            srcy1 = 0;
        }
    } else if (KeyIsPressed["ArrowLeft"] && freeze == false) {
        framecount1++;
        playerone.x -= playerone.xs;
        if (framecount1 % 5 == 0) {
            currentframe1 = ++currentframe1 % cols1;
            srcx1 = currentframe1 * playerimagewidth1;
            srcy1 = sheetheight1 / 2;
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