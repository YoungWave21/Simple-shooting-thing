function oneplatformcollide(aPlatform) {
    leftedgeof1 = playerone.x;
    rightedgeof1 = playerone.x + playerone.w;
    if (leftedgeof1 <= aPlatform.x + aPlatform.w && leftedgeof1 >= aPlatform.x && rightedgeof1 <= aPlatform.x + aPlatform.w && rightedgeof1 >= aPlatform.x) {
        if (playerone.y + playerone.h >= aPlatform.y && playerone.y + playerone.h <= aPlatform.y + 17 && playerone.ys > 0 && playerone.stand) {
            playerone.y = aPlatform.y - 20;
            playerone.canJump = true;
            playerone.ys = 0;
            playerone.a = 0;
        }
    } else if (rightedgeof1 <= aPlatform.x || leftedgeof1 >= aPlatform.x + aPlatform.w) {
        playerone.a = ACCELERATION;
    }
}

function twoplatformcollide(aplatform) {
    leftedgeof2 = playertwo.x;
    rightedgeof2 = playertwo.x + playertwo.w;
    if (leftedgeof2 <= aplatform.x + aplatform.w && leftedgeof2 >= aplatform.x && rightedgeof2 <= aplatform.x + aplatform.w && rightedgeof2 >= aplatform.x) {
        if (playertwo.y + playertwo.h >= aplatform.y && playertwo.y + playertwo.h <= aplatform.y + 17 && playertwo.ys > 0 && playertwo.stand) {
            playertwo.y = aplatform.y - 20;
            playertwo.canJump = true;
            playertwo.ys = 0;
            playertwo.a = 0;
        }
    } else if (rightedgeof2 <= aplatform.x || leftedgeof2 >= aplatform.x + aplatform.w) {
        playertwo.a = ACCELERATION;
    }
}
function drawplatform() {
    ctx.fillStyle = "green";
    ctx.fillRect(platform.x, platform.y, platform.w, platform.h);
    ctx.fillRect(platform1.x, platform1.y, platform1.w, platform1.h);
    ctx.fillRect(platform2.x, platform2.y, platform2.w, platform2.h);
    ctx.fillRect(platform3.x, platform3.y, platform3.w, platform3.h);
    ctx.fillRect(platform4.x, platform4.y, platform4.w, platform4.h);
    ctx.fillRect(platform5.x, platform5.y, platform5.w, platform5.h);
    ctx.fillRect(platform6.x, platform6.y, platform6.w, platform6.h);
}
function platformcollisions() {
    oneplatformcollide(platform);
    twoplatformcollide(platform);
    oneplatformcollide(platform1);
    twoplatformcollide(platform1);
    oneplatformcollide(platform2);
    twoplatformcollide(platform2);
    oneplatformcollide(platform3);
    twoplatformcollide(platform3);
    oneplatformcollide(platform4);
    twoplatformcollide(platform4);
    oneplatformcollide(platform5);
    twoplatformcollide(platform5);
    oneplatformcollide(platform6);
    twoplatformcollide(platform6);
}