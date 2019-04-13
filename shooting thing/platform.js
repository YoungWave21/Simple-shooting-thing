function oneplatformcollide(aPlatform) {
    leftedgeof1 = playerone.x;
    rightedgeof1 = playerone.x + playerone.w;
    if (leftedgeof1 <= aPlatform.x + aPlatform.w && leftedgeof1 >= aPlatform.x && rightedgeof1 <= aPlatform.x + aPlatform.w && rightedgeof1 >= aPlatform.x) {
        if (playerone.y + playerone.h > aPlatform.y && playerone.y + playerone.h < aPlatform.y + 10 && playerone.ys > 0) {
            playerone.y = aPlatform.y - 20;
            playerone.canJump = true;
            playerone.ys = 0;
            playerone.a = 0;
        }
    } else if (rightedgeof1 < aPlatform.x || leftedgeof1 > aPlatform.x + aPlatform.w) {
        playerone.a = 0.7;
    }
}

function twoplatformcollide(aplatform) {
    leftedgeof2 = playertwo.x;
    rightedgeof2 = playertwo.x + playertwo.w;
    if (leftedgeof2 <= aplatform.x + aplatform.w && leftedgeof2 >= aplatform.x && rightedgeof2 <= aplatform.x + aplatform.w && rightedgeof2 >= aplatform.x) {
        if (playertwo.y + playertwo.h > aplatform.y && playertwo.y + playertwo.h < aplatform.y + 10 && playertwo.ys > 0) {
            playertwo.y = aplatform.y - 20;
            playertwo.canJump = true;
            playertwo.ys = 0;
            playertwo.a = 0;
        }
    } else if (rightedgeof2 < aplatform.x || leftedgeof2 > aplatform.x + aplatform.w) {
        playertwo.a = 0.7;
    }
}