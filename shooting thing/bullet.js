function bulletloopsone() {
    ctx.fillStyle = "black";
    for (let i = 0; i < bulletone.length; i++) {
        ONEmove(i);
        if (bulletone.length > 10) {
            bulletone.shift();
            playeroneY.shift();
        }
        ctx.fillRect(bulletone[i][0], playeroneY[i], 20, 3);
        if (bulletone[i][0] >= playertwo.x && bulletone[i][0] <= playertwo.x + 20) {
            if (playeroneY[i] >= playertwo.y && playeroneY[i] <= playertwo.y + 20) {
                if (bulletone[i][1] == "right") {
                    for (let z = 0; z < 10; z++) {
                        playertwo.x += playertwo.xs;
                    }
                } else if (bulletone[i][1] == "left") {
                    for (let z = 0; z < 10; z++) {
                        playertwo.x -= playertwo.xs;
                    }
                }
                bulletone.shift();
                playeroneY.shift();
            }
        }
    }
}
function bulletloopstwo() {
    ctx.fillStyle = "red";
    for (let i = 0; i < bullettwo.length; i++) {
        TWOmove(i);
        if (bullettwo.length > 10) {
            bullettwo.shift();
            playertwoY.shift();
        }
        ctx.fillRect(bullettwo[i][0], playertwoY[i], 20, 3);
        if (bullettwo[i][0] >= playerone.x && bullettwo[i][0] <= playerone.x + 20) {
            if (playertwoY[i] >= playerone.y && playertwoY[i] <= playerone.y + 20) {
                if (bullettwo[i][1] == "right") {
                    for (let z = 0; z < 10; z++) {
                        playerone.x += playerone.xs;
                    }
                } else if (bullettwo[i][1] == "left") {
                    for (let z = 0; z < 10; z++) {
                        playerone.x -= playerone.xs;
                    }
                }
                bullettwo.shift();
                playertwoY.shift();
            }
        }
    }
}
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